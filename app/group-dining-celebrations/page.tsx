import type { Metadata } from "next"
import { ArrowRight, UsersThree } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  commonActionLabels,
  groupDiningChecklist,
  groupDiningFaqSection,
  groupDiningInlineCtaCopy,
  groupDiningSections,
  groupDiningSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/group-dining-celebrations")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function GroupDiningCelebrationsPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      sections={groupDiningSections}
      checklist={groupDiningChecklist}
      faqSection={groupDiningFaqSection}
      inlineCta={groupDiningInlineCtaCopy}
      signoff={{
        eyebrow: groupDiningSignoffCopy.eyebrow,
        title: groupDiningSignoffCopy.title,
        body: <p>{groupDiningSignoffCopy.body}</p>,
        actions: [
          {
            href: "/book",
            label: commonActionLabels.bookTable,
            icon: <UsersThree className="size-4" />,
          },
          {
            href: "/private-hire",
            label: commonActionLabels.privateHire,
            icon: <ArrowRight className="size-4" />,
          },
        ],
      }}
    />
  )
}
