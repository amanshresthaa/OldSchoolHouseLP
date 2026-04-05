"use client"

import * as React from "react"

import { SectionHeading } from "@/components/site/SectionHeading"
import { cn } from "@/lib/utils"

interface HomeProofBarItem {
  title: string
  description: string
}

interface HomeProofBarSectionCopy {
  eyebrow: string
  title: string
  description: string
  highlightLabel: string
  highlightValue: string
  highlightNote: string
}

interface HomeProofBarSectionProps extends React.ComponentProps<"section"> {
  items: readonly HomeProofBarItem[]
  copy: HomeProofBarSectionCopy
}

export function HomeProofBarSection({
  items,
  copy,
  className,
  ...props
}: HomeProofBarSectionProps) {
  const cardStackRef = React.useRef<HTMLDivElement | null>(null)
  const cardTrackRef = React.useRef<HTMLDivElement | null>(null)
  const [isFirstCardActive, setIsFirstCardActive] = React.useState(true)
  const [stackPeekOffset, setStackPeekOffset] = React.useState(0)

  React.useEffect(() => {
    const cardStack = cardStackRef.current

    if (!cardStack || items.length < 2) {
      return
    }

    const stack = cardStack

    const mobileQuery = window.matchMedia("(max-width: 767px)")
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )

    if (!mobileQuery.matches || reducedMotionQuery.matches) {
      return
    }

    function updateActiveCard() {
      setIsFirstCardActive(stack.scrollTop <= 4)
    }

    updateActiveCard()
    stack.addEventListener("scroll", updateActiveCard, { passive: true })

    return () => {
      stack.removeEventListener("scroll", updateActiveCard)
    }
  }, [items.length])

  React.useEffect(() => {
    const cardTrack = cardTrackRef.current

    if (!cardTrack) {
      return
    }

    const track = cardTrack

    function updatePeekOffset() {
      const firstCard = track.querySelector("article")

      if (!(firstCard instanceof HTMLElement)) {
        setStackPeekOffset(0)
        return
      }

      const trackStyles = window.getComputedStyle(track)
      const rowGap = Number.parseFloat(trackStyles.rowGap || "0") || 0
      const nextCardPeek = (firstCard.offsetHeight + rowGap) * 0.5

      setStackPeekOffset(nextCardPeek)
    }

    updatePeekOffset()

    const resizeObserver = new ResizeObserver(() => {
      updatePeekOffset()
    })

    resizeObserver.observe(track)

    const firstCard = track.querySelector("article")

    if (firstCard instanceof HTMLElement) {
      resizeObserver.observe(firstCard)
    }

    window.addEventListener("resize", updatePeekOffset)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updatePeekOffset)
    }
  }, [items.length])

  return (
    <section
      className={cn("bg-background py-10 md:py-14 lg:py-16", className)}
      aria-labelledby="home-proof-bar-title"
      {...props}
    >
      <style>{`
        @keyframes osh-scroll-cue {
          0%, 100% { transform: translateY(0); opacity: 0.55; }
          50% { transform: translateY(9px); opacity: 1; }
        }

        @keyframes osh-stack-peek {
          0%, 70%, 100% { transform: translateY(0); }
          36% { transform: translateY(calc(var(--osh-stack-peek-offset, 0px) * -1)); }
        }
      `}</style>
      <div className="section-shell">
        <div className="surface-frame bg-[linear-gradient(180deg,rgba(120,97,77,0.06)_0%,rgba(120,97,77,0)_100%)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="surface-pane border-b border-[rgba(196,189,181,0.42)] bg-[color-mix(in_srgb,var(--color-surface-low)_72%,white_28%)] md:px-6 md:py-6 lg:border-r lg:border-b-0 lg:px-8 lg:py-8">
              <SectionHeading
                eyebrow={copy.eyebrow}
                title={copy.title}
                titleId="home-proof-bar-title"
                description={copy.description}
                className="max-w-none space-y-4"
              />
              <div className="mt-6 rounded-[1.4rem] bg-primary px-5 py-5 text-white shadow-[0_22px_45px_rgba(12,33,21,0.18)] md:px-6">
                <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)] uppercase">
                  {copy.highlightLabel}
                </p>
                <p className="pt-3 font-heading text-[2.25rem] leading-none tracking-[-0.04em] md:text-[2.75rem]">
                  {copy.highlightValue}
                </p>
                <p className="max-w-[22rem] pt-3 text-sm leading-6 text-white/72">
                  {copy.highlightNote}
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-[rgba(196,189,181,0.4)]">
              <div className="flex items-center justify-between px-5 py-4 text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase md:hidden">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/82">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 rounded-full bg-secondary motion-reduce:animate-none"
                      style={{
                        animation: "osh-scroll-cue 1.65s ease-in-out infinite",
                      }}
                    />
                  </span>
                  <p>Scroll through the highlights</p>
                </div>
                <p>{String(items.length).padStart(2, "0")} stories</p>
              </div>
              <div className="relative px-5 pb-5 md:px-0 md:pb-0">
                <div className="pointer-events-none absolute inset-x-5 top-0 z-10 h-8 rounded-t-[1.5rem] bg-[linear-gradient(180deg,rgba(241,236,230,0.9)_0%,rgba(241,236,230,0)_100%)] md:hidden" />
                <div className="pointer-events-none absolute inset-x-5 bottom-5 z-10 h-12 rounded-b-[1.5rem] bg-[linear-gradient(180deg,rgba(241,236,230,0)_0%,rgba(241,236,230,0.92)_100%)] md:hidden" />
                <div
                  ref={cardStackRef}
                  className="max-h-[18.5rem] snap-y snap-mandatory overflow-y-auto overscroll-y-contain rounded-[1.5rem] [-ms-overflow-style:none] [scrollbar-width:none] md:max-h-none md:snap-none md:overflow-visible md:rounded-none [&::-webkit-scrollbar]:hidden"
                >
                  <div
                    ref={cardTrackRef}
                    className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-px xl:grid-cols-3"
                    style={
                      isFirstCardActive && stackPeekOffset > 0
                        ? {
                            ["--osh-stack-peek-offset" as string]: `${stackPeekOffset}px`,
                            animation: "osh-stack-peek 3s ease-in-out infinite",
                          }
                        : undefined
                    }
                  >
                    {items.map((item, index) => (
                      <article
                        key={item.title}
                        className={cn(
                          "surface-pane relative isolate flex min-h-[18.5rem] snap-start flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[rgba(196,189,181,0.5)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(246,241,235,0.96)_100%)] shadow-[0_18px_34px_rgba(31,34,29,0.08)] transition-colors duration-200 md:min-h-[14rem] md:rounded-none md:border-0 md:shadow-none",
                          index % 3 === 1 &&
                            "bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-low)_86%,white_14%)_0%,color-mix(in_srgb,var(--color-surface-low)_74%,white_26%)_100%)]"
                        )}
                      >
                        <div className="absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top_right,rgba(245,208,107,0.16),transparent_48%)]" />
                        <div className="flex items-center justify-between gap-3">
                          <span className="h-px flex-1 bg-[rgba(175,43,62,0.22)]" />
                          <p className="rounded-full bg-[rgba(175,43,62,0.08)] px-3 py-1 text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                        </div>
                        <div className="relative pt-6">
                          <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-primary/52 uppercase">
                            {index === items.length - 1
                              ? "Final highlight"
                              : "Reason to visit"}
                          </p>
                          <h3 className="pt-3 font-heading text-[1.55rem] leading-[1.08] tracking-[-0.03em] text-primary md:text-[1.35rem] md:leading-[1.18] md:tracking-[-0.02em]">
                            {item.title}
                          </h3>
                          <p className="pt-3 text-sm leading-6 text-on-surface md:text-[0.9375rem]">
                            {item.description}
                          </p>
                        </div>
                        <div className="relative mt-6 flex items-center justify-between gap-4 border-t border-[rgba(196,189,181,0.42)] pt-4">
                          <p className="text-[0.72rem] font-semibold tracking-[0.12em] text-primary/55 uppercase">
                            {String(index + 1).padStart(2, "0")} of{" "}
                            {String(items.length).padStart(2, "0")}
                          </p>
                          <p className="text-[0.78rem] text-on-surface/68">
                            {index === items.length - 1
                              ? "You’ve seen the full set"
                              : "Keep scrolling"}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
