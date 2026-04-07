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

  const frameHeightClass = compact ? "fluid-map-compact" : "fluid-map-standard"
  const blockedHeightClass = compact
    ? "fluid-map-compact"
    : "fluid-map-standard"

  if (!isReady || !hasConsent) {
    return (
      <div className="surface-frame" {...props}>
        <div
          className={`surface-pane surface-pane-muted flex flex-col justify-between ${compact ? "gap-4" : "gap-6"} ${blockedHeightClass}`}
        >
          <div
            className={compact ? "max-w-lg space-y-2" : "max-w-xl space-y-3"}
          >
            <p className="eyebrow">{mapEmbedCopy.privacyEyebrow}</p>
            <h3
              className={
                compact
                  ? "text-[1.55rem] leading-[1.12] text-on-background"
                  : "text-[2rem] leading-tight text-on-background"
              }
            >
              {mapEmbedCopy.privacyHeading}
            </h3>
            <p
              className={
                compact
                  ? "text-sm leading-6 text-on-surface"
                  : "section-copy text-on-surface"
              }
            >
              {mapEmbedCopy.privacyBody}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="button"
              size={compact ? "default" : "lg"}
              onClick={() => {
                writeCookieConsent("accepted")
                setHasConsent(true)
              }}
            >
              {mapEmbedCopy.allowButton}
            </Button>
            <Button asChild size={compact ? "default" : "lg"} variant="outline">
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
