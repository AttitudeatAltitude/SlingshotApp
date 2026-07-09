# Apex Sling

A retro-futuristic, dark-mode field manual for slingshot shooting — built as a
one-stop-shop covering getting started, band cutting, stance & grip, aiming &
release, ammo, safety, maintenance, and a glossary of terms.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-based `@theme` config) for the neon/HUD design system
- [React Router](https://reactrouter.com/) for client-side routing

## Getting Started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run lint       # lint with oxlint
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/   Layout, nav, footer, and shared UI (HudPanel, Callout, PageHeader)
  data/         Section metadata shared between the nav bar and homepage
  lib/          Accent color helpers for the theme
  pages/        One page per manual module (Getting Started, Band Cutting, ...)
```
