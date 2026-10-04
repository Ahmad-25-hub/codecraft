"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/content";
import { Arrow } from "./icons";
import { SectionLabel } from "./section-label";
import { ProjectVisual } from "./project-visual";
import { DialogShell } from "./dialog-shell";

function ProjectItem({ project, onOpen, index }: { project: Project; onOpen: () => void; index: number }) {
  return (
    <article id={`project-${project.id}`} className={`project-item project-${project.number}`} data-project-index={index}>
      <button className="project-open" onClick={onOpen} aria-label={`Explore ${project.name}`}>
        <div className="project-image-wrap"><ProjectVisual project={project} /><span className="project-view eyebrow">Explore project <Arrow diagonal /></span></div>
        <div className="project-info">
          <div><div className="project-kicker eyebrow"><span>{project.number} /</span><span>{project.category}</span></div><h3>{project.name}</h3></div>
          <Arrow diagonal />
        </div>
      </button>
      <div className="project-meta"><span>{project.scope}</span><span>{project.year ?? "Year —"}</span></div>
      <p className="project-description">{project.description}</p>
    </article>
  );
}

export function SelectedWork() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="work" className="selected-work" aria-labelledby="work-title">
      <div className="work-stage">
        <div className="work-heading">
          <div><SectionLabel number="03">A few things we&apos;ve made</SectionLabel><h2 id="work-title">SELECTED <span>WORK</span><sup>(04)</sup></h2></div>
          <p>A selection of digital experiences<br />we&apos;ve designed and built.</p>
        </div>
        <div className="work-viewport"><div className="project-rail">
          {projects.map((project, index) => <ProjectItem key={project.id} project={project} index={index} onOpen={() => setSelected(project)} />)}
        </div></div>
        <div className="work-navigation eyebrow"><span>Different challenges. The same care.</span><nav aria-label="Selected projects">{projects.map((project, index) => <a key={project.id} href={`#project-${project.id}`} data-project-jump={index} aria-label={`View ${project.name}`}>{project.number}</a>)}</nav><span className="work-direction">Scroll to explore →</span></div>
        <div className="work-progress" aria-hidden="true"><span /></div>
      </div>
      {selected && <DialogShell className="project-dialog" labelledBy="project-dialog-title" onClose={() => setSelected(null)}>
        <div className="project-dialog-heading"><p className="eyebrow">Selected work / {selected.number}</p><h2 id="project-dialog-title">{selected.name}</h2><p>{selected.description}</p>
          <dl className="project-facts"><div><dt>Category</dt><dd>{selected.category}</dd></div><div><dt>Scope</dt><dd>{selected.scope}</dd></div><div><dt>Year</dt><dd>{selected.year ?? "To be confirmed"}</dd></div></dl>
        </div>
        <ProjectVisual project={selected} />
        {!selected.screenshot && <p className="project-asset-note">This is an original presentation concept. Final project screenshots and verified dates will be added here.</p>}
        <a className="text-link" href="#contact" onClick={() => setSelected(null)}>Start a conversation <Arrow /></a>
      </DialogShell>}
    </section>
  );
}
