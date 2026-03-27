import type { Page } from "@playwright/test"
import { expect, test } from "@playwright/test"

const routeChecks = [
  { path: "/", title: "Traditional Pub in Stony Stratford" },
  {
    path: "/menu",
    title: "Pub Menu and Nepalese Food in Stony Stratford",
  },
  {
    path: "/book",
    title: "Book a Table in Stony Stratford",
  },
  {
    path: "/events",
    title: "What’s On in Stony Stratford",
  },
  { path: "/find-us", title: "Find Our Pub on London Road, Stony Stratford" },
  { path: "/private-hire", title: "Private Hire in Stony Stratford" },
  { path: "/sunday-roast", title: "Sunday Roast in Stony Stratford" },
  { path: "/nepalese-kitchen", title: "Nepalese Kitchen in Stony Stratford" },
  { path: "/momo", title: "Momo in Stony Stratford" },
  { path: "/nepalese-vs-indian-food", title: "Nepalese vs Indian Food" },
  { path: "/what-is-nepalese-food", title: "What is Nepalese Food" },
  {
    path: "/traditional-pub-with-nepalese-kitchen",
    title: "Traditional Pub with a Nepalese Kitchen",
  },
  {
    path: "/where-to-eat-in-stony-stratford",
    title: "Where to Eat in Stony Stratford",
  },
  { path: "/guides", title: "Pub Guides and Food Guides" },
  { path: "/live-sport", title: "Live Sport Pub in Stony Stratford" },
  {
    path: "/beer-garden-stony-stratford",
    title: "Beer Garden in Stony Stratford",
  },
  {
    path: "/group-dining-celebrations",
    title: "Group Dining in Stony Stratford",
  },
  {
    path: "/dog-friendly-pub-stony-stratford",
    title: "Dog-Friendly Pub in Stony Stratford",
  },
  {
    path: "/family-friendly-pub-stony-stratford",
    title: "Family-Friendly Pub in Stony Stratford",
  },
  {
    path: "/accessibility",
    title: "Accessibility Information",
  },
  {
    path: "/wakes-life-celebrations",
    title: "Wakes and Life Celebrations in Stony Stratford",
  },
] as const

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

for (const route of routeChecks) {
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
    "traditional pub in Stony Stratford"
  )
  await expect(
    page.getByRole("link", { name: /book a table/i }).first()
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /view menu/i }).first()
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /where to eat in stony stratford/i })
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: /browse all guides/i })
  ).toBeVisible()
})

test("nepalese kitchen page links back into menu and booking", async ({
  page,
}) => {
  await page.goto("/nepalese-kitchen", { waitUntil: "domcontentloaded" })

  await expect(
    page.getByRole("link", { name: /view menu/i }).first()
  ).toHaveAttribute("href", "/menu")
  await expect(page.getByRole("link", { name: /book/i }).first()).toBeVisible()
})
