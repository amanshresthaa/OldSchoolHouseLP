import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  DownloadSimple,
  ForkKnife,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MenuSection } from "@/components/site/MenuSection"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { StickySplitSection } from "@/components/site/StickySplitSection"
import { Button } from "@/components/ui/button"
import {
  drinksHighlights,
  policyNotes,
  siteMenuPdfHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { menuCategories } from "@/lib/menu"

import menuImage from "@/images/food/kathmandu-tikka-masala-2.png"

export const metadata: Metadata = {
  title: "Menu in Stony Stratford",
  description:
    "Explore the food and drink at The Old School House in Stony Stratford, from pub favourites and Nepalese dishes to desserts, craft pours, and coffee.",
  alternates: {
    canonical: "/menu",
  },
}

const featuredAnchors = menuCategories
const firstHalf = menuCategories.slice(0, 6)
const secondHalf = menuCategories.slice(6)

function MenuExplorer({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="bg-background py-8 md:py-10">
      <div className="section-shell">
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.62fr_1.38fr]">
            <div className="surface-pane surface-pane-muted">
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="pt-3 text-[2rem]">{title}</h2>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {description}
              </p>
            </div>
            <div className="surface-pane bg-[var(--color-surface-lowest)]">
              <div className="hide-scrollbar flex gap-px overflow-x-auto overscroll-x-contain bg-[rgba(196,189,181,0.22)] sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 xl:grid-cols-4">
                {featuredAnchors.map((category) => (
                  <a
                    key={category.slug}
                    href={`#${category.slug}`}
                    className="shrink-0 snap-start bg-[var(--color-surface-lowest)] px-4 py-4 text-xs font-semibold tracking-[0.16em] text-on-background uppercase transition hover:bg-[var(--color-surface-low)] sm:shrink sm:snap-none md:px-5"
                  >
                    {category.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Food and drink menu"
        title="Food for a quick pint stop, a proper dinner, or a table that keeps growing."
        description="Browse pub favourites, Nepalese dishes, sharers, desserts, and drinks before you come in."
        primaryAction={{ href: "/book", label: "Book a table" }}
        secondaryAction={{ href: sitePhoneHref, label: "Call 01908 561936" }}
      />

      <MenuExplorer
        eyebrow="Jump to a section"
        title="Browse the whole menu without hunting for the next category."
        description="Every section is linked here, so you can jump straight to momo, mixed grills, speciality dishes, curries, sides, desserts, or drinks-friendly extras."
      />

      <StickySplitSection
        className="bg-background"
        intro={
          <div className="space-y-6">
            <SectionHeading
              eyebrow="From the kitchen"
              title="Two menu moods, one pub."
              description="Come in for something familiar, try something a little different, or build the table around both."
            />
            <Image
              src={menuImage}
              alt="A plated Kathmandu tikka masala dish from The Old School House menu."
              className="media-lift h-[22rem] w-full rounded-[2rem] object-cover md:h-[30rem] lg:h-[36rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        }
      >
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.94fr_1.06fr]">
            <div className="surface-pane surface-pane-muted">
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
                  If you are hoping to join us today or booking for a bigger
                  table, give us a ring on{" "}
                  <a
                    href={sitePhoneHref}
                    className="text-secondary transition hover:text-secondary/80"
                  >
                    {sitePhone}
                  </a>
                  .
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" variant="outline">
                  <a href={siteMenuPdfHref} download>
                    Download PDF menu
                    <DownloadSimple />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/menu-information">Allergens & menu info</Link>
                </Button>
              </div>
            </div>
            <div className="surface-pane bg-[var(--color-surface-lowest)] lg:pt-12">
              <h2>Drinks worth asking for</h2>
              <div className="mt-4 grid gap-3">
                {drinksHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] bg-[var(--color-surface-low)]/72 px-5 py-4 text-sm leading-7 text-on-surface"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-6">
                <Link href="/book">
                  Book your table
                  <ForkKnife />
                </Link>
              </Button>
              <div className="mt-6 grid gap-3 text-sm leading-7 text-on-surface">
                <Link
                  href="/takeaway-menu"
                  className="text-secondary transition hover:text-secondary/80"
                >
                  Looking for collection details instead?
                </Link>
                <Link
                  href="/wakes-menu"
                  className="text-secondary transition hover:text-secondary/80"
                >
                  Planning buffet-style food for a wake?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </StickySplitSection>

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

      <MenuExplorer
        eyebrow="Keep exploring"
        title="Jump back into the menu wherever you left off."
        description="If you are comparing dishes, deciding for the table, or skipping straight to desserts and sides, these links keep the long scroll easy."
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
            description="A few simple notes to make choosing drinks and food that bit easier."
            invert
          />
          <div className="night-panel grid gap-3">
            {policyNotes.map((note) => (
              <div key={note} className="night-tile">
                {note}
              </div>
            ))}
            <div className="night-tile">
              Beer and cider are available by the half pint, spirits in 25ml or
              35ml servings, and still wine in 125ml measures.
            </div>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-fit border-white/12 bg-black/16 text-white hover:bg-black/24 hover:text-white"
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
