"use client"

import { useEffect, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { OpenStatusBadge } from "@/components/site/OpenStatusBadge"
import { proofPoints, siteName, type ProofPoint } from "@/data/site"
import momoImage from "@/images/food/chicken-momo-and-veg-momo.png"
import beerOnTapImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-beer-on-tap.jpeg"
import indoorSeatingImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-indoor-seating-area-1.jpeg"
import sportsTvImage from "@/images/indoor/old-school-house-pub-stony-stratford-mk-sports-tv-big-screen.jpeg"
import customerParkingImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-customer-parking.jpeg"
import pubExteriorImage from "@/images/outdoor/old-school-house-pub-stony-stratford-mk-pub-building-exterior.jpeg"

interface HeroSlide extends ProofPoint {
  image: string | StaticImageData
  alt: string
  eyebrow: string
  signals: string[]
}

const heroSlides: HeroSlide[] = [
  {
    ...proofPoints[0],
    image: pubExteriorImage,
    alt: "Exterior of The Old School House pub on London Road in Stony Stratford.",
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
    image: indoorSeatingImage,
    alt: "Indoor seating area at The Old School House showing the room layout and pub atmosphere.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: ["65 covers inside", "60 outside", "Lunches to group tables"],
  },
  {
    ...proofPoints[3],
    image: customerParkingImage,
    alt: "Customer parking area at The Old School House in Stony Stratford.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: [
      "Front garden seating",
      "Private courtyard",
      "Outdoor food and drinks",
    ],
  },
  {
    ...proofPoints[4],
    image: sportsTvImage,
    alt: "Large-screen sports area inside The Old School House pub.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: ["Live sport", "Quiz nights", "Informal celebrations"],
  },
  {
    ...proofPoints[5],
    image: beerOnTapImage,
    alt: "Beer being poured at the bar inside The Old School House pub.",
    eyebrow: "Traditional pub in Stony Stratford",
    signals: ["Central Stony Stratford", "Easy for walk-ins", "Simple to find"],
  },
]

const AUTOPLAY_INTERVAL_MS = 6200

function getHeroTitleClass(title: string) {
  if (title.length > 42) {
    return "max-w-[18ch] text-[clamp(1.85rem,5vw,4rem)] leading-[1.02] sm:max-w-[19ch] lg:text-[clamp(2.4rem,4.6vw,4.15rem)]"
  }

  if (title.length > 32) {
    return "max-w-[17ch] text-[clamp(2rem,6vw,4.35rem)] leading-[1] sm:max-w-[18ch] lg:text-[clamp(2.7rem,4.9vw,4.45rem)]"
  }

  return "max-w-[16ch] text-[clamp(2.2rem,6.8vw,4.8rem)] leading-[0.98]"
}

function getHeroDescriptionClass(description: string) {
  if (description.length > 135) {
    return "max-w-2xl text-sm leading-6 text-white/78 sm:text-[0.95rem] sm:leading-7 md:text-base md:leading-7"
  }

  return "max-w-2xl text-sm leading-6 text-white/78 sm:text-base sm:leading-7 md:text-lg md:leading-8"
}

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
      className="relative h-[36rem] overflow-hidden bg-primary text-white sm:h-[43rem] md:h-[46rem] lg:h-[50rem] xl:h-[52rem]"
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
                  ? "scale-100 brightness-[0.86] saturate-[1.02]"
                  : "scale-[1.04] brightness-[0.78] saturate-[0.96]"
              }`}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,13,8,0.12)_0%,rgba(4,13,8,0.06)_24%,rgba(4,13,8,0.18)_62%,rgba(4,13,8,0.46)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,13,8,0.32)_0%,rgba(4,13,8,0.12)_34%,rgba(4,13,8,0.04)_62%,rgba(4,13,8,0.12)_100%)]" />
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--color-on-tertiary-container)]/30 to-transparent" />

      <div className="relative h-full">
        <div className="mx-auto flex h-full max-w-[84rem] flex-col px-5 sm:px-6 md:px-8">
          <div className="hidden flex-wrap items-center justify-between gap-4 border-b border-white/8 py-5 sm:flex">
            <div className="flex items-center gap-3">
              <span className="inline-block size-1.5 rounded-full bg-[var(--color-on-tertiary-container)]" />
              <p className="text-[0.68rem] font-semibold tracking-[0.28em] text-[var(--color-on-tertiary-container)] uppercase">
                {siteName}
              </p>
            </div>
            <OpenStatusBadge />
          </div>

          <div className="grid h-[23.5rem] flex-1 content-end gap-4 py-5 sm:h-[28rem] sm:gap-6 sm:py-8 md:h-[30rem] md:py-10 lg:h-[21rem] lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14 lg:py-12 xl:h-[22rem]">
            <div className="flex min-h-[19.5rem] max-w-3xl flex-col rounded-[1.9rem] border border-white/12 bg-[rgba(6,18,11,0.34)] px-5 py-5 shadow-[0px_18px_48px_rgba(6,18,11,0.18)] backdrop-blur-[5px] sm:min-h-[21rem] sm:px-6 sm:py-6 md:min-h-[22.5rem] md:px-7 md:py-7">
              <div className="eyebrow-row">
                <span
                  aria-hidden="true"
                  className="h-px w-6 bg-[var(--color-tertiary)]"
                />
                <p className="text-[0.6875rem] font-semibold tracking-[0.12em] text-[var(--color-tertiary)] uppercase">
                  {activeSlide.eyebrow}
                </p>
              </div>
              <h1
                className={`pt-4 font-normal text-white sm:pt-5 ${getHeroTitleClass(
                  activeSlide.title
                )}`}
              >
                {activeSlide.title}
              </h1>
              <p
                className={`pt-3 ${getHeroDescriptionClass(activeSlide.description)}`}
              >
                {activeSlide.description}
              </p>
              <p className="max-w-md pt-3 text-[0.82rem] leading-5 text-white/68 sm:hidden">
                London Road, Stony Stratford. Book quickly, browse the menu, or
                call if today&apos;s plan needs a quick answer.
              </p>
              <div className="mt-auto flex min-h-[3.75rem] flex-wrap content-start gap-2 pt-4 text-[0.68rem] font-semibold tracking-[0.18em] text-white/78 uppercase sm:min-h-[4.5rem] sm:gap-3 sm:pt-5 sm:text-xs">
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
              <div className="flex items-center gap-2 pt-4 sm:pt-5">
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

            <div className="space-y-3 rounded-[1.7rem] border border-white/10 bg-[rgba(6,18,11,0.24)] p-4 shadow-[0px_14px_36px_rgba(6,18,11,0.14)] backdrop-blur-[4px] sm:space-y-4 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Link
                  href="/book"
                  className="cta-primary inline-flex h-12 items-center justify-center gap-2 px-5 text-sm font-semibold"
                >
                  <span>Book a table</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/menu"
                  className="cta-secondary-dark inline-flex h-12 items-center justify-center px-5 text-sm font-semibold"
                >
                  View menu
                </Link>
              </div>
              <p className="hidden max-w-md text-sm leading-6 text-white/72 md:block">
                London Road, Stony Stratford, Milton Keynes. Use the menu to
                explore the food, or book first and decide over a drink when you
                arrive.
              </p>
              <div className="hidden justify-end gap-2 pt-1 sm:flex">
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
