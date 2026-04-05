import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr"

import { SiteActionCard } from "@/components/site/SiteActionCard"
import {
  bookOnlineHref,
  bookingUrgencyNote,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"

interface InlineBookingCtaProps extends React.ComponentProps<"section"> {
  title: string
  description: string
}

export function InlineBookingCta({
  title,
  description,
  ...props
}: InlineBookingCtaProps) {
  return (
    <section
      className="page-section bg-tertiary-container text-white"
      {...props}
    >
      <div className="section-shell space-y-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2.5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
              Book ahead
            </p>
            <h2 className="text-white">{title}</h2>
            <p className="max-w-2xl text-sm leading-6 text-white/72 md:text-base md:leading-7">
              {description}
            </p>
          </div>
          <div className="shrink-0">
            <SiteActionCard
              actions={[
                {
                  href: bookOnlineHref,
                  label: "Book a table",
                  icon: <ArrowRight className="size-4" />,
                },
                {
                  href: sitePhoneHref,
                  label: `Call ${sitePhone}`,
                  icon: <Phone className="size-4" />,
                },
              ]}
              supportingText={`${bookingUrgencyNote} Prefer to speak first? Give the pub a ring.`}
              tone="dark"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
