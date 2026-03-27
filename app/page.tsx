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
    title: "Momo",
    description:
      "The easiest first step into the Nepalese kitchen, and the dish most likely to turn first-time curiosity into a return visit.",
    href: "/momo",
    image: momoImage,
    alt: "Steamed momo dumplings with chutney at The Old School House.",
    item: featuredMenuItems[0],
  },
  {
    title: "Mixed grill",
    description:
      "A strong sharing order when the table wants food with impact and a round of drinks to stay alongside it.",
    href: "/nepalese-kitchen",
    image: mixedGrillImage,
    alt: "A mixed grill platter served at The Old School House.",
    item: featuredMenuItems[1],
  },
  {
    title: "Pub classics",
    description:
      "Familiar pub plates keep the menu easy for mixed tables, then the rest of the kitchen gives the visit a stronger reason to stay memorable.",
    href: "/menu",
    image: roastImage,
    alt: "A comforting pub plate served at The Old School House.",
    item: featuredMenuItems[3],
  },
]

const storyFeature: ImageRouteItem = {
  href: "/traditional-pub-with-nepalese-kitchen",
  eyebrow: "Why choose us",
  title: "Traditional pub first. Nepalese kitchen as the standout difference.",
  description:
    "The mix should feel obvious at a glance, then get stronger once you explore.",
  image: "/images/hero/placeholders/pub-kitchen-story.svg",
  alt: "Placeholder illustration showing the pub-and-kitchen identity of The Old School House.",
}

const exploreLinks = [
  {
    href: "/nepalese-kitchen",
    title: "Nepalese kitchen",
    description: "Lead curious diners into the food that sets the pub apart.",
    icon: ForkKnife,
  },
  {
    href: "/sunday-roast",
    title: "Sunday roast",
    description: "Head straight into the pub’s strongest Sunday lunch route.",
    icon: CalendarDots,
  },
  {
    href: "/beer-garden-stony-stratford",
    title: "Beer garden",
    description:
      "Give outdoor drinks and dining a dedicated route of their own.",
    icon: MapPin,
  },
  {
    href: "/live-sport",
    title: "Live sport",
    description: "Turn sport-led intent into bookings and longer stays.",
    icon: Television,
  },
  {
    href: "/dog-friendly-pub-stony-stratford",
    title: "Dog-friendly pub",
    description:
      "Answer the dog question quickly and keep the visit easy to plan.",
    icon: MapPin,
  },
  {
    href: "/family-friendly-pub-stony-stratford",
    title: "Family-friendly pub",
    description: "Show why the menu and setting work for mixed-age tables.",
    icon: UsersThree,
  },
]

const primaryVisitPanels: ImageRouteItem[] = [
  {
    href: "/nepalese-kitchen",
    eyebrow: "Food-led visit",
    title: "Start with the Nepalese kitchen",
    description:
      "If the food is the reason for coming, this is the clearest route into the dishes that set the pub apart.",
    image: "/images/hero/placeholders/pub-kitchen-story.svg",
    alt: "Placeholder illustration representing the Nepalese kitchen at The Old School House.",
  },
  {
    href: "/beer-garden-stony-stratford",
    eyebrow: "Outdoor plan",
    title: "Beer garden and courtyard",
    description:
      "Head here first for outdoor drinks, lunch in the open air, and a slower kind of visit.",
    image: "/images/hero/placeholders/front-garden-courtyard.svg",
    alt: "Placeholder illustration of the outdoor spaces at The Old School House.",
  },
  {
    href: "/live-sport",
    eyebrow: "Match-day plan",
    title: "Live sport and bigger rounds",
    description:
      "Use the sport route if the screen, the drinks, and the room matter as much as the food.",
    image: "/images/hero/placeholders/live-sport-occasions.svg",
    alt: "Placeholder illustration representing live sport at The Old School House.",
  },
]

const secondaryVisitRoutes = [exploreLinks[1], exploreLinks[4], exploreLinks[5]]

const discoveryLinks = [
  {
    href: "/where-to-eat-in-stony-stratford",
    title: "Where to eat in Stony Stratford",
    description:
      "Help local diners who know the town but have not yet decided which kind of place they want.",
  },
  {
    href: "/what-is-nepalese-food",
    title: "What is Nepalese food?",
    description:
      "Make the food feel approachable for first-timers before they ever open the menu.",
  },
  {
    href: "/traditional-pub-with-nepalese-kitchen",
    title: "Why the pub and kitchen work together",
    description:
      "Show why this hybrid model feels clearer, not more confusing, for mixed groups and curious diners.",
  },
]

interface ImageRouteItem {
  href: string
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
}

const atmosphereTiles: ImageRouteItem[] = [
  {
    href: "/about",
    eyebrow: "Inside the pub",
    title: "Traditional room, warm feel",
    description: "See the setting and character that shape the place.",
    image: "/images/hero/placeholders/traditional-pub.svg",
    alt: "Placeholder illustration of the traditional pub interior at The Old School House.",
  },
  {
    href: "/beer-garden-stony-stratford",
    eyebrow: "Outdoor spaces",
    title: "Front garden and courtyard",
    description: "Explore the outside seating for drinks and dining.",
    image: "/images/hero/placeholders/front-garden-courtyard.svg",
    alt: "Placeholder illustration of the front garden and courtyard at The Old School House.",
  },
  {
    href: "/find-us",
    eyebrow: "Capacity and flow",
    title: "Room to settle in",
    description: "Get the feel for the space before you arrive.",
    image: "/images/hero/placeholders/covers-inside-outside.svg",
    alt: "Placeholder illustration showing indoor and outdoor seating at The Old School House.",
  },
]

const eventsFeature: ImageRouteItem = {
  href: "/events",
  eyebrow: "Repeat-visit reasons",
  title: "Sport, quiz nights, and local occasions",
  description: "The quickest way into what is happening beyond a single meal.",
  image: "/images/hero/placeholders/live-sport-occasions.svg",
  alt: "Placeholder illustration for live sport and local occasions at The Old School House.",
}

const guideFeature: ImageRouteItem = {
  href: "/guides",
  eyebrow: "Still deciding?",
  title:
    "A few extra guides help when the pub feels right but you want the details before choosing the route.",
  description:
    "Start here if you want to compare food, atmosphere, and occasion-led visits a little more closely.",
  image: "/images/hero/placeholders/guides-overview.svg",
  alt: "Placeholder illustration representing The Old School House guide pages and decision paths.",
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
                title="Come for the traditional pub experience. Stay for the unexpected Nepalese food."
                description="A proper local on London Road, with food that gives the visit a stronger reason to come back."
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
                  Why it works
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
                <div className="grid gap-4 sm:grid-cols-3">
                  {homeMenuHighlights.map((highlight) => (
                    <article
                      key={highlight.title}
                      className="border-t border-[rgba(196,189,181,0.45)] pt-4 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-4"
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
                  className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                    index === 1
                      ? "surface-pane-muted"
                      : "bg-[var(--color-surface-lowest)]"
                  }`}
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
            title="Match the page to the plan, then get to the booking faster."
            description="Some visitors already know what kind of visit they want. These routes get them there faster."
            className="max-w-3xl"
          />
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {reassuranceHighlights.map((item, index) => (
                <article
                  key={item.title}
                  className={`inline-flex items-center gap-3 rounded-full px-4 py-3 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] ${
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

              <div className="rounded-[2rem] bg-[var(--color-surface-low)] p-5 shadow-[0px_12px_32px_rgba(27,28,28,0.05)] md:p-6">
                <div className="max-w-md">
                  <p className="text-xs font-semibold tracking-[0.22em] text-secondary uppercase">
                    Other quick routes
                  </p>
                  <h3 className="pt-2 font-heading text-[2rem] leading-[1.04] text-on-background">
                    Three more ways into the pub, depending on who is coming and
                    what kind of table it is.
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
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[linear-gradient(135deg,#af2b3e,#8f1f2e)] px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(175,43,62,0.3)] transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(175,43,62,0.4)] hover:brightness-110"
                >
                  Write a Google review
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href={googleReviewsPageHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.06] px-6 text-sm font-semibold text-white/90 transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
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
          <div className="grid gap-4 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="grid gap-4">
              <div className="rounded-[1.85rem] bg-[var(--color-surface-lowest)] p-5 shadow-[0px_14px_36px_rgba(27,28,28,0.05)] md:p-6">
                <SectionHeading
                  eyebrow="Visit us"
                  title="Easy to find on London Road, easy to work into a day or evening in Stony Stratford."
                  description="From a quick lunch stop to a planned evening out, it is a straightforward pub to get to and settle into."
                  className="max-w-none"
                />
                <div className="grid gap-3 pt-5 sm:grid-cols-2">
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-[linear-gradient(135deg,#af2b3e,#8f1f2e)] px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(175,43,62,0.3)] transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(175,43,62,0.4)] hover:brightness-110"
                  >
                    Get directions
                    <MapPin className="size-4" />
                  </a>
                  <a
                    href={sitePhoneHref}
                    className="inline-flex h-12 items-center justify-center rounded-xl border border-[rgba(196,189,181,0.42)] bg-[var(--color-surface-low)] px-6 text-sm font-semibold text-primary transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-highest)]"
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
                    className={`rounded-[1.75rem] px-5 py-5 shadow-[0px_12px_32px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                      index % 2 === 0
                        ? "bg-[var(--color-surface-lowest)]"
                        : "surface-pane-muted"
                    }`}
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

              <div className="surface-pane-muted rounded-[1.75rem] p-5 shadow-[0px_12px_32px_rgba(27,28,28,0.05)] md:p-6">
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
                  Lighter discovery
                </p>
                <h2 className="pt-2">
                  Start with the main pages, then dip into the guides if you
                  want a closer look before deciding.
                </h2>
              </div>
              <div className="grid gap-4 pt-6">
                {discoveryLinks.map((item, index) => (
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
                      Explore
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Ready to plan the visit?"
        description="Book for dinner, Sunday lunch, or the next night you want the table sorted before you arrive."
      />

      <FaqSection
        eyebrow="Before you visit"
        title="A few quick answers before you book or head over."
        description="The quick questions guests usually want settled before booking, calling, or making their way over."
        faqs={localFaqs}
      />

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
