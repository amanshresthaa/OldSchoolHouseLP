import Link from "next/link"
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
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
    <section className="bg-tertiary-container text-white" {...props}>
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
            Book ahead
          </p>
          <h2 className="text-white">{title}</h2>
          <p className="max-w-2xl text-sm leading-7 text-white/75 md:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/book">
              Book a table
              <ArrowRight />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/16 bg-white/8 text-white hover:bg-white/12 hover:text-white"
          >
            <a href={sitePhoneHref}>
              Call the pub
              <Phone />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
