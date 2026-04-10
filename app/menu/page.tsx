import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { CompactHighlightGrid } from "@/components/site/HomepagePatternPrimitives"
import { PageSignoff } from "@/components/site/PageSignoff"
import { MenuInteractive } from "@/components/site/MenuInteractive"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  menuDrinksSection,
  menuInlineCtaCopy,
  menuLocalDiningSectionCopy,
  menuLocalIntentCards,
  menuQuickInfoCopy,
  menuSchemaDescription,
  menuSignoffCopy,
  menuWhatToExpect,
} from "@/data/copy"
import {
  bookOnlineHref,
  drinksHighlights,
  foodHours,
  policyNotes,
  sanjogGautamId,
  siteMenuId,
  siteMenuPdfHref,
  siteOrganizationId,
  sitePhoneHref,
  siteRestaurantId,
  siteUrl,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"
import { menuCategories } from "@/lib/menu"
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
            hasMenuSection: menuCategories.map((category) => ({
              "@type": "MenuSection",
              name: category.title,
              description: category.intro,
              hasMenuItem: category.items.map((item) => ({
                "@type": "MenuItem",
                name: item.name,
                description: item.description ?? undefined,
                offers: {
                  "@type": "Offer",
                  price: String(item.price.amount),
                  priceCurrency: item.price.currency,
                },
              })),
            })),
          }),
        }}
      />

      {/* A. Hero */}
      <PageHero {...route!.hero!} route={route!} />

      {/* B. Quick-info strip */}
      <section className={cn("page-section", getSectionBandClass("paper"))}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <div className="surface-frame">
              <div className="surface-pane">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                  <div className="space-y-1 text-sm leading-7 text-on-surface">
                    <p className="mb-3 text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                      {menuQuickInfoCopy.hoursLabel}
                    </p>
                    {foodHours.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <div className="space-y-1 text-sm leading-7 text-on-surface">
                    <p className="mb-3 text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                      {menuQuickInfoCopy.whatToExpectLabel}
                    </p>
                    <p>{menuWhatToExpect}</p>
                  </div>

                  <div className="space-y-3">
                    <p className="mb-3 text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                      {menuQuickInfoCopy.resourcesLabel}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild size="sm" variant="outline">
                        <a href={siteMenuPdfHref} download>
                          {menuQuickInfoCopy.pdfLabel}
                          <DownloadSimple />
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <Link href="/menu-information">
                          {menuQuickInfoCopy.infoLabel}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={cn("page-section", getSectionBandClass("plain"))}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...menuLocalDiningSectionCopy} />
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={menuLocalIntentCards} />
          </ScrollReveal>
        </div>
      </section>

      {/* C. Interactive menu */}
      <section className={cn("page-section", getSectionBandClass("paper"))}>
        <MenuInteractive categories={menuCategories} />
      </section>

      {/* C2. Drinks highlights */}
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

      {/* D. Inline booking CTA */}
      <InlineBookingCta
        className={getSectionBandClass("dark")}
        {...menuInlineCtaCopy}
      />

      {/* E. Good to know */}
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
              <div className="night-tile">{menuSignoffCopy.servingSizes}</div>
              <div className="night-tile">{menuSignoffCopy.allergyNote}</div>
            </div>
            <div className="grid gap-2 text-sm leading-7">
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
