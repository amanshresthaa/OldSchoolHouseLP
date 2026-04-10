import type { Metadata } from "next"
import { ArrowRight, BookOpenText } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  commonActionLabels,
  nepaleseClusterPreludeCopy,
  nepaleseCuisineSpokeLinks,
  nepaleseFoodMiltonKeynesFaqSection,
  nepaleseFoodMiltonKeynesInlineCtaCopy,
  nepaleseFoodMiltonKeynesSections,
  nepaleseFoodMiltonKeynesSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/nepalese-food-milton-keynes")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function NepaleseFoodMiltonKeynesPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      pageType="CollectionPage"
      prelude={
        <TopicClusterSection
          eyebrow={nepaleseClusterPreludeCopy.nepaleseFoodMiltonKeynes.eyebrow}
          title={nepaleseClusterPreludeCopy.nepaleseFoodMiltonKeynes.title}
          description={
            nepaleseClusterPreludeCopy.nepaleseFoodMiltonKeynes.description
          }
          links={nepaleseCuisineSpokeLinks}
          muted
        />
      }
      sections={nepaleseFoodMiltonKeynesSections}
      faqSection={nepaleseFoodMiltonKeynesFaqSection}
      inlineCta={nepaleseFoodMiltonKeynesInlineCtaCopy}
      signoff={{
        eyebrow: nepaleseFoodMiltonKeynesSignoffCopy.eyebrow,
        title: nepaleseFoodMiltonKeynesSignoffCopy.title,
        body: <p>{nepaleseFoodMiltonKeynesSignoffCopy.body}</p>,
        actions: [
          {
            href: "/menu",
            label: commonActionLabels.browseMenu,
            icon: <BookOpenText className="size-4" />,
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
