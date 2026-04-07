"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface ScrollRevealProps extends React.ComponentProps<"div"> {
  delayMs?: number
}

export function ScrollReveal({
  className,
  style,
  delayMs = 0,
  children,
  ...props
}: ScrollRevealProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const [isReady, setIsReady] = React.useState(false)
  const [isRevealed, setIsRevealed] = React.useState(false)

  React.useLayoutEffect(() => {
    const node = containerRef.current

    if (!node) {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (mediaQuery.matches) {
      setIsReady(true)
      setIsRevealed(true)
      return
    }

    setIsReady(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setIsRevealed(true)
        observer.disconnect()
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-ready={isReady ? "true" : "false"}
      data-revealed={isRevealed ? "true" : "false"}
      className={cn("scroll-reveal", className)}
      style={
        {
          ...style,
          "--scroll-reveal-delay": `${delayMs}ms`,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  )
}
