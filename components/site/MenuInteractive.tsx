"use client"

import { useState, useCallback, useRef, useMemo, useEffect } from "react"

import { MenuCategoryPanel } from "@/components/site/MenuCategoryPanel"
import { cn } from "@/lib/utils"
import { getMenuBadge, type MenuCategory, type MenuItem } from "@/lib/menu"

interface MenuInteractiveProps {
  categories: MenuCategory[]
}

const DIETARY_FILTERS = ["Veg", "GF", "Spicy"] as const
type DietaryFilter = (typeof DIETARY_FILTERS)[number]

function matchesDietaryFilter(item: MenuItem, filter: DietaryFilter): boolean {
  if (!item.labels?.length) return false
  return item.labels.some((label) => {
    const normalised = label.toLowerCase()
    if (filter === "Veg") return normalised === "veg" || normalised === "v"
    if (filter === "GF") return normalised === "gf"
    if (filter === "Spicy") return normalised.startsWith("spice")
    return false
  })
}

function filterItems(
  items: MenuItem[],
  searchTerm: string,
  dietaryFilters: Set<DietaryFilter>
): MenuItem[] {
  const term = searchTerm.toLowerCase().trim()

  return items.filter((item) => {
    if (term) {
      const nameMatch = item.name.toLowerCase().includes(term)
      const descMatch = item.description?.toLowerCase().includes(term) ?? false
      if (!nameMatch && !descMatch) return false
    }

    for (const filter of dietaryFilters) {
      if (!matchesDietaryFilter(item, filter)) return false
    }

    return true
  })
}

function getInitialCategory(categories: MenuCategory[]): string | null {
  if (typeof window === "undefined") return categories[0]?.slug ?? null
  const hash = window.location.hash.replace("#", "")
  if (hash) {
    const match = categories.find((c) => c.slug === hash)
    if (match) return match.slug
  }
  return categories[0]?.slug ?? null
}

export function MenuInteractive({ categories }: MenuInteractiveProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(() =>
    getInitialCategory(categories)
  )
  const [searchTerm, setSearchTerm] = useState("")
  const [dietaryFilters, setDietaryFilters] = useState<Set<DietaryFilter>>(
    () => new Set()
  )
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isStuck, setIsStuck] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const stickySentinelRef = useRef<HTMLDivElement>(null)
  const backToTopSentinelRef = useRef<HTMLDivElement>(null)

  const handleCategoryClick = useCallback((slug: string | null) => {
    setIsTransitioning(true)
    setActiveCategory(slug)
    const nextUrl = slug
      ? `${window.location.pathname}${window.location.search}#${slug}`
      : `${window.location.pathname}${window.location.search}`
    window.history.replaceState(null, "", nextUrl)

    requestAnimationFrame(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      setTimeout(() => setIsTransitioning(false), 350)

      const selector = slug
        ? `[data-category="${slug}"]`
        : '[data-category="all"]'
      const pill = scrollContainerRef.current?.querySelector(selector)
      pill?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    })
  }, [])

  const toggleDietaryFilter = useCallback((filter: DietaryFilter) => {
    setDietaryFilters((prev) => {
      const next = new Set(prev)
      if (next.has(filter)) {
        next.delete(filter)
      } else {
        next.add(filter)
      }
      return next
    })
  }, [])

  const hasActiveFilters =
    searchTerm.trim().length > 0 || dietaryFilters.size > 0

  const visibleCategories = useMemo(() => {
    const base =
      activeCategory === null
        ? categories
        : categories.filter((c) => c.slug === activeCategory)

    if (!hasActiveFilters) return base

    return base
      .map((category) => ({
        ...category,
        items: filterItems(category.items, searchTerm, dietaryFilters),
      }))
      .filter((category) => category.items.length > 0)
  }, [categories, activeCategory, searchTerm, dietaryFilters, hasActiveFilters])

  const totalFilteredItems = useMemo(
    () => visibleCategories.reduce((sum, c) => sum + c.items.length, 0),
    [visibleCategories]
  )

  const activeCategoryTitle =
    activeCategory === null
      ? "All sections"
      : (categories.find((category) => category.slug === activeCategory)
          ?.title ?? "Selected section")

  const clearAllFilters = useCallback(() => {
    setSearchTerm("")
    setDietaryFilters(new Set())
  }, [])

  useEffect(() => {
    const el = stickySentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = backToTopSentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setShowBackToTop(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      <div ref={stickySentinelRef} className="h-0" />
      <div
        className={cn(
          "sticky top-[4.25rem] z-30 border-b border-[rgba(196,189,181,0.18)] bg-[var(--color-surface)]/94 backdrop-blur-[18px]"
        )}
      >
        <div className="px-2 py-2 md:px-5 md:py-3">
          <div
            className={cn(
              "overflow-hidden rounded-[1.1rem] border border-[rgba(196,189,181,0.22)] bg-[linear-gradient(180deg,var(--color-surface-lowest)_0%,#f5efe5_100%)] transition-shadow duration-[var(--duration-transition)] ease-[var(--easing-standard)]",
              isStuck && "shadow-[0_16px_34px_rgba(27,28,28,0.08)]"
            )}
          >
            <div className="grid gap-2 border-b border-[rgba(196,189,181,0.18)] p-2.5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-3">
              <label className="block min-w-0">
                <span className="sr-only">Search dishes</span>
                <div className="flex items-center gap-2 rounded-[0.95rem] border border-[rgba(196,189,181,0.24)] bg-white/88 px-3 py-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4 shrink-0 text-on-surface/45"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search menu"
                    aria-label="Search dishes"
                    className="w-full bg-transparent text-sm text-on-background outline-none placeholder:text-on-surface/50"
                  />
                </div>
              </label>

              <div className="flex items-center justify-between gap-2 md:justify-end">
                <p className="rounded-full bg-[var(--color-surface-low)] px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase">
                  {activeCategoryTitle}
                </p>
                <p className="text-[0.72rem] font-semibold tracking-[0.08em] text-on-surface/72 uppercase">
                  {totalFilteredItems} item
                  {totalFilteredItems === 1 ? "" : "s"}
                </p>
                {hasActiveFilters ? (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="shrink-0 rounded-full border border-[rgba(196,189,181,0.24)] bg-white/70 px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.14em] text-secondary uppercase transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)] hover:bg-white"
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 border-b border-[rgba(196,189,181,0.16)] px-2.5 py-2">
              <span className="mr-1 text-[0.68rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                Filters
              </span>
              {DIETARY_FILTERS.map((filter) => {
                const badge = getMenuBadge(filter)
                const isActive = dietaryFilters.has(filter)
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => toggleDietaryFilter(filter)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.14em] uppercase transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]",
                      isActive && badge
                        ? badge.className
                        : "bg-[var(--color-surface-low)] text-on-surface hover:bg-[var(--color-surface-highest)]",
                      isActive && "ring-1 ring-[rgba(175,43,62,0.16)]"
                    )}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>

            <div className="relative px-2.5 py-2">
              <div className="pointer-events-none absolute inset-y-0 left-2.5 z-10 w-6 bg-gradient-to-r from-[#f5efe5] to-transparent lg:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-2.5 z-10 w-6 bg-gradient-to-l from-[#f5efe5] to-transparent lg:hidden" />
              <div
                ref={scrollContainerRef}
                role="toolbar"
                aria-label="Menu categories"
                className="hide-scrollbar flex gap-1.5 overflow-x-auto"
              >
                <button
                  type="button"
                  data-category="all"
                  aria-pressed={activeCategory === null}
                  onClick={() => handleCategoryClick(null)}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-2 text-[0.72rem] font-semibold tracking-[0.08em] whitespace-nowrap transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]",
                    activeCategory === null
                      ? "bg-secondary text-white"
                      : "bg-[var(--color-surface-low)] text-on-surface hover:bg-[var(--color-surface-highest)]"
                  )}
                >
                  All
                </button>
                {categories.map((category) => {
                  const isActive = activeCategory === category.slug
                  return (
                    <button
                      key={category.slug}
                      type="button"
                      data-category={category.slug}
                      aria-pressed={isActive}
                      onClick={() => handleCategoryClick(category.slug)}
                      className={cn(
                        "shrink-0 rounded-full px-3 py-2 text-[0.72rem] font-semibold tracking-[0.08em] whitespace-nowrap transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]",
                        isActive
                          ? "bg-secondary text-white"
                          : "bg-[var(--color-surface-low)] text-on-surface hover:bg-[var(--color-surface-highest)]"
                      )}
                    >
                      {category.title}
                      <span className="ml-1.5 text-[0.62rem] opacity-65">
                        {category.items.length}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={backToTopSentinelRef} className="h-0" />
      <div
        ref={contentRef}
        className="scroll-mt-36 px-2 pt-2 pb-4 md:px-5 md:py-5"
      >
        <div
          className={cn(
            "transition-all duration-[var(--duration-transition)] ease-[var(--easing-standard)]",
            isTransitioning
              ? "translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
          )}
        >
          {visibleCategories.length === 0 ? (
            <div className="rounded-[1.1rem] border border-[rgba(196,189,181,0.18)] bg-[var(--color-surface-lowest)] px-5 py-12 text-center">
              <p className="font-heading text-lg text-on-surface">
                No dishes found
              </p>
              <p className="mt-1 text-sm text-on-surface/60">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-[1.2rem] border border-[rgba(196,189,181,0.18)] bg-[var(--color-surface-lowest)] shadow-[0_14px_34px_rgba(27,28,28,0.04)]">
              <div className="divide-y divide-[rgba(196,189,181,0.16)]">
                {visibleCategories.map((category, index) => (
                  <MenuCategoryPanel
                    key={`${category.slug}-${activeCategory}-${searchTerm}-${[...dietaryFilters].join()}`}
                    category={category}
                    searchTerm={searchTerm}
                    animationDelayMs={index * 60}
                    className="hero-entrance scroll-mt-36"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed right-5 bottom-5 z-40 rounded-full bg-[var(--color-tertiary-container)] px-3.5 py-2 text-xs font-semibold tracking-wide text-[var(--color-on-tertiary-container)] shadow-lg transition-all duration-[var(--duration-transition)] ease-[var(--easing-standard)] md:right-6 md:bottom-6",
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        Top
      </button>
    </div>
  )
}
