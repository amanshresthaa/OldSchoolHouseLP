# Design System: Editorial Heritage

### Version 3 — Compact & Considered

---

## 1. Creative Direction

This is a considered dialogue between two worlds — the storied bones of a British pub and the aromatic heat of the Himalayas — given form through an **Editorial Heritage** aesthetic. Think high-end culinary journal meets handwritten recipe book: authoritative, warm, and unmistakably alive.

The guiding tension is intentional asymmetry against tonal depth. Layouts echo the physical experience of the Old School House: heavy oak (sturdy serifs) set against hand-painted spice tins (saffron and turmeric accents). Grid-breaking elements — a full-bleed photograph escaping its container, a Newsreader pull-quote interrupting body copy — create the feeling of something curated, not generated.

### The Design Checklist

Before shipping any layout or component, run through these four questions:

1. **Does this feel curated?** If you replaced the content with placeholder text, would the layout still feel intentional — or would it collapse into a generic template?
2. **Is there exactly one focal point?** Every section should have a single dominant element (a heading, an image, a CTA). If two things compete equally, one needs to yield.
3. **Does the spacing breathe without wasting space?** Tight enough to feel editorial, generous enough that nothing crowds. `space-y-5` is the default rhythm — deviate only with reason.
4. **Could a guest use this on their phone, mid-walk?** Every section must be readable and tappable at 375px width without horizontal scrolling.

### Image Escape Pattern

Images that break their grid container create movement. Use `negative margin` or `absolute` positioning to let a photograph extend beyond its column:

```html
<!-- Image that bleeds past its grid cell -->
<figure class="relative -mx-5 overflow-hidden rounded-2xl md:-mx-8 lg:mx-0">
  <image src="{...}" class="media-lift h-[20rem] w-full object-cover" />
</figure>

<!-- Image that overlaps a surface boundary -->
<div class="relative">
  <image
    src="{...}"
    class="media-lift h-[22rem] w-full rounded-2xl object-cover lg:relative lg:z-10 lg:-mb-12"
  />
</div>
```

The key: the image must look _placed_ by a designer, not _clipped_ by a container.

---

## 2. Colour: The Spice-Toned Palette

The palette moves from the cool shadow of a historic pub into the heat of the Kathmandu Valley. It is weighted toward depth, with warmth deployed as punctuation — not wallpaper.

---

### Foundation — British Pub

| Token                 | Hex       | Contrast on `#ffffff` | Character                                         |
| --------------------- | --------- | --------------------- | ------------------------------------------------- |
| `primary`             | `#061b0e` | 16.8:1 ✅             | Deep Forest Green — aged woodwork, billiard cloth |
| `primary_container`   | `#1b3022` | 13.4:1 ✅             | Forest Canopy — the weight behind the bar         |
| `secondary`           | `#af2b3e` | 4.6:1 ✅ (large text) | Rich Burgundy — leather snugs, vintage ale        |
| `secondary_container` | `#2d0a10` | 15.9:1 ✅             | Dark Wine — the shadow at the bottom of the glass |

> ⚠️ `secondary` at 4.6:1 passes WCAG AA for large text (≥18px / bold ≥14px) but not for body text. Pair only with white or `surface_container_lowest` backgrounds. For small text on light surfaces, use `primary` or `on_background` instead.

### Infusion — Nepalese Soul

| Token                   | Hex       | Contrast on `#2a1e00` | Character                                                            |
| ----------------------- | --------- | --------------------- | -------------------------------------------------------------------- |
| `tertiary`              | `#d4a017` | 6.2:1 ✅              | Turmeric Saffron — the defining accent; spice tins, temple marigolds |
| `tertiary_container`    | `#2a1e00` | — (bg)                | Dark Ground — deep umber, like scorched earth                        |
| `on_tertiary_container` | `#f5d06b` | 8.9:1 ✅              | Marigold — the lit-up version of saffron                             |
| `tertiary_fixed_dim`    | `#a87912` | 4.5:1 ✅ (large)      | Aged Saffron — for hover states and secondary saffron contexts       |

### Surfaces & Semantics

| Token                       | Hex       | Contrast (`on_background`) | Usage                                               |
| --------------------------- | --------- | -------------------------- | --------------------------------------------------- |
| `surface`                   | `#f9f6f1` | 15.6:1 ✅                  | Page background — warm off-white, like linen        |
| `surface_container_low`     | `#f0ebe3` | 14.4:1 ✅                  | Section backgrounds, card bases                     |
| `surface_container_lowest`  | `#ffffff` | 16.5:1 ✅                  | The highest card surface — pure white against linen |
| `surface_container_highest` | `#e4ddd4` | 12.1:1 ✅                  | Input wells, subdued containers                     |
| `on_background`             | `#1b1c1c` | — (text)                   | All body text — never pure black                    |
| `on_surface`                | `#3a3635` | 9.7:1 ✅                   | Secondary text                                      |
| `outline_variant`           | `#c4bdb5` | —                          | Ghost border fallback (use at 15% opacity only)     |

---

### Three Colour Principles

**Surface transitions over lines.** We define section boundaries through background-colour shifts — a `surface_container_low` section placed against `surface` — rather than 1px borders. The shift is felt, not drawn. Borders fragment the page into boxes; surface transitions create a continuous reading surface.

**Saffron is energy, not action.** Saffron (`tertiary`, `#d4a017`) is reserved for decorative accents, hover highlights, and editorial breaks. It punctuates; it does not command. Burgundy (`secondary`) is the only action colour. Keeping these roles separate means a guest always knows what is tappable and what is atmospheric.

**Frosted glass for overlays.** Floating overlays use `surface` at 85% opacity with `backdrop-filter: blur(20px)` — frosted glass over dark oak. This keeps the underlying content present without competing with the overlay.

---

### Colour As Signal

| Purpose                    | Colour                                               | Token                                        |
| -------------------------- | ---------------------------------------------------- | -------------------------------------------- |
| Primary action (Book, Buy) | Burgundy                                             | `secondary` `#af2b3e`                        |
| Decorative accent, energy  | Saffron                                              | `tertiary` `#d4a017`                         |
| Spicy dietary chip         | Saffron tint                                         | `tertiary_fixed_dim` on `tertiary_container` |
| Vegetarian dietary chip    | Green tint                                           | `primary_fixed` `#d0e9d4`                    |
| Warning / allergen (nuts)  | Amber                                                | `#f5d06b` on `#2a1e00`                       |
| All body text              | Near-black                                           | `on_background` `#1b1c1c`                    |
| Destructive / error        | Use sparingly; `secondary_container` bg + light text | —                                            |

---

## 3. Typography: Two Eras, One Voice

Typography does the structural work that decoration cannot. The pairing is a deliberate collision: broadsheet authority against geometric precision.

### Newsreader — Display & Headlines

A robust, high-contrast serif. Use `display-lg` (3.5rem) and `headline-lg` (2rem) as anchors — they should feel like the masthead of a premium food magazine. Apply slightly increased letter-spacing on `headline-sm` (0.02em) to give smaller headings room to breathe.

### Manrope — Body & UI

A clean geometric sans-serif providing the modern counterpoint to Newsreader's historical weight. All functional text: navigation labels, body copy, chips, input fields, metadata.

### Hierarchy in Practice

| Role                 | Size                 | Weight     | Colour                  | Font                               |
| -------------------- | -------------------- | ---------- | ----------------------- | ---------------------------------- |
| Page title / hero    | `display-lg` 3.5rem  | 400        | `on_background`         | Newsreader                         |
| Section heading      | `headline-lg` 2rem   | 400        | `on_background`         | Newsreader                         |
| Menu item name       | `title-md` 1.125rem  | 600        | `secondary` `#af2b3e`   | Manrope                            |
| Body copy            | `body-md` 1rem       | 400        | `on_background`         | Manrope                            |
| Navigation label     | `label-md` 0.875rem  | 500        | `on_background`         | Manrope, uppercase, 0.1rem spacing |
| Editorial pull-quote | `headline-sm` 1.5rem | 400 italic | `on_tertiary_container` | Newsreader                         |
| Price                | `title-sm` 1rem      | 500        | `on_surface`            | Manrope                            |
| Dietary chip label   | `label-sm` 0.75rem   | 500        | Chip-specific           | Manrope                            |

Burgundy on forest green for menu item names creates immediate visual hierarchy without relying on scale alone — the colour difference reads before the type does.

---

## 4. Depth & Elevation: Stacked Paper

Depth is tonal, not shadowed. We are stacking sheets of fine paper on a linen cloth, not suspending plastic cards in mid-air.

### The Layering Principle

Elevation is created by moving through surface tiers:

```
surface_container_lowest #ffffff     ← highest card (menus, modals)
surface_container_low    #f0ebe3     ← mid card (featured sections)
surface                  #f9f6f1     ← page background
```

A card placed on the tier below it reads as lifted — naturally, without a shadow in sight.

### Ambient Shadows

Lightweight ambient shadows are used on standalone cards (review cards, detail cards) to give gentle lift without breaking the paper metaphor:

```css
/* Card-level lift */
box-shadow: 0px 10px 28px rgba(27, 28, 28, 0.05);

/* Surface-frame (heavier containers) */
box-shadow: 0px 18px 48px rgba(27, 28, 28, 0.07);
```

The shadow colour is a tint of `on_surface`, not black. It behaves like natural light.

### The Ghost Border Fallback

When a border is required for accessibility, use `outline_variant` at **15% opacity**. A whisper of structure — invisible at a glance, present under scrutiny.

### Texture Overlay

Apply a 2% opacity noise texture over all `surface` areas. This single detail transforms a screen from glass to paper.

---

## 5. Layout Patterns

### Breakpoints

| Token     | Width          | Usage                                         |
| --------- | -------------- | --------------------------------------------- |
| `sm`      | 640px          | Two-column card grids begin                   |
| `md`      | 768px          | Header rows go horizontal, padding increases  |
| `lg`      | 1024px         | Full desktop layout, multi-column grids       |
| `xl`      | 1280px         | Wide content grids (4-col), hero enhancements |
| Max shell | 84rem (1344px) | `.section-shell` max-width                    |

All layouts are mobile-first. Components stack vertically below `md` and arrange horizontally above it.

### Section Anatomy

Every content section follows the same compact structure:

```
<section py-10 md:py-14 lg:py-16>
  <div section-shell space-y-5>
    [Header row]        — heading + CTA side-by-side on md+
    [Content]           — full-width grids, cards, media
  </div>
</section>
```

**Header row pattern** — heading and actions sit side-by-side on desktop, stack on mobile:

```html
<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
  <SectionHeading ... />
  <div class="shrink-0">
    <SiteActionCard ... />
  </div>
</div>
```

### Section Spacing

| Class            | Padding                                                  | Usage                                             |
| ---------------- | -------------------------------------------------------- | ------------------------------------------------- |
| `.page-section`  | `py-10 md:py-14 lg:py-16`                                | Standard content sections                         |
| `.section-shell` | `mx-auto max-w-[84rem] px-5 sm:px-6 md:px-8`             | Horizontal container                              |
| Section inner    | `space-y-5`                                              | Vertical rhythm between header and content blocks |
| Grid gaps        | `gap-4` for card grids, `gap-px` for seamless tile grids | —                                                 |

### Surface Panes

| Class            | Padding                                 | Usage                               |
| ---------------- | --------------------------------------- | ----------------------------------- |
| `.surface-pane`  | `px-5 py-5 md:px-6 md:py-6`             | Content cells inside surface-frames |
| `.surface-frame` | `rounded-[2rem]` + ambient shadow       | Container for grouped panes         |
| Standalone cards | `rounded-2xl px-5 py-5 md:px-6 md:py-6` | Individual detail cards             |

### Card Grids

Content cards use `rounded-2xl` corners and tight padding. Two styles:

**Seamless tile grid** — cells separated by 1px gaps with alternating backgrounds:

```html
<div
  class="grid gap-px overflow-hidden rounded-2xl bg-[rgba(196,189,181,0.22)] sm:grid-cols-2"
>
  <div class="bg-[var(--color-surface-lowest)] px-5 py-5">...</div>
  <div class="surface-pane-muted px-5 py-5">...</div>
</div>
```

**Spaced card grid** — independent cards with ambient shadow:

```html
<div class="grid gap-4 md:grid-cols-3">
  <div
    class="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 shadow-[0px_10px_28px_rgba(27,28,28,0.05)]"
  >
    ...
  </div>
</div>
```

### PageSignoff

The dark signoff section uses a compact header-row layout:

- Heading + CTA sit side-by-side on desktop
- Night panel with details sits below at `p-5 md:p-6` with `space-y-4` inner spacing
- Section padding: `py-10 md:py-14 lg:py-16`

### Review Marquee

Guest review cards scroll horizontally with infinite animation. Cards are compact:

- `w-[18rem] md:w-[20rem]`, `rounded-2xl`, `px-5 py-5 md:px-6 md:py-6`
- Avatar (36px), name + guest type, and stars sit inline in a single row
- Focus tags use small pills: `px-2.5 py-0.5 text-[0.65rem]`
- No "Google review" badge or "Shared by a guest" label — keep it minimal

---

## 6. Components

### Buttons

**Primary CTA** — `secondary` (`#af2b3e`) background, `#ffffff` text, `rounded-full`. Burgundy is the action colour.

```css
background: #af2b3e;
color: #ffffff;
border-radius: 9999px;
padding: 0.625rem 1.25rem;
font-family: Manrope;
font-weight: 600;
```

**Secondary CTA** — `surface` background, ghost border at 15% opacity, `primary` text. Quiet; never competing.

**Saffron Accent Button** — reserved for seasonal promotions or "Featured" moments only. `tertiary_container` (`#2a1e00`) background with `on_tertiary_container` (`#f5d06b`) text.

---

### Menu Layouts

Vertical rhythm is created by `Spacing 4` (1rem) alone — whitespace is the separator. We avoid rule lines between menu items because the spacing and colour hierarchy already establish clear groupings.

Food photography lives in large, slightly offset containers with `rounded-2xl` corners. Images break column boundaries deliberately (see §1 Image Escape Pattern).

Menu item structure:

```
[Item name]     — title-md, secondary (Burgundy)
[Description]   — body-sm, on_surface (muted)
[Price]         — title-sm, on_surface, right-aligned
[Dietary chips] — label-sm, pill-shaped, per token below
```

---

### Navigation

Minimalist. `label-md`, uppercase, `0.1rem` letter-spacing, `on_background` colour. If an item does not survive this treatment, it belongs in the full-screen overlay, not the top bar.

### Navigation Overlay

The overlay is a full-viewport experience, not a dropdown.

| Property        | Value                                                              |
| --------------- | ------------------------------------------------------------------ |
| Background      | `primary` `#061b0e`                                                |
| Link style      | Newsreader, `headline-lg` (2rem), `#ffffff`                        |
| Hover state     | `tertiary` `#d4a017` — saffron is used here as an energy accent    |
| Entry animation | Fade from `opacity: 0` over 250ms, links stagger at 40ms intervals |
| Exit animation  | Reverse fade, 200ms                                                |
| Close target    | Full-screen tap or explicit close button, min 44×44px              |

The moment a guest opens the nav overlay, they should feel they have stepped inside the pub.

---

### Input Fields

| State   | Background                            | Border                                          |
| ------- | ------------------------------------- | ----------------------------------------------- |
| Default | `surface_container_highest` `#e4ddd4` | None                                            |
| Focus   | `surface_container_lowest` `#ffffff`  | Ghost border, `primary` green, 15% opacity      |
| Error   | `surface_container_highest`           | Ghost border, `secondary` burgundy, 20% opacity |

---

### Dietary Chips

Pill-shaped (`border-radius: 9999px`), compact, precise.

| Type          | Role        | Background | Text colour | Token reference                                |
| ------------- | ----------- | ---------- | ----------- | ---------------------------------------------- |
| Spicy         | Flavour     | `#2a1e00`  | `#f5d06b`   | `tertiary_container` / `on_tertiary_container` |
| Vegetarian    | Dietary     | `#d0e9d4`  | `#1b3022`   | `primary_fixed` / `primary_container`          |
| Vegan         | Dietary     | `#b8dfc0`  | `#061b0e`   | —                                              |
| Contains Nuts | ⚠️ Allergen | `#92400e`  | `#ffffff`   | Warning semantic — not saffron                 |
| Gluten-Free   | Dietary     | `#e4ddd4`  | `#3a3635`   | `surface_container_highest` / `on_surface`     |

> **Nuts chip clarity.** The "Contains Nuts" chip uses a distinct amber-brown (`#92400e`) with white text to signal a safety concern, not a flavour note. It must never share the saffron palette used for decorative energy — guests scanning for allergens need instant visual separation from flavour indicators.

These chips are where the Nepalese palette lives in the detail — the last thing a viewer notices, and the thing that confirms the system was thought through entirely.

---

### Editorial Breaks

Interrupt long content with a full-width Newsreader quote in `tertiary_container` (`#2a1e00`) background, `on_tertiary_container` (`#f5d06b`) text, generous vertical padding (`Spacing 10`). This is the only time saffron takes over an entire surface.

---

## 7. Principles

### Follow

- **Keep sections compact.** `py-10 md:py-14 lg:py-16` is the ceiling. Excessive vertical padding dilutes editorial impact — every section should feel like a considered page spread, not a presentation slide with filler margins.
- **Put heading and CTA on the same row.** Use `md:flex-row md:items-end md:justify-between` — it reduces vertical height and feels intentional.
- **Use full-width content below headers.** Cards and grids take the full `section-shell` width. Content reads better when it is not crammed into a narrow column beside a sidebar.
- **Use editorial breaks for pacing.** A full-width Newsreader quote in saffron mid-page is pacing, not decoration.
- **Use colour functionally.** Burgundy commands. Saffron energises. Green grounds. Swapping these roles confuses the visual hierarchy.
- **Let images escape containers.** A food photograph that breaks its grid boundary creates movement and signals craft (see §1 for annotated examples).
- **Use surface transitions for depth.** The linen-to-paper layering system creates elevation without shadows. Surface tiers carry the visual weight that borders and rules carry in lesser systems.

### Avoid

- **Pure black (`#000000`).** All text uses `on_background` (`#1b1c1c`). The 0.6% warmth shift is invisible consciously but keeps the palette cohesive under all lighting.
- **Sticky split layouts.** The old two-column sidebar pattern created excessive white space and forced content into narrow columns. Use compact stacked sections instead.
- **1px dividers between sections.** Surface-colour transitions already define boundaries. Adding a line doubles the signal and breaks the paper metaphor.
- **Heavy drop shadows.** Use only the two defined ambient shadow values. Anything stronger makes the design feel like floating cards rather than stacked paper.
- **90-degree corners on containers.** `rounded-2xl` for cards and `rounded-[2rem]` for frames echo the softened edges of a centuries-old building.
- **Saffron as an action colour.** Saffron is energy; burgundy is action. Using saffron on a tappable button confuses the signal.
- **Crowded navigation.** Restraint is the editorial character. Fewer links in the top bar means each one carries more weight.
- **Terracotta, peach, or the retired v1 palette.** The saffron family replaced them for clarity and brand owning.

---

## 8. Spacing Scale

| Token         | Value    | Usage                                                     |
| ------------- | -------- | --------------------------------------------------------- |
| `Spacing 1`   | 0.25rem  | Internal chip padding                                     |
| `Spacing 1.5` | 0.375rem | Tight tag/pill gaps                                       |
| `Spacing 2`   | 0.5rem   | Icon gaps, tight inline spacing                           |
| `Spacing 3`   | 0.75rem  | Card inner element spacing (tags to text, stars to name)  |
| `Spacing 4`   | 1rem     | Menu item vertical separation, grid gaps for card grids   |
| `Spacing 5`   | 1.25rem  | Section inner vertical rhythm (`space-y-5`), card padding |
| `Spacing 6`   | 1.5rem   | Grid gaps between columns, card padding (md+)             |
| `Spacing 10`  | 2.5rem   | Section vertical padding (mobile)                         |
| `Spacing 14`  | 3.5rem   | Section vertical padding (tablet)                         |
| `Spacing 16`  | 4rem     | Section vertical padding (desktop)                        |

---

## 9. Motion

This system is measured, not kinetic. Animation should feel like turning a page, not launching an app.

### Micro-interactions

- **Duration:** 200ms for hover and focus states. Nothing faster than 150ms.
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` — feels physical.
- **Hover states:** A `translateY(-2px)` lift on cards. A subtle background darken on buttons. Never a glow.
- **What to animate:** Opacity, transform (translateY, scale). Nothing else.

### Page Transitions

- **Duration:** 350ms for section entry.
- **Pattern:** Content fades in from `opacity: 0, translateY: 8px`. Staggered reveals for menu items (`animation-delay: n × 40ms`).

### Overlay & Drawer Transitions

| Element       | Entry                                           | Exit         | Duration      |
| ------------- | ----------------------------------------------- | ------------ | ------------- |
| Nav overlay   | Fade in `opacity: 0 → 1`, links stagger at 40ms | Reverse fade | 250ms / 200ms |
| Booking modal | Scale from `0.96` + fade                        | Reverse      | 300ms         |
| Cookie banner | `translateY(100%)` → `0`                        | Reverse      | 250ms         |

---

## Appendix: Changelog

### v3 — Compact & Considered

- Retired `StickySplitSection` across all pages. Replaced with compact stacked sections using heading + CTA side-by-side on desktop.
- Reduced `.page-section` padding from `py-16 md:py-24 lg:py-28` to `py-10 md:py-14 lg:py-16`.
- Reduced `.surface-pane` padding from `px-5 py-7 md:px-7 md:py-8` to `px-5 py-5 md:px-6 md:py-6`.
- Reduced `.night-panel` padding from `p-6 md:p-7` to `p-5 md:p-6`.
- Tightened grid gaps from `gap-8`/`gap-10` to `gap-4`/`gap-6`.
- Tightened inner component spacing from `space-y-6`/`space-y-7` to `space-y-5`.
- Redesigned guest reviews section: compact cards, inline stars, no sidebar.
- Redesigned PageSignoff component: header-row layout instead of two-column split.
- Added ambient shadows to standalone cards.
- Removed "Share your visit" section from reviews; "Read reviews" link visible on all screen sizes.

### v2 — The Curated Hearth

- Retired terracotta (`#e2725b`) and dusty peach (`#ffb4a5`). Replaced with turmeric saffron (`#d4a017`) family.
- Folded redundant dark claret tertiary into saffron family as dark ground tone.

---

_This system is built on tension — old against new, dark against warm, structured against asymmetric. Honour that tension in every decision. The moment the system feels uniform or safe, it has lost the thread._
