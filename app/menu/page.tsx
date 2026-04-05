import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageSignoff } from "@/components/site/PageSignoff"
import { MenuInteractive } from "@/components/site/MenuInteractive"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import {
  menuDrinksSection,
  menuInlineCtaCopy,
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
import { menuCategories } from "@/lib/menu"

const route = getRouteConfig("/menu")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const menuLocalIntentCards = [
  {
    title: "Built for mixed tables in Stony Stratford",
    description:
      "The menu works when one person wants a familiar pub classic and someone else wants momo, curries, grills, or another Nepalese dish worth exploring.",
  },
  {
    title: "Useful for lunch, dinner, and Sunday plans",
    description:
      "Browse this live menu before a midweek meal, a weekend catch-up, or a Sunday visit when you want the table and the food direction sorted in advance.",
  },
  {
    title: "Live HTML menu for local search and real visits",
    description:
      "Because the menu is readable on-page, it is easier to search, easier to browse on your phone, and more useful when you are deciding whether to book.",
  },
]

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
      <section className="bg-[var(--color-surface-low)] py-10 md:py-12">
        <div className="section-shell">
          <div className="surface-frame">
            <div className="surface-pane">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-px">
                <div className="space-y-1 text-sm leading-7 text-on-surface">
                  <p className="eyebrow">Hours</p>
                  {foodHours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>

                <div className="space-y-1 text-sm leading-7 text-on-surface">
                  <p className="eyebrow">What to expect</p>
                  <p>{menuWhatToExpect}</p>
                </div>

                <div className="space-y-3">
                  <p className="eyebrow">Resources</p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm" variant="outline">
                      <a href={siteMenuPdfHref} download>
                        Download PDF
                        <DownloadSimple />
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href="/menu-information">Menu info</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Menu for local dining"
            title="A Stony Stratford pub menu built for real lunch and dinner plans."
            description="This is not just a list of dishes. It is a clearer picture of how The Old School House works for town-centre meals, group plans, and bookings that need broad menu appeal."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {menuLocalIntentCards.map((card, index) => (
              <article
                key={card.title}
                className={
                  index === 1 ? "surface-panel-muted" : "surface-panel"
                }
              >
                <h3 className="section-title">{card.title}</h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* C. Interactive menu */}
      <section className="bg-background py-10 md:py-14">
        <MenuInteractive categories={menuCategories} />
      </section>

      {/* C2. Drinks highlights */}
      <section className="page-section bg-[var(--color-surface-low)]">
        <div className="section-shell">
          <div className="surface-frame">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.55fr_1.45fr]">
              <div className="surface-pane surface-pane-muted">
                <p className="eyebrow">{menuDrinksSection.eyebrow}</p>
                <h2 className="section-title pt-3">
                  {menuDrinksSection.title}
                </h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {menuDrinksSection.description}
                </p>
              </div>
              <div className="surface-pane bg-[var(--color-surface-lowest)]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {drinksHighlights.map((item) => (
                    <div
                      key={item}
                      className="content-card bg-[var(--color-surface-low)]/72 px-5 py-4 text-sm leading-7 text-on-surface"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. Inline booking CTA */}
      <InlineBookingCta {...menuInlineCtaCopy} />

      {/* E. Good to know */}
      <PageSignoff
        eyebrow={menuSignoffCopy.eyebrow}
        title={menuSignoffCopy.title}
        body={<p>{menuSignoffCopy.body}</p>}
        actions={[
          {
            href: sitePhoneHref,
            label: "Call the bar",
            icon: <Phone className="size-4" />,
          },
          {
            href: bookOnlineHref,
            label: "Book a table",
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
