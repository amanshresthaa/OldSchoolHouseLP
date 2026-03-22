import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRight,
  CalendarDots,
  Clock,
  ForkKnife,
  MapPin,
  Phone,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import {
  arrivalNotes,
  atmosphereMoments,
  communityNotes,
  eventsHighlights,
  heroSignals,
  homeMenuHighlights,
  homeReasons,
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
import { featuredMenuItems, formatPrice } from "@/lib/menu"

import heroImage from "@/images/food/table-food.png"
import tastingImage from "@/images/food/kathmandu-tikka-masala.png"
import grillImage from "@/images/food/mixed-grill.png"
import startersImage from "@/images/food/samosas-with-salad.png"

export default function Page() {
  return (
    <main>
      <Script
        id="old-school-house-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
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
        <div className="section-shell relative flex min-h-[calc(100svh-4.25rem)] flex-col justify-end py-10 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div className="max-w-3xl space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
                  {siteName}
                </p>
                <h1 className="display-copy max-w-4xl text-white">
                  Pub favourites, Nepalese cooking, and a warm welcome in Stony
                  Stratford.
                </h1>
              </div>
              <p className="max-w-2xl text-base leading-7 text-white/78 md:text-lg">
                Settle in on London Road for a pint, a table full of good food,
                or an easy evening with friends. From laid-back lunches to
                private celebrations, The Old School House is made for coming
                back to.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
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
                  className="border-white/14 bg-white/10 text-white hover:bg-white/16 hover:text-white"
                >
                  <Link href="/menu">
                    View menu
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-3 text-sm text-white/78 sm:grid-cols-3">
                {heroSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 backdrop-blur-sm"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            <div className="paper-panel hidden bg-white/12 text-white/80 backdrop-blur-xl lg:block">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
                  Tonight at a glance
                </p>
                <div className="space-y-4 text-sm leading-7">
                  <p className="flex items-start gap-3">
                    <Clock className="mt-1 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
                    <span>
                      {openingHours[0].label}: {openingHours[0].hours}
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-1 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
                    <span>{siteLocation}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="mt-1 size-4 shrink-0 text-[var(--color-on-tertiary-container)]" />
                    <a
                      href={sitePhoneHref}
                      className="transition hover:text-white"
                    >
                      {sitePhone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-5">
        <div className="section-shell overflow-x-auto">
          <div className="flex min-w-max items-center gap-4 text-sm font-semibold tracking-[0.16em] text-on-surface uppercase">
            {proofPoints.map((point, index) => (
              <div key={point} className="flex items-center gap-4">
                <span>{point}</span>
                {index < proofPoints.length - 1 ? (
                  <span className="text-[var(--color-tertiary-fixed-dim)]">
                    /
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Why choose us"
              title="A proper local with a little more flavour, a little more warmth, and plenty to come back for."
              description="The Old School House keeps the feel of a characterful pub while giving you more reasons to stay: good food, easy drinks, a warm welcome, and a menu that goes beyond the expected."
            />
            <Image
              src={startersImage}
              alt="Samosas plated with salad and chutneys at The Old School House."
              className="h-[22rem] w-full rounded-[2rem] object-cover md:h-[28rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="space-y-8 pt-1">
            {homeReasons.map((reason) => (
              <article key={reason.title} className="space-y-3">
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
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Menu preview"
              title="From familiar pub comfort to dishes worth passing around the table."
              description="Whether you are keeping it classic or ordering across the Nepalese side of the menu, there is plenty here for a quick meal, a family table, or a longer dinner."
            />
            <div className="space-y-5">
              {homeMenuHighlights.map((highlight) => (
                <article key={highlight.title} className="space-y-2">
                  <h3 className="font-sans text-xl font-semibold text-secondary">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-7 text-on-surface md:text-base">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
            <Button asChild size="lg">
              <Link href="/menu">
                Explore the menu
                <ForkKnife />
              </Link>
            </Button>
          </div>
          <div className="rounded-[2rem] bg-[var(--color-surface-lowest)] p-5 md:p-7">
            <div className="grid gap-5">
              {featuredMenuItems.map((item) => (
                <article key={item.name} className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-sans text-lg font-semibold text-secondary">
                      {item.name}
                    </h3>
                    <p className="shrink-0 text-sm font-medium text-on-surface">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  {item.description ? (
                    <p className="text-sm leading-6 text-on-surface">
                      {item.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Book ahead for dinner, drinks, or an easy catch-up in town."
        description="If you know when you want to come in, booking ahead is the easiest way to get the table sorted and the evening off to a smooth start."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell space-y-10">
          <SectionHeading
            eyebrow="Atmosphere"
            title="Good food, easy company, and a setting made for lingering."
            description="Think exposed brick, wooden floors, generous plates, and the sort of room that works just as well for a quick lunch as it does for a longer evening with friends."
          />
          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.9fr_0.9fr]">
            <Image
              src={heroImage}
              alt="A richly set dining table with dishes and drinks ready to share."
              className="h-[22rem] w-full rounded-[2rem] object-cover md:h-[32rem]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <Image
              src={tastingImage}
              alt="Kathmandu tikka masala plated with vibrant sauce and garnish."
              className="h-[15rem] w-full rounded-[2rem] object-cover md:h-[32rem]"
              sizes="(min-width: 1024px) 29vw, 100vw"
            />
            <Image
              src={grillImage}
              alt="A mixed grill platter with skewers, grilled meats, and salad."
              className="h-[15rem] w-full rounded-[2rem] object-cover md:h-[32rem]"
              sizes="(min-width: 1024px) 29vw, 100vw"
            />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {atmosphereMoments.map((moment) => (
              <article key={moment.title} className="space-y-2">
                <h3 className="font-sans text-xl font-semibold text-secondary">
                  {moment.title}
                </h3>
                <p className="text-sm leading-7 text-on-surface md:text-base">
                  {moment.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Events and offers"
              title="Private hire, tasting nights, sport, and repeat reasons to stop by."
              description="Round everyone up for a birthday table, meet at the bar for the match, or plan a bigger gathering with food, drinks, and room to settle in."
              invert
            />
            <div className="space-y-5">
              {eventsHighlights.map((highlight) => (
                <article key={highlight.title} className="space-y-2">
                  <h3 className="font-sans text-xl font-semibold text-[var(--color-on-tertiary-container)]">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/74 md:text-base">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/events">
                Ask about private hire
                <UsersThree />
              </Link>
            </Button>
          </div>
          <div className="paper-panel bg-white/10 text-white/78 backdrop-blur-xl">
            <div className="space-y-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
                Best-fit occasions
              </p>
              <div className="grid gap-3 text-sm leading-7 md:grid-cols-2">
                <div className="rounded-2xl bg-white/8 px-4 py-4">
                  Birthday dinners and longer-table gatherings
                </div>
                <div className="rounded-2xl bg-white/8 px-4 py-4">
                  Work drinks and after-match socials
                </div>
                <div className="rounded-2xl bg-white/8 px-4 py-4">
                  Quiz-style nights and theme-led evenings
                </div>
                <div className="rounded-2xl bg-white/8 px-4 py-4">
                  Sports watch parties and team meetups
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-16 md:py-20">
        <div className="section-shell space-y-8">
          <SectionHeading
            eyebrow="Neighbourhood fit"
            title="The sort of place that fits easily into local life."
            description="Drop in for one drink, plan a family meal, meet friends in town, or make it your regular Sunday stop. It is built for the repeat visits as much as the one-off plans."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {communityNotes.map((note) => (
              <article
                key={note.title}
                className="rounded-[1.6rem] bg-[var(--color-surface-lowest)] px-5 py-6"
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

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Visit"
              title="Easy to find, easy to call, and simple to plan."
              description="If you are heading into Stony Stratford, everything you need is here: where to find us, when we are open, and how to get in touch."
            />
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
            <div className="space-y-3 text-sm leading-7 text-on-surface">
              {arrivalNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
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
    </main>
  )
}
