import type { Metadata } from "next"
import { ArrowRight, Television } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  liveSportFaqSection,
  liveSportInlineCtaCopy,
  liveSportSections,
  liveSportSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/live-sport")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function LiveSportPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={liveSportSections}
      faqSection={liveSportFaqSection}
      inlineCta={liveSportInlineCtaCopy}
      signoff={{
        eyebrow: liveSportSignoffCopy.eyebrow,
        title: liveSportSignoffCopy.title,
        body: <p>{liveSportSignoffCopy.body}</p>,
        actions: [
          {
            href: "/book",
            label: "Book a table",
            icon: <Television className="size-4" />,
          },
          {
            href: "/events",
            label: "See what's on",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
