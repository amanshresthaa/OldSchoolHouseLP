import type { ComponentProps } from "react"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { OpenStatusBadge } from "@/components/site/OpenStatusBadge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroAction {
  href: string
  label: string
  variant?: ComponentProps<typeof Button>["variant"]
  download?: boolean | string
}

interface PageHeroProps extends ComponentProps<"section"> {
  eyebrow: string
  title: string
  description: string
  primaryAction: HeroAction
  secondaryAction?: HeroAction
}

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  )
}

function HeroActionLink({
  href,
  download,
  children,
}: {
  href: string
  download?: boolean | string
  children: React.ReactNode
}) {
  if (download) {
    return (
      <a href={href} download={download}>
        {children}
      </a>
    )
  }

  if (isExternalHref(href)) {
    const externalProps = href.startsWith("http")
      ? { target: "_blank", rel: "noreferrer" }
      : {}

    return (
      <a href={href} {...externalProps}>
        {children}
      </a>
    )
  }

  return <Link href={href}>{children}</Link>
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
      className={cn("relative overflow-hidden bg-primary text-white", className)}
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

              {/* CTA block — frosted glass card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <HeroActionLink
                    href={primaryAction.href}
                    download={primaryAction.download}
                  >
                    <span className="group/cta inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[linear-gradient(135deg,#af2b3e,#8f1f2e)] px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(175,43,62,0.3)] transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(175,43,62,0.4)] hover:brightness-110 active:translate-y-px sm:w-auto">
                      {primaryAction.label}
                      <ArrowRight className="size-4 transition-transform duration-[var(--duration-micro)] ease-[var(--easing-standard)] group-hover/cta:translate-x-0.5" />
                    </span>
                  </HeroActionLink>
                  {secondaryAction ? (
                    <>
                      <span className="hidden h-6 w-px bg-white/16 sm:block" />
                      <HeroActionLink
                        href={secondaryAction.href}
                        download={secondaryAction.download}
                      >
                        <span className="group/cta2 inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.06] px-6 text-sm font-semibold text-white/88 transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:bg-white/12 hover:text-white active:translate-y-px sm:w-auto">
                          {secondaryAction.label}
                        </span>
                      </HeroActionLink>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative rule — saffron gradient */}
          <div className="h-px bg-gradient-to-r from-[var(--color-on-tertiary-container)]/40 via-[var(--color-on-tertiary-container)]/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}
