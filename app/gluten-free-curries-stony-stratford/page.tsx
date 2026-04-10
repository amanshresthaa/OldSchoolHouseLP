import type { Metadata } from "next"
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import { TopicClusterSection } from "@/components/site/TopicClusterSection"
import {
  commonActionLabels,
  getNepaleseCuisineClusterLinks,
  glutenFreeCurriesFaqSection,
  glutenFreeCurriesInlineCtaCopy,
  nepaleseClusterPreludeCopy,
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
          eyebrow={nepaleseClusterPreludeCopy.glutenFreeCurries.eyebrow}
          title={nepaleseClusterPreludeCopy.glutenFreeCurries.title}
          description={nepaleseClusterPreludeCopy.glutenFreeCurries.description}
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
            label: commonActionLabels.readPillarGuide,
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/menu-information",
            label: commonActionLabels.checkMenuInfo,
            icon: <Phone className="size-4" />,
          },
        ],
      }}
    />
  )
}
