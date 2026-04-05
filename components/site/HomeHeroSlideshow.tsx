"use client"

import { useEffect, useRef, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import {
  openingHours,
  proofPoints,
  sitePhoneHref,
  type ProofPoint,
} from "@/data/site"
import momoImage from "@/images/food/chicken-momo-and-veg-momo.png"
import beerOnTapImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-beer-on-tap.jpeg"
import indoorSeatingImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-indoor-seating-area-1.jpeg"
import sportsTvImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-sports-tv-big-screen.jpeg"
import customerParkingImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-customer-parking.jpeg"
import pubExteriorImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-pub-building-exterior.jpeg"

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
const heroCtas: Record<"book" | "menu" | "call", HeroCta> = {
  book: { href: "/book", label: "Book a table" },
  menu: { href: "/menu", label: "View menu" },
  call: { href: sitePhoneHref, label: "Call" },
}
const heroCtaRotation: Array<[keyof typeof heroCtas, keyof typeof heroCtas]> = [
  ["book", "menu"],
  ["menu", "call"],
  ["call", "book"],
]

export function HomeHeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const progressRef = useRef<HTMLDivElement | null>(null)
  const resumeTimerRef = useRef<number | null>(null)

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
  const visibleCtas = heroCtaRotation[
    currentIndex % heroCtaRotation.length
  ].map((ctaKey) => heroCtas[ctaKey])

  return (
    <section
      data-critical-home-hero
      className="relative isolate h-[33rem] w-full overflow-hidden bg-primary text-white sm:h-[35rem] md:h-[39rem] lg:h-[43rem] xl:h-[45rem]"
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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-16 py-6 sm:px-16 sm:py-8 md:px-20 md:py-10 lg:px-24 lg:py-12 xl:px-28 xl:py-14">
        <div className="mx-auto w-full max-w-[48rem] px-0">
          <div
            key={`slide-content-${currentIndex}`}
            className="mx-auto w-full max-w-[40rem] px-0 py-2 text-center sm:max-w-[42rem] sm:py-4 md:py-5 lg:py-6"
          >
            <div
              className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3"
              style={{
                animation: prefersReducedMotion
                  ? "none"
                  : "osh-slide-up-fade 0.5s ease-out 0ms both",
              }}
            >
              <span className="inline-flex rounded-full border border-[rgba(245,208,107,0.28)] bg-[rgba(245,208,107,0.12)] px-2.5 py-1 text-[0.54rem] font-semibold tracking-[0.12em] text-[var(--color-on-tertiary-container)] uppercase backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[0.6rem] md:px-4 md:text-[0.68rem]">
                {activeSlide.eyebrow}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(245,208,107,0.28)] bg-[rgba(245,208,107,0.12)] px-2.5 py-1 text-[0.54rem] font-semibold tracking-[0.12em] text-[var(--color-on-tertiary-container)] uppercase backdrop-blur-md sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[0.6rem] md:px-4 md:text-[0.68rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-on-tertiary-container)]" />
                Hours {openingHours[0].hours}
              </span>
            </div>

            <div
              className="flex flex-col items-center gap-3 py-2.5 sm:gap-4 sm:py-4 md:gap-4 md:py-5 lg:gap-5 lg:py-6"
              style={{
                animation: prefersReducedMotion
                  ? "none"
                  : "osh-slide-up-fade 0.5s ease-out 90ms both",
              }}
            >
              <h2 className="max-w-[15ch] font-heading text-[clamp(1.55rem,7.6vw,2.7rem)] leading-[0.98] tracking-[-0.03em] text-balance text-white sm:max-w-[15ch] sm:text-[clamp(2.1rem,6vw,3.2rem)] sm:leading-[0.97] md:max-w-[14ch] md:text-[clamp(2.5rem,5.3vw,3.9rem)] md:leading-[0.96] lg:text-[clamp(3.05rem,4.7vw,4.7rem)] lg:leading-[0.95] lg:tracking-[-0.04em] xl:text-[clamp(3.35rem,4.4vw,5rem)]">
                {activeSlide.title}
              </h2>

              <p className="max-w-[28rem] px-1 text-[clamp(0.82rem,3.4vw,0.96rem)] leading-[1.4] text-pretty text-white/88 sm:max-w-[30rem] sm:px-0 sm:text-[clamp(0.94rem,2.3vw,1.06rem)] sm:leading-[1.46] md:max-w-[32rem] md:text-[clamp(1rem,1.9vw,1.14rem)] md:leading-[1.52] lg:max-w-[34rem] lg:text-[clamp(1.08rem,1.7vw,1.24rem)] lg:leading-[1.58]">
                {activeSlide.description}
              </p>
            </div>

            <div
              className="flex w-full max-w-[32rem] flex-wrap items-center justify-center gap-2 self-center px-2 pb-2.5 sm:max-w-[32rem] sm:gap-2.5 sm:px-0 sm:pb-4 md:max-w-[34rem] md:gap-3 md:pb-5"
              style={{
                animation: prefersReducedMotion
                  ? "none"
                  : "osh-slide-up-fade 0.5s ease-out 175ms both",
              }}
            >
              {activeSlide.signals.map((signal, index) => (
                <span
                  key={signal}
                  className={`rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.62rem] font-medium tracking-[0.05em] text-white/95 backdrop-blur-sm sm:px-3.5 sm:py-1.5 sm:text-[0.72rem] sm:tracking-[0.06em] md:px-4 md:py-2 md:text-[0.8rem] md:tracking-[0.08em] lg:text-[0.84rem] ${
                    index > 1 ? "hidden sm:inline-flex" : "inline-flex"
                  }`}
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>

          <div
            data-critical-hero-panel
            className="mx-auto mt-1 grid w-full max-w-[24rem] grid-cols-2 gap-2 px-4 sm:mt-2 sm:max-w-[34rem] sm:gap-3 sm:px-0 md:max-w-[36rem] md:gap-4 lg:max-w-[38rem]"
            style={{
              animation: prefersReducedMotion
                ? "none"
                : "osh-slide-up-fade 0.5s ease-out 245ms both",
            }}
          >
            {visibleCtas.map((cta, ctaIndex) => {
              const ctaClassName =
                ctaIndex === 0
                  ? "cta-primary inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap px-2.5 text-[0.78rem] font-semibold sm:h-12 sm:px-6 sm:text-[0.94rem] md:h-13 md:px-7 md:text-[0.98rem] lg:h-14 lg:px-8 lg:text-[1.02rem]"
                  : "cta-secondary-dark inline-flex h-10 items-center justify-center whitespace-nowrap px-2.5 text-[0.78rem] font-semibold sm:h-12 sm:px-6 sm:text-[0.94rem] md:h-13 md:px-7 md:text-[0.98rem] lg:h-14 lg:px-8 lg:text-[1.02rem]"

              if (cta.href.startsWith("tel:")) {
                return (
                  <a key={cta.href} href={cta.href} className={ctaClassName}>
                    {cta.label}
                  </a>
                )
              }

              return (
                <Link key={cta.href} href={cta.href} className={ctaClassName}>
                  <span>{cta.label}</span>
                  {ctaIndex === 0 ? (
                    <ArrowRight className="size-4 md:size-[1.125rem] lg:size-5" />
                  ) : null}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {heroSlides.length > 1 && (
        <>
          <div className="pointer-events-none absolute inset-x-2 top-[53%] z-20 flex -translate-y-1/2 justify-between sm:inset-x-5 sm:top-1/2 md:inset-x-6 lg:inset-x-8">
            <button
              type="button"
              onClick={() => handleManualNav("prev")}
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 focus-visible:outline-none sm:h-10.5 sm:w-10.5 md:h-11 md:w-11 lg:h-12 lg:w-12"
              aria-label="Previous hero slide"
            >
              <ArrowRight className="size-4 rotate-180 lg:size-5" />
            </button>

            <button
              type="button"
              onClick={() => handleManualNav("next")}
              className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 focus-visible:outline-none sm:h-10.5 sm:w-10.5 md:h-11 md:w-11 lg:h-12 lg:w-12"
              aria-label="Next hero slide"
            >
              <ArrowRight className="size-4 lg:size-5" />
            </button>
          </div>

          <div className="absolute right-0 bottom-4 left-0 z-20 sm:bottom-5 md:bottom-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 sm:px-6 md:gap-2.5">
              <div className="text-[0.62rem] font-semibold tracking-[0.2em] text-white/72 uppercase sm:text-[0.66rem] md:text-[0.68rem] md:tracking-[0.24em]">
                <span className="text-white">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="px-2">/</span>
                <span>{String(heroSlides.length).padStart(2, "0")}</span>
              </div>

              <div className="h-1 w-full max-w-[14rem] overflow-hidden rounded-full bg-white/18 sm:max-w-[16rem] md:max-w-[18rem] lg:max-w-[20rem]">
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
