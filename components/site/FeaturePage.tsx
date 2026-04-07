import type { ReactNode } from "react"

import { FaqSection } from "@/components/site/FaqSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
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
  section: FeaturePageSection,
  index: number
): NonNullable<FeaturePageSection["layout"]> {
  if (section.layout) {
    return section.layout
  }

  if (section.cards.length <= 2) {
    return "grid"
  }

  return index % 2 === 0 ? "feature-split" : "numbered-list"
}

function FeaturePageCardGrid({
  cards,
  columns,
}: {
  cards: HighlightItem[]
  columns?: 2 | 3
}) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 2 ? "md:grid-cols-2" : "lg:grid-cols-3"
      )}
    >
      {cards.map((card, cardIndex) => (
        <article
          key={card.title}
          className={
            cardIndex % 2 === 0 ? "surface-panel" : "surface-panel-muted"
          }
        >
          <h3 className="section-title">{card.title}</h3>
          <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
            {card.description}
          </p>
        </article>
      ))}
    </div>
  )
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
        supportingCards.length > 0 &&
          "xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
      )}
    >
      <article className="surface-frame relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,160,23,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.68)_0%,rgba(240,235,227,0.95)_100%)]" />
        <div className="surface-pane relative flex min-h-[18rem] flex-col justify-between gap-8 md:min-h-[20rem]">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-secondary px-3 text-sm font-semibold tracking-[0.12em] text-white">
              01
            </span>
            <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-secondary uppercase">
              Start here
            </p>
          </div>
          <div className="max-w-2xl">
            <h3 className="font-heading text-[2rem] leading-[1.02] tracking-[-0.04em] text-on-background md:text-[2.35rem]">
              {featuredCard.title}
            </h3>
            <p className="max-w-xl pt-4 text-sm leading-7 text-on-surface md:text-base">
              {featuredCard.description}
            </p>
          </div>
          <p className="font-heading text-[4.5rem] leading-none tracking-[-0.08em] text-primary/10 md:text-[5.4rem]">
            01
          </p>
        </div>
      </article>

      {supportingCards.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
          {supportingCards.map((card, index) => (
            <article
              key={card.title}
              className={
                index % 2 === 0
                  ? "surface-panel relative overflow-hidden"
                  : "surface-panel-muted relative overflow-hidden"
              }
            >
              <div className="absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_top_left,rgba(175,43,62,0.08),transparent_58%)]" />
              <div className="relative flex items-start justify-between gap-3">
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  Point {String(index + 2).padStart(2, "0")}
                </p>
                <span className="font-heading text-[2.65rem] leading-none tracking-[-0.08em] text-primary/12">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </div>
              <h3 className="section-title max-w-[18rem] pt-2">{card.title}</h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function FeaturePageNumberedList({ cards }: { cards: HighlightItem[] }) {
  return (
    <div className="surface-frame overflow-hidden">
      <div className="grid gap-px bg-[rgba(196,189,181,0.2)]">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className={cn(
              "grid gap-4 px-5 py-5 md:px-6 md:py-6 lg:grid-cols-[auto_minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-start",
              index % 2 === 0
                ? "bg-[var(--color-surface-lowest)]"
                : "bg-[color-mix(in_srgb,var(--color-surface-low)_82%,white_18%)]"
            )}
          >
            <div className="flex items-center gap-3 lg:pt-1">
              <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold tracking-[0.12em] text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase lg:hidden">
                {index === 0
                  ? "Start here"
                  : index === cards.length - 1
                    ? "Worth finishing on"
                    : "Worth knowing"}
              </p>
            </div>
            <div className="space-y-2">
              <p className="hidden text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase lg:block">
                {index === 0
                  ? "Start here"
                  : index === cards.length - 1
                    ? "Worth finishing on"
                    : "Worth knowing"}
              </p>
              <h3 className="section-title">{card.title}</h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-on-surface md:text-base">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
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
        const layout = getFeaturePageSectionLayout(section, index)

        return (
          <section
            key={section.title}
            className={cn(
              section.muted || index % 2 === 1
                ? "bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16"
                : "bg-background py-10 md:py-14 lg:py-16"
            )}
          >
            <div className="section-shell space-y-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
              </div>
              {layout === "feature-split" ? (
                <FeaturePageFeatureSplit cards={section.cards} />
              ) : layout === "numbered-list" ? (
                <FeaturePageNumberedList cards={section.cards} />
              ) : (
                <FeaturePageCardGrid
                  cards={section.cards}
                  columns={section.columns}
                />
              )}
            </div>
          </section>
        )
      })}

      {checklist ? (
        <section className="bg-background py-10 md:py-14 lg:py-16">
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
          <section className="page-section bg-tertiary-container text-white">
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
            title={inlineCta.title}
            description={inlineCta.description}
          />
        )
      ) : null}

      {faqSection ? (
        <FaqSection
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
