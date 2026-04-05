import type { FeaturePageSection } from "@/components/site/FeaturePage"

export const nepaleseFoodMiltonKeynesSections: FeaturePageSection[] = [
  {
    eyebrow: "Why this guide exists",
    title:
      "If you are searching for Nepalese food in Milton Keynes, you usually need context before you need a table.",
    description:
      "This pillar guide is designed to do the 101-level job properly. It explains the cuisine's most useful anchors, how those anchors show up on The Old School House menu in Stony Stratford, and which supporting guides answer the next question once your curiosity becomes more specific.",
    columns: 3,
    cards: [
      {
        title: "A cuisine with clear anchors",
        description:
          "The strongest way to understand Nepalese food is through a few recurring reference points: momo, the everyday meal structure of dal-bhat-tarkari, the bright lift of achaar, and the way regional variation shapes what lands on the plate.",
      },
      {
        title: "A menu that stays grounded in real dishes",
        description:
          "The Old School House does not need vague fusion language to explain the kitchen. The live menu already gives diners concrete entry points such as momo, goat curry, bhutuwa dishes, grilled specials, and kheer.",
      },
      {
        title: "A local route into Milton Keynes intent",
        description:
          "Stony Stratford sits inside the wider Milton Keynes catchment, so this page can satisfy broad Nepalese-food discovery intent while still moving people toward a real local visit on London Road.",
      },
    ],
  },
  {
    eyebrow: "The four anchors",
    title:
      "Most first-time readers only need four anchors to make Nepalese cuisine feel readable rather than unfamiliar.",
    description:
      "These are the concepts that turn a broad search into a clearer menu decision. They also stop the cuisine from being reduced to a vague catch-all label.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Momo is the easiest first step",
        description:
          "Momo gives diners an approachable first order because it is shareable, recognisable in format, and distinct enough to make the Nepalese side of the menu memorable straight away.",
      },
      {
        title: "Dal-bhat-tarkari explains the cuisine's backbone",
        description:
          "Even when a menu is not built around a full dal-bhat plate, the idea matters because it frames Nepalese food as everyday nourishment built from rice, lentils, vegetables, and practical balance rather than only restaurant-style richness.",
      },
      {
        title: "Achaar is where brightness and edge come in",
        description:
          "Achaar-style pickles and sharper accompaniments help explain why Nepalese food can feel fresher and cleaner on the palate than diners expect if they only compare it with richer curry-house reference points.",
      },
      {
        title: "Regional diversity keeps the cuisine broad",
        description:
          "Nepalese food is shaped by geography and community traditions, which is why dumplings, grills, curries, and comfort-led staples can all belong to the same wider culinary story without feeling contradictory.",
      },
    ],
  },
  {
    eyebrow: "How it shows up here",
    title:
      "At The Old School House, the fastest route into the cuisine is to map those anchors onto the dishes already on the table.",
    description:
      "The pub setting matters because it lowers the stakes for first-timers. You can start with one signature dish, then widen the order depending on whether the table wants grills, curries, pub classics, or a mixture of all three.",
    columns: 3,
    cards: [
      {
        title: "Start with momo for the table",
        description:
          "Both veg and chicken momo appear on the starter menu, making the signature dish easy to share over drinks before the rest of the order takes shape.",
      },
      {
        title: "Move into house curries and goat curry",
        description:
          "Khasi Ko Masu, Kathmandu Tikka Masala, Pokhareli Fish Curry, and the broader curry range give the meal warmth and depth once the table is ready to commit to the Nepalese side of the kitchen.",
      },
      {
        title: "Use the grills and sides to widen the meal",
        description:
          "Kathmandu Tikka, Himali Lamb, bhutuwa dishes, and supporting sides help the order feel sociable and varied rather than locked into one bowl-per-person rhythm.",
      },
    ],
  },
  {
    eyebrow: "Best next questions",
    title:
      "Once the overview has done its job, the right spoke page should answer the exact question that is still holding the booking back.",
    description:
      "That is the point of a hub-and-spoke cluster. You do not keep publishing disconnected explainers. You create a library where each page handles one clear intent and then hands authority back to the main guide.",
    columns: 2,
    muted: true,
    cards: [
      {
        title:
          "Use comparison content when the diner already knows Indian menus",
        description:
          "The Nepalese vs Indian page is the right next move when the question is not whether the food sounds good, but how it differs from a menu the guest already understands.",
      },
      {
        title:
          "Use dietary content when the decision needs practical reassurance",
        description:
          "The gluten-free guide is the right spoke when the guest is already interested, but needs a practical answer about which menu areas to inspect and how to double-check on the day.",
      },
    ],
  },
]

export const nepaleseFoodMiltonKeynesFaqSection = {
  eyebrow: "Nepalese cuisine FAQs",
  title: "Short answers for the questions that usually come next.",
  description:
    "The goal is to make the cuisine easier to understand, then move you into the spoke or commercial page that finishes the job.",
  faqs: [
    {
      question: "What is the best first Nepalese dish to try?",
      answer:
        "Momo is usually the easiest first dish because it is simple to share, easy to recognise, and distinctive enough to give the table a clear introduction.",
    },
    {
      question:
        "Why does this guide mention dal-bhat-tarkari if it is not the only thing on the menu?",
      answer:
        "Because it helps explain the backbone of Nepalese cuisine. A good pillar guide should explain the broader culinary structure, not only repeat the dish names already on the page.",
    },
    {
      question: "Is this page about Milton Keynes or Stony Stratford?",
      answer:
        "Both. Stony Stratford sits within the wider Milton Keynes catchment, so the guide answers broad search intent while pointing to a specific local place you can actually visit.",
    },
    {
      question: "What should I open next after this guide?",
      answer:
        "Choose the spoke that matches your question: the momo guide, the Nepalese-vs-Indian comparison, the gluten-free page, or the simpler intro guide to Nepalese food.",
    },
  ],
}

export const nepaleseFoodMiltonKeynesInlineCtaCopy = {
  title:
    "Once the cuisine feels clearer, the next useful move is the live menu or the Nepalese kitchen page.",
  description:
    "That is where broad understanding turns into a real first order, a real shortlist of dishes, and then a booking.",
}

export const nepaleseFoodMiltonKeynesSignoffCopy = {
  eyebrow: "Next step",
  title: "Turn the overview into a real visit.",
  body: "Use the menu if you are ready to choose dishes, or book now if the table plan is already there and you only needed the cuisine explained first.",
}
