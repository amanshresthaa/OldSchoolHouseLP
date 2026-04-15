import type { ComponentProps } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { MapEmbed } from "@/components/site/MapEmbed"
import { SectionHeading } from "@/components/site/SectionHeading"
import { Button } from "@/components/ui/button"
import { homeVisitSectionCopy } from "@/data/copy"
import {
  directionsHref,
  openingHours,
  siteAddress,
  sitePhoneHref,
} from "@/data/site"
import { cn } from "@/lib/utils"

const visitSignals = homeVisitSectionCopy.visitSignals.map((item) => ({
  label: item.label,
  value: item.valueKey === "hours" ? openingHours[0].hours : item.value,
}))

export function HomeVisitSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("page-section bg-background", className)} {...props}>
      <div className="section-shell">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-stretch">
          <article className="relative overflow-hidden rounded-[1.5rem] text-white shadow-[var(--shadow-frame)] md:rounded-[2rem]">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(245,208,107,0.16)_0%,rgba(245,208,107,0)_28%),radial-gradient(circle_at_top_right,rgba(245,208,107,0.14),transparent_36%),linear-gradient(160deg,rgba(6,27,14,0.98),rgba(27,48,34,0.94))]" />
            <div className="absolute top-0 right-0 h-40 w-40 translate-x-1/4 -translate-y-1/3 rounded-full bg-[rgba(212,160,23,0.16)] blur-3xl" />

            <div className="relative flex h-full flex-col gap-6 px-5 py-5 md:px-6 md:py-6">
              <SectionHeading
                eyebrow={homeVisitSectionCopy.eyebrow}
                title={homeVisitSectionCopy.title}
                description={homeVisitSectionCopy.description}
                invert
                className="max-w-[36rem]"
              />

              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="col-span-2 rounded-[1.25rem] bg-white/7 px-4 py-4 backdrop-blur-sm sm:col-span-3 md:rounded-[1.5rem]">
                  <dt className="text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)] uppercase">
                    {homeVisitSectionCopy.addressLabel}
                  </dt>
                  <dd className="pt-2 text-sm leading-6 text-white/84 md:text-base">
                    {siteAddress}
                  </dd>
                </div>

                {visitSignals.map((item) => (
                  <div
                    key={item.label}
                    className={cn(
                      "rounded-[1.25rem] bg-white/5 px-4 py-4 md:rounded-[1.5rem]",
                      item.label === "In town" && "col-span-2 sm:col-span-1"
                    )}
                  >
                    <dt className="text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)] uppercase">
                      {item.label}
                    </dt>
                    <dd className="pt-2 text-sm leading-6 text-white/82 md:text-[0.95rem]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="grid gap-3 pt-1 sm:grid-cols-2">
                <Button asChild size="default">
                  <a href={directionsHref} target="_blank" rel="noreferrer">
                    <span>{homeVisitSectionCopy.directionsLabel}</span>
                    <MapPin data-icon="inline-end" />
                  </a>
                </Button>
                <Button asChild variant="darkOutline" size="default">
                  <a href={sitePhoneHref}>
                    <span>{homeVisitSectionCopy.callLabel}</span>
                    <Phone data-icon="inline-end" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-white/76">
                <div className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-[var(--color-on-tertiary-container)]" />
                  <span>{openingHours[0].hours}</span>
                </div>
                <span className="hidden h-1 w-1 rounded-full bg-white/35 sm:block" />
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 font-semibold text-[var(--color-on-tertiary-container)] transition hover:text-white"
                >
                  {homeVisitSectionCopy.visitGuideLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </article>

          <MapEmbed compact />
        </div>
      </div>
    </section>
  )
}
