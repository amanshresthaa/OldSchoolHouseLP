import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/nepalese-kitchen")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function NepaleseKitchenPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Why it matters",
          title: "This is the differentiator, not the acquisition headline.",
          description:
            "The Nepalese kitchen should feel like the strongest reason to remember the pub after discovery, without making the venue look like a separate restaurant brand.",
          columns: 3,
          cards: [
            {
              title: "It makes the pub more memorable",
              description:
                "People may search for a traditional pub, but the Nepalese kitchen is what helps the visit feel less interchangeable once they are deciding where to go.",
            },
            {
              title: "It works best inside a pub frame",
              description:
                "The comfort of the pub setting lowers the barrier for first-timers and makes curious food choices feel inviting rather than intimidating.",
            },
            {
              title: "It improves repeat-visit potential",
              description:
                "A stronger point of difference means guests have more than one reason to return, whether they came in first for drinks, Sunday lunch, or a match night.",
            },
          ],
        },
        {
          eyebrow: "Where to start",
          title: "The first order should feel easy.",
          description:
            "A good Nepalese kitchen page should guide the guest from curiosity into a first order, rather than assuming they already know the dishes.",
          columns: 3,
          muted: true,
          cards: [
            {
              title: "Start with momo",
              description:
                "Momo is the natural bridge between curiosity and confidence: easy to describe, easy to share, and easy to recommend.",
            },
            {
              title: "Move into richer house dishes",
              description:
                "Curries, grills, and kitchen favourites should feel like the next step once the table is ready to order more widely.",
            },
            {
              title: "Keep the pub menu in view",
              description:
                "The page should always make it clear that guests can order across the pub classics and the Nepalese kitchen in the same visit.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Kitchen FAQs",
        title: "A simple explanation is more useful than a hard sell.",
        description:
          "The goal is to make the Nepalese side of the menu feel inviting and easy to try inside the wider pub offer.",
        faqs: [
          {
            question: "Why talk about the Nepalese kitchen on its own page?",
            answer:
              "Because it is the clearest differentiator for the brand once someone has already entered through a pub-led journey.",
          },
          {
            question:
              "Does this make The Old School House feel less like a pub?",
            answer:
              "No. The page should always frame the kitchen as something that sits inside a traditional pub, not as a separate restaurant identity.",
          },
          {
            question: "Where should I start if I am new to the food?",
            answer:
              "Start with the momo, then use the menu and kitchen pages to move into the rest of the dishes at your own pace.",
          },
        ],
      }}
      inlineCta={{
        title: "Curious enough to try it?",
        description:
          "Book the table first, then use the menu to decide whether the first order starts with momo, a mixed grill, or one of the house curries.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Start with the signature dish, then use the menu for the rest.",
        body: (
          <p>
            The Nepalese kitchen page should build appetite and confidence, then
            hand off cleanly into the momo page and the full menu.
          </p>
        ),
        actions: [
          {
            href: "/momo",
            label: "Start with momo",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/menu",
            label: "View full menu",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
