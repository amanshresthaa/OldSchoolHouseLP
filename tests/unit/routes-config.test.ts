import { describe, expect, it } from "vitest"
import { readFile } from "node:fs/promises"
import { resolve } from "node:path"

import { siteNav, siteUrl } from "../../data/site"

const requiredPublicRoutes = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/book", label: "Book" },
  { href: "/events", label: "Events" },
  { href: "/find-us", label: "Find Us" },
] as const

describe("site config smoke", () => {
  it("keeps the required public routes in the primary navigation", () => {
    expect(siteNav).toEqual(
      expect.arrayContaining(
        requiredPublicRoutes.map((route) => expect.objectContaining(route))
      )
    )
  })

  it("preserves the canonical production site url", () => {
    expect(siteUrl).toBe("https://oldschoolhousestony.co.uk")
  })

  it("uses the required public routes as canonical destinations", async () => {
    const canonicalRouteFiles = await Promise.all(
      requiredPublicRoutes.map(async (route) => {
        const routeFile =
          route.href === "/"
            ? "../../app/page.tsx"
            : `../../app${route.href}/page.tsx`

        return {
          href: route.href,
          fileContents: await readFile(
            resolve(import.meta.dirname, routeFile),
            "utf8"
          ),
        }
      })
    )

    expect(canonicalRouteFiles).toEqual(
      expect.arrayContaining(
        requiredPublicRoutes
          .filter((route) => route.href !== "/")
          .map((route) =>
            expect.objectContaining({
              href: route.href,
              fileContents: expect.stringContaining(
                `canonical: "${route.href}"`
              ),
            })
          )
      )
    )
  })
})
