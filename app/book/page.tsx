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
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  bookBeforeSection,
  bookFaqSectionCopy,
  bookFindUsCard,
  bookOnlineSectionCopy,
  bookPrivateHireCard,
  bookSignoffCopy,
  bookSundayCard,
} from "@/data/copy"
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
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/book")

export const metadata: Metadata = buildPageMetadata(route!.meta)

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
      <RouteStructuredData route={route!} faqItems={bookingFaqs} />
      <PageHero {...route!.hero!} route={route!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="surface-panel">
              <p className="eyebrow">{bookOnlineSectionCopy.eyebrow}</p>
              <h2 className="section-title pt-3">
                {bookOnlineSectionCopy.title}
              </h2>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {bookOnlineSectionCopy.description}
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
          <SectionHeading {...bookBeforeSection} />
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/sunday-roast"
              className="surface-panel transition hover:-translate-y-0.5"
            >
              <CalendarDots className="size-5 text-secondary" />
              <h3 className="section-title pt-3">{bookSundayCard.title}</h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {bookSundayCard.description}
              </p>
            </Link>
            <Link
              href="/private-hire"
              className="surface-panel-muted transition hover:-translate-y-0.5"
            >
              <UsersThree className="size-5 text-secondary" />
              <h3 className="section-title pt-3">
                {bookPrivateHireCard.title}
              </h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {bookPrivateHireCard.description}
              </p>
            </Link>
            <Link
              href="/find-us"
              className="surface-panel transition hover:-translate-y-0.5"
            >
              <Phone className="size-5 text-secondary" />
              <h3 className="section-title pt-3">{bookFindUsCard.title}</h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {bookFindUsCard.description}
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FaqSection {...bookFaqSectionCopy} faqs={bookingFaqs} />

      <PageSignoff
        eyebrow={bookSignoffCopy.eyebrow}
        title={bookSignoffCopy.title}
        body={<p>{bookSignoffCopy.body}</p>}
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
