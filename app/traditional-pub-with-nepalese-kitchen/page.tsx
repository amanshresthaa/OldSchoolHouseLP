import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  traditionalPubFaqSection,
  traditionalPubInlineCtaCopy,
  traditionalPubSections,
  traditionalPubSignoffCopy,
} from "@/data/copy/traditional-pub"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/traditional-pub-with-nepalese-kitchen")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function TraditionalPubWithNepaleseKitchenPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      sections={traditionalPubSections}
      faqSection={traditionalPubFaqSection}
      inlineCta={traditionalPubInlineCtaCopy}
      signoff={{
        eyebrow: traditionalPubSignoffCopy.eyebrow,
        title: traditionalPubSignoffCopy.title,
        body: <p>{traditionalPubSignoffCopy.body}</p>,
        actions: [
          {
            href: "/about",
            label: "About the pub",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/menu",
            label: "Browse the menu",
            icon: <ForkKnife className="size-4" />,
          },
        ],
      }}
    />
  )
}
