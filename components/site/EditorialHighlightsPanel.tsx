"use client"

import * as React from "react"

import {
  getCueIndicatorAnimation,
  getCueTrackAnimation,
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

interface CompactHighlightItem {
  title: string
  description: string
}

interface EditorialHighlightsPanelProps {
  items: readonly CompactHighlightItem[]
}

function EditorialHighlightCard({
  item,
  index,
  className,
}: {
  item: CompactHighlightItem
  index: number
  className?: string
}) {
  return (
    <Card
      data-editorial-highlight="true"
      size="sm"
      className={cn(
        "gap-2 rounded-2xl border-0 bg-[var(--color-surface-lowest)] py-0 shadow-none",
        className
      )}
    >
      <CardHeader className="gap-2 px-5 pt-4 pb-0">
        <div className="flex items-center gap-2.5">
          <Badge variant="pill" className="h-auto px-2.5 py-0.5 text-[0.7rem]">
            {String(index + 1).padStart(2, "0")}
          </Badge>
          <CardTitle className="text-[1rem] leading-[1.18] tracking-[-0.015em] text-on-background">
            {item.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-4">
        <CardDescription className="text-[0.84rem] leading-relaxed text-on-surface">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export function EditorialHighlightsPanel({
  items,
}: EditorialHighlightsPanelProps) {
  const { railRef, trackRef, isCueAnimating, peekOffset } = useMobileRailCue({
    axis: "y",
    itemCount: items.length,
    itemSelector: '[data-editorial-highlight="true"]',
    order: 6,
    variant: "magnetic",
    visibleRatio: 0.35,
    peekRatio: 0.3,
  })

  return (
    <div className="surface-frame p-5 md:p-6">
      <div className="hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <EditorialHighlightCard key={item.title} item={item} index={index} />
        ))}
      </div>

      <div className="sm:hidden">
        <div className="mb-3 flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase">
          <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/82">
            <span
              aria-hidden="true"
              className="mt-1.5 h-2 w-2 rounded-full bg-secondary motion-reduce:animate-none"
              style={{
                animation: getCueIndicatorAnimation(
                  "y",
                  "magnetic",
                  isCueAnimating
                ),
              }}
            />
          </span>
          <p>{String(items.length).padStart(2, "0")} reasons</p>
        </div>
        <div
          ref={railRef}
          className="max-h-[17rem] overflow-y-auto overscroll-y-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            ref={trackRef}
            className="grid grid-cols-1 gap-3 pb-1"
            style={
              isCueAnimating
                ? ({
                    "--osh-cue-offset": `${peekOffset}px`,
                    animation: getCueTrackAnimation("y", "magnetic"),
                  } as React.CSSProperties)
                : undefined
            }
          >
            {items.map((item, index) => (
              <EditorialHighlightCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
