import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Buildings,
  ForkKnife,
  MapPin,
} from "@phosphor-icons/react/dist/ssr"

import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
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

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...aboutConceptSection} />
          <div className="grid gap-4 lg:grid-cols-3">
            {aboutReasons.map((reason, index) => (
              <article
                key={reason.title}
                className={
                  index === 1 ? "surface-panel-muted" : "surface-panel"
                }
              >
                <h3 className="section-title">{reason.title}</h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <article className="surface-frame">
              <Image
                src={pubExteriorImage}
                alt="Exterior of The Old School House pub on London Road in Stony Stratford."
                className="h-80 w-full object-cover md:h-[28rem]"
                sizes="(min-width: 1280px) 50vw, 100vw"
              />
            </article>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="surface-frame">
                <Image
                  src={indoorSeatingImage}
                  alt="Interior seating area inside The Old School House pub in Stony Stratford."
                  className="h-60 w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </article>
              <article className="surface-frame">
                <Image
                  src={beerOnTapImage}
                  alt="Beer being poured at the bar inside The Old School House pub in Stony Stratford."
                  className="h-60 w-full object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Verified business details"
            title="The public facts behind the pub, set out clearly."
            description="This page is not only the story of the venue. It is also the fact sheet that ties the website to the real-world business behind it."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {organizationFactSheet.map((item, index) => (
              <article
                key={item.label}
                className={
                  index % 2 === 1 ? "surface-panel-muted" : "surface-panel"
                }
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  {item.label}
                </p>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading {...aboutBuildingSection} />
            <div className="grid gap-2 text-sm leading-7 text-on-surface md:text-right md:text-base">
              {aboutStoryNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aboutPubFacts.map((fact, index) => (
              <article
                key={fact.label}
                className={
                  index % 2 === 0 ? "surface-panel" : "surface-panel-muted"
                }
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  {fact.label}
                </p>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {fact.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="surface-panel">
              <div className="flex items-center gap-3">
                <ForkKnife className="size-5 text-secondary" />
                <h3 className="section-title">{aboutOperatorCardTitle}</h3>
              </div>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
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
            </article>
            <article className="surface-panel-muted">
              <div className="flex items-center gap-3">
                <Buildings className="size-5 text-secondary" />
                <h3 className="section-title">{aboutFamilyCardTitle}</h3>
              </div>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
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
            </article>
            <article className="surface-panel">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-secondary" />
                <h3 className="section-title">{aboutHeritageCardTitle}</h3>
              </div>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                {aboutHeritageNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </article>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {aboutLocationHighlights.map((item, index) => (
              <article
                key={item.title}
                className={
                  index === 1 ? "surface-panel-muted" : "surface-panel"
                }
              >
                <h3 className="section-title">{item.title}</h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
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
