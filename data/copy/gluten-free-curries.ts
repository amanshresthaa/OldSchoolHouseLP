import type { FeaturePageSection } from "@/components/site/FeaturePage"

export const glutenFreeCurriesSections: FeaturePageSection[] = [
  {
    eyebrow: "Why this page matters",
    title:
      "When someone searches for gluten-free curries in Stony Stratford, they usually need practical reassurance, not generic restaurant copy.",
    description:
      "The live menu at The Old School House already flags a meaningful number of dishes as GF. That makes it possible to build a genuine guide around the menu as it exists today, while still being clear that allergy questions should always be checked with the team before ordering.",
    columns: 3,
    cards: [
      {
        title: "The menu already surfaces GF choices",
        description:
          "Across starters, speciality mains, and the broader curry section, many dishes are currently marked GF on the live menu, which makes browsing easier before the visit.",
      },
      {
        title: "The guide stays tied to real dishes",
        description:
          "This page highlights actual menu examples such as Kathmandu Tikka, Himali Lamb, Khasi Ko Masu, Pokhareli Fish Curry, Chicken Rum Rum, and several curry bases rather than speaking in vague categories.",
      },
      {
        title: "Safety still depends on a real conversation",
        description:
          "Because dietary needs can be personal and service-day details matter, this guide should help you shortlist dishes, then prompt the right conversation with the pub before you order.",
      },
    ],
  },
  {
    eyebrow: "Where to look first",
    title:
      "If you are scanning the menu for gluten-free friendly options, the strongest sections are the starters, grills, and house mains.",
    description:
      "That makes the page useful for couples, mixed groups, and planners who need to know there is enough range for the table before they commit.",
    columns: 2,
    muted: true,
    cards: [
      {
        title: "Starters and share plates",
        description:
          "Onion Bhaji, Stuff Tandoori Mushroom, Chilli Mogo, Chilli Paneer, Garlic Mushroom, Chicken Wings, Chicken Tikka, Sheek Kebab, and Lamb Chops are all currently marked GF on the live menu.",
      },
      {
        title: "Speciality and curry-led mains",
        description:
          "Kathmandu Tikka, Rack of Lamb, Paneer Saslick, Salmon Tikka, Tandoori King Prawn, Special Veggie Tarkari, Bhutuwa Chicken, Bhutuwa Lamb, Special Butter Chicken, Lasun Kukhura Khursani, Lasun Khasi Khursani, Khasi Ko Masu, Pokhareli Fish Curry, Chicken Rum Rum, Kathmandu Tikka Masala, and the wider curry section all give the page real depth.",
      },
    ],
  },
  {
    eyebrow: "How to use the guide properly",
    title:
      "The best way to use a dietary spoke is to narrow the shortlist online, then confirm the details with the team on the day.",
    description:
      "That keeps the page genuinely useful without pretending that a website alone can replace a live allergy conversation.",
    columns: 3,
    cards: [
      {
        title: "Use the live HTML menu first",
        description:
          "The website menu is the best place to browse because it is more current and easier to scan by category than a saved screenshot or forwarded PDF.",
      },
      {
        title: "Mention gluten needs before ordering",
        description:
          "If the answer matters to today's visit, call ahead or tell the team at the table so they can guide you based on the service day's ingredients and handling.",
      },
      {
        title: "Build the rest of the table around certainty",
        description:
          "Once you know which starters and mains are strongest options, it becomes much easier to organise a mixed table where some people want pub classics and others want Nepalese dishes.",
      },
    ],
  },
]

export const glutenFreeCurriesFaqSection = {
  eyebrow: "Dietary guide FAQs",
  title: "A few clear answers before you rely on the menu.",
  description:
    "This page is there to make the first browsing step easier, not to replace an allergy conversation with the pub.",
  faqs: [
    {
      question: "Do you have gluten-free curries at The Old School House?",
      answer:
        "Yes, the live menu currently marks a number of curries and Nepalese mains as GF, including house signatures and the broader curry section.",
    },
    {
      question:
        "Is this enough if someone has coeliac disease or a serious allergy?",
      answer:
        "No. The page should help you shortlist dishes, but the safest next step is still to call ahead or speak to the team before ordering so they can advise based on the day.",
    },
    {
      question:
        "What kind of gluten-free friendly dishes can I look for first?",
      answer:
        "Start with the GF-marked starters, then look at Kathmandu Tikka, Himali Lamb, Khasi Ko Masu, Pokhareli Fish Curry, Chicken Rum Rum, and the labelled curry options.",
    },
    {
      question: "What should I open next after this page?",
      answer:
        "Go back to the pillar guide if you want the cuisine explained more broadly, or use the live menu and booking page if the table already feels close to decided.",
    },
  ],
}

export const glutenFreeCurriesInlineCtaCopy = {
  title:
    "If the shortlist already looks workable, the menu and booking page are the next practical stops.",
  description:
    "Then you can confirm the details directly with the team instead of making assumptions from an old menu image.",
}

export const glutenFreeCurriesSignoffCopy = {
  eyebrow: "Next step",
  title: "Use the shortlist, then confirm the details properly.",
  body: "Browse the live menu, call if the answer matters to today's visit, and book once the table knows there is enough choice to make the plan easy.",
}
