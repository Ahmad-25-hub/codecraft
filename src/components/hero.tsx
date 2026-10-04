import { Arrow } from "./icons";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-scene">
        <div className="hero-meta eyebrow">
          <span>
            <i className="accent-square" /> Independent digital studio
          </span>
          <span>Design + technology / 2026</span>
        </div>
        <div className="hero-art" aria-hidden="true">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet="/images/chrome-form-mobile.webp"
            />
            <img
              src="/images/chrome-form.webp"
              alt=""
              width="1536"
              height="1024"
              fetchPriority="high"
            />
          </picture>
        </div>
        <h1
          id="hero-title"
          className="hero-title"
          aria-label="We craft digital experiences."
        >
          <span className="hero-line line-mask">
            <span>WE CRAFT</span>
          </span>
          <span className="hero-line line-mask">
            <span>DIGITAL</span>
          </span>
          <span className="hero-line line-mask">
            <span>
              EXPERIENCES<span className="title-period">.</span>
            </span>
          </span>
        </h1>
        <div className="hero-aside eyebrow">
          <span>[ IDEA → REALITY ]</span>
          <span>
            Thoughtfully designed.
            <br />
            Precisely developed.
          </span>
        </div>
        <div className="hero-bottom">
          <a href="#work" className="hero-explore" aria-label="View our work">
            <span className="explore-icon">
              <Arrow diagonal />
            </span>
            <span className="eyebrow">
              Scroll to discover
              <br />
              what we can make.
            </span>
          </a>
          <div className="hero-support">
            <p>
              We turn ideas into websites, digital products, and experiences
              people remember.
            </p>
            <a href="#contact" className="text-link primary-link">
              Start a project <Arrow />
            </a>
          </div>
        </div>
        <span className="hero-edition eyebrow">
          Crafting digital experiences.
        </span>
        <div className="hero-portal" aria-hidden="true">
          <div className="portal-meta eyebrow">
            <span>Code + craft</span>
            <span>From possibility to reality.</span>
          </div>
          <div className="portal-title">
            <span>IDEAS.</span>
            <span>
              MADE <i>REAL.</i>
            </span>
          </div>
          <div className="portal-bottom eyebrow">
            <span>A little instinct. A lot of craft.</span>
            <span>Keep exploring ↓</span>
          </div>
        </div>
        <div className="hero-scroll-line" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
