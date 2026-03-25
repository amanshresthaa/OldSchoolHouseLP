"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { bookingHref } from "@/data/site"

export function NabaTableEmbed() {
  const [isLoaded, setIsLoaded] = React.useState(false)

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[rgba(196,189,181,0.35)] bg-[var(--color-surface-lowest)]">
      {/* Loading state — visible until iframe fires onLoad */}
      {!isLoaded ? (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--color-surface-lowest)]">
          <div className="space-y-3 text-center">
            <div className="mx-auto size-8 animate-spin rounded-full border-4 border-[rgba(196,189,181,0.35)] border-t-secondary" />
            <p className="text-sm text-on-surface">Loading booking form…</p>
          </div>
        </div>
      ) : null}

      <iframe
        title="Book a table at The Old School House via NabaTable"
        src={bookingHref}
        className={cn(
          "w-full min-h-[700px] md:min-h-[600px]",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
