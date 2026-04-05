import { describe, expect, it } from "vitest"

import {
  featureFlags,
  localBusinessSchema,
  openingHours,
  organizationSchema,
  sanjogGautamPersonSchema,
  siteAddress,
  siteLegalName,
  siteName,
  siteOrganizationId,
  siteRestaurantId,
  siteUrl,
} from "../../data/site"
import {
  getRouteConfig,
  siteFooterCoreLinks,
  siteLegalLinks,
  siteNav,
  siteResources,
} from "../../data/site-routes"

describe("site data exports", () => {
  it("keeps key navigation and resource links present", () => {
    expect(siteNav).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ href: "/", label: "Home" }),
        expect.objectContaining({ href: "/menu", label: "Menu" }),
        expect.objectContaining({ href: "/book", label: "Book" }),
      ])
    )

    expect(siteResources).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ href: "/menu-information" }),
        expect.objectContaining({ href: "/takeaway-menu" }),
        expect.objectContaining({ href: "/accessibility" }),
        expect.objectContaining({ href: "/wakes-life-celebrations" }),
      ])
    )

    expect(siteFooterCoreLinks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ href: "/menu" }),
        expect.objectContaining({ href: "/book" }),
        expect.objectContaining({ href: "/events" }),
        expect.objectContaining({ href: "/private-hire" }),
        expect.objectContaining({ href: "/find-us" }),
      ])
    )

    expect(siteLegalLinks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ href: "/privacy" }),
        expect.objectContaining({ href: "/tos" }),
      ])
    )
  })

  it("keeps the public business schema aligned with the published address", () => {
    expect(siteAddress).toContain("Stony Stratford")
    expect(openingHours).toEqual([
      {
        label: "Licensed hours",
        hours: "10:00 - 00:30",
      },
    ])
    expect(localBusinessSchema).toEqual(
      expect.objectContaining({
        "@context": "https://schema.org",
        name: "The Old School House",
        address: expect.objectContaining({
          postalCode: "MK11 1JA",
        }),
        openingHoursSpecification: [
          expect.objectContaining({
            opens: "10:00",
            closes: "00:30",
          }),
        ],
      })
    )
    expect(featureFlags.hoursConfirmed).toBe(true)
  })

  it("keeps the knowledge graph anchored to a single organization id", () => {
    expect(organizationSchema).toEqual(
      expect.objectContaining({
        "@id": `${siteUrl}/#organization`,
        name: siteLegalName,
        alternateName: siteName,
        owns: {
          "@id": siteRestaurantId,
        },
      })
    )

    expect(localBusinessSchema).toEqual(
      expect.objectContaining({
        parentOrganization: {
          "@id": siteOrganizationId,
        },
      })
    )

    expect(sanjogGautamPersonSchema).toEqual(
      expect.objectContaining({
        worksFor: {
          "@id": siteOrganizationId,
        },
      })
    )
  })

  it("returns route configs for published pages and undefined for unknown routes", () => {
    expect(getRouteConfig("/private-hire")).toEqual(
      expect.objectContaining({
        href: "/private-hire",
        published: true,
        meta: expect.objectContaining({
          canonical: "/private-hire",
        }),
      })
    )

    expect(getRouteConfig("/does-not-exist")).toBeUndefined()
  })
})
