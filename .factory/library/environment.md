# Environment

Environment variables, external dependencies, and setup notes.

**What belongs here:** required env vars, external dependency assumptions, local setup notes, and constraints that affect reproducibility.  
**What does NOT belong here:** service ports and start/stop commands; those belong in `.factory/services.yaml`.

---

- Package manager: `pnpm`
- Application type: single Next.js 16 App Router marketing site
- External services: none required for the approved readiness mission
- Required credentials: none for the approved repo-files-only scope
- Current env expectation: no required runtime env vars are documented yet; the mission may add `.env.example` to make this explicit
- Local validation boundary: this repo must use `127.0.0.1:3001` for browser smoke testing because port `3000` is already occupied by another local app
- Off-limits: GitHub admin settings, branch protection, labels, rulesets, and any non-repo configuration
