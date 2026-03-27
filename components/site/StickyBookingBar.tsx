"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import {
  CalendarDots,
  ChatCircleDots,
  MapTrifold,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { bookOnlineHref, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

export function StickyBookingBar() {
  const pathname = usePathname()
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setIsReady(true)
  }, [])

  if (!isReady) {
    return null
  }

  const activeRoute =
    getRouteConfig(pathname) ??
    [...Array.from(pathname.split("/").keys())].reduceRight<
      ReturnType<typeof getRouteConfig> | undefined
    >((match, index) => {
      if (match) {
        return match
      }

      const nextPath =
        index === 0
          ? "/"
          : pathname
              .split("/")
              .slice(0, index + 1)
              .join("/")

      return getRouteConfig(nextPath)
    }, undefined)

  const secondaryAction =
    activeRoute?.stickySecondaryAction ??
    ({ href: sitePhoneHref, label: "Call" } as const)

  const SecondaryIcon = secondaryAction.label
    .toLowerCase()
    .includes("direction")
    ? MapTrifold
    : secondaryAction.label.toLowerCase().includes("enquire")
      ? ChatCircleDots
      : Phone

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
            {secondaryAction.href.startsWith("http") ||
            secondaryAction.href.startsWith("mailto:") ||
            secondaryAction.href.startsWith("tel:") ? (
              <a href={secondaryAction.href}>
                <SecondaryIcon />
                {secondaryAction.label}
              </a>
            ) : (
              <Link href={secondaryAction.href}>
                <SecondaryIcon />
                {secondaryAction.label}
              </Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
