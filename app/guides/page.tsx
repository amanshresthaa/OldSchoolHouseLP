import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ForkKnife,
  MapPin,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { SectionHeading } from "@/components/site/SectionHeading"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/guides")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

const guideGroups = [
  {
    eyebrow: "Local guide",
    title: "Start with the outing itself",
    description:
      "These pages help when the question is still where to go, not yet whether to book.",
    href: "/where-to-eat-in-stony-stratford",
    icon: MapPin,
  },
  {
    eyebrow: "Food guide",
    title: "Start with the Nepalese side of the menu",
    description:
      "Useful if the food curiosity is there, but you want it explained simply before you decide.",
    href: "/what-is-nepalese-food",
    icon: ForkKnife,
  },
  {
    eyebrow: "Comparison guide",
    title: "Start with why this pub feels different",
    description:
      "Best when you are comparing options and want to understand what makes the pub plus Nepalese kitchen model work.",
    href: "/traditional-pub-with-nepalese-kitchen",
    icon: Sparkle,
  },
]

const linkedGuides = [
  {
    href: "/where-to-eat-in-stony-stratford",
    title: "Where to eat in Stony Stratford",
    description:
      "A local discovery route for diners who know the town but have not chosen the venue yet.",
  },
  {
    href: "/what-is-nepalese-food",
    title: "What is Nepalese food?",
    description:
      "A simple introduction to the dishes and why they work so well in a pub setting here.",
  },
  {
    href: "/momo",
    title: "What is momo?",
    description:
      "Start with the signature dish that makes the kitchen easy to try for first-timers.",
  },
  {
    href: "/nepalese-vs-indian-food",
    title: "Nepalese vs Indian food",
    description:
      "A straightforward comparison page for guests who want a little more context before ordering.",
  },
  {
    href: "/traditional-pub-with-nepalese-kitchen",
    title: "Traditional pub with a Nepalese kitchen",
    description:
      "A comparison-led page showing why the venue feels clear rather than confused.",
  },
]

export default function GuidesPage() {
  return (
    <main>
      <PageHero {...route!.hero!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="How to use these guides"
            title="The best guide depends on what kind of question you are trying to answer."
            description="Some guests need help choosing where to eat in Stony Stratford. Others want to understand the Nepalese dishes first. Others are already comparing this pub with more standard options."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {guideGroups.map((group, index) => {
              const Icon = group.icon

              return (
                <Link
                  key={group.href}
                  href={group.href}
                  className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6 ${
                    index === 1
                      ? "surface-pane-muted"
                      : "bg-[var(--color-surface-lowest)]"
                  }`}
                >
                  <Icon className="size-5 text-secondary" />
                  <p className="pt-3 text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    {group.eyebrow}
                  </p>
                  <h2 className="section-title pt-3">{group.title}</h2>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    {group.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80">
                    Open guide
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Browse all guides"
            title="Each page is built to move you one step closer to a real visit."
            description="These are not blog posts for the sake of it. Each one should make the menu, the venue, or the booking decision easier."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {linkedGuides.map((guide, index) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6 ${
                  index % 2 === 0
                    ? "bg-[var(--color-surface-lowest)]"
                    : "surface-pane-muted"
                }`}
              >
                <h2 className="section-title">{guide.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="Guides FAQs"
        title="A quick explanation of what these pages are for."
        description="They are there to help when you are not quite ready to book but are already narrowing the visit down."
        faqs={[
          {
            question: "Is this a blog?",
            answer:
              "Not in the usual sense. The guides are practical decision pages built to help you choose the pub, the food, or the right next step more easily.",
          },
          {
            question: "What should I do if I already know I want to visit?",
            answer:
              "Go straight to the menu or booking page. The guides are mainly for the in-between stage before the visit is fully decided.",
          },
          {
            question: "What is the best first guide if I am new to the site?",
            answer:
              "Start with Where to Eat in Stony Stratford if the outing is still broad, or What is Nepalese Food if the food curiosity is what brought you here.",
          },
        ]}
      />

      <PageSignoff
        eyebrow="Next step"
        title="Once the right guide has done its job, move into menu or booking."
        body={
          <p>
            The point of the guides is simple: help you make the visit feel
            clearer, then get you to the page that actually finishes the job.
          </p>
        }
        actions={[
          {
            href: "/menu",
            label: "View menu",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/book",
            label: "Book a table",
            icon: <ArrowRight className="size-4" />,
          },
        ]}
      />
    </main>
  )
}
