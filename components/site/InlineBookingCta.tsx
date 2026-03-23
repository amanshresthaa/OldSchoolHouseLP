import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr"

import { SiteActionCard } from "@/components/site/SiteActionCard"
import { sitePhoneHref } from "@/data/site"

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
      className="bg-tertiary-container py-12 text-white md:py-14"
      {...props}
    >
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(19rem,0.96fr)] lg:gap-10">
          <div className="space-y-2.5">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
              Book ahead
            </p>
            <h2 className="text-white">{title}</h2>
            <p className="max-w-2xl text-sm leading-6 text-white/72 md:text-base md:leading-7">
              {description}
            </p>
          </div>
          <div className="border-t border-white/10 pt-4 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-8">
            <SiteActionCard
              actions={[
                {
                  href: "/book",
                  label: "Book a table",
                  icon: <ArrowRight className="size-4" />,
                },
                {
                  href: sitePhoneHref,
                  label: "Call the pub",
                  icon: <Phone className="size-4" />,
                },
              ]}
              supportingText="Prefer to speak first? Give the pub a ring."
              showDivider
              tone="dark"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
