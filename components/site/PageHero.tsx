import type { ComponentProps } from "react"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { OpenStatusBadge } from "@/components/site/OpenStatusBadge"
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
}

export function PageHero({
  className,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  ...props
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-primary text-white",
        className
      )}
      {...props}
    >
      {/* Layered background — gradient + radial saffron accent + subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(6,27,14,0.98),_rgba(27,48,34,0.94)_48%,_rgba(6,27,14,0.97))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_-10%,_rgba(212,160,23,0.22),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_100%,_rgba(175,43,62,0.12),_transparent_50%)]" />

      {/* Decorative saffron accent line */}
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--color-on-tertiary-container)]/30 to-transparent" />

      <div className="relative">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-6 md:px-8">
          {/* Top bar — eyebrow + open badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 py-5">
            <div className="hero-entrance flex items-center gap-3">
              <span className="inline-block size-1.5 rounded-full bg-[var(--color-on-tertiary-container)]" />
              <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-[var(--color-on-tertiary-container)] uppercase">
                {eyebrow}
              </p>
            </div>
            <div className="hero-entrance">
              <OpenStatusBadge />
            </div>
          </div>

          {/* Main content — asymmetric two-column on desktop */}
          <div className="grid gap-8 py-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12 lg:py-16">
            {/* Left column — title */}
            <div className="hero-entrance-delay-1 space-y-5">
              <h1 className="max-w-[22ch] text-[clamp(2rem,5vw,3.5rem)] leading-[1.06] font-normal text-white">
                {title}
              </h1>
            </div>

            {/* Right column — description + actions */}
            <div className="hero-entrance-delay-2 space-y-6 lg:pb-1">
              <p className="max-w-lg text-base leading-7 text-white/72 md:text-lg md:leading-8">
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
                showDivider={Boolean(secondaryAction)}
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
