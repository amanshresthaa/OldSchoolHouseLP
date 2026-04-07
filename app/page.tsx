import type { ComponentProps } from "react"
import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { EditorialHighlightsPanel } from "@/components/site/EditorialHighlightsPanel"
import { FaqSection } from "@/components/site/FaqSection"
import { HomeHeroSlideshow } from "@/components/site/HomeHeroSlideshow"
import { HomeMenuHighlightsSection } from "@/components/site/HomeMenuHighlightsSection"
import { HomeProofBarSection } from "@/components/site/HomeProofBarSection"
import { HomeReasonsPanel } from "@/components/site/HomeReasonsPanel"
import { HomeReviewsSection } from "@/components/site/HomeReviewsSection"
import { HomeVisitSection } from "@/components/site/HomeVisitSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
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
} from "@/data/copy"
import {
  bookingHref,
  eventsHighlights,
  guestReviews,
  homeMenuHighlights,
  homeReasons,
  buildLocalBusinessSchema,
  localFaqs,
  organizationSchema,
  reassuranceHighlights,
  sanjogGautamPersonSchema,
  siteUrl,
} from "@/data/site"
import { getRouteConfig, routeConfigs } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { featuredMenuItems } from "@/lib/menu"
import { getSectionBandClass, type SectionBand } from "@/lib/section-bands"
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
    href: bookingHref,
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

const homeSectionBands = {
  story: "warm",
  proof: "plain",
  menu: "paper",
  atmosphere: "warm",
  reviews: "plain",
  events: "paper",
  visit: "warm",
  cta: "dark",
  faq: "paper",
} as const

interface HomepageSectionProps extends ComponentProps<"section"> {
  band?: SectionBand
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
        "group relative block overflow-hidden rounded-[1.5rem] bg-primary text-white md:rounded-2xl",
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
        <h3 className="pt-3 font-heading text-[clamp(1.75rem,1.45rem+1.15vw,2.2rem)] leading-[1.02] text-white">
          {item.title}
        </h3>
        <p className="section-copy max-w-md pt-2 text-white/78">
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

function ImageRouteStackCard({ item }: { item: ImageRouteItem }) {
  return (
    <Link
      href={item.href}
      className="surface-panel media-lift flex min-h-[12.5rem] flex-col justify-between rounded-[1.35rem] border border-[rgba(196,189,181,0.42)] bg-[var(--color-surface-lowest)]/94 py-0 shadow-[0_18px_36px_rgba(31,34,29,0.08)] backdrop-blur-xl md:min-h-[13.5rem] md:rounded-[1.5rem]"
    >
      <div className="px-5 pt-5 md:px-6 md:pt-6">
        <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
          {item.eyebrow}
        </p>
        <h3 className="pt-3 font-heading text-[clamp(1.28rem,1.12rem+0.7vw,1.62rem)] leading-[1.08] tracking-[-0.03em] text-on-background">
          {item.title}
        </h3>
        <p className="section-copy pt-2.5 text-on-surface">
          {item.description}
        </p>
      </div>
      <span className="inline-flex items-center gap-2 px-5 pt-4 pb-5 text-sm font-semibold text-secondary md:px-6 md:pb-6">
        Explore
        <ArrowRight className="size-4" />
      </span>
    </Link>
  )
}

function HomepageSection({
  band = "plain",
  className,
  ...props
}: HomepageSectionProps) {
  return (
    <section
      className={cn(getSectionBandClass(band), "page-section", className)}
      {...props}
    />
  )
}

function LeadMediaStackSection({
  eyebrow,
  title,
  description,
  leadItem,
  supportingItems,
  band = "plain",
}: {
  eyebrow: string
  title: string
  description: string
  leadItem: ImageRouteItem
  supportingItems: readonly ImageRouteItem[]
  band?: SectionBand
}) {
  return (
    <HomepageSection band={band}>
      <div className="section-shell space-y-5">
        <ScrollReveal delayMs={0}>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="max-w-[38rem]"
          />
        </ScrollReveal>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)]">
          <ScrollReveal delayMs={120}>
            <ImageRoutePanel item={leadItem} className="fluid-media-hero" />
          </ScrollReveal>

          <div className="grid content-start gap-4">
            {supportingItems.map((item, index) => (
              <ScrollReveal key={item.title} delayMs={180 + index * 60}>
                <ImageRouteStackCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </HomepageSection>
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

      <HomepageSection band={homeSectionBands.story}>
        <div className="section-shell">
          <div className="grid gap-4 xl:grid-cols-[minmax(0,3fr)_minmax(0,5fr)]">
            <ScrollReveal delayMs={0}>
              <ImageRoutePanel
                item={storyFeature}
                className="fluid-media-hero"
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
      </HomepageSection>

      <HomeProofBarSection
        className={getSectionBandClass(homeSectionBands.proof)}
        items={homeProofBarItems}
        copy={homeProofBarSectionCopy}
      />

      <HomeMenuHighlightsSection
        className={getSectionBandClass(homeSectionBands.menu)}
        copy={homeMenuSectionCopy}
        items={menuShowcase}
        guidanceItems={homeMenuHighlights}
      />

      <LeadMediaStackSection
        band={homeSectionBands.atmosphere}
        eyebrow="Atmosphere"
        title="A pub that feels welcoming before the food even arrives."
        description="One strong first impression up front, then the practical details that help you picture the room, the outdoor spaces, and how the visit will flow."
        leadItem={atmosphereTiles[0]}
        supportingItems={atmosphereTiles.slice(1)}
      />

      <HomeReviewsSection
        className={getSectionBandClass(homeSectionBands.reviews)}
        reviews={guestReviews}
        highlights={reassuranceHighlights}
      />

      <HomepageSection band={homeSectionBands.events}>
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What’s on"
              title="From match days to local team socials, there is more than one reason to come back."
              description="Live sport, theme-led nights, tastings, and informal community occasions all give regulars more than one reason to return."
              className="max-w-[40rem]"
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
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <ScrollReveal delayMs={120}>
              <ImageRoutePanel
                item={eventsFeature}
                className="fluid-media-feature xl:fluid-media-hero"
              />
            </ScrollReveal>
            <ScrollReveal delayMs={180}>
              <EditorialHighlightsPanel items={eventsHighlights} />
            </ScrollReveal>
          </div>
        </div>
      </HomepageSection>

      <HomeVisitSection
        className={getSectionBandClass(homeSectionBands.visit)}
      />

      <InlineBookingCta
        className={getSectionBandClass(homeSectionBands.cta)}
        bookingHref={bookingHref}
        {...homeInlineCtaCopy}
      />

      <FaqSection
        className={getSectionBandClass(homeSectionBands.faq)}
        {...homeFaqSectionCopy}
        faqs={localFaqs}
      />

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
