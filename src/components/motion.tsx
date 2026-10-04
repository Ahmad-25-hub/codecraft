"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const desktopMotion = "(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)";

export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    let mounted = true;

    media.add("(prefers-reduced-motion: no-preference)", () => {
      // Entry animates inner elements; the scroll timelines own their wrappers.
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".navigation", { y: -20, opacity: 0, duration: .7 })
        .from(".hero-meta", { opacity: 0, duration: .7 }, .15)
        .from(".hero-line > span", { yPercent: 110, duration: 1.35, stagger: .12 }, .3)
        .from(".hero-art", { scale: 1.12, opacity: 0, duration: 1.6 }, .2)
        .from(".hero-bottom, .hero-aside, .hero-edition", { y: 20, opacity: 0, duration: .85, stagger: .08 }, 1);

      gsap.fromTo(".approach-strip", { xPercent: 4 }, {
        xPercent: -18, ease: "none",
        scrollTrigger: { trigger: ".approach", start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.from(".contact h2 > span", {
        xPercent: (index) => index === 1 ? 10 : -7,
        stagger: .08, ease: "none",
        scrollTrigger: { trigger: ".contact", start: "top 90%", end: "top 12%", scrub: 1 },
      });
    });

    media.add(desktopMotion, () => {
      const hero = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: ".hero", start: "top top", end: () => `+=${window.innerHeight * .85}`, pin: ".hero-scene", scrub: 1, invalidateOnRefresh: true },
      });
      hero.to(".hero-line:nth-child(1)", { xPercent: -65, opacity: 0 }, 0)
        .to(".hero-line:nth-child(2)", { xPercent: 65, opacity: 0 }, 0)
        .to(".hero-line:nth-child(3)", { xPercent: -40, opacity: 0 }, 0)
        .to(".hero-aside, .hero-bottom, .hero-edition, .hero-meta", { opacity: 0, duration: .25 }, 0)
        .to(".hero-art picture", { scale: 1.65, rotation: -9, xPercent: -12, yPercent: 5 }, 0)
        .to(".hero-scroll-line span", { scaleX: 1 }, 0);

      const lines = gsap.utils.toArray<HTMLElement>(".statement-line > span");
      gsap.set(lines, {
        backgroundImage: "linear-gradient(90deg, #f5f3ef 50%, #777777 50%)",
        backgroundSize: "200% 100%", backgroundPosition: "100% 0%",
        backgroundClip: "text", color: "transparent",
      });
      const statement = gsap.timeline({
        scrollTrigger: { trigger: ".studio-statement", start: "top 70px", end: () => `+=${window.innerHeight * .8}`, pin: ".statement-scene", scrub: .6, invalidateOnRefresh: true },
      });
      statement.to(lines, { backgroundPosition: "0% 0%", ease: "none", duration: 1, stagger: .55 })
        .fromTo(".statement-line i", { rotation: -45, scale: .65 }, { rotation: 0, scale: 1, duration: 2, ease: "none" }, 0)
        .fromTo(".statement-rule", { scaleX: 0 }, { scaleX: 1, duration: 2.65, ease: "none" }, 0);

      const rail = document.querySelector<HTMLElement>(".project-rail");
      const viewport = document.querySelector<HTMLElement>(".work-viewport");
      const links = gsap.utils.toArray<HTMLAnchorElement>("[data-project-jump]");
      if (!rail || !viewport) return;
      const distance = () => Math.max(0, rail.scrollWidth - viewport.clientWidth);
      const gallery = gsap.to(rail, {
        x: () => -distance(), ease: "none",
        scrollTrigger: {
          id: "work-sequence", trigger: ".work-stage", start: "top 70px",
          end: () => `+=${distance()}`, pin: true, scrub: .8, invalidateOnRefresh: true,
          onUpdate: (self) => {
            const current = Math.min(3, Math.round(self.progress * 3));
            links.forEach((link, index) => link.setAttribute("aria-current", String(index === current)));
            gsap.set(".work-progress span", { scaleX: self.progress });
          },
        },
      });
      // Native anchors remain the fallback for touch, reduced motion and no JS.
      const jump = (index: number, smooth: boolean) => {
        const trigger = gallery.scrollTrigger;
        if (!trigger) return;
        const item = rail.querySelector<HTMLElement>(`[data-project-index="${index}"]`);
        const first = rail.querySelector<HTMLElement>("[data-project-index]");
        const progress = Math.min(1, ((item?.offsetLeft ?? 0) - (first?.offsetLeft ?? 0)) / distance());
        window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * progress, behavior: smooth ? "smooth" : "instant" });
        if (!smooth) { ScrollTrigger.update(); gallery.progress(progress); }
      };
      const onJump = (event: MouseEvent) => {
        const target = (event.target as Element).closest<HTMLAnchorElement>("[data-project-jump]");
        if (!target) return;
        event.preventDefault();
        jump(Number(target.dataset.projectJump), true);
      };
      const onFocus = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        const item = target.closest<HTMLElement>("[data-project-index]");
        if (!item || !target.matches(":focus-visible")) return;
        // Prevent a transformed rail from stranding keyboard focus off-screen.
        viewport.scrollLeft = 0;
        jump(Number(item.dataset.projectIndex), false);
      };
      const onHash = () => {
        const item = document.getElementById(window.location.hash.slice(1));
        if (item?.dataset.projectIndex) jump(Number(item.dataset.projectIndex), false);
      };
      links.forEach(link => link.addEventListener("click", onJump));
      rail.addEventListener("focusin", onFocus);
      window.addEventListener("hashchange", onHash);
      gsap.from(".approach-word", {
        xPercent: (index) => index === 1 ? 9 : -9,
        stagger: .12, ease: "none",
        scrollTrigger: { trigger: ".approach", start: "top bottom", end: "top 10%", scrub: 1 },
      });
      return () => {
        links.forEach(link => { link.removeEventListener("click", onJump); link.removeAttribute("aria-current"); });
        rail.removeEventListener("focusin", onFocus);
        window.removeEventListener("hashchange", onHash);
      };
    });

    media.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      // Short, unpinned movements retain native touch scrolling.
      gsap.to(".hero-art picture", {
        yPercent: 12, rotation: -5, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .5 },
      });
      gsap.utils.toArray<HTMLElement>(".statement-line").forEach(line => {
        gsap.fromTo(line, { color: "#777" }, { color: "#f5f3ef", scrollTrigger: { trigger: line, start: "top 85%", end: "top 50%", scrub: true } });
      });
    });

    document.fonts.ready.then(() => { if (mounted) ScrollTrigger.refresh(); });
    return () => { mounted = false; media.revert(); };
  }, []);
  return null;
}
