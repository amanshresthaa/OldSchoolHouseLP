# AGENTS.md — Old School House Landing Page

## Commands

- `pnpm dev` — start dev server (Turbopack)
- `pnpm build` — production build (use to verify changes)
- `pnpm lint` — ESLint (next core-web-vitals + typescript)
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm format` — Prettier (no semicolons, double quotes, 2-space indent, trailing commas es5)

## Architecture

Next.js 16 App Router, React 19, Tailwind CSS v4, shadcn/ui components. Single-page mobile-first landing site for a pub/restaurant. Path alias `@/*` maps to repo root. Fonts: Newsreader (display) + Manrope (body) loaded via `next/font/google`. UI components live in `components/ui/` (shadcn); shared components in `components/`. Design tokens defined as CSS custom properties in `app/globals.css` following `design-system.md`. `StickySplitSection` is retired — use compact stacked sections with heading + CTA side-by-side on desktop, full-width content below. Section padding: `py-10 md:py-14 lg:py-16`. Surface pane padding: `px-5 py-5 md:px-6 md:py-6`.

## Site Structure (from blueprint)

Hybrid site: strong scrolling homepage + focused internal pages. Pages: Home (`/`), Menu (`/menu`), Book (`/book`), Events/Private Hire (`/events`), Find Us (`/find-us`). Homepage sections in order: Hero → Proof bar → Why choose us → Menu preview → Atmosphere/gallery → Events/offers → Reviews → Visit block → Footer. Menu must be live HTML text (not PDF-only). Sticky booking CTA on mobile. Repeat booking CTA before the lower half of each page.

## Code Style

- TypeScript strict mode; no `any`. Use `interface` for object shapes.
- Imports: React/Next first, then libs, then `@/` aliases. Use `@/` paths, never relative `../`.
- Components: named `function` exports (not arrow), PascalCase files. Props via `React.ComponentProps` + intersection.
- Formatting: Prettier-enforced — no semicolons, double quotes, 2-space indent. Tailwind classes sorted by `prettier-plugin-tailwindcss` using `cn()` from `@/lib/utils`.
- Styling: Tailwind utility classes only; no CSS modules. Use design system tokens (`--primary`, `--secondary`, `--tertiary`, `--surface-*`). Never use `#000000`; body text is `on-background` (`#1b1c1c`). No 1px borders for section separation — use surface tier transitions. Saffron (`tertiary`) is decorative only, burgundy (`secondary`) is for actions.
- Semantic HTML headings on every page. Clean crawlable internal links, readable URLs. Descriptive alt text on images, no keyword stuffing.
- Tap targets sized for thumbs. Forms short and mobile-completable. Do not hide hours/address in footer only.
- No test framework configured yet.
