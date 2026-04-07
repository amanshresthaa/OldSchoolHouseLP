import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Buildings,
  ForkKnife,
  MapPin,
} from "@phosphor-icons/react/dist/ssr"

import { CompactHighlightGrid } from "@/components/site/HomepagePatternPrimitives"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  aboutBuildingSection,
  aboutConceptSection,
  aboutFamilyCardTitle,
  aboutHeritageCardTitle,
  aboutOperatorCardTitle,
  aboutSignoffCopy,
} from "@/data/copy"
import {
  aboutFamilyNotes,
  aboutHeritageNotes,
  aboutLocationHighlights,
  aboutOperatorNotes,
  aboutPubFacts,
  aboutReasons,
  aboutStoryNotes,
  lapenInnsHref,
  organizationFactSheet,
  sanjogGautamId,
  sanjogGautamPagePath,
  siteOrganizationId,
  siteRestaurantId,
  siteEmailHref,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"
import { cn } from "@/lib/utils"

import beerOnTapImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-beer-on-tap.jpeg"
import indoorSeatingImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-indoor-seating-area-2.jpeg"
import pubExteriorImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-pub-building-exterior.jpeg"

const route = getRouteConfig("/about")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function AboutPage() {
  return (
    <main>
      <RouteStructuredData
        route={route!}
        pageType="AboutPage"
        authorId={sanjogGautamId}
        aboutIds={[siteOrganizationId, siteRestaurantId, sanjogGautamId]}
        mainEntityId={siteOrganizationId}
      />
      <PageHero {...route!.hero!} route={route!} />

      <section className={cn("page-section", getSectionBandClass("plain"))}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...aboutConceptSection} />
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={aboutReasons} />
          </ScrollReveal>

          <ScrollReveal delayMs={180}>
            <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
              <article className="surface-frame overflow-hidden">
                <Image
                  src={pubExteriorImage}
                  alt="Exterior of The Old School House pub on London Road in Stony Stratford."
                  className="h-80 w-full object-cover md:h-[28rem]"
                  sizes="(min-width: 1280px) 50vw, 100vw"
                />
              </article>
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="surface-frame overflow-hidden">
                  <Image
                    src={indoorSeatingImage}
                    alt="Interior seating area inside The Old School House pub in Stony Stratford."
                    className="h-60 w-full object-cover xl:h-full"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </article>
                <article className="surface-frame overflow-hidden">
                  <Image
                    src={beerOnTapImage}
                    alt="Beer being poured at the bar inside The Old School House pub in Stony Stratford."
                    className="h-60 w-full object-cover xl:h-full"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </article>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={cn("page-section", getSectionBandClass("paper"))}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading
              eyebrow="Verified business details"
              title="The public facts behind the pub, set out clearly."
              description="This page is not only the story of the venue. It is also the fact sheet that ties the website to the real-world business behind it."
            />
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {organizationFactSheet.map((item) => (
                <article
                  key={item.label}
                  className="surface-panel-muted flex flex-col justify-center rounded-2xl px-5 py-4 shadow-none"
                >
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    {item.label}
                  </p>
                  <p className="pt-2.5 text-sm leading-relaxed text-on-surface">
                    {item.value}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={cn("page-section", getSectionBandClass("warm"))}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...aboutBuildingSection} />
            <div className="grid max-w-lg gap-2 text-sm leading-7 text-on-surface lg:text-right">
              {aboutStoryNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {aboutPubFacts.map((fact) => (
                <article
                  key={fact.label}
                  className="surface-panel-muted flex flex-col justify-center rounded-2xl px-5 py-4 shadow-none"
                >
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    {fact.label}
                  </p>
                  <p className="pt-2.5 text-[0.95rem] leading-[1.18] font-medium tracking-[-0.01em] text-on-background">
                    {fact.value}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={cn("page-section", getSectionBandClass("plain"))}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <div className="grid gap-3 lg:grid-cols-3">
              <Card
                size="sm"
                className="surface-panel-muted gap-2 rounded-2xl border-0 py-0 shadow-none"
              >
                <CardHeader className="gap-2 px-5 pt-5 pb-0">
                  <div className="flex items-center gap-3">
                    <ForkKnife className="size-5 text-secondary" />
                    <CardTitle className="font-sans text-[0.95rem] leading-[1.18] font-semibold tracking-[-0.01em] text-on-background">
                      {aboutOperatorCardTitle}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <div className="space-y-3 text-[0.84rem] leading-relaxed text-on-surface">
                    {aboutOperatorNotes.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                    <Link
                      href={sanjogGautamPagePath}
                      className="inline-flex items-center gap-2 font-semibold text-secondary transition hover:text-secondary/80"
                    >
                      Read San&apos;s full operator profile
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card
                size="sm"
                className="surface-panel-muted gap-2 rounded-2xl border-0 py-0 shadow-none"
              >
                <CardHeader className="gap-2 px-5 pt-5 pb-0">
                  <div className="flex items-center gap-3">
                    <Buildings className="size-5 text-secondary" />
                    <CardTitle className="font-sans text-[0.95rem] leading-[1.18] font-semibold tracking-[-0.01em] text-on-background">
                      {aboutFamilyCardTitle}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <div className="space-y-3 text-[0.84rem] leading-relaxed text-on-surface">
                    {aboutFamilyNotes.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                    <p>
                      Find the wider group at{" "}
                      <a
                        href={lapenInnsHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-secondary transition hover:text-secondary/80"
                      >
                        lapeninns.com
                      </a>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                size="sm"
                className="surface-panel-muted gap-2 rounded-2xl border-0 py-0 shadow-none"
              >
                <CardHeader className="gap-2 px-5 pt-5 pb-0">
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5 text-secondary" />
                    <CardTitle className="font-sans text-[0.95rem] leading-[1.18] font-semibold tracking-[-0.01em] text-on-background">
                      {aboutHeritageCardTitle}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <div className="space-y-3 text-[0.84rem] leading-relaxed text-on-surface">
                    {aboutHeritageNotes.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <CompactHighlightGrid items={aboutLocationHighlights} />
          </ScrollReveal>
        </div>
      </section>

      <PageSignoff
        eyebrow={aboutSignoffCopy.eyebrow}
        title={aboutSignoffCopy.title}
        description={aboutSignoffCopy.description}
        body={<p>{aboutSignoffCopy.body}</p>}
        actions={[
          {
            href: "/menu",
            label: "View the menu",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/nepalese-kitchen",
            label: "Explore the kitchen",
          },
        ]}
        details={
          <div className="grid gap-2 text-sm leading-7">
            <Link
              href="/private-hire"
              className="text-white/72 transition hover:text-white"
            >
              {aboutSignoffCopy.planningLink}
            </Link>
            <a
              href={siteEmailHref}
              className="text-white/72 transition hover:text-white"
            >
              {aboutSignoffCopy.contactLink}
            </a>
          </div>
        }
      />
    </main>
  )
}
