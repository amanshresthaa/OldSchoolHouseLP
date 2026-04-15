import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MenuSwitcherExperience } from "@/components/site/MenuSwitcherExperience"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  menuDrinksSection,
  menuInlineCtaCopy,
  menuSchemaDescription,
  menuSignoffCopy,
} from "@/data/copy"
import {
  lunchMenuService,
  lunchMenuSource,
  mainMenuSource,
  menuVenueDetails,
} from "@/data/menu"
import {
  bookOnlineHref,
  drinksHighlights,
  policyNotes,
  sanjogGautamId,
  siteDinnerMenuPdfHref,
  siteLunchMenuPdfHref,
  siteMenuId,
  siteOrganizationId,
  sitePhoneHref,
  siteRestaurantId,
  siteUrl,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { dinnerMenuCategories, lunchMenuCategories } from "@/lib/menu"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"
import { cn } from "@/lib/utils"

const route = getRouteConfig("/menu")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function MenuPage() {
  return (
    <main>
      <RouteStructuredData
        route={route!}
        pageType="CollectionPage"
        authorId={sanjogGautamId}
        aboutIds={[siteOrganizationId, siteRestaurantId, sanjogGautamId]}
        mainEntityId={siteMenuId}
      />
      <Script
        id="old-school-house-menu-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            "@id": siteMenuId,
            name: "The Old School House Menu",
            description: menuSchemaDescription,
            url: `${siteUrl}/menu`,
            inLanguage: "en-GB",
            mainEntityOfPage: {
              "@id": `${siteUrl}/menu#webpage`,
            },
            isPartOf: {
              "@id": siteRestaurantId,
            },
            about: [
              {
                "@id": siteOrganizationId,
              },
              {
                "@id": siteRestaurantId,
              },
            ],
            author: {
              "@id": sanjogGautamId,
            },
            publisher: {
              "@id": siteOrganizationId,
            },
            provider: {
              "@id": siteOrganizationId,
            },
            hasMenuSection: [...mainMenuSource, ...lunchMenuSource].map(
              (category) => ({
                "@type": "MenuSection",
                name: category.title,
                description: category.intro,
                hasMenuItem: category.items.map((item) => ({
                  "@type": "MenuItem",
                  name: item.name,
                  description: item.desc ?? undefined,
                  offers: {
                    "@type": "Offer",
                    price: item.price.split("/")[0].trim(),
                    priceCurrency: "GBP",
                  },
                })),
              })
            ),
          }),
        }}
      />

      <PageHero {...route!.hero!} route={route!} />

      <section className={cn("page-section", getSectionBandClass("paper"))}>
        <div className="section-shell flex flex-col gap-4 md:gap-5">
          <ScrollReveal delayMs={0}>
            <div className="max-w-3xl space-y-3">
              <div className="eyebrow-row">
                <span aria-hidden="true" className="eyebrow-line" />
                <p className="eyebrow text-[var(--color-tertiary)]">Service</p>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-on-surface md:text-base">
                Switch between the lunch menu and the full evening menu below.
                The lunch side includes the full English, Sunday roast stays
                clearly signposted, and each version still has its own PDF.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Badge
                  variant="pill"
                  className="border-[rgba(196,189,181,0.28)] bg-[var(--color-surface-lowest)] px-3 py-1 text-[0.72rem] tracking-[0.12em] text-secondary uppercase"
                >
                  Full English: {lunchMenuService.lunchHours}
                </Badge>
                <Badge
                  variant="pill"
                  className="border-[rgba(196,189,181,0.28)] bg-[var(--color-surface-lowest)] px-3 py-1 text-[0.72rem] tracking-[0.12em] text-secondary uppercase"
                >
                  Lunch: {lunchMenuService.lunchHours}
                </Badge>
                <Badge
                  variant="pill"
                  className="border-[rgba(196,189,181,0.28)] bg-[var(--color-surface-lowest)] px-3 py-1 text-[0.72rem] tracking-[0.12em] text-secondary uppercase"
                >
                  Sunday roast: {lunchMenuService.sundayRoastHours}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline">
                  <a href="#menu-experience">View menu</a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={sitePhoneHref}>Call the pub</a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a
                    href={siteDinnerMenuPdfHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dinner PDF
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a
                    href={siteLunchMenuPdfHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lunch PDF
                  </a>
                </Button>
              </div>
              <p className="text-sm text-on-surface">
                Need service times first?{" "}
                <Link href="/menu-information" className="text-secondary">
                  Kitchen hours
                </Link>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <MenuSwitcherExperience
              id="menu-experience"
              menus={[
                {
                  kind: "dinner",
                  label: "Dinner",
                  shortLabel: "Dinner",
                  serviceLine: "5 pm onwards",
                  summary:
                    "The full evening menu with starters, grills, curries, pub classics, sides, and desserts.",
                  renderedHint: "",
                  renderedCategories: dinnerMenuCategories,
                  pdfHref: siteDinnerMenuPdfHref,
                },
                {
                  kind: "lunch",
                  label: "Lunch",
                  shortLabel: "Lunch",
                  serviceLine: lunchMenuService.lunchHours,
                  summary:
                    "Full English, grills, wraps, curries, pub classics, baguettes, jackets, and Sunday roast.",
                  renderedHint: "",
                  renderedCategories: lunchMenuCategories,
                  pdfHref: siteLunchMenuPdfHref,
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className={cn("page-section", getSectionBandClass("warm"))}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading
              eyebrow={menuDrinksSection.eyebrow}
              title={menuDrinksSection.title}
              description={menuDrinksSection.description}
            />
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {drinksHighlights.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                >
                  <Badge
                    variant="pill"
                    className="h-auto shrink-0 border-[rgba(196,189,181,0.32)] px-2.5 py-0.5 text-[0.7rem]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Badge>
                  <span className="text-[0.95rem] leading-[1.18] font-medium tracking-[-0.01em] text-on-background">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <InlineBookingCta
        className={getSectionBandClass("dark")}
        {...menuInlineCtaCopy}
      />

      <PageSignoff
        eyebrow={menuSignoffCopy.eyebrow}
        title={menuSignoffCopy.title}
        body={<p>{menuSignoffCopy.body}</p>}
        actions={[
          {
            href: sitePhoneHref,
            label: menuSignoffCopy.primaryActionLabel,
            icon: <Phone className="size-4" />,
          },
          {
            href: bookOnlineHref,
            label: menuSignoffCopy.secondaryActionLabel,
          },
        ]}
        details={
          <>
            <div className="grid gap-3">
              {policyNotes.map((note) => (
                <div key={note} className="night-tile">
                  {note}
                </div>
              ))}
              <div className="night-tile">{lunchMenuService.note}</div>
              <div className="night-tile">{menuSignoffCopy.servingSizes}</div>
              <div className="night-tile">{menuSignoffCopy.allergyNote}</div>
            </div>
            <div className="grid gap-2 text-sm leading-7">
              <p className="text-white/80">
                Kitchen hours:{" "}
                {menuVenueDetails.kitchenHours
                  .map((line) => `${line.day} ${line.hours}`)
                  .join(" · ")}
              </p>
              <p className="text-white/80">
                Bar hours:{" "}
                {menuVenueDetails.barHours
                  .map((line) => `${line.day} ${line.hours}`)
                  .join(" · ")}
              </p>
              <Link
                href="/sunday-roast"
                className="text-white/72 transition hover:text-white"
              >
                {menuSignoffCopy.sundayLink}
              </Link>
              <Link
                href="/nepalese-kitchen"
                className="text-white/72 transition hover:text-white"
              >
                {menuSignoffCopy.kitchenLink}
              </Link>
              <Link
                href="/group-dining-celebrations"
                className="text-white/72 transition hover:text-white"
              >
                {menuSignoffCopy.groupLink}
              </Link>
              <Link
                href="/takeaway-menu"
                className="text-white/72 transition hover:text-white"
              >
                {menuSignoffCopy.takeawayLink}
              </Link>
              <Link
                href="/wakes-menu"
                className="text-white/72 transition hover:text-white"
              >
                {menuSignoffCopy.wakesLink}
              </Link>
            </div>
          </>
        }
      />
    </main>
  )
}
