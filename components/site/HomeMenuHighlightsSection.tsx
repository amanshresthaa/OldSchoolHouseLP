import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { SectionHeading } from "@/components/site/SectionHeading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
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

function MenuShowcaseCard({
  item,
  featured = false,
  className,
}: {
  item: MenuShowcaseItem
  featured?: boolean
  className?: string
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative isolate block overflow-hidden rounded-[1.75rem] bg-primary text-white",
        className
      )}
    >
      <Image
        src={item.image}
        alt={item.alt}
        width={item.image.width}
        height={item.image.height}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
        sizes={
          featured
            ? "(min-width: 1280px) 42vw, (min-width: 640px) 100vw, 86vw"
            : "(min-width: 1280px) 28vw, (min-width: 640px) 50vw, 86vw"
        }
      />
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,11,0.18)_0%,rgba(7,17,11,0.48)_38%,rgba(7,17,11,0.92)_100%)]",
          featured &&
            "bg-[linear-gradient(180deg,rgba(7,17,11,0.12)_0%,rgba(7,17,11,0.42)_34%,rgba(7,17,11,0.94)_100%)]"
        )}
      />
      <div
        className={cn(
          "relative flex min-h-[22rem] flex-col justify-end p-5 md:p-6",
          featured && "min-h-[27rem] xl:min-h-[30rem]"
        )}
      >
        <Badge
          variant="price"
          className="absolute top-5 left-5 h-auto px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.16em] uppercase md:top-6 md:left-6"
        >
          {formatPrice(item.item.price)}
        </Badge>
        <div className="max-w-[24rem]">
          <h3
            className={cn(
              "font-heading text-[1.9rem] leading-[1.02] tracking-[-0.04em] text-white",
              featured ? "md:text-[2.6rem]" : "md:text-[1.65rem]"
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "pt-3 text-sm leading-6 text-white/78",
              featured && "max-w-[26rem] md:text-[0.98rem]"
            )}
          >
            {item.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
            {item.ctaLabel}
            <ArrowRight className="size-4" />
          </span>
        </div>
      </div>
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
  const featuredItem = items[0]
  const supportingItems = items.slice(1)

  return (
    <section
      className={cn("bg-background py-10 md:py-14 lg:py-16", className)}
      {...props}
    >
      <div className="section-shell space-y-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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
        </div>

        <div className="space-y-4 sm:hidden">
          <div className="surface-frame overflow-hidden bg-[rgba(196,189,181,0.28)]">
            <div className="flex items-center justify-between px-5 py-4 text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase">
              <Badge variant="pill" className="h-auto px-3 py-1">
                Menu highlights
              </Badge>
              <p>
                Swipe through {String(items.length).padStart(2, "0")} dishes
              </p>
            </div>
            <div className="relative px-5 pb-5">
              <div className="pointer-events-none absolute inset-y-0 left-5 z-10 w-8 rounded-l-[1.75rem] bg-[linear-gradient(90deg,rgba(241,236,230,0.94)_0%,rgba(241,236,230,0)_100%)]" />
              <div className="pointer-events-none absolute inset-y-0 right-5 z-10 w-12 rounded-r-[1.75rem] bg-[linear-gradient(270deg,rgba(241,236,230,0.96)_0%,rgba(241,236,230,0)_100%)]" />
              <div className="mb-3 flex items-center justify-between text-[0.68rem] font-semibold tracking-[0.12em] text-primary/55 uppercase">
                <p>Start here</p>
                <p>Then drag for more</p>
              </div>
              <div className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[1.75rem] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="grid auto-cols-[82%] grid-flow-col gap-3 pr-5">
                  {items.map((item, index) => (
                    <MenuShowcaseCard
                      key={item.title}
                      item={item}
                      featured={index === 0}
                      className="snap-start"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Card className="surface-panel-muted gap-0 py-0">
            <CardHeader className="px-5 pt-5">
              <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                {copy.guidanceLabel}
              </p>
            </CardHeader>
            <CardContent className="grid gap-3 px-5 pb-5">
              {guidanceItems.map((highlight) => (
                <Card
                  key={highlight.title}
                  className="rounded-[1.2rem] bg-[var(--color-surface-lowest)] py-0 shadow-none ring-0"
                >
                  <CardHeader className="gap-2 px-4 pt-4">
                    <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                      {highlight.title}
                    </p>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <p className="text-sm leading-6 text-on-surface">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="hidden gap-4 sm:grid xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <MenuShowcaseCard item={featuredItem} featured />

          <div className="grid gap-4">
            {supportingItems.map((item) => (
              <Card
                key={item.title}
                className="surface-frame grid gap-0 overflow-hidden py-0 md:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="h-60 w-full object-cover md:h-full"
                  sizes="(min-width: 1280px) 26vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="surface-pane flex flex-col justify-between gap-5 md:px-5 md:py-5">
                  <div className="space-y-3">
                    <Badge variant="pill" className="h-auto w-fit px-3 py-1">
                      {formatPrice(item.item.price)}
                    </Badge>
                    <CardTitle className="font-heading text-[1.65rem] leading-[1.04] tracking-[-0.03em] text-on-background">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm leading-6 text-on-surface">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Separator className="flex-1 bg-[rgba(175,43,62,0.18)]" />
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-secondary/80"
                    >
                      {item.ctaLabel}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="surface-panel-muted hidden gap-0 py-0 sm:block">
          <CardHeader className="flex flex-row items-center justify-between gap-4 px-5 pt-5">
            <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
              {copy.guidanceLabel}
            </p>
            <p className="text-[0.72rem] font-semibold tracking-[0.12em] text-primary/48 uppercase">
              {String(guidanceItems.length).padStart(2, "0")} quick cues
            </p>
          </CardHeader>
          <CardContent className="grid gap-4 px-5 pb-5 sm:grid-cols-3">
            {guidanceItems.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="rounded-[1.2rem] bg-[var(--color-surface-lowest)] py-0 shadow-none ring-0"
              >
                <CardHeader className="gap-3 px-4 pt-4">
                  <Badge variant="pill" className="h-auto w-fit px-3 py-1">
                    {String(index + 1).padStart(2, "0")}
                  </Badge>
                  <CardTitle className="text-[0.72rem] font-semibold tracking-[0.16em] text-primary uppercase">
                    {highlight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="text-sm leading-6 text-on-surface">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
