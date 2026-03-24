import type { ComponentProps } from "react"

import { type MenuCategory } from "@/lib/menu"
import { MenuCategoryPanel } from "@/components/site/MenuCategoryPanel"

interface MenuSectionProps extends ComponentProps<"section"> {
  category: MenuCategory
}

export function MenuSection({ category, ...props }: MenuSectionProps) {
  return <MenuCategoryPanel category={category} {...props} />
}
