# CODECRAFT

An original editorial landing page for CODECRAFT, built with Next.js, TypeScript, Tailwind CSS, and GSAP. Uses locally bundled Geist, static export, semantic sections, native dialogs, keyboard navigation, and reduced-motion support.

## Run

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. `npm run build` exports the website to `out/`; `npm run typecheck` validates TypeScript. Serve `out/` with any static hosting provider. `next start` is not supported with static export; use the development server or a static server.

## Add final studio information

Edit `src/lib/content.ts`:

- Set `studio.email` to the confirmed studio address. Until configured, the project enquiry prepares a downloadable/copyable brief and explicitly states that nothing is sent. With an address, it opens the visitor's email application with the brief; there is no backend mail service.
- Set the Instagram, LinkedIn, and GitHub URLs. Unconfigured destinations are visibly marked and never point to invented profiles.
- Set each project's verified `year` and `screenshot` (for example `/projects/fmipa.webp`). Add original, optimized screenshots to `public/projects/`. The original concept artwork is replaced automatically. No project URLs, dates, outcomes, metrics, or testimonials were fabricated.

## Design and motion

The reference informed the restraint, visual pacing, direct navigation, shifts in scale, and editorial hierarchy. CODECRAFT has its own monochromatic palette, oversized left-aligned typography, geometric hero form, and asymmetric project layouts. No reference code, text, or assets were copied.

The hero form is a mathematical SVG with no WebGL. GSAP manages the initial reveal, selected scroll reveals, subtle project movement, and a slow hero drift that pauses off-screen and when the tab is hidden. All GSAP work is scoped and reverted on unmount. Reduced motion disables these effects; mobile omits parallax and continuous motion. Native scrolling is preserved.

The `Selected work (04)` label counts only the four supplied projects. Years are deliberately unconfirmed. Project artwork is identified as presentation concepts, not screenshots of the delivered websites.
