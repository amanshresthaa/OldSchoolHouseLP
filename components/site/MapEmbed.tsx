"use client"

import type { ComponentProps } from "react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { mapEmbedCopy } from "@/data/copy"
import { directionsHref } from "@/data/site"
import {
  hasOptionalCookieConsent,
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/consent"

interface MapEmbedProps extends ComponentProps<"div"> {
  title?: string
  compact?: boolean
}

export function MapEmbed({
  title = mapEmbedCopy.defaultTitle,
  compact = false,
  ...props
}: MapEmbedProps) {
  const [hasConsent, setHasConsent] = React.useState(false)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    const consent = readCookieConsent(document.cookie)

    setHasConsent(hasOptionalCookieConsent(consent))
    setIsReady(true)
  }, [])

  const frameHeightClass = compact
    ? "h-[17rem] md:h-[21rem]"
    : "h-[22rem] md:h-[28rem]"
  const blockedHeightClass = compact
    ? "min-h-[17rem] md:min-h-[21rem]"
    : "min-h-[22rem] md:min-h-[28rem]"

  if (!isReady || !hasConsent) {
    return (
      <div className="surface-frame" {...props}>
        <div
          className={`surface-pane surface-pane-muted flex flex-col justify-between gap-6 ${blockedHeightClass}`}
        >
          <div className="max-w-xl space-y-3">
            <p className="eyebrow">{mapEmbedCopy.privacyEyebrow}</p>
            <h3 className="text-[2rem] leading-tight text-on-background">
              {mapEmbedCopy.privacyHeading}
            </h3>
            <p className="text-sm leading-7 text-on-surface md:text-base">
              {mapEmbedCopy.privacyBody}
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
              {mapEmbedCopy.allowButton}
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={directionsHref} target="_blank" rel="noreferrer">
                {mapEmbedCopy.directionsButton}
              </a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="surface-frame" {...props}>
      <iframe
        title={title}
        src="https://www.google.com/maps?q=The+Old+School+House+London+Road+Stony+Stratford+Milton+Keynes+MK11+1JA&z=15&output=embed"
        className={`w-full ${frameHeightClass}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="surface-pane flex flex-col items-start gap-3 text-sm text-on-surface sm:flex-row sm:items-center sm:justify-between">
        <p>{mapEmbedCopy.directionsPrompt}</p>
        <a
          href={directionsHref}
          target="_blank"
          rel="noreferrer"
          className="text-secondary underline-offset-4 transition hover:text-secondary/80 hover:underline"
        >
          {mapEmbedCopy.directionsLink}
        </a>
      </div>
    </div>
  )
}
