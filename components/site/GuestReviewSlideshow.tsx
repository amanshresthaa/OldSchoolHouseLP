"use client"

import * as React from "react"
import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react/dist/ssr"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { GuestReview } from "@/data/site"
import { cn } from "@/lib/utils"

interface GuestReviewSlideshowProps extends React.ComponentPropsWithoutRef<"article"> {
  reviews: GuestReview[]
}

function ReviewStars() {
  return (
    <div className="flex items-center gap-0.5 text-[var(--color-tertiary)]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          weight="fill"
          className="size-3.5"
          aria-hidden="true"
        />
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

  function showPrevious() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + total) % total)
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % total)
  }

  return (
    <article
      className={cn(
        "surface-frame flex flex-col gap-5 px-5 py-5 md:px-6 md:py-6",
        className
      )}
      aria-label="Guest review slideshow"
      aria-roledescription={total > 1 ? "carousel" : undefined}
      {...props}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar
            size="lg"
            className={cn(
              "border border-white/72 text-white shadow-[0_6px_16px_rgba(31,34,29,0.08)] after:border-white/0",
              activeIndex % 2 === 0 ? "bg-primary" : "bg-secondary"
            )}
          >
            <AvatarFallback className="bg-transparent text-[0.78rem] font-bold text-white">
              {getInitials(activeReview.name)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <h3 className="truncate text-[0.88rem] font-semibold text-on-background">
              {activeReview.name}
            </h3>
            <p className="text-[0.66rem] font-semibold tracking-[0.12em] text-on-surface/62 uppercase">
              {activeReview.guestType}
            </p>
          </div>
        </div>
        <ReviewStars />
      </div>

      <blockquote className="max-w-[40rem]">
        <p className="font-heading text-[clamp(1.22rem,1rem+0.8vw,1.72rem)] leading-[1.22] tracking-[-0.02em] text-on-background">
          &ldquo;{activeReview.summary}&rdquo;
        </p>
      </blockquote>

      <div className="flex flex-wrap gap-1.5">
        {activeReview.focus.map((item) => (
          <Badge
            key={item}
            variant="muted"
            className="h-auto rounded-full border border-[rgba(196,189,181,0.32)] px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.08em] text-on-surface/72 uppercase"
          >
            {item}
          </Badge>
        ))}
      </div>

      {total > 1 ? (
        <div className="flex items-center justify-between border-t border-[rgba(196,189,181,0.28)] pt-4">
          <div className="flex items-center gap-1.5" role="tablist">
            {reviews.map((review, index) => (
              <Button
                key={`${review.name}-${index}`}
                type="button"
                variant="ghost"
                size="icon-xs"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "rounded-full px-0 focus-visible:ring-secondary/40",
                  index === activeIndex
                    ? "h-2 w-6 bg-secondary text-white hover:bg-secondary/90"
                    : "size-2 bg-[rgba(196,189,181,0.8)] text-transparent hover:bg-secondary/55"
                )}
                aria-label={`Show review ${index + 1}`}
                aria-current={index === activeIndex}
                aria-selected={index === activeIndex}
                role="tab"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-current"
                />
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[0.68rem] font-semibold tracking-[0.12em] text-on-surface/48 uppercase">
              {String(activeIndex + 1).padStart(2, "0")}/
              {String(total).padStart(2, "0")}
            </span>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={showPrevious}
              className="size-9 rounded-full border-[rgba(196,189,181,0.36)] bg-[var(--color-surface-lowest)] text-primary shadow-none hover:bg-[var(--color-surface-low)]"
              aria-label="Show previous review"
            >
              <CaretLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={showNext}
              className="size-9 rounded-full border-[rgba(196,189,181,0.36)] bg-[var(--color-surface-lowest)] text-primary shadow-none hover:bg-[var(--color-surface-low)]"
              aria-label="Show next review"
            >
              <CaretRight className="size-4" />
            </Button>
          </div>
        </div>
      ) : null}
    </article>
  )
}
