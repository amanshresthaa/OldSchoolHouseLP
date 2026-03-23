import type { Metadata } from "next"
import Link from "next/link"
import { DownloadSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import { siteMenuPdfHref, sitePhone, sitePhoneHref } from "@/data/site"

export const metadata: Metadata = {
  title: "Takeaway Menu",
  description:
    "Download the takeaway menu, then call the pub when you are ready to order or want help choosing.",
  alternates: {
    canonical: "/takeaway-menu",
  },
}

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
      <PageHero
        eyebrow="Takeaway menu"
        title="A simple way to browse at home and order by phone."
        description="If you are planning a takeaway, start with the PDF, then give the pub a ring when you are ready to order or want help choosing."
        primaryAction={{
          href: siteMenuPdfHref,
          label: "Download PDF menu",
          download: true,
        }}
        secondaryAction={{ href: sitePhoneHref, label: "Call the pub" }}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="How to order"
              title="Keep it easy."
              description="Browse first, call second, and use the live menu if you want the quickest way through the full range."
            />
            <div className="surface-frame">
              <div className="surface-pane space-y-4">
                <ol className="space-y-3 text-sm leading-7 text-on-surface md:text-base">
                  {takeawayChecklist.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={siteMenuPdfHref} download>
                  Download PDF
                  <DownloadSimple />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={sitePhoneHref}>
                  Call {sitePhone}
                  <Phone />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/menu">Browse live menu</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {takeawayCards.map((card, index) => (
                <article
                  key={card.title}
                  className={
                    index === 1
                      ? "surface-frame surface-pane surface-pane-muted"
                      : "surface-frame surface-pane bg-[var(--color-surface-lowest)]"
                  }
                >
                  <h2 className="text-[1.7rem] leading-tight">{card.title}</h2>
                  <p className="pt-4 text-sm leading-7 text-on-surface md:text-base">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="surface-frame overflow-hidden">
              <div className="grid gap-px bg-[rgba(196,189,181,0.22)] md:grid-cols-[1.05fr_0.95fr]">
                <div className="surface-pane bg-[var(--color-surface-lowest)]">
                  <h2 className="text-[2rem]">
                    Best if you want to share the menu
                  </h2>
                  <p className="pt-4 text-sm leading-7 text-on-surface md:text-base">
                    The downloadable menu is useful when you want to compare a
                    few options, sit with the choice for a bit, or send it to
                    someone else before ordering.
                  </p>
                </div>
                <div className="surface-pane surface-pane-muted">
                  <h2 className="text-[2rem]">
                    Best if you want to browse quickly
                  </h2>
                  <p className="pt-4 text-sm leading-7 text-on-surface md:text-base">
                    The live menu is better when you want to jump straight to
                    starters, mixed grills, curries, sides, or desserts without
                    scrolling through a PDF.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
