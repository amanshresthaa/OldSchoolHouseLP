import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  EnvelopeSimple,
  Television,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import {
  CompactHighlightGrid,
  EditorialLinkCardContent,
} from "@/components/site/HomepagePatternPrimitives"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  eventsActionCardText,
  eventsActionLabels,
  eventsFaqSectionCopy,
  eventsInquiryCardCopy,
  eventsInlineCtaCopy,
  eventsLiveSportCard,
  eventsMediaCards,
  eventsPlanningActionCardCopy,
  eventsPlanningCards,
  eventsPlanningSectionCopy,
  eventsPrivateHireCard,
  eventsRouteSection,
  eventsReturnVisitSection,
  eventsWhatOnCards,
  eventsWhatOnFaqs,
  eventsWhatOnSectionCopy,
} from "@/data/copy"
import { eventOccasions, siteEmailHref, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"
import dartBoardImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-dart-board.jpeg"
import poolTableImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-pool-table-and-fruit-machine.jpeg"
import sportsTvImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-sports-tv-big-screen.jpeg"

const route = getRouteConfig("/whats-on")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function EventsPage() {
  return (
    <main>
      <RouteStructuredData route={route!} faqItems={eventsWhatOnFaqs} />
      <PageHero {...route!.hero!} route={route!} />

      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...eventsWhatOnSectionCopy} />
            <SiteActionCard
              actions={[
                {
                  href: "/book",
                  label: eventsActionLabels.primary,
                  icon: <ArrowRight className="size-4" />,
                },
                {
                  href: "/private-hire",
                  label: eventsActionLabels.secondary,
                },
              ]}
              supportingText={eventsActionCardText}
            />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={eventsWhatOnCards} />
          </ScrollReveal>
          <ScrollReveal
            delayMs={180}
            className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]"
          >
            <article className="surface-frame">
              <Image
                src={sportsTvImage}
                alt={eventsMediaCards[0].alt}
                className="h-80 w-full object-cover md:h-[28rem]"
                sizes="(min-width: 1280px) 50vw, 100vw"
              />
              <div className="surface-pane">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  {eventsMediaCards[0].eyebrow}
                </p>
                <h3 className="pt-3 font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
                  {eventsMediaCards[0].title}
                </h3>
                <p className="pt-2 text-sm leading-relaxed text-on-surface">
                  {eventsMediaCards[0].description}
                </p>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <article className="surface-frame">
                <Image
                  src={poolTableImage}
                  alt={eventsMediaCards[1].alt}
                  className="h-64 w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="surface-pane">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    {eventsMediaCards[1].eyebrow}
                  </p>
                  <h3 className="pt-3 font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
                    {eventsMediaCards[1].title}
                  </h3>
                  <p className="pt-2 text-sm leading-relaxed text-on-surface">
                    {eventsMediaCards[1].description}
                  </p>
                </div>
              </article>
              <article className="surface-frame">
                <Image
                  src={dartBoardImage}
                  alt={eventsMediaCards[2].alt}
                  className="h-64 w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="surface-pane">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    {eventsMediaCards[2].eyebrow}
                  </p>
                  <h3 className="pt-3 font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
                    {eventsMediaCards[2].title}
                  </h3>
                  <p className="pt-2 text-sm leading-relaxed text-on-surface">
                    {eventsMediaCards[2].description}
                  </p>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...eventsReturnVisitSection} />
          </ScrollReveal>
          <ScrollReveal
            delayMs={120}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {eventOccasions.map((occasion, index) => (
              <article
                key={occasion}
                className={`text-sm leading-relaxed md:text-base ${
                  index % 2 === 0 ? "surface-panel" : "surface-panel-muted"
                }`}
              >
                {occasion}
              </article>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className={getSectionBandClass("warm", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading
              eyebrow={eventsPlanningSectionCopy.eyebrow}
              title={eventsPlanningSectionCopy.title}
              description={eventsPlanningSectionCopy.description}
            />
            <SiteActionCard
              actions={[
                {
                  href: "/private-hire",
                  label: eventsPlanningActionCardCopy.primaryActionLabel,
                  icon: <ArrowRight className="size-4" />,
                },
                {
                  href: "/book",
                  label: eventsPlanningActionCardCopy.secondaryActionLabel,
                },
              ]}
              supportingText={eventsPlanningActionCardCopy.supportingText}
            />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={eventsPlanningCards} />
          </ScrollReveal>
          <ScrollReveal delayMs={180}>
            <div className="surface-frame">
              <div className="surface-pane">
                <div className="max-w-2xl space-y-3">
                  <p className="eyebrow">{eventsInquiryCardCopy.eyebrow}</p>
                  <h3 className="font-heading text-[1.5rem] leading-[1.08] tracking-[-0.025em] text-on-background md:text-[1.7rem]">
                    {eventsInquiryCardCopy.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface">
                    {eventsInquiryCardCopy.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-6 sm:flex-row">
                  <a
                    href={siteEmailHref}
                    className="cta-primary inline-flex h-12 items-center justify-center gap-2.5 px-6 text-sm font-semibold"
                  >
                    {eventsInquiryCardCopy.primaryActionLabel}
                    <EnvelopeSimple className="size-4" />
                  </a>
                  <a
                    href={sitePhoneHref}
                    className="cta-secondary inline-flex h-12 items-center justify-center px-6"
                  >
                    {eventsInquiryCardCopy.secondaryActionLabel}
                  </a>
                </div>
                <p className="pt-4 text-sm leading-relaxed text-on-surface/72">
                  {eventsInquiryCardCopy.footer}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <InlineBookingCta
        className={getSectionBandClass("dark")}
        {...eventsInlineCtaCopy}
      />

      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...eventsRouteSection} />
          </ScrollReveal>
          <ScrollReveal delayMs={120} className="grid gap-4 md:grid-cols-2">
            <Link
              href="/live-sports"
              className="surface-frame block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
            >
              <EditorialLinkCardContent
                title={eventsLiveSportCard.title}
                description={eventsLiveSportCard.description}
                className="surface-pane"
                icon={<Television className="size-5" />}
              />
            </Link>
            <Link
              href="/private-hire"
              className="surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
            >
              <EditorialLinkCardContent
                title={eventsPrivateHireCard.title}
                description={eventsPrivateHireCard.description}
                icon={<UsersThree className="size-5" />}
              />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        className={getSectionBandClass("paper")}
        {...eventsFaqSectionCopy}
        faqs={eventsWhatOnFaqs}
      />
    </main>
  )
}
