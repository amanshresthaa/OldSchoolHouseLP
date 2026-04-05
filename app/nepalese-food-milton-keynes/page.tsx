import type { Metadata } from "next"
import { ArrowRight, BookOpenText } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
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
          eyebrow="Hub and spoke"
          title="This pillar guide connects the questions guests actually search."
          description="Use the spoke that matches the exact question you still have. Each one goes deeper on a single intent, then feeds authority back into this main Nepalese cuisine guide."
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
            label: "Browse the menu",
            icon: <BookOpenText className="size-4" />,
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
