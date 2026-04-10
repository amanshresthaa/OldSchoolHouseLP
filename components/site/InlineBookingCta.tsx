import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr"

import { SiteActionCard } from "@/components/site/SiteActionCard"
import { inlineBookingCtaFixedCopy } from "@/data/copy"
import {
  bookOnlineHref,
  bookingUrgencyNote,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { cn } from "@/lib/utils"

interface InlineBookingCtaProps extends React.ComponentProps<"section"> {
  title: string
  description: string
  bookingHref?: string
}

export function InlineBookingCta({
  title,
  description,
  bookingHref = bookOnlineHref,
  className,
  ...props
}: InlineBookingCtaProps) {
  return (
    <section
      className={cn("page-section bg-tertiary-container text-white", className)}
      {...props}
    >
      <div className="section-shell space-y-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-2.5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
              {inlineBookingCtaFixedCopy.eyebrow}
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
                  href: bookingHref,
                  label: inlineBookingCtaFixedCopy.primaryActionLabel,
                  icon: <ArrowRight className="size-4" />,
                },
                {
                  href: sitePhoneHref,
                  label: `Call ${sitePhone}`,
                  icon: <Phone className="size-4" />,
                },
              ]}
              supportingText={`${bookingUrgencyNote} ${inlineBookingCtaFixedCopy.supportingTextSuffix}`}
              tone="dark"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
