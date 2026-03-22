import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRight,
  CalendarDots,
  CaretDown,
  ChatCircleDots,
  Clock,
  ForkKnife,
  MapPin,
  Phone,
  Star,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MenuCategoryScroller } from "@/components/site/MenuCategoryScroller"
import { MapEmbed } from "@/components/site/MapEmbed"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import {
  arrivalNotes,
  atmosphereMoments,
  communityNotes,
  eventOccasions,
  eventsHighlights,
  foodHours,
  googleReviewHref,
  guestReviews,
  heroSignals,
  homeReasons,
  localFaqs,
  localBusinessSchema,
  mapHref,
  openingHours,
  proofPoints,
  siteAddress,
  siteEmail,
  siteEmailHref,
  siteLocation,
  siteName,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { formatPrice, menuCategories } from "@/lib/menu"
import { cn } from "@/lib/utils"

import goatCurryImage from "@/images/food/goat-curry.png"
import mixedGrillImage from "@/images/food/mixed-grill.png"
import momoImage from "@/images/food/chicken-momo-and-veg-momo.png"
import heroImage from "@/images/food/table-food.png"
import startersImage from "@/images/food/samosas-with-salad.png"

interface VenuePhotoPlaceholderProps {
  title: string
  alt: string
  className?: string
}

function VenuePhotoPlaceholder({
  title,
  alt,
  className,
}: VenuePhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,rgba(240,235,227,1),rgba(228,221,212,1))]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.12),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
      <div className="relative flex h-full items-end p-5 md:p-6">
        <div className="rounded-2xl bg-[var(--color-surface-lowest)]/88 px-4 py-3 backdrop-blur-sm">
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
            Photo Placeholder
          </p>
          <p className="pt-1 font-heading text-2xl text-on-background">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
}

function GoogleStars() {
  return (
    <div className="flex items-center gap-0.5 text-[#fbbc04]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={14} weight="fill" />
      ))}
    </div>
  )
}

const allMenuItems = menuCategories.flatMap((category) => category.items)

function requireMenuItem(name: string) {
  const item = allMenuItems.find((menuItem) => menuItem.name === name)

  if (!item) {
    throw new Error(`Menu item not found: ${name}`)
  }

  return item
}

const menuPreviewLinks = [
  { label: "Momo and starters", href: "/menu#starters" },
  { label: "Mixed grills", href: "/menu#mixed-grills" },
  { label: "House specialities", href: "/menu#speciality-dishes" },
  { label: "Pub classics", href: "/menu#pub-classic" },
  { label: "Desserts", href: "/menu#desserts" },
]

const menuPreviewShowcase = [
  {
    eyebrow: "First stop",
    title: "Momo",
    caption: "Traditional Nepalese dumplings that get the table started well.",
    image: momoImage,
    alt: "A plate of momo dumplings served with chutney at The Old School House.",
    item: requireMenuItem("Momo (Veg)"),
  },
  {
    eyebrow: "Best for sharing",
    title: "Large Mixed Grill",
    caption:
      "A lively middle of the table when everyone wants a little of everything.",
    image: mixedGrillImage,
    alt: "A large mixed grill with assorted meats served on a sizzling platter at The Old School House.",
    item: requireMenuItem("Large Mixed Grill"),
  },
  {
    eyebrow: "Go richer",
    title: "Goat Curry",
    caption: "A slower, fuller plate for when dinner starts to settle in.",
    image: goatCurryImage,
    alt: "A bowl of goat curry from the Nepalese kitchen at The Old School House.",
    item: requireMenuItem("Khasi Ko Masu (Goat Curry) (GF)"),
  },
]

const menuPreviewJourney = [
  {
    label: "Start with",
    note: "Bring something Nepalese to the table straight away and let everyone dip in.",
    href: "/menu#starters",
    item: menuPreviewShowcase[0].item,
  },
  {
    label: "Share in the middle",
    note: "When the table wants colour, heat, and a bit of theatre, this is the move.",
    href: "/menu#mixed-grills",
    item: menuPreviewShowcase[1].item,
  },
  {
    label: "Finish with a house dish",
    note: "Settle into one of the kitchen favourites and round it out with rice or naan.",
    href: "/menu#speciality-dishes",
    item: menuPreviewShowcase[2].item,
  },
]

export default function Page() {
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
        id="old-school-house-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="old-school-house-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <section className="relative min-h-[calc(100svh-4.25rem)] overflow-hidden bg-primary text-white">
        <Image
          src={heroImage}
          alt="A table spread at The Old School House with Nepalese dishes, pub plates, and drinks."
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,14,0.28),rgba(6,27,14,0.88)_58%,rgba(6,27,14,0.96))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.3),transparent_32%)]" />
        <div className="relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-end px-5 py-10 sm:px-6 md:px-8 md:py-14">
          <div className="max-w-3xl space-y-6">
            <p className="hero-entrance night-kicker">{siteName}</p>
            <div className="hero-entrance-delay-1 space-y-4">
              <h1 className="display-copy max-w-4xl text-white">
                The Old School House
              </h1>
              <h2 className="max-w-2xl text-2xl leading-tight text-white md:text-3xl">
                Traditional pub, Nepalese kitchen, and a warm welcome on London
                Road.
              </h2>
            </div>
            <p className="hero-entrance-delay-2 max-w-2xl text-base leading-7 text-white/78 md:text-lg">
              Come in for pub favourites, stay for Nepalese dishes, and settle
              into a front garden, private courtyard, and bar built for the kind
              of evenings that last a little longer.
            </p>
            <div className="hero-entrance-delay-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/book">
                  Book a table
                  <CalendarDots />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/12 bg-black/16 text-white hover:bg-black/24 hover:text-white"
              >
                <Link href="/menu">
                  View menu
                  <ArrowRight />
                </Link>
              </Button>
            </div>
            <p className="hero-entrance-delay-3 max-w-2xl text-sm leading-7 text-[var(--color-on-tertiary-container)]">
              Open daily from 10:00 to 00:30 · Stony Stratford, Milton Keynes ·
              01908 561936
            </p>
          </div>
          <div className="hero-entrance-delay-3 mt-8 grid gap-3 md:max-w-4xl md:grid-cols-3">
            {heroSignals.map((signal) => (
              <div
                key={signal}
                className="night-tile bg-black/20 text-white/88 backdrop-blur-sm"
              >
                {signal}
              </div>
            ))}
          </div>
          <div className="hero-entrance-delay-3 mt-8 grid gap-3 md:max-w-5xl md:grid-cols-[1.05fr_0.95fr_0.95fr]">
            <div className="night-tile flex items-start gap-3">
              <Clock className="mt-1 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
              <span>
                {openingHours[0].label}: {openingHours[0].hours}
              </span>
            </div>
            <div className="night-tile flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
              <span>{siteLocation}</span>
            </div>
            <div className="night-tile flex items-start gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
              <a
                href={sitePhoneHref}
                className="transition hover:text-[var(--color-on-tertiary-container)]"
              >
                {sitePhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-3">
        <div className="section-shell">
          <div className="surface-frame relative overflow-hidden">
            <div className="flex items-center">
              <div className="shrink-0 bg-secondary px-4 py-3 text-[0.72rem] font-semibold tracking-[0.18em] text-white uppercase md:px-5">
                At a glance
              </div>
              <div className="relative min-w-0 flex-1">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-[linear-gradient(90deg,var(--color-surface-lowest),rgba(255,255,255,0))] md:w-12" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-[linear-gradient(270deg,var(--color-surface-lowest),rgba(255,255,255,0))] md:w-12" />
                <div className="rail-marquee py-3 text-sm font-semibold tracking-[0.14em] text-on-surface uppercase md:text-[0.82rem]">
                  <div className="rail-marquee-track">
                    {[0, 1].map((groupIndex) => (
                      <div
                        key={groupIndex}
                        className="rail-marquee-group"
                        aria-hidden={groupIndex === 1}
                      >
                        {proofPoints.map((point) => (
                          <div
                            key={`${groupIndex}-${point.title}`}
                            className="flex items-center gap-3 px-4 whitespace-nowrap md:px-5"
                          >
                            <span className="text-secondary">/</span>
                            <span>{point.title}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_0.9fr_1.08fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why choose us"
              title="A proper local with a little more flavour, a little more warmth, and plenty to come back for."
              description="The Old School House keeps the feel of a characterful pub while giving you more reasons to stay: good food, easy drinks, a warm welcome, and a menu that goes beyond the expected."
            />
            <div className="surface-frame">
              <div className="surface-pane surface-pane-muted">
                <p className="eyebrow">Why guests come back</p>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  Welcoming to one and all, with honest plates, a strong wet
                  offer, and enough warmth to make one visit feel like the start
                  of a habit.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pt-10">
            <Image
              src={startersImage}
              alt="Samosas plated with salad and chutneys at The Old School House."
              className="media-lift h-[22rem] w-full rounded-[2rem] object-cover md:h-[28rem] lg:h-[38rem]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </div>
          <div className="space-y-8 pt-1 lg:pt-18">
            {homeReasons.map((reason) => (
              <article
                key={reason.title}
                className="space-y-3 border-t border-[var(--color-outline-variant)]/30 pt-6 first:border-t-0 first:pt-0"
              >
                <h3 className="font-sans text-2xl font-semibold text-secondary">
                  {reason.title}
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-on-surface md:text-base">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-16 md:py-24">
        <div className="section-shell space-y-8 md:space-y-10">
          <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <div className="min-w-0 space-y-6 lg:pb-4">
              <SectionHeading
                eyebrow="Menu preview"
                title="If it is your first visit, start on the Nepalese side."
                description="Momo, mixed grills, and richer house curries give the table something to talk about, while the pub favourites keep things easy for everyone coming in."
              />
              <div className="surface-frame overflow-hidden">
                <MenuCategoryScroller links={menuPreviewLinks} />
              </div>
              <div className="max-w-xl space-y-3 text-sm leading-7 text-on-surface md:text-base">
                <p>
                  This is the part of the menu that turns a straightforward pub
                  meal into somewhere guests want to come back to.
                </p>
                <p>
                  Start with something to share, go bigger in the middle, then
                  settle into one of the kitchen favourites.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-fit">
                  <Link href="/menu" className="w-full">
                    See full menu
                    <ForkKnife />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-fit"
                >
                  <Link href="/book" className="w-full">
                    Book for dinner
                    <CalendarDots />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden gap-4 lg:grid lg:grid-cols-[1.1fr_0.9fr]">
              <figure className="group relative overflow-hidden rounded-[2.25rem] bg-primary text-white">
                <Image
                  src={menuPreviewShowcase[0].image}
                  alt={menuPreviewShowcase[0].alt}
                  className="media-lift h-[22rem] w-full object-cover md:h-[28rem] lg:h-[34rem]"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,14,0.08),rgba(6,27,14,0.76))]" />
                <figcaption className="absolute inset-x-0 bottom-0 space-y-2 p-5 md:p-6">
                  <p className="night-kicker text-[var(--color-on-tertiary-container)]">
                    {menuPreviewShowcase[0].eyebrow}
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <div className="max-w-sm">
                      <h3 className="font-heading text-4xl leading-none text-white">
                        {menuPreviewShowcase[0].title}
                      </h3>
                      <p className="pt-2 text-sm leading-6 text-white/80">
                        {menuPreviewShowcase[0].caption}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-white">
                      {formatPrice(menuPreviewShowcase[0].item.price)}
                    </p>
                  </div>
                </figcaption>
              </figure>
              <div className="grid gap-4">
                {menuPreviewShowcase.slice(1).map((feature) => (
                  <figure
                    key={feature.title}
                    className="group relative overflow-hidden rounded-[2rem] bg-primary text-white"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      className="media-lift h-[15rem] w-full object-cover md:h-[16.8rem]"
                      sizes="(min-width: 1024px) 22vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,14,0.06),rgba(6,27,14,0.8))]" />
                    <figcaption className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                      <p className="night-kicker text-[var(--color-on-tertiary-container)]">
                        {feature.eyebrow}
                      </p>
                      <div className="flex items-start justify-between gap-4">
                        <div className="max-w-[14rem]">
                          <h3 className="font-sans text-2xl font-semibold text-white">
                            {feature.title}
                          </h3>
                          <p className="pt-2 text-sm leading-6 text-white/76">
                            {feature.caption}
                          </p>
                        </div>
                        <p className="shrink-0 text-sm font-semibold text-white">
                          {formatPrice(feature.item.price)}
                        </p>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
            {menuPreviewShowcase.map((feature, index) => (
              <figure
                key={feature.title}
                className={cn(
                  "relative overflow-hidden rounded-[2rem] bg-primary text-white",
                  index === 0 && "sm:col-span-2"
                )}
              >
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  className={cn(
                    "w-full object-cover",
                    index === 0 ? "h-[20rem] sm:h-[23rem]" : "h-[17rem]"
                  )}
                  sizes={
                    index === 0
                      ? "(min-width: 640px) 100vw, 100vw"
                      : "(min-width: 640px) 50vw, 100vw"
                  }
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,14,0.08),rgba(6,27,14,0.8))]" />
                <figcaption className="absolute inset-x-0 bottom-0 space-y-2 p-5">
                  <p className="night-kicker text-[var(--color-on-tertiary-container)]">
                    {feature.eyebrow}
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={cn(
                        "min-w-0",
                        index !== 0 && "max-w-[14rem]"
                      )}
                    >
                      <h3
                        className={cn(
                          "leading-none text-white",
                          index === 0
                            ? "font-heading text-[2rem]"
                            : "font-sans text-2xl font-semibold"
                        )}
                      >
                        {feature.title}
                      </h3>
                      <p className="pt-2 text-sm leading-6 text-white/78">
                        {feature.caption}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm font-semibold text-white">
                      {formatPrice(feature.item.price)}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] xl:grid-cols-[0.64fr_1.36fr]">
              <div className="surface-pane surface-pane-muted">
                <p className="eyebrow">A simple first order</p>
                <h3 className="pt-3 font-heading text-[2rem] leading-none text-on-background md:text-4xl">
                  Order like this.
                </h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  The easiest way in is one shareable opener, one bigger plate
                  for the middle of the table, and one house favourite once
                  everyone has settled in.
                </p>
              </div>
              <div className="surface-pane bg-[var(--color-surface-lowest)]">
                <div className="mb-4 flex items-center justify-between gap-4 lg:hidden">
                  <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    A simple way to order
                  </p>
                  <p className="text-xs leading-6 text-on-surface/70">
                    Built for a first visit
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {menuPreviewJourney.map((step, index) => (
                    <article
                      key={step.label}
                      className={cn(
                        "space-y-3 rounded-[1.5rem] bg-[var(--color-surface-low)]/70 px-4 py-4 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0",
                        index === 2 && "md:col-span-2 lg:col-span-1",
                        index > 0 &&
                          "lg:border-l lg:border-[var(--color-outline-variant)]/25 lg:pl-6"
                      )}
                    >
                      <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                        {String(index + 1).padStart(2, "0")} · {step.label}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-sans text-xl font-semibold text-secondary">
                            {step.item.name}
                          </h3>
                          <p className="shrink-0 text-sm font-medium text-on-surface">
                            {formatPrice(step.item.price)}
                          </p>
                        </div>
                        <p className="text-sm leading-7 text-on-surface">
                          {step.note}
                        </p>
                      </div>
                      <Link
                        href={step.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
                      >
                        See it on the full menu
                        <ArrowRight className="size-4" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Book ahead for dinner, drinks, or an easy catch-up in town."
        description="If you know when you would like to come in, book ahead and arrive knowing your table is waiting."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Guest reviews"
              title="What guests remember most after dinner here."
              description="Momo, Kathmandu tikka, goat curry, mixed grills, good drinks, and a room that makes it easy to stay for one more round all come up again and again."
            />
            <div className="surface-frame">
              <div className="surface-pane surface-pane-muted">
                <p className="eyebrow">Share your visit</p>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  Been in for momo, mixed grills, or a longer Nepalese dinner?
                  Leave a note on Google and help the next guest decide.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Button asChild size="lg">
                    <a href={googleReviewHref} target="_blank" rel="noreferrer">
                      Write a Google review
                      <ChatCircleDots />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={mapHref} target="_blank" rel="noreferrer">
                      Open on Google Maps
                      <ArrowRight />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="surface-frame relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,var(--color-background),rgba(249,246,241,0))] md:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,var(--color-background),rgba(249,246,241,0))] md:w-20" />
            <div className="review-marquee px-1 py-1">
              <div className="review-marquee-track">
                {[0, 1].map((groupIndex) => (
                  <div
                    key={groupIndex}
                    className="review-marquee-group"
                    aria-hidden={groupIndex === 1}
                  >
                    {guestReviews.map((review) => (
                      <article
                        key={`${groupIndex}-${review.name}`}
                        className="w-[19.5rem] shrink-0 rounded-[1.9rem] bg-[var(--color-surface-lowest)] px-5 py-6 shadow-[0px_14px_34px_rgba(27,28,28,0.06)] md:w-[21rem] md:px-6 md:py-7"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-highest)] text-sm font-semibold text-primary">
                              {getInitials(review.name)}
                            </div>
                            <div className="min-w-0">
                              <h3 className="font-sans text-base font-semibold text-on-background">
                                {review.name}
                              </h3>
                              <p className="pt-1 text-[0.72rem] font-semibold tracking-[0.14em] text-on-surface uppercase">
                                {review.guestType}
                              </p>
                            </div>
                          </div>
                          <div className="rounded-full bg-[var(--color-surface-low)] px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] text-on-surface uppercase">
                            Google review
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                          <GoogleStars />
                          <p className="text-xs font-medium text-on-surface/76">
                            Shared by a guest
                          </p>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {review.focus.map((item) => (
                            <span
                              key={item}
                              className="rounded-full bg-[var(--color-surface-low)] px-3 py-1 text-[0.7rem] font-semibold tracking-[0.12em] text-secondary uppercase"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <p className="mt-4 text-sm leading-7 text-on-surface">
                          {'"'}
                          {review.summary}
                          {'"'}
                        </p>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Atmosphere"
              title="Good food, easy company, and a setting made for lingering."
              description="Think exposed brick, wooden floors, generous plates, and the sort of room that works just as well for a quick lunch as it does for a longer evening with friends."
            />
            <div className="surface-frame">
              <div className="surface-pane surface-pane-muted">
                <p className="eyebrow">Around the pub</p>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  From the street outside to the bar, the dining room, and the
                  garden, each part of the pub gives you a slightly different
                  reason to settle in and stay a little longer.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <VenuePhotoPlaceholder
                title="Exterior"
                alt="Placeholder for a future exterior photograph of The Old School House on London Road, showing the brick frontage and entrance."
                className="media-lift h-[18rem] md:col-span-2 md:h-[22rem] lg:col-span-1 lg:row-span-2 lg:h-full lg:min-h-[32rem]"
              />
              <VenuePhotoPlaceholder
                title="Bar"
                alt="Placeholder for a future bar photograph showing the single-bar setup inside The Old School House."
                className="media-lift h-[15rem] md:h-[18rem]"
              />
              <VenuePhotoPlaceholder
                title="Dining Room"
                alt="Placeholder for a future dining room photograph showing exposed brick, wooden floors, and guest seating inside The Old School House."
                className="media-lift h-[15rem] md:h-[18rem]"
              />
              <VenuePhotoPlaceholder
                title="Front Garden"
                alt="Placeholder for a future front garden photograph showing the outdoor seating area at The Old School House."
                className="media-lift h-[15rem] md:col-span-2 md:h-[16rem] lg:col-span-2"
              />
            </div>
            <div className="surface-frame grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.92fr_0.92fr_1.16fr]">
              {atmosphereMoments.map((moment, index) => (
                <article
                  key={moment.title}
                  className={cn(
                    "surface-pane bg-[var(--color-surface-lowest)]",
                    index === 2 && "surface-pane-muted"
                  )}
                >
                  <h3 className="font-sans text-xl font-semibold text-secondary">
                    {moment.title}
                  </h3>
                  <p className="pt-2 text-sm leading-7 text-on-surface md:text-base">
                    {moment.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Events and offers"
              title="Private hire, tasting nights, sport, and repeat reasons to stop by."
              description="Round everyone up for a birthday table, meet at the bar for the match, or plan a bigger gathering with food, drinks, and room to settle in."
              invert
            />
            <Button asChild size="lg" variant="secondary">
              <Link href="/events">
                Ask about private hire
                <UsersThree />
              </Link>
            </Button>
          </div>
          <div className="night-panel overflow-hidden p-0">
            <div className="grid gap-px bg-white/10 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="bg-black/12 px-5 py-6 md:px-6 md:py-7">
                <div className="space-y-3">
                  <div className="night-rule" />
                  <p className="night-kicker">Good for</p>
                </div>
                <div className="mt-5 grid gap-3 text-sm leading-7 sm:grid-cols-2 lg:grid-cols-1">
                  {eventOccasions.slice(0, 4).map((occasion) => (
                    <div key={occasion} className="night-tile">
                      {occasion}
                    </div>
                  ))}
                </div>
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/72">
                  From birthday dinners to match nights, the pub suits the kind
                  of plans that start small and often grow once everyone says
                  yes.
                </p>
              </div>
              <div className="px-5 py-6 md:px-6 md:py-7">
                <div className="space-y-3">
                  <div className="night-rule" />
                  <p className="night-kicker">Why it works</p>
                </div>
                <div className="mt-5 space-y-5">
                  {eventsHighlights.map((highlight) => (
                    <article
                      key={highlight.title}
                      className="space-y-2 border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                    >
                      <h3 className="font-sans text-xl font-semibold text-[var(--color-on-tertiary-container)]">
                        {highlight.title}
                      </h3>
                      <p className="max-w-2xl text-sm leading-7 text-white/76 md:text-base">
                        {highlight.description}
                      </p>
                    </article>
                  ))}
                </div>
                <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-7 text-white/74">
                  Front garden, private courtyard, and room inside mean the
                  evening can feel relaxed from first drink to final round.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Before you visit"
              title="Helpful local details guests often search for before choosing a pub in Stony Stratford."
              description="Parking, dog-friendly space, Wi-Fi, food hours, and live sport are often part of the decision, so they are worth making clear on the page."
            />
            <div className="surface-frame">
              <div className="surface-pane surface-pane-muted">
                <p className="eyebrow">Food hours</p>
                <div className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {foodHours.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
              {localFaqs.map((faq, index) => (
                <details
                  key={faq.question}
                  name="before-you-visit-faq"
                  open={index === 0}
                  className={cn(
                    "faq-item bg-[var(--color-surface-lowest)]",
                    index % 2 === 0 && "surface-pane-muted"
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 md:px-7 md:py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="font-sans text-xl font-semibold text-secondary">
                      {faq.question}
                    </h3>
                    <CaretDown className="faq-icon mt-1 size-5 shrink-0 text-secondary transition-transform duration-200" />
                  </summary>
                  <div className="px-5 pb-5 md:px-7 md:pb-6">
                    <p className="text-sm leading-7 text-on-surface md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Visit"
              title="Easy to find, easy to call, and well worth coming by."
              description="If you are heading into Stony Stratford, everything you need is here: where to find us, when we are open, and how to get in touch."
            />
            <div className="surface-frame">
              <div className="surface-pane">
                <div className="grid gap-4 text-sm leading-7 text-on-surface">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>{siteAddress}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>
                      {openingHours[0].label}: {openingHours[0].hours}
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>
                      <a
                        href={sitePhoneHref}
                        className="transition hover:text-secondary"
                      >
                        {sitePhone}
                      </a>
                      {" · "}
                      <a
                        href={siteEmailHref}
                        className="transition hover:text-secondary"
                      >
                        {siteEmail}
                      </a>
                    </span>
                  </p>
                </div>
                <div className="surface-divider my-5 h-px" />
                <div className="space-y-3 text-sm leading-7 text-on-surface">
                  {arrivalNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/find-us">Find us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={mapHref} target="_blank" rel="noreferrer">
                  Open map
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-16 md:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
          <SectionHeading
            eyebrow="Neighbourhood fit"
            title="The sort of place that fits easily into local life."
            description="Drop in for one drink, plan a family meal, meet friends in town, or make it your regular Sunday stop. It is made for the repeat visits as much as the one-off plans."
            className="lg:sticky lg:top-28"
          />
          <div className="surface-frame grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.95fr_0.95fr_1.1fr]">
            {communityNotes.map((note, index) => (
              <article
                key={note.title}
                className={cn(
                  "surface-pane bg-[var(--color-surface-lowest)]",
                  index === 2 && "surface-pane-muted"
                )}
              >
                <h3 className="font-heading text-2xl">{note.title}</h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {note.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
