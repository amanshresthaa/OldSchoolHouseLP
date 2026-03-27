import type { Metadata } from "next"
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/beer-garden-stony-stratford")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function BeerGardenPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Why this matters",
          title: "Outdoor space is one of the clearest practical pub searches.",
          description:
            "A beer garden page should help people see that The Old School House has real outdoor room and more than one way to settle in outside.",
          columns: 3,
          cards: [
            {
              title: "Front garden appeal",
              description:
                "The generous front garden with wooden seating gives the venue a stronger outdoor identity than a pub with only a few token tables.",
            },
            {
              title: "Private courtyard as a second outdoor option",
              description:
                "That extra outside space helps the pub feel more flexible for drinks, food, and informal groups in better weather.",
            },
            {
              title: "Useful for local and seasonal search",
              description:
                "Outdoor intent is often immediate and mobile-led, which makes this page a practical conversion route as well as a discovery page.",
            },
          ],
        },
        {
          eyebrow: "How it supports the wider site",
          title:
            "Outdoor searchers still need a clear route into booking and location.",
          description:
            "The page works best when it hands off into Find Us, Book, and the menu instead of trying to do everything itself.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Good for spontaneous visits",
              description:
                "Beer garden searchers often want fast reassurance on location, atmosphere, and whether the space feels worth the stop.",
            },
            {
              title: "Good for longer planned stays too",
              description:
                "Outdoor dining becomes more compelling when the food, drinks, and rest of the pub experience are easy to browse from the same journey.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Outdoor seating FAQs",
        title: "Keep outdoor-intent decisions quick.",
        description:
          "The page should tell people enough to decide, then move them into the practical route for their visit.",
        faqs: [
          {
            question: "Why give the outdoor space its own page?",
            answer:
              "Because outdoor seating and beer garden searches are a distinct pub-intent category, especially in warmer months and on mobile.",
          },
          {
            question: "What makes the outside space commercially useful here?",
            answer:
              "The front garden and courtyard add capacity, seasonal appeal, and more flexibility for drinks, food, and casual meetups.",
          },
          {
            question: "What should I do after reading this page?",
            answer:
              "Check directions or book a table, depending on whether your plan is immediate or already set.",
          },
        ],
      }}
      inlineCta={{
        title: "If the weather is helping, make the table the next step.",
        description:
          "That keeps outdoor intent moving toward an actual visit instead of ending with a browse.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Use the outdoor page to move into booking or directions.",
        body: (
          <p>
            The best next action from here is practical: secure the visit or get
            the route sorted before you arrive on London Road.
          </p>
        ),
        actions: [
          {
            href: "/book",
            label: "Book a table",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/find-us",
            label: "Plan your visit",
            icon: <MapPin className="size-4" />,
          },
        ],
      }}
    />
  )
}
