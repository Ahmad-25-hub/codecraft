import type { Project } from "@/lib/content";

function MathematicalGrid() {
  return (
    <svg
      className="math-grid"
      viewBox="0 0 600 400"
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 21 }, (_, i) => (
        <path
          key={`a${i}`}
          d={`M${i * 30} 0 Q${300 + (i - 10) * 12} 200 ${i * 30} 400`}
          stroke="currentColor"
          opacity=".28"
          strokeWidth=".7"
        />
      ))}
      {Array.from({ length: 16 }, (_, i) => (
        <path
          key={`b${i}`}
          d={`M0 ${i * 28} Q300 ${100 + i * 12} 600 ${i * 28}`}
          stroke="currentColor"
          opacity=".25"
          strokeWidth=".7"
        />
      ))}
      <circle
        cx="300"
        cy="200"
        r="100"
        stroke="currentColor"
        strokeWidth=".8"
      />
      <path
        d="M150 200h300M300 50v300"
        stroke="currentColor"
        opacity=".5"
        strokeWidth=".7"
      />
    </svg>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  if (project.screenshot)
    return (
      <div className={`project-visual ${project.theme}`}>
        <img
          src={project.screenshot}
          alt={`${project.name} website screenshot`}
          loading="lazy"
          width="1200"
          height="850"
        />
      </div>
    );
  return (
    <div
      className={`project-visual ${project.theme}`}
      role="img"
      aria-label={`${project.name}: original typographic visual concept, not a screenshot of the completed website`}
    >
      <div className="project-concept">
        <div className="concept-top">
          <span>
            UNIVERSITAS
            <br />
            NEGERI JAKARTA
          </span>
          <span>{project.number} / ACADEMIC</span>
          <span className="concept-menu">
            Explore <b>↗</b>
          </span>
        </div>
        {project.theme === "faculty" && (
          <>
            <div className="faculty-caption">
              SCIENCE IS A WAY
              <br />
              OF SEEING THE WORLD.
            </div>
            <div className="faculty-word">
              New
              <br />
              <span>perspectives.</span>
            </div>
            <div className="faculty-orbit">
              <span>F</span>
              <span>M</span>
              <span>I</span>
              <span>P</span>
              <span>A</span>
            </div>
            <div className="concept-bottom">
              <span>
                MATHEMATICS &<br />
                NATURAL SCIENCES
              </span>
              <span>Discover the faculty ↗</span>
            </div>
          </>
        )}
        {project.theme === "biology-education" && (
          <>
            <div className="bio-edu-word">
              Grow.
              <br />
              <span>Learn.</span>
              <br />
              Inspire.
            </div>
            <div className="bio-specimen" aria-hidden="true">
              <span>01</span>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="concept-bottom">
              <span>PENDIDIKAN BIOLOGI</span>
              <span>Education, naturally. ↗</span>
            </div>
          </>
        )}
        {project.theme === "mathematics" && (
          <>
            <MathematicalGrid />
            <div className="math-word">
              Infinite
              <br />
              <span>possibility.</span>
            </div>
            <div className="math-formula">x² + y² = r²</div>
            <div className="concept-bottom">
              <span>PENDIDIKAN MATEMATIKA</span>
              <span>A different way to think ↗</span>
            </div>
          </>
        )}
        {project.theme === "biology" && (
          <>
            <div className="biology-index">FIELD NOTES / BIOLOGY</div>
            <div className="biology-word">
              Life,
              <br />
              <span>explored.</span>
            </div>
            <div className="biology-lines" aria-hidden="true">
              {Array.from({ length: 20 }, (_, i) => (
                <i key={i} style={{ transform: `rotate(${i * 9}deg)` }} />
              ))}
            </div>
            <div className="concept-bottom">
              <span>BIOLOGI / UNJ</span>
              <span>Observe. Understand. ↗</span>
            </div>
          </>
        )}
      </div>
      <span className="concept-disclaimer">
        Visual concept / screenshot pending
      </span>
    </div>
  );
}
