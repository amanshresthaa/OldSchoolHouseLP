import type { Metadata } from "next"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { GuestReviewSlideshow } from "@/components/site/GuestReviewSlideshow"
import { HomeHeroSlideshow } from "@/components/site/HomeHeroSlideshow"
import { HomeProofBarSection } from "@/components/site/HomeProofBarSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  homeAtmosphereTiles,
  homeEventsFeature,
  homeFaqSectionCopy,
  homeInlineCtaCopy,
  homeMenuShowcase,
  homeProofBarItems,
  homeProofBarSectionCopy,
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
import { featuredMenuItems, formatPrice } from "@/lib/menu"
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

      <HomeProofBarSection
        items={homeProofBarItems}
        copy={homeProofBarSectionCopy}
      />

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell">
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <ImageRoutePanel
              item={storyFeature}
              className="min-h-[26rem] xl:min-h-[34rem]"
            />
            <div className="surface-frame">
              <div className="surface-pane space-y-5 md:px-7 md:py-7">
                <SectionHeading
                  eyebrow="Why choose us"
                  title="A proper pub atmosphere first, then food that gives the table a reason to come back."
                  description="The room feels familiar from the first drink, while the food gives the visit more identity than the average pub stop."
                  className="max-w-none"
                />
                <div className="space-y-4">
                  {homeReasons.map((reason) => (
                    <article key={reason.title} className="space-y-2">
                      <h3 className="font-heading text-[1.5rem] leading-tight text-on-background">
                        {reason.title}
                      </h3>
                      <p className="max-w-xl text-sm leading-6 text-on-surface md:text-base">
                        {reason.description}
                      </p>
                    </article>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    Browse the menu
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    Book a table
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="grid gap-4 xl:grid-cols-[1.04fr_0.96fr]">
            <article className="surface-frame">
              <Image
                src={menuShowcase[0].image}
                alt={menuShowcase[0].alt}
                className="h-72 w-full object-cover md:h-[26rem]"
                sizes="(min-width: 1280px) 50vw, 100vw"
              />
              <div className="surface-pane space-y-4 md:px-7 md:py-7">
                <SectionHeading
                  eyebrow="Menu highlights"
                  title="Pub comfort and Nepalese dishes should both feel easy to order."
                  description="Start with the signatures, then use the full menu to build the table around the kind of visit you want."
                  className="max-w-none"
                />
                <div className="space-y-3">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    {formatPrice(menuShowcase[0].item.price)}
                  </p>
                  <h3 className="pt-3 font-heading text-[2rem] leading-[1.02] text-on-background md:text-[2.4rem]">
                    {menuShowcase[0].title}
                  </h3>
                  <p className="max-w-xl pt-2 text-sm leading-6 text-on-surface md:text-base">
                    {menuShowcase[0].description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    Browse the menu
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    Book a table
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {menuShowcase.slice(1).map((item) => (
                  <article key={item.title} className="surface-frame">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="h-52 w-full object-cover"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <div className="surface-pane">
                      <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                        {formatPrice(item.item.price)}
                      </p>
                      <h3 className="section-title pt-3">{item.title}</h3>
                      <p className="pt-2 text-sm leading-6 text-on-surface md:text-base">
                        {item.description}
                      </p>
                      <Link
                        href={item.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                      >
                        {item.ctaLabel}
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              <div className="surface-panel-muted">
                <div className="grid auto-cols-[84%] grid-flow-col gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                  {homeMenuHighlights.map((highlight) => (
                    <article
                      key={highlight.title}
                      className="snap-start space-y-2"
                    >
                      <h3 className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                        {highlight.title}
                      </h3>
                      <p className="pt-2 text-sm leading-6 text-on-surface">
                        {highlight.description}
                      </p>
                    </article>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 pt-5">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    See full menu
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    Book a table
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              {eventsHighlights.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className={
                    index === 1 ? "surface-panel-muted" : "surface-panel"
                  }
                >
                  <h3 className="section-title">{highlight.title}</h3>
                  <p className="pt-2 text-sm leading-6 text-on-surface md:text-base">
                    {highlight.description}
                  </p>
                </article>
              ))}
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
            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              {reassuranceHighlights.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className={
                    index === 1 ? "surface-panel-muted" : "surface-panel"
                  }
                >
                  <h3 className="section-title">{highlight.title}</h3>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    {highlight.description}
                  </p>
                </article>
              ))}
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
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="grid gap-4">
              <div className="surface-panel">
                <SectionHeading
                  {...homeVisitSectionCopy}
                  className="max-w-none"
                />
                <div className="grid gap-3 pt-5 sm:grid-cols-2">
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-primary inline-flex h-12 items-center justify-center gap-2.5 px-6 text-sm font-semibold"
                  >
                    Get directions
                    <MapPin className="size-4" />
                  </a>
                  <a
                    href={sitePhoneHref}
                    className="cta-secondary inline-flex h-12 items-center justify-center px-6"
                  >
                    Call {sitePhone}
                  </a>
                </div>
              </div>

              <MapEmbed compact />
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {visitDetails.map((detail, index) => (
                  <div
                    key={detail.label}
                    className={
                      index % 2 === 0 ? "surface-panel" : "surface-panel-muted"
                    }
                  >
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
                  </div>
                ))}
              </div>

              <div className="surface-panel-muted">
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
              </div>
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
