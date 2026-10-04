import { studio } from "@/lib/content";
import { Mark } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="wordmark" href="#" aria-label="CodeCraft home">
            <Mark />
            <span>CODECRAFT</span>
          </a>
          <p>
            Digital studio for websites,
            <br />
            digital products, and experiences.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {["Work", "Services", "About", "Contact"].map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-socials">
          {Object.entries(studio.socials).map(([name, url]) =>
            url ? (
              <a
                href={url}
                key={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name} ↗
              </a>
            ) : (
              <span
                key={name}
                className="pending-social"
                aria-label={`${name}, link pending`}
              >
                {name}
                <small>Link pending</small>
              </span>
            ),
          )}
          {studio.email ? (
            <a href={`mailto:${studio.email}`}>Email ↗</a>
          ) : (
            <span className="pending-social">
              Email<small>Address pending</small>
            </span>
          )}
        </div>
        <a href="#" className="back-top eyebrow">
          Back to top <span>↑</span>
        </a>
      </div>
      <div className="footer-bottom eyebrow">
        <span>© 2026 CodeCraft</span>
        <span>Crafting digital experiences.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
