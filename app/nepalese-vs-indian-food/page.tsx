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
          eyebrow: "Why this page exists",
          title:
            "Educational pages should reduce hesitation, not sound like a lecture.",
          description:
            "Many guests are curious about Nepalese food but do not arrive with strong prior knowledge. This page should give them confidence to try the kitchen without confusing the pub-led journey.",
          columns: 3,
          cards: [
            {
              title: "Shared influences exist",
              description:
                "Nepalese and Indian food can sit close enough in a guest’s mind that a gentle explanation helps them see the difference without making the copy feel heavy.",
            },
            {
              title: "The page should stay practical",
              description:
                "The best version of this content helps someone order their first dish rather than trying to become a full food-history article.",
            },
            {
              title: "It feeds back into conversion",
              description:
                "Education is useful only if it sends the reader on to the kitchen page, the menu, and the booking flow afterwards.",
            },
          ],
        },
        {
          eyebrow: "What to explain",
          title: "Keep the difference inviting and easy to understand.",
          description:
            "This page is less about definitive comparison and more about helping people feel comfortable trying the Nepalese side of the menu in a pub setting.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Explain through dishes",
              description:
                "Use examples like momo, grills, and house favourites so the difference feels tangible rather than abstract.",
            },
            {
              title: "Keep the pub context visible",
              description:
                "Remind the reader that they are not choosing between two restaurants. They are discovering one of the reasons this pub feels more distinctive than the next.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Guide FAQs",
        title: "Use simple answers to build confidence.",
        description:
          "The point is to help the first-time guest feel ready to order, not to overwhelm them with detail.",
        faqs: [
          {
            question: "Why compare Nepalese and Indian food at all?",
            answer:
              "Because many guests know the Indian category first, and a short explanation helps them understand what makes the Nepalese side of the menu more distinctive.",
          },
          {
            question: "Does this page change the pub-first positioning?",
            answer:
              "No. The page supports discovery, but the pub remains the primary search-entry and brand anchor throughout the site.",
          },
          {
            question: "What should I do after reading this guide?",
            answer:
              "Use the Nepalese kitchen page for a stronger overview, then move into the menu and booking flow when you are ready.",
          },
        ],
      }}
      inlineCta={{
        title:
          "Once the difference feels clearer, the menu should feel easier too.",
        description:
          "Move from the guide into the kitchen page or the full menu rather than leaving the explanation as a standalone read.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Turn curiosity into an actual table.",
        body: (
          <p>
            The guide should give people enough confidence to order. From here,
            the menu and booking path need to stay obvious.
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
