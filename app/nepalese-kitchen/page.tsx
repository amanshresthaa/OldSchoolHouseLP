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
          eyebrow: "Why people remember the food",
          title:
            "The Nepalese kitchen gives this traditional pub a stronger point of difference.",
          description:
            "The Old School House keeps the feel of a proper local pub, then adds a Nepalese kitchen that gives the menu more warmth, more character, and more reason to come back for a second visit.",
          columns: 3,
          cards: [
            {
              title: "Led by Nepalese warmth",
              description:
                "Operator Sanjog Gautam has built the food offer around the same idea as the pub itself: welcoming, generous, and easy for guests to enjoy without fuss.",
            },
            {
              title: "Designed to sit comfortably inside a pub visit",
              description:
                "You do not need to choose between a pub meal and something more distinctive. Here, the Nepalese side of the menu sits naturally alongside the wider pub offer.",
            },
            {
              title: "Memorable from the first order",
              description:
                "Momo, curries, and grilled dishes give people a clear reason to remember the meal, even if they first came in for drinks, Sunday lunch, or a fixture night.",
            },
          ],
        },
        {
          eyebrow: "Where to begin",
          title:
            "If you are new to the kitchen, start with the dishes that are easiest to share and easiest to talk about.",
          description:
            "The menu does not ask guests to arrive with specialist knowledge. It simply gives you a few strong starting points, then lets the rest of the meal open up from there.",
          columns: 3,
          muted: true,
          cards: [
            {
              title: "Start with momo",
              description:
                "Momo is the most natural first step if you want to try the Nepalese side of the menu. It is straightforward, sociable, and easy to order for the table.",
            },
            {
              title: "Move on to curries and grilled dishes",
              description:
                "Once the table is settled, the kitchen opens out into richer dishes that bring more depth and more flavour than a standard pub food line-up on its own.",
            },
            {
              title: "Order across the whole menu",
              description:
                "One of the strengths of The Old School House is that guests can mix pub favourites and Nepalese dishes in the same meal without the evening feeling split in two.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Kitchen FAQs",
        title: "A few quick answers before you try the kitchen.",
        description:
          "If you are curious but not sure where to begin, these are the questions that usually help most.",
        faqs: [
          {
            question: "Do I need to know Nepalese food before I visit?",
            answer:
              "No. The kitchen is designed to feel approachable, and the menu makes it easy to start with dishes like momo before moving further into the house favourites.",
          },
          {
            question:
              "Does the Nepalese kitchen replace the pub side of the menu?",
            answer:
              "No. The Old School House is still a traditional pub first. The Nepalese kitchen is what gives the food offer more character once you are here.",
          },
          {
            question: "What is the best first order if I am new to it?",
            answer:
              "Start with the momo, then use the full menu to decide whether you want to move into curries, grilled dishes, or a wider mix across the table.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If the kitchen sounds like your kind of table, make the booking now.",
        description:
          "You can always look at the menu afterwards, but the easiest start is getting the table sorted first.",
      }}
      signoff={{
        eyebrow: "Next step",
        title:
          "Start with the signature dish, then explore the rest of the menu.",
        body: (
          <p>
            Momo is often the easiest introduction. From there, the full menu
            gives you the best view of how the Nepalese kitchen and the pub
            classics work together.
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
