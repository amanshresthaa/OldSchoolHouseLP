import type { ComponentProps, ReactNode } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  ...props
}: { action: SiteAction } & ComponentProps<"a">) {
  if (action.download) {
    return (
      <a
        href={action.href}
        download={action.download}
        className={className}
        {...props}
      >
        <span>{action.label}</span>
        {action.icon ? action.icon : null}
      </a>
    )
  }

  if (isExternalHref(action.href)) {
    const externalProps = action.href.startsWith("http")
      ? { target: "_blank", rel: "noreferrer" }
      : {}

    return (
      <a href={action.href} className={className} {...externalProps} {...props}>
        <span>{action.label}</span>
        {action.icon ? action.icon : null}
      </a>
    )
  }

  return (
    <Link href={action.href} className={className} {...props}>
      <span>{action.label}</span>
      {action.icon ? action.icon : null}
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
      ? "rounded-2xl bg-white/[0.06] py-0 backdrop-blur-md"
      : "surface-panel bg-[var(--color-surface-lowest)]/92 py-0 backdrop-blur-xl"

  return (
    <Card className={cn(cardClassName, className)} {...props}>
      <CardContent
        className={cn(
          "px-5 py-5 sm:px-6 sm:py-6",
          tone === "dark" && "px-5 py-5 sm:px-6 sm:py-6"
        )}
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center">
          {actions.map((action, index) => (
            <Button
              key={`${action.href}-${action.label}`}
              asChild
              variant={
                index === 0
                  ? "default"
                  : tone === "dark"
                    ? "darkOutline"
                    : "outline"
              }
              size="lg"
              className="w-full lg:w-auto"
            >
              <ActionLink action={action} />
            </Button>
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
      </CardContent>
    </Card>
  )
}
