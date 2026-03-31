import type { Metadata } from "next"
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
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

const route = getRouteConfig("/private-hire")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function PrivateHirePage() {
  return (
    <main>
      <PageHero {...route!.hero!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
              showDivider
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {privateHireSuitabilityCards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index === 1
                    ? "surface-pane-muted"
                    : "bg-[var(--color-surface-lowest)]"
                }`}
              >
                <h2 className="section-title">{card.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...privateHirePracticalSection} />
          <div className="grid gap-4 lg:grid-cols-3">
            {privateHirePracticalCards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index === 1
                    ? "surface-pane-muted"
                    : "bg-[var(--color-surface-lowest)]"
                }`}
              >
                <h2 className="section-title">{card.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InlineBookingCta {...privateHireInlineCtaCopy} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...privateHireEnquirySection} />
          <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6">
            <p className="pb-4 text-sm leading-7 text-on-surface md:text-base">
              A quick note with the basics is enough to get things moving. We
              can help you shape the details after that.
            </p>
            <ol className="space-y-3 text-sm leading-7 text-on-surface md:text-base">
              {privateHireEnquiryChecklist.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FaqSection {...privateHireFaqSectionCopy} faqs={privateHireFaqs} />

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
