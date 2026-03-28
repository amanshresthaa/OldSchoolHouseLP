import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRight,
  CalendarDots,
  ForkKnife,
  MapPin,
  Television,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { GuestReviewSlideshow } from "@/components/site/GuestReviewSlideshow"
import { HomeHeroSlideshow } from "@/components/site/HomeHeroSlideshow"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  homeAtmosphereTiles,
  homeDiscoveryLinks,
  homeEventsFeature,
  homeExploreLinks,
  homeFaqSectionCopy,
  homeGuideFeature,
  homeGuidesSectionCopy,
  homeInlineCtaCopy,
  homeMenuShowcase,
  homePrimaryVisitPanels,
  homeProofBarItems,
  homeSecondaryVisitHeading,
  homeStoryFeature,
  homeVisitSectionCopy,
} from "@/data/copy"
import {
  arrivalNotes,
  directionsHref,
  eventsHighlights,
  googleReviewHref,
  googleReviewsPageHref,
  guestReviews,
  homeMenuHighlights,
  homeReasons,
  localBusinessSchema,
  localFaqs,
  reassuranceHighlights,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
  visitDetails,
} from "@/data/site"
import { routeConfigs } from "@/data/site-routes"
import { featuredMenuItems, formatPrice } from "@/lib/menu"
import { cn } from "@/lib/utils"

import mixedGrillImage from "@/images/food/mixed-grill.png"
import momoImage from "@/images/food/chicken-momo-and-veg-momo.png"
import roastImage from "@/images/food/fish-and-chips-with-salad.png"

export const metadata: Metadata = {
  title: "Traditional Pub in Stony Stratford",
  description:
    "A traditional pub on London Road in Stony Stratford with a standout Nepalese kitchen, Sunday roast, live sport, and easy table booking.",
  alternates: {
    canonical: "/",
  },
}

const menuShowcase = [
  {
    ...homeMenuShowcase[0],
    href: "/momo",
    image: momoImage,
    item: featuredMenuItems[0],
  },
  {
    ...homeMenuShowcase[1],
    href: "/nepalese-kitchen",
    image: mixedGrillImage,
    item: featuredMenuItems[1],
  },
  {
    ...homeMenuShowcase[2],
    href: "/menu",
    image: roastImage,
    item: featuredMenuItems[3],
  },
]

const storyFeature: ImageRouteItem = {
  href: "/traditional-pub-with-nepalese-kitchen",
  ...homeStoryFeature,
  image: "/images/hero/placeholders/pub-kitchen-story.svg",
}

const exploreIcons = [
  ForkKnife,
  CalendarDots,
  MapPin,
  Television,
  MapPin,
  UsersThree,
]
const exploreLinks = homeExploreLinks.map((link, i) => ({
  ...link,
  icon: exploreIcons[i],
}))

const primaryVisitPanels: ImageRouteItem[] = homePrimaryVisitPanels.map(
  (panel) => ({
    ...panel,
    image:
      panel.href === "/nepalese-kitchen"
        ? "/images/hero/placeholders/pub-kitchen-story.svg"
        : panel.href === "/beer-garden-stony-stratford"
          ? "/images/hero/placeholders/front-garden-courtyard.svg"
          : "/images/hero/placeholders/live-sport-occasions.svg",
  })
)

const secondaryVisitRoutes = [exploreLinks[1], exploreLinks[4], exploreLinks[5]]

interface ImageRouteItem {
  href: string
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
}

const atmosphereTiles: ImageRouteItem[] = homeAtmosphereTiles.map((tile) => ({
  ...tile,
  image:
    tile.href === "/about"
      ? "/images/hero/placeholders/traditional-pub.svg"
      : tile.href === "/beer-garden-stony-stratford"
        ? "/images/hero/placeholders/front-garden-courtyard.svg"
        : "/images/hero/placeholders/covers-inside-outside.svg",
}))

const eventsFeature: ImageRouteItem = {
  ...homeEventsFeature,
  image: "/images/hero/placeholders/live-sport-occasions.svg",
}

const guideFeature: ImageRouteItem = {
  ...homeGuideFeature,
  image: "/images/hero/placeholders/guides-overview.svg",
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
        "group relative block overflow-hidden rounded-[1.9rem] bg-primary text-white",
        className
      )}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <main>
      <Script
        id="old-school-house-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="old-school-house-home-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <HomeHeroSlideshow />

      <section className="bg-background py-4 md:py-5">
        <div className="section-shell">
          <div className="grid auto-cols-[84%] grid-flow-col gap-px overflow-x-auto rounded-[1.6rem] bg-[rgba(196,189,181,0.38)] [-ms-overflow-style:none] [scrollbar-width:none] md:auto-cols-auto md:grid-flow-row md:grid-cols-2 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden">
            {homeProofBarItems.map((item) => (
              <article
                key={item.title}
                className="snap-start bg-[var(--color-surface-lowest)] px-5 py-5 md:px-6 md:py-5"
              >
                <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                  {item.title}
                </p>
                <p className="pt-2 text-sm leading-6 text-on-surface">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell">
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <ImageRoutePanel
              item={storyFeature}
              className="min-h-[26rem] xl:min-h-[34rem]"
            />
            <div className="rounded-[1.9rem] bg-[var(--color-surface-lowest)] p-5 shadow-[0px_18px_48px_rgba(27,28,28,0.06)] md:p-7">
              <SectionHeading
                eyebrow="Why choose us"
                title="A proper pub atmosphere first, then food that gives the table a reason to come back."
                description="The homepage should make the pub feel warm and familiar, while the kitchen gives it more pull than the average gastropub stop."
                className="max-w-none"
              />
              <div className="space-y-4 pt-6">
                {homeReasons.map((reason) => (
                  <article
                    key={reason.title}
                    className="border-t border-[rgba(196,189,181,0.42)] pt-4 first:border-t-0 first:pt-0"
                  >
                    <h3 className="font-heading text-[1.5rem] leading-tight text-on-background">
                      {reason.title}
                    </h3>
                    <p className="max-w-xl pt-2 text-sm leading-6 text-on-surface md:text-base">
                      {reason.description}
                    </p>
                  </article>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Link
                  href="/traditional-pub-with-nepalese-kitchen"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                >
                  What makes it worth a visit
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                >
                  More about the pub
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="grid gap-4 xl:grid-cols-[1.04fr_0.96fr]">
            <article className="overflow-hidden rounded-[2rem] bg-[var(--color-surface-lowest)] shadow-[0px_18px_48px_rgba(27,28,28,0.06)]">
              <Image
                src={menuShowcase[0].image}
                alt={menuShowcase[0].alt}
                className="h-72 w-full object-cover md:h-[26rem]"
                sizes="(min-width: 1280px) 50vw, 100vw"
              />
              <div className="space-y-4 px-5 py-5 md:px-7 md:py-7">
                <SectionHeading
                  eyebrow="Menu highlights"
                  title="Pub comfort and Nepalese dishes should both feel easy to order."
                  description="Lead with one dish, then let the rest of the menu open up from there."
                  className="max-w-none"
                />
                <div className="border-t border-[rgba(196,189,181,0.4)] pt-4">
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
                    href={menuShowcase[0].href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    Find out more
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    View full menu
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {menuShowcase.slice(1).map((item) => (
                  <article
                    key={item.title}
                    className="overflow-hidden rounded-[1.8rem] bg-[var(--color-surface-lowest)] shadow-[0px_10px_28px_rgba(27,28,28,0.05)]"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="h-52 w-full object-cover"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <div className="px-5 py-5 md:px-6 md:py-6">
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
                        Explore dish
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              <div className="rounded-[1.8rem] bg-[var(--color-surface-low)] p-5 md:p-6">
                <div className="grid auto-cols-[84%] grid-flow-col gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-3 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
                  {homeMenuHighlights.map((highlight) => (
                    <article
                      key={highlight.title}
                      className="snap-start border-t border-[rgba(196,189,181,0.45)] pt-4 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-4"
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
                    href="/nepalese-kitchen"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    Explore the kitchen
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
          <div className="rounded-[2rem] bg-primary p-6 text-white shadow-[0px_18px_48px_rgba(27,28,28,0.08)] md:p-7">
            <div className="mx-auto flex max-w-4xl flex-col justify-between gap-8">
              <div className="space-y-5">
                <SectionHeading
                  eyebrow="Guest reviews"
                  title="People mostly remember the food, the warmth, and how easy it is to stay for another round."
                  description="The food stands out, the room feels easy, and the whole visit lands the way guests hope it will."
                  invert
                  className="max-w-none"
                />
              </div>

              <GuestReviewSlideshow reviews={guestReviews} />

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={googleReviewHref}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-primary inline-flex h-12 items-center justify-center gap-2.5 px-6 text-sm font-semibold"
                >
                  Write a Google review
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={googleReviewsPageHref}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-secondary-dark inline-flex h-12 items-center justify-center gap-2.5 px-6 text-sm font-semibold"
                >
                  See latest reviews
                  <ArrowRight className="size-4" />
                </a>
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
            description="A short sense of the room, the outdoor spaces, and the pub feel guests arrive into."
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
              title="From match days to tasting evenings, there is more than one reason to come back."
              description="A quick preview of the reasons people come back beyond a single meal."
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
                  <h2 className="section-title">{highlight.title}</h2>
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
          <SectionHeading
            eyebrow="Choose the visit that fits today"
            title="Pick the quickest route in, then get to the booking faster."
            description="Some visitors already know the kind of table they want. These routes help them decide without making the homepage feel overlong."
            className="max-w-3xl"
          />
          <div className="space-y-4">
            <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
              {reassuranceHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className={`inline-flex shrink-0 items-center gap-3 rounded-full px-4 py-3 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] ${
                    index === 1
                      ? "surface-pane-muted"
                      : "bg-[var(--color-surface-lowest)]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-secondary"
                  />
                  <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                    {item.title}
                  </p>
                </article>
              ))}
            </div>
            <div className="grid gap-4 xl:grid-cols-[1.06fr_0.94fr]">
              <div className="grid gap-4">
                <ImageRoutePanel
                  item={primaryVisitPanels[0]}
                  className="min-h-[23rem] md:min-h-[26rem]"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {primaryVisitPanels.slice(1).map((item) => (
                    <ImageRoutePanel
                      key={item.href}
                      item={item}
                      className="min-h-[16rem]"
                    />
                  ))}
                </div>
              </div>

              <div className="surface-panel-muted rounded-[2rem] p-5 md:p-6">
                <div className="max-w-md">
                  <p className="eyebrow">Other quick routes</p>
                  <h3 className="pt-2 font-heading text-[2rem] leading-[1.04] text-on-background">
                    {homeSecondaryVisitHeading}
                  </h3>
                </div>
                <div className="grid gap-4 pt-6">
                  {secondaryVisitRoutes.map((item, index) => {
                    const Icon = item.icon

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group grid gap-3 border-t border-[rgba(196,189,181,0.42)] pt-4 md:grid-cols-[auto_1fr_auto] md:items-start"
                      >
                        <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--color-surface-lowest)] shadow-[0px_8px_24px_rgba(27,28,28,0.05)]">
                          <Icon className="size-4 text-secondary" />
                        </span>
                        <div className="max-w-lg">
                          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                            Route 0{index + 1}
                          </p>
                          <h4 className="section-title pt-2">{item.title}</h4>
                          <p className="pt-2 text-sm leading-6 text-on-surface md:text-base">
                            {item.description}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:text-secondary/80">
                          Explore
                          <ArrowRight className="size-4" />
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="grid gap-4">
              <div className="surface-panel rounded-[1.85rem] p-5 md:p-6">
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

              <div className="surface-panel-muted rounded-[1.75rem] p-5 md:p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-xl">
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      Arrival notes
                    </p>
                    <div className="space-y-3 pt-4">
                      {arrivalNotes.map((note) => (
                        <p
                          key={note}
                          className="border-t border-[rgba(196,189,181,0.42)] pt-3 text-sm leading-6 text-on-surface first:border-t-0 first:pt-0 md:text-base"
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
                    <a
                      href={googleReviewsPageHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                    >
                      Latest Google reviews
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell">
          <div className="grid gap-4 xl:grid-cols-[0.94fr_1.06fr]">
            <ImageRoutePanel
              item={guideFeature}
              className="min-h-[22rem] xl:min-h-[26rem]"
            />
            <div className="rounded-[2rem] bg-[var(--color-surface-low)] p-5 shadow-[0px_12px_32px_rgba(27,28,28,0.05)] md:p-7">
              <div className="max-w-lg">
                <p className="text-xs font-semibold tracking-[0.22em] text-secondary uppercase">
                  {homeGuidesSectionCopy.eyebrow}
                </p>
                <h2 className="pt-2">{homeGuidesSectionCopy.title}</h2>
              </div>
              <div className="grid gap-4 pt-6">
                {homeDiscoveryLinks.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group grid gap-3 border-t border-[rgba(196,189,181,0.45)] pt-4 md:grid-cols-[auto_1fr_auto] md:items-start"
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-full bg-[var(--color-surface-lowest)] text-xs font-semibold tracking-[0.16em] text-secondary shadow-[0px_8px_24px_rgba(27,28,28,0.05)]">
                      0{index + 1}
                    </span>
                    <div className="max-w-xl">
                      <h3 className="section-title">{item.title}</h3>
                      <p className="pt-2 text-sm leading-6 text-on-surface md:text-base">
                        {item.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:text-secondary/80">
                      Read guide
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                ))}
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
          __html: JSON.stringify(
            routeConfigs
              .filter((route) => route.primaryNav && route.published)
              .map((route) => ({
                "@type": "SiteNavigationElement",
                name: route.label,
                url: `https://oldschoolhousestony.co.uk${route.href}`,
              }))
          ),
        }}
      />
    </main>
  )
}
