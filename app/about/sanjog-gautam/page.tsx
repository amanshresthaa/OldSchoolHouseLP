import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, Buildings } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { PageSignoff } from "@/components/site/PageSignoff"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import {
  organizationFactSheet,
  sanjogGautamExperienceNotes,
  sanjogGautamExpertiseAreas,
  sanjogGautamHighlights,
  sanjogGautamId,
  sanjogGautamPersonSchema,
  siteLegalName,
  siteOrganizationId,
  sitePhoneHref,
  siteRestaurantId,
} from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/about/sanjog-gautam")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function SanjogGautamPage() {
  return (
    <main>
      <RouteStructuredData
        route={route!}
        pageType="ProfilePage"
        authorId={sanjogGautamId}
        aboutIds={[siteOrganizationId, siteRestaurantId, sanjogGautamId]}
        mainEntityId={sanjogGautamId}
      />
      <Script
        id="sanjog-gautam-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sanjogGautamPersonSchema),
        }}
      />
      <PageHero {...route!.hero!} route={route!} />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="Experience and expertise"
            title="A real operator profile, not a generic hospitality byline."
            description="This page exists to show who is behind the venue and what experience supports the way The Old School House is run day to day."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {sanjogGautamHighlights.map((item, index) => (
              <article
                key={item.title}
                className={
                  index === 1 ? "surface-panel-muted" : "surface-panel"
                }
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

      <InlineBookingCta
        title="See how that experience lands in the room."
        description="Book a table if you want to experience the pub atmosphere, service style, and Nepalese kitchen for yourself."
      />

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="surface-panel space-y-4">
            <SectionHeading
              eyebrow="Operator overview"
              title="San's work is visible in the guest experience as much as the food."
              description="The strongest trust signal for a hospitality brand is when the person behind it can be connected to real-world operating experience."
              className="max-w-none"
            />
            <div className="space-y-3 text-sm leading-7 text-on-surface md:text-base">
              {sanjogGautamExperienceNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            <article className="surface-panel-muted rounded-2xl">
              <div className="flex items-center gap-3">
                <Buildings className="size-5 text-secondary" />
                <h2 className="section-title">Works for {siteLegalName}</h2>
              </div>
              <div className="grid gap-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                {organizationFactSheet.slice(0, 4).map((item) => (
                  <div key={item.label}>
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      {item.label}
                    </p>
                    <p className="pt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-panel">
              <h2 className="section-title">Areas of expertise</h2>
              <ul className="grid gap-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                {sanjogGautamExpertiseAreas.map((item) => (
                  <li
                    key={item}
                    className="border-t border-[rgba(196,189,181,0.42)] pt-3 first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <PageSignoff
        eyebrow="Next step"
        title="See the venue this profile supports."
        description="The strongest proof still comes from the guest experience itself, so the best next move is to explore the pub or make a booking."
        body={
          <p>
            Read more about the venue, browse the live menu, or call the pub if
            you want to talk through a booking directly with the team.
          </p>
        }
        actions={[
          {
            href: "/about",
            label: "Back to About",
            icon: <ArrowRight className="size-4" />,
          },
          {
            href: sitePhoneHref,
            label: "Call the pub",
          },
        ]}
        details={
          <div className="grid gap-2 text-sm leading-7">
            <Link
              href="/menu"
              className="text-white/72 transition hover:text-white"
            >
              Browse the menu
            </Link>
            <Link
              href="/book"
              className="text-white/72 transition hover:text-white"
            >
              Book a table
            </Link>
          </div>
        }
      />
    </main>
  )
}
