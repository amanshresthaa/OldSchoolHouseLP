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
    <div className="flex items-center">
      <div className="shrink-0 bg-secondary px-3 py-2.5 text-[0.52rem] font-semibold tracking-[0.12em] text-white uppercase md:px-4 md:text-[0.58rem]">
        Tap a section
      </div>
      <div className="relative min-w-0 flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[var(--color-surface-lowest)] to-transparent lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[var(--color-surface-lowest)] to-transparent lg:hidden" />
        <div className="rail-marquee py-1 text-[0.72rem] font-semibold tracking-[0.14em] text-on-surface uppercase md:text-[0.82rem]">
          <div className="rail-marquee-track">
            {[0, 1].map((groupIndex) => (
              <div
                key={groupIndex}
                className="rail-marquee-group"
                aria-hidden={groupIndex === 1}
              >
                {links.map((link) => (
                  <Link
                    key={`${groupIndex}-${link.href}`}
                    href={link.href}
                    tabIndex={groupIndex === 1 ? -1 : undefined}
                    className={cn(
                      "group/menu-link flex items-center gap-2 px-4 py-3 whitespace-nowrap text-on-surface/84 transition md:px-5",
                      "focus-visible:rounded-full focus-visible:bg-[var(--color-surface-low)] focus-visible:text-secondary focus-visible:ring-2 focus-visible:ring-secondary/20 focus-visible:outline-none",
                      "active:text-secondary lg:hover:text-secondary"
                    )}
                  >
                    <span className="text-secondary">/</span>
                    <span>{link.label}</span>
                    <ArrowRight
                      weight="bold"
                      className="size-3 text-secondary/70 transition duration-[var(--duration-micro)] ease-[var(--easing-standard)] group-hover/menu-link:translate-x-0.5 group-hover/menu-link:text-secondary group-focus-visible/menu-link:translate-x-0.5 group-focus-visible/menu-link:text-secondary"
                    />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
