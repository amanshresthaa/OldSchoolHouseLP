import type { Page } from "@playwright/test"
import { expect, test } from "@playwright/test"

import { responsivePages } from "@/tests/browser/route-checks"

const breakpoints = [
  {
    name: "mobile",
    width: 390,
    height: 844,
    expectsMenuButton: true,
  },
  {
    name: "tablet",
    width: 768,
    height: 1024,
    expectsMenuButton: false,
  },
  {
    name: "laptop",
    width: 1024,
    height: 768,
    expectsMenuButton: false,
  },
  {
    name: "desktop",
    width: 1440,
    height: 900,
    expectsMenuButton: false,
  },
] as const

async function gotoWithWarmRetry(page: Page, path: string) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const response = await page.goto(path, {
      waitUntil: "domcontentloaded",
    })

    if (response?.ok()) {
      return response
    }

    await page.waitForTimeout(400)
  }
}

for (const pagePath of responsivePages) {
  for (const breakpoint of breakpoints) {
    test(`${pagePath} stays responsive at ${breakpoint.name}`, async ({
      page,
      baseURL,
    }) => {
      expect(baseURL).toBe("http://127.0.0.1:3001")

      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height,
      })
      await gotoWithWarmRetry(page, pagePath)

      await expect(page.locator("main")).toBeVisible()
      await expect(
        page.getByRole("link", { name: /^Book$/ }).first()
      ).toBeVisible()

      const overflow = await page.evaluate(() => ({
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
      }))

      expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth + 1)

      if (breakpoint.expectsMenuButton) {
        await expect(
          page.getByRole("button", { name: /open navigation menu/i })
        ).toBeVisible()
      } else {
        await expect(
          page.getByRole("button", { name: /open navigation menu/i })
        ).toHaveCount(0)
      }
    })
  }
}
