import type { Metadata } from "next"
import {
  ArrowRight,
  CalendarDots,
  ForkKnife,
  PawPrint,
  Sun,
} from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  whereToEatFaqSection,
  whereToEatInlineCtaCopy,
  whereToEatSections,
  whereToEatSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/where-to-eat-in-stony-stratford")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function WhereToEatInStonyStratfordPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={whereToEatSections}
      inlineCta={{
        ...whereToEatInlineCtaCopy,
        actions: [
          {
            href: "/sunday-roast",
            label: "Sunday roast",
            icon: <CalendarDots className="size-4" />,
          },
          {
            href: "/nepalese-kitchen",
            label: "Nepalese kitchen",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/beer-garden-stony-stratford",
            label: "Beer garden",
            icon: <Sun className="size-4" />,
          },
          {
            href: "/dog-friendly-pub-stony-stratford",
            label: "Dog-friendly",
            icon: <PawPrint className="size-4" />,
          },
        ],
      }}
      faqSection={whereToEatFaqSection}
      signoff={{
        eyebrow: whereToEatSignoffCopy.eyebrow,
        title: whereToEatSignoffCopy.title,
        body: <p>{whereToEatSignoffCopy.body}</p>,
        actions: [
          {
            href: "/menu",
            label: "Browse the menu",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/book",
            label: "Book a table",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
