import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpenText } from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
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

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...guidesHowToUseSection} />
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {guidesGroups.map((guide, index) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={
                  index % 2 === 1
                    ? "surface-panel-muted transition hover:-translate-y-0.5"
                    : "surface-panel transition hover:-translate-y-0.5"
                }
              >
                <p className="eyebrow">{guide.eyebrow}</p>
                <h3 className="section-title pt-3">{guide.title}</h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {guide.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                  Open guide
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...guidesBrowseSection} />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guidesLinkedGuides.map((guide, index) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={
                  index === 1 || index === 4
                    ? "surface-panel-muted transition hover:-translate-y-0.5"
                    : "surface-panel transition hover:-translate-y-0.5"
                }
              >
                <BookOpenText className="size-5 text-secondary" />
                <h3 className="section-title pt-3">{guide.title}</h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection {...guidesFaqSectionCopy} faqs={guidesFaqs} />

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
