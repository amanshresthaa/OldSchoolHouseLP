import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  whatIsNepaleseFoodFaqSection,
  whatIsNepaleseFoodInlineCtaCopy,
  whatIsNepaleseFoodSections,
  whatIsNepaleseFoodSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/what-is-nepalese-food")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function WhatIsNepaleseFoodPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={whatIsNepaleseFoodSections}
      faqSection={whatIsNepaleseFoodFaqSection}
      inlineCta={whatIsNepaleseFoodInlineCtaCopy}
      signoff={{
        eyebrow: whatIsNepaleseFoodSignoffCopy.eyebrow,
        title: whatIsNepaleseFoodSignoffCopy.title,
        body: <p>{whatIsNepaleseFoodSignoffCopy.body}</p>,
        actions: [
          {
            href: "/nepalese-kitchen",
            label: "Explore the kitchen",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/menu",
            label: "View menu",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
