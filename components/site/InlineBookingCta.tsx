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
      <div className="mx-auto max-w-[84rem] px-5 py-10 sm:px-6 md:px-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.04fr)_minmax(19rem,0.96fr)] lg:gap-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
              Book ahead
            </p>
            <h2 className="text-white">{title}</h2>
            <p className="max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              {description}
            </p>
          </div>
          <div className="space-y-5 border-t border-white/10 pt-5 lg:border-t-0 lg:border-l lg:pt-2 lg:pl-8">
            <p className="max-w-sm text-sm leading-7 text-white/72">
              Prefer to speak to someone first? Give the pub a ring and we will
              help from there.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
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
                className="border-white/12 bg-black/16 text-white hover:bg-black/24 hover:text-white"
              >
                <a href={sitePhoneHref}>
                  Call the pub
                  <Phone />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
