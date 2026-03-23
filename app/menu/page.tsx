import type { Metadata } from "next"
import Link from "next/link"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { EditorialBreak } from "@/components/site/EditorialBreak"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageSignoff } from "@/components/site/PageSignoff"
import { MenuInteractive } from "@/components/site/MenuInteractive"
import { PageHero } from "@/components/site/PageHero"
import { Button } from "@/components/ui/button"
import {
  drinksHighlights,
  foodHours,
  policyNotes,
  siteMenuPdfHref,
  sitePhoneHref,
} from "@/data/site"
import { menuCategories } from "@/lib/menu"

export const metadata: Metadata = {
  title: "Menu in Stony Stratford",
  description:
    "Explore the food and drink at The Old School House in Stony Stratford, from pub favourites and Nepalese dishes to desserts, craft pours, and coffee.",
  alternates: { canonical: "/menu" },
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
      <PageHero
        eyebrow="Food and drink menu"
        title="Two kitchens, one menu, and a table worth coming back to."
        description="Pub favourites sit alongside Nepalese specialities. Browse everything here, then book or call when you are ready."
        primaryAction={{ href: "/book", label: "Book a table" }}
        secondaryAction={{ href: sitePhoneHref, label: "Call 01908 561936" }}
      />

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

      {/* Editorial break */}
      <EditorialBreak quote="Come in for something familiar, stay for something you have never tried before." />

      {/* D. Inline booking CTA */}
      <InlineBookingCta
        title="Seen something you fancy?"
        description="Pick your table now, then come back to the menu if you want a second look before you arrive."
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
            href: "/book",
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
