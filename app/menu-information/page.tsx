import type { Metadata } from "next"
import Link from "next/link"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { StickySplitSection } from "@/components/site/StickySplitSection"
import { Button } from "@/components/ui/button"
import { siteMenuPdfHref, sitePhone, sitePhoneHref } from "@/data/site"

export const metadata: Metadata = {
  title: "Menu Information & Dietary Help",
  description:
    "Find the easiest way to check allergens, dietary questions, and whether to use the live menu or the PDF before you visit.",
  alternates: {
    canonical: "/menu-information",
  },
}

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
      <PageHero
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

      <StickySplitSection
        className="bg-background"
        intro={
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Start here"
              title="The quick version."
              description="Browse the live menu for the latest version, use the PDF when you want something printable, and call us if the answer matters to today."
            />
            <div className="surface-frame">
              <div className="surface-pane space-y-4 text-sm leading-7 text-on-surface md:text-base">
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
                  The website menu is best for browsing on your phone. The PDF
                  is best for printing, sharing, or keeping a copy to hand.
                </p>
              </div>
            </div>
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
          </div>
        }
      >
        <div className="space-y-4">
          <div className="surface-frame overflow-hidden">
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
                  <h2 className="text-[2rem]">{item.title}</h2>
                  <p className="pt-4 text-sm leading-7 text-on-surface md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {menuInfoHighlights.map((item, index) => (
              <article
                key={item.title}
                className={
                  index === 1
                    ? "surface-frame surface-pane surface-pane-muted"
                    : "surface-frame surface-pane bg-[var(--color-surface-lowest)]"
                }
              >
                <p className="eyebrow">{item.title}</p>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <div className="surface-frame">
            <div className="surface-pane">
              <h2 className="text-[2rem]">Useful next pages</h2>
              <div className="grid gap-3 pt-4 text-sm leading-7 md:grid-cols-3 md:text-base">
                <Link
                  href="/takeaway-menu"
                  className="rounded-[1.35rem] bg-[var(--color-surface-low)] px-4 py-4 text-on-surface transition hover:-translate-y-0.5"
                >
                  Takeaway menu
                </Link>
                <Link
                  href="/wakes-menu"
                  className="rounded-[1.35rem] bg-[var(--color-surface-low)] px-4 py-4 text-on-surface transition hover:-translate-y-0.5"
                >
                  Wakes menu
                </Link>
                <Link
                  href="/book"
                  className="rounded-[1.35rem] bg-[var(--color-surface-low)] px-4 py-4 text-on-surface transition hover:-translate-y-0.5"
                >
                  Book a table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </StickySplitSection>
    </main>
  )
}
