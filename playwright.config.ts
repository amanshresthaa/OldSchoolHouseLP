import { defineConfig, devices } from "@playwright/test"

const baseURL = "http://127.0.0.1:3001"

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  globalSetup: "./tests/browser/global-setup.ts",
  retries: process.env.CI ? 2 : 0,
  workers: 2,
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm dev:smoke",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 120000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
})
