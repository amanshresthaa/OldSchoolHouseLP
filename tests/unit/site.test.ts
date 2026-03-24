import { describe, expect, it } from "vitest"

import {
  localBusinessSchema,
  openingHours,
  siteAddress,
  siteLegalLinks,
  siteNav,
  siteResources,
} from "../../data/site"

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
        label: "Monday to Sunday",
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
        openingHoursSpecification: expect.arrayContaining([
          expect.objectContaining({
            opens: "10:00",
            closes: "00:30",
          }),
        ]),
      })
    )
  })
})
