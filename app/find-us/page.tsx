import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  findUsAccessibilitySection,
  findUsActionCardText,
  findUsFaqSectionCopy,
  findUsAddressSection,
  findUsInlineCtaCopy,
} from "@/data/copy"
import {
  accessibilityNotes,
  arrivalNotes,
  localFaqs,
  mapHref,
  openingHours,
  openingHoursNote,
  organizationFactSheet,
  siteAddress,
  siteEmail,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import customerParkingImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-customer-parking.jpeg"
import pubExteriorImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-pub-building-exterior.jpeg"

const route = getRouteConfig("/find-us")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const visitFaqs = localFaqs.filter((faq) =>
  [
    "Do you have outside seating?",
    "How do I book a table?",
    "Are dogs welcome?",
  ].includes(faq.question)
)

const localVisitHighlights = [
  {
    title: "Near Stony Stratford High Street",
    description:
      "The Old School House sits on London Road, close enough for planned dinners, town-centre drinks, and meals that start after time on the High Street or Horsefair Green.",
  },
  {
    title: "Useful for local and Milton Keynes visitors",
    description:
      "The location works for Stony Stratford regulars, nearby Milton Keynes diners, and visitors who want a characterful pub with food before heading back out.",
  },
  {
    title: "Easy next steps once you know where we are",
    description:
      "Use the menu when you want to browse first, or move straight to booking if the route check has already turned into dinner plans.",
  },
]

export default function FindUsPage() {
  return (
    <main>
      <RouteStructuredData
        route={route!}
        faqItems={visitFaqs}
        pageType="ContactPage"
      />
      <PageHero {...route!.hero!} route={route!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="surface-panel space-y-5">
            <SectionHeading
              eyebrow="Location in town"
              title="Looking for a pub on London Road in Stony Stratford?"
              description="Everything you need before you head over: where we are, how to get here, and what to expect when you arrive."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {localVisitHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className={
                    index === 1 ? "surface-panel-muted" : "surface-panel"
                  }
                >
                  <h3 className="section-title">{item.title}</h3>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-secondary">
              <Link href="/menu" className="transition hover:text-secondary/80">
                Browse the pub menu
              </Link>
              <Link href="/book" className="transition hover:text-secondary/80">
                Book a table in Stony Stratford
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading {...findUsAddressSection} />
            <SiteActionCard
              actions={[
                {
                  href: route!.hero!.primaryAction.href,
                  label: route!.hero!.primaryAction.label,
                },
                { href: mapHref, label: "Open map" },
              ]}
              supportingText={findUsActionCardText}
            />
          </div>
          <div className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-4">
              <div className="surface-panel">
                <div className="space-y-4 text-sm leading-7 text-on-surface md:text-base">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>{siteAddress}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="mt-1 size-4 shrink-0 text-secondary" />
                    <a
                      href={sitePhoneHref}
                      className="text-secondary transition hover:text-secondary/80"
                    >
                      {sitePhone}
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <EnvelopeSimple className="mt-1 size-4 shrink-0 text-secondary" />
                    <a
                      href={siteEmailHref}
                      className="text-secondary transition hover:text-secondary/80"
                    >
                      {siteEmail}
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>{openingHours[0].hours}</span>
                  </p>
                  <p className="text-on-surface/72">{openingHoursNote}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {organizationFactSheet.slice(0, 4).map((item, index) => (
                  <article
                    key={item.label}
                    className={
                      index % 2 === 1 ? "surface-panel-muted" : "surface-panel"
                    }
                  >
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      {item.label}
                    </p>
                    <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                      {item.value}
                    </p>
                  </article>
                ))}
              </div>
              <div className="grid gap-4">
                {arrivalNotes.map((note, index) => (
                  <article
                    key={note}
                    className={
                      index === 1 ? "surface-panel-muted" : "surface-panel"
                    }
                  >
                    <p className="text-sm leading-7 text-on-surface md:text-base">
                      {note}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <MapEmbed />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="On arrival"
            title="A clearer picture of the frontage and approach before you set off."
            description="Use these quick views to recognise the building and get a feel for the easier arrival setup."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <article className="surface-frame">
              <Image
                src={pubExteriorImage}
                alt="Exterior of The Old School House pub on London Road in Stony Stratford, close to the High Street."
                className="h-72 w-full object-cover md:h-80"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="surface-pane">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  Frontage
                </p>
                <h3 className="section-title pt-3">
                  Recognise the pub from London Road
                </h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  The pub is easy to recognise on London Road once you know the
                  brick frontage you are looking for.
                </p>
              </div>
            </article>
            <article className="surface-frame">
              <Image
                src={customerParkingImage}
                alt="Customer parking area at The Old School House pub in Stony Stratford."
                className="h-72 w-full object-cover md:h-80"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="surface-pane">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  Arrival
                </p>
                <h3 className="section-title pt-3">
                  Parking and easier arrival
                </h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  A small customer parking area helps make planned dinners,
                  family visits, and longer stays feel simpler from the start.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <InlineBookingCta {...findUsInlineCtaCopy} />

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...findUsAccessibilitySection} />
          <div className="grid gap-4 md:grid-cols-3">
            {accessibilityNotes.map((note, index) => (
              <article
                key={note}
                className={
                  index === 1 ? "surface-panel-muted" : "surface-panel"
                }
              >
                <p className="text-sm leading-7 text-on-surface md:text-base">
                  {note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection {...findUsFaqSectionCopy} faqs={visitFaqs} />
    </main>
  )
}
