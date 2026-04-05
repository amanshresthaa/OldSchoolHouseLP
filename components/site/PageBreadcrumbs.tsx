import type { ComponentProps } from "react"
import Link from "next/link"
import { CaretRight } from "@phosphor-icons/react/dist/ssr"

import type { BreadcrumbItem } from "@/lib/metadata"
import { cn } from "@/lib/utils"

interface PageBreadcrumbsProps extends ComponentProps<"nav"> {
  items: BreadcrumbItem[]
}

export function PageBreadcrumbs({
  items,
  className,
  ...props
}: PageBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-xs text-white/70", className)}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isCurrentPage ? (
                <span aria-current="page" className="font-medium text-white">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition hover:text-white focus-visible:text-white"
                >
                  {item.label}
                </Link>
              )}
              {!isCurrentPage ? (
                <CaretRight
                  aria-hidden="true"
                  className="size-3 text-[var(--color-tertiary)]"
                />
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
