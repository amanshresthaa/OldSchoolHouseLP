import type { Metadata } from "next"
import Image from "next/image"
import { EnvelopeSimple, Phone } from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
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

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Room to gather"
              title="Enough room to host groups without losing the pub feel."
              description="Drinks in the garden, a longer table inside, or something that carries on well past dessert — there is space for all of it."
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
            <Image
              src={eventsImage}
              alt="A large plate of peri-peri chicken with fries and salad at The Old School House."
              className="media-lift h-[16rem] w-full rounded-2xl object-cover md:h-[20rem] lg:h-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="grid gap-px overflow-hidden rounded-2xl bg-[rgba(196,189,181,0.22)] sm:grid-cols-2">
              {capacityNotes.map((note, index) => (
                <div
                  key={note}
                  className={`px-5 py-5 text-sm leading-7 text-on-surface md:px-6 md:py-6 md:text-base ${index % 2 === 0 ? "bg-[var(--color-surface-lowest)]" : "surface-pane-muted"}`}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Occasions"
              title="More than just formal private hire."
              description="Big celebrations, casual get-togethers, match-day meetups, and tasting nights all feel right at home here."
            />
            <div className="shrink-0">
              <SiteActionCard
                actions={[
                  {
                    href: siteEmailHref,
                    label: "Start an enquiry",
                    icon: <EnvelopeSimple className="size-4" />,
                  },
                ]}
              />
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-[rgba(196,189,181,0.22)] md:grid-cols-2">
            {eventOccasions.map((occasion, index) => (
              <div
                key={occasion}
                className={`px-5 py-5 text-sm leading-7 font-medium text-on-background md:px-6 md:py-6 md:text-base ${index % 2 === 0 ? "surface-pane-muted" : "bg-[var(--color-surface-lowest)]"}`}
              >
                {occasion}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading
            eyebrow="What is included"
            title="Practical details for planning your event."
            description="Every event is different, so we shape the offer around what you need rather than forcing a fixed package."
          />
          <div className="grid gap-px overflow-hidden rounded-2xl bg-[rgba(196,189,181,0.22)] sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-[var(--color-surface-lowest)] px-5 py-5 md:px-6 md:py-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                Space
              </p>
              <p className="pt-2 text-sm leading-7 text-on-surface">
                65 covers inside and around 60 outside across the front garden
                and private courtyard. Flexible layouts for standing, seated, or
                mixed.
              </p>
            </div>
            <div className="surface-pane-muted px-5 py-5 md:px-6 md:py-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                Food and drink
              </p>
              <p className="pt-2 text-sm leading-7 text-on-surface">
                Choose from the main menu, a set menu for groups, or a buffet
                spread. Drinks can be run on a tab or pay-as-you-go.
              </p>
            </div>
            <div className="bg-[var(--color-surface-lowest)] px-5 py-5 md:px-6 md:py-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                Pricing
              </p>
              <p className="pt-2 text-sm leading-7 text-on-surface">
                No fixed hire fee for most bookings. Minimum spend may apply for
                exclusive use on busier evenings. Tell us your plans and we will
                give you a clear quote.
              </p>
            </div>
            <div className="surface-pane-muted px-5 py-5 md:px-6 md:py-6">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                Extras
              </p>
              <p className="pt-2 text-sm leading-7 text-on-surface">
                Live sport on screens, music options, and decoration
                flexibility. We will help tailor the details once you get in
                touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Need a table first and an event later?"
        description="If this visit is just drinks or dinner, book a table now. If you are planning something bigger, send us the details and we will help with the rest."
      />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Plan the details"
              title="A little context helps us shape the right kind of gathering."
              description="Tell us the rough numbers, the kind of setup you want, and whether food, drinks, or the match matter most."
            />
            <div className="shrink-0">
              <SiteActionCard
                actions={[
                  {
                    href: siteEmailHref,
                    label: "Email details",
                    icon: <EnvelopeSimple className="size-4" />,
                  },
                  {
                    href: sitePhoneHref,
                    label: "Call to talk it through",
                    icon: <Phone className="size-4" />,
                  },
                ]}
                showDivider
              />
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6">
              <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                What works well here
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-7 text-on-surface md:text-base">
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
            <div className="surface-pane-muted rounded-2xl px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6">
              <h3 className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                What to send in your enquiry
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-7 text-on-surface md:text-base">
                {enquiryChecklist.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
