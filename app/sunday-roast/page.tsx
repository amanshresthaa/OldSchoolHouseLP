import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/sunday-roast")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function SundayRoastPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Why Sunday works here",
          title: "A roast page should still feel pub-first.",
          description:
            "Sunday roast is one of the clearest commercial reasons for someone to search for a pub like this, so the page needs to lead with comfort, warmth, and the confidence of a proper pub lunch.",
          columns: 3,
          cards: [
            {
              title: "Traditional pub setting",
              description:
                "The room, the location, and the easy pub atmosphere do as much work for Sunday intent as the food itself.",
            },
            {
              title: "A menu with more range behind it",
              description:
                "Guests who arrive for Sunday roast can still discover the Nepalese side of the menu and remember the pub for more than one kind of visit.",
            },
            {
              title: "Bookable, local, and easy to work into the weekend",
              description:
                "A strong Sunday page should make booking lunch feel like the natural next step, not another decision to make later.",
            },
          ],
        },
        {
          eyebrow: "What to expect",
          title:
            "Sunday lunch should feel settled, sociable, and worth booking ahead for.",
          description:
            "The page does not need to invent a detailed roast menu to convert. It just needs to show the pub is a credible Sunday choice for couples, families, and mixed tables.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Built for mixed tables",
              description:
                "Traditional pub comfort makes Sunday familiar, while the wider kitchen identity gives the pub stronger recall afterwards.",
            },
            {
              title: "A useful route into the rest of the site",
              description:
                "Once someone is interested in Sunday lunch, the page should move them into booking, the menu, and family or group dining journeys without losing momentum.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Sunday FAQs",
        title: "Keep Sunday lunch questions simple.",
        description:
          "The page should support searchers who want reassurance fast, then move them toward a booking.",
        faqs: [
          {
            question: "Why have a dedicated Sunday roast page?",
            answer:
              "Sunday roast is one of the strongest pub-led search intents, so it deserves a dedicated landing page rather than being buried deep in a broader menu page.",
          },
          {
            question:
              "Does the Sunday roast page still support the wider concept?",
            answer:
              "Yes. The page leads with traditional pub comfort, then uses the rest of the site to show that The Old School House also offers a more distinctive food story.",
          },
          {
            question: "What should I do next if I am interested?",
            answer:
              "Book your table first, then use the menu page if you want to browse further before you visit.",
          },
        ],
      }}
      inlineCta={{
        title: "If Sunday is the plan, booking ahead is the easiest next step.",
        description:
          "That keeps the visit simple and lets the pub side of the experience do the reassuring work before you arrive.",
      }}
      signoff={{
        eyebrow: "Keep exploring",
        title: "See how Sunday fits into the wider food and pub offer.",
        body: (
          <p>
            The Sunday roast page should win the search, but the menu and group
            dining pages help explain why the pub stays in mind for more than
            one weekly habit.
          </p>
        ),
        actions: [
          {
            href: "/menu",
            label: "View menu",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/group-dining-celebrations",
            label: "Group dining",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
