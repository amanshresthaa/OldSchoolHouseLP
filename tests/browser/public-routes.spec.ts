import { expect, test } from "@playwright/test"

const routeChecks = [
  { path: "/", heading: "The Old School House." },
  {
    path: "/menu",
    heading: "Two kitchens, one menu, and a table worth coming back to.",
  },
  {
    path: "/book",
    heading: "Book your table and make it easy from the start.",
  },
  {
    path: "/events",
    heading:
      "A venue shape that works for birthdays, match days, and longer-table gatherings.",
  },
  { path: "/find-us", heading: "Everything you need to find us easily." },
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
    await expect(
      page.getByRole("heading", { name: route.heading })
    ).toBeVisible()
  })
}
