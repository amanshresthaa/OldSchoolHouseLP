"use client"

import * as React from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr"

import type { GuestReview } from "@/data/site"

interface GuestReviewSlideshowProps extends React.ComponentPropsWithoutRef<"article"> {
  reviews: GuestReview[]
}

function GoogleStars() {
  return (
    <div className="flex items-center gap-0.5 text-[#fbbc04]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

export function GuestReviewSlideshow({
  reviews,
  className,
  ...props
}: GuestReviewSlideshowProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const total = reviews.length
  const activeReview = reviews[activeIndex]

  React.useEffect(() => {
    if (total < 2) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % total)
    }, 5500)

    return () => window.clearInterval(interval)
  }, [total])

  function showPreviousReview() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + total) % total)
  }

  function showNextReview() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % total)
  }

  return (
    <article
      className={`space-y-5 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm md:p-6 ${className ?? ""}`}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <GoogleStars />
          <div className="flex flex-wrap gap-2">
            {activeReview.focus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-semibold tracking-[0.12em] text-[var(--color-on-tertiary-container)] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {total > 1 ? (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={showPreviousReview}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
              aria-label="Show previous review"
            >
              <CaretLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={showNextReview}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition hover:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none"
              aria-label="Show next review"
            >
              <CaretRight className="size-4" />
            </button>
          </div>
        ) : null}
      </div>

      <p className="font-heading text-[2rem] leading-[1.06] text-white md:text-[2.55rem]">
        &quot;{activeReview.summary}&quot;
      </p>

      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-4">
        <div>
          <h3 className="text-base font-semibold text-white">
            {activeReview.name}
          </h3>
          <p className="pt-1 text-[0.72rem] font-semibold tracking-[0.14em] text-white/68 uppercase">
            {activeReview.guestType}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {total > 1 ? (
            <div className="flex items-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={`${review.name}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none ${
                    index === activeIndex
                      ? "w-7 bg-white"
                      : "w-2.5 bg-white/35 hover:bg-white/55"
                  }`}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>
          ) : null}
          <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-white/68 uppercase">
            Google review
          </p>
        </div>
      </div>
    </article>
  )
}
