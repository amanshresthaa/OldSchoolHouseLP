import type { Metadata } from "next"
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  beerGardenFaqSection,
  beerGardenInlineCtaCopy,
  beerGardenSections,
  beerGardenSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/beer-garden-stony-stratford")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function BeerGardenPage() {
  return (
    <FeaturePage
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
            label: "Book a table",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/find-us",
            label: "Plan your visit",
            icon: <MapPin className="size-4" />,
          },
        ],
      }}
    />
  )
}
