// ---------------------------------------------------------------------------
// data/copy/beer-garden.ts — Beer garden page
// ---------------------------------------------------------------------------

import type { FeaturePageSection } from "@/components/site/FeaturePage"

// ── Beer garden page ───────────────────────────────────────────────────────

export const beerGardenSections = [
  {
    eyebrow: "Outdoor pub time",
    title:
      "A front garden for bright roadside pints, plus a courtyard that gives you a quieter way to stay outside.",
    description:
      "The Old School House has proper outdoor space, not just a few token tables. Out front, wooden benches catch the late afternoon sun and put you right in the hum of London Road. Behind the pub, the courtyard gives you a calmer corner for another drink, lunch, or dinner once the evening cools down.",
    columns: 3,
    cards: [
      {
        title: "Generous front garden",
        description:
          "The front garden is where cold pints, spritzes, and plates from the kitchen land best on a bright afternoon, with solid wooden seating that makes it easy to settle in rather than perch and rush off.",
      },
      {
        title: "Private courtyard behind the pub",
        description:
          "The courtyard sits a little more tucked away, so it suits a quieter catch-up, a later dinner, or the point in the day when you want another round without the roadside bustle.",
      },
      {
        title: "Easy to work into the day",
        description:
          "On London Road in Stony Stratford, it suits a quick pint in the sun, a burger or mixed grill over lunch, or the kind of meet-up that drifts into another round as the light starts to soften.",
      },
    ],
  },
  {
    eyebrow: "What makes it useful",
    title:
      "The outdoor space works best when it is supported by the rest of the pub.",
    description:
      "Good outside seating matters more when the pub also has the food, drinks, and atmosphere to keep the visit going once you are settled in.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Good for spontaneous visits",
        description:
          "When the weather turns in your favour, this is the sort of pub you can choose quickly because you know there is real outdoor seating waiting for you.",
      },
      {
        title: "Good for planned tables too",
        description:
          "If you are planning to eat, meet friends, or turn drinks into a longer visit, it is worth booking ahead and checking the rest of the menu at the same time.",
      },
    ],
  },
] satisfies FeaturePageSection[]

export const beerGardenFaqSection = {
  eyebrow: "Outdoor seating FAQs",
  title: "Everything you need before you head for the garden.",
  description:
    "A few quick answers should help you decide whether to book or just head over.",
  faqs: [
    {
      question: "Does The Old School House have proper outdoor seating?",
      answer:
        "Yes. The pub has a generous front garden with wooden seating as well as a private courtyard behind the main building.",
    },
    {
      question: "Is it worth booking if we want to sit outside?",
      answer:
        "If you know you want to eat or you are planning a busier visit, booking ahead is the easiest way to keep the plan simple.",
    },
    {
      question: "What should I do next if I am planning to visit?",
      answer:
        "Book a table if the plan is already set, or head to the Find Us page if you just want the quickest route over.",
    },
  ],
}

export const beerGardenInlineCtaCopy = {
  title: "Make the table the next step while the weather is helping.",
  description:
    "That way the outdoor plan is sorted before you arrive on London Road.",
}

export const beerGardenSignoffCopy = {
  eyebrow: "Next step",
  title: "Plan the route or book the table and let the weather do the rest.",
  body: "The Old School House is easy to work into the day once you know where you are heading and whether you want to book ahead.",
}
