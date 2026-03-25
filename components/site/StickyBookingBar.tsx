"use client"

import Link from "next/link"
import * as React from "react"
import { CalendarDots, Phone } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { bookOnlineHref, sitePhoneHref } from "@/data/site"

export function StickyBookingBar() {
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setIsReady(true)
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-[var(--color-surface-lowest)]/94 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-2 gap-3">
          <Button asChild size="lg" variant="default" className="w-full">
            <Link href={bookOnlineHref}>
              <CalendarDots />
              Book
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full">
            <a href={sitePhoneHref}>
              <Phone />
              Call
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
