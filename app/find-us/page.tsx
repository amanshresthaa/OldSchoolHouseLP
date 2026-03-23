import type { Metadata } from "next"
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { EditorialBreak } from "@/components/site/EditorialBreak"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { PageSignoff } from "@/components/site/PageSignoff"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import { StickySplitSection } from "@/components/site/StickySplitSection"
import {
  accessibilityNotes,
  arrivalNotes,
  mapHref,
  openingHours,
  openingHoursNote,
  siteAddress,
  siteEmail,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Find Us in Stony Stratford",
  description:
    "Find The Old School House on London Road in Stony Stratford, with opening hours, contact details, directions, parking notes, and a live map.",
  alternates: {
    canonical: "/find-us",
  },
}

export default function FindUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Find us"
        title="Everything you need to find us easily."
        description="Find the address, opening hours, phone number, and map all in one place so joining us feels easy from the start."
        primaryAction={{ href: mapHref, label: "Open map" }}
        secondaryAction={{ href: sitePhoneHref, label: "Call the pub" }}
      />

      <StickySplitSection
        className="bg-background"
        intro={
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Address and contact"
              title="The Old School House sits on the busiest road in Stony Stratford."
              description="Right on London Road, we are easy to spot whether you are stopping by for a quick drink, dinner with friends, or a longer evening in town."
            />
            <div className="surface-frame">
              <div className="surface-pane">
                <div className="grid gap-4 text-sm leading-7 text-on-surface md:text-base">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>{siteAddress}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>
                      <a
                        href={sitePhoneHref}
                        className="text-secondary transition hover:text-secondary/80"
                      >
                        {sitePhone}
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <EnvelopeSimple className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>
                      <a
                        href={siteEmailHref}
                        className="text-secondary transition hover:text-secondary/80"
                      >
                        {siteEmail}
                      </a>
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>
                      {openingHours[0].label}: {openingHours[0].hours}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <SiteActionCard
              actions={[
                {
                  href: mapHref,
                  label: "Open Google Maps",
                },
                {
                  href: sitePhoneHref,
                  label: "Call for directions",
                },
              ]}
              showDivider
            />
          </div>
        }
      >
        <div className="space-y-4">
          <MapEmbed />
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] md:grid-cols-3">
              <div className="surface-pane surface-pane-muted text-sm leading-7 text-on-surface">
                London Road location in the heart of Stony Stratford.
              </div>
              <div className="surface-pane bg-[var(--color-surface-lowest)] text-sm leading-7 text-on-surface">
                Small on-site car park, plus town-centre parking nearby.
              </div>
              <div className="surface-pane surface-pane-muted text-sm leading-7 text-on-surface">
                Give us a ring if you would like a hand finding us.
              </div>
            </div>
          </div>
        </div>
      </StickySplitSection>

      <InlineBookingCta
        title="Thinking about dinner already?"
        description="If you know you are joining us, book ahead and arrive with everything nicely sorted."
      />

      <EditorialBreak quote="Easy to find, easy to settle into, and easy to come back to." />

      <StickySplitSection
        className="bg-[var(--color-surface-low)]"
        intro={
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Getting here"
              title="Easy to spot when you are heading through Stony Stratford."
              description="Driving in, walking through town, or meeting friends on London Road should all feel straightforward before you arrive."
            />
            <div className="surface-frame">
              <div className="surface-pane bg-[var(--color-surface-lowest)]">
                <div className="space-y-3 text-sm leading-7 text-on-surface md:text-base">
                  {arrivalNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      >
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
            <div className="surface-pane bg-[var(--color-surface-lowest)]">
              <h2 className="section-title">Opening hours</h2>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                {openingHours.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-on-background">{item.hours}</span>
                  </div>
                ))}
                <p className="pt-2 text-sm text-on-surface/78">
                  {openingHoursNote}
                </p>
              </div>
            </div>
            <div className="surface-pane surface-pane-muted lg:pt-12">
              <h2 className="section-title">Need a hand?</h2>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                <p>
                  If you are on your way, call ahead and we will help you find
                  us.
                </p>
                <p>
                  You can also{" "}
                  <a
                    href={sitePhoneHref}
                    className="text-secondary transition hover:text-secondary/80"
                  >
                    ring the pub directly
                  </a>{" "}
                  before you head over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StickySplitSection>

      <StickySplitSection
        className="bg-background"
        intro={
          <SectionHeading
            eyebrow="Accessibility"
            title="Arrival support should feel straightforward."
            description="If you need extra help with parking, access, or where to head when you arrive, give the team a ring before you set off."
          />
        }
      >
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.18)] md:grid-cols-3">
            {accessibilityNotes.map((note, index) => (
              <article
                key={note}
                className={cn(
                  "surface-pane bg-[var(--color-surface-lowest)] text-sm leading-7 text-on-surface md:text-base",
                  index === 1 && "surface-pane-muted"
                )}
              >
                {note}
              </article>
            ))}
          </div>
        </div>
      </StickySplitSection>

      <StickySplitSection
        className="bg-background"
        intro={
          <SectionHeading
            eyebrow="Before you come"
            title="If you need anything else, give us a ring."
            description="If you want to check parking, opening hours, or anything else before you arrive, just give us a call."
          />
        }
      >
        <div className="surface-frame">
          <div className="surface-pane surface-pane-muted">
            <div className="space-y-4 text-sm leading-7 text-on-surface md:text-base">
              <p>
                If you have questions before you visit, give us a ring and we
                will help.
              </p>
              <p>
                For directions or last-minute questions, call the pub team on{" "}
                <a
                  href={sitePhoneHref}
                  className="text-secondary transition hover:text-secondary/80"
                >
                  {sitePhone}
                </a>
                .
              </p>
              <SiteActionCard
                actions={[
                  {
                    href: "/book",
                    label: "Book a table",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </StickySplitSection>

      <PageSignoff
        eyebrow="Finish planning"
        title="Once the route is sorted, the easiest next step is deciding whether to book ahead."
        description="Open the map if you are checking the journey, or lock the table in now if you already know you are coming."
        body={
          <p>
            If you need a quick answer before you set off, give the pub a ring.
            If you are already sure about the visit, booking ahead keeps the
            rest simple.
          </p>
        }
        actions={[
          {
            href: "/book",
            label: "Book a table",
          },
          {
            href: mapHref,
            label: "Open the map",
            icon: <MapPin className="size-4" />,
          },
        ]}
      />
    </main>
  )
}
