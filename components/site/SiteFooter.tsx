import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Clock,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import logo from "@/images/logos/OldSchoolHouse.png"
import {
  directionsHref,
  mapHref,
  openingHours,
  siteAddress,
  siteEmail,
  siteEmailHref,
  siteLegalLinks,
  siteName,
  siteNav,
  sitePhone,
  sitePhoneHref,
  siteResources,
  socialLinks,
} from "@/data/site"

export function SiteFooter() {
  const socialItems = [
    {
      href: socialLinks.find((link) => link.includes("facebook.com")),
      label: "Facebook",
      icon: FacebookLogo,
    },
    {
      href: socialLinks.find((link) => link.includes("instagram.com")),
      label: "Instagram",
      icon: InstagramLogo,
    },
  ].filter(
    (
      item
    ): item is {
      href: string
      label: string
      icon: typeof FacebookLogo
    } => Boolean(item.href)
  )

  return (
    <footer className="bg-primary text-white">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.25fr_0.8fr_0.85fr_0.9fr]">
        <div className="space-y-5">
          <div className="space-y-2">
            <Image
              src={logo}
              alt="The Old School House logo"
              className="h-10 w-auto brightness-0 invert"
              priority
            />
            <h2 className="max-w-md pt-3 text-white">
              A traditional pub and Nepalese kitchen for Stony Stratford.
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-7 text-white/72">
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
            <p>
              <a
                className="inline-flex items-center gap-2 text-[var(--color-on-tertiary-container)] transition hover:text-white"
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
                <ArrowUpRight className="size-4" />
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialItems.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/72 transition hover:-translate-y-0.5 hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              )
            })}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
            Explore
          </p>
          <nav className="grid gap-3 text-sm text-white/72">
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
            Menus & info
          </p>
          <nav className="grid gap-3 text-sm text-white/72">
            {siteResources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            {siteLegalLinks.map((item) => (
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
            Visit
          </p>
          <div className="space-y-3 text-sm text-white/72">
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
              <a className="transition hover:text-white" href={sitePhoneHref}>
                {sitePhone}
              </a>
            </p>
            <p className="pt-1">
              <a
                className="inline-flex items-center gap-2 text-[var(--color-on-tertiary-container)] transition hover:text-white"
                href={mapHref}
                target="_blank"
                rel="noreferrer"
              >
                Open map
                <ArrowUpRight className="size-4" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 py-4 text-xs tracking-[0.16em] text-white/55 uppercase">
        <div className="section-shell text-center">
          {siteName} · London Road · Stony Stratford · Milton Keynes
        </div>
      </div>
    </footer>
  )
}
