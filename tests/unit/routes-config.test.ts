import { describe, expect, it } from "vitest"

import { siteNav, siteUrl } from "../../data/site"

describe("site config smoke", () => {
  it("keeps the public routes in the primary navigation", () => {
    expect(siteNav).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ href: "/", label: "Home" }),
        expect.objectContaining({ href: "/menu", label: "Menu" }),
        expect.objectContaining({ href: "/book", label: "Book" }),
        expect.objectContaining({ href: "/events", label: "Events" }),
        expect.objectContaining({ href: "/find-us", label: "Find Us" }),
      ])
    )
  })

  it("preserves the canonical production site url", () => {
    expect(siteUrl).toBe("https://oldschoolhousestony.co.uk")
  })
})
