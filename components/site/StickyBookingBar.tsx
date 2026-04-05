"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { Button } from "@/components/ui/button"
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
    return "Directions"
  }

  if (normalizedLabel.includes("menu") || action.href === "/menu") {
    return "Menu"
  }

  if (normalizedLabel.includes("book")) {
    return "Book"
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
  if (pathname === "/book" || pathname === "/book-online") {
    return (
      activeRoute?.hero?.primaryAction ?? {
        href: bookingHref,
        label: "Book online",
      }
    )
  }

  return {
    href: bookOnlineHref,
    label: "Book",
  }
}

function getFallbackActions(pathname: string) {
  if (pathname === "/") {
    return [
      { href: "/menu", label: "Menu" },
      { href: sitePhoneHref, label: "Call" },
      { href: directionsHref, label: "Directions" },
    ]
  }

  if (pathname === "/find-us") {
    return [
      { href: directionsHref, label: "Directions" },
      { href: sitePhoneHref, label: "Call" },
    ]
  }

  if (pathname === "/menu") {
    return [
      { href: sitePhoneHref, label: "Call" },
      { href: "/menu-information", label: "Info" },
    ]
  }

  if (
    pathname === "/events" ||
    pathname === "/private-hire" ||
    pathname === "/group-dining-celebrations" ||
    pathname === "/wakes-life-celebrations"
  ) {
    return [
      { href: sitePhoneHref, label: "Call" },
      { href: directionsHref, label: "Directions" },
    ]
  }

  return [
    { href: "/menu", label: "Menu" },
    { href: sitePhoneHref, label: "Call" },
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
    }) ?? { href: sitePhoneHref, label: "Call" }
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
      className="fixed inset-x-0 bottom-0 z-50 bg-[var(--color-surface-lowest)]/95 px-4 pt-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto max-w-md">
        <div className="grid grid-cols-2 gap-3">
          <Button asChild size="lg" variant="default" className="w-full">
            <Link href={primaryAction.href} aria-label={primaryAction.label}>
              <span>{getActionPresentation(primaryAction)}</span>
            </Link>
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
