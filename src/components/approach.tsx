import { SectionLabel } from "./section-label";

const disciplines = [
  "Design systems",
  "Responsive design",
  "Frontend development",
  "Backend integration",
  "CMS",
  "Performance",
  "Accessibility",
];

export function Approach() {
  return (
    <section
      id="about"
      className="approach page-section"
      aria-labelledby="approach-title"
    >
      <SectionLabel number="04">The way we think</SectionLabel>
      <div className="approach-main">
        <h2 id="approach-title" aria-label="Design. Develop. Deliver.">
          <span data-reveal>DESIGN.</span>
          <span data-reveal>DEVELOP.</span>
          <span data-reveal className="deliver-line">
            DELIVER.<i aria-hidden="true">↗</i>
          </span>
        </h2>
        <div className="approach-aside">
          <p className="approach-lead" data-reveal>
            Good design makes it clear.
            <br />
            Good code makes it work.
            <br />
            <span>The craft is bringing them together.</span>
          </p>
          <p className="approach-copy">
            We combine design thinking, development, and digital technology to
            create websites and experiences built for real people and real
            goals.
          </p>
          <div className="discipline-list">
            {disciplines.map((item, index) => (
              <span key={item}>
                <span className="discipline-index">0{index + 1}</span>
                {item}
              </span>
            ))}
          </div>
          <p className="approach-signoff eyebrow">
            Small details. A bigger picture.
          </p>
        </div>
      </div>
    </section>
  );
}
