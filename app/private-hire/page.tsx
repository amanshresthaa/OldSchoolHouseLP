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
  privateHireEnquiryChecklist,
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

const privateHireLocalIntentCards = [
  {
    title: "A Stony Stratford pub for birthdays and family gatherings",
    description:
      "The Old School House works well when the occasion needs warmth, flexible seating, and a menu that does more than drinks alone.",
  },
  {
    title: "Useful for wakes, work drinks, and sports socials",
    description:
      "The location on London Road, the pub atmosphere, and the food all help when the gathering needs to feel easy to organise.",
  },
  {
    title: "A better fit than a generic function room",
    description:
      "Private hire here still feels rooted in a real pub setting, with open-plan bar space, flexible layouts, and enough capacity to make bigger groups feel straightforward.",
  },
]

export default function PrivateHirePage() {
  return (
    <main>
      <RouteStructuredData route={route!} faqItems={privateHireFaqs} />
      <PageHero {...route!.hero!} route={route!} />

      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading
              eyebrow="Private hire in town"
              title="Looking for private hire in Stony Stratford that still feels like a proper pub?"
              description="For birthdays, gatherings, and group plans that need a welcoming room, flexible food and drinks, and an easy way to get started."
            />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={privateHireLocalIntentCards} />
          </ScrollReveal>
          <ScrollReveal
            delayMs={180}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...privateHireSuitabilitySection} />
            <SiteActionCard
              actions={[
                {
                  href: siteEmailHref,
                  label: "Make an enquiry",
                  icon: <EnvelopeSimple className="size-4" />,
                },
                {
                  href: sitePhoneHref,
                  label: "Call the pub",
                  icon: <Phone className="size-4" />,
                },
              ]}
              supportingText={privateHireActionCardText}
            />
          </ScrollReveal>
          <ScrollReveal delayMs={240}>
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
            className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="surface-frame">
              <div className="surface-pane">
                <div className="max-w-2xl space-y-3">
                  <p className="eyebrow">Make an enquiry</p>
                  <h3 className="font-heading text-[1.5rem] leading-[1.08] tracking-[-0.025em] text-on-background md:text-[1.7rem]">
                    Email the pub team with the basics.
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface">
                    If you already know the rough date, numbers, and shape of
                    the gathering, email the team directly and they can help
                    shape the next step from there.
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
                  Include your preferred date, guest numbers, and whether the
                  setup needs to be seated, standing, or mixed.
                </p>
              </div>
            </div>
            <div className="surface-panel">
              <p className="pb-4 text-sm leading-relaxed text-on-surface">
                A quick note with the basics is enough to get things moving. We
                can help you shape the details after that.
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
                There is room to shape the occasion your way, with 125 total
                covers, a front garden, a private courtyard, and open-plan bar
                space.
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
            label: "Make an enquiry",
            icon: <EnvelopeSimple className="size-4" />,
          },
          {
            href: sitePhoneHref,
            label: "Call the pub",
            icon: <Phone className="size-4" />,
          },
        ]}
      />
    </main>
  )
}
