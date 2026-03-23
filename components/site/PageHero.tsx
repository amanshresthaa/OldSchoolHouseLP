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
      className={cn(
        "overflow-hidden bg-primary text-white",
        "bg-[radial-gradient(circle_at_top_right,_rgba(212,160,23,0.18),_transparent_34%),linear-gradient(135deg,_rgba(6,27,14,0.96),_rgba(27,48,34,0.94))]",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-[84rem] px-5 py-16 sm:px-6 md:px-8 md:py-20">
        <div className="max-w-3xl space-y-6">
          <div className="hero-entrance flex flex-wrap items-center gap-3">
            <p className="night-kicker">{eyebrow}</p>
            <OpenStatusBadge />
          </div>
          <div className="hero-entrance-delay-1 space-y-4">
            <h1 className="max-w-4xl text-white">{title}</h1>
            <p className="max-w-2xl text-base leading-7 text-white/76 md:text-lg">
              {description}
            </p>
          </div>
          <div className="hero-entrance-delay-2 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <HeroActionLink
                href={primaryAction.href}
                download={primaryAction.download}
              >
                {primaryAction.label}
                <ArrowRight />
              </HeroActionLink>
            </Button>
            {secondaryAction ? (
              <Button
                asChild
                size="lg"
                variant={secondaryAction.variant ?? "outline"}
                className="border-white/12 bg-black/16 text-white hover:bg-black/24 hover:text-white"
              >
                <HeroActionLink
                  href={secondaryAction.href}
                  download={secondaryAction.download}
                >
                  {secondaryAction.label}
                </HeroActionLink>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
