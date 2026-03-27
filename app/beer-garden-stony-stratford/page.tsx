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
          eyebrow: "Outdoor pub time",
          title:
            "A front garden that feels worth the stop, plus a courtyard that gives you another way to stay outside.",
          description:
            "The Old School House has proper outdoor space, not just a few token tables. The front garden with wooden seating gives the pub immediate kerb appeal on London Road, while the private courtyard adds a quieter option behind it.",
          columns: 3,
          cards: [
            {
              title: "Generous front garden",
              description:
                "The front garden is one of the venue’s strongest visual assets and one of the easiest reasons to stop in for drinks, lunch, or a slower afternoon catch-up.",
            },
            {
              title: "Private courtyard behind the pub",
              description:
                "The courtyard gives the site more flexibility than a single outdoor area and helps it suit both casual drinks and more planned get-togethers.",
            },
            {
              title: "Easy to work into the day",
              description:
                "Situated on London Road in Stony Stratford, it is the kind of outdoor pub stop that feels easy for a quick drink, a relaxed meal, or a meet-up that turns into a longer stay.",
            },
          ],
        },
        {
          eyebrow: "What makes it useful",
          title:
            "The outdoor space works best when it is supported by the rest of the pub.",
          description:
            "Good outside seating matters more when the pub also has the food, drinks, and atmosphere to keep the visit going once you are settled in.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Good for spontaneous visits",
              description:
                "If the weather turns in your favour, this is the sort of pub people can decide on quickly once they know where it is and what the outdoor setup looks like.",
            },
            {
              title: "Good for planned tables too",
              description:
                "If you are planning to eat, meet friends, or turn drinks into a longer visit, it is worth booking ahead and checking the rest of the menu at the same time.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Outdoor seating FAQs",
        title: "Everything you need before you head for the garden.",
        description:
          "A few quick answers should help you decide whether to book or just head over.",
        faqs: [
          {
            question: "Does The Old School House have proper outdoor seating?",
            answer:
              "Yes. The pub has a generous front garden with wooden seating as well as a private courtyard behind the main building.",
          },
          {
            question: "Is it worth booking if we want to sit outside?",
            answer:
              "If you know you want to eat or you are planning a busier visit, booking ahead is the easiest way to keep the plan simple.",
          },
          {
            question: "What should I do next if I am planning to visit?",
            answer:
              "Book a table if the plan is already set, or head to the Find Us page if you just want the quickest route over.",
          },
        ],
      }}
      inlineCta={{
        title: "If the weather is helping, make the table the next step.",
        description:
          "That way the outdoor plan is sorted before you arrive on London Road.",
      }}
      signoff={{
        eyebrow: "Next step",
        title:
          "Plan the route or book the table and let the weather do the rest.",
        body: (
          <p>
            The Old School House is easy to work into the day once you know
            where you are heading and whether you want to book ahead.
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
