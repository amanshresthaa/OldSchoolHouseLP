import type { Metadata } from "next"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import { siteMenuPdfHref, sitePhone, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

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

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
          </div>

          <div className="surface-panel">
            <ol className="space-y-3 text-sm leading-7 text-on-surface md:text-base">
              {takeawayChecklist.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {takeawayCards.map((card, index) => (
              <article
                key={card.title}
                className={
                  index === 1 ? "surface-panel-muted" : "surface-panel"
                }
              >
                <h3 className="section-title">{card.title}</h3>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {card.description}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl bg-[rgba(196,189,181,0.22)] md:grid-cols-2">
            <div className="bg-[var(--color-surface-lowest)] px-5 py-5 md:px-6 md:py-6">
              <h3 className="section-title">
                Best if you want to share the menu
              </h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                The downloadable menu is useful when you want to compare a few
                options, sit with the choice for a bit, or send it to someone
                else before ordering.
              </p>
            </div>
            <div className="surface-pane-muted px-5 py-5 md:px-6 md:py-6">
              <h3 className="section-title">
                Best if you want to browse quickly
              </h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                The live menu is better when you want to jump straight to
                starters, mixed grills, curries, sides, or desserts without
                scrolling through a PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Changed your mind about staying home?"
        description="If collection turns into dinner plans, book a table and come sit with us instead."
      />
    </main>
  )
}
