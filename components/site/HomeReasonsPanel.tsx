import Link from "next/link"
import * as React from "react"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { SectionHeading } from "@/components/site/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface HomeReasonItem {
  title: string
  description: string
}

interface HomeReasonsPanelCopy {
  eyebrow: string
  title: string
  description: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

interface HomeReasonsPanelProps extends React.ComponentProps<"div"> {
  copy: HomeReasonsPanelCopy
  reasons: readonly HomeReasonItem[]
}

export function HomeReasonsPanel({
  className,
  copy,
  reasons,
  ...props
}: HomeReasonsPanelProps) {
  return (
    <div
      className={cn("surface-pane space-y-5 md:px-6 md:py-6", className)}
      {...props}
    >
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        className="max-w-none space-y-3"
      />

      <div className="rounded-[1.5rem] bg-[rgba(196,189,181,0.18)]">
        <div className="flex items-center justify-between px-5 py-4 text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase sm:hidden">
          <Badge variant="pill" className="h-auto px-3 py-1">
            Reasons to visit
          </Badge>
          <p>{String(reasons.length).padStart(2, "0")} reasons</p>
        </div>

        <ScrollArea className="w-full">
          <div className="grid auto-cols-[86%] grid-flow-col gap-3 px-5 pb-5 sm:grid-flow-row sm:grid-cols-2 sm:px-0 sm:pb-0">
            {reasons.map((reason, index) => (
              <Card
                key={reason.title}
                className={cn(
                  "surface-pane min-h-[17.5rem] gap-0 rounded-[1.5rem] border border-[rgba(196,189,181,0.45)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(246,241,235,0.98)_100%)] py-0 shadow-[0_18px_34px_rgba(31,34,29,0.08)] sm:min-h-0 sm:rounded-none sm:border-0 sm:shadow-none",
                  index % 2 === 1 &&
                    "bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-low)_86%,white_14%)_0%,color-mix(in_srgb,var(--color-surface-low)_75%,white_25%)_100%)]"
                )}
              >
                <CardHeader className="gap-4 px-5 pt-5 sm:px-5 sm:pt-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="pill" className="h-auto px-3 py-1">
                      Reason {String(index + 1).padStart(2, "0")}
                    </Badge>
                    <Separator className="flex-1 bg-[rgba(175,43,62,0.18)]" />
                  </div>
                  <CardTitle className="max-w-[15rem] font-heading text-[1.72rem] leading-[1.04] tracking-[-0.035em] text-primary sm:max-w-none sm:text-[1.18rem] sm:leading-[1.16]">
                    {reason.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-5 pt-0 sm:px-5">
                  <p className="text-sm leading-6 text-on-surface sm:text-[0.92rem] sm:leading-5">
                    {reason.description}
                  </p>
                </CardContent>

                <CardFooter className="mt-auto items-end justify-between gap-4 px-5 pt-6 pb-5 sm:px-5 sm:pt-4 sm:pb-4">
                  <p className="max-w-[9rem] text-[0.72rem] font-semibold tracking-[0.12em] text-primary/48 uppercase">
                    Why guests come back
                  </p>
                  <p className="font-heading text-[3.45rem] leading-none tracking-[-0.08em] text-primary/14 sm:text-[2.35rem]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <Button asChild size="lg">
          <Link href={copy.primaryCtaHref}>
            <span>{copy.primaryCtaLabel}</span>
            <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={copy.secondaryCtaHref}>{copy.secondaryCtaLabel}</Link>
        </Button>
      </div>
    </div>
  )
}
