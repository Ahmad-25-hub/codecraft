"use client";

import { useState, type FormEvent } from "react";
import { studio } from "@/lib/content";
import { Arrow } from "./icons";
import { SectionLabel } from "./section-label";
import { DialogShell } from "./dialog-shell";

function BriefDialog({ onClose }: { onClose: () => void }) {
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = `CODECRAFT — PROJECT BRIEF\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\n\nThe idea\n${data.get("idea")}\n\nPrepared for a conversation with CODECRAFT.`;
    setBrief(text);
    if (studio.email)
      window.location.href = `mailto:${studio.email}?subject=${encodeURIComponent("Let’s build something — project enquiry")}&body=${encodeURIComponent(text)}`;
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  };
  const download = () => {
    const url = URL.createObjectURL(
      new Blob([brief], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "codecraft-project-brief.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <DialogShell
      labelledBy="brief-title"
      onClose={onClose}
      className="brief-dialog"
    >
      <p className="eyebrow">A good place to start</p>
      <h2 id="brief-title">
        Let&apos;s make
        <br />
        it real<span>.</span>
      </h2>
      {!brief ? (
        <>
          <p className="brief-intro">
            Tell us a little about your idea. A few words are enough to get a
            conversation started.
          </p>
          <form onSubmit={submit}>
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                placeholder="What should we call you?"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
                placeholder="you@example.com"
              />
            </label>
            <label>
              What do you have in mind?
              <textarea
                name="idea"
                required
                minLength={10}
                maxLength={5000}
                rows={3}
                placeholder="A new website, a digital product, or a challenge to figure out…"
              />
            </label>
            {!studio.email && (
              <p className="brief-notice">
                Studio email pending. You can prepare and save your brief here;
                nothing will be sent.
              </p>
            )}
            <button className="text-link brief-submit" type="submit">
              {studio.email
                ? "Open email with your brief"
                : "Prepare project brief"}
              <Arrow />
            </button>
          </form>
        </>
      ) : (
        <div className="brief-result">
          <p role="status">
            Your brief is ready
            {studio.email
              ? ". Your email app will open to send it."
              : " to save. It has not been sent."}
          </p>
          <textarea
            className="brief-preview"
            aria-label="Prepared project brief"
            readOnly
            value={brief}
            rows={8}
          />
          <div className="brief-result-actions">
            <button className="text-link" onClick={copy}>
              {copied ? "Copied" : "Copy brief"}
              <Arrow />
            </button>
            <button className="text-link" onClick={download}>
              Save brief
              <Arrow diagonal />
            </button>
          </div>
          {copyError && (
            <p role="status" className="brief-notice">
              Select the brief above to copy it, or use Save brief.
            </p>
          )}
          <button
            className="quiet-link brief-edit"
            onClick={() => {
              setBrief("");
              setCopied(false);
            }}
          >
            Write a new brief
          </button>
        </div>
      )}
    </DialogShell>
  );
}

export function Contact() {
  const [open, setOpen] = useState(false);
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
        <p>
          Have an idea, project, or digital problem?
          <br />
          <span>Let&apos;s turn it into something real.</span>
        </p>
        <button className="contact-cta" onClick={() => setOpen(true)}>
          <span>Start a project</span>
          <Arrow diagonal />
        </button>
      </div>
      {open && <BriefDialog onClose={() => setOpen(false)} />}
    </section>
  );
}
