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
              into a bar, front garden, and courtyard built for longer evenings.
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
              <div className="shrink-0 bg-secondary px-3 py-2.5 text-[0.52rem] font-semibold tracking-[0.12em] text-white uppercase md:px-4 md:text-[0.58rem]">
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

      <section className="bg-background py-12 md:py-16">
        <div className="section-shell">
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="surface-pane surface-pane-muted order-1">
                <SectionHeading
                  eyebrow="Why choose us"
                  title="A proper pub with a Nepalese kitchen worth coming back for."
                  description="Familiar pub comfort, a stronger food story, and a room that stays relaxed from first drink to last bite."
                />
                <Image
                  src={startersImage}
                  alt="Samosas plated with salad and chutneys at The Old School House."
                  className="media-lift mt-5 h-[16rem] w-full rounded-[1.9rem] object-cover md:h-[20rem] lg:h-[22rem]"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              </div>
              <div className="order-2 grid gap-px bg-[rgba(196,189,181,0.18)] sm:grid-cols-2 lg:order-3">
                {homeReasons.map((reason, index) => (
                  <article
                    key={reason.title}
                    className={cn(
                      "surface-pane bg-[var(--color-surface-lowest)]",
                      index === 0 && "sm:col-span-2"
                    )}
                  >
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      Why it works
                    </p>
                    <h3 className="pt-3 font-sans text-xl font-semibold text-secondary md:text-2xl">
                      {reason.title}
                    </h3>
                    <p className="pt-2 text-sm leading-6 text-on-surface md:text-base md:leading-7">
                      {reason.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-14 md:py-20">
        <div className="section-shell space-y-6 md:space-y-8">
          <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <div className="min-w-0 space-y-5 lg:pb-4">
              <SectionHeading
                eyebrow="Menu preview"
                title="If it is your first visit, start on the Nepalese side."
                description="Start with momo, move into mixed grills or curry, and keep things easy for everyone else with familiar pub plates."
              />
              <div className="surface-frame overflow-hidden">
                <MenuCategoryScroller links={menuPreviewLinks} />
              </div>
              <p className="max-w-xl text-sm leading-6 text-on-surface md:text-base md:leading-7">
                For a first visit, think one shareable opener, one bigger plate
                for the middle, then one house favourite.
              </p>
              <div className="hidden flex-col gap-3 sm:flex-row lg:flex">
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
                      className={cn("min-w-0", index !== 0 && "max-w-[14rem]")}
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
                <p className="pt-3 text-sm leading-6 text-on-surface md:text-base md:leading-7">
                  Keep it simple: one opener, one bigger middle plate, then a
                  house favourite.
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
                        <p className="text-sm leading-6 text-on-surface">
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
          <div className="flex flex-col gap-3 sm:flex-row lg:hidden">
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
      </section>

      <InlineBookingCta
        title="Book ahead and arrive knowing your table is waiting."
        description="Dinner, drinks, or an easy catch-up all start better when the table is already sorted."
      />

      <section className="bg-background py-14 md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
          <div className="contents lg:sticky lg:top-28 lg:block lg:space-y-5">
            <SectionHeading
              eyebrow="Guest reviews"
              title="What guests talk about after a visit."
              description="Good food, good drinks, and a room that makes staying for another round easy."
              className="order-1"
            />
            <div className="surface-frame order-3 lg:mt-5">
              <div className="surface-pane surface-pane-muted">
                <p className="eyebrow">Share your visit</p>
                <p className="pt-3 text-sm leading-6 text-on-surface md:text-base md:leading-7">
                  Leave a quick note on Google and help the next guest decide.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
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
          <div className="surface-frame relative order-2 overflow-hidden lg:order-none">
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

      <section className="bg-background py-12 md:py-16">
        <div className="section-shell">
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
              <div className="grid gap-px bg-[rgba(196,189,181,0.18)] xl:grid-cols-[0.92fr_1.08fr]">
                <div className="surface-pane surface-pane-muted">
                  <SectionHeading
                    eyebrow="Atmosphere"
                    title="A setting made for easy lunches and longer evenings."
                    description="From the front garden to the dining room, it stays relaxed and easy to settle into."
                  />
                </div>
                <div className="grid gap-px bg-[rgba(196,189,181,0.18)] sm:grid-cols-3">
                  {atmosphereMoments.map((moment, index) => (
                    <article
                      key={moment.title}
                      className={cn(
                        "surface-pane bg-[var(--color-surface-lowest)]",
                        index === 1 && "surface-pane-muted"
                      )}
                    >
                      <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                        Around the pub
                      </p>
                      <h3 className="pt-3 font-sans text-lg font-semibold text-secondary md:text-xl">
                        {moment.title}
                      </h3>
                      <p className="pt-2 text-sm leading-6 text-on-surface md:leading-7">
                        {moment.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="surface-pane bg-[var(--color-surface-lowest)]">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <VenuePhotoPlaceholder
                    title="Exterior"
                    alt="Placeholder for a future exterior photograph of The Old School House on London Road, showing the brick frontage and entrance."
                    className="media-lift h-[14rem] sm:col-span-2 xl:col-span-2 xl:row-span-2 xl:h-[23rem]"
                  />
                  <VenuePhotoPlaceholder
                    title="Bar"
                    alt="Placeholder for a future bar photograph showing the single-bar setup inside The Old School House."
                    className="media-lift h-[11rem] xl:h-[11rem]"
                  />
                  <VenuePhotoPlaceholder
                    title="Dining Room"
                    alt="Placeholder for a future dining room photograph showing exposed brick, wooden floors, and guest seating inside The Old School House."
                    className="media-lift h-[11rem] xl:h-[11rem]"
                  />
                  <VenuePhotoPlaceholder
                    title="Front Garden"
                    alt="Placeholder for a future front garden photograph showing the outdoor seating area at The Old School House."
                    className="media-lift h-[11rem] sm:col-span-2 xl:col-span-2 xl:h-[11.5rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-white md:py-16">
        <div className="section-shell">
          <div className="night-panel overflow-hidden p-0">
            <div className="grid gap-px bg-white/10 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="bg-black/12 px-5 py-6 md:px-7 md:py-7">
                <p className="night-kicker">Events and offers</p>
                <h2 className="mt-3 max-w-xl text-white">
                  Private hire, sport nights, and good reasons to come back.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-white/76 md:text-base md:leading-7">
                  Good for birthday tables, work drinks, watch nights, and easy
                  group plans that need food, drinks, and room to settle in.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {eventOccasions.slice(0, 4).map((occasion) => (
                    <div
                      key={occasion}
                      className="rounded-[1.35rem] bg-white/6 px-4 py-3 text-sm leading-6 text-white/84"
                    >
                      {occasion}
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" variant="secondary" className="mt-5">
                  <Link href="/events">
                    Ask about private hire
                    <UsersThree />
                  </Link>
                </Button>
              </div>
              <div className="px-5 py-6 md:px-7 md:py-7">
                <div className="grid gap-3 xl:grid-cols-3">
                  {eventsHighlights.map((highlight) => (
                    <article
                      key={highlight.title}
                      className="rounded-[1.45rem] bg-white/6 px-4 py-4"
                    >
                      <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)] uppercase">
                        Why it works
                      </p>
                      <h3 className="pt-3 font-sans text-lg font-semibold text-white">
                        {highlight.title}
                      </h3>
                      <p className="pt-2 text-sm leading-6 text-white/76">
                        {highlight.description}
                      </p>
                    </article>
                  ))}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {eventOccasions.slice(4).map((occasion) => (
                    <div
                      key={occasion}
                      className="rounded-[1.35rem] border border-white/10 px-4 py-3 text-sm leading-6 text-white/72"
                    >
                      {occasion}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-[1.45rem] bg-[linear-gradient(135deg,rgba(212,160,23,0.14),rgba(255,255,255,0.04))] px-4 py-4 text-sm leading-6 text-white/78 md:px-5">
                  Front garden, private courtyard, and room inside keep bigger
                  plans feeling relaxed from first drink to last round.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="section-shell">
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.88fr_1.12fr]">
              <div className="surface-pane surface-pane-muted">
                <SectionHeading
                  eyebrow="Before you visit"
                  title="Helpful details before you choose a table."
                  description="Parking, dogs, Wi-Fi, food hours, and live sport."
                />
                <div className="mt-5 rounded-[1.45rem] bg-[var(--color-surface-lowest)] px-4 py-4 md:px-5">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Food hours
                  </p>
                  <div className="space-y-2 pt-3 text-sm leading-6 text-on-surface md:text-base md:leading-7">
                    {foodHours.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
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
              <div className="grid gap-px bg-[rgba(196,189,181,0.18)]">
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
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 md:px-7 md:py-5 [&::-webkit-details-marker]:hidden">
                      <h3 className="font-sans text-xl font-semibold text-secondary">
                        {faq.question}
                      </h3>
                      <CaretDown className="faq-icon mt-1 size-5 shrink-0 text-secondary transition-transform duration-200" />
                    </summary>
                    <div className="px-5 pb-4 md:px-7 md:pb-5">
                      <p className="text-sm leading-6 text-on-surface md:text-base md:leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="contents lg:block lg:space-y-5">
            <SectionHeading
              eyebrow="Visit"
              title="Easy to find and easy to call."
              description="Everything you need before you head over."
              className="order-1"
            />
            <div className="surface-frame order-3 lg:mt-5">
              <div className="surface-pane">
                <div className="grid gap-4 text-sm leading-6 text-on-surface md:leading-7">
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
                <div className="space-y-3 text-sm leading-6 text-on-surface md:leading-7">
                  {arrivalNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-4 flex flex-col gap-3 sm:flex-row lg:mt-5">
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
          <MapEmbed className="order-2 lg:order-none" />
        </div>
      </section>
    </main>
  )
}
