import { cn } from "@/lib/utils"

export const sectionBandClasses = {
  plain: "section-band section-band-plain",
  paper: "section-band section-band-paper",
  warm: "section-band section-band-warm",
  dark: "section-band section-band-dark",
} as const

export type SectionBand = keyof typeof sectionBandClasses

export function getSectionBandClass(band: SectionBand, className?: string) {
  return cn(sectionBandClasses[band], className)
}

export function getAlternatingSectionBand(
  index: number,
  options?: {
    even?: SectionBand
    odd?: SectionBand
  }
) {
  const even = options?.even ?? "plain"
  const odd = options?.odd ?? "paper"

  return index % 2 === 0 ? even : odd
}
