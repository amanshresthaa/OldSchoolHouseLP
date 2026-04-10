import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  commonActionLabels,
  getNepaleseCuisineClusterLinks,
  momoFaqSection,
  momoInlineCtaCopy,
  momoPreludeCopy,
  momoSections,
  momoSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/momo")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function MomoPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      prelude={
        <TopicClusterSection
          eyebrow={momoPreludeCopy.eyebrow}
          title={momoPreludeCopy.title}
          description={momoPreludeCopy.description}
          links={getNepaleseCuisineClusterLinks(route!.href)}
          muted
        />
      }
      sections={momoSections}
      faqSection={momoFaqSection}
      inlineCta={momoInlineCtaCopy}
      signoff={{
        eyebrow: momoSignoffCopy.eyebrow,
        title: momoSignoffCopy.title,
        body: <p>{momoSignoffCopy.body}</p>,
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
