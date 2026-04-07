# Design System Enforcement Prompt

Use this prompt when asking an AI to build or redesign any page or component on the Old School House site. Paste it at the start of your request.

---

## Prompt

You are redesigning components for The Old School House website. Every component must follow the established homepage design system. Before writing any code, read and follow these files:

- `design-system.md` — colour tokens, typography, spacing, motion, and principles
- `design-system-patterns.md` — reusable homepage component patterns with exact class strings
- `AGENTS.md` — code style, architecture, and coding conventions
- `app/globals.css` — CSS custom properties, utility classes, and keyframe animations

### Rules

**Surface hierarchy (never use raw backgrounds or borders):**

| Primitive                          | When to use                                                     |
| ---------------------------------- | --------------------------------------------------------------- |
| `.surface-frame`                   | Grouped container holding multiple sub-items or mixed content   |
| `.surface-pane`                    | Inner cell padding inside a frame (`px-5 py-5 md:px-6 md:py-6`) |
| `.surface-panel`                   | Standalone white card                                           |
| `.surface-panel-muted`             | Standalone muted card                                           |
| `bg-[var(--color-surface-lowest)]` | White card nested inside a `.surface-frame`                     |

No `1px` borders for section separation — use surface tier transitions. No `#000000` — body text is `text-on-background` (`#1b1c1c`), supporting copy is `text-on-surface` (`#3a3635`).

**Card pattern — Compact Highlight Card:**

Every numbered text card must use this exact structure:

```tsx
<Card
  size="sm"
  className="surface-panel-muted gap-2 rounded-2xl border-0 py-0 shadow-none"
>
  <CardHeader className="gap-2 px-5 pt-4 pb-0">
    <div className="flex items-center gap-2.5">
      <Badge variant="pill" className="h-auto px-2.5 py-0.5 text-[0.7rem]">
        {String(index + 1).padStart(2, "0")}
      </Badge>
      <CardTitle className="text-[0.95rem] leading-[1.18] tracking-[-0.01em] text-on-background">
        {title}
      </CardTitle>
    </div>
  </CardHeader>
  <CardContent className="px-5 pb-4">
    <CardDescription className="text-[0.84rem] leading-relaxed text-on-surface">
      {description}
    </CardDescription>
  </CardContent>
</Card>
```

When inside a `surface-frame`, replace `surface-panel-muted` with `bg-[var(--color-surface-lowest)]`.

**Sequential steps (3–5 short items) — Numbered Step Flow:**

Do not use cards. Use this pattern instead:

```tsx
<div className="surface-frame px-5 py-5 md:px-6 md:py-6">
  <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.16em] text-secondary uppercase">
    {label}
  </p>
  <div className="sm:grid-cols-{N} grid gap-0">
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

**Mobile cue pattern — required for any scrollable card collection on mobile:**

Use `useMobileRailCue` hook from `@/components/site/useMobileRailCue`. Each cue needs a unique `order` number (ascending down the page) and a `data-*` attribute on each card for the `itemSelector`.

Horizontal rail (x-axis):

- Indicator: pill `h-5 w-9` with bouncing dot `h-2.5 w-2.5 rounded-full bg-secondary`
- Track: `grid auto-cols-[84%] grid-flow-col gap-3`
- Variants: `spring`, `peek`, or `magnetic`

Vertical stack (y-axis):

- Indicator: pill `h-8 w-5` with dot `h-2 w-2`
- Track: `grid grid-cols-1 gap-3` inside a `max-h-[17rem]` container
- Variants: `nudge`, `magnetic`

No gradient fade overlays on scroll edges.

**Section anatomy — every content section:**

```tsx
<section className="page-section bg-background">
  <div className="section-shell flex flex-col gap-5">
    <ScrollReveal
      delayMs={0}
      className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
    >
      <SectionHeading eyebrow="..." title="..." description="..." />
      <div>{/* CTAs */}</div>
    </ScrollReveal>
    {/* Content with staggered ScrollReveal: 0, 120, 180, 240 */}
  </div>
</section>
```

Section padding: `page-section` = `py-10 md:py-14 lg:py-16`. Inner gap: `gap-5`.

**Responsive grids:**

| Content type    | Mobile                  | `sm`          | `xl`                      |
| --------------- | ----------------------- | ------------- | ------------------------- |
| Highlight cards | Cue rail or 1-col stack | `grid-cols-2` | `grid-cols-3`             |
| Image cards     | Cue rail                | `grid-cols-2` | `grid-cols-3`             |
| Split layout    | Stacked                 | Stacked       | `grid-cols-[0.9fr_1.1fr]` |
| Step flow       | Vertical stack          | `grid-cols-N` | —                         |

Grid gap: `gap-3` for text cards, `gap-4` for image cards and mixed content.

**Image cards — equal height:**

All image cards in a grid must have equal height. Use `h-full` on both the link wrapper and card, `flex flex-col` on the card, `h-[11rem] shrink-0` on the image container, and `flex-1` on the text pane.

**Review/testimonial card:**

Use `surface-frame` with `surface-pane` padding. Layout: avatar+name row -> blockquote (`font-heading`, fluid size) -> focus tags (muted pill badges) -> footer with dot nav + arrows. Auto-height, no fixed constraints.

**Dark CTA panel:**

`bg-primary rounded-[1.5rem] px-5 py-6 text-white md:rounded-[1.9rem] md:px-7 md:py-7`. Saffron primary button: `bg-[var(--color-tertiary)] text-primary`. Secondary: `variant="darkOutline"`.

**Stat highlight card:**

`bg-primary rounded-2xl py-0 text-white shadow-none`. Label: `text-[0.72rem] tracking-[0.16em] text-[var(--color-on-tertiary-container)] uppercase`. Value: `font-heading text-[2rem] md:text-[2.35rem]`. Note: `text-sm text-white/74`.

**Mobile-first reordering:**

When mobile and desktop need different content priority, use paired containers with `sm:hidden` and `hidden sm:grid` rather than CSS `order`.

**Typography tokens:**

| Element              | Classes                                                               |
| -------------------- | --------------------------------------------------------------------- |
| Section heading      | Use `<SectionHeading>` component, not raw `<h2>`                      |
| Card title (compact) | `text-[0.95rem] leading-[1.18] tracking-[-0.01em] text-on-background` |
| Card description     | `text-[0.84rem] leading-relaxed text-on-surface`                      |
| Eyebrow (manual)     | `text-[0.72rem] font-semibold tracking-[0.16em] uppercase`            |
| Body copy in panels  | `text-sm leading-relaxed text-on-surface`                             |

**Colour roles:**

- Burgundy (`secondary`) = actions and interactive elements
- Saffron (`tertiary`) = decorative energy, eyebrows, stars — never default action colour
- Primary (`primary`) = dark backgrounds, stat cards, page heroes
- Cue indicator dots always use `bg-secondary`

**What to avoid:**

- No gradient overlays on scroll containers
- No fixed-height containers that truncate content (use `max-h` only for intentional scrollable stacks)
- No `#000000` — use `text-on-background`
- No 1px divider lines between sections — use surface transitions
- No card-in-card-in-card nesting — max one level of nesting
- No decorative radial gradients or blur overlays on content cards
- No filler copy that adds no value ("Guests tend to remember...")
- No `any` types in TypeScript

### Existing components to reuse

Before building anything new, check if these existing components already solve it:

- `SectionHeading` — eyebrow + title + description block
- `ScrollReveal` — intersection-based fade-in with stagger delay
- `SiteActionCard` — grouped CTA buttons (supports `tone="dark"`)
- `InlineBookingCta` — full-width booking CTA band
- `FaqSection` — accordion FAQ block
- `PageSignoff` — dark footer signoff with night-panel
- `PageHero` — dark hero with breadcrumbs, eyebrow, title, description, actions
- `FeaturePage` — full page scaffold for inner pages (hero + sections + CTA + FAQ + signoff)
- `EditorialHighlightsPanel` — compact card grid with vertical cue on mobile
- `GuestReviewSlideshow` — review carousel card
- `TopicClusterSection` — internal link grid
- `AlternatingSectionGrid` — zebra-striped content rows in a frame

### How to apply to existing FeaturePage sections

The `FeaturePage` component has three layout modes for sections: `grid`, `feature-split`, and `numbered-list`. These were built before the homepage redesign. When redesigning them:

1. **`grid` layout** — Replace the `surface-panel` / `surface-panel-muted` alternating cards with compact highlight cards (badge + title inline pattern)
2. **`feature-split` layout** — Remove the decorative radial gradients, oversized ghost numbers, and "Start here" labels. Use the compact card pattern for supporting items
3. **`numbered-list` layout** — Replace with the numbered step flow pattern if items are sequential, or compact highlight cards in a grid if they are not
4. **Checklists** — Keep the current numbered `<ol>` pattern inside `surface-panel`, it already works

When building new pages, prefer the homepage patterns over the older FeaturePage layouts.
