import type { Metadata } from "next"
import { ArrowRight, MapPin, PawPrint } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/dog-friendly-pub-stony-stratford")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function DogFriendlyPubPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={[
        {
          eyebrow: "Bring the dog along",
          title:
            "A dog-friendly pub visit feels easier when the setting already suits a slower stop.",
          description:
            "The Old School House works well for dog-friendly pub visits because it is easy to find on London Road and gives you more than one place to settle in once you arrive.",
          columns: 3,
          cards: [
            {
              title: "Front garden with wooden seating",
              description:
                "The front garden gives you an outdoor pub option that is easy to work into a walk, a catch-up, or a slower drink in town.",
            },
            {
              title: "Private courtyard for a quieter stop",
              description:
                "The courtyard adds another outdoor setting behind the main pub, which can make a dog-friendly visit feel a bit calmer and more flexible.",
            },
            {
              title: "Easy London Road location",
              description:
                "Right in Stony Stratford, with a small car park on site and town-centre parking around it, the pub is straightforward to plan around.",
            },
          ],
        },
        {
          eyebrow: "What makes it work",
          title:
            "It is still a proper pub visit, not just a quick water-bowl stop.",
          description:
            "If you are heading out with the dog, it helps when the pub also has the food, drinks, and atmosphere to keep the rest of the group happy too.",
          columns: 2,
          muted: true,
          cards: [
            {
              title: "Good for drinks, lunch, or a longer stay",
              description:
                "Outdoor seating and a fuller menu make it easy to turn a quick stop into a proper pub visit if the day opens up.",
            },
            {
              title: "Worth calling ahead for the easiest setup",
              description:
                "If you want the smoothest arrival or the best place to settle with the dog, a quick call before travelling is always helpful.",
            },
          ],
        },
      ]}
      faqSection={{
        eyebrow: "Dog-friendly FAQs",
        title: "A few quick answers before you set off with the dog.",
        description:
          "Most dog-friendly pub visits only need a little planning to feel easy.",
        faqs: [
          {
            question: "Is The Old School House dog-friendly?",
            answer:
              "Yes. The pub works well for dog-friendly visits, especially if you want outdoor seating in the front garden or courtyard.",
          },
          {
            question: "Do I need to book if I am bringing the dog?",
            answer:
              "If you are planning to eat or visit at a busier time, booking ahead is the easiest option.",
          },
          {
            question: "What is the best next step before I visit?",
            answer:
              "Book a table if the plan is already set, or call ahead if you want the easiest setup for your visit.",
          },
        ],
      }}
      inlineCta={{
        title: "If the plan is already set, get the table sorted now.",
        description:
          "That keeps the dog-friendly part of the visit easy before you even arrive.",
      }}
      signoff={{
        eyebrow: "Next step",
        title: "Book the table or plan the route over.",
        body: (
          <p>
            The Old School House is easy to work into a day in Stony Stratford,
            whether you are stopping for a drink, lunch, or a longer catch-up
            with the dog along too.
          </p>
        ),
        actions: [
          {
            href: "/book",
            label: "Book a table",
            icon: <PawPrint className="size-4" />,
          },
          {
            href: "/find-us",
            label: "Plan your visit",
            icon: <MapPin className="size-4" />,
          },
          {
            href: "/beer-garden-stony-stratford",
            label: "See outdoor seating",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
