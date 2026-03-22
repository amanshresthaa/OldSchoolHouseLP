import type { ComponentProps } from "react"

import { mapHref } from "@/data/site"

interface MapEmbedProps extends ComponentProps<"div"> {
  title?: string
}

export function MapEmbed({
  title = "Map showing The Old School House in Stony Stratford",
  ...props
}: MapEmbedProps) {
  return (
    <div
      className="overflow-hidden rounded-3xl bg-[var(--color-surface-highest)]"
      {...props}
    >
      <iframe
        title={title}
        src="https://www.google.com/maps?q=The+Old+School+House+London+Road+Stony+Stratford+Milton+Keynes+MK11+1JA&z=15&output=embed"
        className="h-[22rem] w-full md:h-[28rem]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex items-center justify-between gap-4 bg-[var(--color-surface-lowest)] px-5 py-4 text-sm text-on-surface">
        <p>Need turn-by-turn directions? Open the pub in Google Maps.</p>
        <a
          href={mapHref}
          target="_blank"
          rel="noreferrer"
          className="text-secondary underline-offset-4 transition hover:text-secondary/80 hover:underline"
        >
          Open map
        </a>
      </div>
    </div>
  )
}
