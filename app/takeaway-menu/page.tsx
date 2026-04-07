import type { Metadata } from "next"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import {
  CompactHighlightGrid,
  NumberedStepFlow,
} from "@/components/site/HomepagePatternPrimitives"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import { siteMenuPdfHref, sitePhone, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/takeaway-menu")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const takeawayCards = [
  {
    title: "Start with the PDF, then give us a ring",
    description:
      "The PDF is handy if you are browsing from home, but a call is still the easiest way to check collection timing, ask about dishes, and see what is available that day.",
  },
  {
    title: "Prefer to browse on your phone?",
    description:
      "Use the live website menu if you want to move quickly between starters, curries, mixed grills, sharers, and sides.",
  },
  {
    title: "Please mention allergies when you order",
    description:
      "If anyone ordering has an allergy or intolerance, tell us on the phone so we can guide you properly before collection.",
  },
]

const takeawayChecklist = [
  "Pick a few dishes from the PDF or the live menu.",
  "Call the pub to place the order and check timing.",
  "Tell us about allergies or anything you want to double-check.",
  "Collect once the team gives you a ready time.",
]

const takeawaySteps = takeawayChecklist.map((step, index) => ({
  title: `Step ${index + 1}`,
  description: step,
}))

export default function TakeawayMenuPage() {
  return (
    <main>
      <RouteStructuredData route={route!} />
      <PageHero
        route={route!}
        eyebrow="Takeaway menu"
        title="Browse at home, order by phone, collect from the pub."
        description="Our takeaway is collection only — browse the menu, give us a ring to order, and pick it up when it is ready."
        primaryAction={{
          href: siteMenuPdfHref,
          label: "Download PDF menu",
          download: true,
        }}
        secondaryAction={{ href: sitePhoneHref, label: "Call the pub" }}
      />

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading
              eyebrow="How to order"
              title="How takeaway collection works at our Stony Stratford pub."
              description="Browse first, call second, and use the live menu if you want the quickest route through starters, curries, grills, sides, and desserts."
            />
            <div className="shrink-0">
              <SiteActionCard
                actions={[
                  {
                    href: siteMenuPdfHref,
                    label: "Download PDF",
                    download: true,
                    icon: <DownloadSimple className="size-4" />,
                  },
                  {
                    href: sitePhoneHref,
                    label: `Call ${sitePhone}`,
                    icon: <Phone className="size-4" />,
                  },
                  {
                    href: "/menu",
                    label: "Browse live menu",
                  },
                ]}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <NumberedStepFlow items={takeawaySteps} label="Collection steps" />
          </ScrollReveal>

          <ScrollReveal delayMs={180}>
            <CompactHighlightGrid items={takeawayCards} />
          </ScrollReveal>

          <ScrollReveal
            delayMs={240}
            className="grid gap-px overflow-hidden rounded-2xl bg-[rgba(196,189,181,0.22)] md:grid-cols-2"
          >
            <div className="bg-[var(--color-surface-lowest)] px-5 py-5 md:px-6 md:py-6">
              <h3 className="font-heading text-[1.32rem] leading-[1.1] tracking-[-0.02em] text-on-background">
                Best if you want to share the menu
              </h3>
              <p className="pt-3 text-sm leading-relaxed text-on-surface">
                The downloadable menu is useful when you want to compare a few
                options, sit with the choice for a bit, or send it to someone
                else before ordering.
              </p>
            </div>
            <div className="surface-pane-muted px-5 py-5 md:px-6 md:py-6">
              <h3 className="font-heading text-[1.32rem] leading-[1.1] tracking-[-0.02em] text-on-background">
                Best if you want to browse quickly
              </h3>
              <p className="pt-3 text-sm leading-relaxed text-on-surface">
                The live menu is better when you want to jump straight to
                starters, mixed grills, curries, sides, or desserts without
                scrolling through a PDF.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <InlineBookingCta
        className={getSectionBandClass("dark")}
        title="Changed your mind about staying home?"
        description="If collection turns into dinner plans, book a table and come sit with us instead."
      />
    </main>
  )
}
