import type { TopicClusterLink } from "@/components/site/TopicClusterSection"

export const nepaleseCuisineHubLink: TopicClusterLink = {
  href: "/nepalese-food-milton-keynes",
  eyebrow: "Pillar guide",
  title: "The ultimate guide to Nepalese food in Milton Keynes",
  description:
    "A 101-level guide covering the cuisine's core anchors, how to read the menu, and which supporting guides answer the most specific questions next.",
}

export const nepaleseCuisineSpokeLinks: TopicClusterLink[] = [
  {
    href: "/what-is-nepalese-food",
    eyebrow: "Intro guide",
    title: "What is Nepalese food?",
    description:
      "A simpler starting point for first-timers who want the flavour profile and menu rhythm explained in plain English before they book.",
  },
  {
    href: "/momo",
    eyebrow: "Signature dish",
    title: "What is momo?",
    description:
      "A deep-dive on the Nepalese dumpling most likely to turn curiosity into a real first order at the table.",
  },
  {
    href: "/nepalese-vs-indian-food",
    eyebrow: "Comparison guide",
    title: "Nepalese vs Indian food",
    description:
      "A comparison-led spoke for diners who know Indian restaurant menus already and want to understand what changes here.",
  },
  {
    href: "/gluten-free-curries-stony-stratford",
    eyebrow: "Dietary guide",
    title: "Gluten-free curries in Stony Stratford",
    description:
      "A high-intent spoke built from the live menu, showing where gluten-free friendly choices currently appear and how to check safely before ordering.",
  },
]

export const nepaleseClusterPreludeCopy = {
  whatIsNepaleseFood: {
    eyebrow: "Read next",
    title: "This guide is one spoke in a wider Nepalese cuisine cluster.",
    description:
      "Use the pillar guide for the full overview, then branch into the related dish, comparison, and dietary pages that match the question you still have.",
  },
  nepaleseVsIndian: {
    eyebrow: "Read next",
    title: "This comparison page is one spoke in the Nepalese cuisine hub.",
    description:
      "Use the pillar guide for the full cuisine overview, then move through the dish and dietary spokes if you need a more practical next answer.",
  },
  momo: {
    eyebrow: "Read next",
    title: "This momo guide feeds back into the full Nepalese cuisine pillar.",
    description:
      "If you arrived through a dish-specific search, use the pillar guide next for the broader cuisine overview and the other spoke pages for comparison or dietary detail.",
  },
  nepaleseFoodMiltonKeynes: {
    eyebrow: "Hub and spoke",
    title: "This pillar guide connects the questions guests actually search.",
    description:
      "Use the spoke that matches the exact question you still have. Each one goes deeper on a single intent, then feeds authority back into this main Nepalese cuisine guide.",
  },
  nepaleseKitchen: {
    eyebrow: "Authority cluster",
    title:
      "The commercial kitchen page now sits inside a wider Nepalese content hub.",
    description:
      "Use the pillar guide for the full cuisine overview, then open the supporting spokes if you want dish-level, comparison-level, or dietary detail before you book.",
  },
  glutenFreeCurries: {
    eyebrow: "Read next",
    title: "This dietary spoke belongs to a wider Nepalese cuisine cluster.",
    description:
      "Start with the pillar guide for the full cuisine overview, then use the related spokes if you want dish-level or comparison-level detail.",
  },
}

export const momoPreludeCopy = nepaleseClusterPreludeCopy.momo

export function getNepaleseCuisineSpokeLinks(currentHref?: string) {
  return nepaleseCuisineSpokeLinks.filter((link) => link.href !== currentHref)
}

export function getNepaleseCuisineClusterLinks(currentHref?: string) {
  return [nepaleseCuisineHubLink, ...getNepaleseCuisineSpokeLinks(currentHref)]
}
