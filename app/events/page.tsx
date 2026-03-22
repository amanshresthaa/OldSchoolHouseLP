import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  CalendarDots,
  EnvelopeSimple,
  Phone,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import { eventOccasions, siteEmailHref, sitePhoneHref } from "@/data/site"

import eventsImage from "@/images/food/peri-peri-chicken-with-fries-and-salad.png"

export const metadata: Metadata = {
  title: "Private Hire & Events",
  description:
    "Private hire, sports socials, tasting nights, and group bookings at The Old School House in Stony Stratford, with indoor and outdoor capacity for a range of occasions.",
}

const capacityNotes = [
  "65 internal covers for seated dining and longer-table gatherings.",
  "60 external covers across the front garden and rear courtyard.",
  "Open-plan bar space that can flex for standing drinks and social occasions.",
  "A commercial kitchen designed to support stronger food service for group bookings.",
]

const enquiryChecklist = [
  "Preferred date and rough arrival time",
  "Estimated guest numbers",
  "Whether you need seated dining, drinks space, or outdoor room",
  "Any food direction, sports fixture, or celebration detail worth planning around",
]

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Events and private hire"
        title="A venue shape that works for birthdays, match days, and longer-table gatherings."
        description="From birthday dinners and sports socials to private gatherings with food and drinks, The Old School House has room to bring people together."
        highlights={[
          "65 indoor covers and 60 outdoor covers",
          "Front garden, private courtyard, and open-plan bar space",
          "Phone and email enquiry routes available now",
        ]}
        primaryAction={{ href: siteEmailHref, label: "Email an enquiry" }}
        secondaryAction={{ href: sitePhoneHref, label: "Call the pub" }}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Practical fit"
              title="Enough room to host groups without losing the pub feel."
              description="Keep it relaxed with drinks in the garden, gather everyone around a longer table, or plan something that runs through the whole evening."
            />
            <Image
              src={eventsImage}
              alt="A large plate of peri-peri chicken with fries and salad, representing group-ready food at The Old School House."
              className="h-[22rem] w-full rounded-[2rem] object-cover md:h-[30rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="grid gap-4">
            {capacityNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1.5rem] bg-[var(--color-surface-low)] px-5 py-5 text-sm leading-7 text-on-surface md:text-base"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Occasions"
              title="More than just formal private hire."
              description="Big celebrations, casual get-togethers, match-day meetups, and tasting nights all feel at home here."
            />
            <Button asChild size="lg">
              <a href={siteEmailHref}>
                Start an enquiry
                <EnvelopeSimple />
              </a>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {eventOccasions.map((occasion) => (
              <div
                key={occasion}
                className="rounded-[1.45rem] bg-[var(--color-surface-lowest)] px-5 py-5 text-sm leading-7 font-medium text-on-background md:text-base"
              >
                {occasion}
              </div>
            ))}
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Need a table first and an event later?"
        description="If you are only sorting a meal this time, keep the route simple and book a table now. For private hire, tasting nights, or watch parties, come back and send the fuller enquiry."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] bg-[var(--color-surface-low)] px-5 py-6 md:px-7">
            <h2 className="text-[2rem]">What the venue can support</h2>
            <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
              <p>Sports screenings and local team socials.</p>
              <p>Seasonal tasting evenings and menu launches.</p>
              <p>
                Functions and parties that want indoor and outdoor flexibility.
              </p>
              <p>
                Community gatherings that still want a proper food and drink
                offer.
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[var(--color-surface-low)] px-5 py-6 md:px-7">
            <h2 className="text-[2rem]">What to send in your enquiry</h2>
            <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
              {enquiryChecklist.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={siteEmailHref}>
                  Email details
                  <EnvelopeSimple />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={sitePhoneHref}>
                  Call to talk it through
                  <Phone />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Start planning"
            title="Tell us what you have in mind and we will help shape the rest."
            description="If you already know the date, the guest list, or the sort of table you want, send it through and the team can take it from there."
            invert
          />
          <div className="space-y-4 text-sm leading-7 text-white/78 md:text-base">
            <p>
              Some gatherings only need a few tables and a round of drinks.
              Others need food, space, and a bit more planning. Either way, we
              would love to hear from you.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/book">
                  Book a table instead
                  <CalendarDots />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/16 bg-white/8 text-white hover:bg-white/12 hover:text-white"
              >
                <a href={siteEmailHref}>
                  Email for private hire
                  <UsersThree />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
