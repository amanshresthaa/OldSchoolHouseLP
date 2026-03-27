import type { Metadata } from "next"
import Link from "next/link"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageSignoff } from "@/components/site/PageSignoff"
import { MenuInteractive } from "@/components/site/MenuInteractive"
import { PageHero } from "@/components/site/PageHero"
import { Button } from "@/components/ui/button"
import {
  bookOnlineHref,
  drinksHighlights,
  foodHours,
  policyNotes,
  siteMenuPdfHref,
  sitePhoneHref,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { menuCategories } from "@/lib/menu"

const route = getRouteConfig("/menu")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: { canonical: route?.meta.canonical },
}

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
            description:
              "Food and drink menu featuring pub favourites and Nepalese dishes.",
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
                  <p>Nepalese dishes, pub classics, kids meals and desserts</p>
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
                <p className="eyebrow">From the bar</p>
                <h2 className="section-title pt-3">Drinks worth asking for</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  A strong bar sits alongside the food. Ask the team what is
                  pouring well today.
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
      <InlineBookingCta
        title="Ready to try it?"
        description="Book your table now. You can always come back to the menu for a second look before you arrive."
      />

      {/* E. Good to know */}
      <PageSignoff
        eyebrow="Good to know"
        title="A few helpful details before you order."
        body={
          <p>
            If you have an allergy, want to double-check a dish, or need a quick
            answer before you come in, a call to the pub is always the safest
            route.
          </p>
        }
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
              <div className="night-tile">
                Beer and cider are available by the half pint, spirits in 25ml
                or 35ml servings, and still wine in 125ml measures.
              </div>
              <div className="night-tile">
                If you have an allergy or want to double-check a dish, please
                speak to the team before ordering.
              </div>
            </div>
            <div className="grid gap-2 text-sm leading-7">
              <Link
                href="/sunday-roast"
                className="text-white/72 transition hover:text-white"
              >
                Planning Sunday lunch? →
              </Link>
              <Link
                href="/nepalese-kitchen"
                className="text-white/72 transition hover:text-white"
              >
                Want the Nepalese side of the menu explained first? →
              </Link>
              <Link
                href="/group-dining-celebrations"
                className="text-white/72 transition hover:text-white"
              >
                Booking for a mixed group or celebration? →
              </Link>
              <Link
                href="/takeaway-menu"
                className="text-white/72 transition hover:text-white"
              >
                Looking for collection details instead? →
              </Link>
              <Link
                href="/wakes-menu"
                className="text-white/72 transition hover:text-white"
              >
                Planning buffet-style food for a wake? →
              </Link>
            </div>
          </>
        }
      />
    </main>
  )
}
