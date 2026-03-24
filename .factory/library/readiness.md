# Readiness

Repo-readiness mission notes and scope boundaries.

**What belongs here:** readiness report findings that affect worker decisions, in-scope vs out-of-scope fixes, and repo-specific guardrail targets.  
**What does NOT belong here:** implementation history or user-facing product requirements.

---

- Source report: `oldschoolhouselp-readiness-report.md`
- Approved scope: repo-contained fixes only
- Explicitly out of scope:
  - GitHub admin settings such as branch protection, rulesets, labels, secret scanning toggles, and org-level security settings
  - Remote deployment setup
  - Business-content changes unrelated to readiness artifacts
- Priority order:
  1. validation foundation
  2. repo governance
- Initial baseline already present:
  - root `AGENTS.md`
  - strict TypeScript config
  - ESLint and Prettier config
  - committed `pnpm-lock.yaml`
  - draft Husky + lint-staged setup in working tree
