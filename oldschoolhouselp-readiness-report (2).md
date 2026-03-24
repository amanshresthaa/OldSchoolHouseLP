# Agent Readiness Report: oldschoolhouselp

**Level:** 3/5  
**Overall Score:** 55%  
**Generated:** 2026-03-24 15:53:58 UTC  
**Commit:** `f94f081`  
**Branch:** main

## Summary

| Metric         | Value |
| -------------- | ----- |
| Total Criteria | 81    |
| Passed         | 38    |
| Failed         | 31    |
| Skipped        | 12    |

## Pass Rate by Category

| Category                  | Pass Rate |
| ------------------------- | --------- |
| Style & Validation        | 82%       |
| Build System              | 43%       |
| Testing                   | 75%       |
| Documentation             | 71%       |
| Development Environment   | 50%       |
| Debugging & Observability | 20%       |
| Security                  | 55%       |
| Task Discovery            | 75%       |
| Product & Experimentation | 0%        |

## Style & Validation

| Criterion                       | Score | Status    | Rationale                                                                                                                                                                        |
| ------------------------------- | ----- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cyclomatic Complexity           | 0/1   | 🔴 Failed | No ESLint complexity rule, Sonar config, or other cyclomatic/cognitive complexity analyzer was found.                                                                            |
| Large File Detection            | 0/1   | 🔴 Failed | No hook, CI job, `.gitattributes` LFS rule, or linter rule was found that enforces maximum file size or line-count limits.                                                       |
| Linter Configuration            | 1/1   | 🟢 Passed | `eslint.config.mjs` configures Next.js core-web-vitals and TypeScript linting, and `.github/workflows/validation.yml` runs `pnpm lint` on push and PRs.                          |
| Type Checker                    | 1/1   | 🟢 Passed | `tsconfig.json` exists for the app and enables TypeScript with `strict: true`; `package.json` exposes `pnpm typecheck`.                                                          |
| Code Formatter                  | 1/1   | 🟢 Passed | `.prettierrc` configures Prettier with the Tailwind plugin, and `package.json` includes a `format` script plus `lint-staged` formatting.                                         |
| Pre-commit Hooks                | 1/1   | 🟢 Passed | Previously failing, now passes: `.husky/pre-commit` runs `pnpm precommit:check`, and `package.json` configures `husky` plus `lint-staged`.                                       |
| Strict Typing                   | 1/1   | 🟢 Passed | `tsconfig.json` has `strict: true`, so the Next.js application uses strict TypeScript checking.                                                                                  |
| Naming Consistency              | 1/1   | 🟢 Passed | `AGENTS.md` documents consistent naming rules such as PascalCase component files, `@/` imports, and interface-based prop typing.                                                 |
| Dead Code Detection             | 1/1   | 🟢 Passed | Previously failing, now passes: `knip.json` is committed, `package.json` defines `pnpm readiness:dead-code`, and CI runs it via `pnpm readiness:scan`.                           |
| Duplicate Code Detection        | 1/1   | 🟢 Passed | Previously failing, now passes: `jscpd.json` is committed, `package.json` defines `pnpm readiness:duplicate-code`, and CI runs it via `pnpm readiness:scan`.                     |
| Technical Debt Tracking         | 1/1   | 🟢 Passed | Previously failing, now passes: `scripts/readiness/tech-debt-scan.mjs` scans for TODO/FIXME/HACK/XXX markers, `package.json` exposes `pnpm readiness:tech-debt`, and CI runs it. |
| Code Modularization Enforcement | N/A   | Skipped   | Skipped: this is a small single-app marketing site, so formal module-boundary tooling is not meaningfully required.                                                              |
| N+1 Query Detection             | N/A   | Skipped   | Skipped: no database, ORM, or query layer exists in this repository.                                                                                                             |

## Build System

| Criterion                      | Score | Status    | Rationale                                                                                                                                                                   |
| ------------------------------ | ----- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automated PR Review Generation | 0/1   | 🔴 Failed | `gh pr list --state all --limit 20 --json reviews,comments,statusCheckRollup,commits` returned no PR history, and no Danger or automated review-comment workflow was found. |
| Fast CI Feedback               | 0/1   | 🔴 Failed | A validation workflow exists, but `gh run list --limit 30` returned no workflow runs, so sub-10-minute CI feedback is not evidenced yet.                                    |
| Build Performance Tracking     | 0/1   | 🔴 Failed | The repo has a validation workflow, but no build-duration metrics, bundle timing reports, or other deliberate build performance tracking were found.                        |
| Deployment Frequency           | 0/1   | 🔴 Failed | `gh release list` and `gh run list` showed no release or deploy history, so frequent automated deployments are not evidenced.                                               |
| Feature Flag Infrastructure    | 0/1   | 🔴 Failed | No LaunchDarkly, Statsig, GrowthBook, Unleash, or custom feature-flag system was found.                                                                                     |
| Release Notes Automation       | 0/1   | 🔴 Failed | No changesets, semantic-release, generated changelog workflow, or automated GitHub release-notes setup was found.                                                           |
| Heavy Dependency Detection     | 0/1   | 🔴 Failed | No bundle analyzer, size-budget tool, or dependency-weight reporting was found for the Next.js application.                                                                 |
| Release Automation             | 0/1   | 🔴 Failed | No deploy-on-merge workflow, release publishing pipeline, or automated deployment configuration was found.                                                                  |
| Build Command Documentation    | 1/1   | 🟢 Passed | `README.md` and `AGENTS.md` both document the production build command as `pnpm build`.                                                                                     |
| Dependencies Pinned            | 1/1   | 🟢 Passed | `pnpm-lock.yaml` is committed, so JavaScript dependencies are pinned.                                                                                                       |
| VCS CLI Tools                  | 1/1   | 🟢 Passed | `gh auth status` succeeded for the active GitHub account, so authenticated VCS CLI tooling is available.                                                                    |
| Agentic Development            | 1/1   | 🟢 Passed | Strong evidence exists: root `AGENTS.md`, `.factory/` services/skills/validation artifacts, and recent git history includes `Co-authored-by: factory-droid[bot]`.           |
| Single Command Setup           | 1/1   | 🟢 Passed | Previously failing, now passes: `README.md` documents a short fresh-clone sequence (`pnpm install --frozen-lockfile`, `cp .env.example .env.local`, `pnpm dev`).            |
| Unused Dependencies Detection  | 1/1   | 🟢 Passed | Previously failing, now passes: `knip.json` is configured and CI runs `pnpm readiness:dead-code`, which checks for unused dependencies and exports.                         |
| Progressive Rollout            | N/A   | Skipped   | Skipped: this repository does not contain deployment infrastructure or rollout controls to evaluate.                                                                        |
| Rollback Automation            | N/A   | Skipped   | Skipped: this repository does not contain deployment automation where rollback controls would be defined.                                                                   |
| Monorepo Tooling               | N/A   | Skipped   | Skipped: this repository contains one application at the root rather than a monorepo.                                                                                       |
| Version Drift Detection        | N/A   | Skipped   | Skipped: version drift detection applies to monorepos, and this repository is a single-app repo.                                                                            |
| Dead Feature Flag Detection    | N/A   | Skipped   | Skipped: no feature-flag infrastructure exists, so stale-flag detection is not applicable.                                                                                  |

## Testing

| Criterion                    | Score | Status    | Rationale                                                                                                                                                     |
| ---------------------------- | ----- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Test Performance Tracking    | 0/1   | 🔴 Failed | No test-duration reporting, analytics platform, or CI timing output dedicated to monitoring test performance was found.                                       |
| Test Coverage Thresholds     | 0/1   | 🔴 Failed | No coverage thresholds, coverage-fail-under setting, or coverage gate was found in Vitest config, scripts, or CI.                                             |
| Unit Tests Exist             | 1/1   | 🟢 Passed | Previously failing, now passes: `tests/unit/routes-config.test.ts` provides Vitest unit/config smoke coverage.                                                |
| Integration Tests Exist      | 1/1   | 🟢 Passed | Previously failing, now passes: `playwright.config.ts` and `tests/browser/public-routes.spec.ts` provide browser integration smoke coverage.                  |
| Unit Tests Runnable          | 1/1   | 🟢 Passed | Previously failing, now passes: `pnpm exec vitest list --config vitest.config.ts` succeeded and enumerated the unit tests.                                    |
| Flaky Test Detection         | 1/1   | 🟢 Passed | Previously failing, now passes: `playwright.config.ts` enables CI retries (`retries: process.env.CI ? 2 : 0`) and retry traces (`trace: "on-first-retry"`).   |
| Test File Naming Conventions | 1/1   | 🟢 Passed | Previously failing, now passes: `vitest.config.ts` enforces `tests/unit/**/*.test.ts`, and browser tests live under the configured `tests/browser` directory. |
| Test Isolation               | 1/1   | 🟢 Passed | Previously failing, now passes: `playwright.config.ts` enables `fullyParallel: true`, providing explicit isolated/parallel browser test execution.            |

## Documentation

| Criterion                          | Score | Status    | Rationale                                                                                                                                                                                   |
| ---------------------------------- | ----- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Automated Documentation Generation | 0/1   | 🔴 Failed | No doc-generation workflow or tool was found that automatically produces or updates project documentation.                                                                                  |
| AGENTS.md Freshness Validation     | 0/1   | 🔴 Failed | No CI job, hook, or automation was found that validates `AGENTS.md` stays synchronized with executable commands or repo behavior.                                                           |
| AGENTS.md File                     | 1/1   | 🟢 Passed | A substantive root `AGENTS.md` documents commands, architecture, page structure, and coding conventions.                                                                                    |
| README File                        | 1/1   | 🟢 Passed | Previously failing, now passes: `README.md` is now repo-specific and documents requirements, setup, validation commands, and key paths.                                                     |
| Skills Configuration               | 1/1   | 🟢 Passed | Previously failing, now passes: `.factory/skills/governance-worker/SKILL.md` and `.factory/skills/validation-tooling-worker/SKILL.md` are valid skills with frontmatter and prompt content. |
| Documentation Freshness            | 1/1   | 🟢 Passed | `git log --since="180 days ago" -- README.md AGENTS.md CONTRIBUTING.md` shows recent commits touching both `README.md` and `AGENTS.md`.                                                     |
| Service Architecture Documented    | 1/1   | 🟢 Passed | Previously failing, now passes: `.factory/library/architecture.md` documents the repo shape, automation boundaries, validation architecture, and service assumptions.                       |
| API Schema Docs                    | N/A   | Skipped   | Skipped: this is a marketing website with no HTTP API or schema surface to document.                                                                                                        |

## Development Environment

| Criterion             | Score | Status    | Rationale                                                                                                   |
| --------------------- | ----- | --------- | ----------------------------------------------------------------------------------------------------------- |
| Dev Container         | 0/1   | 🔴 Failed | No `.devcontainer/devcontainer.json` was found.                                                             |
| Environment Template  | 1/1   | 🟢 Passed | Previously failing, now passes: `.env.example` exists and `README.md` documents copying it to `.env.local`. |
| Local Services Setup  | N/A   | Skipped   | Skipped: the application has no required external local services such as databases or caches.               |
| Database Schema       | N/A   | Skipped   | Skipped: no database usage or schema files were found.                                                      |
| Devcontainer Runnable | N/A   | Skipped   | Skipped: no devcontainer configuration exists to build and run.                                             |

## Debugging & Observability

| Criterion                      | Score | Status    | Rationale                                                                                                                                                         |
| ------------------------------ | ----- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structured Logging             | 0/1   | 🔴 Failed | No structured logging library or dedicated logger module was found.                                                                                               |
| Distributed Tracing            | 0/1   | 🔴 Failed | No OpenTelemetry setup, request ID propagation, or trace header handling was found.                                                                               |
| Metrics Collection             | 0/1   | 🔴 Failed | No application metrics or telemetry instrumentation such as GA4, Datadog, Prometheus, or similar was found in the code or config.                                 |
| Error Tracking Contextualized  | 0/1   | 🔴 Failed | No Sentry, Bugsnag, Rollbar, or similar contextual error-tracking setup was found.                                                                                |
| Alerting Configured            | 0/1   | 🔴 Failed | No PagerDuty, OpsGenie, Slack alerting, or alert-rule configuration was found.                                                                                    |
| Runbooks Documented            | 0/1   | 🔴 Failed | No runbooks directory or incident-response documentation pointers were found.                                                                                     |
| Deployment Observability       | 0/1   | 🔴 Failed | No deploy dashboards, monitoring links, or deploy-notification integrations were documented.                                                                      |
| Profiling Instrumentation      | 0/1   | 🔴 Failed | No APM, continuous profiling, or dedicated performance profiling tool was found.                                                                                  |
| Code Quality Metrics Dashboard | 1/1   | 🟢 Passed | Previously failing, now passes: CI runs `pnpm readiness:scan`, which executes Knip and JSCPD to monitor maintainability signals like unused code and duplication. |
| Health Checks                  | 1/1   | 🟢 Passed | Previously failing, now passes: `.factory/services.yaml` defines a `web` service healthcheck using `curl -sf http://127.0.0.1:3001`.                              |
| Circuit Breakers               | N/A   | Skipped   | Skipped: the app has no external service integration pattern that would require circuit-breaker or fallback controls.                                             |

## Security

| Criterion                            | Score | Status    | Rationale                                                                                                                                                                            |
| ------------------------------------ | ----- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Branch Protection                    | 0/1   | 🔴 Failed | With admin access confirmed, `gh api repos/amanshresthaa/OldSchoolHouseLP/rulesets` returned `[]` and `branches/main/protection` returned `Branch not protected`.                    |
| Secret Scanning                      | 0/1   | 🔴 Failed | GitHub reported `Secret scanning is disabled on this repository`, and no gitleaks, trufflehog, or detect-secrets config was found.                                                   |
| Automated Security Review Generation | 0/1   | 🔴 Failed | `gh api /repos/amanshresthaa/OldSchoolHouseLP/code-scanning/alerts` and `/analyses` returned `no analysis found`, and no security-review workflow was found.                         |
| DAST Scanning                        | 0/1   | 🔴 Failed | No OWASP ZAP, StackHawk, Nuclei, or other DAST workflow was found.                                                                                                                   |
| Sensitive Data Log Scrubbing         | 0/1   | 🔴 Failed | No log redaction or sanitization mechanism was found.                                                                                                                                |
| CODEOWNERS File                      | 1/1   | 🟢 Passed | Previously failing, now passes: `.github/CODEOWNERS` exists and assigns real ownership to `@amanshresthaa` for the repo and governance-critical paths.                               |
| Dependency Update Automation         | 1/1   | 🟢 Passed | Previously failing, now passes: `.github/dependabot.yml` configures weekly npm dependency update PRs for the repository root.                                                        |
| Gitignore Comprehensive              | 1/1   | 🟢 Passed | Previously failing, now passes: `.gitignore` now excludes `.env`, `.env.local`, `node_modules`, `.next`, build/test artifacts, IDE folders, and `.DS_Store`.                         |
| PII Handling                         | 1/1   | 🟢 Passed | The repo includes cookie-consent utilities plus a dedicated `/privacy` page explaining booking/contact details, cookies, and user data handling.                                     |
| Privacy Compliance                   | 1/1   | 🟢 Passed | Cookie consent is implemented via `components/site/CookieBanner.tsx` and `lib/consent.ts`, and the `/privacy` page documents privacy practices.                                      |
| Secrets Management                   | 1/1   | 🟢 Passed | Previously failing, now passes: the repo now uses a committed `.env.example` template and `.gitignore` safely excludes real `.env` files; no runtime secrets are currently required. |

## Task Discovery

| Criterion             | Score | Status    | Rationale                                                                                                                                       |
| --------------------- | ----- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Issue Labeling System | 0/1   | 🔴 Failed | `gh label list` showed only default labels such as `bug`, `documentation`, and `enhancement`; no consistent priority/type/area taxonomy exists. |
| Issue Templates       | 1/1   | 🟢 Passed | Previously failing, now passes: `.github/ISSUE_TEMPLATE/bug-report.yml` and `feature-request.yml` provide structured issue intake templates.    |
| Backlog Health        | 1/1   | 🟢 Passed | `gh issue list --state open --limit 50 --json title,createdAt,labels` returned no open issues, so there is no stale or unlabeled backlog.       |
| PR Templates          | 1/1   | 🟢 Passed | Previously failing, now passes: `.github/PULL_REQUEST_TEMPLATE.md` requires summary, validation steps, context, and risk notes for PRs.         |

## Product & Experimentation

| Criterion                         | Score | Status    | Rationale                                                                                                        |
| --------------------------------- | ----- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| Product Analytics Instrumentation | 0/1   | 🔴 Failed | No Mixpanel, Amplitude, PostHog, GA4, or similar product analytics instrumentation was found in the application. |
| Error to Insight Pipeline         | 0/1   | 🔴 Failed | No Sentry-to-GitHub integration, error-created issue workflow, or similar error-to-insight automation was found. |

---

_Generated by Factory Agent Readiness_
