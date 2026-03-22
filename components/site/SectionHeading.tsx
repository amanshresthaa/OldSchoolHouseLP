import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

interface SectionHeadingProps extends ComponentProps<"div"> {
  eyebrow?: string
  title: string
  description?: string
  invert?: boolean
}

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  invert = false,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-2xl space-y-3", invert && "text-white", className)}
      {...props}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold tracking-[0.22em] uppercase",
            invert
              ? "text-[var(--color-on-tertiary-container)]"
              : "text-secondary"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn(invert && "text-white")}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-sm leading-7 md:text-base",
            invert ? "text-white/78" : "text-on-surface"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
