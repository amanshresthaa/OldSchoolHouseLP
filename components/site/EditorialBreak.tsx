import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

interface EditorialBreakProps extends ComponentProps<"section"> {
  quote: string
}

export function EditorialBreak({
  className,
  quote,
  ...props
}: EditorialBreakProps) {
  return (
    <section
      className={cn(
        "page-section bg-[var(--color-tertiary-container)]",
        className
      )}
      {...props}
    >
      <div className="section-shell text-center">
        <blockquote className="mx-auto max-w-3xl">
          <p className="font-heading text-2xl leading-relaxed text-[var(--color-on-tertiary-container)] italic md:text-3xl">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  )
}
