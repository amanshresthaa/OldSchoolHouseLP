"use client"

import * as React from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr"

import type { GuestReview } from "@/data/site"
import { cn } from "@/lib/utils"

interface GuestReviewSlideshowProps extends React.ComponentPropsWithoutRef<"article"> {
  reviews: GuestReview[]
}

function ReviewStars() {
  return (
    <div className="flex items-center gap-0.5 text-[var(--color-tertiary)]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part.replace(/[^A-Za-z]/g, "").slice(0, 1))
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
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
      className={cn(
        "surface-panel mx-auto w-full max-w-[29rem] space-y-4",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "inline-flex size-10 shrink-0 items-center justify-center rounded-full text-[0.8125rem] font-bold text-white",
              activeIndex % 2 === 0 ? "bg-primary" : "bg-secondary"
            )}
          >
            {getInitials(activeReview.name)}
          </div>
          <div>
            <h3 className="text-[0.875rem] font-semibold text-on-background">
              {activeReview.name}
            </h3>
            <p className="pt-1 text-[0.6875rem] font-semibold tracking-[0.08em] text-on-surface uppercase">
              {activeReview.guestType}
            </p>
          </div>
        </div>

        {total > 1 ? (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={showPreviousReview}
              className="inline-flex size-9 items-center justify-center rounded-full border border-[rgba(196,189,181,0.15)] bg-[var(--color-surface)] text-primary transition hover:bg-[var(--color-surface-low)] focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:outline-none"
              aria-label="Show previous review"
            >
              <CaretLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={showNextReview}
              className="inline-flex size-9 items-center justify-center rounded-full border border-[rgba(196,189,181,0.15)] bg-[var(--color-surface)] text-primary transition hover:bg-[var(--color-surface-low)] focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:outline-none"
              aria-label="Show next review"
            >
              <CaretRight className="size-4" />
            </button>
          </div>
        ) : null}
      </div>

      <ReviewStars />

      <p className="text-[0.875rem] leading-[1.6] text-on-surface md:text-[0.9375rem]">
        {activeReview.summary}
      </p>

      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-[rgba(196,189,181,0.2)] pt-4">
        <div className="flex flex-wrap gap-1.5">
          {activeReview.focus.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[var(--color-surface-highest)] px-2.5 py-1 text-[0.65rem] font-medium text-on-surface"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {total > 1 ? (
            <div className="flex items-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={`${review.name}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:outline-none ${
                    index === activeIndex
                      ? "w-7 bg-secondary"
                      : "w-2.5 bg-[var(--color-outline-variant)] hover:bg-secondary/55"
                  }`}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === activeIndex}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
