import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  nepaleseVsIndianFaqSection,
  nepaleseVsIndianInlineCtaCopy,
  nepaleseVsIndianSections,
  nepaleseVsIndianSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/nepalese-vs-indian-food")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function NepaleseVsIndianFoodPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={nepaleseVsIndianSections}
      faqSection={nepaleseVsIndianFaqSection}
      inlineCta={nepaleseVsIndianInlineCtaCopy}
      signoff={{
        eyebrow: nepaleseVsIndianSignoffCopy.eyebrow,
        title: nepaleseVsIndianSignoffCopy.title,
        body: <p>{nepaleseVsIndianSignoffCopy.body}</p>,
        actions: [
          {
            href: "/nepalese-kitchen",
            label: "Explore the kitchen",
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
