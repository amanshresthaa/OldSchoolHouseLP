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
  title: "Private Hire in Stony Stratford",
  description:
    "Private hire, sports socials, tasting nights, and group bookings at The Old School House in Stony Stratford, with indoor and outdoor capacity for a range of occasions.",
  alternates: {
    canonical: "/events",
  },
}

const capacityNotes = [
  "Room indoors for seated meals and longer-table gatherings.",
  "Outdoor space across the front garden and rear courtyard.",
  "An open-plan bar that suits standing drinks and easy celebrations.",
  "Food and drinks that work just as well for groups as they do for smaller tables.",
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
        description="From birthday dinners and sports socials to private gatherings with food and drinks, The Old School House has room to bring everyone together."
        primaryAction={{ href: siteEmailHref, label: "Email an enquiry" }}
        secondaryAction={{ href: sitePhoneHref, label: "Call the pub" }}
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Room to gather"
              title="Enough room to host groups without losing the pub feel."
              description="Keep it relaxed with drinks in the garden, gather everyone around a longer table, or plan something that carries on through the evening."
            />
            <Image
              src={eventsImage}
              alt="A large plate of peri-peri chicken with fries and salad at The Old School House."
              className="media-lift h-[22rem] w-full rounded-[2rem] object-cover md:h-[30rem] lg:h-[36rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="surface-frame grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-2">
            {capacityNotes.map((note) => (
              <div
                key={note}
                className="surface-pane bg-[var(--color-surface-lowest)] text-sm leading-7 text-on-surface md:text-base"
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
              description="Big celebrations, casual get-togethers, match-day meetups, and tasting nights all feel right at home here."
            />
            <Button asChild size="lg">
              <a href={siteEmailHref}>
                Start an enquiry
                <EnvelopeSimple />
              </a>
            </Button>
          </div>
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] md:grid-cols-2">
              {eventOccasions.map((occasion, index) => (
                <div
                  key={occasion}
                  className={`surface-pane text-sm leading-7 font-medium text-on-background md:text-base ${index % 2 === 0 ? "surface-pane-muted" : "bg-[var(--color-surface-lowest)]"}`}
                >
                  {occasion}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Need a table first and an event later?"
        description="If this visit is just drinks or dinner, book a table now. If you are planning something bigger, send us the details and we will help with the rest."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.64fr_1.36fr] lg:items-start">
          <SectionHeading
            eyebrow="Plan the details"
            title="A little context helps us shape the right kind of gathering."
            description="Tell us the rough numbers, the kind of setup you want, and whether food, drinks, or the match matter most."
            className="lg:sticky lg:top-28"
          />
          <div className="surface-frame grid gap-px bg-[rgba(196,189,181,0.22)] md:grid-cols-[0.94fr_1.06fr]">
            <div className="surface-pane surface-pane-muted">
              <h2 className="text-[2rem]">What works well here</h2>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                <p>Sports screenings and local team socials.</p>
                <p>Seasonal tasting evenings and menu launches.</p>
                <p>
                  Functions and parties that want indoor and outdoor
                  flexibility.
                </p>
                <p>
                  Community gatherings that still want a proper food and drink
                  offer.
                </p>
              </div>
            </div>
            <div className="surface-pane bg-[var(--color-surface-lowest)] lg:pt-12">
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
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Start planning"
            title="Tell us what you have in mind and we will help shape the rest."
            description="If you already know the date, the guest list, or the kind of table you want, send it through and we will help put it together."
            invert
          />
          <div className="night-panel space-y-4 text-sm leading-7 md:text-base">
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
                className="border-white/12 bg-black/16 text-white hover:bg-black/24 hover:text-white"
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
