"use client"

import Link from "next/link"
import * as React from "react"

import { Button } from "@/components/ui/button"
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
    <div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:bottom-5 sm:px-6 md:px-8">
      <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-[rgba(196,189,181,0.35)] bg-[var(--color-surface-lowest)]/96 p-5 shadow-[0px_18px_48px_rgba(27,28,28,0.12)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2">
            <p className="eyebrow">Cookies</p>
            <p className="font-heading text-[1.6rem] leading-tight text-on-background md:text-[2rem]">
              We only load optional embeds once you say yes.
            </p>
            <p className="text-sm leading-6 text-on-surface md:text-base md:leading-7">
              Essential cookies keep the site working. Optional consent lets us
              load third-party content such as Google Maps. Read more in our{" "}
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
              Only essential
            </Button>
            <Button
              type="button"
              size="lg"
              onClick={() => handleConsent("accepted")}
            >
              Accept optional
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
