import type { ComponentProps } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
} from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroAction {
  href: string
  label: string
  variant?: ComponentProps<typeof Button>["variant"]
}

interface PageHeroProps extends ComponentProps<"section"> {
  eyebrow: string
  title: string
  description: string
  highlights?: string[]
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
  children,
}: {
  href: string
  children: React.ReactNode
}) {
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
  highlights = [],
  primaryAction,
  secondaryAction,
  ...props
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "overflow-hidden bg-primary text-white",
        "bg-[radial-gradient(circle_at_top_right,_rgba(212,160,23,0.18),_transparent_34%),linear-gradient(135deg,_rgba(6,27,14,0.96),_rgba(27,48,34,0.94))]",
        className
      )}
      {...props}
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
            {eyebrow}
          </p>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-white">{title}</h1>
            <p className="max-w-2xl text-base leading-7 text-white/76 md:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <HeroActionLink href={primaryAction.href}>
                {primaryAction.label}
                <ArrowRight />
              </HeroActionLink>
            </Button>
            {secondaryAction ? (
              <Button
                asChild
                size="lg"
                variant={secondaryAction.variant ?? "outline"}
                className="border-white/15 bg-white/8 text-white hover:bg-white/14 hover:text-white"
              >
                <HeroActionLink href={secondaryAction.href}>
                  {secondaryAction.label}
                </HeroActionLink>
              </Button>
            ) : null}
          </div>
        </div>
        <div className="paper-panel space-y-4 bg-white/10 text-sm text-white/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Clock className="size-5 text-[var(--color-on-tertiary-container)]" />
            <p>Mon-Sun 10:00-00:30</p>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="size-5 text-[var(--color-on-tertiary-container)]" />
            <p>London Road, Stony Stratford</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="size-5 text-[var(--color-on-tertiary-container)]" />
            <p>01908 561936</p>
          </div>
          {highlights.length ? (
            <ul className="space-y-3 pt-3 text-sm leading-6 text-white/76">
              {highlights.map((highlight) => (
                <li key={highlight} className="border-t border-white/10 pt-3">
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
