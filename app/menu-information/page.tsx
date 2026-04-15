import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "@phosphor-icons/react/dist/ssr"

import {
  CompactHighlightGrid,
  EditorialLinkCardContent,
} from "@/components/site/HomepagePatternPrimitives"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"

import { Button } from "@/components/ui/button"
import {
  menuInformationFaqs,
  menuInformationHeroCopy,
  menuInformationHighlights,
  menuInformationNextPagesCopy,
  menuInformationStartSectionCopy,
} from "@/data/copy"
import { siteDinnerMenuPdfHref, sitePhone, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/menu-information")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function MenuInformationPage() {
  return (
    <main>
      <RouteStructuredData route={route!} />
      <PageHero
        route={route!}
        eyebrow={menuInformationHeroCopy.eyebrow}
        title={menuInformationHeroCopy.title}
        description={menuInformationHeroCopy.description}
        primaryAction={{
          href: "/our-menus",
          label: menuInformationHeroCopy.primaryActionLabel,
        }}
        secondaryAction={{
          href: siteDinnerMenuPdfHref,
          label: menuInformationHeroCopy.secondaryActionLabel,
          variant: "outline",
        }}
      />

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading {...menuInformationStartSectionCopy} />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <Link href="/our-menus">
                  {menuInformationStartSectionCopy.liveMenuLabel}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={siteDinnerMenuPdfHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {menuInformationStartSectionCopy.pdfLabel}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={sitePhoneHref}>
                  {menuInformationStartSectionCopy.callLabel}
                  <Phone />
                </a>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal
            delayMs={120}
            className="space-y-4 text-sm leading-relaxed text-on-surface md:text-base"
          >
            <p>
              {menuInformationStartSectionCopy.quickAnswerPrefix}{" "}
              <a
                href={sitePhoneHref}
                className="text-secondary transition hover:text-secondary/80"
              >
                {sitePhone}
              </a>
              .
            </p>
            <p>{menuInformationStartSectionCopy.quickAnswerSuffix}</p>
          </ScrollReveal>

          <ScrollReveal delayMs={180}>
            <div className="surface-frame overflow-hidden rounded-2xl">
              <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
                {menuInformationFaqs.map((item, index) => (
                  <article
                    key={item.title}
                    className={
                      index % 2 === 0
                        ? "surface-pane bg-[var(--color-surface-lowest)]"
                        : "surface-pane surface-pane-muted"
                    }
                  >
                    <h3 className="font-heading text-[1.28rem] leading-[1.12] tracking-[-0.02em] text-on-background md:text-[1.42rem]">
                      {item.title}
                    </h3>
                    <p className="pt-3 text-sm leading-relaxed text-on-surface">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={240}>
            <CompactHighlightGrid
              items={menuInformationHighlights.map((item) => ({
                title: item.title,
                description: item.description,
              }))}
            />
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <div className="surface-frame rounded-2xl">
              <div className="surface-pane">
                <h3 className="font-heading text-[1.5rem] leading-[1.08] tracking-[-0.025em] text-on-background md:text-[1.7rem]">
                  {menuInformationNextPagesCopy.title}
                </h3>
                <div className="grid gap-3 pt-4 md:grid-cols-2 xl:grid-cols-4">
                  {menuInformationNextPagesCopy.cards.map((card) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                    >
                      <EditorialLinkCardContent
                        title={card.title}
                        description={card.description}
                        className="px-4 py-4"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
