import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { footerBrandCopy, footerTagline } from "@/data/copy"
import {
  directionsHref,
  openingHours,
  siteAddress,
  siteEmail,
  siteEmailHref,
  siteName,
  sitePhone,
  sitePhoneHref,
  socialLinks,
} from "@/data/site"
import {
  siteFooterCoreLinks,
  siteLegalLinks,
  siteResources,
} from "@/data/site-routes"
import logo from "@/images/logos/old-school-house-pub-stony-stratford-mk-logo.png"

interface FooterContactItem {
  label: string
  value: string
  href?: string
  icon: typeof Clock
}

const contactItems: FooterContactItem[] = [
  {
    label: footerBrandCopy.contactLabels.hours,
    value: openingHours[0].hours,
    icon: Clock,
  },
  {
    label: footerBrandCopy.contactLabels.phone,
    value: sitePhone,
    href: sitePhoneHref,
    icon: Phone,
  },
  {
    label: footerBrandCopy.contactLabels.email,
    value: siteEmail,
    href: siteEmailHref,
    icon: EnvelopeSimple,
  },
  {
    label: footerBrandCopy.contactLabels.findUs,
    value: footerBrandCopy.shortAddress,
    href: "/find-us",
    icon: MapPin,
  },
]

const footerLinks = [
  ...siteFooterCoreLinks,
  ...siteResources.filter((item) =>
    ["/guides", "/takeaway-menu", "/accessibility"].includes(item.href)
  ),
]

export function SiteFooter() {
  const socialItems = [
    {
      href: socialLinks.find((link) => link.includes("facebook.com")),
      label: footerBrandCopy.socialLabels.facebook,
      icon: FacebookLogo,
    },
    {
      href: socialLinks.find((link) => link.includes("instagram.com")),
      label: footerBrandCopy.socialLabels.instagram,
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
    <footer className="border-t border-[rgba(196,189,181,0.32)] bg-[var(--color-surface-low)]">
      <div className="section-shell py-8 md:py-10">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
          <div className="py-6 lg:pr-10">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="The Old School House logo"
                className="h-11 w-auto"
                priority
              />
              <div>
                <p className="eyebrow">{footerBrandCopy.eyebrow}</p>
                <p className="text-sm text-on-surface md:text-base">
                  {footerBrandCopy.description}
                </p>
              </div>
            </div>

            <h2 className="max-w-2xl pt-5 font-heading text-[clamp(1.8rem,3vw,2.85rem)] leading-[1.04] text-on-background">
              {footerTagline}
            </h2>

            <p className="max-w-xl pt-4 text-sm leading-7 text-on-surface md:text-base">
              {siteAddress}
            </p>

            <div className="flex flex-wrap gap-3 pt-5">
              <Button asChild>
                <Link href="/book">{footerBrandCopy.primaryActionLabel}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/menu">{footerBrandCopy.secondaryActionLabel}</Link>
              </Button>
              <Button asChild variant="ghost">
                <a href={directionsHref} target="_blank" rel="noreferrer">
                  {footerBrandCopy.directionsActionLabel}
                </a>
              </Button>
            </div>
          </div>

          <div className="border-t border-[rgba(196,189,181,0.32)] py-6 lg:border-t-0 lg:border-l lg:pl-10">
            <div className="grid gap-5 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = item.href ? (
                  <Link
                    href={item.href}
                    className="break-words transition hover:text-secondary"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <span>{item.value}</span>
                )

                return (
                  <div
                    key={item.label}
                    className="space-y-2 border-t border-[rgba(196,189,181,0.35)] pt-4 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-4"
                  >
                    <div className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      <Icon className="size-3.5" />
                      <span>{item.label}</span>
                    </div>
                    <div className="text-sm leading-7 text-on-surface md:text-base">
                      {content}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="surface-divider mt-1 h-px" />

        <div className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-on-surface transition hover:text-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            {socialItems.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-on-surface transition hover:-translate-y-0.5 hover:bg-[var(--color-surface-highest)] hover:text-secondary"
                >
                  <Icon className="size-4.5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="surface-divider h-px" />

        <div className="flex flex-col items-center justify-between gap-3 px-0 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-[0.72rem] tracking-[0.16em] text-on-surface/70 uppercase">
            © {new Date().getFullYear()} {siteName} · Stony Stratford
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {siteLegalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.72rem] tracking-[0.16em] text-on-surface/70 uppercase transition hover:text-secondary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
