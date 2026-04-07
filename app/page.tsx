import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { GuestReviewSlideshow } from "@/components/site/GuestReviewSlideshow"
import { HomeHeroSlideshow } from "@/components/site/HomeHeroSlideshow"
import { HomeMenuHighlightsSection } from "@/components/site/HomeMenuHighlightsSection"
import { HomeProofBarSection } from "@/components/site/HomeProofBarSection"
import { HomeReasonsPanel } from "@/components/site/HomeReasonsPanel"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  homeAtmosphereTiles,
  homeEventsFeature,
  homeFaqSectionCopy,
  homeInlineCtaCopy,
  homeMenuSectionCopy,
  homeMenuShowcase,
  homeProofBarItems,
  homeProofBarSectionCopy,
  homeReasonsSectionCopy,
  homeStoryFeature,
  homeVisitSectionCopy,
} from "@/data/copy"
import {
  arrivalNotes,
  directionsHref,
  eventsHighlights,
  guestReviews,
  homeMenuHighlights,
  homeReasons,
  buildLocalBusinessSchema,
  localFaqs,
  organizationSchema,
  reassuranceHighlights,
  sanjogGautamPersonSchema,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
  siteUrl,
  visitDetails,
} from "@/data/site"
import { getRouteConfig, routeConfigs } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { featuredMenuItems } from "@/lib/menu"
import { cn } from "@/lib/utils"

import mixedGrillImage from "@/images/food/mixed-grill.png"
import momoImage from "@/images/food/chicken-momo-and-veg-momo.png"
import roastImage from "@/images/food/fish-and-chips-with-salad.png"
import beerOnTapImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-beer-on-tap.jpeg"
import indoorSeatingOneImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-indoor-seating-area-1.jpeg"
import indoorSeatingTwoImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-indoor-seating-area-2.jpeg"
import sportsTvImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-sports-tv-big-screen.jpeg"
import pubExteriorImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-pub-building-exterior.jpeg"

const route = getRouteConfig("/")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const menuShowcase = [
  {
    ...homeMenuShowcase[0],
    href: "/menu",
    ctaLabel: "Browse the menu",
    image: momoImage,
    item: featuredMenuItems[0],
  },
  {
    ...homeMenuShowcase[1],
    href: "/menu",
    ctaLabel: "See menu highlights",
    image: mixedGrillImage,
    item: featuredMenuItems[1],
  },
  {
    ...homeMenuShowcase[2],
    href: "/book",
    ctaLabel: "Book a table",
    image: roastImage,
    item: featuredMenuItems[3],
  },
]

const storyFeature: ImageRouteItem = {
  href: "/menu",
  ...homeStoryFeature,
  image: beerOnTapImage,
}

interface ImageRouteItem {
  href: string
  eyebrow: string
  title: string
  description: string
  image: StaticImageData
  alt: string
}

interface CompactHighlightItem {
  title: string
  description: string
}

const atmosphereTiles: ImageRouteItem[] = homeAtmosphereTiles.map((tile) => ({
  ...tile,
  image:
    tile.href === "/about"
      ? indoorSeatingTwoImage
      : tile.href === "/beer-garden-stony-stratford"
        ? pubExteriorImage
        : indoorSeatingOneImage,
}))

const eventsFeature: ImageRouteItem = {
  ...homeEventsFeature,
  image: sportsTvImage,
}

function ImageRoutePanel({
  item,
  className,
}: {
  item: ImageRouteItem
  className?: string
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative block overflow-hidden rounded-2xl bg-primary text-white",
        className
      )}
    >
      <Image
        src={item.image}
        width={item.image.width}
        height={item.image.height}
        alt={item.alt}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
        sizes="(min-width: 1280px) 40vw, 100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,11,0.14)_0%,rgba(7,17,11,0.52)_45%,rgba(7,17,11,0.9)_100%)]" />
      <div className="relative flex h-full flex-col justify-end p-5 md:p-6">
        <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)] uppercase">
          {item.eyebrow}
        </p>
        <h3 className="pt-3 font-heading text-[1.9rem] leading-[1.02] text-white md:text-[2.15rem]">
          {item.title}
        </h3>
        <p className="max-w-md pt-2 text-sm leading-6 text-white/78 md:text-base">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
          Explore
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  )
}

function EditorialHighlightsPanel({
  items,
  eyebrow,
}: {
  items: readonly CompactHighlightItem[]
  eyebrow: string
}) {
  return (
    <div className="surface-frame overflow-hidden">
      <div className="grid gap-px bg-[rgba(196,189,181,0.2)]">
        {items.map((item, index) => (
          <article
            key={item.title}
            className={cn(
              "grid gap-4 px-5 py-5 md:px-6 md:py-6",
              index % 2 === 0
                ? "bg-[var(--color-surface-lowest)]"
                : "bg-[color-mix(in_srgb,var(--color-surface-low)_82%,white_18%)]"
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                {eyebrow}
              </p>
              <span className="font-heading text-[2.8rem] leading-none tracking-[-0.08em] text-primary/12">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="grid gap-3 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
              <h3 className="section-title">{item.title}</h3>
              <p className="text-sm leading-7 text-on-surface md:text-base">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const homeEntityGraph = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      sanjogGautamPersonSchema,
      buildLocalBusinessSchema(`${siteUrl}/`),
    ],
  }

  return (
    <main>
      <RouteStructuredData route={route!} faqItems={localFaqs} />
      <Script
        id="old-school-house-home-entities"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeEntityGraph),
        }}
      />

      <HomeHeroSlideshow />

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell">
          <div className="grid gap-4 xl:grid-cols-[minmax(0,3fr)_minmax(0,5fr)]">
            <ScrollReveal delayMs={0}>
              <ImageRoutePanel
                item={storyFeature}
                className="min-h-[26rem] xl:min-h-[34rem]"
              />
            </ScrollReveal>
            <ScrollReveal delayMs={120} className="surface-frame">
              <HomeReasonsPanel
                copy={homeReasonsSectionCopy}
                reasons={homeReasons}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <HomeProofBarSection
        items={homeProofBarItems}
        copy={homeProofBarSectionCopy}
      />

      <HomeMenuHighlightsSection
        copy={homeMenuSectionCopy}
        items={menuShowcase}
        guidanceItems={homeMenuHighlights}
      />

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Atmosphere"
            title="A pub that feels welcoming before the food even arrives."
            description="A quick sense of the room, the outdoor spaces, and the relaxed pub atmosphere guests arrive into."
          />
          <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
            <ImageRoutePanel
              item={atmosphereTiles[0]}
              className="min-h-[24rem] xl:min-h-[30rem]"
            />
            <div className="grid gap-4">
              <ImageRoutePanel
                item={atmosphereTiles[1]}
                className="min-h-[15rem]"
              />
              <ImageRoutePanel
                item={atmosphereTiles[2]}
                className="min-h-[15rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Reviews"
              title="The pub works for more than one kind of visit."
              description="From easy daytime visits to family meals and match nights, The Old School House suits more than one kind of plan."
              className="max-w-none"
            />
            <div className="shrink-0">
              <SiteActionCard
                actions={[
                  {
                    href: "/about",
                    label: "About the pub",
                    icon: <ArrowRight className="size-4" />,
                  },
                  { href: "/book", label: "Book a table" },
                ]}
                supportingText="A quick feel for the atmosphere, the guest mix, and why people come back."
              />
            </div>
          </div>
          <div className="grid gap-4 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
            <GuestReviewSlideshow
              reviews={guestReviews}
              className="max-w-none"
            />
            <div className="surface-frame overflow-hidden">
              <div className="grid gap-px bg-[rgba(196,189,181,0.2)] md:grid-cols-3 xl:grid-cols-1">
                {reassuranceHighlights.map((highlight, index) => (
                  <article
                    key={highlight.title}
                    className={cn(
                      "px-5 py-5 md:px-6 md:py-6",
                      index === 1
                        ? "bg-[color-mix(in_srgb,var(--color-surface-low)_82%,white_18%)]"
                        : "bg-[var(--color-surface-lowest)]"
                    )}
                  >
                    <h3 className="section-title">{highlight.title}</h3>
                    <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                      {highlight.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="night-panel">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)] uppercase">
                  What this means in practice
                </p>
                <p className="pt-3 text-sm leading-7 text-white/78 md:text-base">
                  Come in for a proper pub atmosphere, then stay for a menu,
                  welcome, and sense of occasion that give the visit a little
                  more character than the average local stop.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="cta-secondary-dark inline-flex h-12 items-center justify-center px-6 text-sm font-semibold"
                >
                  About the pub
                </Link>
                <Link
                  href="/private-hire"
                  className="cta-primary inline-flex h-12 items-center justify-center gap-2.5 px-6 text-sm font-semibold"
                >
                  Plan a bigger visit
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What’s on"
              title="From match days to local team socials, there is more than one reason to come back."
              description="Live sport, theme-led nights, tastings, and informal community occasions all give regulars more than one reason to return."
            />
            <div className="shrink-0">
              <SiteActionCard
                actions={[
                  {
                    href: "/events",
                    label: "See what’s on",
                    icon: <ArrowRight className="size-4" />,
                  },
                  { href: "/private-hire", label: "Private hire" },
                ]}
              />
            </div>
          </div>
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <ImageRoutePanel
              item={eventsFeature}
              className="min-h-[24rem] xl:min-h-[30rem]"
            />
            <EditorialHighlightsPanel
              items={eventsHighlights}
              eyebrow="Return reasons"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="grid gap-4">
              <Card className="surface-panel gap-0 py-0">
                <CardContent className="px-5 py-5 md:px-6 md:py-6">
                  <SectionHeading
                    {...homeVisitSectionCopy}
                    className="max-w-none"
                  />
                  <div className="grid gap-3 pt-5 sm:grid-cols-2">
                    <Button asChild size="lg">
                      <a href={directionsHref} target="_blank" rel="noreferrer">
                        <span>Get directions</span>
                        <MapPin data-icon="inline-end" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <a href={sitePhoneHref}>Call {sitePhone}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <MapEmbed compact />
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {visitDetails.map((detail, index) => (
                  <Card
                    key={detail.label}
                    className={
                      index % 2 === 0
                        ? "surface-panel gap-0 py-0"
                        : "surface-panel-muted gap-0 py-0"
                    }
                  >
                    <CardContent className="px-5 py-5 md:px-6 md:py-6">
                      <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                        {detail.label}
                      </p>
                      {detail.label === "Phone" ? (
                        <a
                          href={sitePhoneHref}
                          className="block pt-2 text-sm leading-6 text-on-surface transition hover:text-secondary md:text-base"
                        >
                          {detail.value}
                        </a>
                      ) : detail.label === "Email" ? (
                        <a
                          href={siteEmailHref}
                          className="block pt-2 text-sm leading-6 text-on-surface transition hover:text-secondary md:text-base"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="pt-2 text-sm leading-6 text-on-surface md:text-base">
                          {detail.value}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="surface-panel-muted gap-0 py-0">
                <CardContent className="px-5 py-5 md:px-6 md:py-6">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-xl">
                      <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                        Arrival notes
                      </p>
                      <div className="space-y-3 pt-4">
                        {arrivalNotes.map((note) => (
                          <p
                            key={note}
                            className="text-sm leading-6 text-on-surface md:text-base"
                          >
                            {note}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-start gap-3">
                      <Link
                        href="/find-us"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                      >
                        See full visit guide
                        <ArrowRight className="size-4" />
                      </Link>
                      <Link
                        href="/events"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                      >
                        See events and private hire
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta {...homeInlineCtaCopy} />

      <FaqSection {...homeFaqSectionCopy} faqs={localFaqs} />

      <Script
        id="old-school-house-routes"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": routeConfigs
              .filter((route) => route.primaryNav && route.published)
              .map((route) => ({
                "@type": "SiteNavigationElement",
                name: route.label,
                url: `https://oldschoolhousestony.co.uk${route.href}`,
              })),
          }),
        }}
      />
    </main>
  )
}
