import type { Metadata } from "next"
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { CompactHighlightGrid } from "@/components/site/HomepagePatternPrimitives"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  privateHireActionCardText,
  privateHireActionLabels,
  privateHireEnquiryChecklist,
  privateHireEnquiryCardCopy,
  privateHireEnquirySection,
  privateHireFaqSectionCopy,
  privateHireFaqs,
  privateHireInlineCtaCopy,
  privateHirePracticalCards,
  privateHirePracticalSection,
  privateHireSignoffCopy,
  privateHireSuitabilityCards,
  privateHireSuitabilitySection,
} from "@/data/copy"
import { siteEmailHref, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/private-hire")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function PrivateHirePage() {
  return (
    <main>
      <RouteStructuredData route={route!} faqItems={privateHireFaqs} />
      <PageHero {...route!.hero!} route={route!} />

      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...privateHireSuitabilitySection} />
            <SiteActionCard
              actions={[
                {
                  href: siteEmailHref,
                  label: privateHireActionLabels.enquiry,
                  icon: <EnvelopeSimple className="size-4" />,
                },
                {
                  href: sitePhoneHref,
                  label: privateHireActionLabels.call,
                  icon: <Phone className="size-4" />,
                },
              ]}
              supportingText={privateHireActionCardText}
            />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={privateHireSuitabilityCards} />
          </ScrollReveal>
        </div>
      </section>

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...privateHirePracticalSection} />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={privateHirePracticalCards} />
          </ScrollReveal>
        </div>
      </section>

      <InlineBookingCta
        className={getSectionBandClass("dark")}
        {...privateHireInlineCtaCopy}
      />

      <section className={getSectionBandClass("warm", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...privateHireEnquirySection} />
          </ScrollReveal>
          <ScrollReveal
            delayMs={120}
            className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="surface-frame">
              <div className="surface-pane">
                <div className="max-w-2xl space-y-3">
                  <p className="eyebrow">
                    {privateHireEnquiryCardCopy.eyebrow}
                  </p>
                  <h3 className="font-heading text-[1.5rem] leading-[1.08] tracking-[-0.025em] text-on-background md:text-[1.7rem]">
                    {privateHireEnquiryCardCopy.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface">
                    {privateHireEnquiryCardCopy.description}
                  </p>
                </div>
                <div className="flex flex-col gap-3 pt-6 sm:flex-row">
                  <a
                    href={siteEmailHref}
                    className="cta-primary inline-flex h-12 items-center justify-center gap-2.5 px-6 text-sm font-semibold"
                  >
                    {privateHireEnquiryCardCopy.primaryActionLabel}
                    <EnvelopeSimple className="size-4" />
                  </a>
                  <a
                    href={sitePhoneHref}
                    className="cta-secondary inline-flex h-12 items-center justify-center px-6"
                  >
                    {privateHireEnquiryCardCopy.secondaryActionLabel}
                  </a>
                </div>
                <p className="pt-4 text-sm leading-relaxed text-on-surface/72">
                  {privateHireEnquiryCardCopy.footer}
                </p>
              </div>
            </div>
            <div className="surface-panel">
              <p className="pb-4 text-sm leading-relaxed text-on-surface">
                {privateHireEnquiryCardCopy.checklistIntro}
              </p>
              <ol className="space-y-3 text-sm leading-relaxed text-on-surface">
                {privateHireEnquiryChecklist.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <div className="surface-panel-muted mt-5 px-4 py-4 text-sm leading-relaxed text-on-surface">
                {privateHireEnquiryCardCopy.checklistSummary}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        className={getSectionBandClass("paper")}
        {...privateHireFaqSectionCopy}
        faqs={privateHireFaqs}
      />

      <PageSignoff
        eyebrow={privateHireSignoffCopy.eyebrow}
        title={privateHireSignoffCopy.title}
        body={<p>{privateHireSignoffCopy.body}</p>}
        actions={[
          {
            href: siteEmailHref,
            label: privateHireSignoffCopy.primaryActionLabel,
            icon: <EnvelopeSimple className="size-4" />,
          },
          {
            href: sitePhoneHref,
            label: privateHireSignoffCopy.secondaryActionLabel,
            icon: <Phone className="size-4" />,
          },
        ]}
      />
    </main>
  )
}
