"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
import { List, X } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import { siteLocation, siteName, siteNav } from "@/data/site"
import { cn } from "@/lib/utils"

function isCurrentPath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-black/5 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 md:px-8">
          <Link href="/" className="min-w-0 flex-1 pr-1 md:flex-none md:pr-0">
            <span className="block text-[clamp(1.08rem,5vw,1.5rem)] leading-[0.94] text-primary sm:text-2xl">
              {siteName}
            </span>
            <span className="block pt-1 text-[0.5rem] leading-[1.25] font-semibold tracking-[0.12em] text-on-surface uppercase sm:text-[0.68rem] sm:tracking-[0.22em]">
              {siteLocation}
            </span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {siteNav.slice(0, 4).map((item) => {
              const active = isCurrentPath(pathname, item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[0.82rem] font-semibold tracking-[0.16em] text-on-background uppercase transition hover:text-secondary",
                    active && "text-secondary"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button asChild>
              <Link href="/book">Book a table</Link>
            </Button>
          </nav>
          <div className="shrink-0 flex items-center gap-2 md:hidden">
            <Button asChild size="sm">
              <Link href="/book">Book</Link>
            </Button>
            <button
              type="button"
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
      </header>
      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-primary/96 px-5 py-6 text-white backdrop-blur-md md:hidden">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1 pr-2">
              <p className="text-[clamp(1.6rem,8vw,2.2rem)] leading-[0.95] text-white">
                {siteName}
              </p>
              <p className="pt-2 text-[0.58rem] leading-[1.35] font-semibold tracking-[0.14em] text-[var(--color-on-tertiary-container)] uppercase">
                {siteLocation}
              </p>
            </div>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-white"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="mt-12 grid gap-5">
            {siteNav.map((item) => {
              const active = isCurrentPath(pathname, item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-heading text-4xl leading-none text-white/78 transition hover:text-[var(--color-on-tertiary-container)]",
                    active && "text-[var(--color-on-tertiary-container)]"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      ) : null}
    </>
  )
}
