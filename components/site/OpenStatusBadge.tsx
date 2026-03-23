import { cn } from "@/lib/utils"
import { openingHours } from "@/data/site"

export function OpenStatusBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase backdrop-blur-sm",
        "border-[rgba(245,208,107,0.35)] bg-[rgba(245,208,107,0.12)] text-[var(--color-on-tertiary-container)]",
        className
      )}
    >
      <span className="size-2 rounded-full bg-[var(--color-on-tertiary-container)]" />
      <span>Open daily</span>
      <span className="text-current/72">{openingHours[0].hours}</span>
    </div>
  )
}
