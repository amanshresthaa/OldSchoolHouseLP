import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/what-is-nepalese-food")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function WhatIsNepaleseFoodPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "A simple starting point",
          title:
            "Nepalese food here means warming dishes, good sharing plates, and a menu that feels easy to try in a pub setting.",
          description:
            "At The Old School House, Nepalese food is not treated like a separate concept hidden at the back of the menu. It is part of what makes the pub memorable once you are already settled in.",
          columns: 3,
          cards: [
            {
              title: "Start with momo",
              description:
                "Momo is one of the clearest introductions to the kitchen. It is easy to share, easy to order first, and a good way to try something new without making the whole meal feel unfamiliar.",
            },
            {
              title: "Move into curries and grilled dishes",
              description:
                "Once the table is comfortable, the kitchen opens up into richer dishes that bring more warmth and more identity than a standard pub menu on its own.",
            },
            {
              title: "Keep the pub comfort in view",
              description:
                "The setting is still a traditional Stony Stratford pub with exposed brick, wooden floors, and the kind of easy atmosphere that makes trying new food feel straightforward.",
            },
          ],
        },
        {
          eyebrow: "Why it suits this venue",
          title:
            "The best part is that you do not need to choose between a proper pub and more interesting food.",
          description:
            "Some tables want familiar pub favourites. Others want to try something they would not usually order. The Old School House works because both can happen in the same visit.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Good for mixed tables",
              description:
                "Families, groups, couples, and food-curious regulars can order across the menu without the evening feeling split between two different identities.",
            },
            {
              title: "Easy to try without overthinking it",
              description:
                "You do not need a long explanation before you visit. A quick look at the kitchen page or the menu is usually enough to make the first booking feel easy.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Food guide FAQs",
        title: "A few quick answers if you are still deciding where to start.",
        description:
          "The aim is to make the food feel more approachable, not to turn the menu into a lesson.",
        faqs: [
          {
            question:
              "What is the best first dish if I am new to Nepalese food?",
            answer:
              "Start with momo. It is one of the easiest first orders on the menu and a natural route into the rest of the kitchen.",
          },
          {
            question: "Is the Nepalese food separate from the pub offer?",
            answer:
              "No. The Old School House is still a traditional pub first. The Nepalese kitchen is what gives the food side of the visit more personality once you are here.",
          },
          {
            question: "Can I still order across the wider menu?",
            answer:
              "Yes. One of the strengths of the venue is that the Nepalese dishes and the wider pub menu sit comfortably alongside each other.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If the food sounds like your kind of table, the next step is seeing the kitchen in context.",
        description:
          "That usually makes the first order, and the booking itself, much easier to picture.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Move from the guide into the dishes themselves.",
        body: (
          <p>
            The easiest next move is to look at the Nepalese kitchen, then use
            the full menu to decide what the table would actually order.
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
