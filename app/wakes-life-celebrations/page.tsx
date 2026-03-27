import type { Metadata } from "next"
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { siteEmailHref, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/wakes-life-celebrations")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function WakesLifeCelebrationsPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Why this route matters",
          title:
            "Some occasions need a calmer planning path than a general events page can offer.",
          description:
            "The wakes and life celebrations page should feel respectful, straightforward, and commercially useful without sounding transactional.",
          columns: 3,
          cards: [
            {
              title: "Simple first conversation",
              description:
                "The page should make it clear that a rough call or email is enough to begin. People should not feel they need a fully formed event brief.",
            },
            {
              title: "Food and drink can be shaped around the day",
              description:
                "The strongest reassurance here is flexibility and calm support, not a hard-sell package grid.",
            },
            {
              title: "A pub setting can still feel appropriate",
              description:
                "The warmth of the venue and the straightforward planning approach help the space feel suitable for gatherings that need care rather than fuss.",
            },
          ],
        },
        {
          eyebrow: "What to cover early",
          title: "A few practical details help the conversation start gently.",
          description:
            "The page should help families understand what is useful to mention first, while keeping the tone human and direct.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Guest numbers and timing",
              description:
                "Knowing the likely size of the gathering and when people may arrive gives the pub the clearest place to begin.",
            },
            {
              title: "Food, drinks, and the feel of the room",
              description:
                "A simple sense of what would make the day easier matters more than a long checklist of operational detail.",
            },
          ],
        },
      ]}
      checklist={{
        eyebrow: "What to send",
        title: "You only need the basics to begin.",
        description:
          "A little context helps the pub shape the conversation without making the enquiry feel heavy.",
        items: [
          "Rough guest numbers",
          "Likely date and arrival time",
          "Whether food, drinks, or both matter most",
          "Any detail that would make the day easier for close family",
          "Whether a phone call or email reply is easier for you",
        ],
      }}
      faqSection={{
        eyebrow: "Wakes FAQs",
        title: "Keep the first step calm and clear.",
        description: "This page should reduce stress, not create more of it.",
        faqs: [
          {
            question:
              "Why have a dedicated page for wakes and life celebrations?",
            answer:
              "Because the tone, reassurance, and enquiry path for these occasions are different from a standard private-hire or public events page.",
          },
          {
            question: "Do I need a detailed plan before contacting the pub?",
            answer:
              "No. A rough sense of numbers, timing, and what would help most on the day is enough to begin the conversation.",
          },
          {
            question: "What is the best way to get in touch?",
            answer:
              "A phone call is often the easiest first step, but email is also fine if that feels simpler.",
          },
        ],
      }}
      signoff={{
        eyebrow: "Get in touch",
        title: "A straightforward conversation is the best next step.",
        body: (
          <p>
            This page should feel calm, helpful, and direct enough that families
            know exactly how to begin.
          </p>
        ),
        actions: [
          {
            href: sitePhoneHref,
            label: "Call the pub",
            icon: <Phone className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: "Email the team",
            icon: <EnvelopeSimple className="size-4" />,
          },
        ],
      }}
    />
  )
}
