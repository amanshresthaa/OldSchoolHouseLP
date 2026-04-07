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
import {
  EditorialLinkCardContent,
  NumberedStepFlow,
} from "@/components/site/HomepagePatternPrimitives"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
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
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/book")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const bookingFaqs = localFaqs.filter((faq) =>
  [
    "How do I book a table?",
    "What kind of place is The Old School House?",
    "Do you serve both pub food and Nepalese dishes?",
  ].includes(faq.question)
)

const bookingSteps = [
  {
    title: "Book standard tables online first",
    description: bookingNotes[0],
  },
  {
    title: "Call or email when timing matters",
    description: bookingNotes[1],
  },
  {
    title: "Use the dedicated enquiry routes for bigger plans",
    description: bookingNotes[2],
  },
]

export default function BookPage() {
  return (
    <main>
      <RouteStructuredData route={route!} faqItems={bookingFaqs} />
      <PageHero {...route!.hero!} route={route!} />

      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...bookOnlineSectionCopy} />
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
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
              <article className="surface-frame">
                <div className="surface-pane space-y-4">
                  <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                    Reserve your table
                  </p>
                  <p className="text-sm leading-relaxed text-on-surface md:text-base">
                    Online booking is still the fastest route for planned meals,
                    while the call and email options stay visible when your
                    booking needs a real person to sanity-check the timing.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
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
              </article>
              <NumberedStepFlow
                items={bookingSteps}
                label="How booking works"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...bookBeforeSection} />
          </ScrollReveal>
          <ScrollReveal delayMs={120} className="grid gap-4 md:grid-cols-3">
            <Link
              href="/sunday-roast"
              className="surface-frame block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
            >
              <EditorialLinkCardContent
                title={bookSundayCard.title}
                description={bookSundayCard.description}
                className="surface-pane"
                icon={<CalendarDots className="size-5" />}
              />
            </Link>
            <Link
              href="/private-hire"
              className="surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
            >
              <EditorialLinkCardContent
                title={bookPrivateHireCard.title}
                description={bookPrivateHireCard.description}
                icon={<UsersThree className="size-5" />}
              />
            </Link>
            <Link
              href="/find-us"
              className="surface-frame block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
            >
              <EditorialLinkCardContent
                title={bookFindUsCard.title}
                description={bookFindUsCard.description}
                className="surface-pane"
                icon={<Phone className="size-5" />}
              />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        className={getSectionBandClass("paper")}
        {...bookFaqSectionCopy}
        faqs={bookingFaqs}
      />

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
