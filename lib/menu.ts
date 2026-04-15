import {
  lunchMenuSource,
  mainMenuSource,
  type SourceMenuBadge,
  type SourceMenuCategory,
  type SourceMenuItem,
} from "@/data/menu"

export interface MenuPrice {
  amount: number | null
  currency: string
  display: string
}

export interface MenuBadge {
  key: string
  label: string
  className: string
}

export interface MenuItemBadge {
  text: string
  type: "gold" | "dark"
}

export interface MenuItem {
  name: string
  price: MenuPrice
  description?: string
  labels?: string[]
  badges?: MenuItemBadge[]
}

export interface MenuCategory {
  slug: string
  title: string
  intro: string
  items: MenuItem[]
}

function parsePriceAmount(value: string) {
  const match = value.match(/\d+(?:\.\d{1,2})?/)
  return match ? Number(match[0]) : null
}

function formatPriceDisplay(value: string) {
  return value
    .split("/")
    .map((part) => {
      const trimmed = part.trim()
      return /^\d/.test(trimmed) ? `£${trimmed}` : trimmed
    })
    .join(" / ")
}

function buildMenuPrice(value: string): MenuPrice {
  return {
    amount: parsePriceAmount(value),
    currency: "GBP",
    display: formatPriceDisplay(value),
  }
}

function buildMenuBadges(badges?: SourceMenuBadge[]): MenuItemBadge[] | undefined {
  if (!badges?.length) return undefined

  return badges.map((badge) => ({
    text: badge.text,
    type: badge.type,
  }))
}

function buildMenuItem(item: SourceMenuItem): MenuItem {
  return {
    name: item.name,
    price: buildMenuPrice(item.price),
    description: item.desc,
    labels: item.labels,
    badges: buildMenuBadges(item.badges),
  }
}

function buildMenuCategory(category: SourceMenuCategory): MenuCategory {
  return {
    slug: category.slug,
    title: category.title,
    intro: category.intro,
    items: category.items.map(buildMenuItem),
  }
}

function getRequiredMenuItem(
  categories: MenuCategory[],
  categorySlug: string,
  itemName: string
) {
  const category = categories.find((entry) => entry.slug === categorySlug)
  const item = category?.items.find((entry) => entry.name === itemName)

  if (!item) {
    throw new Error(`Missing menu item: ${categorySlug} / ${itemName}`)
  }

  return item
}

export const dinnerMenuCategories: MenuCategory[] =
  mainMenuSource.map(buildMenuCategory)

export const lunchMenuCategories: MenuCategory[] =
  lunchMenuSource.map(buildMenuCategory)

export const menuCategories: MenuCategory[] = dinnerMenuCategories

export const menuPreviewCategories = menuCategories.filter((category) =>
  [
    "main-starters",
    "main-chef-selection",
    "main-pub-classics",
    "main-desserts",
  ].includes(category.slug)
)

export const featuredMenuItems: MenuItem[] = [
  getRequiredMenuItem(
    dinnerMenuCategories,
    "main-starters",
    "Chicken Momo (Steam / Chilli)"
  ),
  getRequiredMenuItem(
    dinnerMenuCategories,
    "main-mixed-grills",
    "Large Mixed Grill"
  ),
  getRequiredMenuItem(
    dinnerMenuCategories,
    "main-chef-selection",
    "Kathmandu Tikka Masala"
  ),
  getRequiredMenuItem(dinnerMenuCategories, "main-pub-classics", "Fish & Chips"),
]

export function formatPrice(price: MenuPrice) {
  if (price.display) return price.display
  if (price.amount === null) return ""

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: price.currency,
  }).format(price.amount)
}

export function getMenuBadge(label: string): MenuBadge | null {
  const normalised = label.toLowerCase()

  if (normalised === "veg" || normalised === "v") {
    return {
      key: label,
      label: "Veg",
      className:
        "bg-[var(--chip-vegetarian-bg)] text-[var(--chip-vegetarian-text)]",
    }
  }

  if (normalised === "gf") {
    return {
      key: label,
      label: "GF",
      className: "bg-[var(--chip-gf-bg)] text-[var(--chip-gf-text)]",
    }
  }

  if (normalised.startsWith("spice")) {
    return {
      key: label,
      label: "Spicy",
      className: "bg-[var(--chip-spicy-bg)] text-[var(--chip-spicy-text)]",
    }
  }

  if (normalised === "dry") {
    return {
      key: label,
      label: "Dry",
      className:
        "bg-[var(--color-tertiary-container)] text-[var(--color-on-tertiary-container)]",
    }
  }

  return null
}
