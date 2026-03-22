"use client"

import Link from "next/link"
import * as React from "react"
import { CalendarDots, Phone } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { sitePhoneHref } from "@/data/site"

export function StickyBookingBar() {
  const [activeCta, setActiveCta] = React.useState<"book" | "call">("book")

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCta((current) => (current === "book" ? "call" : "book"))
    }, 3200)

    return () => window.clearInterval(interval)
  }, [])

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
