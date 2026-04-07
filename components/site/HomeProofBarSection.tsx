"use client"

import * as React from "react"

import {
  getCueIndicatorAnimation,
  getCueTrackAnimation,
} from "@/components/site/cueMotion"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
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

interface HomeProofBarItem {
  title: string
  description: string
}

interface HomeProofBarSectionCopy {
  eyebrow: string
  title: string
  description: string
  highlightLabel: string
  highlightValue: string
  highlightNote: string
}

interface HomeProofBarSectionProps extends React.ComponentProps<"section"> {
  items: readonly HomeProofBarItem[]
  copy: HomeProofBarSectionCopy
}

function ProofStoryCard({
  item,
  index,
  className,
}: {
  item: HomeProofBarItem
  index: number
  className?: string
}) {
  return (
    <Card
      data-proof-card="true"
      size="sm"
      className={cn(
        "surface-panel-muted gap-2 rounded-2xl border-0 py-0 shadow-none",
        className
      )}
    >
      <CardHeader className="gap-2 px-5 pt-4 pb-0">
        <div className="flex items-center gap-2.5">
          <Badge variant="pill" className="h-auto px-2.5 py-0.5 text-[0.7rem]">
            {String(index + 1).padStart(2, "0")}
          </Badge>
          <CardTitle className="text-[0.95rem] leading-[1.18] tracking-[-0.01em] text-on-background">
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

export function HomeProofBarSection({
  items,
  copy,
  className,
  ...props
}: HomeProofBarSectionProps) {
  const {
    railRef: cardStackRef,
    trackRef: cardTrackRef,
    isCueAnimating,
    peekOffset: stackPeekOffset,
  } = useMobileRailCue({
    axis: "y",
    itemCount: items.length,
    itemSelector: '[data-proof-card="true"]',
    order: 2,
    peekRatio: 0.36,
    variant: "nudge",
  })

  return (
    <section
      className={cn("page-section bg-background", className)}
      aria-labelledby="home-proof-bar-title"
      {...props}
    >
      <div className="section-shell">
        <ScrollReveal className="surface-frame">
          <div className="grid gap-5 p-5 md:p-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow={copy.eyebrow}
                title={copy.title}
                titleId="home-proof-bar-title"
                description={copy.description}
                className="max-w-none"
              />
              <Card className="gap-3 rounded-2xl bg-primary py-0 text-white shadow-none">
                <CardHeader className="gap-2 px-5 pt-5 pb-0">
                  <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--color-on-tertiary-container)] uppercase">
                    {copy.highlightLabel}
                  </p>
                  <p className="font-heading text-[2rem] leading-none tracking-[-0.04em] md:text-[2.35rem]">
                    {copy.highlightValue}
                  </p>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <p className="max-w-[24rem] text-sm leading-relaxed text-white/74">
                    {copy.highlightNote}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="hidden gap-3 sm:grid sm:grid-cols-2 xl:grid-cols-3">
              {items.map((item, index) => (
                <ProofStoryCard key={item.title} item={item} index={index} />
              ))}
            </div>

            <div className="sm:hidden">
              <div className="mb-3 flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/82">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-secondary motion-reduce:animate-none"
                    style={{
                      animation: getCueIndicatorAnimation(
                        "y",
                        "glint",
                        isCueAnimating
                      ),
                    }}
                  />
                </span>
                <p>{String(items.length).padStart(2, "0")} stories</p>
              </div>
              <div
                ref={cardStackRef}
                className="max-h-[18.75rem] overflow-y-auto overscroll-y-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <div
                  ref={cardTrackRef}
                  className="grid grid-cols-1 gap-3 pb-1"
                  style={
                    isCueAnimating && stackPeekOffset > 0
                      ? ({
                          "--osh-cue-offset": `${stackPeekOffset}px`,
                          animation: getCueTrackAnimation("y", "nudge"),
                        } as React.CSSProperties)
                      : undefined
                  }
                >
                  {items.map((item, index) => (
                    <ProofStoryCard
                      key={item.title}
                      item={item}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
