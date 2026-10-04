import { Arrow } from "./icons";
import { DigitalForm } from "./digital-form";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-meta eyebrow">
        <span>
          <i className="accent-square" />
          Digital studio / 2026
        </span>
        <span>Independent minds. Shared ambition.</span>
      </div>
      <DigitalForm />
      <h1
        id="hero-title"
        className="hero-title"
        aria-label="We craft digital experiences."
      >
        <span className="line-mask">
          <span>WE CRAFT</span>
        </span>
        <span className="line-mask">
          <span>
            DIGITAL
            <span className="hero-asterisk" aria-hidden="true">
              ✳
            </span>
          </span>
        </span>
        <span className="line-mask">
          <span>
            EXPERIENCES<span className="title-period">.</span>
          </span>
        </span>
      </h1>
      <div className="hero-bottom">
        <div className="hero-note eyebrow">
          Thoughtfully designed.
          <br />
          Precisely developed.
        </div>
        <div className="hero-support">
          <p>
            CodeCraft designs and develops modern websites, digital products,
            and experiences that turn ideas into something people remember.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="text-link primary-link">
              Start a project
              <Arrow />
            </a>
            <a href="#work" className="text-link secondary-link">
              View our work
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-foot eyebrow">
        <a href="#studio">
          Scroll to explore<span>↓</span>
        </a>
        <span>Design meets technology.</span>
        <span className="hero-coordinate">[ CC — 01 ]</span>
      </div>
    </section>
  );
}
