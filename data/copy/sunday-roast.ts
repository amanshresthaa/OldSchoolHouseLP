// ---------------------------------------------------------------------------
// data/copy/sunday-roast.ts — Sunday roast page
// ---------------------------------------------------------------------------

import type { FeaturePageSection } from "@/components/site/FeaturePage"

// ── Sunday roast page ──────────────────────────────────────────────────────

export const sundayRoastSections = [
  {
    eyebrow: "Available every Sunday from 12pm",
    title:
      "A proper Sunday roast, served the way people want it from a Stony Stratford pub.",
    description:
      "All roasts are served with fluffy roast potatoes, seasonal vegetables, Yorkshire pudding, and gravy. It is the kind of Sunday lunch that feels straightforward to book and easy to build a weekend around.",
    columns: 3,
    cards: [
      {
        title: "Any starter and a roast for £17.99",
        description:
          "Turn Sunday lunch into a fuller meal with any starter and a roast for £17.99. Add a pudding for £3.49 more.",
      },
      {
        title: "Choose the roast that suits you",
        description:
          "Roast topside of beef is £17.49, roast loin of pork is £15.49, roast chicken breast is £15.49, and the roast plant-based meatloaf is £14.49.",
      },
      {
        title: "Go big with the Super Roast",
        description:
          "If you cannot choose, the Super Roast is £19.99 and brings together beef, pork, and chicken with cauliflower and leek cheese on the plate.",
      },
    ],
  },
  {
    eyebrow: "Extras worth knowing about",
    title: "There is room to make Sunday lunch feel a bit more generous.",
    description:
      "If your table likes the full Sunday treatment, there are a few details worth knowing before you book.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Add cauliflower and leek cheese",
        description:
          "A side of cauliflower and leek cheese is available for £4.99 if you want to make the roast feel even more indulgent.",
      },
      {
        title: "Book ahead before Sunday fills up",
        description:
          "Sunday lunch is one of the clearest reasons to head out for the pub. Booking ahead gets the table sorted before the day gets busy and the best times go.",
      },
    ],
  },
] satisfies FeaturePageSection[]

export const sundayRoastChecklist = {
  eyebrow: "Sunday roast choices",
  title: "The current Sunday offer at a glance.",
  description:
    "Use this as the quick version before you head to the full menu, compare it with the lunch offer, or book the table.",
  items: [
    "Roast topside of beef — £17.49",
    "Roast loin of pork — £15.49",
    "Roast chicken breast — £15.49",
    "Roast plant-based meatloaf — £14.49",
    "Any starter and a standard roast — £17.99",
    "Add a pudding for £3.49",
    "Super Roast with beef, pork, chicken, and cauliflower and leek cheese — £19.99",
  ],
}

export const sundayRoastFaqSection = {
  eyebrow: "Sunday FAQs",
  title: "Everything you need before you book Sunday lunch.",
  description:
    "A few quick answers usually make it easier to settle on the plan and get the table booked.",
  faqs: [
    {
      question: "What time are Sunday roasts available?",
      answer: "Sunday roasts are available every Sunday from 12pm.",
    },
    {
      question: "What comes with the roast?",
      answer:
        "All roasts are served with fluffy roast potatoes, seasonal vegetables, Yorkshire pudding, and gravy.",
    },
    {
      question: "Does the starter and roast offer include the Super Roast?",
      answer: "No. The starter and roast deal excludes the Super Roast.",
    },
    {
      question: "Can I see the wider menu as well?",
      answer:
        "Yes. If you want to browse beyond the roast options, head to the full menu where you can also compare the lunch menu and full English before you book.",
    },
  ],
}

export const sundayRoastInlineCtaCopy = {
  title: "Book the table now if Sunday lunch is already in the diary.",
  description:
    "That way the pub part is taken care of before you even set off for London Road.",
}

export const sundayRoastSignoffCopy = {
  eyebrow: "Keep planning",
  title: "Get Sunday sorted, then see what else is on the menu.",
  body: "Sunday lunch is one of the strongest reasons to head into town and settle in for a proper pub meal. Get the table sorted first, then browse the wider menu if you want to compare it with the lunch menu, the full English, or a later full-menu visit.",
}
