import { cn } from "@/lib/utils"
import { featureFlags, openingHours, siteLocation } from "@/data/site"

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
      <span>{featureFlags.hoursConfirmed ? "Hours" : "Stony Stratford"}</span>
      <span className="text-current/72">
        {featureFlags.hoursConfirmed ? openingHours[0].hours : siteLocation}
      </span>
    </div>
  )
}
