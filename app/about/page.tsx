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
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import {
  aboutFamilyNotes,
  aboutLocationHighlights,
  aboutOperatorNotes,
  aboutPubFacts,
  aboutReasons,
  aboutStoryNotes,
  lapenInnsHref,
  siteEmailHref,
} from "@/data/site"

import heroImage from "@/images/food/table-food.png"

export const metadata: Metadata = {
  title: "About The Old School House",
  description:
    "Learn the story behind The Old School House in Stony Stratford, from the character of the building to the Nepalese kitchen and the team behind the pub.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="The story behind a proper Stony Stratford pub with a Nepalese kitchen."
        description="Previously known as The Plough, The Old School House brings together classic pub character, a broader food story, and enough room to settle in properly."
        primaryAction={{ href: "/book", label: "Book a table" }}
        secondaryAction={{ href: "/menu", label: "Browse the menu" }}
      />

      <section className="bg-background py-12 md:py-16">
        <div className="section-shell">
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.8fr_1.2fr]">
              <div className="surface-pane surface-pane-muted">
                <SectionHeading
                  eyebrow="Why people choose it"
                  title="It feels familiar in the right ways, but gives you more than the usual pub stop."
                  description="The building gives the pub its character. The kitchen gives it range. Together they make it easy to return for drinks, dinner, and bigger plans."
                />
                <div className="mt-5 space-y-4 text-sm leading-7 text-on-surface md:text-base">
                  {aboutStoryNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
                <Image
                  src={heroImage}
                  alt="A table of pub plates, Nepalese dishes, and drinks at The Old School House."
                  className="media-lift mt-6 h-[18rem] w-full rounded-[2rem] object-cover md:h-[24rem] lg:h-[28rem]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="grid gap-px bg-[rgba(196,189,181,0.18)] sm:grid-cols-2">
                {aboutReasons.map((reason, index) => (
                  <article
                    key={reason.title}
                    className={`surface-pane ${index === 0 ? "bg-[var(--color-surface-lowest)] sm:col-span-2" : index === 1 ? "surface-pane-muted" : "bg-[var(--color-surface-lowest)]"}`}
                  >
                    <h2 className="text-[1.8rem] leading-tight">
                      {reason.title}
                    </h2>
                    <p className="pt-4 text-sm leading-7 text-on-surface md:text-base">
                      {reason.description}
                    </p>
                  </article>
                ))}
                <div className="surface-pane surface-pane-muted sm:col-span-2">
                  <p className="eyebrow">What the space gives you</p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {aboutPubFacts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rounded-[1.35rem] bg-[var(--color-surface-lowest)] px-5 py-4"
                      >
                        <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                          {fact.label}
                        </p>
                        <p className="pt-2 text-sm leading-7 text-on-surface md:text-base">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-14 md:py-20">
        <div className="section-shell">
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.72fr_1.28fr]">
              <div className="surface-pane bg-[var(--color-surface-lowest)]">
                <SectionHeading
                  eyebrow="The people behind it"
                  title={
                    'Led by Sanjog "San" Gautam, with the wider Lapen Inns family behind the pub.'
                  }
                  description="The aim is not to replace the classic pub feel. It is to keep that welcome intact and add a food offer strong enough to make the place stand out."
                />
                <p className="mt-5 max-w-xl text-sm leading-7 text-on-surface md:text-base">
                  The result is a pub that still feels rooted in Stony
                  Stratford, but has a clearer point of difference once you sit
                  down and order.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild size="lg">
                    <Link href="/book">
                      Book a table
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href={siteEmailHref}>Ask the team a question</a>
                  </Button>
                </div>
              </div>
              <div className="grid gap-px bg-[rgba(196,189,181,0.18)] md:grid-cols-2">
                <article className="surface-pane bg-[var(--color-surface-lowest)]">
                  <div className="flex items-center gap-3">
                    <ForkKnife className="size-5 text-secondary" />
                    <h2 className="text-[2rem]">
                      San&apos;s hospitality approach
                    </h2>
                  </div>
                  <div className="space-y-4 pt-4 text-sm leading-7 text-on-surface md:text-base">
                    {aboutOperatorNotes.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                  </div>
                </article>
                <article className="surface-pane surface-pane-muted">
                  <div className="flex items-center gap-3">
                    <Buildings className="size-5 text-secondary" />
                    <h2 className="text-[2rem]">
                      Part of the Lapen Inns family
                    </h2>
                  </div>
                  <div className="space-y-4 pt-4 text-sm leading-7 text-on-surface md:text-base">
                    {aboutFamilyNotes.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                    <p>
                      You can see more of the wider group at{" "}
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
                <article className="surface-pane surface-pane-muted md:col-span-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5 text-secondary" />
                    <h2 className="text-[2rem]">Why the location helps</h2>
                  </div>
                  <div className="mt-4 grid gap-3 lg:grid-cols-3">
                    {aboutLocationHighlights.map((item, index) => (
                      <div
                        key={item.title}
                        className={`rounded-[1.35rem] px-5 py-4 ${index === 1 ? "bg-[var(--color-surface-lowest)]" : "bg-[var(--color-surface-low)]/72"}`}
                      >
                        <p className="font-sans text-lg font-semibold text-secondary">
                          {item.title}
                        </p>
                        <p className="pt-2 text-sm leading-7 text-on-surface md:text-base">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid gap-3 text-sm leading-7 md:grid-cols-3 md:text-base">
                    <Link
                      href="/find-us"
                      className="rounded-[1.35rem] bg-[var(--color-surface-lowest)] px-4 py-4 text-on-surface transition hover:-translate-y-0.5"
                    >
                      Plan the journey
                    </Link>
                    <Link
                      href="/events"
                      className="rounded-[1.35rem] bg-[var(--color-surface-lowest)] px-4 py-4 text-on-surface transition hover:-translate-y-0.5"
                    >
                      See group and private hire options
                    </Link>
                    <a
                      href={siteEmailHref}
                      className="rounded-[1.35rem] bg-[var(--color-surface-lowest)] px-4 py-4 text-on-surface transition hover:-translate-y-0.5"
                    >
                      Ask the team a question
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Next step"
            title="Now you know the shape of the place, the best part is coming in."
            description="Whether you are planning dinner, drinks, or a bigger get-together, the rest of the site can help you move from browsing to booking."
            invert
          />
          <div className="night-panel space-y-4 text-sm leading-7 md:text-base">
            <p>
              Start with the menu if you want to get a feel for the food, head
              to find us if you are planning the journey, or book now if you
              already know this is your kind of pub.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" variant="secondary">
                <Link href="/book">
                  Book a table
                  <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/12 bg-black/16 text-white hover:bg-black/24 hover:text-white"
              >
                <Link href="/find-us">
                  Find us
                  <MapPin />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
