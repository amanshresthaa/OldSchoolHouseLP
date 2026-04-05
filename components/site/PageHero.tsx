import type { ComponentProps } from "react"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { PageBreadcrumbs } from "@/components/site/PageBreadcrumbs"
import { OpenStatusBadge } from "@/components/site/OpenStatusBadge"
import { buildBreadcrumbItems, type BreadcrumbRoute } from "@/lib/metadata"
import { SiteActionCard } from "@/components/site/SiteActionCard"
import { cn } from "@/lib/utils"

interface HeroAction {
  href: string
  label: string
  variant?: "default" | "outline"
  download?: boolean | string
}

interface PageHeroProps extends ComponentProps<"section"> {
  eyebrow: string
  title: string
  description: string
  primaryAction: HeroAction
  secondaryAction?: HeroAction
  route?: BreadcrumbRoute
}

export function PageHero({
  className,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  route,
  ...props
}: PageHeroProps) {
  const breadcrumbs = route ? buildBreadcrumbItems(route) : null

  return (
    <section
      data-critical-page-hero
      className={cn(
        "relative overflow-hidden bg-primary text-white",
        className
      )}
      {...props}
    >
      {/* Layered background — editorial depth with saffron and burgundy accents */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(6,27,14,0.98),_rgba(27,48,34,0.94)_48%,_rgba(6,27,14,0.97))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_95%_60%,_rgba(212,160,23,0.2)_0%,_transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_5%_90%,_rgba(175,43,62,0.25)_0%,_transparent_60%)]" />
      <div className="absolute -top-10 -right-10 h-[12.5rem] w-[12.5rem] rounded-full border border-[var(--color-tertiary)]/12" />

      {/* Decorative saffron accent line */}
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--color-on-tertiary-container)]/30 to-transparent" />

      <div className="relative">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-6 md:px-8">
          {/* Top bar — eyebrow + open badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-5">
            <div className="hero-entrance eyebrow-row">
              <span aria-hidden="true" className="eyebrow-line" />
              <p className="eyebrow text-[var(--color-tertiary)]">{eyebrow}</p>
            </div>
            <div className="hero-entrance">
              <OpenStatusBadge />
            </div>
          </div>

          {/* Main content — asymmetric two-column on desktop */}
          <div className="grid gap-8 py-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12 lg:py-16">
            {/* Left column — title */}
            <div className="hero-entrance-delay-1 space-y-5">
              {breadcrumbs ? <PageBreadcrumbs items={breadcrumbs} /> : null}
              <h1 className="max-w-[22ch] text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] font-normal tracking-[-0.03em] text-white">
                {title}
              </h1>
            </div>

            {/* Right column — description + actions */}
            <div className="hero-entrance-delay-2 space-y-6 lg:pb-1">
              <p className="max-w-lg text-base leading-[1.65] text-white/55 md:text-lg">
                {description}
              </p>

              <SiteActionCard
                actions={[
                  {
                    href: primaryAction.href,
                    label: primaryAction.label,
                    download: primaryAction.download,
                    icon: <ArrowRight className="size-4" />,
                  },
                  ...(secondaryAction
                    ? [
                        {
                          href: secondaryAction.href,
                          label: secondaryAction.label,
                          download: secondaryAction.download,
                        },
                      ]
                    : []),
                ]}
                tone="dark"
              />
            </div>
          </div>

          {/* Bottom decorative rule — saffron gradient */}
          <div className="h-px bg-gradient-to-r from-[var(--color-on-tertiary-container)]/40 via-[var(--color-on-tertiary-container)]/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}
