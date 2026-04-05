import type { Metadata } from "next"
import { ArrowRight, Television } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  liveSportFaqSection,
  liveSportInlineCtaCopy,
  liveSportSections,
  liveSportSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/live-sport")

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
            label: "Book a table",
            icon: <Television className="size-4" />,
          },
          {
            href: "/events",
            label: "See what's on",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
