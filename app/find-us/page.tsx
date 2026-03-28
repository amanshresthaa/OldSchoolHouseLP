import type { Metadata } from "next"
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  findUsAccessibilitySection,
  findUsActionCardText,
  findUsFaqSectionCopy,
  findUsAddressSection,
  findUsInlineCtaCopy,
} from "@/data/copy"
import {
  accessibilityNotes,
  arrivalNotes,
  localFaqs,
  mapHref,
  openingHours,
  openingHoursNote,
  siteAddress,
  siteEmail,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/find-us")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

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
      <PageHero {...route!.hero!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading {...findUsAddressSection} />
            <SiteActionCard
              actions={[
                {
                  href: route!.hero!.primaryAction.href,
                  label: route!.hero!.primaryAction.label,
                },
                { href: mapHref, label: "Open map" },
              ]}
              supportingText={findUsActionCardText}
              showDivider
            />
          </div>
          <div className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-4">
              <div className="surface-panel">
                <div className="space-y-4 text-sm leading-7 text-on-surface md:text-base">
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
              <div className="grid gap-4">
                {arrivalNotes.map((note, index) => (
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
            <MapEmbed />
          </div>
        </div>
      </section>

      <InlineBookingCta {...findUsInlineCtaCopy} />

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...findUsAccessibilitySection} />
          <div className="grid gap-4 md:grid-cols-3">
            {accessibilityNotes.map((note, index) => (
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

      <FaqSection {...findUsFaqSectionCopy} faqs={visitFaqs} />
    </main>
  )
}
