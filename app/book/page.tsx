import type { Metadata } from "next"
import Link from "next/link"
import {
  CalendarDots,
  Clock,
  EnvelopeSimple,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { InlineBookingCta } from "@/components/site/InlineBookingCta"
import { PageSignoff } from "@/components/site/PageSignoff"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import { StickySplitSection } from "@/components/site/StickySplitSection"
import {
  bookingNotes,
  openingHours,
  openingHoursNote,
  siteEmail,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"

export const metadata: Metadata = {
  title: "Book a Table in Stony Stratford",
  description:
    "Book a table at The Old School House in Stony Stratford by phone or email, with contact details, opening hours, and help for larger bookings.",
  alternates: {
    canonical: "/book",
  },
}

export default function BookPage() {
  return (
    <main>
      <PageHero
        eyebrow="Book a table"
        title="Book your table and make it easy from the start."
        description="Whether it is dinner for two, drinks with friends, or a bigger get-together, getting in touch is simple."
        primaryAction={{ href: sitePhoneHref, label: "Call to book" }}
        secondaryAction={{ href: siteEmailHref, label: "Email a request" }}
      />

      <StickySplitSection
        className="bg-background"
        intro={
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Booking now"
              title="A call or message is all it takes."
              description="Give us a ring and we will help straight away, or send over your details by email and we will take it from there."
            />
            <div className="space-y-4 text-sm leading-7 text-on-surface md:text-base">
              {bookingNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
        }
      >
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-[1.08fr_0.92fr]">
            <div className="surface-pane surface-pane-muted">
              <div className="space-y-5">
                <h2 className="section-title">Get in touch</h2>
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
                  <p className="text-sm text-on-surface/78">
                    {openingHoursNote}
                  </p>
                </div>
                <SiteActionCard
                  actions={[
                    {
                      href: sitePhoneHref,
                      label: "Call now",
                      icon: <Phone className="size-4" />,
                    },
                    {
                      href: siteEmailHref,
                      label: "Email the team",
                      icon: <EnvelopeSimple className="size-4" />,
                    },
                  ]}
                  showDivider
                />
              </div>
            </div>
            <div className="surface-pane bg-[var(--color-surface-lowest)] lg:pt-12">
              <p className="eyebrow">Best for</p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-on-surface md:text-base">
                <p>
                  Dinner tonight, catch-ups in town, and last-minute tables.
                </p>
                <p>Celebration meals that need a little more notice.</p>
                <p>Work drinks, group meals, and larger bookings.</p>
              </div>
              <SiteActionCard
                className="mt-6"
                actions={[
                  {
                    href: "/events",
                    label: "Planning something bigger?",
                    icon: <CalendarDots className="size-4" />,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </StickySplitSection>

      <InlineBookingCta
        title="Booking for tonight or on the way through town?"
        description="If you are already in Stony Stratford or fancy coming in tonight, give us a ring and we will do our best to sort your table."
      />

      <StickySplitSection
        className="bg-[var(--color-surface-low)]"
        gridClassName="section-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
        intro={
          <SectionHeading
            eyebrow="Before you book"
            title="A few details help us get the table just right."
            description="Tell us when you would like to come in, how many are joining you, and anything worth knowing before you arrive."
          />
        }
      >
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.22)] md:grid-cols-2">
            <div className="surface-pane bg-[var(--color-surface-lowest)]">
              <h2 className="section-title">What to include</h2>
              <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
                <p>Your preferred date and arrival time.</p>
                <p>How many guests are joining you.</p>
                <p>Any celebration or private-hire details worth knowing.</p>
                <p>
                  The best number or email so we can confirm everything for you.
                </p>
              </div>
            </div>
            <div className="surface-pane surface-pane-muted lg:pt-12">
              <h2 className="section-title">Good to know</h2>
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
            </div>
          </div>
        </div>
      </StickySplitSection>

      <PageSignoff
        eyebrow="Ready when you are"
        title="Reach out in the way that feels quickest and we will take it from there."
        description="Phone is best when you want an answer straight away. Email works well if you want to send the details over first."
        body={
          <p>
            If you already know the date, the rough time, or the number of
            guests, send it across and we can help get the table sorted without
            fuss.
          </p>
        }
        actions={[
          {
            href: sitePhoneHref,
            label: "Call to book",
            icon: <Phone className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: "Email a booking request",
            icon: <EnvelopeSimple className="size-4" />,
          },
        ]}
      />
    </main>
  )
}
