import Link from "next/link"
import { Clock, MapPin, Phone } from "@phosphor-icons/react/dist/ssr"

import {
  openingHours,
  siteAddress,
  siteEmail,
  siteEmailHref,
  siteName,
  siteNav,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:px-8 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
              The Old School House
            </p>
            <h2 className="max-w-md text-white">
              A traditional pub and Nepalese kitchen for Stony Stratford.
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-7 text-white/74">
            <p>{siteAddress}</p>
            <p className="break-words">
              <a className="transition hover:text-white" href={sitePhoneHref}>
                {sitePhone}
              </a>
              {" · "}
              <a
                className="break-all transition hover:text-white"
                href={siteEmailHref}
              >
                {siteEmail}
              </a>
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
            Explore
          </p>
          <nav className="grid gap-3 text-sm text-white/74">
            {siteNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
            Need-to-know
          </p>
          <div className="space-y-3 text-sm text-white/74">
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
              <span>{openingHours[0].hours}</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
              <span>{siteAddress}</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
              <span>{sitePhone}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-4 text-center text-xs tracking-[0.16em] text-white/55 uppercase sm:px-6 md:px-8">
        {siteName} · London Road · Stony Stratford · Milton Keynes
      </div>
    </footer>
  )
}
