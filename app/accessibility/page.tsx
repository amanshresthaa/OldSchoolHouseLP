import type { Metadata } from "next"
import { Car, MapPin, Phone, Wheelchair } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/accessibility")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function AccessibilityPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Plan ahead",
          title:
            "The easiest way to plan an accessible visit is to speak to the pub before you travel.",
          description:
            "Historic pub buildings can vary, so we would always rather talk through the details with you than make a promise that does not match the visit on the day.",
          columns: 3,
          cards: [
            {
              title: "Call ahead for access questions",
              description:
                "If mobility, seating, prams, or the easiest route in matter to your visit, call the team before travelling and we will talk through the best setup.",
            },
            {
              title: "Small car park on site",
              description:
                "There is a small car park at the pub, with more parking around the town centre if needed.",
            },
            {
              title: "Central London Road location",
              description:
                "The Old School House is easy to find in Stony Stratford, which can make drop-off, pick-up, and arrival timing easier to plan.",
            },
          ],
        },
        {
          eyebrow: "Inside the pub",
          title:
            "The team can help you plan around the layout and the kind of visit you want to have.",
          description:
            "The pub has an open-plan bar and dining space, outdoor seating in the front garden and courtyard, and a team that is happy to talk through the most suitable place to sit.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Mobility, prams, and seating help",
              description:
                "If you want to know what will feel easiest for your group, get in touch before the visit so the team can guide you.",
            },
            {
              title: "A smoother arrival starts with a quick call",
              description:
                "Even a short phone call can make the visit much more straightforward if access or comfort needs matter on the day.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Accessibility FAQs",
        title: "A few clear answers before you travel.",
        description:
          "These are the questions that usually help most when planning ahead.",
        faqs: [
          {
            question:
              "Can I call ahead to discuss accessibility or mobility needs?",
            answer:
              "Yes. That is the best option if access, seating, prams, or the easiest route into the pub matter to your visit.",
          },
          {
            question: "Is there parking at the pub?",
            answer:
              "There is a small car park on site, and more parking is available around the town centre.",
          },
          {
            question:
              "Can the team help me find the most suitable place to sit?",
            answer:
              "Yes. The team can talk through the layout, seating options, and the best setup for your visit before you arrive.",
          },
        ],
      }}
      inlineCta={{
        title:
          "If access or comfort matters to the visit, call before you travel.",
        description:
          "That is the simplest way to make arrival and seating easier from the outset.",
      }}
      signoff={{
        eyebrow: "Next step",
        title:
          "Use Find Us for the route, or call if you want to talk it through first.",
        body: (
          <p>
            A little planning can make a big difference. If you want the easiest
            arrival and the clearest setup, the pub team is happy to help before
            the day.
          </p>
        ),
        actions: [
          {
            href: sitePhoneHref,
            label: "Call the pub",
            icon: <Phone className="size-4" />,
          },
          {
            href: "/find-us",
            label: "Find us",
            icon: <MapPin className="size-4" />,
          },
          {
            href: "/book",
            label: "Book a table",
            icon: <Car className="size-4" />,
          },
        ],
        details: (
          <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 text-sm leading-7 text-on-surface shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 md:text-base">
            <div className="flex items-start gap-3">
              <Wheelchair className="mt-1 size-5 shrink-0 text-secondary" />
              <p>
                We prefer to confirm accessibility details directly rather than
                overstate what the building can offer online. If something
                matters to your visit, please tell us in advance and we will
                talk through the best option.
              </p>
            </div>
          </div>
        ),
      }}
    />
  )
}
