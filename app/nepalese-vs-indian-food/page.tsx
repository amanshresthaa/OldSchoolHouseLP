import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  nepaleseVsIndianFaqSection,
  nepaleseVsIndianInlineCtaCopy,
  nepaleseVsIndianSections,
  nepaleseVsIndianSignoffCopy,
} from "@/data/copy/nepalese-vs-indian"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/nepalese-vs-indian-food")

export const metadata: Metadata = buildPageMetadata(route!.meta)

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
            label: "See the kitchen",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/menu",
            label: "Browse the menu",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
