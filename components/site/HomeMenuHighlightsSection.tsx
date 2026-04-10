"use client"

import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import {
  getCueIndicatorAnimation,
  getCueTrackAnimation,
} from "@/components/site/cueMotion"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { useMobileRailCue } from "@/components/site/useMobileRailCue"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { MenuPrice } from "@/lib/menu"
import { formatPrice } from "@/lib/menu"
import { cn } from "@/lib/utils"

interface MenuShowcaseItem {
  title: string
  description: string
  alt: string
  href: string
  ctaLabel: string
  image: StaticImageData
  item: {
    price: MenuPrice
  }
}

interface MenuGuidanceItem {
  title: string
  description: string
}

interface HomeMenuHighlightsSectionCopy {
  eyebrow: string
  title: string
  description: string
  guidanceLabel: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

interface HomeMenuHighlightsSectionProps extends React.ComponentProps<"section"> {
  copy: HomeMenuHighlightsSectionCopy
  items: readonly MenuShowcaseItem[]
  guidanceItems: readonly MenuGuidanceItem[]
}

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  )
}

function MenuShowcaseCard({
  item,
  className,
}: {
  item: MenuShowcaseItem
  className?: string
}) {
  const cardContent = (
    <Card className="surface-frame flex h-full flex-col overflow-hidden rounded-2xl py-0 shadow-none">
      <div className="relative h-[11rem] shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          width={item.image.width}
          height={item.image.height}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(min-width: 1280px) 28vw, (min-width: 640px) 45vw, 88vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 px-5 py-4">
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="pill" className="h-auto px-3 py-1">
              Signature dish
            </Badge>
            <Badge variant="muted" className="h-auto px-3 py-1">
              {formatPrice(item.item.price)}
            </Badge>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-on-surface">
              {item.description}
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition group-hover:text-secondary/80">
          {item.ctaLabel}
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Card>
  )

  if (isExternalHref(item.href)) {
    return (
      <a
        href={item.href}
        data-menu-card="true"
        className={cn("group block h-full", className)}
      >
        {cardContent}
      </a>
    )
  }

  return (
    <Link
      href={item.href}
      data-menu-card="true"
      className={cn("group block h-full", className)}
    >
      {cardContent}
    </Link>
  )
}

export function HomeMenuHighlightsSection({
  copy,
  items,
  guidanceItems,
  className,
  ...props
}: HomeMenuHighlightsSectionProps) {
  const {
    railRef: showcaseRailRef,
    trackRef: showcaseTrackRef,
    isCueAnimating: isShowcaseCueAnimating,
    peekOffset: showcasePeekOffset,
  } = useMobileRailCue({
    itemCount: items.length,
    itemSelector: '[data-menu-card="true"]',
    order: 3,
    peekRatio: 0.28,
    variant: "peek",
  })

  return (
    <section className={cn("page-section bg-background", className)} {...props}>
      <div className="section-shell flex flex-col gap-5">
        <ScrollReveal
          delayMs={0}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href={copy.primaryCtaHref}>
                <span>{copy.primaryCtaLabel}</span>
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={copy.secondaryCtaHref}>{copy.secondaryCtaLabel}</Link>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={120} className="hidden sm:block">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <MenuShowcaseCard key={item.title} item={item} />
            ))}
          </div>
        </ScrollReveal>

        <div className="sm:hidden">
          <ScrollReveal delayMs={120}>
            <div className="mb-3 flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase">
              <span className="relative flex h-5 w-9 items-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/84 px-1">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 rounded-full bg-secondary motion-reduce:animate-none"
                  style={{
                    animation: getCueIndicatorAnimation(
                      "x",
                      "peek",
                      isShowcaseCueAnimating
                    ),
                  }}
                />
              </span>
              <p>{String(items.length).padStart(2, "0")} dishes</p>
            </div>
            <div
              ref={showcaseRailRef}
              className="overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div
                ref={showcaseTrackRef}
                className="grid auto-cols-[84%] grid-flow-col gap-3 pb-1"
                style={
                  isShowcaseCueAnimating
                    ? ({
                        "--osh-cue-offset": `${showcasePeekOffset}px`,
                        animation: getCueTrackAnimation("x", "peek"),
                      } as React.CSSProperties)
                    : undefined
                }
              >
                {items.map((item) => (
                  <MenuShowcaseCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delayMs={240}>
          <div className="surface-frame px-5 py-5 md:px-6 md:py-6">
            <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
              {copy.guidanceLabel}
            </p>
            <div className="grid gap-0 sm:grid-cols-3">
              {guidanceItems.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className={cn(
                    "flex gap-3.5 py-4 first:pt-0 last:pb-0 sm:flex-col sm:gap-2.5 sm:py-0 sm:pr-5 last:sm:pr-0",
                    index > 0 &&
                      "border-t border-[rgba(196,189,181,0.28)] sm:border-t-0 sm:border-l sm:pl-5"
                  )}
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-[0.68rem] font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[0.95rem] leading-[1.2] font-semibold tracking-[-0.01em] text-on-background">
                      {highlight.title}
                    </h4>
                    <p className="mt-1 text-[0.84rem] leading-relaxed text-on-surface">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
