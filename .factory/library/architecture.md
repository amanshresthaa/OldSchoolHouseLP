# Architecture

Architecture notes and operational patterns for this repository.

**What belongs here:** app structure, automation boundaries, validation architecture, and repo-specific implementation conventions that workers should reuse.  
**What does NOT belong here:** feature-by-feature task status or mission objectives.

---

- Repo shape: single Next.js application at the repository root using App Router, React 19, and Tailwind CSS
- UI/content source lives in `app/`, `components/`, `data/`, and supporting root configs
- There is no backend, database, queue, or external service layer in scope
- Readiness work should treat `package.json` scripts as the canonical source of truth for local validation commands
- Commit hooks live under `.husky/`
- CI and GitHub governance artifacts should live under `.github/`
- Factory operational artifacts for workers live under `.factory/`
- Validation architecture for this mission:
  - fast local checks: lint + typecheck + readiness scripts
  - canonical readiness / commit-time commands: `pnpm precommit:check`, `pnpm readiness:dead-code`, `pnpm readiness:duplicate-code`, `pnpm readiness:tech-debt`, and `pnpm readiness:scan`
  - automated tests: Vitest for unit/config smoke, Playwright for browser smoke
  - browser validation target: local app on `127.0.0.1:3001`
