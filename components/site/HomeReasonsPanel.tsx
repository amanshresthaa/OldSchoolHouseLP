"use client"

import Link from "next/link"
import * as React from "react"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import {
  getCueIndicatorAnimation,
  getCueTrackAnimation,
} from "@/components/site/cueMotion"
import { SectionHeading } from "@/components/site/SectionHeading"
import { useMobileRailCue } from "@/components/site/useMobileRailCue"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

function ReasonCard({
  reason,
  index,
  className,
}: {
  reason: HomeReasonItem
  index: number
  className?: string
}) {
  return (
    <Card
      data-reason-card="true"
      size="sm"
      className={cn(
        "surface-panel-muted gap-3 rounded-2xl border-0 py-0 shadow-none",
        className
      )}
    >
      <CardHeader className="gap-2 px-5 pt-4 pb-0">
        <div className="flex items-center gap-2.5">
          <Badge variant="pill" className="h-auto px-2.5 py-0.5 text-[0.7rem]">
            {String(index + 1).padStart(2, "0")}
          </Badge>
          <CardTitle className="text-[1.05rem] leading-[1.15] tracking-[-0.015em] text-on-background">
            {reason.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-4">
        <CardDescription className="text-sm leading-relaxed text-on-surface">
          {reason.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export function HomeReasonsPanel({
  className,
  copy,
  reasons,
  ...props
}: HomeReasonsPanelProps) {
  const {
    railRef: cardRailRef,
    trackRef: cardTrackRef,
    isCueAnimating,
    peekOffset: railPeekOffset,
  } = useMobileRailCue({
    itemCount: reasons.length,
    itemSelector: '[data-reason-card="true"]',
    order: 1,
    variant: "spring",
  })

  return (
    <div
      className={cn(
        "surface-pane flex flex-col gap-5 md:px-6 md:py-6",
        className
      )}
      {...props}
    >
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        className="max-w-none"
      />

      <div className="flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase sm:hidden">
        <span className="relative flex h-5 w-9 items-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/84 px-1">
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-secondary motion-reduce:animate-none"
            style={{
              animation: getCueIndicatorAnimation(
                "x",
                "spring",
                isCueAnimating
              ),
            }}
          />
        </span>
        <p>{String(reasons.length).padStart(2, "0")} reasons</p>
      </div>

      <div className="hidden gap-3 sm:grid sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <ReasonCard key={reason.title} reason={reason} index={index} />
        ))}
      </div>

      <div className="sm:hidden">
        <div
          ref={cardRailRef}
          className="overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            ref={cardTrackRef}
            className="grid auto-cols-[84%] grid-flow-col gap-3 pb-1"
            style={
              isCueAnimating
                ? ({
                    "--osh-cue-offset": `${railPeekOffset}px`,
                    animation: getCueTrackAnimation("x", "spring"),
                  } as React.CSSProperties)
                : undefined
            }
          >
            {reasons.map((reason, index) => (
              <ReasonCard key={reason.title} reason={reason} index={index} />
            ))}
          </div>
        </div>
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
