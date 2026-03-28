import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  momoFaqSection,
  momoInlineCtaCopy,
  momoSections,
  momoSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/momo")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function MomoPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={momoSections}
      faqSection={momoFaqSection}
      inlineCta={momoInlineCtaCopy}
      signoff={{
        eyebrow: momoSignoffCopy.eyebrow,
        title: momoSignoffCopy.title,
        body: <p>{momoSignoffCopy.body}</p>,
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
