import type { ComponentProps, ReactNode } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export interface SiteAction {
  href: string
  label: string
  icon?: ReactNode
  download?: boolean | string
}

interface SiteActionCardProps extends ComponentProps<"div"> {
  actions: SiteAction[]
  supportingText?: string
  tone?: "dark" | "light"
}

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  )
}

function ActionLink({
  action,
  className,
}: {
  action: SiteAction
  className: string
}) {
  const content = (
    <>
      <span>{action.label}</span>
      {action.icon ? action.icon : null}
    </>
  )

  if (action.download) {
    return (
      <a href={action.href} download={action.download} className={className}>
        {content}
      </a>
    )
  }

  if (isExternalHref(action.href)) {
    const externalProps = action.href.startsWith("http")
      ? { target: "_blank", rel: "noreferrer" }
      : {}

    return (
      <a href={action.href} className={className} {...externalProps}>
        {content}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  )
}

export function SiteActionCard({
  actions,
  className,
  supportingText,
  tone = "light",
  ...props
}: SiteActionCardProps) {
  const cardClassName =
    tone === "dark"
      ? "rounded-2xl bg-white/[0.06] p-5 backdrop-blur-md sm:p-6"
      : "surface-panel bg-[var(--color-surface-lowest)]/92 backdrop-blur-xl"

  const primaryClassName =
    "cta-primary group/cta inline-flex h-12 w-full items-center justify-center gap-2.5 px-6 text-sm font-semibold lg:w-auto"
  const secondaryClassName =
    tone === "dark"
      ? "cta-secondary-dark group/cta-secondary inline-flex h-12 w-full items-center justify-center gap-2.5 px-6 lg:w-auto"
      : "cta-secondary group/cta-secondary inline-flex h-12 w-full items-center justify-center gap-2.5 px-6 lg:w-auto"

  return (
    <div className={cn(cardClassName, className)} {...props}>
      <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center">
        {actions.map((action, index) => (
          <div
            key={`${action.href}-${action.label}`}
            className="contents lg:flex lg:items-center"
          >
            <ActionLink
              action={action}
              className={index === 0 ? primaryClassName : secondaryClassName}
            />
          </div>
        ))}
      </div>
      {supportingText ? (
        <p
          className={cn(
            "mt-5 max-w-lg text-sm leading-6",
            tone === "dark" ? "text-white/72" : "text-on-surface"
          )}
        >
          {supportingText}
        </p>
      ) : null}
    </div>
  )
}
