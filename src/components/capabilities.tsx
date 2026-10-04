"use client";

import { useState } from "react";
import { services, studio } from "@/lib/content";
import { SectionLabel } from "./section-label";

export function Capabilities() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? expanded;
  return (
    <section
      id="services"
      className="capabilities page-section"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <SectionLabel>What we do</SectionLabel>
        <h2 id="services-title" data-reveal>
          Ideas into
          <br />
          possibilities.
        </h2>
        <p className="section-intro">
          From a first impression
          <br />
          to a lasting experience.
        </p>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <article
            className={`service-row ${active === index ? "is-active" : ""}`}
            key={service.title}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches)
                setHovered(index);
            }}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>
              <button
                aria-expanded={active === index}
                aria-controls={`service-${index}`}
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <span className="service-number eyebrow">0{index + 1}</span>
                <span className="service-title">{service.title}</span>
                <span className="service-plus" aria-hidden="true">
                  <i />
                  <i />
                </span>
              </button>
            </h3>
            <div
              id={`service-${index}`}
              className="service-description"
              inert={active !== index}
            >
              <div>
                <p>{service.description}</p>
                <span className="eyebrow">{service.details}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="section-tail eyebrow">
        <span>Design-led. Built with purpose.</span>
        <a
          href={studio.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="quiet-link"
        >
          Find the right direction ↗
        </a>
      </div>
    </section>
  );
}
