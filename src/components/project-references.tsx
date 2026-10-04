import { projects } from "@/lib/content";
import { SectionLabel } from "./section-label";

export function ProjectReferences() {
  return (
    <section
      className="references page-section"
      aria-labelledby="references-title"
    >
      <div>
        <SectionLabel number="06">Built on collaboration</SectionLabel>
        <h2 id="references-title">
          Real projects.
          <br />
          Shared purpose.
        </h2>
        <p>
          Digital work for the academic community
          <br />
          at Universitas Negeri Jakarta.
        </p>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <span>{project.name}</span>
            <span className="eyebrow">UNJ</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
