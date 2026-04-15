import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  className?: string
  eyebrow?: string
  title: string
  titleId?: string
  description?: string
  invert?: boolean
}

export function SectionHeading({
  className,
  eyebrow,
  title,
  titleId,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl space-y-[clamp(0.625rem,0.45rem+0.45vw,0.9rem)]",
        invert && "text-white",
        className
      )}
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
              invert ? "text-white/82" : "text-[var(--color-tertiary)]"
            )}
          >
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 id={titleId} className={cn("section-title", invert && "text-white")}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "section-copy max-w-[35rem]",
            invert ? "text-white/55" : "text-on-surface"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
