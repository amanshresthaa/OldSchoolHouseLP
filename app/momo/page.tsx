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
          eyebrow: "A good place to begin",
          title:
            "Momo is the dish that makes the Nepalese side of the menu feel easy to try.",
          description:
            "At The Old School House, momo is one of the clearest starting points for guests who want to try something different without overthinking the order. It works just as well over drinks as it does at the start of a longer meal.",
          columns: 3,
          cards: [
            {
              title: "Easy to order first",
              description:
                "If you are curious about the kitchen but not sure where to begin, momo is the obvious way in. It gives the table something distinctive without making the order feel unfamiliar.",
            },
            {
              title: "Good for sharing",
              description:
                "It suits the sociable rhythm of a pub table, where people often settle in with drinks, starters, and a bit more time than a quick in-and-out meal.",
            },
            {
              title: "A dish people remember",
              description:
                "Once people have tried the momo here, they tend to remember The Old School House for more than just being another pub on the high street.",
            },
          ],
        },
        {
          eyebrow: "What to pair it with",
          title:
            "Momo works best as the start of a wider table, not as a side note.",
          description:
            "Once the table starts with momo, it becomes easier to move into the wider Nepalese kitchen, the pub classics, or a more mixed order that suits everyone around the table.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Move into the kitchen favourites",
              description:
                "Curries and grilled dishes are the natural next step if the table wants to keep exploring the Nepalese side of the menu.",
            },
            {
              title: "Keep the pub part of the visit in view",
              description:
                "The setting is still a warm traditional pub, which is exactly why trying something new here feels easier than it does in a more formal setting.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Momo FAQs",
        title: "A quick guide before you order.",
        description:
          "If you are looking at the menu and wondering whether momo is the right place to start, these are the answers that help most.",
        faqs: [
          {
            question: "What is momo?",
            answer:
              "Momo is a Nepalese dumpling dish and one of the most approachable ways to begin exploring the kitchen at The Old School House.",
          },
          {
            question: "Is momo a good first order if I am new to the menu?",
            answer:
              "Yes. It is easy to share, easy to recommend, and a natural first step before you decide whether to carry on into the rest of the Nepalese dishes.",
          },
          {
            question: "What should I look at next?",
            answer:
              "Head to the Nepalese kitchen page or the full menu, then book a table once the visit feels right for your group.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If the momo sounds like the right first order, book the table next.",
        description:
          "Then you can come back to the menu and decide the rest of the order without rushing.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Use the signature dish to open up the rest of the menu.",
        body: (
          <p>
            Start with momo, then use the kitchen and menu pages to build the
            rest of the meal around it.
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
