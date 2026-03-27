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

const whatOnCards = [
  {
    title: "Live sport that keeps the pub feel intact",
    description:
      "Fixtures matter here, but so do the drinks, the table, and the atmosphere around them. That makes the pub a better all-round choice than a screen-only venue.",
    icon: Television,
  },
  {
    title: "Quiz nights and product tastings",
    description:
      "Community-led reasons to return help the pub feel active without needing to become a crowded event machine every night of the week.",
    icon: CalendarDots,
  },
  {
    title: "Food-led nights with stronger identity",
    description:
      "The Nepalese kitchen gives tasting nights and special menus more shape than the usual generic pub promo.",
    icon: ForkKnife,
  },
]

const whatOnFaqs = [
  {
    question: "What kinds of events does The Old School House suit?",
    answer:
      "The pub suits live sport, quiz nights, tastings, community meetups, and other repeat-visit reasons to come back through the week and across the year.",
  },
  {
    question: "Can I book a table for event nights?",
    answer:
      "Yes. Booking ahead is the safest route if you know you are coming in for a fixture, quiz night, or a busier evening.",
  },
  {
    question: "What if I want to organise a bigger private occasion instead?",
    answer:
      "Use the private hire page if the main need is a birthday, work drinks, wake, or group gathering rather than a public event night.",
  },
]

export default function EventsPage() {
  return (
    <main>
      <PageHero {...route!.hero!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What’s on at the pub"
              title="Repeat visits matter just as much as the first one."
              description="The Old School House should feel like a pub people keep in mind for a match, a quiz, a tasting night, or the kind of evening that only becomes a plan once friends start messaging."
            />
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
              supportingText="Use What’s On for public reasons to visit. Use Private Hire when you are planning something centred around your own group."
              showDivider
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {whatOnCards.map((card, index) => {
              const Icon = card.icon

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
          <SectionHeading
            eyebrow="Built for return visits"
            title="The pub should work for more than one kind of night."
            description="Live sport, local meetups, and tasting-led evenings help people think of The Old School House more often than just when they happen to need dinner."
          />
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

      <InlineBookingCta
        title="Heading in for the match, the quiz, or a busier night?"
        description="Book ahead and let the pub side of the visit feel straightforward before the evening gets moving."
      />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Need a different route?"
            title="Public events and private occasions should not compete with each other."
            description="If your priority is your own guest list rather than the pub calendar, the private hire route is the right next step."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/live-sport"
              className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6"
            >
              <Television className="size-5 text-secondary" />
              <h2 className="section-title pt-3">Live sport</h2>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                Use the live sport page if the main draw is the fixture and the
                table around it.
              </p>
            </Link>
            <Link
              href="/private-hire"
              className="surface-pane-muted rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6"
            >
              <UsersThree className="size-5 text-secondary" />
              <h2 className="section-title pt-3">Private hire</h2>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                Use private hire for birthdays, wakes, work drinks, and
                gatherings built around your own group.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="What’s on FAQs"
        title="Keep public event nights easy to understand."
        description="The page should explain why people come back, while letting private enquiries move somewhere more appropriate."
        faqs={whatOnFaqs}
      />
    </main>
  )
}
