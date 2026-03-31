import type { Metadata } from "next"
import Link from "next/link"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageSignoff } from "@/components/site/PageSignoff"
import { MenuInteractive } from "@/components/site/MenuInteractive"
import { PageHero } from "@/components/site/PageHero"
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
  siteMenuPdfHref,
  sitePhoneHref,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { menuCategories } from "@/lib/menu"

const route = getRouteConfig("/menu")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function MenuPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Menu",
            name: "The Old School House Menu",
            description: menuSchemaDescription,
            inLanguage: "en-GB",
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
      <PageHero {...route!.hero!} />

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
