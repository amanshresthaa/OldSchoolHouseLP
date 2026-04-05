"use client"

import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { cookieBannerCopy } from "@/data/copy"
import {
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentValue,
} from "@/lib/consent"

export function CookieBanner() {
  const [consent, setConsent] = React.useState<CookieConsentValue | null>(null)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setConsent(readCookieConsent(document.cookie))
    setIsReady(true)
  }, [])

  if (!isReady || consent) {
    return null
  }

  const handleConsent = (value: CookieConsentValue) => {
    writeCookieConsent(value)
    setConsent(value)
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-end bg-[rgba(7,17,11,0.46)] px-4 pb-4 sm:px-6 sm:pb-5 md:px-8">
      <div className="surface-frame mx-auto max-w-4xl bg-[var(--color-surface-lowest)]/96 backdrop-blur-xl">
        <div className="surface-pane">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="eyebrow">{cookieBannerCopy.eyebrow}</p>
              <p className="font-heading text-[1.6rem] leading-tight text-on-background md:text-[2rem]">
                {cookieBannerCopy.heading}
              </p>
              <p className="text-sm leading-6 text-on-surface md:text-base md:leading-7">
                {cookieBannerCopy.body}{" "}
                <Link
                  className="text-secondary underline-offset-4 hover:underline"
                  href="/privacy"
                >
                  privacy notice
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => handleConsent("essential")}
              >
                {cookieBannerCopy.essentialButton}
              </Button>
              <Button
                type="button"
                size="lg"
                onClick={() => handleConsent("accepted")}
              >
                {cookieBannerCopy.acceptButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
