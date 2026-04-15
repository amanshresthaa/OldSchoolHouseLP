import { describe, expect, it } from "vitest"

import {
  featuredMenuItems,
  formatPrice,
  getMenuBadge,
  menuCategories,
  menuPreviewCategories,
} from "../../lib/menu"

describe("menu helpers", () => {
  it("builds menu categories with slugs and intros", () => {
    expect(menuCategories.length).toBeGreaterThan(0)
    expect(menuCategories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          slug: "main-starters",
          title: "Starters",
          intro: expect.stringContaining("Nepalese"),
          items: expect.any(Array),
        }),
        expect.objectContaining({
          slug: "main-pub-classics",
          title: "Pub Classics",
        }),
      ])
    )
  })

  it("keeps the expected preview and featured menu selections", () => {
    expect(menuPreviewCategories.map((category) => category.slug)).toEqual([
      "main-starters",
      "main-chef-selection",
      "main-pub-classics",
      "main-desserts",
    ])

    expect(featuredMenuItems).toHaveLength(4)
    expect(featuredMenuItems).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "Chicken Momo (Steam / Chilli)" }),
        expect.objectContaining({ name: "Large Mixed Grill" }),
        expect.objectContaining({ name: "Fish & Chips" }),
      ])
    )
  })

  it("formats prices for pounds sterling", () => {
    expect(formatPrice({ amount: 12.5, currency: "GBP", display: "" })).toBe(
      "£12.50"
    )
    expect(
      formatPrice({
        amount: 13,
        currency: "GBP",
        display: "£13.00 / £14.00",
      })
    ).toBe("£13.00 / £14.00")
  })

  it("maps supported menu badges", () => {
    expect(getMenuBadge("veg")).toEqual(
      expect.objectContaining({
        label: "Veg",
      })
    )
    expect(getMenuBadge("GF")).toEqual(
      expect.objectContaining({
        label: "GF",
      })
    )
    expect(getMenuBadge("Spice level 3")).toEqual(
      expect.objectContaining({
        label: "Spicy",
      })
    )
    expect(getMenuBadge("dry")).toEqual(
      expect.objectContaining({
        label: "Dry",
      })
    )
    expect(getMenuBadge("chef special")).toBeNull()
  })
})
