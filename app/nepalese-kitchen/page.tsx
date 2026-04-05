import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  nepaleseCuisineHubLink,
  nepaleseCuisineSpokeLinks,
  nepaleseKitchenFaqSection,
  nepaleseKitchenInlineCtaCopy,
  nepaleseKitchenSections,
  nepaleseKitchenSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/nepalese-kitchen")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function NepaleseKitchenPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      prelude={
        <TopicClusterSection
          eyebrow="Authority cluster"
          title="The commercial kitchen page now sits inside a wider Nepalese content hub."
          description="Use the pillar guide for the full cuisine overview, then open the supporting spokes if you want dish-level, comparison-level, or dietary detail before you book."
          links={[nepaleseCuisineHubLink, ...nepaleseCuisineSpokeLinks]}
          muted
        />
      }
      sections={nepaleseKitchenSections}
      faqSection={nepaleseKitchenFaqSection}
      inlineCta={nepaleseKitchenInlineCtaCopy}
      signoff={{
        eyebrow: nepaleseKitchenSignoffCopy.eyebrow,
        title: nepaleseKitchenSignoffCopy.title,
        body: <p>{nepaleseKitchenSignoffCopy.body}</p>,
        actions: [
          {
            href: "/nepalese-food-milton-keynes",
            label: "Read the pillar guide",
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
