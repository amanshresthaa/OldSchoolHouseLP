import type { Metadata } from "next"
import { ArrowRight, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  commonActionLabels,
  sundayRoastChecklist,
  sundayRoastFaqSection,
  sundayRoastInlineCtaCopy,
  sundayRoastSections,
  sundayRoastSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/sunday-lunch")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function SundayRoastPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      sections={sundayRoastSections}
      checklist={sundayRoastChecklist}
      faqSection={sundayRoastFaqSection}
      inlineCta={sundayRoastInlineCtaCopy}
      signoff={{
        eyebrow: sundayRoastSignoffCopy.eyebrow,
        title: sundayRoastSignoffCopy.title,
        body: <p>{sundayRoastSignoffCopy.body}</p>,
        actions: [
          {
            href: "/our-menus",
            label: commonActionLabels.viewMenu,
            icon: <ForkKnife className="size-4" />,
          },
          {
            href: "/group-dining-celebrations",
            label: commonActionLabels.groupDining,
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
