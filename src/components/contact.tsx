import { studio } from "@/lib/content";
import { Arrow } from "./icons";
import { SectionLabel } from "./section-label";

export function Contact() {
  return (
    <section
      id="contact"
      className="contact page-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-top">
        <SectionLabel number="07">Your next chapter</SectionLabel>
        <span className="eyebrow">Great things start with a conversation.</span>
      </div>
      <h2 id="contact-title" aria-label="Let's build something worth seeing.">
        <span data-reveal>LET&apos;S BUILD</span>
        <span data-reveal>SOMETHING</span>
        <span data-reveal className="contact-last">
          WORTH SEEING<span className="title-period">.</span>
        </span>
      </h2>
      <div className="contact-bottom">
        <div className="contact-copy">
          <p>
            Have an idea, project, or digital problem?
            <br />
            <span>Let&apos;s turn it into something real.</span>
          </p>
          <a className="contact-email" href={`mailto:${studio.email}`}>
            {studio.email} <Arrow diagonal />
          </a>
        </div>
        <a
          className="contact-cta"
          href={studio.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start a project on WhatsApp (opens in a new tab)"
        >
          <span>Start a project</span>
          <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}
