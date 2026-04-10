import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  commonActionLabels,
  nepaleseClusterPreludeCopy,
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
          eyebrow={nepaleseClusterPreludeCopy.nepaleseKitchen.eyebrow}
          title={nepaleseClusterPreludeCopy.nepaleseKitchen.title}
          description={nepaleseClusterPreludeCopy.nepaleseKitchen.description}
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
            label: commonActionLabels.readPillarGuide,
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/book",
            label: commonActionLabels.bookTable,
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
