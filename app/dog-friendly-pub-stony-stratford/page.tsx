import type { Metadata } from "next"
import { ArrowRight, MapPin, PawPrint } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  dogFriendlyFaqSection,
  dogFriendlyInlineCtaCopy,
  dogFriendlySections,
  dogFriendlySignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/dog-friendly-pub-stony-stratford")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function DogFriendlyPubPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={dogFriendlySections}
      faqSection={dogFriendlyFaqSection}
      inlineCta={dogFriendlyInlineCtaCopy}
      signoff={{
        eyebrow: dogFriendlySignoffCopy.eyebrow,
        title: dogFriendlySignoffCopy.title,
        body: <p>{dogFriendlySignoffCopy.body}</p>,
        actions: [
          {
            href: "/book",
            label: "Book a table",
            icon: <PawPrint className="size-4" />,
          },
          {
            href: "/find-us",
            label: "Plan your visit",
            icon: <MapPin className="size-4" />,
          },
          {
            href: "/beer-garden-stony-stratford",
            label: "See outdoor seating",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
