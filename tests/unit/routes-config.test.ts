import { describe, expect, it } from "vitest"

import { featureFlags, siteUrl } from "../../data/site"
import {
  publishedRouteHrefs,
  routeConfigs,
  siteFooterCoreLinks,
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

  it("keeps discovery explainers out of the indexed commercial route set", () => {
    expect(publishedRouteHrefs).not.toContain("/guides")
    expect(publishedRouteHrefs).not.toContain("/momo")
    expect(publishedRouteHrefs).not.toContain("/what-is-nepalese-food")
    expect(publishedRouteHrefs).not.toContain(
      "/traditional-pub-with-nepalese-kitchen"
    )
    expect(publishedRouteHrefs).not.toContain(
      "/where-to-eat-in-stony-stratford"
    )
  })

  it("keeps the footer core links aligned with the commercial journey pages", () => {
    expect(siteFooterCoreLinks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ href: "/menu", label: "Menu" }),
        expect.objectContaining({ href: "/book", label: "Book" }),
        expect.objectContaining({ href: "/events", label: "Events" }),
        expect.objectContaining({
          href: "/private-hire",
          label: "Private Hire",
        }),
        expect.objectContaining({ href: "/find-us", label: "Find Us" }),
      ])
    )
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
