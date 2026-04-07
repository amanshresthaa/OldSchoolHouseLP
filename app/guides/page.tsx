import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpenText } from "@phosphor-icons/react/dist/ssr"

import { EditorialLinkCardContent } from "@/components/site/HomepagePatternPrimitives"
import { FaqSection } from "@/components/site/FaqSection"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import {
  guidesBrowseSection,
  guidesFaqSectionCopy,
  guidesFaqs,
  guidesGroups,
  guidesHowToUseSection,
  guidesLinkedGuides,
  guidesSignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/guides")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function GuidesPage() {
  return (
    <main>
      <RouteStructuredData
        route={route!}
        faqItems={guidesFaqs}
        pageType="CollectionPage"
      />
      <PageHero {...route!.hero!} route={route!} />

      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...guidesHowToUseSection} />
          </ScrollReveal>
          <ScrollReveal
            delayMs={120}
            className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3"
          >
            {guidesGroups.map((guide, index) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={
                  index % 2 === 1
                    ? "surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                    : "surface-frame block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                }
              >
                <EditorialLinkCardContent
                  eyebrow={guide.eyebrow}
                  title={guide.title}
                  description={guide.description}
                  ctaLabel="Open guide"
                  className={index % 2 === 0 ? "surface-pane" : undefined}
                />
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal delayMs={0}>
            <SectionHeading {...guidesBrowseSection} />
          </ScrollReveal>
          <ScrollReveal
            delayMs={120}
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {guidesLinkedGuides.map((guide, index) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={
                  index === 1 || index === 4
                    ? "surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                    : "surface-frame block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                }
              >
                <EditorialLinkCardContent
                  title={guide.title}
                  description={guide.description}
                  className={
                    index === 1 || index === 4 ? undefined : "surface-pane"
                  }
                  icon={<BookOpenText className="size-5" />}
                />
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <FaqSection
        className={getSectionBandClass("paper")}
        {...guidesFaqSectionCopy}
        faqs={guidesFaqs}
      />

      <PageSignoff
        eyebrow={guidesSignoffCopy.eyebrow}
        title={guidesSignoffCopy.title}
        body={<p>{guidesSignoffCopy.body}</p>}
        actions={[
          {
            href: "/menu",
            label: "Browse the menu",
            icon: <BookOpenText className="size-4" />,
          },
          {
            href: "/book",
            label: "Book a table",
            icon: <ArrowRight className="size-4" />,
          },
        ]}
      />
    </main>
  )
}
