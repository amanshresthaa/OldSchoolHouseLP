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
          title: "The menu and setting make mixed-group decisions easier.",
          description:
            "Group dining works better here because the pub gives people familiar comfort while the Nepalese kitchen adds something more memorable for the table.",
          columns: 3,
          cards: [
            {
              title: "Good for mixed tastes",
              description:
                "Pub classics and Nepalese dishes can sit together in one visit, which reduces the usual friction of group planning.",
            },
            {
              title: "Better than a standard casual booking",
              description:
                "The group page helps people see that the pub can handle birthdays and celebrations even when full private hire is not what they need.",
            },
            {
              title: "A useful step before private hire",
              description:
                "Some enquiries should become full private-hire conversations, but many groups only need a stronger group-booking landing page and a clear next step.",
            },
          ],
        },
        {
          eyebrow: "How to use the page",
          title: "Keep the conversion path simple.",
          description:
            "The page should help the organiser decide whether to book normally, move into private hire, or continue browsing the menu for the table.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "If it is still an easy table booking",
              description:
                "Move into the booking flow and keep the group dinner feeling straightforward rather than over-planned.",
            },
            {
              title: "If it needs more shaping",
              description:
                "Move into the private hire route where the discussion can become more tailored around numbers, timing, and food direction.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Group dining FAQs",
        title: "The goal is to make group planning feel less fiddly.",
        description:
          "A group page should answer the main choice quickly: standard booking or private hire enquiry.",
        faqs: [
          {
            question: "Why have a separate group dining page?",
            answer:
              "Because not every celebration or bigger table needs a full private-hire enquiry, but many still need more reassurance than a basic booking page can offer.",
          },
          {
            question: "What kinds of groups does this page suit best?",
            answer:
              "It suits birthday meals, informal celebrations, larger friend groups, and mixed tables that want food and drinks without the formality of a dedicated event setup.",
          },
          {
            question: "What if our plans are bigger than that?",
            answer:
              "If the gathering needs more shaping around space, timings, or a more tailored plan, the private hire page is the right next step.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If the table feels likely, move into booking while the momentum is there.",
        description:
          "That keeps the page commercial and useful, especially for organisers trying to get a quick decision from the rest of the group.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Choose the route that fits the size of the plan.",
        body: (
          <p>
            Group dining should stay simple when it can. Private hire should
            only take over when the gathering genuinely needs more planning.
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
