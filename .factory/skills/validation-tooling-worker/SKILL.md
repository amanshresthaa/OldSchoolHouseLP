---
name: validation-tooling-worker
description: Implement repo validation tooling, hooks, test harnesses, and CI automation for the readiness mission.
---

# Validation Tooling Worker

NOTE: Startup and cleanup are handled by `worker-base`. This skill defines the work procedure.

## When to Use This Skill

Use this skill for features that add or modify:

- commit-time validation
- readiness scan tooling
- Vitest or Playwright test harnesses
- CI workflows and validation automation
- package scripts or config that define the canonical validation stack

## Required Skills

- `agent-browser` — invoke when the feature touches browser smoke coverage, local startup flow, or any validation path that exercises the web surface on `127.0.0.1:3001`.

## Work Procedure

1. Read the assigned feature, mission `AGENTS.md`, repo `AGENTS.md`, `.factory/services.yaml`, and relevant library notes before changing anything.
2. Inspect the current command/config surface (`package.json`, `.husky/`, `.github/`, test configs) and reuse existing script names where possible.
3. When adding a test harness or enforcement behavior, create the failing test/spec/fixture first whenever practical. For config-only gates, capture a negative-proof check that demonstrates the gate really fails on bad input.
4. Implement the smallest coherent change set that makes the new validation path pass while staying lightweight for this marketing-site repo.
5. If the feature touches browser validation, start or target the app only on `127.0.0.1:3001`, invoke `agent-browser`, and verify the intended routes or workflow end-to-end.
6. Run targeted commands first, then run the broader validators required by the feature. At minimum, preserve `pnpm lint`, `pnpm typecheck`, and any changed test/readiness commands.
7. If you add or rename a canonical validation command, update every repo-controlled caller in scope for the feature (`package.json`, hooks, workflows, docs/config touched by the feature).
8. Before handoff, ensure no long-running processes you started are left behind and record exact commands, exit codes, and observations.

## Example Handoff

```json
{
  "salientSummary": "Finished the readiness-scan foundation by wiring canonical pnpm scripts for dead-code, duplicate-code, and TODO scanning, then connected the pre-commit path to those documented commands. Verified the fast path still preserves zero-warning lint and type safety, and captured a negative-proof failure for a temporary TODO marker before restoring the tree.",
  "whatWasImplemented": "Updated package scripts and scan config so the repo now has committed readiness commands with deterministic pass/fail behavior, tightened the Husky entrypoint to call canonical scripts, and added minimal scan configuration that reports actionable file or package references for failures.",
  "whatWasLeftUndone": "",
  "verification": {
    "commandsRun": [
      {
        "command": "pnpm lint",
        "exitCode": 0,
        "observation": "Baseline lint still passes with zero warnings."
      },
      {
        "command": "pnpm typecheck",
        "exitCode": 0,
        "observation": "TypeScript still passes after the script/config changes."
      },
      {
        "command": "pnpm run readiness:scan",
        "exitCode": 0,
        "observation": "New readiness aggregation script completed successfully on the clean tree."
      },
      {
        "command": "pnpm run readiness:todo-scan",
        "exitCode": 1,
        "observation": "Temporary negative-proof fixture failed with a file path and line number, confirming the scan is enforcing."
      }
    ],
    "interactiveChecks": [
      {
        "action": "Started the local app on 127.0.0.1:3001 and used agent-browser to load / and /menu after wiring Playwright baseURL.",
        "observed": "The app loaded on 3001, not the unrelated service on 3000, and the routes rendered successfully."
      }
    ]
  },
  "tests": {
    "added": [
      {
        "file": "tests/smoke/routes.spec.ts",
        "cases": [
          {
            "name": "home route renders on the 3001 smoke target",
            "verifies": "Browser smoke coverage points at the agreed local app target."
          },
          {
            "name": "menu, book, events, and find-us routes render without navigation errors",
            "verifies": "The required public smoke route set is covered."
          }
        ]
      }
    ]
  },
  "discoveredIssues": []
}
```

## When to Return to Orchestrator

- The feature requires a GitHub admin capability that cannot be expressed as repo files
- A required validation tool cannot run within the mission boundaries on `127.0.0.1:3001`
- The feature would require a heavyweight or brittle tool that conflicts with the mission's lightweight-tooling requirement
- Existing repo state makes it impossible to preserve baseline validators without a separate prerequisite feature
