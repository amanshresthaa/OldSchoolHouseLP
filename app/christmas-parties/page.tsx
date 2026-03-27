import type { Metadata } from "next"
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/christmas-parties")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function ChristmasPartiesPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Why this page matters",
          title:
            "Christmas is one of the clearest seasonal enquiry opportunities.",
          description:
            "The festive page should turn end-of-year group interest into early conversations while keeping the pub’s warmth at the centre of the message.",
          columns: 3,
          cards: [
            {
              title: "Good for work drinks and team nights",
              description:
                "The pub works well for groups who want something festive but still informal enough to feel like a proper evening rather than a staged event package.",
            },
            {
              title: "Good for family festive meals",
              description:
                "The menu mix and traditional pub setting make Christmas feel more welcoming than formulaic.",
            },
            {
              title: "Good for early enquiries",
              description:
                "Seasonal pages do their best work when they encourage a conversation before dates and group plans become harder to place.",
            },
          ],
        },
        {
          eyebrow: "How it supports conversion",
          title: "The page should feel festive, but still practical.",
          description:
            "The point is to move people into an enquiry, the private hire route, or the group dining route depending on how fixed the plans already are.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "A warm festive alternative",
              description:
                "The Old School House should feel like the pub option with more personality, not a generic Christmas brochure page.",
            },
            {
              title: "A clear handoff into enquiry",
              description:
                "Seasonal intent is strong enough that the page should not rely on passive browsing alone. It needs a fast route into email or private-hire planning.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Christmas FAQs",
        title: "Keep festive enquiries moving.",
        description:
          "The page should help organisers decide whether to enquire now or move into a broader private-hire conversation.",
        faqs: [
          {
            question: "Who is this page for?",
            answer:
              "It is for festive work drinks, team socials, family meals, and end-of-year celebrations that want the warmth of a traditional pub with a more distinctive food story behind it.",
          },
          {
            question: "Why use a separate Christmas page?",
            answer:
              "Because festive demand is seasonal, commercially valuable, and different enough from year-round group dining to justify its own conversion page.",
          },
          {
            question: "What is the best next action from this page?",
            answer:
              "Make an enquiry if dates and group size are starting to take shape, or move into the private hire page for the wider occasion details.",
          },
        ],
      }}
      inlineCta={{
        title:
          "Festive dates are easier to place when the conversation starts early.",
        description:
          "Use the page to move people into an enquiry while the calendar still has room.",
        actions: [
          {
            href: "mailto:hellotheoldschoolhouse@gmail.com",
            label: "Enquire by email",
            icon: <EnvelopeSimple className="size-4" />,
          },
          {
            href: "/private-hire",
            label: "See private hire",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
      signoff={{
        eyebrow: "Next step",
        title:
          "Start the festive conversation before the best dates tighten up.",
        body: (
          <p>
            A straightforward enquiry now is more useful than a perfectly
            detailed brief later, especially for work and mixed-group plans.
          </p>
        ),
        actions: [
          {
            href: "/private-hire",
            label: "See private hire",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "mailto:hellotheoldschoolhouse@gmail.com",
            label: "Enquire by email",
            icon: <EnvelopeSimple className="size-4" />,
          },
        ],
      }}
    />
  )
}
