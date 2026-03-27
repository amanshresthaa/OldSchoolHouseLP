import type { Metadata } from "next"
import {
  EnvelopeSimple,
  ForkKnife,
  Phone,
  Tray,
} from "@phosphor-icons/react/dist/ssr"

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
          eyebrow: "A calm first step",
          title:
            "A straightforward pub setting for wakes and life celebrations in Stony Stratford.",
          description:
            "For families who need somewhere warm, practical, and easy to talk through, The Old School House offers a more human starting point than a formal venue process. The aim is to keep the first conversation simple and supportive.",
          columns: 3,
          cards: [
            {
              title: "Simple first conversation",
              description:
                "A rough phone call or email is enough to begin. You do not need to arrive with every detail already decided.",
            },
            {
              title: "Food and drink can be shaped around the day",
              description:
                "The team can talk through what matters most on the day, whether that is food, drinks, timing, or simply keeping everything easy for the family.",
            },
            {
              title: "A pub setting that still feels appropriate",
              description:
                "With a traditional interior, open-plan bar space, and a private courtyard, the pub can feel warm and welcoming without becoming over-formal.",
            },
          ],
        },
        {
          eyebrow: "A quietly considered wakes buffet",
          title:
            "The Old School House kitchen can serve a complete £13-per-guest wakes buffet in the pub.",
          description:
            "Each guest receives one sandwich choice, a warm chicken wing, a vegetable or meat samosa, freshly fried chicken pakora, and tea or coffee. It is designed to keep the food side of the day simple, complete, and easy to understand.",
          columns: 3,
          muted: true,
          cards: [
            {
              title: "£13 per guest",
              description:
                "The buffet is priced as one complete per-guest package rather than a long menu of separate extras.",
            },
            {
              title: "Served in the pub, not boxed to go",
              description:
                "The food is prepared and served for guests gathering with us in the pub, so the day can feel calmer and more looked after.",
            },
            {
              title: "Easy to tailor with advance notice",
              description:
                "Sandwich fillings and samosa choices can be shaped around the group, and dietary requirements should be shared when you book so the kitchen can prepare safely.",
            },
          ],
        },
      ]}
      checklist={{
        eyebrow: "What each guest receives",
        title:
          "The wakes buffet is designed so each guest receives one item from each part of the plate.",
        description:
          "That keeps the service neat, clear, and easy to plan around speeches, arrivals, and the overall timing of the day.",
        items: [
          "One finger sandwich per guest — egg and mayo or bacon and cheese",
          "One warm chicken wing per guest",
          "One samosa per guest — vegetable or meat",
          "Freshly fried chicken pakora with coriander chutney",
          "Tea or coffee included for each guest",
        ],
      }}
      faqSection={{
        eyebrow: "Wakes FAQs",
        title: "A few clear answers before you get in touch.",
        description:
          "These answers are here to make the first step feel easier, not to create more work.",
        faqs: [
          {
            question: "How much is the wakes buffet?",
            answer:
              "The current wakes buffet is £13 per guest and includes a sandwich choice, a chicken wing, a samosa choice, chicken pakora, and tea or coffee.",
          },
          {
            question: "When do you need final numbers?",
            answer:
              "Please confirm final numbers five days before the event so the team can prepare the buffet safely and clearly.",
          },
          {
            question:
              "Do you need notice about allergies or dietary requirements?",
            answer:
              "Yes. Please let the team know about any dietary requirements or allergies when you book so the kitchen can prepare safely.",
          },
          {
            question: "Can leftovers be packed to take away?",
            answer:
              "No. The buffet is prepared for guests dining with us in the pub, and takeaway packaging for leftovers is not part of the offer.",
          },
        ],
      }}
      inlineCta={{
        title: "Ready to talk through timings and guest numbers?",
        description:
          "Call if you would rather talk it through straight away, or email if that feels easier. A rough date, expected numbers, and the shape of the day are enough to begin.",
        actions: [
          {
            href: sitePhoneHref,
            label: "Call to plan the wake",
            icon: <Phone className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: "Request availability by email",
            icon: <EnvelopeSimple className="size-4" />,
          },
        ],
      }}
      signoff={{
        eyebrow: "Before you get in touch",
        title:
          "A few practical points make the booking process clearer for everyone.",
        body: (
          <div className="space-y-5">
            <p>
              Advance booking is required. A deposit secures the date and is
              non-refundable if the booking is cancelled late. Full payment is
              due on or before the day of the wake, and charges are based on the
              confirmed number of guests or the number attending if higher.
            </p>
            <p>
              Menu items may vary slightly with availability, but the team will
              always provide a suitable alternative. If you are also thinking
              about serving extra dishes before or after the wake, you can
              browse the main restaurant menu alongside this buffet package.
            </p>
          </div>
        ),
        actions: [
          {
            href: sitePhoneHref,
            label: "Call to plan the wake",
            icon: <Phone className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: "Email the team",
            icon: <EnvelopeSimple className="size-4" />,
          },
          {
            href: "/menu",
            label: "Browse the main menu",
            icon: <ForkKnife className="size-4" />,
          },
        ],
        details: (
          <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 text-sm leading-7 text-on-surface shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 md:text-base">
            <div className="flex items-start gap-3">
              <Tray className="mt-1 size-5 shrink-0 text-secondary" />
              <div className="space-y-2">
                <p className="font-semibold text-on-background">
                  Wake buffet terms
                </p>
                <p>
                  Minimum guest numbers and charges apply. The buffet is served
                  for guests dining with us in the pub, with staff on hand
                  throughout. If you would like to discuss timings for speeches
                  or memory tables, include that in your enquiry and the team
                  will talk through the most suitable setup.
                </p>
              </div>
            </div>
          </div>
        ),
      }}
    />
  )
}
