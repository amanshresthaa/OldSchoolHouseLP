import type { Metadata } from "next"
import { Car, MapPin, Phone, Wheelchair } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  accessibilityFaqSection,
  accessibilityInlineCtaCopy,
  accessibilitySections,
  accessibilitySignoffCopy,
} from "@/data/copy"
import { sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/accessibility")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function AccessibilityPage() {
  return (
    <FeaturePage
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
            label: "Call the pub",
            icon: <Phone className="size-4" />,
          },
          {
            href: "/find-us",
            label: "Find us",
            icon: <MapPin className="size-4" />,
          },
          {
            href: "/book",
            label: "Book a table",
            icon: <Car className="size-4" />,
          },
        ],
        details: (
          <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 text-sm leading-7 text-on-surface shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 md:text-base">
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
