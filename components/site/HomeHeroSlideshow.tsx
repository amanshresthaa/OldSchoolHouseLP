"use client"

import {
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  bookingHref,
  openingHours,
  proofPoints,
  type ProofPoint,
} from "@/data/site"
import momoImage from "@/images/food/chicken-momo-and-veg-momo.png"
import beerOnTapImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-beer-on-tap.jpeg"
import indoorSeatingImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-indoor-seating-area-1.jpeg"
import sportsTvImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-sports-tv-big-screen.jpeg"
import customerParkingImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-customer-parking.jpeg"
import pubExteriorImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-pub-building-exterior.jpeg"
import { cn } from "@/lib/utils"

interface HeroSlide extends ProofPoint {
  image: StaticImageData
  alt: string
  eyebrow: string
  signals: string[]
  kenBurnsOrigin: string
}

interface HeroCta {
  href: string
  label: string
}

const heroSlides: HeroSlide[] = [
  {
    ...proofPoints[0],
    image: pubExteriorImage,
    alt: "Exterior of The Old School House pub on London Road in Stony Stratford.",
    eyebrow: "Traditional pub · Stony Stratford",
    signals: [
      "Warm local welcome",
      "London Road setting",
      "Proper pub atmosphere",
    ],
    kenBurnsOrigin: "center center",
  },
  {
    ...proofPoints[1],
    image: momoImage,
    alt: "Steamed momo dumplings with chutney served at The Old School House.",
    eyebrow: "House kitchen · Nepalese & British",
    signals: [
      "Momo and house dishes",
      "Food worth talking about",
      "More than standard pub fare",
    ],
    kenBurnsOrigin: "top right",
  },
  {
    ...proofPoints[2],
    image: indoorSeatingImage,
    alt: "Indoor seating area at The Old School House showing the room layout and pub atmosphere.",
    eyebrow: "Space for every occasion",
    signals: ["65 covers inside", "60 outside", "Lunches to group tables"],
    kenBurnsOrigin: "bottom left",
  },
  {
    ...proofPoints[3],
    image: customerParkingImage,
    alt: "Outdoor seating and arrival area at The Old School House in Stony Stratford.",
    eyebrow: "Garden · Courtyard · Outdoor dining",
    signals: [
      "Front garden seating",
      "Private courtyard",
      "Outdoor food and drinks",
    ],
    kenBurnsOrigin: "top left",
  },
  {
    ...proofPoints[4],
    image: sportsTvImage,
    alt: "Large-screen sports area inside The Old School House pub.",
    eyebrow: "Live sport · Events · Celebrations",
    signals: ["Live sport", "Quiz nights", "Informal celebrations"],
    kenBurnsOrigin: "bottom right",
  },
  {
    ...proofPoints[5],
    image: beerOnTapImage,
    alt: "Beer being poured at the bar inside The Old School House pub.",
    eyebrow: "Easy to find · Easy to love",
    signals: ["Central Stony Stratford", "Easy for walk-ins", "Simple to find"],
    kenBurnsOrigin: "center top",
  },
]

const AUTOPLAY_INTERVAL_MS = 6200
const RESUME_AFTER_MANUAL_NAV_MS = 4000
const heroCtas: readonly HeroCta[] = [
  { href: bookingHref, label: "Book a table" },
  { href: "/menu", label: "View menu" },
]

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  )
}

const heroLayoutVars = {
  "--hero-fit-scale": 1,
  "--hero-safe-space": "clamp(1rem, 0.8rem + 1.4vw, 2.5rem)",
  "--hero-min-fit-scale": 0.76,
  "--hero-inner-space": "clamp(0.25rem, 0.1rem + 0.9vw, 0.875rem)",
  "--hero-safe-inline": "var(--hero-safe-space)",
  "--hero-shell-inset": "clamp(1rem, 7vw, 12rem)",
  "--hero-shell-width":
    "min(96%, max(80%, calc(100% - (var(--hero-shell-inset) * 2))))",
  "--hero-title-width": "92%",
  "--hero-body-width": "96%",
  "--hero-signals-width": "100%",
  "--hero-cta-width": "94%",
  "--hero-meta-width": "88%",
  "--hero-meta-gap": "clamp(0.375rem, 0.55vw, 0.625rem)",
  "--hero-zone-gap": "clamp(1rem, 2vw, 1.6rem)",
  "--hero-copy-gap": "clamp(0.875rem, 1.2vw, 1.35rem)",
  "--hero-meta-zone": "clamp(2.25rem, 5vw, 3.25rem)",
  "--hero-copy-zone": "clamp(10.75rem, 25vw, 14.75rem)",
  "--hero-signals-zone": "clamp(2.75rem, 7vw, 4rem)",
  "--hero-cta-zone": "clamp(3rem, 7vw, 4.25rem)",
  "--hero-hours-size": "clamp(0.56rem, 0.54rem + 0.1vw, 0.64rem)",
  "--hero-cta-gap": "clamp(0.25rem, 0.35vw, 0.45rem)",
  "--hero-cta-offset": "clamp(0.25rem, 0.5vw, 0.65rem)",
  "--hero-cta-height": "clamp(2.5rem, 2.2rem + 0.9vw, 3.5rem)",
  "--hero-cta-font-size": "clamp(0.78rem, 0.72rem + 0.25vw, 1.02rem)",
  "--hero-cta-padding-x": "clamp(0.625rem, 1.3vw, 2rem)",
  "--hero-cta-icon-gap": "clamp(0.25rem, 0.45vw, 0.375rem)",
  "--hero-progress-width": "clamp(14rem, 28vw, 20rem)",
} as CSSProperties

const heroShellStyle = {
  width: "var(--hero-shell-width)",
} as CSSProperties

const heroTitleStyle = {
  maxWidth: "var(--hero-title-width)",
  fontSize: "calc(var(--hero-title-size) * var(--hero-fit-scale))",
  lineHeight: "var(--hero-title-leading)",
  letterSpacing: "var(--hero-title-tracking)",
} as CSSProperties

const heroBodyStyle = {
  maxWidth: "var(--hero-body-width)",
  fontSize: "calc(var(--hero-body-size) * var(--hero-fit-scale))",
  lineHeight: "var(--hero-body-leading)",
} as CSSProperties

const heroMetaStyle = {
  maxWidth: "var(--hero-meta-width)",
} as CSSProperties

const heroHoursStyle = {
  fontSize: "calc(var(--hero-hours-size) * var(--hero-fit-scale))",
} as CSSProperties

const heroSignalsStyle = {
  maxWidth: "var(--hero-signals-width)",
  minHeight: "calc(var(--hero-signals-zone) * var(--hero-fit-scale))",
} as CSSProperties

const heroCtaStyle = {
  maxWidth: "var(--hero-cta-width)",
  minHeight: "calc(var(--hero-cta-zone) * var(--hero-fit-scale))",
} as CSSProperties

const heroSignalChipStyle = {
  fontSize: "calc(var(--hero-signal-size) * var(--hero-fit-scale))",
  letterSpacing: "var(--hero-signal-tracking)",
  paddingInline: "calc(var(--hero-signal-pad-x) * var(--hero-fit-scale))",
  paddingBlock: "calc(var(--hero-signal-pad-y) * var(--hero-fit-scale))",
} as CSSProperties

const heroButtonStyle = {
  height: "calc(var(--hero-cta-height) * var(--hero-fit-scale))",
  paddingInline:
    "calc(var(--hero-cta-padding-x) * max(var(--hero-fit-scale), 0.9))",
  fontSize: "calc(var(--hero-cta-font-size) * var(--hero-fit-scale))",
} as CSSProperties

function clampNumber(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getHeroContentVars(slide: HeroSlide): CSSProperties {
  const titleLength = slide.title.length
  const descriptionLength = slide.description.length
  const longestSignal = Math.max(
    ...slide.signals.map((signal) => signal.length)
  )
  const signalAverage =
    slide.signals.reduce((total, signal) => total + signal.length, 0) /
    slide.signals.length

  const densityScore =
    titleLength * 1.15 +
    descriptionLength * 0.38 +
    longestSignal * 0.5 +
    signalAverage * 0.35

  const density = clampNumber((densityScore - 86) / 110, 0, 1)

  const titleWidth = 96 - density * 6.2
  const bodyWidth = 100 - density * 3.4
  const signalsWidth = 100 - density * 6
  const metaWidth = 91 - density * 3.4

  const titleMin = 1.62 - density * 0.08
  const titleFluid = 4.55 - density * 0.4
  const titleMax = 3.75 - density * 0.22
  const titleLeading = 0.98 - density * 0.02
  const titleTracking = -0.03 - density * 0.01

  const bodyMin = 0.92 - density * 0.025
  const bodyFluid = 2.2 - density * 0.1
  const bodyMax = 1.16 - density * 0.04
  const bodyLeading = 1.31 + density * 0.03

  const signalSize = 0.7 - density * 0.05
  const signalTracking = 0.05 - density * 0.01
  const signalPadX = 0.8 - density * 0.08
  const signalPadY = 0.36 - density * 0.04

  const metaGap = 0.5 - density * 0.06
  const hoursSize = 0.6 - density * 0.03
  const ctaOffset = 0.45 - density * 0.08
  const ctaGap = 0.32 - density * 0.05
  const copyZone = 15.2 - density * 1
  const signalsZone = 3.6 - density * 0.25

  return {
    "--hero-title-width": `${titleWidth.toFixed(2)}%`,
    "--hero-body-width": `${bodyWidth.toFixed(2)}%`,
    "--hero-signals-width": `${signalsWidth.toFixed(2)}%`,
    "--hero-meta-width": `${metaWidth.toFixed(2)}%`,
    "--hero-title-size": `clamp(${titleMin.toFixed(3)}rem, ${titleFluid.toFixed(
      3
    )}vw, ${titleMax.toFixed(3)}rem)`,
    "--hero-title-leading": titleLeading.toFixed(3),
    "--hero-title-tracking": `${titleTracking.toFixed(4)}em`,
    "--hero-body-size": `clamp(${bodyMin.toFixed(3)}rem, ${bodyFluid.toFixed(
      3
    )}vw, ${bodyMax.toFixed(3)}rem)`,
    "--hero-body-leading": bodyLeading.toFixed(3),
    "--hero-signal-size": `${signalSize.toFixed(3)}rem`,
    "--hero-signal-tracking": `${signalTracking.toFixed(4)}em`,
    "--hero-signal-pad-x": `${signalPadX.toFixed(3)}rem`,
    "--hero-signal-pad-y": `${signalPadY.toFixed(3)}rem`,
    "--hero-meta-gap": `${metaGap.toFixed(3)}rem`,
    "--hero-hours-size": `${hoursSize.toFixed(3)}rem`,
    "--hero-copy-zone": `clamp(9.75rem, 26vw, ${copyZone.toFixed(3)}rem)`,
    "--hero-signals-zone": `clamp(2.75rem, 8vw, ${signalsZone.toFixed(3)}rem)`,
    "--hero-cta-offset": `${Math.max(ctaOffset, 0.45).toFixed(3)}rem`,
    "--hero-cta-gap": `${Math.max(ctaGap, 0.2).toFixed(3)}rem`,
  } as CSSProperties
}

function getSlideEnterStyle(
  prefersReducedMotion: boolean,
  delayMs: number
): CSSProperties {
  return {
    animation: prefersReducedMotion
      ? "none"
      : `osh-slide-up-fade 0.5s ease-out ${delayMs}ms both`,
  }
}

export function HomeHeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [fitState, setFitState] = useState({
    slideIndex: 0,
    scale: 1,
  })
  const progressRef = useRef<HTMLDivElement | null>(null)
  const resumeTimerRef = useRef<number | null>(null)
  const heroViewportRef = useRef<HTMLDivElement | null>(null)
  const contentGridRef = useRef<HTMLDivElement | null>(null)
  const metaRef = useRef<HTMLDivElement | null>(null)
  const copyRef = useRef<HTMLDivElement | null>(null)
  const signalsRef = useRef<HTMLDivElement | null>(null)
  const ctaRef = useRef<HTMLDivElement | null>(null)
  const fitScale = fitState.slideIndex === currentIndex ? fitState.scale : 1

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none"
      progressRef.current.style.width = "0%"
      void progressRef.current.offsetWidth
    }

    if (prefersReducedMotion || isPaused || heroSlides.length < 2) {
      return
    }

    if (progressRef.current) {
      progressRef.current.style.transition = `width ${AUTOPLAY_INTERVAL_MS}ms linear`
      progressRef.current.style.width = "100%"
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % heroSlides.length)
    }, AUTOPLAY_INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [currentIndex, isPaused, prefersReducedMotion])

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current)
      }
    }
  }, [])

  const measureHeroFit = useEffectEvent(() => {
    const viewport = heroViewportRef.current
    const grid = contentGridRef.current
    const sections = [
      metaRef.current,
      copyRef.current,
      signalsRef.current,
      ctaRef.current,
    ]

    if (!viewport || !grid || sections.some((section) => section === null)) {
      return
    }

    const viewportStyles = window.getComputedStyle(viewport)
    const gridStyles = window.getComputedStyle(grid)

    const viewportPadding =
      Number.parseFloat(viewportStyles.paddingTop) +
      Number.parseFloat(viewportStyles.paddingBottom)
    const gridPadding =
      Number.parseFloat(gridStyles.paddingTop) +
      Number.parseFloat(gridStyles.paddingBottom)
    const rowGap = Number.parseFloat(gridStyles.rowGap)
    const sectionHeights = sections.reduce((total, section) => {
      return total + (section?.getBoundingClientRect().height ?? 0)
    }, 0)

    const availableHeight = viewport.clientHeight - viewportPadding
    const requiredHeight =
      sectionHeights + gridPadding + rowGap * (sections.length - 1)

    if (availableHeight <= 0 || requiredHeight <= 0) {
      return
    }

    const ratio = availableHeight / requiredHeight
    const minimumScale = Number.parseFloat(
      viewportStyles.getPropertyValue("--hero-min-fit-scale") || "0.76"
    )
    const nextScale = clampNumber(
      ratio >= 1
        ? Math.min(1, fitScale * Math.min(ratio, 1.04))
        : fitScale * ratio * 0.992,
      minimumScale,
      1
    )

    setFitState((currentFit) => {
      const currentScale =
        currentFit.slideIndex === currentIndex ? currentFit.scale : 1

      if (
        currentFit.slideIndex === currentIndex &&
        Math.abs(nextScale - currentScale) <= 0.01
      ) {
        return currentFit
      }

      return {
        slideIndex: currentIndex,
        scale: nextScale,
      }
    })
  })

  useLayoutEffect(() => {
    const viewport = heroViewportRef.current
    const grid = contentGridRef.current

    if (!viewport || !grid) {
      return
    }

    const resizeObserver = new ResizeObserver(() => {
      measureHeroFit()
    })

    resizeObserver.observe(viewport)
    resizeObserver.observe(grid)

    const rafId = window.requestAnimationFrame(() => {
      measureHeroFit()
    })

    const fontsReady =
      "fonts" in document
        ? document.fonts.ready.then(() => {
            measureHeroFit()
          })
        : Promise.resolve()

    void fontsReady

    return () => {
      window.cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
    }
  }, [currentIndex])

  const goToSlide = (index: number) => {
    const totalSlides = heroSlides.length

    if (totalSlides < 1) {
      return
    }

    setCurrentIndex((index + totalSlides) % totalSlides)
  }

  const handleManualNav = (direction: "prev" | "next") => {
    setIsPaused(true)
    goToSlide(direction === "prev" ? currentIndex - 1 : currentIndex + 1)

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false)
    }, RESUME_AFTER_MANUAL_NAV_MS)
  }

  const activeSlide = heroSlides[currentIndex]
  const heroContentVars = getHeroContentVars(activeSlide)
  const visibleCtas = heroCtas

  return (
    <section
      data-critical-home-hero
      className="relative isolate h-[clamp(33rem,90svh,45rem)] w-full overflow-hidden bg-primary text-white"
      style={
        {
          ...heroLayoutVars,
          ...heroContentVars,
          "--hero-fit-scale": fitScale.toFixed(3),
          "--hero-safe-space-top":
            "max(var(--hero-safe-space), calc(env(safe-area-inset-top) + 0.75rem))",
          "--hero-safe-space-bottom":
            "max(var(--hero-safe-space), calc(env(safe-area-inset-bottom) + 1rem))",
        } as CSSProperties
      }
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes osh-slide-up-fade {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="absolute inset-0"
        role="region"
        aria-label="Homepage hero slideshow"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentIndex ? "z-0 opacity-100" : "-z-10 opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              style={{ transformOrigin: slide.kenBurnsOrigin }}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[8000ms] ease-out ${
                index === currentIndex
                  ? "scale-100 brightness-[0.92] saturate-105"
                  : "scale-110 brightness-[0.8] saturate-95"
              }`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,14,0.28)_0%,rgba(7,18,13,0.54)_30%,rgba(7,17,12,0.82)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,208,107,0.08),transparent_30%),linear-gradient(90deg,rgba(6,27,14,0.34),transparent_40%,rgba(6,27,14,0.3))]" />
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--color-on-tertiary-container)]/30 to-transparent" />
      <h1 data-critical-hero-title className="sr-only">
        Traditional pub and Nepalese kitchen on London Road in Stony Stratford.
      </h1>

      <div
        ref={heroViewportRef}
        className="relative z-10 mx-auto flex h-full w-full max-w-[84rem] flex-col items-center justify-center"
        style={{
          paddingLeft: "var(--hero-safe-space)",
          paddingRight: "var(--hero-safe-space)",
          paddingTop: "var(--hero-safe-space-top)",
          paddingBottom: "var(--hero-safe-space-bottom)",
        }}
      >
        <div
          className="mx-auto flex flex-col items-center"
          style={heroShellStyle}
        >
          <div
            ref={contentGridRef}
            key={`slide-content-${currentIndex}`}
            className="mx-auto grid w-full justify-items-center text-center"
            style={{
              padding: "var(--hero-inner-space)",
              gridTemplateRows: "repeat(4, auto)",
              rowGap: "calc(var(--hero-zone-gap) * var(--hero-fit-scale))",
            }}
          >
            <div
              ref={metaRef}
              className="flex h-full w-full flex-col items-center justify-center"
              style={{
                ...heroMetaStyle,
                ...getSlideEnterStyle(prefersReducedMotion, 0),
                gap: "calc(var(--hero-meta-gap) * var(--hero-fit-scale))",
              }}
            >
              <div className="eyebrow-row justify-center">
                <span
                  aria-hidden="true"
                  className="eyebrow-line bg-[var(--color-on-tertiary-container)]"
                />
                <span className="eyebrow text-[var(--color-on-tertiary-container)]">
                  {activeSlide.eyebrow}
                </span>
              </div>
              <p
                className="font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)]/86 uppercase"
                style={heroHoursStyle}
              >
                Hours {openingHours[0].hours}
              </p>
            </div>

            <div
              ref={copyRef}
              className="flex h-full w-full flex-col items-center justify-center py-2 sm:py-3 md:py-4"
              style={{
                ...getSlideEnterStyle(prefersReducedMotion, 90),
                gap: "calc(var(--hero-copy-gap) * var(--hero-fit-scale))",
              }}
            >
              <h2
                className="w-full font-heading text-balance text-white"
                style={heroTitleStyle}
              >
                {activeSlide.title}
              </h2>

              <p
                className="w-full px-1 text-white/88 sm:px-0"
                style={heroBodyStyle}
              >
                {activeSlide.description}
              </p>
            </div>

            <div
              ref={signalsRef}
              className="flex h-full w-full flex-wrap content-center items-center justify-center gap-2 self-center px-2 pb-2 sm:gap-2.5 sm:px-0 sm:pb-3 md:gap-3 md:pb-4"
              style={{
                ...heroSignalsStyle,
                ...getSlideEnterStyle(prefersReducedMotion, 175),
              }}
            >
              {activeSlide.signals.map((signal, index) => (
                <Badge
                  key={signal}
                  variant="signal"
                  className={cn(
                    "h-auto font-medium text-white/95",
                    index > 1 ? "hidden sm:inline-flex" : "inline-flex"
                  )}
                  style={heroSignalChipStyle}
                >
                  {signal}
                </Badge>
              ))}
            </div>

            <div
              ref={ctaRef}
              data-critical-hero-panel
              className="grid h-full w-full grid-cols-2 items-center justify-items-stretch gap-[var(--hero-cta-gap)]"
              style={{
                ...heroCtaStyle,
                ...getSlideEnterStyle(prefersReducedMotion, 245),
                gap: "calc(var(--hero-cta-gap) * var(--hero-fit-scale))",
              }}
            >
              {visibleCtas.map((cta, ctaIndex) => {
                const ctaClassName = "whitespace-nowrap"
                const ctaVariant = ctaIndex === 0 ? "default" : "darkOutline"

                if (isExternalHref(cta.href)) {
                  return (
                    <Button
                      key={cta.href}
                      asChild
                      variant={ctaVariant}
                      size="lg"
                      className={ctaClassName}
                      style={heroButtonStyle}
                    >
                      <a href={cta.href}>{cta.label}</a>
                    </Button>
                  )
                }

                return (
                  <Button
                    key={cta.href}
                    asChild
                    variant={ctaVariant}
                    size="lg"
                    className={ctaClassName}
                    style={heroButtonStyle}
                  >
                    <Link href={cta.href}>
                      <span>{cta.label}</span>
                      {ctaIndex === 0 ? (
                        <ArrowRight data-icon="inline-end" />
                      ) : null}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {heroSlides.length > 1 && (
        <>
          <div
            className="pointer-events-none absolute top-[53%] z-20 flex -translate-y-1/2 justify-between sm:top-1/2"
            style={{
              left: "var(--hero-safe-space)",
              right: "var(--hero-safe-space)",
            }}
          >
            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              onClick={() => handleManualNav("prev")}
              className="pointer-events-auto size-9 border border-white/20 bg-primary/45 text-white backdrop-blur-md hover:bg-primary/70 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/30 sm:size-[2.625rem] md:size-11 lg:size-12"
              aria-label="Previous hero slide"
            >
              <ArrowRight className="rotate-180" />
            </Button>

            <Button
              type="button"
              variant="ghost"
              size="icon-lg"
              onClick={() => handleManualNav("next")}
              className="pointer-events-auto size-9 border border-white/20 bg-primary/45 text-white backdrop-blur-md hover:bg-primary/70 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary/30 sm:size-[2.625rem] md:size-11 lg:size-12"
              aria-label="Next hero slide"
            >
              <ArrowRight />
            </Button>
          </div>

          <div className="absolute right-0 bottom-4 left-0 z-20 sm:bottom-5 md:bottom-6">
            <div
              className="mx-auto flex w-full max-w-[84rem] flex-col items-center gap-2 md:gap-2.5"
              style={{ paddingInline: "var(--hero-safe-space)" }}
            >
              <div className="text-[0.62rem] font-semibold tracking-[0.2em] text-white/72 uppercase sm:text-[0.66rem] md:text-[0.68rem] md:tracking-[0.24em]">
                <span className="text-white">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="px-2">/</span>
                <span>{String(heroSlides.length).padStart(2, "0")}</span>
              </div>

              <div
                className="h-1 w-full overflow-hidden rounded-full bg-white/18"
                style={{ maxWidth: "var(--hero-progress-width)" }}
              >
                <div
                  ref={progressRef}
                  className="h-full w-0 rounded-full bg-[var(--color-on-tertiary-container)]"
                />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {heroSlides.length}: {activeSlide.title}
      </div>
    </section>
  )
}
