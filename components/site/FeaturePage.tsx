import type { ReactNode } from "react"

import { FaqSection } from "@/components/site/FaqSection"
import {
  CompactHighlightGrid,
  NumberedStepFlow,
} from "@/components/site/HomepagePatternPrimitives"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import type {
  HighlightItem,
  LocalFaq,
  PageHeroConfig,
  PageMeta,
  SchemaConfig,
} from "@/data/site"
import {
  type SiteAction,
  SiteActionCard,
} from "@/components/site/SiteActionCard"
import {
  getAlternatingSectionBand,
  getSectionBandClass,
} from "@/lib/section-bands"
import { cn } from "@/lib/utils"

export interface FeaturePageSection {
  eyebrow: string
  title: string
  description: string
  cards: HighlightItem[]
  columns?: 2 | 3
  layout?: "grid" | "feature-split" | "numbered-list"
  muted?: boolean
  aside?: {
    title: string
    description: string
    actions?: SiteAction[]
  }
}

interface FeaturePageChecklist {
  eyebrow: string
  title: string
  description: string
  items: string[]
}

interface FeaturePageSignoff {
  eyebrow: string
  title: string
  description?: string
  body: ReactNode
  actions: SiteAction[]
  details?: ReactNode
}

interface FeaturePageRoute {
  href: string
  label: string
  navLabel?: string
  meta: PageMeta
  schema?: SchemaConfig
}

interface FeaturePageProps {
  route?: FeaturePageRoute
  hero: PageHeroConfig
  sections: FeaturePageSection[]
  pageType?: "AboutPage" | "CollectionPage" | "ContactPage" | "WebPage"
  prelude?: ReactNode
  checklist?: FeaturePageChecklist
  faqSection?: {
    eyebrow: string
    title: string
    description: string
    faqs: LocalFaq[]
  }
  inlineCta?: {
    title: string
    description: string
    actions?: SiteAction[]
  }
  epilogue?: ReactNode
  signoff?: FeaturePageSignoff
}

function getFeaturePageSectionLayout(
  section: FeaturePageSection
): NonNullable<FeaturePageSection["layout"]> {
  return section.layout ?? "grid"
}

function FeaturePageCardGrid({
  cards,
  columns,
}: {
  cards: HighlightItem[]
  columns?: 2 | 3
}) {
  return <CompactHighlightGrid items={cards} columns={columns} />
}

function FeaturePageFeatureSplit({ cards }: { cards: HighlightItem[] }) {
  const [featuredCard, ...supportingCards] = cards

  if (!featuredCard) {
    return null
  }

  return (
    <div
      className={cn(
        "grid gap-4",
        supportingCards.length > 0 && "xl:grid-cols-[0.9fr_1.1fr]"
      )}
    >
      <article className="surface-frame">
        <div className="surface-pane flex h-full flex-col justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex rounded-full bg-primary px-2.5 py-1 text-[0.68rem] font-bold tracking-[0.14em] text-white uppercase">
              Lead story
            </span>
            <span className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
              01
            </span>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-[1.8rem] leading-[1.06] tracking-[-0.03em] text-on-background md:text-[2.15rem]">
              {featuredCard.title}
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-on-surface md:text-base">
              {featuredCard.description}
            </p>
          </div>
        </div>
      </article>

      {supportingCards.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 xl:content-start">
          {supportingCards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-4 shadow-none"
            >
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                {String(index + 2).padStart(2, "0")}
              </p>
              <h4 className="pt-2 text-[0.95rem] leading-[1.2] font-semibold tracking-[-0.01em] text-on-background">
                {card.title}
              </h4>
              <p className="pt-2 text-[0.84rem] leading-relaxed text-on-surface">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function FeaturePageNumberedList({
  cards,
  label,
}: {
  cards: HighlightItem[]
  label: string
}) {
  return <NumberedStepFlow items={cards} label={label} />
}

export function FeaturePage({
  route,
  hero,
  sections,
  pageType = "WebPage",
  prelude,
  checklist,
  faqSection,
  inlineCta,
  epilogue,
  signoff,
}: FeaturePageProps) {
  return (
    <main>
      {route ? (
        <RouteStructuredData
          route={route}
          faqItems={faqSection?.faqs}
          pageType={pageType}
        />
      ) : null}

      <PageHero {...hero} route={route} />

      {prelude}

      {sections.map((section, index) => {
        const layout = getFeaturePageSectionLayout(section)

        return (
          <section
            key={section.title}
            className={cn(
              "page-section",
              getSectionBandClass(
                section.muted
                  ? "paper"
                  : getAlternatingSectionBand(index, {
                      even: "plain",
                      odd: "paper",
                    })
              )
            )}
          >
            <div className="section-shell flex flex-col gap-5">
              <ScrollReveal
                delayMs={0}
                className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
              >
                <SectionHeading
                  eyebrow={section.eyebrow}
                  title={section.title}
                  description={section.description}
                />
                {section.aside ? (
                  <div className="shrink-0">
                    <SiteActionCard
                      actions={
                        section.aside.actions ??
                        [hero.primaryAction, hero.secondaryAction].filter(
                          (action): action is SiteAction => Boolean(action)
                        )
                      }
                      supportingText={section.aside.description}
                    />
                  </div>
                ) : null}
              </ScrollReveal>
              <ScrollReveal delayMs={120}>
                {layout === "feature-split" ? (
                  <FeaturePageFeatureSplit cards={section.cards} />
                ) : layout === "numbered-list" ? (
                  <FeaturePageNumberedList
                    cards={section.cards}
                    label={section.eyebrow}
                  />
                ) : (
                  <FeaturePageCardGrid
                    cards={section.cards}
                    columns={section.columns}
                  />
                )}
              </ScrollReveal>
            </div>
          </section>
        )
      })}

      {checklist ? (
        <section className={cn("page-section", getSectionBandClass("paper"))}>
          <div className="section-shell space-y-5">
            <SectionHeading
              eyebrow={checklist.eyebrow}
              title={checklist.title}
              description={checklist.description}
            />
            <div className="surface-panel">
              <ol className="space-y-3 text-sm leading-7 text-on-surface md:text-base">
                {checklist.items.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      ) : null}

      {inlineCta ? (
        inlineCta.actions ? (
          <section
            className={cn(
              "page-section text-white",
              getSectionBandClass("dark")
            )}
          >
            <div className="section-shell space-y-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl space-y-2.5">
                  <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
                    Next step
                  </p>
                  <h2 className="text-white">{inlineCta.title}</h2>
                  <p className="max-w-2xl text-sm leading-6 text-white/72 md:text-base md:leading-7">
                    {inlineCta.description}
                  </p>
                </div>
                <div className="shrink-0">
                  <SiteActionCard actions={inlineCta.actions} tone="dark" />
                </div>
              </div>
            </div>
          </section>
        ) : (
          <InlineBookingCta
            className={getSectionBandClass("dark")}
            title={inlineCta.title}
            description={inlineCta.description}
          />
        )
      ) : null}

      {faqSection ? (
        <FaqSection
          className={getSectionBandClass("paper")}
          eyebrow={faqSection.eyebrow}
          title={faqSection.title}
          description={faqSection.description}
          faqs={faqSection.faqs}
        />
      ) : null}

      {epilogue}

      {signoff ? (
        <PageSignoff
          eyebrow={signoff.eyebrow}
          title={signoff.title}
          description={signoff.description}
          body={signoff.body}
          actions={signoff.actions}
          details={signoff.details}
        />
      ) : null}
    </main>
  )
}
