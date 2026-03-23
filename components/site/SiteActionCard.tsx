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
  showDivider?: boolean
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
  showDivider = false,
  ...props
}: SiteActionCardProps) {
  const cardClassName =
    tone === "dark"
      ? "rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md sm:p-6"
      : "rounded-[1.75rem] border border-[rgba(196,189,181,0.35)] bg-[var(--color-surface-lowest)]/88 p-5 shadow-[0px_18px_48px_rgba(27,28,28,0.06)] backdrop-blur-xl sm:p-6"

  const primaryClassName =
    "group/cta inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-[linear-gradient(135deg,#af2b3e,#8f1f2e)] px-6 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(175,43,62,0.3)] transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(175,43,62,0.4)] hover:brightness-110 active:translate-y-px sm:w-auto"
  const secondaryClassName =
    tone === "dark"
      ? "group/cta-secondary inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.06] px-6 text-sm font-semibold text-white/90 transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:bg-white/12 hover:text-white active:translate-y-px sm:w-auto"
      : "group/cta-secondary inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-[rgba(196,189,181,0.42)] bg-[var(--color-surface-low)]/84 px-6 text-sm font-semibold text-primary transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-low)] hover:text-primary active:translate-y-px sm:w-auto"

  return (
    <div className={cn(cardClassName, className)} {...props}>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        {actions.map((action, index) => (
          <div
            key={`${action.href}-${action.label}`}
            className="contents sm:flex sm:items-center"
          >
            {showDivider && index === 1 ? (
              <span
                aria-hidden="true"
                className={cn(
                  "hidden h-6 w-px sm:block",
                  tone === "dark"
                    ? "bg-white/16"
                    : "bg-[rgba(196,189,181,0.48)]"
                )}
              />
            ) : null}
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
