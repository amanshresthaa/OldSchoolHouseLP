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
        <div className="eyebrow-row">
          <span
            aria-hidden="true"
            className={cn(
              "eyebrow-line",
              invert && "bg-[var(--color-on-tertiary-container)]"
            )}
          />
          <p
            className={cn(
              "eyebrow",
              invert
                ? "text-[var(--color-on-tertiary-container)]"
                : "text-[var(--color-tertiary)]"
            )}
          >
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className={cn("section-title", invert && "text-white")}>{title}</h2>
      {description ? (
        <p
          className={cn(
            "max-w-[35rem] text-sm leading-[1.65] md:text-[0.9375rem]",
            invert ? "text-white/55" : "text-on-surface"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
