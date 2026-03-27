import { expect, test } from "@playwright/test"

const responsivePages = [
  "/",
  "/guides",
  "/sunday-roast",
  "/what-is-nepalese-food",
  "/traditional-pub-with-nepalese-kitchen",
  "/where-to-eat-in-stony-stratford",
  "/live-sport",
  "/dog-friendly-pub-stony-stratford",
  "/family-friendly-pub-stony-stratford",
  "/accessibility",
  "/wakes-life-celebrations",
] as const

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
      await page.goto(pagePath, { waitUntil: "domcontentloaded" })

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
