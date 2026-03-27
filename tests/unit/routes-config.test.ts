import { describe, expect, it } from "vitest"

import { featureFlags, siteUrl } from "../../data/site"
import {
  publishedRouteHrefs,
  routeConfigs,
  siteNav,
} from "../../data/site-routes"

const requiredPublicRoutes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/private-hire", label: "Private Hire" },
  { href: "/find-us", label: "Find Us" },
  { href: "/book", label: "Book" },
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

  it("keeps unpublished policy-led routes out of the public route set", () => {
    expect(featureFlags.dogPolicyConfirmed).toBe(false)
    expect(featureFlags.familyPolicyConfirmed).toBe(false)
    expect(publishedRouteHrefs).not.toContain(
      "/dog-friendly-pub-stony-stratford"
    )
    expect(publishedRouteHrefs).not.toContain(
      "/family-friendly-pub-stony-stratford"
    )
  })

  it("uses the required public routes as canonical destinations", () => {
    expect(routeConfigs).toEqual(
      expect.arrayContaining(
        requiredPublicRoutes.map((route) =>
          expect.objectContaining({
            href: route.href,
            meta: expect.objectContaining({
              canonical: route.href,
            }),
          })
        )
      )
    )
  })
})
