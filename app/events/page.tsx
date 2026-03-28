import type { Metadata } from "next"
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

const route = getRouteConfig("/events")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

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
