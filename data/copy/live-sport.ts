// ---------------------------------------------------------------------------
// data/copy/live-sport.ts — Live sport page
// ---------------------------------------------------------------------------

import type { FeaturePageSection } from "@/components/site/FeaturePage"

// ── Live sport page ────────────────────────────────────────────────────────

export const liveSportSections = [
  {
    eyebrow: "Live sport at the pub",
    title: "Watch live sport in a pub that still feels like a proper local.",
    description:
      "The Old School House is the kind of place where the screen matters, but so do the drinks, the food, and the atmosphere around the table. That makes it a stronger choice than a screen-only stop.",
    columns: 3,
    cards: [
      {
        title: "Easy to plan ahead",
        description:
          "If live sport is the reason for the visit, booking ahead keeps the evening straightforward and gives your group a better start to the table.",
      },
      {
        title: "Built for more than one round",
        description:
          "A proper pub setting, a fuller menu, and room to settle in mean the visit does not have to end when the coverage does.",
      },
      {
        title: "A natural fit for sports socials",
        description:
          "If the sport is part of a bigger catch-up, the pub also works well for sports groups and casual socials that want food and drinks around the visit.",
      },
    ],
  },
  {
    eyebrow: "Why it works here",
    title:
      "The best sport-led visits happen when the whole venue still feels welcoming before and after the coverage.",
    description:
      "Live sport is part of the offer at The Old School House, but it sits inside a wider reason to visit: a traditional pub on London Road with food that makes staying longer feel worth it.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Big nights, easy planning",
        description:
          "Book ahead if you know you are coming in for live sport, or get in touch if it is part of a larger group plan that needs more room and a bit more shaping.",
      },
      {
        title: "Connected to the rest of the pub",
        description:
          "Sport might get the evening started, but the menu, the drinks, and the wider pub atmosphere are what make people want to come back for another night as well.",
      },
    ],
  },
] satisfies FeaturePageSection[]

export const liveSportFaqSection = {
  eyebrow: "Live sport FAQs",
  title: "Everything you need before a sport-led visit.",
  description:
    "If live sport is already part of the plan, a few quick answers usually make the booking decision easier.",
  faqs: [
    {
      question: "Should I book ahead if I am coming in for live sport?",
      answer:
        "Yes. If live sport is the reason for your visit, booking ahead is the safest way to keep the evening straightforward.",
    },
    {
      question: "Is this more of a sports bar or a pub?",
      answer:
        "It is a traditional pub first. Live sport is part of the offer, but the room, the drinks, and the food still do the work of making it feel like a proper pub visit.",
    },
    {
      question: "What if I am organising a bigger sports group?",
      answer:
        "If sport is part of a bigger social plan, use the private hire route or get in touch so the team can help with the best setup.",
    },
  ],
}

export const liveSportInlineCtaCopy = {
  title:
    "If live sport is the reason for the visit, get the table sorted before the room fills up.",
  description:
    "Then you can focus on the evening rather than trying to find space at the last minute.",
}

export const liveSportSignoffCopy = {
  eyebrow: "Next step",
  title: "Book the table, or keep browsing what's on at the pub.",
  body: "The Old School House works best when the sport is only one part of the visit and the pub around it gives you a reason to stay longer.",
}
