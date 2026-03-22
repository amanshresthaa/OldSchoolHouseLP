import type { ComponentProps } from "react"

import { getMenuBadge, type MenuCategory, formatPrice } from "@/lib/menu"

interface MenuSectionProps extends ComponentProps<"section"> {
  category: MenuCategory
}

export function MenuSection({ category, ...props }: MenuSectionProps) {
  return (
    <section
      id={category.slug}
      className="surface-frame scroll-mt-28"
      {...props}
    >
      <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
        <div className="surface-pane surface-pane-muted">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-[2rem]">{category.title}</h2>
            <p className="text-sm leading-7 text-on-surface md:text-base">
              {category.intro}
            </p>
          </div>
        </div>
        <div className="surface-pane bg-[var(--color-surface-lowest)]">
          <div className="grid gap-6 md:grid-cols-2 md:gap-x-10">
            {category.items.map((item) => (
              <article
                key={`${category.slug}-${item.name}`}
                className="space-y-3 border-t border-[var(--color-outline-variant)]/24 pt-5 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0 space-y-2">
                    <h3 className="font-sans text-lg font-semibold text-secondary">
                      {item.name}
                    </h3>
                    {item.description ? (
                      <p className="text-sm leading-6 text-on-surface">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                  <p className="shrink-0 text-sm font-medium text-on-surface sm:pt-1">
                    {formatPrice(item.price)}
                  </p>
                </div>
                {item.labels?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {item.labels
                      .map((label) => getMenuBadge(label))
                      .filter((badge) => badge !== null)
                      .map((badge) => (
                        <span
                          key={`${item.name}-${badge.key}`}
                          className={`inline-flex rounded-full px-3 py-1 text-[0.72rem] font-semibold tracking-[0.14em] uppercase ${badge.className}`}
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
      </div>
    </section>
  )
}
