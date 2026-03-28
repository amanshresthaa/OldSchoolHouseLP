// ---------------------------------------------------------------------------
// data/copy/family-friendly.ts — Family-friendly page
// ---------------------------------------------------------------------------

import type { FeaturePageSection } from "@/components/site/FeaturePage"

// ── Family-friendly page ───────────────────────────────────────────────────

export const familyFriendlySections: FeaturePageSection[] = [
  {
    eyebrow: "Family visits",
    title:
      "A family-friendly pub works best when everyone can find their place at the table.",
    description:
      "The Old School House suits family meals because the setting is relaxed, the menu is broad enough for mixed tastes, and the pub stays welcoming rather than formal.",
    columns: 3,
    cards: [
      {
        title: "A warm traditional pub setting",
        description:
          "Exposed brick, wooden floors, and an easy-going room give family meals the comfort people expect from a proper local pub.",
      },
      {
        title: "A menu with more range",
        description:
          "Pub favourites and Nepalese dishes sit alongside one another, which makes mixed-age and mixed-taste tables much easier to organise.",
      },
      {
        title: "Useful for weekdays, weekends, and Sundays",
        description:
          "Whether it is a planned family lunch, a catch-up over dinner, or Sunday roast, the pub is set up to feel welcoming and straightforward.",
      },
    ],
  },
  {
    eyebrow: "Why it works here",
    title:
      "The visit feels easier when the pub can handle more than one kind of family plan.",
    description:
      "Some families want a shorter meal. Others want lunch to turn into another round and a longer catch-up. The Old School House suits both.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Outdoor space helps in better weather",
        description:
          "The front garden and private courtyard give family visits more flexibility when you want a bit more room around the table.",
      },
      {
        title: "Book ahead for the easiest day",
        description:
          "If you already know when you are coming in, booking ahead keeps the visit smooth and the table ready when you arrive.",
      },
    ],
  },
]

export const familyFriendlyFaqSection = {
  eyebrow: "Family-friendly FAQs",
  title: "A few quick answers before you plan the family meal.",
  description:
    "These are the details that usually help you decide whether it suits the family table.",
  faqs: [
    {
      question: "Is The Old School House family-friendly?",
      answer:
        "Yes. The pub is built around a warm, welcoming setting and a menu that works well for mixed-age and mixed-taste tables.",
    },
    {
      question: "Is it a good place for Sunday lunch with family?",
      answer:
        "Yes. Sunday is one of the strongest reasons to visit, and booking ahead helps you pick a time before lunch gets busy.",
    },
    {
      question: "What should I do next if I am planning a family meal?",
      answer:
        "Browse the menu first if you want to see the food mix, then book the table once the plan is set.",
    },
  ],
}

export const familyFriendlyInlineCtaCopy = {
  title: "Book the table now if the family meal is already taking shape.",
  description: "That keeps the visit easy before the group even sets off.",
}

export const familyFriendlySignoffCopy = {
  eyebrow: "Next step",
  title: "Browse the menu or go straight to booking.",
  body: "The Old School House works well when the table wants a proper pub setting first, then a menu with enough range to keep everyone happy once the order begins.",
}
