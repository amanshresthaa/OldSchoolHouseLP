import type { Metadata } from "next"
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  beerGardenFaqSection,
  beerGardenInlineCtaCopy,
  beerGardenSections,
  beerGardenSignoffCopy,
  commonActionLabels,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/beer-garden-stony-stratford")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function BeerGardenPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      sections={beerGardenSections}
      faqSection={beerGardenFaqSection}
      inlineCta={beerGardenInlineCtaCopy}
      signoff={{
        eyebrow: beerGardenSignoffCopy.eyebrow,
        title: beerGardenSignoffCopy.title,
        body: <p>{beerGardenSignoffCopy.body}</p>,
        actions: [
          {
            href: "/book",
            label: commonActionLabels.bookTable,
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/contact-us",
            label: commonActionLabels.planVisit,
            icon: <MapPin className="size-4" />,
          },
        ],
      }}
    />
  )
}
