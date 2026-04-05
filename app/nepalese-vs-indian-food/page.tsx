import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  getNepaleseCuisineClusterLinks,
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
          eyebrow="Read next"
          title="This comparison page is one spoke in the Nepalese cuisine hub."
          description="Use the pillar guide for the full cuisine overview, then move through the dish and dietary spokes if you need a more practical next answer."
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
