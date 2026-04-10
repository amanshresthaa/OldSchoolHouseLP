import type { Metadata } from "next"

import { AlternatingSectionGrid } from "@/components/site/AlternatingSectionGrid"
import { PageSignoff } from "@/components/site/PageSignoff"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"

import {
  termsHeroCopy,
  termsSections,
  termsShortVersionSectionCopy,
  termsSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { siteEmailHref, sitePhoneHref } from "@/data/site"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/tos")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function TermsOfServicePage() {
  return (
    <main>
      <RouteStructuredData route={route!} />
      <PageHero
        route={route!}
        eyebrow={termsHeroCopy.eyebrow}
        title={termsHeroCopy.title}
        description={termsHeroCopy.description}
        primaryAction={{
          href: sitePhoneHref,
          label: termsHeroCopy.primaryActionLabel,
        }}
        secondaryAction={{
          href: siteEmailHref,
          label: termsHeroCopy.secondaryActionLabel,
        }}
      />

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...termsShortVersionSectionCopy} />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <p className="text-sm leading-relaxed text-on-surface md:text-base">
              {termsShortVersionSectionCopy.body}
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={180}>
            <AlternatingSectionGrid sections={termsSections} />
          </ScrollReveal>
        </div>
      </section>

      <PageSignoff
        eyebrow={termsSignoffCopy.eyebrow}
        title={termsSignoffCopy.title}
        description={termsSignoffCopy.description}
        body={<p>{termsSignoffCopy.body}</p>}
        actions={[
          {
            href: sitePhoneHref,
            label: termsSignoffCopy.primaryActionLabel,
          },
          {
            href: siteEmailHref,
            label: termsSignoffCopy.secondaryActionLabel,
          },
        ]}
      />
    </main>
  )
}
