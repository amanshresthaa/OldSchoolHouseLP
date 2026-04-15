import type { Metadata } from "next"
import { Car, MapPin, Phone, Wheelchair } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  accessibilityFaqSection,
  accessibilityInlineCtaCopy,
  accessibilitySections,
  accessibilitySignoffCopy,
  commonActionLabels,
} from "@/data/copy"
import { sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/accessibility")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function AccessibilityPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      sections={accessibilitySections}
      faqSection={accessibilityFaqSection}
      inlineCta={accessibilityInlineCtaCopy}
      signoff={{
        eyebrow: accessibilitySignoffCopy.eyebrow,
        title: accessibilitySignoffCopy.title,
        body: <p>{accessibilitySignoffCopy.body}</p>,
        actions: [
          {
            href: sitePhoneHref,
            label: commonActionLabels.callPub,
            icon: <Phone className="size-4" />,
          },
          {
            href: "/contact-us",
            label: commonActionLabels.findUs,
            icon: <MapPin className="size-4" />,
          },
          {
            href: "/book",
            label: commonActionLabels.bookTable,
            icon: <Car className="size-4" />,
          },
        ],
        details: (
          <div className="surface-panel text-sm leading-7 text-on-surface md:text-base">
            <div className="flex items-start gap-3">
              <Wheelchair className="mt-1 size-5 shrink-0 text-secondary" />
              <p>{accessibilitySignoffCopy.accessibilityNote}</p>
            </div>
          </div>
        ),
      }}
    />
  )
}
