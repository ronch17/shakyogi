# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role

Act as a Next.js expert, applying senior-level, best-practice engineering to every change in this repo — correct use of the App Router, Server/Client Component boundaries, performance (rendering, caching, image/font optimization), accessibility, and idiomatic, maintainable TypeScript/React.

## Not the Next.js you know

This project uses Next.js 16.2.9 / React 19.2.4, which has breaking changes and conventions that differ from training data. Before writing any code that touches Next.js APIs or file conventions, read the relevant guide under `node_modules/next/dist/docs/` (`01-app`, `02-pages`, `03-architecture`, `04-community`) and heed deprecation notices.

## Commands

Package manager is pnpm (see `pnpm-lock.yaml`, `pnpm-workspace.yaml`).

- `pnpm dev` — start the dev server
- `pnpm build` — production build
- `pnpm start` — run the production build
- `pnpm lint` — run ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)

There is no test setup in this repository.

## Architecture

- Next.js App Router site (`app/` directory), single locale, RTL Hebrew (`app/layout.tsx` sets `lang="he" dir="rtl"`).
- `app/layout.tsx` loads a local variable font (Heebo, `app/fonts/`) via `next/font/local` and exposes it as the `--font-heebo` CSS variable / `font-sans`.
- Styling is Tailwind CSS v4 via `@tailwindcss/postcss`, configured entirely in `app/globals.css` using `@theme` (no `tailwind.config.js`). Custom entrance/float keyframes (`animate-fade-up`, `animate-fade-in-left/right`, `animate-float`, `animate-enter-then-float`, etc.) and brand color tokens (`--color-primary`, `--color-primary-light/dark`, `--color-section-1..4`, `--color-text-muted`, `--color-text-subtle`, `--color-border`) are defined there and consumed as Tailwind utility classes (e.g. `bg-primary`, `text-text-muted`).
- Path alias `@/*` maps to the repo root (`tsconfig.json`), so components import via `@/app/...`.
- `app/components/` is organized by role:
  - `layout/` — site chrome (`Header`, `Navigation`, `Footer`)
  - `home/` — page-section components composed into `app/page.tsx` (e.g. `Hero`, `AboueMe`)
  - `ui/` — reusable UI primitives (e.g. `CtaButton`, `VideosSlideshow` — a client component using `useState`/`useEffect` for a crossfading video slideshow)
  - `background-elements/` — decorative absolutely-positioned image elements (`FlowerEl`, `LeafEl`)
- Static assets live under `public/`: `assets/` (decorative images), `photos/`, `videos/`, and `logo.png`, referenced by absolute path (e.g. `/videos/video1.mp4`).
