// ---------------------------------------------------------------------------
// data/copy/nepalese-vs-indian.ts — Nepalese vs Indian food page
// ---------------------------------------------------------------------------

import type { FeaturePageSection } from "@/components/site/FeaturePage"

// ── Nepalese vs Indian food page ───────────────────────────────────────────

export const nepaleseVsIndianSections: FeaturePageSection[] = [
  {
    eyebrow: "A simple guide",
    title:
      "Nepalese and Indian food share spice and comfort, but the details on the plate are noticeably different.",
    description:
      "A lot of visitors recognise Indian dishes first, so it helps to have a plain-English explanation before ordering. At The Old School House, the clearest way to understand the difference is to look at what changes in flavour, shape, and how the food is served.",
    columns: 3,
    cards: [
      {
        title: "Brighter sharp notes, not just rich sauce",
        description:
          "Indian curries often lean creamy, buttery, or deeply sauce-led, while Nepalese cooking more often brings sharper tomato, sesame, herb, and pickle notes that cut through the richness and make the plate taste brighter.",
      },
      {
        title: "Momo and grills change the rhythm of the meal",
        description:
          "Nepalese food often starts with momo, grilled meats, and chutneys, so the table can begin with dumplings and smoky plates before moving into curries. That feels different from the bread-and-curry pattern many people expect from Indian meals.",
      },
      {
        title: "The seasoning lands differently",
        description:
          "Nepalese dishes often bring a fresher heat and more savoury edge, with ingredients such as fresh coriander, ginger, garlic, sesame, and achar-style pickles giving the food a cleaner finish than the richer, sweeter, or creamier profile people may associate with Indian restaurant staples.",
      },
    ],
  },
  {
    eyebrow: "How it works here",
    title:
      "You are not choosing between two restaurant styles. You are choosing a pub with a menu that goes further.",
    description:
      "The Old School House keeps everything approachable because the setting is still a proper Stony Stratford pub. That makes trying the Nepalese side of the menu inviting rather than intimidating.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Start with the recognisable dishes",
        description:
          "Momo, curries, and grilled dishes give you a simple way into the kitchen without needing to decode a long list of unfamiliar terms.",
      },
      {
        title: "Keep the wider pub menu in view",
        description:
          "If part of the table wants pub comfort and part wants to explore the Nepalese dishes, The Old School House is built to handle both in the same meal.",
      },
    ],
  },
]

export const nepaleseVsIndianFaqSection = {
  eyebrow: "Guide FAQs",
  title: "A few simple answers before you order.",
  description:
    "This guide is here to make the first order simpler, not to overload you with detail.",
  faqs: [
    {
      question: "Why do people compare Nepalese and Indian food?",
      answer:
        "Because many people know Indian dishes first, and a short explanation helps show what makes the Nepalese side of the menu distinct once you start ordering.",
    },
    {
      question: "What should I order if I want an easy introduction?",
      answer:
        "Start with the momo, then move into the wider kitchen favourites if you want to keep exploring.",
    },
    {
      question: "Do I need to know the difference before I visit?",
      answer:
        "Not at all. The guide is only there to make the menu more approachable. You can always browse the kitchen page and book when you are ready.",
    },
  ],
}

export const nepaleseVsIndianInlineCtaCopy = {
  title: "Once the difference is clearer, the menu usually is too.",
  description:
    "Use the kitchen page or the full menu next, then book when the table plan is set.",
}

export const nepaleseVsIndianSignoffCopy = {
  eyebrow: "Next step",
  title: "Turn the guide into a real table and a real first order.",
  body: "The best next move is simple: look at the Nepalese kitchen, choose a few dishes that sound right, and book the table.",
}
