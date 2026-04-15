import type { ComponentProps } from "react"

import { HighlightMatch } from "@/components/site/MenuHighlightMatch"
import { formatPrice, getMenuBadge, type MenuCategory } from "@/lib/menu"

interface MenuCategoryPanelProps extends ComponentProps<"section"> {
  category: MenuCategory
  searchTerm?: string
  animationDelayMs?: number
}

export function MenuCategoryPanel({
  category,
  searchTerm = "",
  animationDelayMs,
  className,
  style,
  ...props
}: MenuCategoryPanelProps) {
  return (
    <section
      id={category.slug}
      className={className}
      style={{
        ...style,
        ...(animationDelayMs === undefined
          ? {}
          : { animationDelay: `${animationDelayMs}ms` }),
      }}
      {...props}
    >
      <div className="px-3 py-3 md:px-5 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-[1.2rem] leading-[1.02] font-semibold tracking-[-0.025em] text-on-background md:text-[1.55rem]">
              {category.title}
            </h2>
          </div>
          <p className="shrink-0 rounded-full bg-[var(--color-surface-low)] px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
            {category.items.length}
          </p>
        </div>
        <p className="mt-1.5 hidden text-sm leading-6 text-on-surface/72 md:block">
          {category.intro}
        </p>

        <div className="mt-3 divide-y divide-[rgba(196,189,181,0.18)]">
          {category.items.map((item) => (
            <article key={`${category.slug}-${item.name}`} className="py-3.5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="font-sans text-[0.98rem] font-semibold tracking-[-0.01em] text-secondary md:text-[1.02rem]">
                    <HighlightMatch text={item.name} term={searchTerm} />
                  </h3>
                  {item.description ? (
                    <p className="text-sm leading-5.5 text-on-surface/82">
                      <HighlightMatch
                        text={item.description}
                        term={searchTerm}
                      />
                    </p>
                  ) : null}
                </div>
                <p className="shrink-0 pt-0.5 text-sm font-semibold text-on-background">
                  {formatPrice(item.price)}
                </p>
              </div>
              {item.badges?.length || item.labels?.length ? (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {item.badges?.map((badge) => (
                    <span
                      key={`${item.name}-${badge.text}`}
                      className={
                        badge.type === "gold"
                          ? "inline-flex rounded-full bg-[var(--color-tertiary-container)] px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-[var(--color-on-tertiary-container)] uppercase"
                          : "inline-flex rounded-full bg-secondary px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-white uppercase"
                      }
                    >
                      {badge.text}
                    </span>
                  ))}
                  {(item.labels ?? [])
                    .map((label) => getMenuBadge(label))
                    .filter((badge) => badge !== null)
                    .map((badge) => (
                      <span
                        key={`${item.name}-${badge.key}`}
                        className={`inline-flex rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.12em] uppercase ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
