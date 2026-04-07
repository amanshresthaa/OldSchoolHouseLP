"use client"

import * as React from "react"

import {
  getCueIndicatorAnimation,
  getCueTrackAnimation,
  type CueVariant,
} from "@/components/site/cueMotion"
import { useMobileRailCue } from "@/components/site/useMobileRailCue"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CompactHighlightCardProps extends React.ComponentProps<typeof Card> {
  index: number
  title: string
  description: string
  tone?: "muted" | "lowest"
}

interface CompactHighlightGridItem {
  title: string
  description: string
}

interface CompactHighlightGridProps extends React.ComponentProps<"div"> {
  items: readonly CompactHighlightGridItem[]
  columns?: 2 | 3
  tone?: "muted" | "lowest"
  itemClassName?: string
  cueLabel?: string
  cueOrder?: number
  cuePeekRatio?: number
  cueVariant?: Extract<CueVariant, "peek" | "spring" | "magnetic">
}

interface NumberedStepItem {
  title: string
  description: string
}

interface NumberedStepFlowProps extends React.ComponentProps<"div"> {
  items: readonly NumberedStepItem[]
  label: string
}

interface EditorialLinkCardContentProps extends React.ComponentProps<"div"> {
  eyebrow?: string
  title: string
  description: string
  ctaLabel?: string
  icon?: React.ReactNode
}

export function CompactHighlightCard({
  index,
  title,
  description,
  tone = "muted",
  className,
  ...props
}: CompactHighlightCardProps) {
  return (
    <Card
      size="sm"
      className={cn(
        "gap-2 rounded-2xl border-0 py-0 shadow-none",
        tone === "lowest"
          ? "bg-[var(--color-surface-lowest)]"
          : "surface-panel-muted",
        className
      )}
      {...props}
    >
      <CardHeader className="gap-2 px-5 pt-4 pb-0">
        <div className="flex items-center gap-2.5">
          <Badge variant="pill" className="h-auto px-2.5 py-0.5 text-[0.7rem]">
            {String(index + 1).padStart(2, "0")}
          </Badge>
          <CardTitle className="text-[0.95rem] leading-[1.18] tracking-[-0.01em] text-on-background">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-4">
        <CardDescription className="text-[0.84rem] leading-relaxed text-on-surface">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export function CompactHighlightGrid({
  items,
  columns,
  tone = "muted",
  className,
  itemClassName,
  cueLabel = "highlights",
  cueOrder,
  cuePeekRatio = 0.32,
  cueVariant = "spring",
  ...props
}: CompactHighlightGridProps) {
  const cueEnabled = typeof cueOrder === "number" && items.length > 1
  const { railRef, trackRef, isCueAnimating, peekOffset } = useMobileRailCue({
    itemCount: items.length,
    itemSelector: '[data-compact-highlight="true"]',
    order: cueOrder,
    peekRatio: cuePeekRatio,
    variant: cueVariant,
  })

  const gridClassName = cn(
    "grid gap-3",
    columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-3",
    className
  )

  const cards = items.map((item, index) => (
    <CompactHighlightCard
      key={item.title}
      data-compact-highlight="true"
      index={index}
      title={item.title}
      description={item.description}
      tone={tone}
      className={itemClassName}
    />
  ))

  if (!cueEnabled) {
    return (
      <div className={gridClassName} {...props}>
        {cards}
      </div>
    )
  }

  return (
    <div {...props}>
      <div className={cn("hidden", gridClassName, "sm:grid")}>{cards}</div>

      <div className="sm:hidden">
        <div className="mb-3 flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase">
          <span className="relative flex h-5 w-9 items-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/84 px-1">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-secondary motion-reduce:animate-none"
              style={{
                animation: getCueIndicatorAnimation(
                  "x",
                  cueVariant,
                  isCueAnimating
                ),
              }}
            />
          </span>
          <p>
            {String(items.length).padStart(2, "0")} {cueLabel}
          </p>
        </div>
        <div
          ref={railRef}
          className="overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            ref={trackRef}
            className="grid auto-cols-[84%] grid-flow-col gap-3 pb-1"
            style={
              isCueAnimating
                ? ({
                    "--osh-cue-offset": `${peekOffset}px`,
                    animation: getCueTrackAnimation("x", cueVariant),
                  } as React.CSSProperties)
                : undefined
            }
          >
            {cards}
          </div>
        </div>
      </div>
    </div>
  )
}

export function NumberedStepFlow({
  items,
  label,
  className,
  ...props
}: NumberedStepFlowProps) {
  const gridColsClass =
    items.length === 2
      ? "sm:grid-cols-2"
      : items.length === 3
        ? "sm:grid-cols-3"
        : items.length === 4
          ? "sm:grid-cols-4"
          : items.length === 5
            ? "sm:grid-cols-5"
            : "sm:grid-cols-3"

  return (
    <div
      className={cn("surface-frame px-5 py-5 md:px-6 md:py-6", className)}
      {...props}
    >
      <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
        {label}
      </p>
      <div className={cn("grid gap-0", gridColsClass)}>
        {items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "flex gap-3.5 py-4 first:pt-0 last:pb-0 sm:flex-col sm:gap-2.5 sm:py-0 sm:pr-5 last:sm:pr-0",
              index > 0 &&
                "border-t border-[rgba(196,189,181,0.28)] sm:border-t-0 sm:border-l sm:pl-5"
            )}
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[0.68rem] font-bold text-white">
              {index + 1}
            </span>
            <div className="min-w-0">
              <h4 className="text-[0.95rem] leading-[1.2] font-semibold tracking-[-0.01em] text-on-background">
                {item.title}
              </h4>
              <p className="mt-1 text-[0.84rem] leading-relaxed text-on-surface">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function EditorialLinkCardContent({
  eyebrow,
  title,
  description,
  ctaLabel,
  icon,
  className,
  ...props
}: EditorialLinkCardContentProps) {
  return (
    <div
      className={cn("flex h-full flex-col gap-3 px-5 py-4", className)}
      {...props}
    >
      <div className="flex flex-1 flex-col gap-3">
        {eyebrow ? (
          <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
            {eyebrow}
          </p>
        ) : null}
        {icon ? <div className="text-secondary">{icon}</div> : null}
        <div className="space-y-1.5">
          <h3 className="font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-on-surface">
            {description}
          </p>
        </div>
      </div>
      {ctaLabel ? (
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
          {ctaLabel}
        </span>
      ) : null}
    </div>
  )
}
