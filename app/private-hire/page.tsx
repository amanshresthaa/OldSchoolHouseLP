import type { Metadata } from "next"
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import { siteEmailHref, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/private-hire")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

const suitabilityCards = [
  {
    title: "Birthdays and family gatherings",
    description:
      "The mix of pub comfort and stronger food identity makes The Old School House a better fit than a plain drinks venue when the gathering needs to feel a bit more considered.",
  },
  {
    title: "Wakes and life celebrations",
    description:
      "A calmer, more straightforward planning route matters here. The aim is to keep the conversation clear and the day itself easier to handle.",
  },
  {
    title: "Work drinks and sports socials",
    description:
      "Informal groups want room, drinks, and food that keeps everyone happy without turning the booking into a formal event package.",
  },
]

const practicalCards = [
  {
    title: "Indoor and outdoor flexibility",
    description:
      "With 65 covers inside and 60 outside across the front garden and courtyard, the venue can flex around seated meals, drinks-led plans, and mixed setups.",
  },
  {
    title: "Food that suits mixed groups",
    description:
      "The menu works well when some guests want the comfort of a traditional pub order and others want to try the Nepalese kitchen.",
  },
  {
    title: "Simple enquiry process",
    description:
      "The best way in is a quick email or phone call with rough numbers, dates, and the kind of gathering you have in mind.",
  },
]

const enquiryChecklist = [
  "Your preferred date and rough arrival time",
  "Estimated guest numbers",
  "Whether the plan is food-led, drinks-led, or mixed",
  "Any reason the gathering needs to feel especially calm, flexible, or private",
  "Anything we should know about timing, seating, or the shape of the room",
]

const privateHireFaqs = [
  {
    question: "What kinds of occasions suit The Old School House?",
    answer:
      "The pub suits birthdays, family gatherings, work drinks, sports socials, wakes, and other informal occasions that need a welcoming room and a clear planning route.",
  },
  {
    question: "Do I need a fully private room to enquire?",
    answer:
      "No. Many group plans work best as a dedicated area, longer table, or shaped-up section of the pub rather than a formal function room.",
  },
  {
    question: "Can you help with food and drinks for groups?",
    answer:
      "Yes. The menu and drinks offer can be discussed around the kind of gathering you are planning and how you want the visit to feel.",
  },
]

export default function PrivateHirePage() {
  return (
    <main>
      <PageHero {...route!.hero!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What the venue suits"
              title="Private hire here is about flexibility, not over-formality."
              description="The pub works best for occasions that still want warmth, food, and a sociable room around them, rather than a stiff event space with no sense of place."
            />
            <SiteActionCard
              actions={[
                {
                  href: siteEmailHref,
                  label: "Make an enquiry",
                  icon: <EnvelopeSimple className="size-4" />,
                },
                {
                  href: sitePhoneHref,
                  label: "Call the pub",
                  icon: <Phone className="size-4" />,
                },
              ]}
              supportingText="Tell us the rough date, numbers, and shape of the gathering first. We can work from there."
              showDivider
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {suitabilityCards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index === 1
                    ? "surface-pane-muted"
                    : "bg-[var(--color-surface-lowest)]"
                }`}
              >
                <h2 className="section-title">{card.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Practical fit"
            title="Enough room, enough menu flexibility, and a clearer planning path."
            description="Private hire conversion is stronger when the page answers the practical questions quickly and keeps the enquiry friction low."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {practicalCards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index === 1
                    ? "surface-pane-muted"
                    : "bg-[var(--color-surface-lowest)]"
                }`}
              >
                <h2 className="section-title">{card.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Just need a normal table for now?"
        description="If this is still only food and drinks rather than a larger occasion, book a table now and come back to private hire if the plans grow."
      />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="What to send in your enquiry"
            title="A little context makes the conversation easier."
            description="We do not need a perfect brief. We just need enough to understand whether the pub, the table shape, and the food direction are the right fit."
          />
          <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6">
            <ol className="space-y-3 text-sm leading-7 text-on-surface md:text-base">
              {enquiryChecklist.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="Private hire FAQs"
        title="The aim is to answer enough before you need to call."
        description="That keeps the page commercial and useful without making the process feel formal or heavy."
        faqs={privateHireFaqs}
      />

      <PageSignoff
        eyebrow="Next step"
        title="Send the basics and we will help shape the rest."
        body={
          <p>
            A clear email or a quick call is all it takes to move from “could
            this work?” to the first practical next step.
          </p>
        }
        actions={[
          {
            href: siteEmailHref,
            label: "Make an enquiry",
            icon: <EnvelopeSimple className="size-4" />,
          },
          {
            href: sitePhoneHref,
            label: "Call the pub",
            icon: <Phone className="size-4" />,
          },
        ]}
      />
    </main>
  )
}
