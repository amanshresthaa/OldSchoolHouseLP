import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/nepalese-vs-indian-food")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function NepaleseVsIndianFoodPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "A simple guide",
          title:
            "Nepalese and Indian food share some familiar ground, but they do not feel exactly the same on the table.",
          description:
            "A lot of guests recognise Indian dishes first, so it helps to have a simple explanation before ordering. At The Old School House, the easiest way to understand the difference is through the dishes themselves rather than through a long history lesson.",
          columns: 3,
          cards: [
            {
              title: "Some flavours feel familiar",
              description:
                "Curries, spice, and warming dishes can make the two cuisines feel close at first glance, which is why many guests want a quick introduction before they order.",
            },
            {
              title:
                "The Nepalese side often feels lighter and more varied in shape",
              description:
                "Momo, grilled dishes, and sharing plates give the menu a different rhythm from a curry-only expectation and make it easier to order across the table.",
            },
            {
              title: "The best way to understand it is to try a few dishes",
              description:
                "A short explanation helps, but the real difference becomes clearer once you start with the momo and then move into the wider kitchen favourites.",
            },
          ],
        },
        {
          eyebrow: "How it works here",
          title:
            "You are not choosing between two restaurant styles. You are choosing a pub with a menu that goes further.",
          description:
            "The Old School House keeps everything approachable because the setting is still a proper Stony Stratford pub. That makes trying the Nepalese side of the menu feel inviting rather than intimidating.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Start with the recognisable dishes",
              description:
                "Momo, curries, and grilled dishes give you an easy route into the kitchen without needing to decode a long list of unfamiliar terms.",
            },
            {
              title: "Keep the wider pub menu in view",
              description:
                "If part of the table wants pub comfort and part wants to explore the Nepalese dishes, The Old School House is built to handle both in the same meal.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Guide FAQs",
        title: "A few simple answers before you order.",
        description:
          "This guide is here to make the first order feel easier, not to overload you with detail.",
        faqs: [
          {
            question: "Why do people compare Nepalese and Indian food?",
            answer:
              "Because many guests know Indian dishes first, and a short explanation helps show what makes the Nepalese side of the menu feel different once you start ordering.",
          },
          {
            question: "What should I order if I want an easy introduction?",
            answer:
              "Start with the momo, then move into the wider kitchen favourites if you want to keep exploring.",
          },
          {
            question: "Do I need to know the difference before I visit?",
            answer:
              "Not at all. The guide is only there to make the menu feel more approachable. You can always browse the kitchen page and book when you are ready.",
          },
        ],
      }}
      inlineCta={{
        title:
          "Once the difference feels clearer, the menu usually feels easier too.",
        description:
          "Use the kitchen page or the full menu next, then book when the table plan is set.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Turn the guide into a real table and a real first order.",
        body: (
          <p>
            The best next move is simple: look at the Nepalese kitchen, choose a
            few dishes that sound right, and book the table.
          </p>
        ),
        actions: [
          {
            href: "/nepalese-kitchen",
            label: "Explore the kitchen",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/book",
            label: "Book a table",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
