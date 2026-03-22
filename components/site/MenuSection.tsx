import type { ComponentProps } from "react"

import { getMenuBadge, type MenuCategory, formatPrice } from "@/lib/menu"

interface MenuSectionProps extends ComponentProps<"section"> {
  category: MenuCategory
}

export function MenuSection({ category, ...props }: MenuSectionProps) {
  return (
    <section
      id={category.slug}
      className="scroll-mt-28 rounded-[1.75rem] bg-[var(--color-surface-lowest)] px-5 py-6 md:px-8 md:py-8"
      {...props}
    >
      <div className="max-w-2xl space-y-2">
        <h2 className="text-[2rem]">{category.title}</h2>
        <p className="text-sm leading-7 text-on-surface md:text-base">
          {category.intro}
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-x-10">
        {category.items.map((item) => (
          <article key={`${category.slug}-${item.name}`} className="space-y-3">
            <div className="flex items-start justify-between gap-4">
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
              <p className="shrink-0 pt-1 text-sm font-medium text-on-surface">
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
    </section>
  )
}
