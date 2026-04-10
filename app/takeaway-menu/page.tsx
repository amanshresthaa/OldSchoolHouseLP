import type { Metadata } from "next"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import {
  CompactHighlightGrid,
  NumberedStepFlow,
} from "@/components/site/HomepagePatternPrimitives"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  takeawayCards,
  takeawayComparisonCards,
  takeawayHeroCopy,
  takeawayInlineCtaCopy,
  takeawayOrderSectionCopy,
  takeawaySteps,
} from "@/data/copy"
import { siteMenuPdfHref, sitePhone, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/takeaway-menu")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const takeawayStepItems = takeawaySteps.map((step, index) => ({
  title: `Step ${index + 1}`,
  description: step,
}))

export default function TakeawayMenuPage() {
  return (
    <main>
      <RouteStructuredData route={route!} />
      <PageHero
        route={route!}
        eyebrow={takeawayHeroCopy.eyebrow}
        title={takeawayHeroCopy.title}
        description={takeawayHeroCopy.description}
        primaryAction={{
          href: siteMenuPdfHref,
          label: takeawayHeroCopy.primaryActionLabel,
          download: true,
        }}
        secondaryAction={{
          href: sitePhoneHref,
          label: takeawayHeroCopy.secondaryActionLabel,
        }}
      />

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...takeawayOrderSectionCopy} />
            <div className="shrink-0">
              <SiteActionCard
                actions={[
                  {
                    href: siteMenuPdfHref,
                    label: takeawayOrderSectionCopy.pdfLabel,
                    download: true,
                    icon: <DownloadSimple className="size-4" />,
                  },
                  {
                    href: sitePhoneHref,
                    label: `Call ${sitePhone}`,
                    icon: <Phone className="size-4" />,
                  },
                  {
                    href: "/menu",
                    label: takeawayOrderSectionCopy.liveMenuLabel,
                  },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <NumberedStepFlow
              items={takeawayStepItems}
              label={takeawayOrderSectionCopy.collectionStepsLabel}
            />
          </ScrollReveal>

          <ScrollReveal delayMs={180}>
            <CompactHighlightGrid items={takeawayCards} />
          </ScrollReveal>

          <ScrollReveal
            delayMs={240}
            className="grid gap-px overflow-hidden rounded-2xl bg-[rgba(196,189,181,0.22)] md:grid-cols-2"
          >
            <div className="bg-[var(--color-surface-lowest)] px-5 py-5 md:px-6 md:py-6">
              <h3 className="font-heading text-[1.32rem] leading-[1.1] tracking-[-0.02em] text-on-background">
                {takeawayComparisonCards[0].title}
              </h3>
              <p className="pt-3 text-sm leading-relaxed text-on-surface">
                {takeawayComparisonCards[0].description}
              </p>
            </div>
            <div className="surface-pane-muted px-5 py-5 md:px-6 md:py-6">
              <h3 className="font-heading text-[1.32rem] leading-[1.1] tracking-[-0.02em] text-on-background">
                {takeawayComparisonCards[1].title}
              </h3>
              <p className="pt-3 text-sm leading-relaxed text-on-surface">
                {takeawayComparisonCards[1].description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <InlineBookingCta
        className={getSectionBandClass("dark")}
        {...takeawayInlineCtaCopy}
      />
    </main>
  )
}
