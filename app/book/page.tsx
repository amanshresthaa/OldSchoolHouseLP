import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarDots,
  Clock,
  EnvelopeSimple,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import {
  bookingNotes,
  openingHours,
  siteEmail,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"

export const metadata: Metadata = {
  title: "Book a Table",
  description:
    "Book a table at The Old School House in Stony Stratford by phone or email, with quick contact details, opening hours, and guidance for same-day and group bookings.",
}

export default function BookPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book a table"
        title="Book your table and make it easy from the start."
        description="Whether it is dinner for two, drinks with friends, or a bigger get-together, getting in touch is simple."
        highlights={[
          "Use the phone number for same-day plans",
          "Email works well for larger requests",
          "Opening hours are shown before you commit",
        ]}
        primaryAction={{ href: sitePhoneHref, label: "Call to book" }}
        secondaryAction={{ href: siteEmailHref, label: "Email a request" }}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Booking now"
              title="A quick call or message is all it takes."
              description="Call for the fastest answer, or send over your details by email and we will take it from there."
            />
            <div className="space-y-4 text-sm leading-7 text-on-surface md:text-base">
              {bookingNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[var(--color-surface-low)] p-6 md:p-8">
            <div className="space-y-5">
              <h2 className="text-[2rem]">Get in touch</h2>
              <div className="space-y-4 text-sm leading-7 text-on-surface md:text-base">
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
                  <a href={sitePhoneHref}>
                    Call now
                    <Phone />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={siteEmailHref}>
                    Email the team
                    <EnvelopeSimple />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Booking for tonight or on the way through town?"
        description="If you are already in Stony Stratford or need a same-day answer, a quick call is the easiest way to get sorted."
      />

      <section className="bg-[var(--color-surface-low)] py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] bg-[var(--color-surface-lowest)] px-5 py-6 md:px-7">
            <h2 className="text-[2rem]">What to include</h2>
            <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
              <p>Your preferred date and arrival time.</p>
              <p>How many guests are joining you.</p>
              <p>Any celebration or private-hire details worth knowing.</p>
              <p>The best number or email to confirm everything quickly.</p>
            </div>
          </div>
          <div className="rounded-[1.75rem] bg-[var(--color-surface-lowest)] px-5 py-6 md:px-7">
            <h2 className="text-[2rem]">Good to know</h2>
            <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
              <p>
                Pop in if you are nearby, or get in touch ahead of time if you
                would rather have your table ready and waiting.
              </p>
              <p>
                If you are arranging a larger occasion, the{" "}
                <Link
                  href="/events"
                  className="text-secondary transition hover:text-secondary/80"
                >
                  events and private hire page
                </Link>{" "}
                gives a clearer sense of the spaces available.
              </p>
            </div>
            <Button asChild size="lg" className="mt-6">
              <Link href="/events">
                Planning something bigger?
                <CalendarDots />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
