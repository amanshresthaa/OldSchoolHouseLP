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

  it("publishes the approved audience and accessibility routes", () => {
    expect(featureFlags.dogPolicyConfirmed).toBe(true)
    expect(featureFlags.familyPolicyConfirmed).toBe(true)
    expect(featureFlags.accessibilityConfirmed).toBe(true)
    expect(publishedRouteHrefs).toContain("/dog-friendly-pub-stony-stratford")
    expect(publishedRouteHrefs).toContain(
      "/family-friendly-pub-stony-stratford"
    )
    expect(publishedRouteHrefs).toContain("/accessibility")
  })

  it("publishes the intent-led discovery and comparison routes", () => {
    expect(publishedRouteHrefs).toContain("/guides")
    expect(publishedRouteHrefs).toContain("/what-is-nepalese-food")
    expect(publishedRouteHrefs).toContain(
      "/traditional-pub-with-nepalese-kitchen"
    )
    expect(publishedRouteHrefs).toContain("/where-to-eat-in-stony-stratford")
  })

  it("keeps christmas out of the current public route set", () => {
    expect(publishedRouteHrefs).not.toContain("/christmas-parties")
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
