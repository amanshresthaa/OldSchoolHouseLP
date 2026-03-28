import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Buildings,
  ForkKnife,
  MapPin,
} from "@phosphor-icons/react/dist/ssr"

import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { SectionHeading } from "@/components/site/SectionHeading"
import {
  aboutBuildingSection,
  aboutConceptSection,
  aboutFamilyCardTitle,
  aboutHeritageCardTitle,
  aboutOperatorCardTitle,
  aboutSignoffCopy,
} from "@/data/copy"
import {
  aboutFamilyNotes,
  aboutHeritageNotes,
  aboutLocationHighlights,
  aboutOperatorNotes,
  aboutPubFacts,
  aboutReasons,
  aboutStoryNotes,
  lapenInnsHref,
  siteEmailHref,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/about")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function AboutPage() {
  return (
    <main>
      <PageHero {...route!.hero!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...aboutConceptSection} />
          <div className="grid gap-4 lg:grid-cols-3">
            {aboutReasons.map((reason, index) => (
              <article
                key={reason.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index === 1
                    ? "surface-pane-muted"
                    : "bg-[var(--color-surface-lowest)]"
                }`}
              >
                <h2 className="section-title">{reason.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading {...aboutBuildingSection} />
            <div className="grid gap-2 text-sm leading-7 text-on-surface md:text-right md:text-base">
              {aboutStoryNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {aboutPubFacts.map((fact, index) => (
              <article
                key={fact.label}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index % 2 === 0
                    ? "bg-[var(--color-surface-lowest)]"
                    : "surface-pane-muted"
                }`}
              >
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                  {fact.label}
                </p>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {fact.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6">
              <div className="flex items-center gap-3">
                <ForkKnife className="size-5 text-secondary" />
                <h2 className="section-title">{aboutOperatorCardTitle}</h2>
              </div>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                {aboutOperatorNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </article>
            <article className="surface-pane-muted rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6">
              <div className="flex items-center gap-3">
                <Buildings className="size-5 text-secondary" />
                <h2 className="section-title">{aboutFamilyCardTitle}</h2>
              </div>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                {aboutFamilyNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
                <p>
                  Find the wider group at{" "}
                  <a
                    href={lapenInnsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary transition hover:text-secondary/80"
                  >
                    lapeninns.com
                  </a>
                  .
                </p>
              </div>
            </article>
            <article className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6">
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-secondary" />
                <h2 className="section-title">{aboutHeritageCardTitle}</h2>
              </div>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                {aboutHeritageNotes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            </article>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {aboutLocationHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 ${
                  index === 1
                    ? "surface-pane-muted"
                    : "bg-[var(--color-surface-lowest)]"
                }`}
              >
                <h2 className="section-title">{item.title}</h2>
                <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageSignoff
        eyebrow={aboutSignoffCopy.eyebrow}
        title={aboutSignoffCopy.title}
        description={aboutSignoffCopy.description}
        body={<p>{aboutSignoffCopy.body}</p>}
        actions={[
          {
            href: "/menu",
            label: "View the menu",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: "/nepalese-kitchen",
            label: "Explore the kitchen",
          },
        ]}
        details={
          <div className="grid gap-2 text-sm leading-7">
            <Link
              href="/private-hire"
              className="text-white/72 transition hover:text-white"
            >
              {aboutSignoffCopy.planningLink}
            </Link>
            <a
              href={siteEmailHref}
              className="text-white/72 transition hover:text-white"
            >
              {aboutSignoffCopy.contactLink}
            </a>
          </div>
        }
      />
    </main>
  )
}
