#!/usr/bin/env sh
set -eu

pnpm install --frozen-lockfile

if grep -q '"@playwright/test"' package.json 2>/dev/null; then
  pnpm exec playwright install chromium >/dev/null 2>&1 || true
fi
