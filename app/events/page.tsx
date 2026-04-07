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
  eventsFaqSectionCopy,
  eventsInlineCtaCopy,
  eventsLiveSportCard,
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

const route = getRouteConfig("/events")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const eventsPlanningCards = [
  {
    title: "Sky Sports and TNT Sports in a proper pub room",
    description:
      "The sport offer is a reason to visit, but the table, food, and atmosphere around it are what keep the visit feeling like a local pub night.",
  },
  {
    title: "Local teams and socials are part of the plan",
    description:
      "Pool teams, rugby clubs, cricket clubs, and other local groups all fit naturally into the rhythm of the pub.",
  },
  {
    title: "Theme nights and tastings keep the week moving",
    description:
      "Tasting evenings, themed nights, and other weeknight plans help keep the pub lively without making it feel chaotic.",
  },
]

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
                  label: "Book for an event night",
                  icon: <ArrowRight className="size-4" />,
                },
                {
                  href: "/private-hire",
                  label: "Private hire",
                },
              ]}
              supportingText={eventsActionCardText}
            />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid
              items={eventsWhatOnCards}
              cueOrder={1}
              cueLabel="reasons"
            />
          </ScrollReveal>
          <ScrollReveal
            delayMs={180}
            className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]"
          >
            <article className="surface-frame">
              <Image
                src={sportsTvImage}
                alt="Large-screen live sport setup inside The Old School House pub in Stony Stratford."
                className="h-80 w-full object-cover md:h-[28rem]"
                sizes="(min-width: 1280px) 50vw, 100vw"
              />
              <div className="surface-pane">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  Match nights
                </p>
                <h3 className="pt-3 font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
                  Big-screen sport with a proper pub backdrop
                </h3>
                <p className="pt-2 text-sm leading-relaxed text-on-surface">
                  Big-screen sport, shaped around the Sky Sports and TNT Sports
                  offer, still lands inside a room that feels like a proper pub
                  rather than just somewhere to watch a fixture.
                </p>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <article className="surface-frame">
                <Image
                  src={poolTableImage}
                  alt="Pool table and fruit machine inside The Old School House pub in Stony Stratford."
                  className="h-64 w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="surface-pane">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Casual nights
                  </p>
                  <h3 className="pt-3 font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
                    Pool, rounds, and easy evening energy
                  </h3>
                  <p className="pt-2 text-sm leading-relaxed text-on-surface">
                    Pool, drinks, and easy pub energy give local teams and
                    casual evenings more to do between rounds and conversation.
                  </p>
                </div>
              </article>
              <article className="surface-frame">
                <Image
                  src={dartBoardImage}
                  alt="Dart board area inside The Old School House pub in Stony Stratford."
                  className="h-64 w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="surface-pane">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Pub-side favourites
                  </p>
                  <h3 className="pt-3 font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
                    Darts keeps the social side in view
                  </h3>
                  <p className="pt-2 text-sm leading-relaxed text-on-surface">
                    Darts keeps the social side of the pub in view alongside
                    food, drinks, and sport-led plans.
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
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
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
              eyebrow="Planning around the calendar"
              title="Need to sort a bigger sport night, team social, or themed visit?"
              description="If the plan needs a little more than a standard booking, this is the easiest place to start."
            />
            <SiteActionCard
              actions={[
                {
                  href: "/private-hire",
                  label: "Private hire options",
                  icon: <ArrowRight className="size-4" />,
                },
                {
                  href: "/book",
                  label: "Standard table booking",
                },
              ]}
              supportingText="Ideal for team socials, sport-led group visits, and busier event nights."
            />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid
              items={eventsPlanningCards}
              cueOrder={2}
              cueLabel="planning notes"
            />
          </ScrollReveal>
          <ScrollReveal delayMs={180}>
            <div className="surface-frame">
              <div className="surface-pane">
                <div className="max-w-2xl space-y-3">
                  <p className="eyebrow">Need more than a standard booking?</p>
                  <h3 className="font-heading text-[1.5rem] leading-[1.08] tracking-[-0.025em] text-on-background md:text-[1.7rem]">
                    Email the team if the visit needs a little more context.
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface">
                    It is the easiest option when the evening depends on
                    screens, group size, timing, or a team and social setup
                    rather than just a normal table booking.
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-6 sm:flex-row">
                  <a
                    href={siteEmailHref}
                    className="cta-primary inline-flex h-12 items-center justify-center gap-2.5 px-6 text-sm font-semibold"
                  >
                    Email the team
                    <EnvelopeSimple className="size-4" />
                  </a>
                  <a
                    href={sitePhoneHref}
                    className="cta-secondary inline-flex h-12 items-center justify-center px-6"
                  >
                    Call the pub
                  </a>
                </div>
                <p className="pt-4 text-sm leading-relaxed text-on-surface/72">
                  Mention the fixture or occasion, rough guest numbers,
                  preferred date, and anything the team should know about the
                  setup.
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
              href="/live-sport"
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
