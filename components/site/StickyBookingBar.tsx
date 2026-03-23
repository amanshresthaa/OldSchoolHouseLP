"use client"

import Link from "next/link"
import * as React from "react"
import { CalendarDots, Phone } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { sitePhoneHref } from "@/data/site"
import {
  COOKIE_CONSENT_EVENT,
  readCookieConsent,
  type CookieConsentValue,
} from "@/lib/consent"

export function StickyBookingBar() {
  const [activeCta, setActiveCta] = React.useState<"book" | "call">("book")
  const [consent, setConsent] = React.useState<CookieConsentValue | null>(null)
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setConsent(readCookieConsent(document.cookie))
    setIsReady(true)

    const handleConsentChange = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentValue>

      setConsent(customEvent.detail)
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange)

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange)
    }
  }, [])

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCta((current) => (current === "book" ? "call" : "book"))
    }, 3200)

    return () => window.clearInterval(interval)
  }, [])

  if (!isReady || !consent) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-[var(--color-surface-lowest)]/94 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto max-w-md">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-[var(--easing-standard)]"
            style={{
              width: "200%",
              transform:
                activeCta === "book" ? "translateX(0%)" : "translateX(-50%)",
            }}
          >
            <div className="w-1/2 pr-1.5">
              <Button asChild size="lg" className="w-full">
                <Link href="/book">
                  <CalendarDots />
                  Book
                </Link>
              </Button>
            </div>
            <div className="w-1/2 pl-1.5">
              <Button asChild size="lg" variant="outline" className="w-full">
                <a href={sitePhoneHref}>
                  <Phone />
                  Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
