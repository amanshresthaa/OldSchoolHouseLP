# Old School House Landing Page

The Old School House Landing Page is a `Next.js 16` + `React 19` marketing site for the Old School House pub and restaurant. This repository is maintained with `pnpm`, local validation scripts, and a browser smoke path pinned to `http://127.0.0.1:3001`.

## Requirements

- Node.js 20.x
- pnpm 10.x

## Fresh-clone setup

1. Install dependencies:

   ```bash
   pnpm install --frozen-lockfile
   ```

2. Copy the safe environment template:

   ```bash
   cp .env.example .env.local
   ```

   No runtime environment variables are currently required for the approved repo scope. The template exists to keep local setup explicit if that changes later.

3. Start the local development server:

   ```bash
   pnpm dev
   ```

4. Start the browser-smoke target on the approved local port when you need smoke validation or a second local instance:

   ```bash
   pnpm dev:smoke
   ```

   Use `http://127.0.0.1:3001` for this repo's browser validation. Port `3000` is reserved for a different local app in this environment.

## Canonical validation commands

Run these from the repository root:

- `pnpm lint` — ESLint with zero warnings allowed
- `pnpm typecheck` — TypeScript `tsc --noEmit`
- `pnpm test` — full local smoke suite (`pnpm test:unit && pnpm test:browser`)
- `pnpm test:unit` — Vitest route/config smoke checks
- `pnpm test:browser` — Playwright route smoke checks against `127.0.0.1:3001`
- `pnpm readiness:dead-code` — Knip dead or unused code scan
- `pnpm readiness:duplicate-code` — JSCPD duplicate-code scan
- `pnpm readiness:tech-debt` — tech-debt marker scan
- `pnpm readiness:scan` — aggregate readiness scan command
- `pnpm build` — production build verification

## Suggested local workflow

1. Make your changes.
2. Run the relevant fast checks while iterating (`pnpm lint`, `pnpm typecheck`, targeted tests).
3. Before opening a PR or handing work off, run the full local validation stack:

   ```bash
   pnpm lint
   pnpm typecheck
   pnpm test
   pnpm readiness:scan
   pnpm build
   ```

4. Confirm generated local artifacts stay untracked:

   ```bash
   git status --short
   ```

   A clean working tree after local checks should only show intentional tracked-file edits. Local env files, Playwright output, and editor caches should remain ignored.

## Key repo paths

- `app/`, `components/`, `data/` — site routes, UI, and content sources
- `tests/unit/` — Vitest smoke coverage
- `tests/browser/` — Playwright smoke coverage
- `.github/workflows/validation.yml` — CI validation gates using the same script names as local development
- `.husky/pre-commit` — pre-commit entrypoint (`pnpm precommit:check`)
- `.factory/services.yaml` — canonical service/command manifest for agents and maintainers
- `.factory/library/` — repo-specific architecture and environment guidance

## Environment and ignore rules

- Keep real env files local only (`.env`, `.env.local`, `.env.*.local`, and similar variants stay ignored).
- Keep `.env.example` committed as the safe copyable template.
- Playwright output such as `test-results/` and browser report artifacts should stay untracked.
- Do not add credentials or undocumented runtime dependencies to this repo without updating the committed setup guidance first.
