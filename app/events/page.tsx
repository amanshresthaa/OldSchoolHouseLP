import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDots,
  ForkKnife,
  Television,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
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
import { eventOccasions } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import dartBoardImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-dart-board.jpeg"
import poolTableImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-pool-table-and-fruit-machine.jpeg"
import sportsTvImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-sports-tv-big-screen.jpeg"

const route = getRouteConfig("/events")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const whatOnIcons = [Television, CalendarDots, ForkKnife]

export default function EventsPage() {
  return (
    <main>
      <PageHero {...route!.hero!} />

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
              showDivider
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {eventsWhatOnCards.map((card, index) => {
              const Icon = whatOnIcons[index]

              return (
                <article
                  key={card.title}
                  className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                    index === 1
                      ? "surface-pane-muted"
                      : "bg-[var(--color-surface-lowest)]"
                  }`}
                >
                  <Icon className="size-5 text-secondary" />
                  <h2 className="section-title pt-3">{card.title}</h2>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    {card.description}
                  </p>
                </article>
              )
            })}
          </div>
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <article className="overflow-hidden rounded-[2rem] bg-[var(--color-surface-lowest)] shadow-[0px_18px_48px_rgba(27,28,28,0.06)]">
              <Image
                src={sportsTvImage}
                alt="Large-screen sports setup inside The Old School House."
                className="h-80 w-full object-cover md:h-[28rem]"
                sizes="(min-width: 1280px) 50vw, 100vw"
              />
              <div className="px-5 py-5 md:px-6 md:py-6">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  Match nights
                </p>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  Big-screen sport still lands inside a room that feels like a
                  proper pub, not just somewhere to watch a fixture.
                </p>
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <article className="overflow-hidden rounded-[1.7rem] bg-[var(--color-surface-lowest)] shadow-[0px_10px_28px_rgba(27,28,28,0.05)]">
                <Image
                  src={poolTableImage}
                  alt="Pool table and fruit machine inside The Old School House."
                  className="h-64 w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="px-5 py-5 md:px-6 md:py-6">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Casual nights
                  </p>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    Pool, drinks, and easy pub energy give casual evenings more
                    to do between rounds and conversation.
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-[1.7rem] bg-[var(--color-surface-lowest)] shadow-[0px_10px_28px_rgba(27,28,28,0.05)]">
                <Image
                  src={dartBoardImage}
                  alt="Dart board area inside The Old School House pub."
                  className="h-64 w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                <div className="px-5 py-5 md:px-6 md:py-6">
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
                className={`rounded-2xl px-5 py-5 text-sm leading-7 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 md:text-base ${
                  index % 2 === 0
                    ? "bg-[var(--color-surface-lowest)]"
                    : "surface-pane-muted"
                }`}
              >
                {occasion}
              </article>
            ))}
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
              className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6"
            >
              <Television className="size-5 text-secondary" />
              <h2 className="section-title pt-3">
                {eventsLiveSportCard.title}
              </h2>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {eventsLiveSportCard.description}
              </p>
            </Link>
            <Link
              href="/private-hire"
              className="surface-pane-muted rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6"
            >
              <UsersThree className="size-5 text-secondary" />
              <h2 className="section-title pt-3">
                {eventsPrivateHireCard.title}
              </h2>
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
