import type { Metadata } from "next"
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"

import { siteEmailHref, sitePhone, sitePhoneHref } from "@/data/site"

export const metadata: Metadata = {
  title: "Wakes & Celebration of Life Food",
  description:
    "Talk to The Old School House about food and drinks for wakes and celebration of life gatherings in a calm, straightforward way.",
  alternates: {
    canonical: "/wakes-menu",
  },
}

const wakePlanningCards = [
  {
    title: "Start with guest numbers and timing",
    description:
      "If you know roughly how many people may come and when they are likely to arrive, that gives us the best place to start.",
  },
  {
    title: "Food usually works best when it is simple and easy to share",
    description:
      "Buffet-style food and straightforward drinks service usually suit gatherings where people arrive gradually and want things to feel easy rather than formal.",
  },
  {
    title: "Tell us what would make the day feel easier",
    description:
      "Dietary needs, quieter corners, extra space for family, or anything else that matters to the group can all be part of the conversation.",
  },
]

const wakeSupportNotes = [
  "A conversation usually works better than a fixed package.",
  "We can talk through food, drinks, timings, and the feel of the room.",
  "If email is easier first, send the basics and we will take it from there.",
]

export default function WakesMenuPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wakes menu"
        title="A calm, straightforward way to talk through food and drinks for a wake."
        description="These gatherings are personal, so we would rather talk it through with you and help you shape the right plan."
        primaryAction={{
          href: sitePhoneHref,
          label: "Call to talk it through",
        }}
        secondaryAction={{ href: siteEmailHref, label: "Email the team" }}
      />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Planning support"
              title="The aim is to make the arranging part feel easier."
              description="Call us with the rough shape of the gathering and we will help you work towards something warm, simple, and considerate."
            />
            <SiteActionCard
              actions={[
                {
                  href: sitePhoneHref,
                  label: "Call the pub",
                  icon: <Phone className="size-4" />,
                },
                {
                  href: siteEmailHref,
                  label: "Email the team",
                  icon: <EnvelopeSimple className="size-4" />,
                },
              ]}
              showDivider
            />
          </div>

          <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-4">
            <div className="space-y-4 text-sm leading-7 text-on-surface md:text-base">
              {wakeSupportNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
              <p>
                The quickest way to begin is to call{" "}
                <a
                  href={sitePhoneHref}
                  className="text-secondary transition hover:text-secondary/80"
                >
                  {sitePhone}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {wakePlanningCards.map((card, index) => (
              <article
                key={card.title}
                className={
                  index === 1
                    ? "surface-frame surface-pane surface-pane-muted"
                    : "surface-frame surface-pane bg-[var(--color-surface-lowest)]"
                }
              >
                <h2 className="section-title">{card.title}</h2>
                <p className="pt-4 text-sm leading-7 text-on-surface md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] md:grid-cols-[0.95fr_1.05fr]">
              <div className="surface-pane bg-[var(--color-surface-lowest)]">
                <h2 className="section-title">What is useful to tell us</h2>
                <p className="pt-4 text-sm leading-7 text-on-surface md:text-base">
                  Guest numbers, timing, food style, dietary notes, and how you
                  want the gathering to feel are all useful things to mention at
                  the start.
                </p>
              </div>
              <div className="surface-pane surface-pane-muted">
                <h2 className="section-title">What you can expect from us</h2>
                <p className="pt-4 text-sm leading-7 text-on-surface md:text-base">
                  A calm conversation, clear next steps, and help shaping
                  something that suits the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Need a table while the bigger plans take shape?"
        description="If the immediate need is just a family table or a quiet meal, you can sort that now and come back to the wider arrangements later."
      />
    </main>
  )
}
