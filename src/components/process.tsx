"use client";

import { useState } from "react";
import { process } from "@/lib/content";
import { SectionLabel } from "./section-label";

export function Process() {
  const [active, setActive] = useState(0);
  return (
    <section className="process page-section" aria-labelledby="process-title">
      <div className="process-heading">
        <SectionLabel number="05">From possibility to reality</SectionLabel>
        <h2 id="process-title" data-reveal>
          OUR PROCESS
        </h2>
        <p>
          A clear path.
          <br />
          Room for discovery.
        </p>
      </div>
      <div className="process-stages">
        {process.map((stage, index) => (
          <button
            className={`process-stage ${index === active ? "is-active" : ""}`}
            key={stage.name}
            aria-pressed={index === active}
            aria-controls="process-detail"
            onClick={() => setActive(index)}
            onMouseEnter={() => {
              if (window.matchMedia("(hover: hover)").matches) setActive(index);
            }}
          >
            <span className="process-index eyebrow">
              0{index + 1}
              <span aria-hidden="true">↗</span>
            </span>
            <h3>{stage.name}</h3>
            <p>{stage.description}</p>
            <span className="process-stage-line" />
          </button>
        ))}
      </div>
      <div
        className="process-detail"
        id="process-detail"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="eyebrow">{process[active].output}</span>
        <p key={active}>{process[active].detail}</p>
        <span className="process-detail-index" aria-hidden="true">
          0{active + 1}
        </span>
      </div>
    </section>
  );
}
