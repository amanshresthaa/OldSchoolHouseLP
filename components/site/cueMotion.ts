"use client"

export type CueAxis = "x" | "y"
export type CueVariant = "peek" | "spring" | "magnetic" | "glint" | "nudge"

export function cueUsesOffset(variant: CueVariant) {
  return variant === "peek" || variant === "spring" || variant === "magnetic"
}

export function getCueIndicatorAnimation(
  axis: CueAxis,
  variant: CueVariant,
  active = true
) {
  if (!active) {
    return undefined
  }

  if (variant === "glint") {
    return "osh-cue-pulse 2.2s ease-in-out infinite"
  }

  return axis === "y"
    ? "osh-cue-indicator-y 1.65s ease-in-out infinite"
    : "osh-cue-indicator-x 1.65s ease-in-out infinite"
}

export function getCueTrackAnimation(axis: CueAxis, variant: CueVariant) {
  switch (variant) {
    case "peek":
      return axis === "y"
        ? "osh-cue-peek-y 2.6s ease-in-out 1"
        : "osh-cue-peek-x 2.6s ease-in-out 1"
    case "spring":
      return axis === "y"
        ? "osh-cue-spring-y 2.8s cubic-bezier(0.22,1,0.36,1) 1"
        : "osh-cue-spring-x 2.8s cubic-bezier(0.22,1,0.36,1) 1"
    case "magnetic":
      return axis === "y"
        ? "osh-cue-magnetic-y 2.75s cubic-bezier(0.2,0.9,0.3,1) 1"
        : "osh-cue-magnetic-x 2.75s cubic-bezier(0.2,0.9,0.3,1) 1"
    case "nudge":
      return "osh-cue-nudge 2.35s cubic-bezier(0.2,0.9,0.3,1) 1"
    case "glint":
    default:
      return undefined
  }
}

export function getCueOverlayAnimation(variant: CueVariant) {
  if (variant === "glint") {
    return "osh-cue-glint 2.7s ease-in-out 1"
  }

  return undefined
}
