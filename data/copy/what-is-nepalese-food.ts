// ---------------------------------------------------------------------------
// data/copy/what-is-nepalese-food.ts — What is Nepalese food page
// ---------------------------------------------------------------------------

import type { FeaturePageSection } from "@/components/site/FeaturePage"

// ── What is Nepalese food page ─────────────────────────────────────────────

export const whatIsNepaleseFoodSections: FeaturePageSection[] = [
  {
    eyebrow: "A simple starting point",
    title:
      "Nepalese food here means warming dishes, good sharing plates, and a menu that is simple to try in a pub setting.",
    description:
      "At The Old School House, Nepalese food is not treated like a separate concept hidden at the back of the menu. It is part of what makes the pub memorable once you are already settled in.",
    columns: 3,
    cards: [
      {
        title: "Start with momo",
        description:
          "Momo is one of the clearest introductions to the kitchen. It is simple to share, simple to order first, and a good way to try something new without making the whole meal feel unfamiliar.",
      },
      {
        title: "Move into curries and grilled dishes",
        description:
          "Once the table is comfortable, the kitchen opens up into richer dishes that bring more warmth and more identity than a standard pub menu on its own.",
      },
      {
        title: "Keep the pub comfort in view",
        description:
          "The setting is still a traditional Stony Stratford pub with exposed brick, wooden floors, and the kind of relaxed atmosphere that makes trying new food straightforward.",
      },
    ],
  },
  {
    eyebrow: "Why it suits this venue",
    title:
      "The best part is that you do not need to choose between a proper pub and more interesting food.",
    description:
      "Some tables want familiar pub favourites. Others want to try something they would not usually order. The Old School House works because both can happen in the same visit.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Good for mixed tables",
        description:
          "Families, groups, couples, and food-curious regulars can order across the menu without the evening feeling split between two different identities.",
      },
      {
        title: "Easy to try without overthinking it",
        description:
          "You do not need a long explanation before you visit. A quick look at the kitchen page or the menu is usually enough to make the first booking feel easy.",
      },
    ],
  },
]

export const whatIsNepaleseFoodFaqSection = {
  eyebrow: "Food guide FAQs",
  title: "A few quick answers if you are still deciding where to start.",
  description:
    "The aim is to make the food more approachable, not to turn the menu into a lesson.",
  faqs: [
    {
      question: "What is the best first dish if I am new to Nepalese food?",
      answer:
        "Start with momo. It is one of the simplest first orders on the menu and a natural way into the rest of the kitchen.",
    },
    {
      question: "Is the Nepalese food separate from the pub offer?",
      answer:
        "No. The Old School House is still a traditional pub first. The Nepalese kitchen is what gives the food side of the visit more personality once you are here.",
    },
    {
      question: "Can I still order across the wider menu?",
      answer:
        "Yes. One of the strengths of the venue is that the Nepalese dishes and the wider pub menu sit comfortably alongside each other.",
    },
  ],
}

export const whatIsNepaleseFoodInlineCtaCopy = {
  title:
    "If the food sounds like your kind of table, the next step is seeing the kitchen in context.",
  description:
    "That usually makes the first order, and the booking itself, much easier to picture.",
}

export const whatIsNepaleseFoodSignoffCopy = {
  eyebrow: "Next step",
  title: "Move from the guide into the dishes themselves.",
  body: "The best next move is to look at the Nepalese kitchen, then use the full menu to decide what the table would actually order.",
}
