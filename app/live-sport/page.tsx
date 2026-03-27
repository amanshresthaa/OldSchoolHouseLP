import type { Metadata } from "next"
import { ArrowRight, Television } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/live-sport")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function LiveSportPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Why it converts",
          title:
            "Sport works best here when the rest of the pub still matters.",
          description:
            "The Old School House should not feel like a generic sports bar. The live sport page needs to show that fixtures sit inside a stronger pub experience rather than replacing it.",
          columns: 3,
          cards: [
            {
              title: "Good for fixture intent",
              description:
                "People search for a live sport pub because they want a screen, but they stay because the venue around it feels worth the evening.",
            },
            {
              title: "Food and drinks keep the stay longer",
              description:
                "The page should connect match-day demand back into the menu, the booking flow, and the pub’s wider reasons to visit.",
            },
            {
              title: "Useful for group bookings",
              description:
                "Sports socials and casual meetups convert better when the page also signals room, drinks, and a straightforward route to enquire if needed.",
            },
          ],
        },
        {
          eyebrow: "What the page should prove",
          title: "This is a pub first and a live sport venue second.",
          description:
            "That balance helps the page attract the right searchers while protecting the wider traditional-pub positioning of the site.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Built for match nights",
              description:
                "The venue can handle fixtures, noise, and group energy without losing the warmth that makes it suitable for non-sport visits too.",
            },
            {
              title: "Connected to What’s On and Private Hire",
              description:
                "The sport page should pass people into broader event discovery or private enquiries when the booking becomes more group-led than fixture-led.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Live sport FAQs",
        title: "Help people choose the pub quickly on fixture days.",
        description:
          "A useful page answers the right questions fast and then gives people the table-booking route they were looking for.",
        faqs: [
          {
            question: "Why does live sport deserve its own page?",
            answer:
              "Because live sport is a high-intent pub search and a repeat-visit driver, especially when the page can move guests into booking and group planning.",
          },
          {
            question: "Does the page turn the pub into a sports bar?",
            answer:
              "No. The live sport content is there to support a use case, not to replace the traditional pub identity that leads the wider site.",
          },
          {
            question:
              "What should I do if I am planning a bigger sports group visit?",
            answer:
              "Use the private hire or group dining routes if the fixture is part of a larger social plan rather than just a standard table booking.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If the fixture matters, book the table before the night fills up.",
        description:
          "That gives the page a clear commercial job instead of leaving it as a passive info stop.",
      }}
      signoff={{
        eyebrow: "Next step",
        title:
          "Use sport as the entry, then let the rest of the pub do the rest.",
        body: (
          <p>
            Live sport should open the door to booking, group dining, and wider
            event discovery rather than sitting in isolation.
          </p>
        ),
        actions: [
          {
            href: "/book",
            label: "Book for the match",
            icon: <Television className="size-4" />,
          },
          {
            href: "/events",
            label: "See what’s on",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
