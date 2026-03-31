import type { Metadata } from "next"
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  whereToEatFaqSection,
  whereToEatInlineCtaCopy,
  whereToEatSections,
  whereToEatSignoffCopy,
} from "@/data/copy/where-to-eat"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/where-to-eat-in-stony-stratford")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function WhereToEatInStonyStratfordPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={whereToEatSections}
      faqSection={whereToEatFaqSection}
      inlineCta={whereToEatInlineCtaCopy}
      signoff={{
        eyebrow: whereToEatSignoffCopy.eyebrow,
        title: whereToEatSignoffCopy.title,
        body: <p>{whereToEatSignoffCopy.body}</p>,
        actions: [
          {
            href: "/find-us",
            label: "Plan your visit",
            icon: <MapPin className="size-4" />,
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
