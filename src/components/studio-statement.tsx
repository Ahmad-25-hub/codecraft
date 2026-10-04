import { SectionLabel } from "./section-label";

export function StudioStatement() {
  return (
    <section
      id="studio"
      className="studio-statement page-section"
      aria-labelledby="statement-title"
    >
      <SectionLabel number="01">The studio</SectionLabel>
      <div className="statement-main">
        <h2
          id="statement-title"
          className="statement-title"
          aria-label="Ideas are the start. Experience is everything."
        >
          <span data-reveal>Ideas are the start.</span>
          <span data-reveal>
            Experience is<span className="statement-indent">everything.</span>
          </span>
        </h2>
        <div className="statement-copy">
          <span className="small-cross" aria-hidden="true">
            +
          </span>
          <p data-reveal>
            We turn ideas into digital experiences. From strategy and interface
            design to development and launch, we bring design and technology
            together to make things that are useful, memorable, and built for
            real goals.
          </p>
        </div>
      </div>
    </section>
  );
}
