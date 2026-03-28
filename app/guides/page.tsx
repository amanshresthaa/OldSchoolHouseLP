import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  ForkKnife,
  MapPin,
  Sparkle,
  Stack,
} from "@phosphor-icons/react/dist/ssr"

import { FaqSection } from "@/components/site/FaqSection"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
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

const route = getRouteConfig("/guides")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

const guideIcons = [MapPin, ForkKnife, Sparkle, Stack, Sparkle]

export default function GuidesPage() {
  return (
    <main>
      <PageHero {...route!.hero!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...guidesHowToUseSection} />
          <div className="grid gap-4 lg:grid-cols-3">
            {guidesGroups.map((group, index) => {
              const Icon = guideIcons[index]

              return (
                <Link
                  key={group.href}
                  href={group.href}
                  className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6 ${
                    index === 1
                      ? "surface-pane-muted"
                      : "bg-[var(--color-surface-lowest)]"
                  }`}
                >
                  <Icon className="size-5 text-secondary" />
                  <p className="pt-3 text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    {group.eyebrow}
                  </p>
                  <h2 className="section-title pt-3">{group.title}</h2>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    {group.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80">
                    Open guide
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
              )
            })}
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
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] transition hover:-translate-y-0.5 md:px-6 md:py-6 ${
                  index % 2 === 0
                    ? "bg-[var(--color-surface-lowest)]"
                    : "surface-pane-muted"
                }`}
              >
                <h2 className="section-title">{guide.title}</h2>
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
            label: "View menu",
            icon: <ForkKnife className="size-4" />,
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
