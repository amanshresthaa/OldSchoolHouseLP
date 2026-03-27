import type { Metadata } from "next"
import { ArrowRight, UsersThree } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/group-dining-celebrations")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function GroupDiningCelebrationsPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Why groups choose it",
          title:
            "A group meal feels easier when the pub already suits different tastes and different kinds of occasion.",
          description:
            "The Old School House works well for birthdays, catch-ups, work drinks, and family celebrations because it gives the table a proper pub setting first, then a menu with more range once everyone starts ordering.",
          columns: 3,
          cards: [
            {
              title: "Good for mixed tastes",
              description:
                "Some guests want the comfort of a pub favourite, others want to try the Nepalese kitchen. Here, both can sit naturally on the same table.",
            },
            {
              title: "Useful for birthdays and informal celebrations",
              description:
                "Not every celebration needs full private hire. Sometimes you just need the right pub, a strong table, and a menu that makes the evening feel a bit more considered.",
            },
            {
              title: "Room to flex around the group",
              description:
                "With 65 covers inside, 60 outside, and both a front garden and courtyard, the venue can handle more than a standard four-top without making the evening feel over-planned.",
            },
          ],
        },
        {
          eyebrow: "Choose the right route",
          title:
            "Some group plans only need a table. Others need a conversation first.",
          description:
            "The easiest first decision is whether this is still a straightforward group meal or whether the gathering needs a bit more planning around numbers, timing, or space.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Book now if it is still a normal table plan",
              description:
                "If the group simply needs food, drinks, and a strong place to meet, go straight into the booking flow and keep the planning light.",
            },
            {
              title: "Enquire if it needs more shaping",
              description:
                "If timings, numbers, or the feel of the room matter more, use the private hire route so the team can help shape the visit around you.",
            },
          ],
        },
      ]}
      checklist={{
        eyebrow: "Helpful to have ready",
        title: "A few details make a group booking much easier to place.",
        description:
          "You do not need a full event brief. Just start with the basics and the team can guide the next step.",
        items: [
          "Your rough guest numbers",
          "The preferred date and time",
          "Whether this is food-led, drinks-led, or both",
          "Whether you are still choosing between a normal booking and a private-hire enquiry",
          "Anything that would make the table feel easier for the group",
        ],
      }}
      faqSection={{
        eyebrow: "Group dining FAQs",
        title: "Everything you need before you start organising.",
        description:
          "Most group plans come down to one question first: book the table now or ask a few questions before you do.",
        faqs: [
          {
            question: "What kinds of groups does this suit best?",
            answer:
              "It suits birthdays, family get-togethers, friend groups, and informal work plans that want good food, drinks, and a pub setting without full event formality.",
          },
          {
            question: "Do I need private hire for a larger table?",
            answer:
              "Not always. Many larger groups only need a normal booking. Private hire is better if you need more shaping around numbers, timing, or how the space will work.",
          },
          {
            question:
              "What if our plans are still a bit bigger or more specific?",
            answer:
              "Head to private hire if the gathering needs a more tailored conversation about the setup, timings, or overall feel of the occasion.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If the group plan is already likely, move into booking while the momentum is there.",
        description:
          "That usually makes it easier to get everyone else to commit as well.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Choose the route that fits the size of the plan.",
        body: (
          <p>
            Keep it simple if it is still a straightforward meal. Move into
            private hire only if the gathering needs more shaping around the
            details.
          </p>
        ),
        actions: [
          {
            href: "/book",
            label: "Book a table",
            icon: <UsersThree className="size-4" />,
          },
          {
            href: "/private-hire",
            label: "Private hire",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
