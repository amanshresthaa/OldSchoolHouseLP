"use client"

import { useEffect, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { OpenStatusBadge } from "@/components/site/OpenStatusBadge"
import { proofPoints, siteName, type ProofPoint } from "@/data/site"
import momoImage from "@/images/food/chicken-momo-and-veg-momo.png"

interface HeroSlide extends ProofPoint {
  image: string | StaticImageData
  alt: string
  eyebrow: string
  signals: string[]
}

const heroSlides: HeroSlide[] = [
  {
    ...proofPoints[0],
    image: "/images/hero/placeholders/traditional-pub.svg",
    alt: "Illustrated placeholder showing a traditional pub frontage for The Old School House.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: [
      "Warm local welcome",
      "London Road setting",
      "Proper pub atmosphere",
    ],
  },
  {
    ...proofPoints[1],
    image: momoImage,
    alt: "Steamed momo dumplings with chutney served at The Old School House.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: [
      "Momo and house dishes",
      "Food worth talking about",
      "More than standard pub fare",
    ],
  },
  {
    ...proofPoints[2],
    image: "/images/hero/placeholders/covers-inside-outside.svg",
    alt: "Illustrated placeholder representing indoor and outdoor capacity at The Old School House.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: ["65 covers inside", "60 outside", "Lunches to group tables"],
  },
  {
    ...proofPoints[3],
    image: "/images/hero/placeholders/front-garden-courtyard.svg",
    alt: "Illustrated placeholder of the front garden and courtyard at The Old School House.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: [
      "Front garden seating",
      "Private courtyard",
      "Outdoor food and drinks",
    ],
  },
  {
    ...proofPoints[4],
    image: "/images/hero/placeholders/live-sport-occasions.svg",
    alt: "Illustrated placeholder highlighting live sport and local occasions at The Old School House.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: ["Live sport", "Quiz nights", "Informal celebrations"],
  },
  {
    ...proofPoints[5],
    image: "/images/hero/placeholders/london-road-location.svg",
    alt: "Illustrated placeholder showing The Old School House position on London Road in Stony Stratford.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: ["Central Stony Stratford", "Easy for walk-ins", "Simple to find"],
  },
]

const AUTOPLAY_INTERVAL_MS = 6200

export function HomeHeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    handleChange()
    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isPaused || heroSlides.length < 2) {
      return
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % heroSlides.length)
    }, AUTOPLAY_INTERVAL_MS)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isPaused, prefersReducedMotion])

  const goToSlide = (index: number) => {
    const lastIndex = heroSlides.length - 1

    if (index < 0) {
      setCurrentIndex(lastIndex)
      return
    }

    if (index > lastIndex) {
      setCurrentIndex(0)
      return
    }

    setCurrentIndex(index)
  }

  const activeSlide = heroSlides[currentIndex]

  return (
    <section
      className="relative h-[41rem] overflow-hidden bg-primary text-white sm:h-[43rem] md:h-[46rem] lg:h-[50rem] xl:h-[52rem]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-0"
        role="region"
        aria-label="Homepage hero slideshow"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-700 ease-[var(--easing-standard)] ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-transform duration-[1800ms] ease-out ${
                index === currentIndex
                  ? "scale-100 brightness-[0.56] saturate-[0.88]"
                  : "scale-[1.04] brightness-[0.5] saturate-[0.82]"
              }`}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,7,0.48)_0%,rgba(4,14,9,0.7)_26%,rgba(5,17,11,0.9)_58%,rgba(6,20,13,0.985)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,13,8,0.66)_0%,rgba(4,13,8,0.48)_38%,rgba(4,13,8,0.6)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_75%_5%,_rgba(212,160,23,0.14),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_100%,_rgba(175,43,62,0.1),_transparent_50%)]" />
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--color-on-tertiary-container)]/30 to-transparent" />

      <div className="relative h-full">
        <div className="mx-auto flex h-full max-w-[84rem] flex-col px-5 sm:px-6 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/8 py-5">
            <div className="flex items-center gap-3">
              <span className="inline-block size-1.5 rounded-full bg-[var(--color-on-tertiary-container)]" />
              <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-[var(--color-on-tertiary-container)] uppercase">
                {siteName}
              </p>
            </div>
            <OpenStatusBadge />
          </div>

          <div className="grid h-[26rem] flex-1 content-end gap-5 py-6 sm:h-[28rem] sm:gap-6 sm:py-8 md:h-[30rem] md:py-10 lg:h-[21rem] lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14 lg:py-12 xl:h-[22rem]">
            <div className="space-y-4 sm:space-y-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
                {activeSlide.eyebrow}
              </p>
              <h1 className="max-w-[14ch] text-[clamp(2rem,8vw,4.8rem)] leading-[0.98] font-normal text-white sm:max-w-[16ch]">
                {activeSlide.title}
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-white/78 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                {activeSlide.description}
              </p>
              <div className="flex flex-wrap gap-2 text-[0.68rem] font-semibold tracking-[0.18em] text-white/78 uppercase sm:gap-3 sm:text-xs">
                {activeSlide.signals.map((signal, index) => (
                  <span
                    key={signal}
                    className={`rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 sm:px-3 sm:py-2 ${
                      index > 1 ? "hidden sm:inline-flex" : "inline-flex"
                    }`}
                  >
                    {signal}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 focus-visible:outline-none ${
                      index === currentIndex
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/45 hover:bg-white/70"
                    }`}
                    aria-label={`Go to hero slide ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : "false"}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Link
                  href="/book"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#af2b3e,#8f1f2e)] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(175,43,62,0.28)] transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:brightness-110"
                >
                  <span>Book a table</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] px-5 text-sm font-semibold text-white/92 transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:-translate-y-0.5 hover:bg-white/12"
                >
                  View menu
                </Link>
              </div>
              <p className="hidden max-w-md text-sm leading-6 text-white/72 md:block">
                London Road, Stony Stratford, Milton Keynes. Use the menu to
                explore the food, or book first and decide over a drink when you
                arrive.
              </p>
              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => goToSlide(currentIndex - 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/28 text-lg text-white transition hover:bg-black/40 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 focus-visible:outline-none sm:h-11 sm:w-11"
                  aria-label="Previous hero slide"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  onClick={() => goToSlide(currentIndex + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/28 text-lg text-white transition hover:bg-black/40 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 focus-visible:outline-none sm:h-11 sm:w-11"
                  aria-label="Next hero slide"
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {heroSlides.length}: {activeSlide.title}
      </div>
    </section>
  )
}
