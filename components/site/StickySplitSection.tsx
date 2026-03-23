import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface StickySplitSectionProps extends ComponentProps<"section"> {
  intro: ReactNode
  children: ReactNode
  introClassName?: string
  contentClassName?: string
  gridClassName?: string
}

export function StickySplitSection({
  className,
  intro,
  children,
  introClassName,
  contentClassName,
  gridClassName,
  ...props
}: StickySplitSectionProps) {
  return (
    <section className={cn("page-section", className)} {...props}>
      <div
        className={cn(
          "section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start",
          gridClassName
        )}
      >
        <div className={cn("space-y-7 lg:sticky lg:top-28", introClassName)}>
          {intro}
        </div>
        <div className={cn("space-y-5", contentClassName)}>{children}</div>
      </div>
    </section>
  )
}
