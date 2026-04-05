import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  getNepaleseCuisineClusterLinks,
  momoFaqSection,
  momoInlineCtaCopy,
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
          eyebrow="Read next"
          title="This momo guide feeds back into the full Nepalese cuisine pillar."
          description="If you arrived through a dish-specific search, use the pillar guide next for the broader cuisine overview and the other spoke pages for comparison or dietary detail."
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
