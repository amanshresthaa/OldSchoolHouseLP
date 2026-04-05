import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDots,
  EnvelopeSimple,
  ForkKnife,
  Television,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
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
import dartBoardImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-dart-board.jpeg"
import poolTableImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-pool-table-and-fruit-machine.jpeg"
import sportsTvImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-sports-tv-big-screen.jpeg"

const route = getRouteConfig("/events")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const whatOnIcons = [Television, CalendarDots, ForkKnife]

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

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {eventsWhatOnCards.map((card, index) => {
              const Icon = whatOnIcons[index]

              return (
                <article
                  key={card.title}
                  className={
                    index === 1 ? "surface-panel-muted" : "surface-panel"
                  }
                >
                  <Icon className="size-5 text-secondary" />
                  <h3 className="section-title pt-3">{card.title}</h3>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    {card.description}
                  </p>
                </article>
              )
            })}
          </div>
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
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
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
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
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
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
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    Darts keeps the social side of the pub in view alongside
                    food, drinks, and sport-led plans.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...eventsReturnVisitSection} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {eventOccasions.map((occasion, index) => (
              <article
                key={occasion}
                className={`text-sm leading-7 md:text-base ${
                  index % 2 === 0 ? "surface-panel" : "surface-panel-muted"
                }`}
              >
                {occasion}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {eventsPlanningCards.map((card, index) => (
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
          <div className="surface-frame">
            <div className="surface-pane">
              <div className="max-w-2xl space-y-3">
                <p className="eyebrow">Need more than a standard booking?</p>
                <h3 className="section-title">
                  Email the team if the visit needs a little more context.
                </h3>
                <p className="text-sm leading-7 text-on-surface md:text-base">
                  It is the easiest option when the evening depends on screens,
                  group size, timing, or a team and social setup rather than
                  just a normal table booking.
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
              <p className="pt-4 text-sm leading-7 text-on-surface/72 md:text-base">
                Mention the fixture or occasion, rough guest numbers, preferred
                date, and anything the team should know about the setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta {...eventsInlineCtaCopy} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...eventsRouteSection} />
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/live-sport"
              className="surface-panel transition hover:-translate-y-0.5"
            >
              <Television className="size-5 text-secondary" />
              <h3 className="section-title pt-3">
                {eventsLiveSportCard.title}
              </h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {eventsLiveSportCard.description}
              </p>
            </Link>
            <Link
              href="/private-hire"
              className="surface-panel-muted transition hover:-translate-y-0.5"
            >
              <UsersThree className="size-5 text-secondary" />
              <h3 className="section-title pt-3">
                {eventsPrivateHireCard.title}
              </h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {eventsPrivateHireCard.description}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection {...eventsFaqSectionCopy} faqs={eventsWhatOnFaqs} />
    </main>
  )
}
