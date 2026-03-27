# Design System: Editorial Heritage

### Version 3 — Compact & Considered

---

## 1. Creative Direction

This system is a considered dialogue between two worlds: the storied bones of a British pub and the aromatic heat of the Himalayas, given form through an editorial aesthetic that feels authoritative, warm, and unmistakably alive.

The guiding tension is intentional asymmetry against tonal depth. Layouts should echo the physical experience of the Old School House: heavy oak and rooted tradition set against hand-painted spice tins, saffron accents, and food-led energy. Grid-breaking moments, especially with photography, should feel curated rather than generated.

### The Design Checklist

Before shipping any layout or component, ask:

1. Does this feel curated? If the content became placeholder copy, would the layout still feel intentional?
2. Is there exactly one focal point? Every section should have one dominant element.
3. Does the spacing breathe without wasting space? `space-y-5` is the default editorial rhythm.
4. Could a guest use this on their phone, mid-walk? Every section must read and tap cleanly at 375px.

### Image Escape Pattern

Images should occasionally break their containers to create movement:

```html
<figure class="relative -mx-5 overflow-hidden rounded-2xl md:-mx-8 lg:mx-0">
  <img src="{...}" class="media-lift h-[20rem] w-full object-cover" />
</figure>
```

```html
<div class="relative">
  <img
    src="{...}"
    class="media-lift h-[22rem] w-full rounded-2xl object-cover lg:relative lg:z-10 lg:-mb-12"
  />
</div>
```

The image must feel placed by a designer, not clipped by a container.

---

## 2. Colour: The Spice-Toned Palette

The palette moves from the cool shadow of a historic pub into the heat of the Kathmandu Valley. It is weighted toward depth, with warmth used as punctuation rather than wallpaper.

### Foundation — British Pub

| Token                 | Hex       | Contrast on `#ffffff` | Character                                         |
| --------------------- | --------- | --------------------- | ------------------------------------------------- |
| `primary`             | `#061b0e` | 16.8:1 ✅             | Deep Forest Green — aged woodwork, billiard cloth |
| `primary_container`   | `#1b3022` | 13.4:1 ✅             | Forest Canopy — weight behind the bar             |
| `secondary`           | `#af2b3e` | 4.6:1 ✅ large text   | Rich Burgundy — leather snugs, vintage ale        |
| `secondary_container` | `#2d0a10` | 15.9:1 ✅             | Dark Wine — shadow at the bottom of the glass     |

### Infusion — Nepalese Soul

| Token                   | Hex       | Contrast on `#2a1e00` | Character                              |
| ----------------------- | --------- | --------------------- | -------------------------------------- |
| `tertiary`              | `#d4a017` | 6.2:1 ✅              | Turmeric Saffron — defining accent     |
| `tertiary_container`    | `#2a1e00` | —                     | Dark Ground — scorched umber           |
| `on_tertiary_container` | `#f5d06b` | 8.9:1 ✅              | Marigold — lit saffron                 |
| `tertiary_fixed_dim`    | `#a87912` | 4.5:1 ✅ large text   | Aged Saffron — restrained accent state |

### Surfaces & Semantics

| Token                       | Hex       | Usage                               |
| --------------------------- | --------- | ----------------------------------- |
| `surface`                   | `#f9f6f1` | Page background — linen off-white   |
| `surface_container_low`     | `#f0ebe3` | Section backgrounds, muted surfaces |
| `surface_container_lowest`  | `#ffffff` | Highest card surface                |
| `surface_container_highest` | `#e4ddd4` | Input wells, subdued containers     |
| `on_background`             | `#1b1c1c` | All body text — never pure black    |
| `on_surface`                | `#3a3635` | Supporting copy                     |
| `outline_variant`           | `#c4bdb5` | Ghost border fallback only          |

### Three Colour Principles

- Surface transitions over lines. Use background shifts between `surface` and `surface_container_low` instead of section dividers.
- Saffron is energy, not action. Burgundy commands. Saffron accents, highlights, and editorial pacing.
- Frosted glass for overlays. Floating overlays use the light surface family with blur, not hard blocks.

### Colour As Signal

| Purpose           | Colour              | Token                                          |
| ----------------- | ------------------- | ---------------------------------------------- |
| Primary action    | Burgundy            | `secondary`                                    |
| Decorative accent | Saffron             | `tertiary`                                     |
| Spicy chip        | Dark saffron ground | `tertiary_container` + `on_tertiary_container` |
| Vegetarian chip   | Green tint          | `#d0e9d4` + `#1b3022`                          |
| Allergen warning  | Amber-brown         | `#92400e` + `#ffffff`                          |
| Body text         | Near-black          | `on_background`                                |

---

## 3. Typography: Two Eras, One Voice

Typography does the structural work that decoration cannot. The pairing is deliberate: broadsheet authority against geometric precision.

### Newsreader — Display & Headlines

Use for page heroes, section titles, editorial breaks, and high-value moments.

| Role            | Size     | Weight     | Tracking  | Colour                  |
| --------------- | -------- | ---------- | --------- | ----------------------- |
| Page hero       | `3.5rem` | 400        | `-0.03em` | `on_background`         |
| Section heading | `2rem`   | 400        | `-0.02em` | `on_background`         |
| Pull quote      | `1.5rem` | 400 italic | default   | `on_tertiary_container` |

### Manrope — Body & UI

Use for body copy, navigation, chips, prices, labels, and controls.

| Role           | Size       | Weight | Style                        |
| -------------- | ---------- | ------ | ---------------------------- |
| Body copy      | `1rem`     | 400    | `line-height: 1.65`          |
| Navigation     | `0.875rem` | 500    | uppercase, `0.1rem` tracking |
| Menu item name | `1.125rem` | 600    | burgundy                     |
| Price          | `1rem`     | 500    | `on_surface`                 |
| Chip label     | `0.75rem`  | 500    | pill-sized, compact          |

---

## 4. Depth & Elevation: Stacked Paper

Depth is tonal, not decorative. We are stacking sheets of paper on linen, not floating plastic cards in space.

### The Layering Principle

```text
surface_container_lowest  #ffffff   ← highest card surface
surface_container_low     #f0ebe3   ← muted surface / section tier
surface                   #f9f6f1   ← page background
```

A card placed on the tier below it should read as lifted naturally.

### Ambient Shadows

Use only these two values:

```css
/* Card-level lift */
box-shadow: 0 10px 28px rgba(27, 28, 28, 0.05);

/* Heavy container / frame */
box-shadow: 0 18px 48px rgba(27, 28, 28, 0.07);
```

### Ghost Border Fallback

When a border is needed for accessibility, use `outline_variant` at 15% opacity. It should be felt, not announced.

### Texture Overlay

Apply a 2% opacity noise texture over `surface` areas to preserve the paper illusion.

---

## 5. Layout Patterns

### Breakpoints

| Token     | Width    | Usage                                 |
| --------- | -------- | ------------------------------------- |
| `sm`      | `640px`  | Two-column card grids begin           |
| `md`      | `768px`  | Header rows go horizontal             |
| `lg`      | `1024px` | Full desktop layout                   |
| `xl`      | `1280px` | Wide content grids and hero expansion |
| Max shell | `84rem`  | `.section-shell`                      |

### Section Anatomy

Every content section follows the same compact structure:

```html
<section class="page-section">
  <div class="section-shell space-y-5">
    <div
      class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
    >
      <SectionHeading ... />
      <div class="shrink-0">...</div>
    </div>
    <div>...</div>
  </div>
</section>
```

### Section Spacing

| Class            | Value                                        | Usage                     |
| ---------------- | -------------------------------------------- | ------------------------- |
| `.page-section`  | `py-10 md:py-14 lg:py-16`                    | Standard section rhythm   |
| `.section-shell` | `mx-auto max-w-[84rem] px-5 sm:px-6 md:px-8` | Shell container           |
| Inner rhythm     | `space-y-5`                                  | Header to content spacing |
| Standard gaps    | `gap-4`                                      | Cards and content grids   |

### Surface Primitives

| Primitive              | Usage                                 |
| ---------------------- | ------------------------------------- |
| `.surface-panel`       | Standard standalone card              |
| `.surface-panel-muted` | Muted card / secondary panel          |
| `.surface-frame`       | Heavier grouped container             |
| `.surface-pane`        | Inner cell padding for framed content |

Standalone cards should prefer `rounded-2xl` rather than more ornamental radii.

### PageSignoff

The dark signoff section uses a compact header-row layout:

- Heading and actions align side-by-side on desktop
- Supporting content sits below in a night-panel treatment
- Section padding stays within the standard compact rhythm

### Review Cards

Guest reviews are compact editorial cards:

- `max-w-[29rem]`
- Inline avatar, guest name, and guest type at the top
- Saffron stars
- No "Google review" badge
- Focus tags in muted pills, not loud chips

---

## 6. Components

### Eyebrow Pattern

Section and hero eyebrows should use an editorial line, not a floating label:

```html
<div class="eyebrow-row">
  <span class="eyebrow-line"></span>
  <p class="eyebrow">Section label</p>
</div>
```

Default colour is saffron. In dark contexts, use `on_tertiary_container` when stronger contrast is needed.

### Buttons

#### Primary CTA — Burgundy commands

- Background: `secondary`
- Text: white
- Shape: `rounded-full`
- Padding: `0.625rem 1.25rem`
- Shadow: `0 4px 16px rgba(175,43,62,0.25)`
- Hover: darken slightly, lift by `1px`

#### Secondary CTA — Quiet, never competing

- Background: `surface`
- Text: `primary`
- Ghost border at 15% opacity
- Shape: `rounded-full`

#### Dark Secondary CTA

For dark hero or overlay contexts:

- Background: white at low opacity
- Border: subtle white
- Text: white
- Shape: `rounded-full`

#### Ghost CTA

Text-led action only:

- No solid fill
- Burgundy text
- Optional soft burgundy tint on hover

#### Saffron CTA Rule

Saffron can highlight seasonal or editorial moments, but it is not the default action colour. Burgundy remains the main tap target language.

### Navigation

Top bar navigation is minimalist:

- Manrope
- `0.875rem`
- 500 weight
- Uppercase
- `0.1rem` tracking
- Default colour: `on_background`
- Hover: saffron
- Active: burgundy

The full-screen mobile overlay should feel like stepping into the pub:

- Background: deep forest green
- Links: large Newsreader headings
- Hover / active accent: saffron
- Blur: frosted, not harsh

### Input Fields

| State   | Background                  | Border                |
| ------- | --------------------------- | --------------------- |
| Default | `surface_container_highest` | none                  |
| Focus   | `surface_container_lowest`  | primary ghost border  |
| Error   | `surface_container_highest` | burgundy ghost border |

### Dietary Chips

All dietary chips are pill-shaped and compact.

| Type          | Background | Text      |
| ------------- | ---------- | --------- |
| Spicy         | `#2a1e00`  | `#f5d06b` |
| Vegetarian    | `#d0e9d4`  | `#1b3022` |
| Vegan         | `#b8dfc0`  | `#061b0e` |
| Contains Nuts | `#92400e`  | `#ffffff` |
| Gluten-Free   | `#e4ddd4`  | `#3a3635` |

The nuts chip must never reuse saffron styling. It is a safety signal, not a flavour note.

### Menu Items

Vertical rhythm comes from whitespace, not rules:

- Item name: Manrope 600, burgundy
- Description: body-small, muted
- Price: Manrope 500, `on_surface`
- Dietary chips: compact pills under description
- No divider lines between items unless a specific accessibility case requires one

### Editorial Breaks

Editorial breaks are the one place saffron can dominate the whole surface:

- Background: `tertiary_container`
- Text: `on_tertiary_container`
- Quote: Newsreader italic
- Use sparingly, for pacing long-form content

---

## 7. Principles

### Follow

- Keep sections compact. `py-10 md:py-14 lg:py-16` is the ceiling.
- Put heading and CTA on the same row on desktop.
- Let content use the full shell width below the header row.
- Use editorial breaks for pacing, not decoration.
- Burgundy commands. Saffron energises. Green grounds.
- Let select images escape containers to create movement.
- Use surface transitions for depth before reaching for lines or decoration.

### Avoid

- Pure black `#000000`
- Sticky split layouts
- 1px section dividers
- Heavy drop shadows outside the two defined values
- Sharp corners on major containers
- Saffron as a default action colour
- Overcrowded navigation
- Decorative colour that weakens the pub-first, editorial tone

---

## 8. Spacing Scale

| Token         | Value      | Usage                             |
| ------------- | ---------- | --------------------------------- |
| `Spacing 1`   | `0.25rem`  | Tight chip padding                |
| `Spacing 1.5` | `0.375rem` | Tag gaps                          |
| `Spacing 2`   | `0.5rem`   | Icon and inline spacing           |
| `Spacing 3`   | `0.75rem`  | Tight card internals              |
| `Spacing 4`   | `1rem`     | Standard grid gaps                |
| `Spacing 5`   | `1.25rem`  | Default editorial rhythm          |
| `Spacing 6`   | `1.5rem`   | Larger grid gaps                  |
| `Spacing 10`  | `2.5rem`   | Mobile section padding reference  |
| `Spacing 14`  | `3.5rem`   | Tablet section padding reference  |
| `Spacing 16`  | `4rem`     | Desktop section padding reference |

`space-y-5` remains the default vertical rhythm between stacked section elements.

---

## 9. Motion

Animation should feel like turning a page, not launching an app.

### Micro-interactions

- Duration: `200ms`
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Hover lift: `translateY(-1px)` or `translateY(-2px)` depending on scale
- Active state: subtle scale reduction
- Animate opacity and transform only

### Page Entry

- Duration: `350ms`
- Pattern: fade from `opacity: 0` and `translateY(8px)`
- Staggered content reveal is acceptable for layered hero or overlay content

### Overlay & Drawer Transitions

| Element       | Entry                    | Exit         | Duration        |
| ------------- | ------------------------ | ------------ | --------------- |
| Nav overlay   | Fade in, links staggered | Reverse fade | `250ms / 200ms` |
| Booking modal | Slight scale-up + fade   | Reverse      | `300ms`         |
| Cookie banner | Slide from bottom        | Reverse      | `250ms`         |

---

## Appendix: Changelog

### v3 — Compact & Considered

- Standardized the system around editorial line-eyebrows, pill CTAs, and tighter card geometry
- Reaffirmed burgundy as action and saffron as energy
- Standardized ambient shadow values for cards and frames
- Clarified review cards as compact editorial components
- Clarified navigation behaviour for both top bar and overlay states
- Locked the nuts chip to a dedicated warning colour
- Preserved the compact section rhythm and retired the older split-section pattern

---

This system is built on tension: old against new, dark against warm, structured against asymmetric. The moment it becomes safe or generic, it has lost the thread.
