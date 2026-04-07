# Homepage Component Patterns

Reference for reusing the homepage design patterns across other pages. Every pattern documented here is live on the homepage and follows `design-system.md`.

---

## 1. Compact Highlight Card

The default card for displaying a numbered list of text items (reasons, stories, highlights).

```
Badge (pill, "01") + CardTitle inline in one row
CardDescription below
```

**Tokens:**

| Property    | Value                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Container   | `surface-panel-muted gap-2 rounded-2xl border-0 py-0 shadow-none`     |
| Header      | `gap-2 px-5 pt-4 pb-0`                                                |
| Badge       | `variant="pill"` — `h-auto px-2.5 py-0.5 text-[0.7rem]`               |
| Title       | `text-[0.95rem] leading-[1.18] tracking-[-0.01em] text-on-background` |
| Description | `text-[0.84rem] leading-relaxed text-on-surface` — in `px-5 pb-4`     |

**Variant — white surface** (for use inside `surface-frame`):

Replace `surface-panel-muted` with `bg-[var(--color-surface-lowest)]`.

**Grid:**

| Breakpoint | Columns                |
| ---------- | ---------------------- |
| Mobile     | 1 column (or cue rail) |
| `sm`       | `grid-cols-2`          |
| `xl`       | `grid-cols-3`          |

Gap: `gap-3`.

**Used in:** HomeReasonsPanel, HomeProofBarSection, EditorialHighlightsPanel, HomeReviewsSection highlights.

---

## 2. Mobile Cue Pattern

Animated scroll hint for mobile carousels/stacks. Uses `useMobileRailCue` hook + `cueMotion` helpers. Only renders below `sm` breakpoint.

### 2a. Horizontal Rail (x-axis)

For card carousels that scroll left/right.

**Cue indicator row** (placed above the rail):

```tsx
<div className="flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase sm:hidden">
  <span className="relative flex h-5 w-9 items-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/84 px-1">
    <span
      aria-hidden="true"
      className="h-2.5 w-2.5 rounded-full bg-secondary motion-reduce:animate-none"
      style={{
        animation: getCueIndicatorAnimation("x", variant, isCueAnimating),
      }}
    />
  </span>
  <p>{count} label</p>
</div>
```

**Rail container:**

```tsx
<div
  ref={railRef}
  className="overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
>
  <div
    ref={trackRef}
    className="grid auto-cols-[84%] grid-flow-col gap-3 pb-1"
    style={
      isCueAnimating
        ? {
            "--osh-cue-offset": `${peekOffset}px`,
            animation: getCueTrackAnimation("x", variant),
          }
        : undefined
    }
  >
    {/* cards */}
  </div>
</div>
```

**Hook config:**

```tsx
useMobileRailCue({
  itemCount: items.length,
  itemSelector: '[data-your-card="true"]',
  order: number,        // unique per section, ascending down the page
  peekRatio: 0.28–0.42, // how much of the next card peeks
  variant: "spring" | "peek" | "magnetic",
})
```

**Variants used on homepage:**

| Section                 | Variant  | Axis |
| ----------------------- | -------- | ---- |
| Why choose us (reasons) | `spring` | x    |
| Menu dishes             | `peek`   | x    |
| Review highlights       | `spring` | x    |

### 2b. Vertical Stack (y-axis)

For card stacks that scroll up/down inside a height-constrained container.

**Cue indicator** (vertical pill):

```tsx
<span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/82">
  <span
    aria-hidden="true"
    className="mt-1.5 h-2 w-2 rounded-full bg-secondary motion-reduce:animate-none"
    style={{
      animation: getCueIndicatorAnimation("y", variant, isCueAnimating),
    }}
  />
</span>
```

**Stack container:**

```tsx
<div
  ref={railRef}
  className="max-h-[17rem] overflow-y-auto overscroll-y-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
>
  <div
    ref={trackRef}
    className="grid grid-cols-1 gap-3 pb-1"
    style={
      isCueAnimating
        ? {
            "--osh-cue-offset": `${peekOffset}px`,
            animation: getCueTrackAnimation("y", variant),
          }
        : undefined
    }
  >
    {/* cards */}
  </div>
</div>
```

**Variants used on homepage:**

| Section              | Variant                      | max-h      |
| -------------------- | ---------------------------- | ---------- |
| Proof bar stories    | `nudge` (indicator: `glint`) | `18.75rem` |
| Editorial highlights | `magnetic`                   | `17rem`    |

---

## 3. Numbered Step Flow

For sequential guidance content (3–5 short steps). No scroll, no cue.

**Structure:**

```tsx
<div className="surface-frame px-5 py-5 md:px-6 md:py-6">
  <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
    {label}
  </p>
  <div className="grid gap-0 sm:grid-cols-3">
    {items.map((item, index) => (
      <div
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
            {item.title}
          </h4>
          <p className="mt-1 text-[0.84rem] leading-relaxed text-on-surface">
            {item.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
```

**Layout:** Mobile stacks vertically (number + text side by side, horizontal dividers). Desktop uses `grid-cols-N` with vertical border dividers.

**Used in:** Menu highlights "How to order" section.

---

## 4. Equal-Height Image Card

For showcasing items with an image, badges, title, description, and a link arrow.

**Tokens:**

| Property        | Value                                                                             |
| --------------- | --------------------------------------------------------------------------------- |
| Wrapper         | `group block h-full` (link)                                                       |
| Card            | `surface-frame flex h-full flex-col overflow-hidden rounded-2xl py-0 shadow-none` |
| Image container | `relative h-[11rem] shrink-0 overflow-hidden`                                     |
| Image           | `absolute inset-0 h-full w-full object-cover` with hover `scale-[1.02]`           |
| Text pane       | `flex flex-1 flex-col justify-between gap-3 px-5 py-4`                            |
| Title           | `font-heading text-[1.2rem] leading-[1.12] tracking-[-0.02em] text-on-background` |
| Description     | `text-sm leading-relaxed text-on-surface`                                         |
| Link arrow      | `text-sm font-semibold text-secondary` with `ArrowRight size-4`                   |

**Grid:**

| Breakpoint | Columns                    |
| ---------- | -------------------------- |
| Mobile     | Cue rail `auto-cols-[84%]` |
| `sm`       | `grid-cols-2`              |
| `xl`       | `grid-cols-3`              |

Gap: `gap-4`.

**Used in:** Menu highlights dishes.

---

## 5. Review Card (Slideshow)

Stateful card cycling through guest reviews. Uses `surface-frame` with `surface-pane` padding.

**Layout (top to bottom):**

1. **Header row** — Avatar (primary/secondary alternating) + name/guest type on left, saffron stars on right.
2. **Blockquote** — `font-heading` at `clamp(1.22rem, 1rem + 0.8vw, 1.72rem)`, auto-height.
3. **Focus tags** — Muted pill badges with `border-[rgba(196,189,181,0.32)]`, `text-[0.6rem]`, uppercase.
4. **Footer** — Dot navigation (left) + "01/04" counter + prev/next arrows (right), separated by `border-t`.

**Navigation tokens:**

| Element       | Value                                                                                  |
| ------------- | -------------------------------------------------------------------------------------- |
| Active dot    | `h-2 w-6 bg-secondary`                                                                 |
| Inactive dot  | `size-2 bg-[rgba(196,189,181,0.8)]`                                                    |
| Arrow buttons | `size-9 rounded-full border-[rgba(196,189,181,0.36)] bg-[var(--color-surface-lowest)]` |
| Counter       | `text-[0.68rem] tracking-[0.12em] text-on-surface/48 uppercase`                        |

**Used in:** Guest experiences section.

---

## 6. Section Anatomy

Every content section follows this structure:

```tsx
<section className="page-section bg-background">
  <div className="section-shell flex flex-col gap-5">
    <ScrollReveal
      delayMs={0}
      className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
    >
      <SectionHeading eyebrow="..." title="..." description="..." />
      <div className="flex flex-wrap items-center gap-3">{/* CTAs */}</div>
    </ScrollReveal>
    {/* Content blocks wrapped in ScrollReveal with staggered delayMs */}
  </div>
</section>
```

**Spacing:** `page-section` = `py-10 md:py-14 lg:py-16`. Inner rhythm = `gap-5`.

**ScrollReveal delays:** Stagger by 60–120ms increments (0, 120, 180, 240).

---

## 7. Stat Highlight Card

Dark card for a single prominent statistic.

```tsx
<Card className="gap-3 rounded-2xl bg-primary py-0 text-white shadow-none">
  <CardHeader className="gap-2 px-5 pt-5 pb-0">
    <p className="text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--color-on-tertiary-container)] uppercase">
      {label}
    </p>
    <p className="font-heading text-[2rem] leading-none tracking-[-0.04em] md:text-[2.35rem]">
      {value}
    </p>
  </CardHeader>
  <CardContent className="px-5 pb-5">
    <p className="max-w-[24rem] text-sm leading-relaxed text-white/74">
      {note}
    </p>
  </CardContent>
</Card>
```

**Used in:** Proof bar section (125 covers).

---

## 8. Dark CTA Panel

Full-width dark panel with text + action buttons. For section closers.

```tsx
<div className="relative overflow-hidden rounded-[1.5rem] bg-primary px-5 py-6 text-white shadow-[0_26px_50px_rgba(12,33,21,0.22)] md:rounded-[1.9rem] md:px-7 md:py-7">
  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
    <div className="max-w-2xl">
      <p className="text-[0.62rem] font-bold tracking-[0.22em] text-[var(--color-on-tertiary-container)] uppercase">
        {kicker}
      </p>
      <p className="section-copy pt-2.5 text-white/78 md:text-[1.04rem]">
        {body}
      </p>
    </div>
    <div className="flex flex-col gap-3 sm:flex-row">
      {/* Saffron primary CTA + dark outline secondary CTA */}
    </div>
  </div>
</div>
```

**Button variants for dark contexts:**

| Role              | Class                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------- |
| Primary (saffron) | `bg-[var(--color-tertiary)] text-primary hover:bg-[var(--color-on-tertiary-container)]` |
| Secondary         | `variant="darkOutline"`                                                                 |

**Used in:** Guest experiences "In Practice" panel.

---

## 9. Mobile-First Content Reordering

When mobile and desktop need different content order, use paired containers:

```tsx
{
  /* Mobile order */
}
;<div className="flex flex-col gap-3 sm:hidden">
  <ComponentA /> {/* Value props first */}
  <ComponentB /> {/* Social proof second */}
</div>

{
  /* Desktop order */
}
;<div className="hidden min-w-0 gap-3 sm:grid">
  <ComponentB /> {/* Hero-weight first */}
  <ComponentA /> {/* Supporting second */}
</div>
```

**Used in:** Guest experiences section (highlights before reviews on mobile, reversed on desktop).

---

## 10. Surface Primitive Usage

| Primitive                          | When to use                                               | Example                                   |
| ---------------------------------- | --------------------------------------------------------- | ----------------------------------------- |
| `.surface-frame`                   | Grouped container holding multiple cards or mixed content | Proof bar wrapper, review card, step flow |
| `.surface-pane`                    | Inner cell padding (`px-5 py-5 md:px-6 md:py-6`)          | Reasons panel inside a frame              |
| `.surface-panel-muted`             | Standalone muted card                                     | Highlight cards, reason cards             |
| `bg-[var(--color-surface-lowest)]` | White card inside a frame                                 | Cards nested inside `surface-frame`       |

---

## 11. SectionHeading Component

Reusable heading block with optional eyebrow and description.

```tsx
<SectionHeading
  eyebrow="Label" // optional — renders eyebrow-row with saffron line
  title="Section title"
  titleId="unique-id" // optional — for aria-labelledby
  description="Body text" // optional
  invert={false} // true for dark backgrounds
  className="max-w-2xl" // constrain width as needed
/>
```

Default max-width is `max-w-2xl`. Use `max-w-none` when inside a constrained container (e.g., split grid cell).

---

## 12. Responsive Grid Patterns

| Pattern         | Mobile            | `sm`          | `lg`                      | `xl`          |
| --------------- | ----------------- | ------------- | ------------------------- | ------------- |
| Highlight cards | Cue rail or stack | `grid-cols-2` | —                         | `grid-cols-3` |
| Image cards     | Cue rail          | `grid-cols-2` | —                         | `grid-cols-3` |
| Split content   | Stacked           | Stacked       | `grid-cols-[0.9fr_1.1fr]` | —             |
| Step flow       | Stacked vertical  | `grid-cols-3` | —                         | —             |

---

## Quick Reference: Common Class Strings

```
// Cue indicator (horizontal)
"flex items-center justify-between text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase sm:hidden"

// Cue pill (horizontal)
"relative flex h-5 w-9 items-center rounded-full border border-[rgba(175,43,62,0.24)] bg-[var(--color-surface-lowest)]/84 px-1"

// Cue dot
"h-2.5 w-2.5 rounded-full bg-secondary motion-reduce:animate-none"

// Rail container
"overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"

// Rail track
"grid auto-cols-[84%] grid-flow-col gap-3 pb-1"

// Hidden scrollbar
"[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"

// Inline badge + title row
"flex items-center gap-2.5"

// Standard divider colour
"border-[rgba(196,189,181,0.28)]"
```
