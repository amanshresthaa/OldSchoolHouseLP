"use client"

import { useState, useCallback, useRef, useMemo, useEffect } from "react"

import { cn } from "@/lib/utils"
import {
  formatPrice,
  getMenuBadge,
  type MenuCategory,
  type MenuItem,
} from "@/lib/menu"

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

function HighlightMatch({ text, term }: { text: string; term: string }) {
  if (!term.trim()) return <>{text}</>
  const idx = text.toLowerCase().indexOf(term.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-[var(--color-on-tertiary-container)]/30 text-inherit rounded-sm px-0.5">
        {text.slice(idx, idx + term.length)}
      </mark>
      {text.slice(idx + term.length)}
    </>
  )
}

export function MenuInteractive({ categories }: MenuInteractiveProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(() =>
    getInitialCategory(categories)
  )
  const [searchTerm, setSearchTerm] = useState("")
  const [dietaryFilters, setDietaryFilters] = useState<Set<DietaryFilter>>(
    () => new Set()
  )
  const [searchOpen, setSearchOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isStuck, setIsStuck] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const contentRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const stickySentinelRef = useRef<HTMLDivElement>(null)
  const backToTopSentinelRef = useRef<HTMLDivElement>(null)

  const handleCategoryClick = useCallback(
    (slug: string | null) => {
      setIsTransitioning(true)
      setActiveCategory(slug)
      window.history.replaceState(null, "", slug ? `#${slug}` : " ")

      requestAnimationFrame(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        setTimeout(() => setIsTransitioning(false), 350)

        const selector = slug
          ? `[data-category="${slug}"]`
          : "[data-category=\"all\"]"
        const pill = scrollContainerRef.current?.querySelector(selector)
        pill?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      })
    },
    []
  )

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

  const hasActiveFilters = searchTerm.trim().length > 0 || dietaryFilters.size > 0

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

  const clearAllFilters = useCallback(() => {
    setSearchTerm("")
    setDietaryFilters(new Set())
    setSearchOpen(false)
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
    <div>
      {/* Sticky sentinel */}
      <div ref={stickySentinelRef} className="h-0" />

      {/* Sticky Category Navigation */}
      <div
        className={cn(
          "sticky top-[4.5rem] z-30 bg-[var(--color-surface)]/85 backdrop-blur-[20px] transition-shadow duration-[var(--duration-transition)] ease-[var(--easing-standard)]",
          isStuck && "shadow-[0_4px_16px_rgba(27,28,28,0.06)]"
        )}
      >
        <div className="section-shell">
          <div className="flex items-center gap-2 py-3">
            <div className="relative min-w-0 flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--color-surface)]/85 to-transparent lg:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[var(--color-surface)]/85 to-transparent lg:hidden" />
              <div
                ref={scrollContainerRef}
                role="toolbar"
                aria-label="Menu categories"
                className="hide-scrollbar flex gap-2 overflow-x-auto"
              >
                <button
                  type="button"
                  data-category="all"
                  aria-pressed={activeCategory === null}
                  onClick={() => handleCategoryClick(null)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]",
                    activeCategory === null
                      ? "bg-[var(--color-tertiary-container)] text-[var(--color-on-tertiary-container)]"
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
                        "shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide whitespace-nowrap transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]",
                        isActive
                          ? "bg-[var(--color-tertiary-container)] text-[var(--color-on-tertiary-container)]"
                          : "bg-[var(--color-surface-low)] text-on-surface hover:bg-[var(--color-surface-highest)]"
                      )}
                    >
                      {category.title}
                      <span className="ml-1.5 text-[0.65rem] opacity-60">
                        {category.items.length}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Search toggle */}
            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              className={cn(
                "shrink-0 rounded-full p-2.5 transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)]",
                searchOpen
                  ? "bg-[var(--color-tertiary-container)] text-[var(--color-on-tertiary-container)]"
                  : "bg-[var(--color-surface-low)] text-on-surface hover:bg-[var(--color-surface-highest)]"
              )}
              aria-label={searchOpen ? "Close search" : "Search menu"}
            >
              {searchOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search/Filter Panel */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-[var(--duration-transition)] ease-[var(--easing-standard)]",
            searchOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="section-shell pb-4">
            <div className="space-y-3">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search dishes…"
                aria-label="Search dishes"
                className="w-full rounded-xl bg-[var(--color-surface-highest)] px-4 py-2.5 text-sm text-on-background placeholder:text-on-surface/50 transition-colors duration-[var(--duration-micro)] ease-[var(--easing-standard)] border-transparent outline-none focus:border-[var(--color-outline-variant)] focus:bg-[var(--color-surface-lowest)]"
              />
              <div className="flex flex-wrap items-center gap-2">
                {DIETARY_FILTERS.map((filter) => {
                  const badge = getMenuBadge(filter)
                  const isActive = dietaryFilters.has(filter)
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => toggleDietaryFilter(filter)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase transition-all duration-[var(--duration-micro)] ease-[var(--easing-standard)]",
                        isActive && badge
                          ? badge.className
                          : "bg-[var(--color-surface-low)] text-on-surface hover:bg-[var(--color-surface-highest)]",
                        isActive && "ring-1 ring-[var(--color-outline-variant)]"
                      )}
                    >
                      {filter}
                    </button>
                  )
                })}
                {hasActiveFilters ? (
                  <>
                    <span className="ml-1 text-xs text-on-surface/60">
                      {totalFilteredItems} result
                      {totalFilteredItems !== 1 ? "s" : ""}
                    </span>
                    <button
                      type="button"
                      onClick={clearAllFilters}
                      className="text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors"
                    >
                      Clear all
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div ref={backToTopSentinelRef} className="h-0" />
      <div ref={contentRef} className="section-shell scroll-mt-40 py-8">
        <div
          className={cn(
            "space-y-8 transition-all duration-[var(--duration-transition)] ease-[var(--easing-standard)]",
            isTransitioning
              ? "translate-y-2 opacity-0"
              : "translate-y-0 opacity-100"
          )}
        >
          {visibleCategories.length === 0 ? (
            <div className="py-16 text-center">
              <p className="font-heading text-lg text-on-surface">
                No dishes found
              </p>
              <p className="mt-1 text-sm text-on-surface/60">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            visibleCategories.map((category, index) => (
              <section
                key={`${category.slug}-${activeCategory}-${searchTerm}-${[...dietaryFilters].join()}`}
                id={category.slug}
                className="hero-entrance surface-frame scroll-mt-40"
                style={{
                  animationDelay: `${index * 60}ms`,
                }}
              >
                <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
                  <div className="surface-pane surface-pane-muted">
                    <div className="max-w-2xl space-y-2">
                      <h2 className="text-[2rem]">{category.title}</h2>
                      <p className="text-sm leading-7 text-on-surface md:text-base">
                        {category.intro}
                      </p>
                    </div>
                  </div>
                  <div className="surface-pane bg-[var(--color-surface-lowest)]">
                    <div className="grid gap-6 md:grid-cols-2 md:gap-x-10">
                      {category.items.map((item) => (
                        <article
                          key={`${category.slug}-${item.name}`}
                          className="space-y-3 border-t border-[var(--color-outline-variant)]/24 pt-5 first:border-t-0 first:pt-0"
                        >
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                            <div className="min-w-0 space-y-2">
                              <h3 className="font-sans text-lg font-semibold text-secondary">
                                <HighlightMatch text={item.name} term={searchTerm} />
                              </h3>
                              {item.description ? (
                                <p className="text-sm leading-6 text-on-surface">
                                  <HighlightMatch text={item.description} term={searchTerm} />
                                </p>
                              ) : null}
                            </div>
                            <p className="shrink-0 text-sm font-medium text-on-surface sm:pt-1">
                              {formatPrice(item.price)}
                            </p>
                          </div>
                          {item.labels?.length ? (
                            <div className="flex flex-wrap gap-2">
                              {item.labels
                                .map((label) => getMenuBadge(label))
                                .filter((badge) => badge !== null)
                                .map((badge) => (
                                  <span
                                    key={`${item.name}-${badge.key}`}
                                    className={`inline-flex rounded-full px-3 py-1 text-[0.72rem] font-semibold tracking-[0.14em] uppercase ${badge.className}`}
                                  >
                                    {badge.label}
                                  </span>
                                ))}
                            </div>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))
          )}
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 right-6 z-40 rounded-full bg-[var(--color-tertiary-container)] text-[var(--color-on-tertiary-container)] px-4 py-2.5 text-xs font-semibold tracking-wide shadow-lg transition-all duration-[var(--duration-transition)] ease-[var(--easing-standard)]",
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        ↑ Back to top
      </button>
    </div>
  )
}
