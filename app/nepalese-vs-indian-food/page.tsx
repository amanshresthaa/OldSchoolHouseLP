import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  commonActionLabels,
  getNepaleseCuisineClusterLinks,
  nepaleseClusterPreludeCopy,
  nepaleseVsIndianFaqSection,
  nepaleseVsIndianInlineCtaCopy,
  nepaleseVsIndianSections,
  nepaleseVsIndianSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/nepalese-vs-indian-food")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function NepaleseVsIndianFoodPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      prelude={
        <TopicClusterSection
          eyebrow={nepaleseClusterPreludeCopy.nepaleseVsIndian.eyebrow}
          title={nepaleseClusterPreludeCopy.nepaleseVsIndian.title}
          description={nepaleseClusterPreludeCopy.nepaleseVsIndian.description}
          links={getNepaleseCuisineClusterLinks(route!.href)}
          muted
        />
      }
      sections={nepaleseVsIndianSections}
      faqSection={nepaleseVsIndianFaqSection}
      inlineCta={nepaleseVsIndianInlineCtaCopy}
      signoff={{
        eyebrow: nepaleseVsIndianSignoffCopy.eyebrow,
        title: nepaleseVsIndianSignoffCopy.title,
        body: <p>{nepaleseVsIndianSignoffCopy.body}</p>,
        actions: [
          {
            href: "/nepalese-food-milton-keynes",
            label: commonActionLabels.readPillarGuide,
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/our-menus",
            label: commonActionLabels.browseMenu,
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
