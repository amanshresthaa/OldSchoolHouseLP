import type { Page } from "@playwright/test"
import { expect, test } from "@playwright/test"

import { publicRouteChecks } from "@/tests/browser/route-checks"

async function gotoWithWarmRetry(page: Page, path: string) {
  let response = await page.goto(path, {
    waitUntil: "domcontentloaded",
  })

  if (response?.ok()) {
    return response
  }

  await page.waitForTimeout(300)

  response = await page.goto(path, {
    waitUntil: "domcontentloaded",
  })

  return response
}

for (const route of publicRouteChecks) {
  test(`renders ${route.path} on the smoke target`, async ({
    page,
    baseURL,
  }) => {
    expect(baseURL).toBe("http://127.0.0.1:3001")

    await gotoWithWarmRetry(page, route.path)
    await expect(page).toHaveURL(
      new RegExp(`${route.path === "/" ? "/?$" : `${route.path}$`}`)
    )
    await expect(page).toHaveTitle(new RegExp(route.title))
    await expect(page.locator("main")).toBeVisible()
  })
}

test("homepage keeps the pub-led headline and conversion links visible", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" })

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Traditional pub and Nepalese kitchen on London Road in Stony Stratford."
  )
  await expect(
    page.getByRole("link", { name: /book a table/i }).first()
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /view menu/i }).first()
  ).toBeVisible()
  await expect(page.locator('a[href="/about"]').first()).toBeVisible()
  await expect(page.locator('a[href="/contact-us"]').first()).toBeVisible()
})

test("nepalese kitchen page links back into menu and booking", async ({
  page,
}) => {
  await page.goto("/nepalese-kitchen", { waitUntil: "domcontentloaded" })

  await expect(
    page.getByRole("link", { name: /view menu/i }).first()
  ).toHaveAttribute("href", "/our-menus")
  await expect(page.getByRole("link", { name: /book/i }).first()).toBeVisible()
})
