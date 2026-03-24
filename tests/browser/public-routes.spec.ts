import { expect, test } from "@playwright/test"

const routeChecks = [
  { path: "/", title: "The Old School House." },
  {
    path: "/menu",
    title: "Menu in Stony Stratford",
  },
  {
    path: "/book",
    title: "Book a Table in Stony Stratford",
  },
  {
    path: "/events",
    title: "Private Hire in Stony Stratford",
  },
  { path: "/find-us", title: "Find Us in Stony Stratford" },
] as const

for (const route of routeChecks) {
  test(`renders ${route.path} on the smoke target`, async ({
    page,
    baseURL,
  }) => {
    expect(baseURL).toBe("http://127.0.0.1:3001")

    const response = await page.goto(route.path, {
      waitUntil: "domcontentloaded",
    })

    expect(response?.ok()).toBeTruthy()
    await expect(page).toHaveURL(
      new RegExp(`${route.path === "/" ? "/?$" : `${route.path}$`}`)
    )
    await expect(page).toHaveTitle(new RegExp(route.title))
    await expect(page.locator("main")).toBeVisible()
  })
}
