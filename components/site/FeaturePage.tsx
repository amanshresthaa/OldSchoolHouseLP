import type { ReactNode } from "react"

import { FaqSection } from "@/components/site/FaqSection"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { SectionHeading } from "@/components/site/SectionHeading"
import type { HighlightItem, LocalFaq, PageHeroConfig } from "@/data/site"
import {
  type SiteAction,
  SiteActionCard,
} from "@/components/site/SiteActionCard"
import { cn } from "@/lib/utils"

interface FeaturePageSection {
  eyebrow: string
  title: string
  description: string
  cards: HighlightItem[]
  columns?: 2 | 3
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

interface FeaturePageProps {
  hero: PageHeroConfig
  sections: FeaturePageSection[]
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
  signoff?: FeaturePageSignoff
}

export function FeaturePage({
  hero,
  sections,
  checklist,
  faqSection,
  inlineCta,
  signoff,
}: FeaturePageProps) {
  return (
    <main>
      <PageHero {...hero} />

      {sections.map((section, index) => (
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
            <div
              className={cn(
                "grid gap-4",
                section.columns === 2 ? "md:grid-cols-2" : "lg:grid-cols-3"
              )}
            >
              {section.cards.map((card, cardIndex) => (
                <article
                  key={card.title}
                  className={
                    cardIndex % 2 === 0
                      ? "surface-panel"
                      : "surface-panel-muted"
                  }
                >
                  <h2 className="section-title">{card.title}</h2>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

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
          <section className="bg-tertiary-container py-12 text-white md:py-14">
            <div className="section-shell">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(19rem,0.96fr)] lg:gap-10">
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
                    Next step
                  </p>
                  <h2 className="text-white">{inlineCta.title}</h2>
                  <p className="max-w-2xl text-sm leading-6 text-white/72 md:text-base md:leading-7">
                    {inlineCta.description}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-8">
                  <SiteActionCard
                    actions={inlineCta.actions}
                    tone="dark"
                    showDivider={inlineCta.actions.length > 1}
                  />
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
