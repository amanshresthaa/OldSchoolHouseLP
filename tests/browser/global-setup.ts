import type { FullConfig } from "@playwright/test"

import { browserWarmupPaths } from "@/tests/browser/route-checks"

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function warmPath(baseURL: string, path: string) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(new URL(path, baseURL), {
      redirect: "manual",
    })

    if (response.ok) {
      return
    }

    await delay(400)
  }

  throw new Error(`Failed to warm ${path} on ${baseURL}`)
}

export default async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0]?.use?.baseURL

  if (typeof baseURL !== "string") {
    throw new Error("Playwright baseURL is required for browser warm-up")
  }

  for (const path of browserWarmupPaths) {
    await warmPath(baseURL, path)
  }
}
