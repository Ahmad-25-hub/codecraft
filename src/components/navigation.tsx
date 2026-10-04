"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { studio } from "@/lib/content";
import { Mark, Arrow } from "./icons";

const links = [
  ["Work", "work"],
  ["Services", "services"],
  ["About", "about"],
  ["Contact", "contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const context = gsap.context(() => {
      if (!reduced)
        gsap.from(".mobile-menu a", {
          y: 35,
          opacity: 0,
          stagger: 0.085,
          duration: 0.65,
          ease: "power3.out",
        });
    }, menu);
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const anchors = Array.from(
        menu.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
      );
      const first = anchors[0];
      const last = anchors.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        toggle.current?.focus();
      } else if (event.shiftKey && document.activeElement === toggle.current) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        toggle.current?.focus();
      } else if (!event.shiftKey && document.activeElement === toggle.current) {
        event.preventDefault();
        first?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      context.revert();
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`navigation ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}
      >
        <a
          className="wordmark"
          href="#"
          aria-label="CodeCraft home"
          onClick={() => setOpen(false)}
        >
          <Mark />
          <span>CODECRAFT</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={id === "contact" ? studio.whatsapp : `#${id}`}
              target={id === "contact" ? "_blank" : undefined}
              rel={id === "contact" ? "noopener noreferrer" : undefined}
              className={id === "contact" ? "contact-link" : ""}
            >
              {label}
              {id === "contact" && <span className="contact-dot" />}
            </a>
          ))}
        </nav>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="menu-lines">
            <i />
            <i />
          </span>
        </button>
      </header>
      {open && (
        <nav
          ref={menu}
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Mobile navigation"
        >
          <p className="eyebrow">Explore the studio</p>
          {links.map(([label, id], index) => (
            <a
              key={id}
              href={id === "contact" ? studio.whatsapp : `#${id}`}
              target={id === "contact" ? "_blank" : undefined}
              rel={id === "contact" ? "noopener noreferrer" : undefined}
              onClick={() => {
                setOpen(false);
                toggle.current?.focus();
              }}
            >
              <span className="menu-index">0{index + 1}</span>
              {label}
              <Arrow diagonal />
            </a>
          ))}
          <p className="mobile-menu-bottom">
            Crafting digital experiences.<span>CODECRAFT / 2026</span>
          </p>
        </nav>
      )}
    </>
  );
}
