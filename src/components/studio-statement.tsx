import { SectionLabel } from "./section-label";

export function StudioStatement() {
  return (
    <section
      id="studio"
      className="studio-statement"
      aria-labelledby="statement-title"
    >
      <div className="statement-scene">
        <div className="statement-top">
          <SectionLabel number="01">The studio</SectionLabel>
          <span className="eyebrow">A little instinct. A lot of craft.</span>
        </div>
        <h2
          id="statement-title"
          className="statement-title"
          aria-label="Ideas are the start. Experience is everything."
        >
          <span className="statement-line">
            <span>Ideas are</span>
          </span>
          <span className="statement-line">
            <span>the start.</span>
          </span>
          <span className="statement-line statement-shift">
            <span>Experience is</span>
          </span>
          <span className="statement-line">
            <span>everything.</span>
            <i aria-hidden="true">↗</i>
          </span>
        </h2>
        <div className="statement-bottom">
          <span className="eyebrow">Curiosity, made tangible.</span>
          <p>
            From strategy and interface design to development and launch, we
            bring design and technology together to make things that are useful,
            memorable, and built for real goals.
          </p>
        </div>
        <span className="statement-rule" aria-hidden="true" />
      </div>
    </section>
  );
}
