import type { Metadata } from "next"
import Image from "next/image"
import {
  CalendarDots,
  EnvelopeSimple,
  Phone,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr"

import { EditorialBreak } from "@/components/site/EditorialBreak"
import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageSignoff } from "@/components/site/PageSignoff"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import { StickySplitSection } from "@/components/site/StickySplitSection"
import {
  bookOnlineHref,
  eventOccasions,
  siteEmailHref,
  sitePhoneHref,
} from "@/data/site"

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

      <StickySplitSection
        className="bg-background"
        intro={
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Room to gather"
              title="Enough room to host groups without losing the pub feel."
              description="Drinks in the garden, a longer table inside, or something that carries on well past dessert — there is space for all of it."
            />
            <Image
              src={eventsImage}
              alt="A large plate of peri-peri chicken with fries and salad at The Old School House."
              className="media-lift h-[22rem] w-full rounded-[2rem] object-cover md:h-[30rem] lg:h-[36rem]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        }
      >
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-2">
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
      </StickySplitSection>

      <StickySplitSection
        className="bg-[var(--color-surface-low)]"
        introClassName="space-y-5"
        intro={
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Occasions"
              title="More than just formal private hire."
              description="Big celebrations, casual get-togethers, match-day meetups, and tasting nights all feel right at home here."
            />
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
        }
      >
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
      </StickySplitSection>

      <section className="page-section bg-background">
        <div className="section-shell">
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="surface-pane surface-pane-muted">
                <SectionHeading
                  eyebrow="What is included"
                  title="Practical details for planning your event."
                  description="Every event is different, so we shape the offer around what you need rather than forcing a fixed package."
                />
              </div>
              <div className="grid gap-px bg-[rgba(196,189,181,0.18)] sm:grid-cols-2">
                <div className="surface-pane bg-[var(--color-surface-lowest)]">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Space
                  </p>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    65 covers inside and around 60 outside across the front
                    garden and private courtyard. Flexible layouts for standing,
                    seated, or mixed.
                  </p>
                </div>
                <div className="surface-pane surface-pane-muted">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Food and drink
                  </p>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    Choose from the main menu, a set menu for groups, or a
                    buffet spread. Drinks can be run on a tab or pay-as-you-go.
                  </p>
                </div>
                <div className="surface-pane surface-pane-muted">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Pricing
                  </p>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    No fixed hire fee for most bookings. Minimum spend may apply
                    for exclusive use on busier evenings. Tell us your plans and
                    we will give you a clear quote.
                  </p>
                </div>
                <div className="surface-pane bg-[var(--color-surface-lowest)]">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Extras
                  </p>
                  <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                    Live sport on screens, music options, and decoration
                    flexibility. We will help tailor the details once you get in
                    touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineBookingCta
        title="Need a table first and an event later?"
        description="If this visit is just drinks or dinner, book a table now. If you are planning something bigger, send us the details and we will help with the rest."
      />

      <StickySplitSection
        className="bg-background"
        intro={
          <SectionHeading
            eyebrow="Plan the details"
            title="A little context helps us shape the right kind of gathering."
            description="Tell us the rough numbers, the kind of setup you want, and whether food, drinks, or the match matter most."
          />
        }
      >
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.22)] md:grid-cols-[0.94fr_1.06fr]">
            <div className="surface-pane surface-pane-muted">
              <h2 className="section-title">What works well here</h2>
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
              <h2 className="section-title">What to send in your enquiry</h2>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                {enquiryChecklist.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <SiteActionCard
                className="mt-6"
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
        </div>
      </StickySplitSection>

      <EditorialBreak quote="Tell us what you have in mind. We will work out the rest together." />

      <PageSignoff
        eyebrow="Start planning"
        title="Tell us what you have in mind and we will help shape the rest."
        description="If you already know the date, the guest list, or the kind of table you want, send it through and we will help put it together."
        body={
          <p>
            Some nights only need a few tables and a round of drinks. Others
            need food, space, and a bit more thought. Either way, drop us a
            line.
          </p>
        }
        actions={[
          {
            href: bookOnlineHref,
            label: "Book a table instead",
            icon: <CalendarDots className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: "Email for private hire",
            icon: <UsersThree className="size-4" />,
          },
        ]}
      />
    </main>
  )
}
