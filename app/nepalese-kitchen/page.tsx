import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  nepaleseKitchenFaqSection,
  nepaleseKitchenInlineCtaCopy,
  nepaleseKitchenSections,
  nepaleseKitchenSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/nepalese-kitchen")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function NepaleseKitchenPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={nepaleseKitchenSections}
      faqSection={nepaleseKitchenFaqSection}
      inlineCta={nepaleseKitchenInlineCtaCopy}
      signoff={{
        eyebrow: nepaleseKitchenSignoffCopy.eyebrow,
        title: nepaleseKitchenSignoffCopy.title,
        body: <p>{nepaleseKitchenSignoffCopy.body}</p>,
        actions: [
          {
            href: "/momo",
            label: "Start with momo",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/menu",
            label: "View full menu",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
