import type { Project } from "@/lib/content";

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual project-capture ${project.theme}`}>
      <span className="capture-index" aria-hidden="true">
        {project.number}
      </span>
      <div className="project-screen">
        <img
          src={project.screenshot}
          srcSet={`${project.screenshot.replace(".webp", "-small.webp")} 640w, ${project.screenshot} 1265w`}
          sizes="(min-width: 1024px) 65vw, 92vw"
          alt={`Homepage of ${project.name}, captured from the live website`}
          loading="lazy"
          decoding="async"
          width="1265"
          height="712"
        />
      </div>
      <span className="capture-address" aria-hidden="true">
        {project.website.replace("https://", "").replace(/\/$/, "")}
      </span>
    </div>
  );
}
