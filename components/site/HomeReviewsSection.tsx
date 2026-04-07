"use client"

import Link from "next/link"
import * as React from "react"
import { CalendarDots, UsersThree } from "@phosphor-icons/react/dist/ssr"

import {
  getCueIndicatorAnimation,
  getCueTrackAnimation,
} from "@/components/site/cueMotion"
import { GuestReviewSlideshow } from "@/components/site/GuestReviewSlideshow"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { useMobileRailCue } from "@/components/site/useMobileRailCue"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { bookingHref } from "@/data/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { GuestReview, HighlightItem } from "@/data/site"
import { cn } from "@/lib/utils"

interface HomeReviewsSectionProps extends React.ComponentProps<"section"> {
  reviews: GuestReview[]
  highlights: readonly HighlightItem[]
}

function HighlightCard({
  highlight,
  index,
  className,
}: {
  highlight: HighlightItem
  index: number
  className?: string
}) {
  return (
    <Card
      data-review-highlight="true"
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
          <CardTitle className="text-[0.95rem] leading-[1.18] tracking-[-0.01em] text-on-background">
            {highlight.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-4">
        <CardDescription className="text-[0.84rem] leading-relaxed text-on-surface">
          {highlight.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

function ReviewHighlightsPanel({
  highlights,
  railRef,
  trackRef,
  isCueAnimating,
  peekOffset,
}: {
  highlights: readonly HighlightItem[]
  railRef: React.RefObject<HTMLDivElement | null>
  trackRef: React.RefObject<HTMLDivElement | null>
  isCueAnimating: boolean
  peekOffset: number
}) {
  return (
    <div className="surface-frame p-5 md:p-6">
      <div className="hidden gap-3 sm:grid sm:grid-cols-3">
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={highlight.title}
            highlight={highlight}
            index={index}
          />
        ))}
      </div>

      <div className="sm:hidden">
        <div className="mb-3 flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase">
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
          <p>{String(highlights.length).padStart(2, "0")} highlights</p>
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
                    animation: getCueTrackAnimation("x", "spring"),
                  } as React.CSSProperties)
                : undefined
            }
          >
            {highlights.map((highlight, index) => (
              <HighlightCard
                key={highlight.title}
                highlight={highlight}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ReviewsMeaningPanel() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] bg-primary px-5 py-6 text-white shadow-[0_26px_50px_rgba(12,33,21,0.22)] md:rounded-[1.9rem] md:px-7 md:py-7">
      <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[0.62rem] font-bold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
            In Practice
          </p>
          <p className="section-copy pt-2.5 text-white/78 md:text-[1.04rem]">
            Enjoy a proper pub atmosphere with a menu, welcome, and sense of
            occasion that make every visit feel a little more memorable.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-tertiary)] text-primary hover:bg-[var(--color-on-tertiary-container)]"
          >
            <a href={bookingHref}>
              <CalendarDots data-icon="inline-start" />
              <span>Book a table</span>
            </a>
          </Button>
          <Button asChild variant="darkOutline" size="lg">
            <Link href="/private-hire">
              <UsersThree data-icon="inline-start" />
              <span>Plan a group visit</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export function HomeReviewsSection({
  reviews,
  highlights,
  className,
  ...props
}: HomeReviewsSectionProps) {
  const {
    railRef: highlightRailRef,
    trackRef: highlightTrackRef,
    isCueAnimating: isHighlightCueAnimating,
    peekOffset: highlightPeekOffset,
  } = useMobileRailCue({
    itemCount: highlights.length,
    itemSelector: '[data-review-highlight="true"]',
    order: 5,
    peekRatio: 0.32,
    variant: "spring",
  })

  return (
    <section
      className={cn("page-section overflow-x-clip bg-background", className)}
      {...props}
    >
      <div className="section-shell flex flex-col gap-5 overflow-x-clip">
        <ScrollReveal delayMs={0}>
          <SectionHeading
            eyebrow="Guest experiences"
            title="A pub for every kind of visit."
            description="From quiet roasts to lively match nights, guests come back because the room feels right and the visit feels looked after."
            className="max-w-2xl"
          />
        </ScrollReveal>

        {/* Mobile: highlights first (value props), then reviews (social proof) */}
        <div className="flex flex-col gap-3 sm:hidden">
          <ScrollReveal delayMs={100}>
            <ReviewHighlightsPanel
              highlights={highlights}
              railRef={highlightRailRef}
              trackRef={highlightTrackRef}
              isCueAnimating={isHighlightCueAnimating}
              peekOffset={highlightPeekOffset}
            />
          </ScrollReveal>
          <ScrollReveal delayMs={160} className="min-w-0">
            <GuestReviewSlideshow reviews={reviews} className="max-w-none" />
          </ScrollReveal>
        </div>

        {/* Desktop: reviews first (hero-weight), then highlights below */}
        <div className="hidden min-w-0 gap-3 sm:grid">
          <ScrollReveal delayMs={120} className="min-w-0">
            <GuestReviewSlideshow reviews={reviews} className="max-w-none" />
          </ScrollReveal>
          <ScrollReveal delayMs={180} className="min-w-0">
            <ReviewHighlightsPanel
              highlights={highlights}
              railRef={highlightRailRef}
              trackRef={highlightTrackRef}
              isCueAnimating={isHighlightCueAnimating}
              peekOffset={highlightPeekOffset}
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={240}>
          <ReviewsMeaningPanel />
        </ScrollReveal>
      </div>
    </section>
  )
}
