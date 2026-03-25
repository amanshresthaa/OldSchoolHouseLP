"use client"

import type { ComponentProps } from "react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { directionsHref } from "@/data/site"
import {
  hasOptionalCookieConsent,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/consent"

interface MapEmbedProps extends ComponentProps<"div"> {
  title?: string
}

export function MapEmbed({
  title = "Map showing The Old School House in Stony Stratford",
  ...props
}: MapEmbedProps) {
  const [hasConsent, setHasConsent] = React.useState(false)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    const consent = readCookieConsent(document.cookie)

    setHasConsent(hasOptionalCookieConsent(consent))
    setIsReady(true)
  }, [])

  if (!isReady || !hasConsent) {
    return (
      <div
        className="overflow-hidden rounded-3xl bg-[var(--color-surface-highest)]"
        {...props}
      >
        <div className="flex min-h-[22rem] flex-col justify-between gap-6 p-6 md:min-h-[28rem] md:p-8">
          <div className="max-w-xl space-y-3">
            <p className="eyebrow">Map privacy</p>
            <h3 className="text-[2rem] leading-tight text-on-background">
              Google Maps stays blocked until you allow optional cookies.
            </h3>
            <p className="text-sm leading-7 text-on-surface md:text-base">
              That keeps third-party tracking from loading automatically. You
              can still open directions in a new tab, or allow the embed just
              for a more visual route preview.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              size="lg"
              onClick={() => {
                writeCookieConsent("accepted")
                setHasConsent(true)
              }}
            >
              Allow map embed
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={directionsHref} target="_blank" rel="noreferrer">
                Get directions instead
              </a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

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
      <div className="flex flex-col items-start gap-3 bg-[var(--color-surface-lowest)] px-5 py-4 text-sm text-on-surface sm:flex-row sm:items-center sm:justify-between">
        <p>Need turn-by-turn directions? Open the route straight in Google Maps.</p>
        <a
          href={directionsHref}
          target="_blank"
          rel="noreferrer"
          className="text-secondary underline-offset-4 transition hover:text-secondary/80 hover:underline"
        >
          Get directions
        </a>
      </div>
    </div>
  )
}
