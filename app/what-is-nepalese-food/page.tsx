import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  commonActionLabels,
  getNepaleseCuisineClusterLinks,
  nepaleseClusterPreludeCopy,
  whatIsNepaleseFoodFaqSection,
  whatIsNepaleseFoodInlineCtaCopy,
  whatIsNepaleseFoodSections,
  whatIsNepaleseFoodSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/what-is-nepalese-food")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function WhatIsNepaleseFoodPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      prelude={
        <TopicClusterSection
          eyebrow={nepaleseClusterPreludeCopy.whatIsNepaleseFood.eyebrow}
          title={nepaleseClusterPreludeCopy.whatIsNepaleseFood.title}
          description={
            nepaleseClusterPreludeCopy.whatIsNepaleseFood.description
          }
          links={getNepaleseCuisineClusterLinks(route!.href)}
          muted
        />
      }
      sections={whatIsNepaleseFoodSections}
      faqSection={whatIsNepaleseFoodFaqSection}
      inlineCta={whatIsNepaleseFoodInlineCtaCopy}
      signoff={{
        eyebrow: whatIsNepaleseFoodSignoffCopy.eyebrow,
        title: whatIsNepaleseFoodSignoffCopy.title,
        body: <p>{whatIsNepaleseFoodSignoffCopy.body}</p>,
        actions: [
          {
            href: "/nepalese-food-milton-keynes",
            label: commonActionLabels.readPillarGuide,
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/menu",
            label: commonActionLabels.browseMenu,
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
