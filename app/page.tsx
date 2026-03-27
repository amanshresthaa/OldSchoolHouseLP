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
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { OpenStatusBadge } from "@/components/site/OpenStatusBadge"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  aboutPubFacts,
  arrivalNotes,
  atmosphereMoments,
  directionsHref,
  eventsHighlights,
  googleReviewsPageHref,
  heroSignals,
  homeMenuHighlights,
  homeReasons,
  localBusinessSchema,
  localFaqs,
  openingHours,
  proofPoints,
  reassuranceHighlights,
  siteAddress,
  siteName,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { routeConfigs } from "@/data/site-routes"
import { featuredMenuItems, formatPrice } from "@/lib/menu"

import mixedGrillImage from "@/images/food/mixed-grill.png"
import momoImage from "@/images/food/chicken-momo-and-veg-momo.png"
import heroImage from "@/images/food/table-food.png"
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

const exploreLinks = [
  {
    href: "/sunday-roast",
    title: "Sunday roast",
    description: "Give weekend diners a dedicated route into the pub.",
    icon: CalendarDots,
  },
  {
    href: "/nepalese-kitchen",
    title: "Nepalese kitchen",
    description: "Lead curious diners into the food that sets the pub apart.",
    icon: ForkKnife,
  },
  {
    href: "/live-sport",
    title: "Live sport",
    description: "Turn fixture-night intent into bookings and longer stays.",
    icon: Television,
  },
  {
    href: "/group-dining-celebrations",
    title: "Group dining",
    description:
      "Show how the pub works for birthdays, mixed groups, and longer tables.",
    icon: UsersThree,
  },
]

function VenueMomentCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(240,235,227,1),rgba(228,221,212,1))] p-5 md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.16),transparent_36%)]" />
      <div className="relative">
        <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
          Atmosphere
        </p>
        <h3 className="pt-3 font-heading text-[1.9rem] leading-tight text-on-background">
          {title}
        </h3>
        <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
          {description}
        </p>
      </div>
    </div>
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

      <section className="relative overflow-hidden bg-primary text-white">
        <Image
          src={heroImage}
          alt="A table of pub dishes, Nepalese plates, and drinks at The Old School House."
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,14,0.2)_0%,rgba(6,27,14,0.58)_34%,rgba(6,27,14,0.94)_70%,rgba(6,27,14,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_75%_5%,_rgba(212,160,23,0.26),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_100%,_rgba(175,43,62,0.16),_transparent_50%)]" />
        <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--color-on-tertiary-container)]/30 to-transparent" />

        <div className="relative">
          <div className="mx-auto max-w-[84rem] px-5 sm:px-6 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 py-5">
              <div className="flex items-center gap-3">
                <span className="inline-block size-1.5 rounded-full bg-[var(--color-on-tertiary-container)]" />
                <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-[var(--color-on-tertiary-container)] uppercase">
                  {siteName}
                </p>
              </div>
              <OpenStatusBadge />
            </div>

            <div className="grid gap-8 py-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14 lg:py-16">
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
                  Traditional pub in Stony Stratford
                </p>
                <h1 className="max-w-[14ch] text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.98] font-normal text-white">
                  A traditional pub in Stony Stratford with a Nepalese kitchen
                  worth discovering.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-white/78 md:text-lg md:leading-8">
                  Come for the familiar pub comfort, stay for the momo, curries,
                  grills, and the kind of welcome that makes a second visit
                  easy.
                </p>
                <div className="flex flex-wrap gap-3 text-xs font-semibold tracking-[0.18em] text-white/78 uppercase">
                  {heroSignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>

              <SiteActionCard
                actions={[
                  {
                    href: "/book",
                    label: "Book a table",
                    icon: <ArrowRight className="size-4" />,
                  },
                  {
                    href: "/menu",
                    label: "View menu",
                  },
                ]}
                supportingText="London Road, Stony Stratford, Milton Keynes. Use the menu to explore the food, or book first and decide over a drink when you arrive."
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {proofPoints.map((point, index) => (
              <article
                key={point.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index % 2 === 0
                    ? "bg-[var(--color-surface-lowest)]"
                    : "surface-pane-muted"
                }`}
              >
                <h2 className="section-title">{point.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Why choose us"
            title="Come for the traditional pub experience. Stay for the unexpected Nepalese food."
            description="The pub is the first reason to walk through the door. The Nepalese kitchen is the reason the visit feels more memorable than the average local stop."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {homeReasons.map((reason, index) => (
              <article
                key={reason.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index === 1
                    ? "surface-pane-muted"
                    : "bg-[var(--color-surface-lowest)]"
                }`}
              >
                <h2 className="section-title">{reason.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Menu highlights"
              title="Pub comfort and Nepalese dishes should both feel easy to order."
              description="The menu is designed for curious first-timers, pub traditionalists, and mixed tables that want both in the same visit."
            />
            <div className="shrink-0">
              <SiteActionCard
                actions={[
                  {
                    href: "/menu",
                    label: "View full menu",
                    icon: <ArrowRight className="size-4" />,
                  },
                  { href: "/nepalese-kitchen", label: "Explore the kitchen" },
                ]}
              />
            </div>
          </div>
          <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 lg:grid-cols-3">
              {menuShowcase.map((item, index) => (
                <article
                  key={item.title}
                  className={`overflow-hidden rounded-2xl shadow-[0px_10px_28px_rgba(27,28,28,0.05)] ${
                    index === 1
                      ? "surface-pane-muted"
                      : "bg-[var(--color-surface-lowest)]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="h-56 w-full object-cover"
                    sizes="(min-width: 1024px) 28vw, 100vw"
                  />
                  <div className="px-5 py-5 md:px-6 md:py-6">
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      {formatPrice(item.item.price)}
                    </p>
                    <h3 className="section-title pt-3">{item.title}</h3>
                    <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                    >
                      Find out more
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid gap-4">
              {homeMenuHighlights.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                    index === 1
                      ? "surface-pane-muted"
                      : "bg-[var(--color-surface-lowest)]"
                  }`}
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
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Atmosphere"
            title="A pub that feels welcoming before the food even arrives."
            description="Without overcomplicating the mood, the building, the bar, and the outside space all help the place feel like a genuine local from the moment you arrive."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {atmosphereMoments.map((moment) => (
              <VenueMomentCard
                key={moment.title}
                title={moment.title}
                description={moment.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What’s on"
              title="From match days to tasting evenings, there is more than one reason to come back."
              description="The pub is built for repeat visits, whether the draw is live sport, a quiz night, a community gathering, or a plan that starts with dinner and stays out longer."
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
          <div className="grid gap-4 lg:grid-cols-3">
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
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Ready to plan the visit?"
        description="Book for dinner, Sunday lunch, or the next night you want the table sorted before you arrive on London Road."
      />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Why it feels easy to choose"
            title="A reassuring first visit matters when people are deciding quickly."
            description="We do not have to lean on grand claims or invented review copy. The site should make the offer, the location, and the next action feel clear enough on their own."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {reassuranceHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index === 1
                    ? "surface-pane-muted"
                    : "bg-[var(--color-surface-lowest)]"
                }`}
              >
                <h2 className="section-title">{item.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-4">
            {exploreLinks.map((item, index) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6 ${
                    index % 2 === 0
                      ? "bg-[var(--color-surface-lowest)]"
                      : "surface-pane-muted"
                  }`}
                >
                  <Icon className="size-5 text-secondary" />
                  <h3 className="section-title pt-3">{item.title}</h3>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    {item.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Visit us"
              title="Easy to find, easy to book, and easy to work into a day in town."
              description="The location on London Road, the outside space, and the straightforward booking path all help turn search intent into an actual visit."
            />
            <SiteActionCard
              actions={[
                {
                  href: directionsHref,
                  label: "Get directions",
                  icon: <MapPin className="size-4" />,
                },
                { href: sitePhoneHref, label: `Call ${sitePhone}` },
              ]}
              supportingText={`${siteAddress}. ${openingHours[0].hours}.`}
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <MapEmbed />
            <div className="grid gap-4">
              <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6">
                <h2 className="section-title">Arrival notes</h2>
                <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                  {arrivalNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {aboutPubFacts.slice(0, 4).map((fact, index) => (
                  <div
                    key={fact.label}
                    className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                      index % 2 === 0
                        ? "bg-[var(--color-surface-lowest)]"
                        : "surface-pane-muted"
                    }`}
                  >
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      {fact.label}
                    </p>
                    <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href={googleReviewsPageHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
              >
                See the latest Google reviews
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="Before you visit"
        title="A few quick answers before you book or head over."
        description="The site should answer the questions that make people hesitate, while keeping anything unconfirmed off the page until it is ready to publish properly."
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
