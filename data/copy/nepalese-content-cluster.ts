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

export function getNepaleseCuisineSpokeLinks(currentHref?: string) {
  return nepaleseCuisineSpokeLinks.filter((link) => link.href !== currentHref)
}

export function getNepaleseCuisineClusterLinks(currentHref?: string) {
  return [nepaleseCuisineHubLink, ...getNepaleseCuisineSpokeLinks(currentHref)]
}
