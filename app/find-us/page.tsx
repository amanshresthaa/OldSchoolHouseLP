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
import { CompactHighlightGrid } from "@/components/site/HomepagePatternPrimitives"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  findUsAccessibilitySection,
  findUsActionCardText,
  findUsFaqSectionCopy,
  findUsArrivalCards,
  findUsArrivalSectionCopy,
  findUsAddressSection,
  findUsInlineCtaCopy,
  findUsLocalVisitHighlights,
  findUsLocationSectionCopy,
  findUsMapActionLabel,
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
import { getSectionBandClass } from "@/lib/section-bands"
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

export default function FindUsPage() {
  return (
    <main>
      <RouteStructuredData
        route={route!}
        faqItems={visitFaqs}
        pageType="ContactPage"
      />
      <PageHero {...route!.hero!} route={route!} />

      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...findUsLocationSectionCopy} />
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-secondary">
              <Link href="/menu" className="transition hover:text-secondary/80">
                {findUsLocationSectionCopy.menuLinkLabel}
              </Link>
              <Link href="/book" className="transition hover:text-secondary/80">
                {findUsLocationSectionCopy.bookingLinkLabel}
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={findUsLocalVisitHighlights} />
          </ScrollReveal>
          <ScrollReveal
            delayMs={180}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...findUsAddressSection} />
            <SiteActionCard
              actions={[
                {
                  href: route!.hero!.primaryAction.href,
                  label: route!.hero!.primaryAction.label,
                },
                { href: mapHref, label: findUsMapActionLabel },
              ]}
              supportingText={findUsActionCardText}
            />
          </ScrollReveal>
          <ScrollReveal
            delayMs={240}
            className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="space-y-4">
              <div className="surface-panel">
                <div className="space-y-4 text-sm leading-relaxed text-on-surface md:text-base">
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
                    <p className="pt-3 text-sm leading-relaxed text-on-surface">
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
                    <p className="text-sm leading-relaxed text-on-surface">
                      {note}
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <MapEmbed />
          </ScrollReveal>
        </div>
      </section>

      <section className={getSectionBandClass("warm", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...findUsArrivalSectionCopy} />
          </ScrollReveal>
          <ScrollReveal delayMs={120} className="grid gap-4 md:grid-cols-2">
            <article className="surface-frame">
              <Image
                src={pubExteriorImage}
                alt={findUsArrivalCards[0].alt}
                className="h-72 w-full object-cover md:h-80"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="surface-pane">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  {findUsArrivalCards[0].eyebrow}
                </p>
                <h3 className="pt-3 font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
                  {findUsArrivalCards[0].title}
                </h3>
                <p className="pt-2 text-sm leading-relaxed text-on-surface">
                  {findUsArrivalCards[0].description}
                </p>
              </div>
            </article>
            <article className="surface-frame">
              <Image
                src={customerParkingImage}
                alt={findUsArrivalCards[1].alt}
                className="h-72 w-full object-cover md:h-80"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="surface-pane">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  {findUsArrivalCards[1].eyebrow}
                </p>
                <h3 className="pt-3 font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
                  {findUsArrivalCards[1].title}
                </h3>
                <p className="pt-2 text-sm leading-relaxed text-on-surface">
                  {findUsArrivalCards[1].description}
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <InlineBookingCta
        className={getSectionBandClass("dark")}
        {...findUsInlineCtaCopy}
      />

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...findUsAccessibilitySection} />
          </ScrollReveal>
          <ScrollReveal delayMs={120} className="grid gap-4 md:grid-cols-3">
            {accessibilityNotes.map((note, index) => (
              <article
                key={note}
                className={
                  index === 1 ? "surface-panel-muted" : "surface-panel"
                }
              >
                <p className="text-sm leading-relaxed text-on-surface">
                  {note}
                </p>
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        className={getSectionBandClass("paper")}
        {...findUsFaqSectionCopy}
        faqs={visitFaqs}
      />
    </main>
  )
}
