import type { Metadata } from "next"
import Link from "next/link"
import {
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { MapEmbed } from "@/components/site/MapEmbed"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { StickySplitSection } from "@/components/site/StickySplitSection"
import { Button } from "@/components/ui/button"
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
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={mapHref} target="_blank" rel="noreferrer">
                  Open Google Maps
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={sitePhoneHref}>Call for directions</a>
              </Button>
            </div>
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
              <h2 className="text-[2rem]">Opening hours</h2>
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
              <h2 className="text-[2rem]">Need a hand?</h2>
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
              <Button asChild size="lg">
                <Link href="/book">Book a table</Link>
              </Button>
            </div>
          </div>
        </div>
      </StickySplitSection>
    </main>
  )
}
