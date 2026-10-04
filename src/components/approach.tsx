import { SectionLabel } from "./section-label";
const disciplines = ["Design systems", "Responsive design", "Frontend development", "Backend integration", "CMS", "Performance", "Accessibility"];
export function Approach() {
  return (
    <section id="about" className="approach" aria-labelledby="approach-title">
      <div className="approach-top"><SectionLabel number="04">The way we think</SectionLabel><span className="eyebrow">Equal parts instinct & intention.</span></div>
      <div className="approach-main">
        <h2 id="approach-title" aria-label="Design. Develop. Deliver."><span className="approach-word">DESIGN.</span><span className="approach-word">DEVELOP.</span><span className="approach-word deliver-line">DELIVER.<i aria-hidden="true">↗</i></span></h2>
        <div className="approach-aside"><p className="approach-lead">Good design makes it clear.<br />Good code makes it work.<br /><span>The craft is bringing them together.</span></p><p className="approach-copy">We combine design thinking, development, and digital technology to create websites and experiences built for real people and real goals.</p><div className="discipline-list">{disciplines.map((item, index) => <span key={item}><span className="discipline-index">0{index + 1}</span>{item}</span>)}</div></div>
      </div>
      <div className="approach-strip" aria-hidden="true"><span>THINK BIG. </span><span>CARE ABOUT THE SMALL.</span></div>
    </section>
  );
}
