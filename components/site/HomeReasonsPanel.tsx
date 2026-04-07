"use client"

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
  const cardRailRef = React.useRef<HTMLDivElement | null>(null)
  const cardTrackRef = React.useRef<HTMLDivElement | null>(null)
  const [isPhoneViewport, setIsPhoneViewport] = React.useState(false)
  const [isRailVisible, setIsRailVisible] = React.useState(false)
  const [isFirstCardActive, setIsFirstCardActive] = React.useState(true)
  const [isCueAnimating, setIsCueAnimating] = React.useState(false)
  const [railPeekOffset, setRailPeekOffset] = React.useState(0)

  React.useEffect(() => {
    const phoneQuery = window.matchMedia("(max-width: 639px)")

    function updateViewportState() {
      setIsPhoneViewport(phoneQuery.matches)
    }

    updateViewportState()
    phoneQuery.addEventListener("change", updateViewportState)

    return () => {
      phoneQuery.removeEventListener("change", updateViewportState)
    }
  }, [])

  React.useEffect(() => {
    const cardRail = cardRailRef.current

    if (!cardRail || !isPhoneViewport) {
      setIsRailVisible(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsRailVisible(entry.isIntersecting && entry.intersectionRatio >= 0.6)
      },
      {
        threshold: [0.6, 0.8],
      }
    )

    observer.observe(cardRail)

    return () => {
      observer.disconnect()
    }
  }, [isPhoneViewport])

  React.useEffect(() => {
    const cardRail = cardRailRef.current

    if (!cardRail || reasons.length < 2) {
      return
    }

    const rail = cardRail
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )

    if (!isPhoneViewport || reducedMotionQuery.matches) {
      setIsFirstCardActive(true)
      return
    }

    function updateActiveCard() {
      setIsFirstCardActive(rail.scrollLeft <= 4)
    }

    updateActiveCard()
    rail.addEventListener("scroll", updateActiveCard, { passive: true })

    return () => {
      rail.removeEventListener("scroll", updateActiveCard)
    }
  }, [isPhoneViewport, reasons.length])

  React.useEffect(() => {
    const cardTrack = cardTrackRef.current

    if (!cardTrack || !isPhoneViewport) {
      setRailPeekOffset(0)
      return
    }

    const track = cardTrack

    function updatePeekOffset() {
      const firstCard = track.querySelector('[data-reason-card="true"]')

      if (!(firstCard instanceof HTMLElement)) {
        setRailPeekOffset(0)
        return
      }

      const trackStyles = window.getComputedStyle(track)
      const columnGap = Number.parseFloat(trackStyles.columnGap || "0") || 0
      const nextCardPeek = (firstCard.offsetWidth + columnGap) * 0.42

      setRailPeekOffset(nextCardPeek)
    }

    updatePeekOffset()

    const resizeObserver = new ResizeObserver(() => {
      updatePeekOffset()
    })

    resizeObserver.observe(track)

    const firstCard = track.querySelector('[data-reason-card="true"]')

    if (firstCard instanceof HTMLElement) {
      resizeObserver.observe(firstCard)
    }

    window.addEventListener("resize", updatePeekOffset)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updatePeekOffset)
    }
  }, [isPhoneViewport, reasons.length])

  React.useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )

    if (
      !isPhoneViewport ||
      !isRailVisible ||
      !isFirstCardActive ||
      railPeekOffset <= 0 ||
      reducedMotionQuery.matches
    ) {
      setIsCueAnimating(false)
      return
    }

    let animationTimeout = 0
    let cooldownTimeout = 0
    let animationFrame = 0

    function startCueCycle() {
      setIsCueAnimating(false)

      animationFrame = window.requestAnimationFrame(() => {
        setIsCueAnimating(true)
      })

      animationTimeout = window.setTimeout(() => {
        setIsCueAnimating(false)
        cooldownTimeout = window.setTimeout(startCueCycle, 15000)
      }, 3000)
    }

    startCueCycle()

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(animationTimeout)
      window.clearTimeout(cooldownTimeout)
      setIsCueAnimating(false)
    }
  }, [isFirstCardActive, isPhoneViewport, isRailVisible, railPeekOffset])

  return (
    <div
      className={cn("surface-pane space-y-5 md:px-6 md:py-6", className)}
      {...props}
    >
      <style>{`
        @keyframes osh-horizontal-cue {
          0%, 100% { transform: translateX(0); opacity: 0.55; }
          50% { transform: translateX(9px); opacity: 1; }
        }

        @keyframes osh-reasons-rail-peek {
          0%, 70%, 100% { transform: translateX(0); }
          36% { transform: translateX(calc(var(--osh-reasons-peek-offset, 0px) * -1)); }
        }
      `}</style>

      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
        className="max-w-none space-y-3"
      />

      <div className="rounded-[1.5rem] bg-[rgba(196,189,181,0.18)]">
        <div className="flex items-center justify-between px-5 py-4 text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase sm:hidden">
          <span className="relative flex h-5 w-9 items-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/84 px-1">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-secondary motion-reduce:animate-none"
              style={{
                animation: "osh-horizontal-cue 1.65s ease-in-out infinite",
              }}
            />
          </span>
          <p>{String(reasons.length).padStart(2, "0")} reasons</p>
        </div>

        <div className="relative px-5 pb-5 sm:px-0 sm:pb-0">
          <div className="pointer-events-none absolute inset-y-0 left-5 z-10 w-8 rounded-l-[1.5rem] bg-[linear-gradient(90deg,rgba(241,236,230,0.94)_0%,rgba(241,236,230,0)_100%)] sm:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-5 z-10 w-10 rounded-r-[1.5rem] bg-[linear-gradient(270deg,rgba(241,236,230,0.96)_0%,rgba(241,236,230,0)_100%)] sm:hidden" />

          <div
            ref={cardRailRef}
            className="overflow-x-auto overscroll-x-contain rounded-[1.5rem] [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-visible sm:rounded-none [&::-webkit-scrollbar]:hidden"
          >
            <div
              ref={cardTrackRef}
              className="grid auto-cols-[86%] grid-flow-col gap-3 sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 sm:gap-3"
              style={
                isCueAnimating
                  ? ({
                      "--osh-reasons-peek-offset": `${railPeekOffset}px`,
                      animation: "osh-reasons-rail-peek 3s ease-in-out 1",
                    } as React.CSSProperties)
                  : undefined
              }
            >
              {reasons.map((reason, index) => (
                <Card
                  key={reason.title}
                  data-reason-card="true"
                  className={cn(
                    "surface-pane media-lift min-h-[17.5rem] gap-0 rounded-[1.5rem] border border-[rgba(196,189,181,0.45)] bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(246,241,235,0.98)_100%)] py-0 shadow-[0_18px_34px_rgba(31,34,29,0.08)] sm:min-h-0 sm:rounded-none sm:border-0 sm:shadow-none",
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
