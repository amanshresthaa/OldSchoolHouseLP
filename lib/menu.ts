import allMenu from "@/menu/all.json"

export interface MenuPrice {
  amount: number
  currency: string
}

export interface MenuItem {
  name: string
  price: MenuPrice
  description?: string
  labels?: string[]
}

export interface MenuCategory {
  slug: string
  title: string
  intro: string
  items: MenuItem[]
}

export interface MenuBadge {
  key: string
  label: string
  className: string
}

interface MenuRecord {
  [key: string]: MenuItem[]
}

const menuData = allMenu as MenuRecord

const categoryIntros: Record<string, string> = {
  Starters:
    "A mix of Nepalese small plates, fried pub-time bites, and signature momo to start the table properly.",
  "Mixed Grills":
    "Sizzling mixed grills that lean into the pub’s more celebratory, high-impact side.",
  "Speciality Dishes":
    "House signatures and richer Nepalese mains that give the menu its point of difference.",
  "Authentic Dishes":
    "Classic curry styles with vegetable, chicken, lamb, and king prawn options.",
  Naans:
    "Warm breads and sides for balancing heat, sauce, and longer-table meals.",
  Fries: "Quick add-ons and sharers for drinks, wraps, and casual pub grazing.",
  "Pub Grub":
    "Wraps and easy plates that work for lunch, a pint stop, or an in-between meal.",
  Rice: "Kitchen staples to pair with curries, grills, and speciality dishes.",
  "Pub Classic":
    "Straightforward pub comfort for guests who want familiar favourites.",
  Salads:
    "Lighter options that keep the menu flexible through lunch and warmer days.",
  Sides:
    "Extra vegetable dishes and supporting plates for building a full Nepalese spread.",
  Kids: "Short, easy kids choices with simple formats for family visits.",
  Desserts: "A concise finish with Nepalese sweets, ice cream, and fondant.",
}

const categoryTitles: Record<string, string> = {
  "Pub Classic": "Pub Classics",
  Kids: "Kids Menu",
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export const menuCategories: MenuCategory[] = Object.entries(menuData).map(
  ([title, items]) => ({
    slug: slugify(title),
    title: categoryTitles[title] ?? title,
    intro: categoryIntros[title] ?? "Seasonal dishes and house favourites.",
    items,
  })
)

export const menuPreviewCategories = menuCategories.filter((category) =>
  ["starters", "speciality-dishes", "pub-classic", "desserts"].includes(
    category.slug
  )
)

export const featuredMenuItems: MenuItem[] = [
  menuData["Starters"][8],
  menuData["Mixed Grills"][3],
  menuData["Speciality Dishes"][16],
  menuData["Pub Classic"][0],
]

export function formatPrice(price: MenuPrice) {
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
