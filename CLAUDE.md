# Apex Sling

A retro-futuristic, dark-mode-only field manual for slingshot shooting — a
one-stop-shop covering everything from a beginner's first frame to draw-weight
physics. Built with Claude Code; this file exists so a fresh session (or a
different agent) can pick up the project without re-deriving decisions that
were made in chat and never written down elsewhere.

Live site: https://attitudeataltitude.github.io/SlingshotApp/

## Audience & tone

Target audience is **hobbyists leveling up** — assume basic slingshot
familiarity, lean into tuning/technique/gear tradeoffs rather than
hand-holding complete beginners. Content should read like a field manual:
direct, technical, no fluff. Tools should show their formulas and caveat
their own precision rather than pretending to be more accurate than they are.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (CSS-based `@theme` config in `src/index.css` — no
  `tailwind.config.js`)
- React Router, using **`HashRouter`** (not `BrowserRouter`) — this is
  deliberate, not an oversight. GitHub Pages is a static host with no
  server-side rewrites, so a `BrowserRouter` path like `/band-cutting` 404s on
  direct load or refresh. `HashRouter` keeps all routing client-side under a
  single `index.html`. All internal links must use React Router's `Link`
  component, never a raw `<a href="/...">`, or they'll bypass the hash router
  and 404 on the live site.

## Design system

Dark mode only, no light theme, no toggle — that was an explicit requirement,
not a default. Retro-futuristic/neon HUD aesthetic:

- Colors defined as CSS custom properties in `src/index.css` under `@theme`:
  `--color-void` (background), `--color-surface`/`--color-surface-line`
  (panels/borders), `--color-cyan`/`--color-magenta`/`--color-amber` (the
  three accent colors, used in rotation), `--color-ink`/`--color-ink-muted`/
  `--color-ink-faint` (text).
- Fonts: Orbitron (display/headings), Rajdhani (body), Space Mono (mono/HUD
  labels), loaded via Google Fonts link tags in `index.html`.
- Accent rotation: `src/lib/accent.ts` maps `'cyan' | 'magenta' | 'amber'` to
  literal Tailwind class strings (`text-cyan`, `border-cyan`, etc.). Written
  as literal strings, not template-interpolated (`text-${accent}`), because
  Tailwind's build-time class scanner can't see dynamically constructed class
  names — this was a deliberate workaround, not an accident.
- Shared components: `HudPanel` (bordered content panel with a glyph/title
  header), `Callout` (tip/warning/danger inline boxes), `PageHeader` (page
  title block), `DiagramFrame` (wraps inline SVG diagrams in a "FIG. NN"
  panel).

## Content structure

`src/data/sections.ts` is the single source of truth for the nine content
modules (path, label, nav short-label, tagline, glyph number, accent color).
The nav bar, homepage card grid, and page numbering (`Module 0X` in each
`PageHeader`) all read from or must stay in sync with this file and its
glyph numbers. Current order: Getting Started → Band Cutting → Stance & Grip
→ Aiming & Release → Ammo → Power & Ballistics → Safety → Maintenance →
Glossary. Power & Ballistics is placed right after Ammo because its
calculator consumes ammo mass as an input — keep related modules adjacent
when adding new ones.

Each page lives in `src/pages/` and is built from `HudPanel`/`Callout`
sections plus, where relevant, an interactive tool or diagram.

## Interactive tools (`src/components/calculators/`)

Three calculators exist, each computing something real rather than looking
up a static table:

- **BandCalculator** (Band Cutting page): draw length ÷ ratio → active band
  length range, plus width guidance by power style and band type.
- **AmmoMatcher** (Ammo page): ammo mass computed from actual sphere-volume ×
  material-density physics (steel/lead/clay/glass densities), then a band
  strength recommendation.
- **DrawWeightEstimator** (Power & Ballistics page): peak draw weight × draw
  length → stored draw work (triangular force-curve approximation), ×
  transfer efficiency (band-type dependent) → energy delivered to ammo →
  estimated velocity via KE = ½mv².

All three are explicit that they're estimates, not precision instruments —
preserve that framing in any new tool; don't imply more accuracy than a
simplified physical model actually has.

## Diagrams (`src/components/diagrams/`)

Inline SVG schematics (not raster images), styled to match the HUD theme,
wrapped in `DiagramFrame`. Currently only on the Aiming & Release page
(anchor points, instinctive vs. gap aiming, draw/release/follow-through).
Two lessons learned the hard way while building these — worth re-checking if
you add more:

1. **SVG text doesn't wrap.** Long labels silently clip past the `viewBox`
   edge instead of wrapping. Keep label strings short, or split into
   multiple `<text>`/`tspan` lines, and leave generous margin in the
   `viewBox`.
2. **Check the physical geometry, not just that it renders.** A first draft
   of the release-trajectory diagram placed the target on the same side of
   the frame as the anchor point — it rendered fine and looked plausible at
   a glance, but was directionally wrong (the shot would never reach the
   target). Screenshot every diagram and sanity-check what it's actually
   depicting, not just that the SVG doesn't error.

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml` builds with
`npm run build` and publishes `dist/` to GitHub Pages via
`actions/upload-pages-artifact` + `actions/deploy-pages`, triggered on push
to `main` (and to this branch, for pre-merge pilot testing).

- `vite.config.ts` sets `base: '/SlingshotApp/'` for production builds only
  (dev server stays at `/`) — required because this is a project Pages site,
  not a user/org root site.
- **The `github-pages` deployment environment only allows deploys from
  `main`** (GitHub's default branch restriction on that auto-created
  environment). Pushing this workflow on a feature branch will build fine
  but the deploy job fails instantly with no runner assigned — that's the
  signature of this restriction, not a bug in the workflow. Either merge to
  `main` to deploy, or have a repo admin add the feature branch under
  Settings → Environments → github-pages → Deployment branches and rules.
- The repo is **public** (required for Pages to serve on the free plan from
  a private repo's perspective — GitHub actually required making it public
  during setup).

## Workflow conventions

- This session's designated branch (`claude/slingshot-app-setup-q23axk`) gets
  squash-merged into `main` via PR each time a chunk of work is done, then
  **reset to match `main`** (`git fetch origin main && git checkout -B
  claude/slingshot-app-setup-q23axk origin/main`, force-with-lease push) so
  it never carries stale already-merged history into the next session.
- Verification loop for any UI change: `npx tsc -b`, `npm run build`,
  `npm run lint` (oxlint), then actually run the dev server and screenshot
  the change (Playwright, headless Chromium at
  `/opt/pw-browsers/chromium`) rather than trusting that a typecheck pass
  means the UI looks right — this caught real bugs (SVG clipping, crossed
  leader lines, backwards diagram geometry) that typecheck/build/lint all
  missed.
