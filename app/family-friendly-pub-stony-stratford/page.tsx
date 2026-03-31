import type { Metadata } from "next"
import {
  ArrowRight,
  ForkKnife,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  familyFriendlyFaqSection,
  familyFriendlyInlineCtaCopy,
  familyFriendlySections,
  familyFriendlySignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/family-friendly-pub-stony-stratford")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function FamilyFriendlyPubPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={familyFriendlySections}
      faqSection={familyFriendlyFaqSection}
      inlineCta={familyFriendlyInlineCtaCopy}
      signoff={{
        eyebrow: familyFriendlySignoffCopy.eyebrow,
        title: familyFriendlySignoffCopy.title,
        body: <p>{familyFriendlySignoffCopy.body}</p>,
        actions: [
          {
            href: "/menu",
            label: "Browse the menu",
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/book",
            label: "Book a family table",
            icon: <UsersThree className="size-4" />,
          },
          {
            href: "/sunday-roast",
            label: "See Sunday roast",
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
