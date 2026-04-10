import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, Buildings } from "@phosphor-icons/react/dist/ssr"

import { CompactHighlightGrid } from "@/components/site/HomepagePatternPrimitives"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import {
  sanjogGautamExperienceSectionCopy,
  sanjogGautamExpertiseTitle,
  sanjogGautamFactSheetTitlePrefix,
  sanjogGautamInlineCtaCopy,
  sanjogGautamOverviewSectionCopy,
  sanjogGautamSignoffCopy,
} from "@/data/copy"
import {
  organizationFactSheet,
  sanjogGautamExperienceNotes,
  sanjogGautamExpertiseAreas,
  sanjogGautamHighlights,
  sanjogGautamId,
  sanjogGautamPersonSchema,
  siteLegalName,
  siteOrganizationId,
  sitePhoneHref,
  siteRestaurantId,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/about/sanjog-gautam")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function SanjogGautamPage() {
  return (
    <main>
      <RouteStructuredData
        route={route!}
        pageType="ProfilePage"
        authorId={sanjogGautamId}
        aboutIds={[siteOrganizationId, siteRestaurantId, sanjogGautamId]}
        mainEntityId={sanjogGautamId}
      />
      <Script
        id="sanjog-gautam-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sanjogGautamPersonSchema),
        }}
      />
      <PageHero {...route!.hero!} route={route!} />

      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...sanjogGautamExperienceSectionCopy} />
          </ScrollReveal>
          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={sanjogGautamHighlights} />
          </ScrollReveal>
        </div>
      </section>

      <InlineBookingCta
        className={getSectionBandClass("dark")}
        {...sanjogGautamInlineCtaCopy}
      />

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="surface-panel space-y-4">
            <SectionHeading
              {...sanjogGautamOverviewSectionCopy}
              className="max-w-none"
            />
            <div className="space-y-3 text-sm leading-relaxed text-on-surface">
              {sanjogGautamExperienceNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            <article className="surface-panel-muted">
              <div className="flex items-center gap-3">
                <Buildings className="size-5 text-secondary" />
                <h2 className="font-heading text-[1.32rem] leading-[1.1] tracking-[-0.02em] text-on-background">
                  {sanjogGautamFactSheetTitlePrefix} {siteLegalName}
                </h2>
              </div>
              <div className="grid gap-3 pt-4 text-sm leading-relaxed text-on-surface">
                {organizationFactSheet.slice(0, 4).map((item) => (
                  <div key={item.label}>
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      {item.label}
                    </p>
                    <p className="pt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-panel">
              <h2 className="font-heading text-[1.32rem] leading-[1.1] tracking-[-0.02em] text-on-background">
                {sanjogGautamExpertiseTitle}
              </h2>
              <ul className="grid gap-3 pt-4 text-sm leading-relaxed text-on-surface">
                {sanjogGautamExpertiseAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <PageSignoff
        eyebrow={sanjogGautamSignoffCopy.eyebrow}
        title={sanjogGautamSignoffCopy.title}
        description={sanjogGautamSignoffCopy.description}
        body={<p>{sanjogGautamSignoffCopy.body}</p>}
        actions={[
          {
            href: "/about",
            label: sanjogGautamSignoffCopy.primaryActionLabel,
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: sitePhoneHref,
            label: sanjogGautamSignoffCopy.secondaryActionLabel,
          },
        ]}
        details={
          <div className="grid gap-2 text-sm leading-relaxed">
            <Link
              href="/menu"
              className="text-white/72 transition hover:text-white"
            >
              {sanjogGautamSignoffCopy.menuLinkLabel}
            </Link>
            <Link
              href="/book"
              className="text-white/72 transition hover:text-white"
            >
              {sanjogGautamSignoffCopy.bookingLinkLabel}
            </Link>
          </div>
        }
      />
    </main>
  )
}
