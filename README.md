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

- Contact navigation and project enquiry CTAs open the studio-provided WhatsApp destination `https://wa.me/6287860168627`. Email links use `codecraftofficial.id@gmail.com`. These destinations are centralized in `src/lib/content.ts`.
- Instagram uses the studio-provided `https://www.instagram.com/codecraft.id_/`. LinkedIn and GitHub remain visibly unconfigured.
- Add each project's `year` only when confirmed. Unknown years are omitted. Website links and optimized WebP screenshots are configured in `src/lib/content.ts` and `public/projects/`.

## Design and motion

The reference informed the restraint, visual pacing, direct navigation, shifts in scale, and editorial hierarchy. CODECRAFT has its own silver-and-ink palette, asymmetric typography, original chrome sculpture, and moving project exhibition. No reference code, text, or assets were copied.

The `Selected work (04)` label counts only the four supplied projects. The portfolio uses actual homepage screenshots captured on October 4, 2026, at 1265 × 712 pixels, with 640-pixel responsive variants. These are locally hosted snapshots, not hotlinked images, and can be refreshed as the websites change. Each project includes a link to its live website.

Screenshot sources:

- FMIPA UNJ — https://fmipa-baru.unj.ac.id/
- Pendidikan Biologi UNJ — https://fmipa-baru.unj.ac.id/pendbiologi/
- Pendidikan Matematika UNJ — https://fmipa-baru.unj.ac.id/pendmatematika/
- Biologi UNJ — https://fmipa-baru.unj.ac.id/biologi/

## Scroll direction — 2026 revision

The landing page now moves between luminous silver, ink, and full-scale project color fields. A generated chrome sculpture is delivered as responsive WebP assets (109 KB desktop / 42 KB mobile). Typography and the scene transition carry the brand; there is no WebGL or perpetual animation loop.

Desktop motion is a reversible, scroll-driven GSAP sequence: the hero typography parts around a rotating, enlarging sculpture; a circular aperture reveals a second typographic scene; the studio statement fills line by line; the portfolio becomes a pinned horizontal exhibition with perspective and internal parallax. Project index links and keyboard focus synchronize to the correct scroll position. The approach and closing statement use opposing horizontal movement.

Touch layouts use normal vertical scrolling with short, unpinned movements. Reduced-motion preferences disable all scroll choreography and show projects vertically. Without JavaScript the gallery also stays vertical. All timelines, listeners and media-query effects are cleaned up on unmount.
