# User Testing

Validation surface notes, tool choices, and concurrency guidance for this repository.

**What belongs here:** testable user surfaces, required tools, dry-run findings, isolation constraints, and validation concurrency guidance.  
**What does NOT belong here:** implementation task tracking or CI policy text.

---

## Validation Surface

### Browser surface

- Surface: local Next.js site routes
- Primary tools: `agent-browser` for manual/interactive verification and Playwright for committed browser smoke coverage
- Required local target: `http://127.0.0.1:3001`
- Key routes for smoke validation: `/`, `/menu`, `/book`, `/events`, `/find-us`
- Prefer durable smoke assertions such as successful response, stable landmarks, or metadata/title signals over exact marketing-copy text when possible
- Important boundary: do not use port `3000`; dry run confirmed it currently serves another local app

### CLI surface

- Surface: package scripts and repo-governance files
- Tools: `pnpm`, git status/diff inspection, and file-based checks
- Validation focus: lint, typecheck, build, readiness scans, test scripts, workflow/template paths, and committed guidance consistency

## Dry-Run Findings

- Validation path is executable in this environment
- `pnpm lint`, `pnpm typecheck`, and `pnpm build` all pass in the current baseline
- Browser automation is available and functional
- A local server on port `3000` responded during dry run, but it was not this repo's app; use `3001` for this mission
- Machine resources are sufficient for lightweight parallel validation, but existing local `droid` and browser-helper processes are already consuming noticeable memory

## Validation Concurrency

### Browser validation

- Max concurrent validators: 4
- Resource class: medium
- Rationale: machine has 18 CPU cores and 64 GB RAM, but dry run observed several large resident processes already active, including a heavy local Next.js process and multiple helper processes; keeping browser concurrency at 4 leaves comfortable headroom while still allowing parallel flow checks

### CLI validation

- Max concurrent validators: 5
- Resource class: low
- Rationale: lint/typecheck/readiness checks are lighter than browser sessions, but workers should still avoid over-saturating a machine already running multiple agent processes

## Flow Validator Guidance: CLI surface

- Use the repository root as the only working directory.
- Do not edit application files; validation is read-only unless explicitly writing your assigned flow report.
- Avoid mutating shared git state beyond temporary, reversible validation setup in your own process.
- Negative-proof checks that intentionally fail must restore the tree before exit.
- Do not start browser sessions for CLI-only assertions.

## Flow Validator Guidance: Browser surface

- Target only http://127.0.0.1:3001 for this repo. Never validate on port 3000.
- Reuse the shared local app instance when available; do not launch extra servers unless explicitly isolated.
- Browser validators may navigate only the assigned public routes and should not modify shared repo files.
- Save browser evidence inside the assigned evidence directory only.
- Close every browser session you open before ending the run.
