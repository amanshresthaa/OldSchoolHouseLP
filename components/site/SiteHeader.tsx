"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import { List, X } from "@phosphor-icons/react"

import logo from "@/images/logos/OldSchoolHouse.png"
import { Button } from "@/components/ui/button"
import {
  bookOnlineHref,
  siteDescriptor,
  siteLocation,
  siteName,
  type NavItem,
} from "@/data/site"
import { siteNav } from "@/data/site-routes"
import { cn } from "@/lib/utils"

function isCurrentPath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href)
}

interface HeaderNavLinkProps extends Omit<
  React.ComponentProps<typeof Link>,
  "href"
> {
  active: boolean
  item: NavItem
}

function HeaderNavLink({
  active,
  item,
  className,
  ...props
}: HeaderNavLinkProps) {
  return (
    <Link
      href={item.href}
      className={cn(
        "px-2 py-2 text-[0.875rem] font-medium tracking-[0.1rem] text-on-background uppercase transition hover:text-tertiary",
        active && "text-secondary",
        className
      )}
      {...props}
    >
      {item.label}
    </Link>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const dialogRef = React.useRef<HTMLDivElement>(null)
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")

    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false)
      }
    }

    if (mediaQuery.matches) {
      setIsOpen(false)
    }

    mediaQuery.addEventListener("change", handleViewportChange)

    return () => {
      mediaQuery.removeEventListener("change", handleViewportChange)
    }
  }, [])

  React.useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ""
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setIsOpen(false)
        return
      }

      if (event.key !== "Tab") {
        return
      }

      const focusableElements = dialogRef.current?.querySelectorAll<
        HTMLButtonElement | HTMLAnchorElement
      >('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')

      if (!focusableElements?.length) {
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/5 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-3 sm:px-6 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="min-w-0 flex-1 pr-1 xl:flex-none xl:pr-0"
              aria-label={siteName}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="shrink-0">
                  <Image
                    src={logo}
                    alt="The Old School House logo"
                    className="h-12 w-auto sm:h-14"
                    priority
                  />
                </div>
                <div className="max-w-[10.5rem] min-w-0 sm:max-w-[14rem] lg:max-w-[16rem]">
                  <p className="font-heading text-base leading-[1.02] text-on-background sm:text-lg lg:text-xl">
                    {siteName}
                  </p>
                  <p className="pt-1 text-[0.62rem] font-semibold tracking-[0.18em] text-secondary uppercase sm:text-[0.68rem] sm:tracking-[0.22em]">
                    {siteLocation}
                  </p>
                  <p className="hidden pt-1 text-[0.72rem] leading-4 text-on-surface sm:block">
                    {siteDescriptor}
                  </p>
                </div>
              </div>
            </Link>
            <nav className="hidden items-center gap-1 xl:flex">
              {siteNav
                .filter((item) => item.href !== "/book")
                .map((item) => (
                  <HeaderNavLink
                    key={item.href}
                    active={isCurrentPath(pathname, item.href)}
                    item={item}
                  />
                ))}
            </nav>
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <Button asChild size="sm">
                <Link href={bookOnlineHref}>Book</Link>
              </Button>
            </div>
            <div className="flex shrink-0 items-center gap-2 md:hidden">
              <Button asChild size="sm">
                <Link href={bookOnlineHref}>Book</Link>
              </Button>
              <button
                type="button"
                aria-controls="mobile-site-navigation"
                aria-expanded={isOpen}
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                onClick={() => setIsOpen((value) => !value)}
                className="inline-flex size-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-container"
              >
                {isOpen ? <X size={20} /> : <List size={20} />}
              </button>
            </div>
          </div>
          <nav
            aria-label="Primary navigation"
            className="mt-3 hidden flex-wrap items-center gap-2 border-t border-black/5 pt-3 md:flex xl:hidden"
          >
            {siteNav
              .filter((item) => item.href !== "/book")
              .map((item) => (
                <HeaderNavLink
                  key={item.href}
                  active={isCurrentPath(pathname, item.href)}
                  item={item}
                />
              ))}
          </nav>
        </div>
      </header>
      {isOpen ? (
        <div
          ref={dialogRef}
          id="mobile-site-navigation"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-site-navigation-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-primary/96 px-5 py-6 text-white backdrop-blur-xl md:hidden"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1 pr-2">
              <div className="flex min-w-0 items-center gap-3">
                <Image
                  src={logo}
                  alt="The Old School House logo"
                  className="h-10 w-auto brightness-0 invert"
                  priority
                />
                <div className="max-w-[12rem] min-w-0">
                  <p className="font-heading text-lg leading-[1.02] text-white">
                    {siteName}
                  </p>
                  <p className="pt-1 text-[0.62rem] font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)] uppercase">
                    {siteLocation}
                  </p>
                </div>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white"
            >
              <X size={20} />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="mt-12 grid gap-5">
            {siteNav
              .filter((item) => item.href !== "/book")
              .map((item) => {
                const active = isCurrentPath(pathname, item.href)

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "font-heading text-4xl leading-none text-white/78 transition hover:text-[var(--color-tertiary)]",
                      active && "text-[var(--color-tertiary)]"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
          </nav>
          <div className="mt-10 border-t border-white/10 pt-8">
            <Link
              href={bookOnlineHref}
              className="cta-primary inline-flex h-14 w-full items-center justify-center gap-2.5 px-8 text-base font-semibold"
            >
              Book a table
            </Link>
            <p className="pt-3 text-center text-sm text-white/55">
              Booking options and contact details
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}
