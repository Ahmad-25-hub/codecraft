"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const desktopMotion =
  "(min-width: 1024px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)";

export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    let mounted = true;

    media.add("(prefers-reduced-motion: no-preference)", () => {
      // Entry animates inner elements; the scroll timelines own their wrappers.
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".navigation", { y: -20, opacity: 0, duration: 0.7 })
        .from(
          ".hero-meta > span",
          { opacity: 0, duration: 0.7, clearProps: "opacity" },
          0.15,
        )
        .from(
          ".hero-line > span",
          { yPercent: 110, duration: 1.35, stagger: 0.12 },
          0.3,
        )
        .from(".hero-art", { scale: 1.12, opacity: 0, duration: 1.6 }, 0.2)
        .from(
          ".hero-support p, .hero-support .text-link, .hero-explore, .hero-aside > span",
          {
            y: 20,
            opacity: 0,
            duration: 0.85,
            stagger: 0.06,
            clearProps: "transform,opacity",
          },
          1,
        );

      ScrollTrigger.create({
        start: 0,
        end: () => ScrollTrigger.maxScroll(window),
        refreshPriority: -10,
        onUpdate: (self) =>
          gsap.set(".navigation", { "--reading-progress": self.progress }),
      });

      gsap.fromTo(
        ".approach-strip",
        { xPercent: 4 },
        {
          xPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".approach",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
      gsap.from(".contact h2 > span", {
        xPercent: (index) => (index === 1 ? 10 : -7),
        stagger: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact",
          start: "top 90%",
          end: "top 12%",
          scrub: 1,
        },
      });
    });

    media.add(desktopMotion, () => {
      document.documentElement.classList.add("has-scroll-scenes");
      const hero = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: () => `+=${window.innerHeight * 1.5}`,
          pin: ".hero-scene",
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      hero
        .to(".hero-line:nth-child(1)", { xPercent: -65, opacity: 0 }, 0)
        .to(".hero-line:nth-child(2)", { xPercent: 65, opacity: 0 }, 0)
        .to(".hero-line:nth-child(3)", { xPercent: -40, opacity: 0 }, 0)
        .to(
          ".hero-aside, .hero-bottom, .hero-edition, .hero-meta",
          { opacity: 0, duration: 0.25 },
          0,
        )
        .to(
          ".hero-art picture",
          {
            scale: 1.85,
            rotation: -14,
            xPercent: -12,
            yPercent: 5,
            duration: 1,
          },
          0,
        )
        .fromTo(
          ".hero-portal",
          { clipPath: "circle(0% at 65% 50%)" },
          { clipPath: "circle(125% at 65% 50%)", duration: 0.75 },
          0.45,
        )
        .fromTo(
          ".portal-title",
          { scale: 1.35, rotation: -5 },
          { scale: 1, rotation: 0, duration: 0.8 },
          0.65,
        )
        .to(".hero-scroll-line span", { scaleX: 1, duration: 1.45 }, 0);

      const lines = gsap.utils.toArray<HTMLElement>(".statement-line > span");
      gsap.set(lines, {
        backgroundImage: "linear-gradient(90deg, #f5f3ef 50%, #777777 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "100% 0%",
        backgroundClip: "text",
        color: "transparent",
      });
      const statement = gsap.timeline({
        scrollTrigger: {
          trigger: ".studio-statement",
          start: "top 70px",
          end: () => `+=${window.innerHeight * 0.8}`,
          pin: ".statement-scene",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
      statement
        .to(lines, {
          backgroundPosition: "0% 0%",
          ease: "none",
          duration: 1,
          stagger: 0.55,
        })
        .fromTo(
          ".statement-line i",
          { rotation: -45, scale: 0.65 },
          { rotation: 0, scale: 1, duration: 2, ease: "none" },
          0,
        )
        .fromTo(
          ".statement-rule",
          { scaleX: 0 },
          { scaleX: 1, duration: 2.65, ease: "none" },
          0,
        );

      const rail = document.querySelector<HTMLElement>(".project-rail");
      const viewport = document.querySelector<HTMLElement>(".work-viewport");
      const links = gsap.utils.toArray<HTMLAnchorElement>(
        "[data-project-jump]",
      );
      if (!rail || !viewport) {
        document.documentElement.classList.remove("has-scroll-scenes");
        return;
      }
      const distance = () =>
        Math.max(0, rail.scrollWidth - viewport.clientWidth);
      const gallery = gsap.to(rail, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          id: "work-sequence",
          trigger: ".work-stage",
          start: "top 70px",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const current = Math.min(3, Math.round(self.progress * 3));
            links.forEach((link, index) =>
              link.setAttribute("aria-current", String(index === current)),
            );
            gsap.set(".work-progress span", { scaleX: self.progress });
          },
        },
      });
      gsap.utils
        .toArray<HTMLElement>(".project-image-wrap")
        .forEach((frame) => {
          const scene = gsap.timeline({
            scrollTrigger: {
              trigger: frame.parentElement,
              containerAnimation: gallery,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          });
          scene
            .fromTo(
              frame,
              { rotationY: 12, rotationZ: 2.5, scale: 0.87 },
              {
                rotationY: 0,
                rotationZ: 0,
                scale: 1,
                ease: "none",
                duration: 0.48,
              },
            )
            .to(frame, {
              rotationY: -10,
              rotationZ: -2,
              scale: 0.9,
              ease: "none",
              duration: 0.52,
            });
          const screen = frame.querySelector(".project-screen");
          if (screen)
            gsap.fromTo(
              screen,
              { xPercent: -3 },
              {
                xPercent: 3,
                ease: "none",
                scrollTrigger: {
                  trigger: frame.parentElement,
                  containerAnimation: gallery,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              },
            );
        });
      // Native anchors remain the fallback for touch, reduced motion and no JS.
      const jump = (index: number, smooth: boolean) => {
        const trigger = gallery.scrollTrigger;
        if (!trigger) return;
        const item = rail.querySelector<HTMLElement>(
          `[data-project-index="${index}"]`,
        );
        const first = rail.querySelector<HTMLElement>("[data-project-index]");
        const progress = Math.min(
          1,
          ((item?.offsetLeft ?? 0) - (first?.offsetLeft ?? 0)) / distance(),
        );
        window.scrollTo({
          top: trigger.start + (trigger.end - trigger.start) * progress,
          behavior: smooth ? "smooth" : "instant",
        });
        if (!smooth) {
          ScrollTrigger.update();
          gallery.progress(progress);
        }
      };
      const onJump = (event: MouseEvent) => {
        const target = (event.target as Element).closest<HTMLAnchorElement>(
          "[data-project-jump]",
        );
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
        if (item?.dataset.projectIndex)
          jump(Number(item.dataset.projectIndex), false);
      };
      links.forEach((link) => link.addEventListener("click", onJump));
      rail.addEventListener("focusin", onFocus);
      window.addEventListener("hashchange", onHash);
      gsap.from(".approach-word", {
        xPercent: (index) => (index === 1 ? 9 : -9),
        stagger: 0.12,
        ease: "none",
        scrollTrigger: {
          trigger: ".approach",
          start: "top bottom",
          end: "top 10%",
          scrub: 1,
        },
      });
      return () => {
        document.documentElement.classList.remove("has-scroll-scenes");
        links.forEach((link) => {
          link.removeEventListener("click", onJump);
          link.removeAttribute("aria-current");
        });
        rail.removeEventListener("focusin", onFocus);
        window.removeEventListener("hashchange", onHash);
      };
    });

    media.add(
      "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
      () => {
        // Short, unpinned movements retain native touch scrolling.
        gsap.to(".hero-art picture", {
          yPercent: 12,
          rotation: -5,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
        gsap.utils.toArray<HTMLElement>(".statement-line").forEach((line) => {
          gsap.fromTo(
            line,
            { color: "#777" },
            {
              color: "#f5f3ef",
              scrollTrigger: {
                trigger: line,
                start: "top 85%",
                end: "top 50%",
                scrub: true,
              },
            },
          );
        });
      },
    );

    const services = document.querySelector(".service-list");
    const onServiceResize = (event: Event) => {
      if ((event as TransitionEvent).propertyName !== "grid-template-rows")
        return;
      const focused = document.activeElement as HTMLElement | null;
      ScrollTrigger.refresh();
      if (focused?.isConnected && document.activeElement !== focused)
        focused.focus({ preventScroll: true });
    };
    services?.addEventListener("transitionend", onServiceResize);

    document.fonts.ready.then(() => {
      if (mounted) ScrollTrigger.refresh();
    });
    return () => {
      mounted = false;
      services?.removeEventListener("transitionend", onServiceResize);
      media.revert();
    };
  }, []);
  return null;
}
