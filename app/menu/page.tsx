import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ForkKnife, Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MenuSection } from "@/components/site/MenuSection"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import {
  drinksHighlights,
  policyNotes,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { menuCategories } from "@/lib/menu"

import menuImage from "@/images/food/kathmandu-tikka-masala-2.png"

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the food and drink at The Old School House in Stony Stratford, from pub favourites and Nepalese dishes to desserts, craft pours, and coffee.",
}

const featuredAnchors = menuCategories.slice(0, 6)
const firstHalf = menuCategories.slice(0, 6)
const secondHalf = menuCategories.slice(6)

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Food and drink menu"
        title="Food for a quick pint stop, a proper dinner, or a table that keeps growing."
        description="Browse pub favourites, Nepalese dishes, sharers, desserts, and drinks before you come in."
        highlights={[
          "Classic pub food and Nepalese specialities",
          "Prices visible without zooming",
          "Call the pub for booking and same-day plans",
        ]}
        primaryAction={{ href: "/book", label: "Book a table" }}
        secondaryAction={{ href: sitePhoneHref, label: "Call 01908 561936" }}
      />

      <section className="bg-background py-8 md:py-10">
        <div className="section-shell flex gap-3 overflow-x-auto pb-2">
          {featuredAnchors.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="shrink-0 rounded-full bg-[var(--color-surface-low)] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-on-background uppercase transition hover:bg-[var(--color-surface-highest)]"
            >
              {category.title}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-background pb-16 md:pb-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="House direction"
              title="Two menu moods, one pub."
              description="Come in for something familiar, try something a little different, or build the table around both."
            />
            <Image
              src={menuImage}
              alt="A plated Kathmandu tikka masala dish from The Old School House menu."
              className="h-[22rem] w-full rounded-[2rem] object-cover md:h-[30rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="space-y-6">
            <div className="rounded-[1.75rem] bg-[var(--color-surface-low)] px-5 py-6 md:px-7">
              <h2 className="text-[2rem]">Before you order</h2>
              <div className="space-y-4 pt-4 text-sm leading-7 text-on-surface md:text-base">
                <p>
                  If you have an allergy or want to double-check a dish, please
                  speak to the team before ordering.
                </p>
                <p>
                  Challenge 25 is in operation, and standard drinks measures are
                  available at the bar.
                </p>
                <p>
                  For same-day tables or larger groups, the quickest option is
                  to call{" "}
                  <a
                    href={sitePhoneHref}
                    className="text-secondary transition hover:text-secondary/80"
                  >
                    {sitePhone}
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h2>Drinks worth asking for</h2>
              <div className="grid gap-3">
                {drinksHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] bg-[var(--color-surface-lowest)] px-5 py-4 text-sm leading-7 text-on-surface"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="/book">
                Book your table
                <ForkKnife />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-16 md:py-24">
        <div className="section-shell grid gap-6">
          {firstHalf.map((category) => (
            <MenuSection key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <InlineBookingCta
        title="Seen something you fancy?"
        description="Pick your table now, then come back to the menu if you want a second look before you arrive."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-6">
          {secondHalf.map((category) => (
            <MenuSection key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Good to know"
            title="A few helpful details before you order."
            description="A few simple notes to make ordering drinks and food that bit easier."
            invert
          />
          <div className="grid gap-3">
            {policyNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1.35rem] bg-white/8 px-5 py-4 text-sm leading-7 text-white/78"
              >
                {note}
              </div>
            ))}
            <div className="rounded-[1.35rem] bg-white/8 px-5 py-4 text-sm leading-7 text-white/78">
              Beer and cider are available by the half pint, spirits in 25ml or
              35ml servings, and still wine in 125ml measures.
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-fit border-white/16 bg-white/8 text-white hover:bg-white/12 hover:text-white"
            >
              <a href={sitePhoneHref}>
                Call the bar
                <Phone />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
