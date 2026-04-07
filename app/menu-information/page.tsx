import type { Metadata } from "next"
import Link from "next/link"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import {
  CompactHighlightGrid,
  EditorialLinkCardContent,
} from "@/components/site/HomepagePatternPrimitives"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"

import { Button } from "@/components/ui/button"
import { siteMenuPdfHref, sitePhone, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"
import { getSectionBandClass } from "@/lib/section-bands"

const route = getRouteConfig("/menu-information")

export const metadata: Metadata = buildPageMetadata(route!.meta)

const menuFaqs = [
  {
    title: "Got an allergy? Please tell us before you order.",
    description:
      "The menu helps you browse, but the safest thing is always a quick word with the team so we can guide you properly on the day.",
  },
  {
    title: "Need vegetarian, vegan, or gluten-free options?",
    description:
      "Yes, in many cases. We are happy to talk through dishes if you want something milder, meat-free, or simply easier for the table to agree on.",
  },
  {
    title: "Use the website menu for browsing. Use the PDF for sharing.",
    description:
      "The website menu is the clearest and most up to date. The PDF is there if you want something printable or easy to send to someone else.",
  },
  {
    title: "Need a quick answer today?",
    description:
      "If the answer matters to today’s visit, please ring the pub rather than guessing from an old screenshot or a saved menu.",
  },
]

const menuInfoHighlights = [
  {
    title: "Before you come in",
    body: "If anyone in your group has a serious allergy or wants to check dishes in advance, please give us a quick ring before you visit.",
  },
  {
    title: "At the table",
    body: "Please mention allergies or dietary needs again when you order. It helps us get the advice right there and then.",
  },
  {
    title: "For takeaway orders",
    body: "If you are ordering to collect, mention allergies on the phone so the kitchen can talk you through things clearly before you set off.",
  },
]

export default function MenuInformationPage() {
  return (
    <main>
      <RouteStructuredData route={route!} />
      <PageHero
        route={route!}
        eyebrow="Menu information"
        title="If you are checking allergies, dietary needs, or which menu to use, this is the easiest place to start."
        description="Use this page if you are choosing for the table, deciding between the live menu and the PDF, or want to ask a food question before you visit."
        primaryAction={{ href: "/menu", label: "Browse the live menu" }}
        secondaryAction={{
          href: siteMenuPdfHref,
          label: "Download PDF menu",
          download: true,
          variant: "outline",
        }}
      />

      <section className={getSectionBandClass("paper", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <ScrollReveal
            delayMs={0}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <SectionHeading
              eyebrow="Start here"
              title="How to check allergens, dietary needs, and the right menu format."
              description="Browse the live menu for the latest version, use the PDF when you want something printable, and call the pub if the answer matters to today’s visit."
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <Link href="/menu">View HTML menu</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteMenuPdfHref} download>
                  Download PDF
                  <DownloadSimple />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={sitePhoneHref}>
                  Call the pub
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
              If you want a quick answer, ring{" "}
              <a
                href={sitePhoneHref}
                className="text-secondary transition hover:text-secondary/80"
              >
                {sitePhone}
              </a>
              .
            </p>
            <p>
              The website menu is best for browsing on your phone. The PDF is
              best for printing, sharing, or keeping a copy to hand.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={180}>
            <div className="surface-frame overflow-hidden rounded-2xl">
              <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
                {menuFaqs.map((item, index) => (
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
              items={menuInfoHighlights.map((item) => ({
                title: item.title,
                description: item.body,
              }))}
            />
          </ScrollReveal>

          <ScrollReveal delayMs={300}>
            <div className="surface-frame rounded-2xl">
              <div className="surface-pane">
                <h3 className="font-heading text-[1.5rem] leading-[1.08] tracking-[-0.025em] text-on-background md:text-[1.7rem]">
                  Useful next pages
                </h3>
                <div className="grid gap-3 pt-4 md:grid-cols-2 xl:grid-cols-4">
                  <Link
                    href="/gluten-free-curries-stony-stratford"
                    className="surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                  >
                    <EditorialLinkCardContent
                      title="Gluten-free curries guide"
                      description="Practical shortlist help for guests who want a clearer dietary route before they visit."
                      className="px-4 py-4"
                    />
                  </Link>
                  <Link
                    href="/takeaway-menu"
                    className="surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                  >
                    <EditorialLinkCardContent
                      title="Takeaway menu"
                      description="Order-by-phone collection guidance when staying in is still the plan."
                      className="px-4 py-4"
                    />
                  </Link>
                  <Link
                    href="/wakes-life-celebrations"
                    className="surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                  >
                    <EditorialLinkCardContent
                      title="Wakes & life celebrations"
                      description="See how the pub handles calmer gatherings that need a little more context."
                      className="px-4 py-4"
                    />
                  </Link>
                  <Link
                    href="/book"
                    className="surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                  >
                    <EditorialLinkCardContent
                      title="Book a table"
                      description="Jump straight into a reservation once the menu questions are settled."
                      className="px-4 py-4"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
