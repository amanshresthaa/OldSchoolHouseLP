"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { stickyBookingBarCopy } from "@/data/copy"
import {
  bookOnlineHref,
  bookingHref,
  directionsHref,
  sitePhoneHref,
  type CtaConfig,
  type RouteConfig,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  )
}

function isSameAction(action: CtaConfig | undefined, comparison: CtaConfig) {
  if (!action) {
    return false
  }

  return action.href === comparison.href && action.label === comparison.label
}

function getActionPresentation(action: CtaConfig) {
  const normalizedLabel = action.label.toLowerCase()

  if (normalizedLabel.includes("direction") || action.href === directionsHref) {
    return stickyBookingBarCopy.directionsLabel
  }

  if (normalizedLabel.includes("menu") || action.href === "/our-menus") {
    return stickyBookingBarCopy.menuLabel
  }

  if (normalizedLabel.includes("book")) {
    return stickyBookingBarCopy.bookLabel
  }

  return action.label
}

function resolveActiveRoute(pathname: string) {
  const directMatch = getRouteConfig(pathname)

  if (directMatch) {
    return directMatch
  }

  const segments = pathname.split("/").filter(Boolean)

  for (let index = segments.length - 1; index >= 0; index -= 1) {
    const nextPath = `/${segments.slice(0, index + 1).join("/")}`
    const matchedRoute = getRouteConfig(nextPath)

    if (matchedRoute) {
      return matchedRoute
    }
  }

  return undefined
}

function getPrimaryAction(
  activeRoute: RouteConfig | undefined,
  pathname: string
): CtaConfig {
  if (pathname === "/") {
    return {
      href: bookingHref,
      label: stickyBookingBarCopy.bookLabel,
    }
  }

  if (pathname === "/book" || pathname === "/book-online") {
    return (
      activeRoute?.hero?.primaryAction ?? {
        href: bookingHref,
        label: stickyBookingBarCopy.bookOnlineLabel,
      }
    )
  }

  return {
    href: bookOnlineHref,
    label: stickyBookingBarCopy.bookLabel,
  }
}

function getFallbackActions(pathname: string) {
  if (pathname === "/") {
    return [
      { href: "/our-menus", label: stickyBookingBarCopy.menuLabel },
      { href: sitePhoneHref, label: stickyBookingBarCopy.callLabel },
      { href: directionsHref, label: stickyBookingBarCopy.directionsLabel },
    ]
  }

  if (pathname === "/contact-us") {
    return [
      { href: directionsHref, label: stickyBookingBarCopy.directionsLabel },
      { href: sitePhoneHref, label: stickyBookingBarCopy.callLabel },
    ]
  }

  if (pathname === "/our-menus") {
    return [
      { href: sitePhoneHref, label: stickyBookingBarCopy.callLabel },
      { href: "/menu-information", label: stickyBookingBarCopy.infoLabel },
    ]
  }

  if (
    pathname === "/whats-on" ||
    pathname === "/private-hire" ||
    pathname === "/group-dining-celebrations" ||
    pathname === "/wakes-life-celebrations"
  ) {
    return [
      { href: sitePhoneHref, label: stickyBookingBarCopy.callLabel },
      { href: directionsHref, label: stickyBookingBarCopy.directionsLabel },
    ]
  }

  return [
    { href: "/our-menus", label: stickyBookingBarCopy.menuLabel },
    { href: sitePhoneHref, label: stickyBookingBarCopy.callLabel },
  ]
}

function getSecondaryAction(
  activeRoute: RouteConfig | undefined,
  pathname: string,
  primaryAction: CtaConfig
) {
  const candidates = [
    activeRoute?.stickySecondaryAction,
    activeRoute?.hero?.secondaryAction,
    ...getFallbackActions(pathname),
  ].filter((candidate): candidate is CtaConfig => Boolean(candidate))

  return (
    candidates.find((candidate) => {
      if (isSameAction(candidate, primaryAction)) {
        return false
      }

      if (candidate.href === pathname) {
        return false
      }

      return true
    }) ?? { href: sitePhoneHref, label: stickyBookingBarCopy.callLabel }
  )
}

export function StickyBookingBar() {
  const pathname = usePathname()
  const [isReady, setIsReady] = React.useState(false)

  React.useEffect(() => {
    setIsReady(true)
  }, [])

  if (!isReady) {
    return null
  }

  const activeRoute = resolveActiveRoute(pathname)
  const primaryAction = getPrimaryAction(activeRoute, pathname)
  const secondaryAction = getSecondaryAction(
    activeRoute,
    pathname,
    primaryAction
  )
  return (
    <div
      className="fixed bottom-0 left-1/2 z-50 w-[100dvw] max-w-full -translate-x-1/2 bg-[var(--color-surface-lowest)]/95 px-4 pt-3 backdrop-blur-xl md:hidden"
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
        paddingLeft: "max(1rem, calc(env(safe-area-inset-left) + 0.75rem))",
        paddingRight: "max(1rem, calc(env(safe-area-inset-right) + 0.75rem))",
      }}
    >
      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-2 gap-3">
          <Button asChild size="lg" variant="default" className="w-full">
            {isExternalHref(primaryAction.href) ? (
              <a href={primaryAction.href} aria-label={primaryAction.label}>
                <span>{getActionPresentation(primaryAction)}</span>
              </a>
            ) : (
              <Link href={primaryAction.href} aria-label={primaryAction.label}>
                <span>{getActionPresentation(primaryAction)}</span>
              </Link>
            )}
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full">
            {isExternalHref(secondaryAction.href) ? (
              <a href={secondaryAction.href} aria-label={secondaryAction.label}>
                <span>{getActionPresentation(secondaryAction)}</span>
              </a>
            ) : (
              <Link
                href={secondaryAction.href}
                aria-label={secondaryAction.label}
              >
                <span>{getActionPresentation(secondaryAction)}</span>
              </Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
