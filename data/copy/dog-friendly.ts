// ---------------------------------------------------------------------------
// data/copy/dog-friendly.ts — Dog-friendly page
// ---------------------------------------------------------------------------

import type { FeaturePageSection } from "@/components/site/FeaturePage"

// ── Dog-friendly page ──────────────────────────────────────────────────────

export const dogFriendlySections = [
  {
    eyebrow: "Bring the dog along",
    title:
      "A dog-friendly pub visit works best when the setting already suits a slower stop.",
    description:
      "The Old School House works well for dog-friendly pub visits because it is simple to find on London Road and gives you more than one place to settle in once you arrive.",
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
    title: "It is still a proper pub visit, not just a quick water-bowl stop.",
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
] satisfies FeaturePageSection[]

export const dogFriendlyFaqSection = {
  eyebrow: "Dog-friendly FAQs",
  title: "A few quick answers before you set off with the dog.",
  description:
    "Most dog-friendly pub visits only need a little planning to run smoothly.",
  faqs: [
    {
      question: "Is The Old School House dog-friendly?",
      answer:
        "Yes. The pub works well for dog-friendly visits, especially if you want outdoor seating in the front garden or courtyard.",
    },
    {
      question: "Do I need to book if I am bringing the dog?",
      answer:
        "If you are planning to eat or visit at a busier time, booking ahead is the safest option.",
    },
    {
      question: "What is the best next step before I visit?",
      answer:
        "Book a table if the plan is already set, or call ahead if you want the calmest place to settle with the dog.",
    },
  ],
}

export const dogFriendlyInlineCtaCopy = {
  title: "Get the table sorted now if the plan is already set.",
  description:
    "That keeps the dog-friendly part of the visit easy before you even arrive.",
}

export const dogFriendlySignoffCopy = {
  eyebrow: "Next step",
  title: "Book the table or plan the route over.",
  body: "The Old School House is easy to work into a day in Stony Stratford, whether you are stopping for a drink, lunch, or a longer catch-up with the dog along too.",
}
