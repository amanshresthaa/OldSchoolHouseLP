import type { Metadata } from "next"
import { ArrowRight, Television } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  commonActionLabels,
  liveSportFaqSection,
  liveSportInlineCtaCopy,
  liveSportSections,
  liveSportSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/live-sports")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function LiveSportPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      sections={liveSportSections}
      faqSection={liveSportFaqSection}
      inlineCta={liveSportInlineCtaCopy}
      signoff={{
        eyebrow: liveSportSignoffCopy.eyebrow,
        title: liveSportSignoffCopy.title,
        body: <p>{liveSportSignoffCopy.body}</p>,
        actions: [
          {
            href: "/book",
            label: commonActionLabels.bookTable,
            icon: <Television className="size-4" />,
          },
          {
            href: "/whats-on",
            label: commonActionLabels.seeWhatsOn,
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
