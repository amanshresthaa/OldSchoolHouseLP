import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { cn } from "@/lib/utils"

interface MenuCategoryLink {
  label: string
  href: string
}

interface MenuCategoryScrollerProps {
  links: MenuCategoryLink[]
}

export function MenuCategoryScroller({ links }: MenuCategoryScrollerProps) {
  return (
    <div className="relative">
      <div className="menu-category-marquee">
        <div className="menu-category-marquee-track">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="menu-category-marquee-group"
              aria-hidden={groupIndex === 1}
            >
              {links.map((link) => (
                <Link
                  key={`${groupIndex}-${link.href}`}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 whitespace-nowrap px-4 py-3 transition",
                    "active:bg-[var(--color-surface-high)] lg:hover:bg-[var(--color-surface-high)] lg:hover:text-secondary"
                  )}
                >
                  {link.label}
                  <ArrowRight
                    weight="bold"
                    className="size-3 text-secondary/60 lg:opacity-0 lg:transition-opacity lg:group-hover/link:opacity-100"
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[var(--color-surface-lowest)] to-transparent lg:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[var(--color-surface-lowest)] to-transparent lg:hidden" />
    </div>
  )
}
