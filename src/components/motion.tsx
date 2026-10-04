"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      let active = true;
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from(".navigation", { y: -15, opacity: 0, duration: 0.7 })
        .from(".hero-meta", { y: 14, opacity: 0, duration: 0.65 }, "-=0.4")
        .from(
          ".hero-title .line-mask > span",
          { yPercent: 105, duration: 1.15, stagger: 0.12 },
          "-=0.35",
        )
        .from(
          ".hero-support p, .hero-note",
          { y: 18, opacity: 0, duration: 0.8 },
          "-=0.6",
        )
        .from(
          ".hero-actions, .hero-foot",
          { y: 12, opacity: 0, duration: 0.7, stagger: 0.1 },
          "-=0.5",
        )
        .from(
          ".digital-form",
          { opacity: 0, scale: 0.93, duration: 1.25 },
          "-=0.8",
        );

      const desktop = window.matchMedia("(min-width: 768px)").matches;
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element) => {
          gsap.from(element, {
            y: desktop ? 32 : 15,
            opacity: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          });
        });
      document.fonts.ready.then(() => {
        if (active) ScrollTrigger.refresh();
      });
      return () => {
        active = false;
      };
    });
    media.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const cleanupFunctions: (() => void)[] = [];
        const desktop = true;
        if (desktop) {
          // Motion runs only while the hero is visible, and stops in hidden tabs.
          const drift = gsap.to(".form-inner", {
            rotation: 8,
            y: -10,
            duration: 9,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
            paused: true,
          });
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting && !document.hidden) drift.play();
              else drift.pause();
            },
            { threshold: 0.1 },
          );
          const hero = document.querySelector(".hero");
          if (hero) observer.observe(hero);
          const onVisibility = () => {
            if (document.hidden) drift.pause();
            else if ((hero?.getBoundingClientRect().bottom ?? 0) > 0)
              drift.play();
          };
          document.addEventListener("visibilitychange", onVisibility);
          // Return cleanup together with the rest of the matchMedia context.
          const cleanupHero = () => {
            observer.disconnect();
            document.removeEventListener("visibilitychange", onVisibility);
            drift.kill();
          };
          cleanupFunctions.push(cleanupHero);
        }

        if (desktop)
          document
            .querySelectorAll<HTMLElement>(".project-concept")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { y: 12 },
                {
                  y: -12,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                  },
                },
              );
            });
        return () => {
          cleanupFunctions.forEach((fn) => fn());
          cleanupFunctions.length = 0;
        };
      },
    );
    return () => media.revert();
  }, []);
  return null;
}
