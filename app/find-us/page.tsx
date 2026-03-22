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
import { Button } from "@/components/ui/button"
import {
  arrivalNotes,
  mapHref,
  openingHours,
  siteAddress,
  siteEmail,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find The Old School House on London Road in Stony Stratford, with opening hours, contact details, directions, parking notes, and a live map.",
}

export default function FindUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Find us"
        title="Everything you need before you set off."
        description="Find the address, opening hours, phone number, and map all in one place so joining us feels easy from the start."
        highlights={[
          "London Road, Stony Stratford, Milton Keynes, MK11 1JA",
          "Small on-site car park plus town-centre parking nearby",
          "Map, phone, and email links ready for mobile taps",
        ]}
        primaryAction={{ href: mapHref, label: "Open map" }}
        secondaryAction={{ href: sitePhoneHref, label: "Call the pub" }}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Address and contact"
              title="The Old School House sits on the busiest road in Stony Stratford."
              description="Right on London Road, we are easy to spot whether you are stopping by for a quick drink, dinner with friends, or a longer evening in town."
            />
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
          <MapEmbed />
        </div>
      </section>

      <InlineBookingCta
        title="Planning the route and the table at the same time?"
        description="If you know you are coming in, book first and keep the rest of the journey nice and easy."
      />

      <section className="bg-[var(--color-surface-low)] py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] bg-[var(--color-surface-lowest)] px-5 py-6 md:px-7">
            <h2 className="text-[2rem]">Getting here</h2>
            <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
              {arrivalNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[var(--color-surface-lowest)] px-5 py-6 md:px-7">
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Before you come"
            title="If you need anything else, give us a ring."
            description="If you are checking the easiest route, planning your arrival time, or booking while you travel, just give us a call."
          />
          <div className="space-y-4 text-sm leading-7 text-on-surface md:text-base">
            <p>
              If you have questions before you visit, calling ahead is the
              quickest way to make sure everything is just right.
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
              <Link href="/book">Book after planning the route</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
