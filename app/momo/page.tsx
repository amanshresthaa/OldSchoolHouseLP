import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/momo")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function MomoPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Why momo matters",
          title:
            "A signature dish page should lower the barrier for first-time ordering.",
          description:
            "Momo is the most useful bridge between pub-led discovery and Nepalese-food curiosity because it is easy to describe, easy to share, and easy to recommend.",
          columns: 3,
          cards: [
            {
              title: "A natural first order",
              description:
                "People who are unsure where to begin with the Nepalese side of the menu need one dish that feels like the easy starting point.",
            },
            {
              title: "Good for sharing",
              description:
                "That makes it especially strong in a pub setting, where tables often order socially rather than course by course.",
            },
            {
              title: "A memorable food hook",
              description:
                "Once someone remembers the momo, they are more likely to remember the pub as the place they found it.",
            },
          ],
        },
        {
          eyebrow: "How to use this page",
          title:
            "The dish page should move people back into the wider journey.",
          description:
            "The point is not to isolate a single food item. It is to use the signature dish to pull people into the Nepalese kitchen page, the menu, and the booking flow.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "From momo to the kitchen",
              description:
                "Use this page to explain why the Nepalese kitchen stands out and why the first order should feel inviting rather than unfamiliar.",
            },
            {
              title: "From the dish to the booking",
              description:
                "Once appetite is there, the next steps should stay obvious: view menu or book a table.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Momo FAQs",
        title: "Keep the explanation clear and approachable.",
        description:
          "The page should help people understand why momo is worth trying without assuming any prior knowledge.",
        faqs: [
          {
            question: "What is momo?",
            answer:
              "Momo is a Nepalese dumpling dish that works well as a first introduction to the kitchen because it is easy to share and easy to enjoy alongside drinks or a wider table order.",
          },
          {
            question: "Why give momo its own page?",
            answer:
              "Because it is a signature dish that can attract curiosity-led search traffic and act as the easiest entry point into the Nepalese kitchen.",
          },
          {
            question: "What should I do after reading this page?",
            answer:
              "Move into the Nepalese kitchen page or the full menu, then book a table once the visit feels right.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If the momo sounds like the right first order, make the table the next decision.",
        description:
          "That keeps the dish page working as a conversion step rather than a dead end.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Use the signature dish to open up the wider menu.",
        body: (
          <p>
            The easiest follow-on from this page is the Nepalese kitchen hub,
            then the full menu and booking flow.
          </p>
        ),
        actions: [
          {
            href: "/nepalese-kitchen",
            label: "Explore the kitchen",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/menu",
            label: "View menu",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
