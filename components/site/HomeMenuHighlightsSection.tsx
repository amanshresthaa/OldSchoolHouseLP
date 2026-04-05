"use client"

import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { SectionHeading } from "@/components/site/SectionHeading"
import type { MenuPrice } from "@/lib/menu"
import { formatPrice } from "@/lib/menu"
import { cn } from "@/lib/utils"

interface MenuShowcaseItem {
  title: string
  description: string
  alt: string
  href: string
  ctaLabel: string
  image: StaticImageData
  item: {
    price: MenuPrice
  }
}

interface MenuGuidanceItem {
  title: string
  description: string
}

interface HomeMenuHighlightsSectionCopy {
  eyebrow: string
  title: string
  description: string
  guidanceLabel: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

interface HomeMenuHighlightsSectionProps extends React.ComponentProps<"section"> {
  copy: HomeMenuHighlightsSectionCopy
  items: readonly MenuShowcaseItem[]
  guidanceItems: readonly MenuGuidanceItem[]
}

function MenuShowcaseCard({
  item,
  featured = false,
  className,
}: {
  item: MenuShowcaseItem
  featured?: boolean
  className?: string
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative isolate block overflow-hidden rounded-[1.75rem] bg-primary text-white",
        className
      )}
    >
      <Image
        src={item.image}
        alt={item.alt}
        width={item.image.width}
        height={item.image.height}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
        sizes={
          featured
            ? "(min-width: 1280px) 42vw, (min-width: 640px) 100vw, 86vw"
            : "(min-width: 1280px) 28vw, (min-width: 640px) 50vw, 86vw"
        }
      />
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,11,0.18)_0%,rgba(7,17,11,0.48)_38%,rgba(7,17,11,0.92)_100%)]",
          featured &&
            "bg-[linear-gradient(180deg,rgba(7,17,11,0.12)_0%,rgba(7,17,11,0.42)_34%,rgba(7,17,11,0.94)_100%)]"
        )}
      />
      <div
        className={cn(
          "relative flex min-h-[22rem] flex-col justify-end p-5 md:p-6",
          featured && "min-h-[27rem] xl:min-h-[30rem]"
        )}
      >
        <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-[rgba(241,236,230,0.14)] px-3 py-1.5 backdrop-blur-[4px] md:top-6 md:left-6">
          <span className="text-[0.68rem] font-semibold tracking-[0.16em] text-[var(--color-on-tertiary-container)] uppercase">
            {formatPrice(item.item.price)}
          </span>
        </div>
        <div className="max-w-[24rem]">
          <h3
            className={cn(
              "font-heading text-[1.9rem] leading-[1.02] tracking-[-0.04em] text-white",
              featured ? "md:text-[2.6rem]" : "md:text-[1.65rem]"
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "pt-3 text-sm leading-6 text-white/78",
              featured && "max-w-[26rem] md:text-[0.98rem]"
            )}
          >
            {item.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
            {item.ctaLabel}
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function HomeMenuHighlightsSection({
  copy,
  items,
  guidanceItems,
  className,
  ...props
}: HomeMenuHighlightsSectionProps) {
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

    function updateVisibility() {
      if (!cardRail) {
        setIsRailVisible(false)
        return
      }

      const rect = cardRail.getBoundingClientRect()
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
      const visibleRatio = visibleHeight <= 0 ? 0 : visibleHeight / rect.height

      setIsRailVisible(visibleRatio >= 0.6)
    }

    updateVisibility()
    window.addEventListener("scroll", updateVisibility, { passive: true })
    window.addEventListener("resize", updateVisibility)

    return () => {
      window.removeEventListener("scroll", updateVisibility)
      window.removeEventListener("resize", updateVisibility)
    }
  }, [isPhoneViewport])

  React.useEffect(() => {
    const cardRail = cardRailRef.current

    if (!cardRail || items.length < 2) {
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
  }, [isPhoneViewport, items.length])

  React.useEffect(() => {
    const cardTrack = cardTrackRef.current

    if (!cardTrack || !isPhoneViewport) {
      setRailPeekOffset(0)
      return
    }

    const track = cardTrack

    function updatePeekOffset() {
      const firstCard = track.querySelector("a")

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

    const firstCard = track.querySelector("a")

    if (firstCard instanceof HTMLElement) {
      resizeObserver.observe(firstCard)
    }

    window.addEventListener("resize", updatePeekOffset)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updatePeekOffset)
    }
  }, [isPhoneViewport, items.length])

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

  const featuredItem = items[0]
  const supportingItems = items.slice(1)

  return (
    <section
      className={cn("bg-background py-10 md:py-14 lg:py-16", className)}
      {...props}
    >
      <style>{`
        @keyframes osh-menu-horizontal-cue {
          0%, 100% { transform: translateX(0); opacity: 0.55; }
          50% { transform: translateX(9px); opacity: 1; }
        }

        @keyframes osh-menu-rail-peek {
          0%, 70%, 100% { transform: translateX(0); }
          36% { transform: translateX(calc(var(--osh-menu-peek-offset, 0px) * -1)); }
        }
      `}</style>
      <div className="section-shell space-y-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={copy.primaryCtaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
            >
              {copy.primaryCtaLabel}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={copy.secondaryCtaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
            >
              {copy.secondaryCtaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-4 sm:hidden">
          <div className="surface-frame overflow-hidden bg-[rgba(196,189,181,0.28)]">
            <div className="flex items-center justify-between px-5 py-4 text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase">
              <span className="relative flex h-5 w-9 items-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/84 px-1">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-secondary motion-reduce:animate-none"
                  style={{
                    animation:
                      "osh-menu-horizontal-cue 1.65s ease-in-out infinite",
                  }}
                />
              </span>
              <p>{String(items.length).padStart(2, "0")} dishes</p>
            </div>
            <div className="relative px-5 pb-5">
              <div className="pointer-events-none absolute inset-y-0 left-5 z-10 w-8 rounded-l-[1.5rem] bg-[linear-gradient(90deg,rgba(241,236,230,0.94)_0%,rgba(241,236,230,0)_100%)]" />
              <div className="pointer-events-none absolute inset-y-0 right-5 z-10 w-10 rounded-r-[1.5rem] bg-[linear-gradient(270deg,rgba(241,236,230,0.96)_0%,rgba(241,236,230,0)_100%)]" />

              <div
                ref={cardRailRef}
                className="overflow-x-auto overscroll-x-contain rounded-[1.5rem] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                <div
                  ref={cardTrackRef}
                  className="grid auto-cols-[86%] grid-flow-col gap-3"
                  style={
                    isCueAnimating
                      ? {
                          ["--osh-menu-peek-offset" as string]: `${railPeekOffset}px`,
                          animation: "osh-menu-rail-peek 3s ease-in-out 1",
                        }
                      : undefined
                  }
                >
                  {items.map((item, index) => (
                    <MenuShowcaseCard
                      key={item.title}
                      item={item}
                      featured={index === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="surface-panel-muted space-y-4">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
              {copy.guidanceLabel}
            </p>
            <div className="grid gap-3">
              {guidanceItems.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-[1.2rem] bg-[var(--color-surface-lowest)] px-4 py-4"
                >
                  <h3 className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                    {highlight.title}
                  </h3>
                  <p className="pt-2 text-sm leading-6 text-on-surface">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden gap-4 sm:grid xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <MenuShowcaseCard item={featuredItem} featured />

          <div className="grid gap-4">
            {supportingItems.map((item) => (
              <article
                key={item.title}
                className="surface-frame grid overflow-hidden md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="h-60 w-full object-cover md:h-full"
                  sizes="(min-width: 1280px) 26vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="surface-pane flex flex-col justify-between gap-5 md:px-5 md:py-5">
                  <div>
                    <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-secondary uppercase">
                      {formatPrice(item.item.price)}
                    </p>
                    <h3 className="pt-3 font-heading text-[1.65rem] leading-[1.04] tracking-[-0.03em] text-on-background">
                      {item.title}
                    </h3>
                    <p className="pt-3 text-sm leading-6 text-on-surface">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                  >
                    {item.ctaLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="surface-panel-muted">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                {copy.guidanceLabel}
              </p>
              <p className="text-[0.72rem] font-semibold tracking-[0.12em] text-primary/48 uppercase">
                {String(guidanceItems.length).padStart(2, "0")} quick cues
              </p>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {guidanceItems.map((highlight, index) => (
                <article
                  key={highlight.title}
                  className="rounded-[1.2rem] bg-[var(--color-surface-lowest)] px-4 py-4"
                >
                  <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="pt-3 text-[0.72rem] font-semibold tracking-[0.16em] text-primary uppercase">
                    {highlight.title}
                  </h3>
                  <p className="pt-2 text-sm leading-6 text-on-surface">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
