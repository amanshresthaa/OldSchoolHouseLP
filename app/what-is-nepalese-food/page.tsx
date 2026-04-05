import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  getNepaleseCuisineClusterLinks,
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
          eyebrow="Read next"
          title="This guide is one spoke in a wider Nepalese cuisine cluster."
          description="Use the pillar guide for the full overview, then branch into the related dish, comparison, and dietary pages that match the question you still have."
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
            label: "Read the pillar guide",
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
