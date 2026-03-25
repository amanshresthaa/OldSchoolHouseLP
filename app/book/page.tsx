import type { Metadata } from "next"
import {
  ArrowRight,
  CalendarDots,
  Clock,
  EnvelopeSimple,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { OpenStatusBadge } from "@/components/site/OpenStatusBadge"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  bookOnlineHref,
  foodHours,
  openingHours,
  siteEmail,
  siteEmailHref,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"

export const metadata: Metadata = {
  title: "Book a Table in Stony Stratford",
  description:
    "Book a table at The Old School House in Stony Stratford online, by phone, or by email. Open seven days a week on London Road.",
  alternates: {
    canonical: "/book",
  },
}

export default function BookPage() {
  return (
    <main>
      {/* Hero — focused on the three booking paths */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(6,27,14,0.98),_rgba(27,48,34,0.94)_48%,_rgba(6,27,14,0.97))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_-10%,_rgba(212,160,23,0.22),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_100%,_rgba(175,43,62,0.12),_transparent_50%)]" />
        <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--color-on-tertiary-container)]/30 to-transparent" />

        <div className="relative">
          <div className="mx-auto max-w-[84rem] px-5 sm:px-6 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 py-5">
              <div className="hero-entrance flex items-center gap-3">
                <span className="inline-block size-1.5 rounded-full bg-[var(--color-on-tertiary-container)]" />
                <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-[var(--color-on-tertiary-container)] uppercase">
                  Book a table
                </p>
              </div>
              <div className="hero-entrance">
                <OpenStatusBadge />
              </div>
            </div>

            <div className="grid gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:py-16">
              <div className="hero-entrance-delay-1 space-y-5">
                <h1 className="max-w-[18ch] text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] font-normal text-white">
                  Your table is a phone call, an email, or a few taps away.
                </h1>
                <p className="max-w-xl text-base leading-7 text-white/72 md:text-lg md:leading-8">
                  Dinner for two, a birthday with friends, or just a midweek
                  catch-up — however you like to book, we make it simple.
                </p>
              </div>

              <div className="hero-entrance-delay-2 space-y-5 lg:pb-2">
                <SiteActionCard
                  actions={[
                    {
                      href: bookOnlineHref,
                      label: "Book online",
                      icon: <ArrowRight className="size-4" />,
                    },
                    {
                      href: sitePhoneHref,
                      label: `Call ${sitePhone}`,
                      icon: <Phone className="size-4" />,
                    },
                  ]}
                  showDivider
                  tone="dark"
                />
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-[0.72rem] font-medium tracking-wide text-[var(--color-on-tertiary-container)]/80">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {openingHours[0].label}: {openingHours[0].hours}
                  </span>
                  <span className="hidden size-1 rounded-full bg-[var(--color-on-tertiary-container)]/40 sm:inline-block" />
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDots className="size-3.5" />
                    Book ahead for weekends
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-[var(--color-on-tertiary-container)]/40 via-[var(--color-on-tertiary-container)]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Three booking paths — clear, distinct, no repetition */}
      <section className="page-section bg-background">
        <div className="section-shell">
          <div className="surface-frame overflow-hidden">
            <div className="grid gap-px bg-[rgba(196,189,181,0.22)] md:grid-cols-3">
              {/* Online */}
              <div className="surface-pane bg-[var(--color-surface-lowest)] space-y-5">
                <div className="space-y-3">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Quickest
                  </p>
                  <h2 className="font-sans text-xl font-semibold text-secondary md:text-2xl">
                    Book online
                  </h2>
                  <p className="text-sm leading-7 text-on-surface md:text-base">
                    Pick your date, choose a time, and confirm in under a minute.
                    No account needed.
                  </p>
                </div>
                <SiteActionCard
                  actions={[
                    {
                      href: bookOnlineHref,
                      label: "Book online now",
                      icon: <ArrowRight className="size-4" />,
                    },
                  ]}
                />
              </div>

              {/* Phone */}
              <div className="surface-pane surface-pane-muted space-y-5">
                <div className="space-y-3">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Same-day tables
                  </p>
                  <h2 className="font-sans text-xl font-semibold text-secondary md:text-2xl">
                    Call the pub
                  </h2>
                  <p className="text-sm leading-7 text-on-surface md:text-base">
                    Best for tonight, last-minute plans, or when you just want to
                    speak to someone.
                  </p>
                </div>
                <div className="space-y-3">
                  <a
                    href={sitePhoneHref}
                    className="inline-flex items-center gap-2 font-sans text-lg font-semibold text-secondary transition hover:text-primary"
                  >
                    <Phone className="size-5" />
                    {sitePhone}
                  </a>
                  <p className="text-sm text-on-surface/78">
                    {foodHours[0]} {foodHours[1]}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="surface-pane bg-[var(--color-surface-lowest)] space-y-5">
                <div className="space-y-3">
                  <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                    Larger bookings
                  </p>
                  <h2 className="font-sans text-xl font-semibold text-secondary md:text-2xl">
                    Email us
                  </h2>
                  <p className="text-sm leading-7 text-on-surface md:text-base">
                    Birthdays, group dinners, or anything that needs a little
                    more planning. Send the details and we will come back to you.
                  </p>
                </div>
                <div className="space-y-3">
                  <a
                    href={siteEmailHref}
                    className="inline-flex items-center gap-2 font-sans text-base font-semibold text-secondary break-all transition hover:text-primary"
                  >
                    <EnvelopeSimple className="size-5 shrink-0" />
                    {siteEmail}
                  </a>
                  <p className="text-sm text-on-surface/78">
                    Include dates, guest numbers, and anything worth knowing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-tertiary-container py-10 text-white md:py-12">
        <div className="section-shell text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
            Good to know
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-white">
            Walk-ins are welcome, but a booking means your table is guaranteed.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/72 md:text-base">
            We do our best with walk-ins, especially earlier in the week. For
            Friday, Saturday, and bigger groups, booking ahead is the safest bet.
          </p>
        </div>
      </section>
    </main>
  )
}
