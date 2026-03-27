import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CalendarDots,
  EnvelopeSimple,
  Phone,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  bookingHref,
  bookingNotes,
  localFaqs,
  openingHours,
  siteEmail,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/book")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

const bookingFaqs = localFaqs.filter((faq) =>
  [
    "How do I book a table?",
    "What kind of place is The Old School House?",
    "Do you serve both pub food and Nepalese dishes?",
  ].includes(faq.question)
)

export default function BookPage() {
  return (
    <main>
      <PageHero {...route!.hero!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-panel">
              <p className="eyebrow">Book online</p>
              <h1 className="section-title pt-3">
                The fastest route is the online booking link.
              </h1>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                If you are booking a standard table, start online first. Use the
                phone or email if your plans need more context than a simple
                table reservation.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={bookingHref}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary inline-flex h-12 items-center justify-center gap-2.5 px-6 text-sm font-semibold"
                >
                  Book online
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/menu"
                  className="cta-secondary inline-flex h-12 items-center justify-center gap-2.5 px-6"
                >
                  View menu first
                </Link>
              </div>
            </div>
            <SiteActionCard
              actions={[
                {
                  href: sitePhoneHref,
                  label: `Call ${sitePhone}`,
                  icon: <Phone className="size-4" />,
                },
                {
                  href: siteEmailHref,
                  label: `Email ${siteEmail}`,
                  icon: <EnvelopeSimple className="size-4" />,
                },
              ]}
              supportingText={`${openingHours[0].hours}. If your booking depends on a specific service time, please contact the pub directly.`}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {bookingNotes.map((note, index) => (
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

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Before you book"
            title="The pub and the kitchen should both feel clear before you commit."
            description="A fast decision is easier when the site explains what kind of place this is, how the menu works, and where you are going."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/sunday-roast"
              className="surface-panel transition hover:-translate-y-0.5"
            >
              <CalendarDots className="size-5 text-secondary" />
              <h2 className="section-title pt-3">Booking for Sunday?</h2>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                Start with the Sunday roast page if the weekend visit is the
                main plan.
              </p>
            </Link>
            <Link
              href="/private-hire"
              className="surface-panel-muted transition hover:-translate-y-0.5"
            >
              <UsersThree className="size-5 text-secondary" />
              <h2 className="section-title pt-3">Planning something bigger?</h2>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                Use the private hire route if this is more than a
                straightforward table booking.
              </p>
            </Link>
            <Link
              href="/find-us"
              className="surface-panel transition hover:-translate-y-0.5"
            >
              <Phone className="size-5 text-secondary" />
              <h2 className="section-title pt-3">
                Need the practical details?
              </h2>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                Check the address, directions, and arrival notes before you set
                off.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="Booking help"
        title="A few things people usually want to know before they reserve."
        description="Keep the booking journey simple, then use a quick call for anything that needs confirming on the day."
        faqs={bookingFaqs}
      />

      <PageSignoff
        eyebrow="Next step"
        title="Book first, then let the menu do the persuading."
        body={
          <p>
            The Old School House works best when the table is sorted and the
            menu is something you can enjoy discovering once the visit already
            feels easy to say yes to.
          </p>
        }
        actions={[
          {
            href: bookingHref,
            label: "Book online",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/menu",
            label: "View menu",
          },
        ]}
      />
    </main>
  )
}
