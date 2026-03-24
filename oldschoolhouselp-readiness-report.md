# Agent Readiness Report: oldschoolhouselp

**Level:** 2/5  
**Overall Score:** 20%  
**Generated:** 2026-03-24 13:43:07 UTC  
**Commit:** `c71ae22`  
**Branch:** main  

## Summary

| Metric | Value |
|--------|-------|
| Total Criteria | 81 |
| Passed | 14 |
| Failed | 55 |
| Skipped | 12 |

## Pass Rate by Category

| Category | Pass Rate |
|----------|-----------|
| Style & Validation | 45% |
| Build System | 29% |
| Testing | 0% |
| Documentation | 29% |
| Development Environment | 0% |
| Debugging & Observability | 0% |
| Security | 18% |
| Task Discovery | 25% |
| Product & Experimentation | 0% |

## Style & Validation

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| Pre-commit Hooks | 0/1 | 🔴 Failed | No Husky, lint-staged, or `.pre-commit-config.yaml` was found. |
| Cyclomatic Complexity | 0/1 | 🔴 Failed | No complexity rule, analyzer, or CI check was found for cyclomatic/cognitive complexity. |
| Large File Detection | 0/1 | 🔴 Failed | No hooks, CI checks, LFS config, or lint rules were found that detect oversized files or max line counts. |
| Dead Code Detection | 0/1 | 🔴 Failed | No knip, depcheck-based dead code rules, import/no-unused-modules, or equivalent detector was found. |
| Duplicate Code Detection | 0/1 | 🔴 Failed | No duplicate-code tooling such as jscpd, Sonar, or CPD integration was found. |
| Technical Debt Tracking | 0/1 | 🔴 Failed | No TODO/FIXME tracking, Sonar setup, or other technical-debt scanning automation was found. |
| Linter Configuration | 1/1 | 🟢 Passed | `eslint.config.mjs` configures Next.js core-web-vitals and TypeScript ESLint rules for the app. |
| Type Checker | 1/1 | 🟢 Passed | `tsconfig.json` exists and enables TypeScript with `strict: true`. |
| Code Formatter | 1/1 | 🟢 Passed | `.prettierrc` configures Prettier, including Tailwind class sorting. |
| Strict Typing | 1/1 | 🟢 Passed | The root TypeScript config has `strict: true`, so the application uses strict type checking. |
| Naming Consistency | 1/1 | 🟢 Passed | `AGENTS.md` documents naming conventions such as PascalCase component files and `@/` imports. |
| Code Modularization Enforcement | N/A | Skipped | Skipped: this is a small single-app marketing site and no meaningful module-boundary enforcement is expected. |
| N+1 Query Detection | N/A | Skipped | Skipped: the app shows no database or ORM usage, so N+1 query detection is not applicable. |

## Build System

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| Automated PR Review Generation | 0/1 | 🔴 Failed | `gh pr list` returned no PRs and no review bot, Danger, or AI review automation was found in the repository. |
| Fast CI Feedback | 0/1 | 🔴 Failed | No GitHub Actions workflow runs or other CI evidence were found, so sub-10-minute feedback is not demonstrated. |
| Build Performance Tracking | 0/1 | 🔴 Failed | No build workflows, caching metrics, bundle timing reports, or other build performance tracking were found. |
| Deployment Frequency | 0/1 | 🔴 Failed | No releases and no deployment workflow runs were returned by GitHub CLI, so frequent automated deployments are not evidenced. |
| Single Command Setup | 0/1 | 🔴 Failed | The docs list commands, but no single documented fresh-clone setup sequence to install deps and start the app was found. |
| Feature Flag Infrastructure | 0/1 | 🔴 Failed | No LaunchDarkly, Statsig, GrowthBook, Unleash, or custom feature-flag system was found. |
| Release Notes Automation | 0/1 | 🔴 Failed | No changesets, semantic-release, GitHub release automation, or changelog generation tooling was found. |
| Heavy Dependency Detection | 0/1 | 🔴 Failed | No bundle analyzer, size budget tooling, or CI bundle-size reporting was found. |
| Unused Dependencies Detection | 0/1 | 🔴 Failed | No unused dependency detector such as depcheck, knip, or equivalent CI check was found. |
| Release Automation | 0/1 | 🔴 Failed | No CD workflow, release publishing automation, or deploy-on-merge pipeline was found. |
| Build Command Documentation | 1/1 | 🟢 Passed | `AGENTS.md` documents the production build command as `pnpm build`. |
| Dependencies Pinned | 1/1 | 🟢 Passed | `pnpm-lock.yaml` is committed, so dependency versions are pinned. |
| VCS CLI Tools | 1/1 | 🟢 Passed | `gh auth status` succeeded and showed an authenticated GitHub CLI session. |
| Agentic Development | 1/1 | 🟢 Passed | The repo root contains `AGENTS.md`, and the local working tree includes `.factory/settings.json` enabling Factory plugins, indicating agent tooling is configured. |
| Progressive Rollout | N/A | Skipped | Skipped: this repository is not an infrastructure/deployment repo and shows no rollout platform to evaluate. |
| Rollback Automation | N/A | Skipped | Skipped: this repository does not contain infrastructure or deployment automation where rollback controls would live. |
| Monorepo Tooling | N/A | Skipped | Skipped: the repository contains one application at the root rather than a monorepo. |
| Version Drift Detection | N/A | Skipped | Skipped: version drift detection applies to monorepos, and this repository is single-app. |
| Dead Feature Flag Detection | N/A | Skipped | Skipped: no feature-flag infrastructure exists, so stale-flag detection is not applicable. |

## Testing

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| Unit Tests Exist | 0/1 | 🔴 Failed | No unit test files or `__tests__` directories were found. |
| Integration Tests Exist | 0/1 | 🔴 Failed | No Playwright, Cypress, or other integration test setup was found. |
| Unit Tests Runnable | 0/1 | 🔴 Failed | `package.json` has no `test` script or other runnable unit-test command. |
| Test Performance Tracking | 0/1 | 🔴 Failed | No test runner, test timing flags, or CI test-duration reporting was found. |
| Flaky Test Detection | 0/1 | 🔴 Failed | No retry/quarantine tooling, flaky-test analytics, or CI evidence of flaky test management was found. |
| Test Coverage Thresholds | 0/1 | 🔴 Failed | No enforced coverage thresholds or coverage gate configuration was found. |
| Test File Naming Conventions | 0/1 | 🔴 Failed | No test framework config or documentation defining test naming patterns was found. |
| Test Isolation | 0/1 | 🔴 Failed | No isolated or parallel test configuration was found because no automated test framework is configured. |

## Documentation

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| README File | 0/1 | 🔴 Failed | `README.md` exists but remains a generic Next.js template and does not document this project's setup or usage. |
| Automated Documentation Generation | 0/1 | 🔴 Failed | No doc-generation tooling, doc workflows, or auto-generated API/changelog docs were found. |
| Skills Configuration | 0/1 | 🔴 Failed | No valid skills directory containing `SKILL.md` files was found. |
| Service Architecture Documented | 0/1 | 🔴 Failed | No architecture diagram, service dependency document, or flow diagram for system interactions was found. |
| AGENTS.md Freshness Validation | 0/1 | 🔴 Failed | No CI, hooks, or automation were found that validate `AGENTS.md` stays in sync with the codebase. |
| AGENTS.md File | 1/1 | 🟢 Passed | A non-trivial root `AGENTS.md` exists and documents commands, architecture, and coding conventions. |
| Documentation Freshness | 1/1 | 🟢 Passed | `README.md` and `AGENTS.md` both have commits within the last 180 days. |
| API Schema Docs | N/A | Skipped | Skipped: this is a marketing website with no HTTP API schema files or API surface to document. |

## Development Environment

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| Dev Container | 0/1 | 🔴 Failed | No `.devcontainer/devcontainer.json` was found. |
| Environment Template | 0/1 | 🔴 Failed | No `.env.example` file exists, and environment variables are not documented as a runnable template. |
| Local Services Setup | N/A | Skipped | Skipped: no external local services such as databases or caches are required by the app. |
| Database Schema | N/A | Skipped | Skipped: no database usage or schema files were found. |
| Devcontainer Runnable | N/A | Skipped | Skipped: there is no devcontainer configuration to build and run. |

## Debugging & Observability

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| Structured Logging | 0/1 | 🔴 Failed | No structured logging library or dedicated logger module was found. |
| Distributed Tracing | 0/1 | 🔴 Failed | No OpenTelemetry, request ID propagation, or trace header handling was found. |
| Metrics Collection | 0/1 | 🔴 Failed | No metrics or telemetry instrumentation such as Datadog, Prometheus, or GA4 was found in code or config. |
| Code Quality Metrics Dashboard | 0/1 | 🔴 Failed | GitHub code-scanning alerts returned `no analysis found`, and no coverage, maintainability, or quality metrics tooling was found. |
| Error Tracking Contextualized | 0/1 | 🔴 Failed | No Sentry, Bugsnag, Rollbar, or equivalent contextual error tracking setup was found. |
| Alerting Configured | 0/1 | 🔴 Failed | No PagerDuty, OpsGenie, Slack alerting, or alert-rule configuration was found. |
| Runbooks Documented | 0/1 | 🔴 Failed | No runbooks directory or incident-response documentation references were found. |
| Deployment Observability | 0/1 | 🔴 Failed | No monitoring dashboard links, deploy notifications, or deploy-impact documentation was found. |
| Health Checks | 0/1 | 🔴 Failed | No `/health` endpoint, Docker health check, or readiness/liveness probe configuration was found. |
| Profiling Instrumentation | 0/1 | 🔴 Failed | No APM, continuous profiling, or performance profiling tooling was found. |
| Circuit Breakers | N/A | Skipped | Skipped: the app has no server-side external service integration pattern that would require circuit-breaker logic. |

## Security

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| Branch Protection | 0/1 | 🔴 Failed | The repository is now public and GitHub returned no rulesets plus `branches/main/protection` reported `Branch not protected`, so protection is not configured. |
| Secret Scanning | 0/1 | 🔴 Failed | GitHub reported secret scanning is disabled, and no gitleaks, trufflehog, or detect-secrets tooling was found. |
| CODEOWNERS File | 0/1 | 🔴 Failed | No `CODEOWNERS` file exists in the root or `.github/`. |
| Automated Security Review Generation | 0/1 | 🔴 Failed | GitHub code-scanning alerts returned `no analysis found`, and no automated security review/reporting workflow was found. |
| Dependency Update Automation | 0/1 | 🔴 Failed | No Dependabot, Renovate, or equivalent dependency update automation config was found. |
| Gitignore Comprehensive | 0/1 | 🔴 Failed | `.gitignore` excludes `node_modules` and some env patterns, but it does not exclude bare `.env` or IDE folders like `.idea` and `.vscode`. |
| DAST Scanning | 0/1 | 🔴 Failed | No OWASP ZAP, StackHawk, Nuclei, or other DAST workflow was found. |
| Secrets Management | 0/1 | 🔴 Failed | No secrets manager integration or `.env.example` exists, and `.gitignore` does not safely cover bare `.env` files. |
| Sensitive Data Log Scrubbing | 0/1 | 🔴 Failed | No log redaction or sanitization mechanism was found. |
| PII Handling | 1/1 | 🟢 Passed | The app includes a dedicated privacy page and cookie-consent flow documenting what guest data is collected, retained, and how deletion/correction requests are handled. |
| Privacy Compliance | 1/1 | 🟢 Passed | Cookie consent utilities and a `/privacy` page provide explicit consent handling and privacy/compliance guidance. |

## Task Discovery

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| Issue Templates | 0/1 | 🔴 Failed | No `.github/ISSUE_TEMPLATE/` directory or issue template files were found. |
| Issue Labeling System | 0/1 | 🔴 Failed | Only default GitHub labels were present; no consistent priority/type/area taxonomy was configured. |
| PR Templates | 0/1 | 🔴 Failed | No pull request template was found in `.github/` or the repository root. |
| Backlog Health | 1/1 | 🟢 Passed | `gh issue list` returned no open issues, so no stale or unlabeled backlog was present. |

## Product & Experimentation

| Criterion | Score | Status | Rationale |
|-----------|-------|--------|-----------|
| Product Analytics Instrumentation | 0/1 | 🔴 Failed | No Mixpanel, Amplitude, PostHog, GA4, or similar product analytics instrumentation was found. |
| Error to Insight Pipeline | 0/1 | 🔴 Failed | No Sentry-to-issue integration, error-created issue workflow, or similar error-to-insight automation was found. |

---

*Generated by Factory Agent Readiness*