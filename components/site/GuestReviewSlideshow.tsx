"use client"

import * as React from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
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
        "surface-panel mx-auto flex h-full w-full max-w-[29rem] flex-col gap-4 md:min-h-[23rem] xl:min-h-[24rem]",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar
            size="lg"
            className={cn(
              "text-white after:border-white/0",
              activeIndex % 2 === 0 ? "bg-primary" : "bg-secondary"
            )}
          >
            <AvatarFallback className="bg-transparent text-[0.8125rem] font-bold text-white">
              {getInitials(activeReview.name)}
            </AvatarFallback>
          </Avatar>
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
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={showPreviousReview}
              className="bg-[var(--color-surface)] text-primary hover:bg-[var(--color-surface-low)]"
              aria-label="Show previous review"
            >
              <CaretLeft data-icon="inline-start" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={showNextReview}
              className="bg-[var(--color-surface)] text-primary hover:bg-[var(--color-surface-low)]"
              aria-label="Show next review"
            >
              <CaretRight data-icon="inline-start" />
            </Button>
          </div>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <ReviewStars />
        <Separator className="max-w-14 bg-[rgba(196,189,181,0.3)]" />
      </div>

      <p className="text-[0.875rem] leading-[1.6] text-on-surface md:text-[0.9375rem]">
        {activeReview.summary}
      </p>

      <div className="surface-pane-muted -mx-5 mt-auto -mb-5 flex flex-wrap items-end justify-between gap-4 rounded-b-2xl pt-4 md:-mx-6 md:-mb-6">
        <div className="flex flex-wrap gap-1.5">
          {activeReview.focus.map((item) => (
            <Badge
              key={item}
              variant="muted"
              className="h-auto px-2.5 py-1 text-[0.65rem] font-medium"
            >
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          {total > 1
            ? reviews.map((review, index) => (
                <Button
                  key={`${review.name}-${index}`}
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "rounded-full focus-visible:ring-secondary/40",
                    index === activeIndex
                      ? "w-7 bg-secondary text-white hover:bg-secondary/90"
                      : "bg-[var(--color-outline-variant)] text-transparent hover:bg-secondary/55"
                  )}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={index === activeIndex}
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-current"
                  />
                </Button>
              ))
            : null}
        </div>
      </div>
    </article>
  )
}
