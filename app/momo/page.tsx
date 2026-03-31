import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  momoFaqSection,
  momoInlineCtaCopy,
  momoSections,
  momoSignoffCopy,
} from "@/data/copy/momo"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/momo")

export const metadata: Metadata = buildPageMetadata(route!.meta)

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
            label: "See the kitchen",
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
