// ---------------------------------------------------------------------------
// data/copy/where-to-eat.ts — Where to eat in Stony Stratford page
// ---------------------------------------------------------------------------

import type { FeaturePageSection } from "@/components/site/FeaturePage"

// ── Where to eat in Stony Stratford page ───────────────────────────────────

export const whereToEatSections: FeaturePageSection[] = [
  {
    eyebrow: "Choosing the right kind of stop",
    title:
      "The best places to choose in Stony Stratford are the ones that work for more than one plan.",
    description:
      "The Old School House suits a proper pub meal, Sunday lunch, a catch-up over drinks, a group table, or a visit built around trying something different from the Nepalese kitchen. That makes it simpler to choose when the outing itself is still taking shape.",
    columns: 3,
    cards: [
      {
        title: "A proper pub first",
        description:
          "The setting is warm, familiar, and easy to read from the moment you arrive, with exposed brick, wooden floors, and the kind of local feel people expect from a Stony Stratford pub.",
      },
      {
        title: "Food that goes beyond the standard pub line-up",
        description:
          "The Nepalese kitchen gives people more reason to remember the meal, especially if the group wants something more distinctive without leaving the comfort of a pub setting.",
      },
      {
        title: "Useful for different kinds of outing",
        description:
          "Sunday plans, couples' dinners, group meals, family tables, live sport, and slower drinks in the garden can all fit under one roof.",
      },
    ],
  },
  {
    eyebrow: "If you already know the plan",
    title:
      "Use the page that fits the outing rather than starting from scratch.",
    description:
      "The quickest way into the right page is to match the visit type first, then move into menu, booking, or directions once the plan looks settled.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Start with Sunday roast, the garden, or live sport",
        description:
          "Those pages work best when the outing category is already clear and you simply need a strong local option that feels worth booking.",
      },
      {
        title:
          "Start with the Nepalese kitchen if you want something different",
        description:
          "That route works especially well when the group wants more than standard pub food but still wants the reassurance of a proper local setting.",
      },
    ],
  },
]

export const whereToEatInlineCtaCopy = {
  title:
    "Move into the page that fits the plan if one of those options already sounds right.",
  description:
    "That usually gets you to the booking decision much faster than browsing everything at once.",
}

export const whereToEatFaqSection = {
  eyebrow: "Local guide FAQs",
  title: "A few quick answers if you are still deciding where to go.",
  description:
    "These are the questions that usually help most when the visit is still only half-formed.",
  faqs: [
    {
      question:
        "What makes The Old School House a strong option in Stony Stratford?",
      answer:
        "It works as a traditional pub first, then gives the visit more identity through the Nepalese kitchen, the front garden, the courtyard, and the wider reasons to return for sport or events.",
    },
    {
      question: "Is it more of a pub or a restaurant?",
      answer:
        "It is a pub first. That is the main entry point. The Nepalese kitchen is what makes the food more memorable once you are here.",
    },
    {
      question: "What is the best next step if I am nearly decided?",
      answer:
        "Go to the menu if you want to browse first, or head straight to booking if the plan is already formed.",
    },
  ],
}

export const whereToEatSignoffCopy = {
  eyebrow: "Next step",
  title: "Move from local browsing into the page that fits your visit best.",
  body: "Once the outing has a shape to it, the right next page usually makes the rest of the decision much easier.",
}
