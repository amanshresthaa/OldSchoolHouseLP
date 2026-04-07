"use client"

import * as React from "react"

import type { CueVariant } from "@/components/site/cueMotion"
import { cueUsesOffset } from "@/components/site/cueMotion"

interface UseMobileRailCueOptions {
  itemCount: number
  itemSelector: string
  axis?: "x" | "y"
  order?: number
  peekRatio?: number
  variant?: CueVariant
  visibleRatio?: number
}

type SectionTwoOutcome = "pending" | "engaged" | "missed"

const cueRuntime = {
  scanMode: false,
  sectionTwoOutcome: "pending" as SectionTwoOutcome,
  listeners: new Set<() => void>(),
}

function emitCueRuntimeChange() {
  cueRuntime.listeners.forEach((listener) => {
    listener()
  })
}

function getVisibleRatio(node: HTMLElement) {
  const rect = node.getBoundingClientRect()
  const visibleHeight =
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)

  return visibleHeight <= 0 ? 0 : visibleHeight / rect.height
}

function isScanModeOrder(order: number | undefined) {
  return order !== undefined && order >= 3 && order <= 5
}

function shouldPauseCueCycle({
  isCenterStageCue,
  isFirstCardActive,
  isPhoneViewport,
  isRailVisible,
  peekOffset,
  reducedMotion,
  requiresOffset,
}: {
  isCenterStageCue: boolean
  isFirstCardActive: boolean
  isPhoneViewport: boolean
  isRailVisible: boolean
  peekOffset: number
  reducedMotion: boolean
  requiresOffset: boolean
}) {
  if (
    !isPhoneViewport ||
    !isRailVisible ||
    !isCenterStageCue ||
    !isFirstCardActive
  ) {
    return true
  }

  if (requiresOffset && peekOffset <= 0) {
    return true
  }

  return reducedMotion
}

export function useMobileRailCue({
  itemCount,
  itemSelector,
  axis = "x",
  order,
  peekRatio = 0.42,
  variant = "peek",
  visibleRatio: visibleRatioThreshold = 0.6,
}: UseMobileRailCueOptions) {
  const railRef = React.useRef<HTMLDivElement | null>(null)
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const [isPhoneViewport, setIsPhoneViewport] = React.useState(false)
  const [isRailVisible, setIsRailVisible] = React.useState(false)
  const [isCenterStageCue, setIsCenterStageCue] = React.useState(false)
  const [isFirstCardActive, setIsFirstCardActive] = React.useState(true)
  const [isCueAnimating, setIsCueAnimating] = React.useState(false)
  const [peekOffset, setPeekOffset] = React.useState(0)
  const [, forceRuntimeUpdate] = React.useReducer((count) => count + 1, 0)
  const cycleCountRef = React.useRef(0)

  React.useEffect(() => {
    function handleRuntimeChange() {
      forceRuntimeUpdate()
    }

    cueRuntime.listeners.add(handleRuntimeChange)

    return () => {
      cueRuntime.listeners.delete(handleRuntimeChange)
    }
  }, [])

  React.useEffect(() => {
    const phoneQuery = window.matchMedia("(max-width: 639px)")

    function updateViewportState() {
      setIsPhoneViewport(phoneQuery.matches)
    }

    updateViewportState()
    phoneQuery.addEventListener("change", updateViewportState)

    return () => {
      phoneQuery.removeEventListener("change", updateViewportState)
    }
  }, [])

  React.useEffect(() => {
    const rail = railRef.current

    if (!rail || !isPhoneViewport) {
      setIsRailVisible(false)
      setIsCenterStageCue(false)
      return
    }

    rail.dataset.cueRoot = "true"

    if (typeof order === "number") {
      rail.dataset.cueOrder = String(order)
    }

    function updateCueWindowState() {
      const activeRail = railRef.current

      if (!activeRail) {
        setIsRailVisible(false)
        setIsCenterStageCue(false)
        return
      }

      const visibleRatio = getVisibleRatio(activeRail)

      setIsRailVisible(visibleRatio >= visibleRatioThreshold)

      const viewportCenter = window.innerHeight / 2
      const cueRails = Array.from(
        document.querySelectorAll<HTMLElement>('[data-cue-root="true"]')
      ).filter((node) => getVisibleRatio(node) >= 0.28)

      let leadRail: HTMLElement | null = null
      let leadDistance = Number.POSITIVE_INFINITY

      cueRails.forEach((node) => {
        const rect = node.getBoundingClientRect()
        const centerDistance = Math.abs(
          rect.top + rect.height / 2 - viewportCenter
        )

        if (centerDistance < leadDistance) {
          leadDistance = centerDistance
          leadRail = node
        }
      })

      setIsCenterStageCue(leadRail === activeRail)

      if (order === 2 && cueRuntime.sectionTwoOutcome === "pending") {
        const rect = activeRail.getBoundingClientRect()

        if (!isFirstCardActive) {
          cueRuntime.sectionTwoOutcome = "engaged"
          emitCueRuntimeChange()
        } else if (rect.bottom < window.innerHeight * 0.28) {
          cueRuntime.sectionTwoOutcome = "missed"
          cueRuntime.scanMode = true
          emitCueRuntimeChange()
        }
      }
    }

    updateCueWindowState()
    window.addEventListener("scroll", updateCueWindowState, { passive: true })
    window.addEventListener("resize", updateCueWindowState)

    return () => {
      delete rail.dataset.cueRoot
      delete rail.dataset.cueOrder
      window.removeEventListener("scroll", updateCueWindowState)
      window.removeEventListener("resize", updateCueWindowState)
    }
  }, [isFirstCardActive, isPhoneViewport, order, visibleRatioThreshold])

  React.useEffect(() => {
    const rail = railRef.current

    if (!rail || itemCount < 2) {
      return
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )

    if (!isPhoneViewport || reducedMotionQuery.matches) {
      setIsFirstCardActive(true)
      return
    }

    function updateActiveCard() {
      const activeRail = railRef.current

      if (!activeRail) {
        return
      }

      const leadingScroll =
        axis === "y" ? activeRail.scrollTop : activeRail.scrollLeft

      setIsFirstCardActive(leadingScroll <= 4)
    }

    updateActiveCard()
    rail.addEventListener("scroll", updateActiveCard, { passive: true })

    return () => {
      rail.removeEventListener("scroll", updateActiveCard)
    }
  }, [axis, isPhoneViewport, itemCount])

  React.useEffect(() => {
    const track = trackRef.current

    if (!track || !isPhoneViewport) {
      setPeekOffset(0)
      return
    }

    function updatePeekOffset() {
      const activeTrack = trackRef.current

      if (!activeTrack) {
        setPeekOffset(0)
        return
      }

      const firstCard = activeTrack.querySelector(itemSelector)

      if (!(firstCard instanceof HTMLElement)) {
        setPeekOffset(0)
        return
      }

      const trackStyles = window.getComputedStyle(activeTrack)
      const gapValue =
        axis === "y"
          ? Number.parseFloat(trackStyles.rowGap || "0") || 0
          : Number.parseFloat(trackStyles.columnGap || "0") || 0
      const cardSize =
        axis === "y" ? firstCard.offsetHeight : firstCard.offsetWidth
      const nextCardPeek = (cardSize + gapValue) * peekRatio

      setPeekOffset(nextCardPeek)
    }

    updatePeekOffset()

    const resizeObserver = new ResizeObserver(() => {
      updatePeekOffset()
    })

    resizeObserver.observe(track)

    const firstCard = track.querySelector(itemSelector)

    if (firstCard instanceof HTMLElement) {
      resizeObserver.observe(firstCard)
    }

    window.addEventListener("resize", updatePeekOffset)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updatePeekOffset)
    }
  }, [axis, isPhoneViewport, itemCount, itemSelector, peekRatio])

  React.useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    const scanModeActive = cueRuntime.scanMode && isScanModeOrder(order)
    const cycleLimit = scanModeActive ? 1 : 3
    const cooldownDelay = scanModeActive ? 18000 : 11000
    const requiresOffset = cueUsesOffset(variant)

    if (
      shouldPauseCueCycle({
        isCenterStageCue,
        isFirstCardActive,
        isPhoneViewport,
        isRailVisible,
        peekOffset,
        reducedMotion: reducedMotionQuery.matches,
        requiresOffset,
      })
    ) {
      setIsCueAnimating(false)
      cycleCountRef.current = 0
      return
    }

    if (cycleCountRef.current >= cycleLimit) {
      setIsCueAnimating(false)
      return
    }

    let animationTimeout = 0
    let cooldownTimeout = 0
    let animationFrame = 0

    function startCueCycle() {
      if (cycleCountRef.current >= cycleLimit) {
        setIsCueAnimating(false)
        return
      }

      cycleCountRef.current += 1
      setIsCueAnimating(false)

      animationFrame = window.requestAnimationFrame(() => {
        setIsCueAnimating(true)
      })

      animationTimeout = window.setTimeout(() => {
        setIsCueAnimating(false)

        if (cycleCountRef.current < cycleLimit) {
          cooldownTimeout = window.setTimeout(startCueCycle, cooldownDelay)
        }
      }, 3000)
    }

    startCueCycle()

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.clearTimeout(animationTimeout)
      window.clearTimeout(cooldownTimeout)
      setIsCueAnimating(false)
    }
  }, [
    isCenterStageCue,
    isFirstCardActive,
    isPhoneViewport,
    isRailVisible,
    order,
    peekOffset,
    variant,
  ])

  return {
    isCueAnimating,
    isPhoneViewport,
    peekOffset,
    railRef,
    trackRef,
  }
}
