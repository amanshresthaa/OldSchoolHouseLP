import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/traditional-pub-with-nepalese-kitchen")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function TraditionalPubWithNepaleseKitchenPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "The balance matters",
          title:
            "This works because the pub feel comes first and the Nepalese kitchen makes the visit more memorable second.",
          description:
            "The Old School House keeps everything people want from a proper local on London Road: exposed brick, wooden floors, a warm pub interior, outdoor seating, and a relaxed atmosphere. The Nepalese kitchen then gives the menu a stronger identity once the table is already comfortable.",
          columns: 3,
          cards: [
            {
              title: "A proper pub for the first impression",
              description:
                "The building, the bar, and the pace of the room all feel familiar in the best way, which makes the venue easy to choose for drinks, lunch, dinner, or Sunday plans.",
            },
            {
              title: "More distinctive once the food arrives",
              description:
                "Momo, curries, grills, and wider kitchen favourites give people more to talk about than a standard pub menu would on its own.",
            },
            {
              title: "Better for mixed groups",
              description:
                "Some guests want pub comfort. Others want something a little different. This layout works because the table can do both without anyone feeling pushed into the wrong kind of place.",
            },
          ],
        },
        {
          eyebrow: "Why it helps people choose",
          title:
            "You do not have to choose between safe and interesting when the visit is built this way.",
          description:
            "For couples, families, local regulars, and group organisers, that makes decision-making easier. The pub gives reassurance, while the kitchen gives the visit a stronger reason to be remembered and repeated.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Useful for everyday visits",
              description:
                "The Old School House still works for a quick pint, a Sunday lunch, sport, or a meal before heading on elsewhere in town.",
            },
            {
              title: "Strong enough for food-led plans too",
              description:
                "The Nepalese kitchen means the venue also works when the meal itself is the reason for the booking rather than just the drinks around it.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Why it works FAQs",
        title: "A few quick answers if you are comparing options.",
        description:
          "This page is here to explain the balance, not to overcomplicate it.",
        faqs: [
          {
            question: "Is The Old School House still a traditional pub?",
            answer:
              "Yes. The pub atmosphere, building, and local feel come first. The Nepalese kitchen is what gives the food a stronger point of difference once you are already here.",
          },
          {
            question: "Do I need to know Nepalese food before I visit?",
            answer:
              "No. The menu is built to feel approachable, especially if you start with momo and use the wider kitchen page as your guide.",
          },
          {
            question: "Why is this better for mixed tables?",
            answer:
              "Because guests can order across the familiar pub side and the more distinctive Nepalese side of the menu without the table feeling split between two different kinds of venue.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If the idea sounds right, the menu usually makes the decision feel even easier.",
        description:
          "That is where the pub comfort and the Nepalese difference really come together.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "See how the pub and the kitchen sit together on the menu.",
        body: (
          <p>
            Once you can see the dishes in front of you, the balance of the
            venue becomes much easier to picture for your own visit.
          </p>
        ),
        actions: [
          {
            href: "/menu",
            label: "View menu",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/nepalese-kitchen",
            label: "Explore the kitchen",
            icon: <ForkKnife className="size-4" />,
          },
        ],
      }}
    />
  )
}
