import type { Metadata } from "next"
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  getNepaleseCuisineClusterLinks,
  glutenFreeCurriesFaqSection,
  glutenFreeCurriesInlineCtaCopy,
  glutenFreeCurriesSections,
  glutenFreeCurriesSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/gluten-free-curries-stony-stratford")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function GlutenFreeCurriesStonyStratfordPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      prelude={
        <TopicClusterSection
          eyebrow="Read next"
          title="This dietary spoke belongs to a wider Nepalese cuisine cluster."
          description="Start with the pillar guide for the full cuisine overview, then use the related spokes if you want dish-level or comparison-level detail."
          links={getNepaleseCuisineClusterLinks(route!.href)}
          muted
        />
      }
      sections={glutenFreeCurriesSections}
      faqSection={glutenFreeCurriesFaqSection}
      inlineCta={glutenFreeCurriesInlineCtaCopy}
      signoff={{
        eyebrow: glutenFreeCurriesSignoffCopy.eyebrow,
        title: glutenFreeCurriesSignoffCopy.title,
        body: <p>{glutenFreeCurriesSignoffCopy.body}</p>,
        actions: [
          {
            href: "/nepalese-food-milton-keynes",
            label: "Read the pillar guide",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/menu-information",
            label: "Check menu info",
            icon: <Phone className="size-4" />,
          },
        ],
      }}
    />
  )
}
