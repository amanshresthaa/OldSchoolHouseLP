import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  traditionalPubFaqSection,
  traditionalPubInlineCtaCopy,
  traditionalPubSections,
  traditionalPubSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/traditional-pub-with-nepalese-kitchen")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function TraditionalPubWithNepaleseKitchenPage() {
  return (
    <FeaturePage
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
            href: "/menu",
            label: "View menu",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/nepalese-kitchen",
            label: "Explore the kitchen",
            icon: <ForkKnife className="size-4" />,
          },
        ],
      }}
    />
  )
}
