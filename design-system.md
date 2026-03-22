# Design System: Editorial Heritage
### Version 2 — The Curated Hearth

---

## 1. Creative Direction

This is not a template. It is a considered dialogue between two worlds — the storied bones of a British pub and the aromatic heat of the Himalayas — given form through an **Editorial Heritage** aesthetic. Think high-end culinary journal meets handwritten recipe book: authoritative, warm, and unmistakably alive.

The guiding tension is intentional asymmetry against tonal depth. Layouts echo the physical experience of the Old School House: heavy oak (sturdy serifs) set against hand-painted spice tins (saffron and turmeric accents). Grid-breaking elements — a full-bleed photograph of spice-rubbed lamb escaping its container, a Newsreader pull-quote interrupting body copy — create the feeling of something curated, not generated.

**The Single Test.** Every placement decision should pass one question: *does this feel hand-picked for a boutique manor, or does it feel like a template?*

---

## 2. Colour: The Spice-Toned Palette

The palette moves from the cool shadow of a historic pub into the heat of the Kathmandu Valley. It is weighted toward depth, with warmth deployed as punctuation — not wallpaper.

> **What changed in v2:** Terracotta (`#e2725b`) and dusty peach (`#ffb4a5`) have been retired. They were warm but directionless. The new accent is a deep turmeric saffron — distinctly Nepalese, stunning against forest green, and far more ownable as a brand signal. The redundant dark claret tertiary has been folded into the saffron family as a dark ground tone.

---

### Foundation — British Pub

| Token | Hex | Character |
|---|---|---|
| `primary` | `#061b0e` | Deep Forest Green — aged woodwork, billiard cloth |
| `primary_container` | `#1b3022` | Forest Canopy — the weight behind the bar |
| `secondary` | `#af2b3e` | Rich Burgundy — leather snugs, vintage ale |
| `secondary_container` | `#2d0a10` | Dark Wine — the shadow at the bottom of the glass |

### Infusion — Nepalese Soul

| Token | Hex | Character |
|---|---|---|
| `tertiary` | `#d4a017` | Turmeric Saffron — the defining accent; spice tins, temple marigolds |
| `tertiary_container` | `#2a1e00` | Dark Ground — deep umber, like scorched earth |
| `on_tertiary_container` | `#f5d06b` | Marigold — the lit-up version of saffron |
| `tertiary_fixed_dim` | `#a87912` | Aged Saffron — for hover states and secondary saffron contexts |

### Surfaces & Semantics

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#f9f6f1` | Page background — warm off-white, like linen |
| `surface_container_low` | `#f0ebe3` | Section backgrounds, card bases |
| `surface_container_lowest` | `#ffffff` | The highest card surface — pure white against linen |
| `surface_container_highest` | `#e4ddd4` | Input wells, subdued containers |
| `on_background` | `#1b1c1c` | All body text — never pure black |
| `on_surface` | `#3a3635` | Secondary text |
| `outline_variant` | `#c4bdb5` | Ghost border fallback (use at 15% opacity only) |

---

### Three Inviolable Colour Rules

**The No-Line Rule.** 1px solid borders for sectioning are forbidden. Boundaries are defined through background transitions alone — a `surface_container_low` section placed directly against `surface`. The shift must be *felt*, not seen.

**The Saffron Rule.** Saffron (`tertiary`, `#d4a017`) is not an action colour — it is an *energy* colour. Use it for decorative accents, dietary chips, hover highlights, and editorial breaks. It punctuates; it does not command.

**The Glass & Gradient Rule.** Primary CTAs use a subtle gradient from `primary` → `primary_container` to prevent flatness. Floating overlays use `surface` at 85% opacity with `backdrop-filter: blur(20px)` — frosted glass over dark oak.

---

### Colour As Signal

| Purpose | Colour | Token |
|---|---|---|
| Primary action (Book, Buy) | Burgundy | `secondary` `#af2b3e` |
| Decorative accent, energy | Saffron | `tertiary` `#d4a017` |
| Spicy dietary chip | Saffron tint | `tertiary_fixed_dim` on `tertiary_container` |
| Vegetarian dietary chip | Green tint | `primary_fixed` `#d0e9d4` |
| All body text | Near-black | `on_background` `#1b1c1c` |
| Destructive / error | Use sparingly; `secondary_container` bg + light text | — |

---

## 3. Typography: Two Eras, One Voice

Typography here does the structural work that decoration is forbidden from doing. The pairing is a deliberate collision: broadsheet authority against geometric precision.

### Newsreader — Display & Headlines
A robust, high-contrast serif. Use `display-lg` (3.5rem) and `headline-lg` (2rem) as anchors — they should feel like the masthead of a premium food magazine. Apply slightly increased letter-spacing on `headline-sm` (0.02em) to give smaller headings room to breathe.

### Manrope — Body & UI
A clean geometric sans-serif providing the modern counterpoint to Newsreader's historical weight. All functional text: navigation labels, body copy, chips, input fields, metadata.

### Hierarchy in Practice

| Role | Size | Weight | Colour | Font |
|---|---|---|---|---|
| Page title / hero | `display-lg` 3.5rem | 400 | `on_background` | Newsreader |
| Section heading | `headline-lg` 2rem | 400 | `on_background` | Newsreader |
| Menu item name | `title-md` 1.125rem | 600 | `secondary` `#af2b3e` | Manrope |
| Body copy | `body-md` 1rem | 400 | `on_background` | Manrope |
| Navigation label | `label-md` 0.875rem | 500 | `on_background` | Manrope, uppercase, 0.1rem spacing |
| Editorial pull-quote | `headline-sm` 1.5rem | 400 italic | `on_tertiary_container` | Newsreader |
| Price | `title-sm` 1rem | 500 | `on_surface` | Manrope |
| Dietary chip label | `label-sm` 0.75rem | 500 | Chip-specific | Manrope |

**Burgundy on forest green for menu item names is non-negotiable.** It creates immediate visual hierarchy without relying on scale alone — the colour difference reads before the type does.

---

## 4. Depth & Elevation: Stacked Paper

Depth is tonal, not shadowed. We are stacking sheets of fine paper on a linen cloth, not suspending plastic cards in mid-air.

### The Layering Principle
Elevation is created by moving through surface tiers, never by adding shadows:

```
surface_container_lowest #ffffff     ← highest card (menus, modals)
surface_container_low    #f0ebe3     ← mid card (featured sections)
surface                  #f9f6f1     ← page background
```

A card placed on the tier below it reads as lifted — naturally, without a shadow in sight.

### Ambient Shadows (Modals Only)
For genuine physical separation — booking modals, full-screen overlays — one diffused shadow is permitted:

```css
box-shadow: 0px 12px 32px rgba(27, 28, 28, 0.06);
```

The shadow colour is a tint of `on_surface`, not black. It behaves like natural light.

### The Ghost Border Fallback
When a border is required for accessibility, use `outline_variant` at **15% opacity**. A whisper of structure — invisible at a glance, present under scrutiny.

### Texture Overlay
Apply a 2% opacity noise texture over all `surface` areas. This single detail transforms a screen from glass to paper.

---

## 5. Components

### Buttons

**Primary CTA** — `secondary` (`#af2b3e`) background, `#ffffff` text, `md` radius (0.375rem). Burgundy is the action colour.
```css
background: linear-gradient(135deg, #af2b3e, #8f1f2e);
color: #ffffff;
border-radius: 0.375rem;
padding: 0.75rem 1.5rem;
font-family: Manrope;
font-weight: 600;
letter-spacing: 0.01em;
```

**Secondary CTA** — `surface` background, ghost border at 15% opacity, `primary` text. Quiet; never competing.

**Saffron Accent Button** — reserved for seasonal promotions or "Featured" moments only. `tertiary_container` (`#2a1e00`) background with `on_tertiary_container` (`#f5d06b`) text.

---

### Menu Layouts

No dividers. Vertical rhythm is created by `Spacing 4` (1.4rem) alone — whitespace is the separator, not a rule.

Food photography lives in large, slightly offset containers with `xl` (0.75rem) rounded corners. Images break column boundaries deliberately.

Menu item structure:
```
[Item name]     — title-md, secondary (Burgundy)
[Description]   — body-sm, on_surface (muted)
[Price]         — title-sm, on_surface, right-aligned
[Dietary chips] — label-sm, pill-shaped, per token below
```

---

### Navigation

Minimalist. `label-md`, uppercase, `0.1rem` letter-spacing, `on_background` colour. If an item doesn't survive this treatment, it belongs in a full-screen overlay, not the top bar.

Full-screen overlay: `primary` (`#061b0e`) background, Newsreader headlines, `tertiary` (`#d4a017`) hover state. The moment a user opens the nav overlay, they should feel they've stepped inside the pub.

---

### Input Fields

| State | Background | Border |
|---|---|---|
| Default | `surface_container_highest` `#e4ddd4` | None |
| Focus | `surface_container_lowest` `#ffffff` | Ghost border, `primary` green, 15% opacity |
| Error | `surface_container_highest` | Ghost border, `secondary` burgundy, 20% opacity |

---

### Dietary Chips
Pill-shaped (`border-radius: 9999px`), compact, precise.

| Type | Background | Text colour | Token reference |
|---|---|---|---|
| Spicy | `#2a1e00` | `#f5d06b` | `tertiary_container` / `on_tertiary_container` |
| Vegetarian | `#d0e9d4` | `#1b3022` | `primary_fixed` / `primary_container` |
| Vegan | `#b8dfc0` | `#061b0e` | — |
| Contains Nuts | `#f5d06b` | `#2a1e00` | `on_tertiary_container` / `tertiary_container` |
| Gluten-Free | `#e4ddd4` | `#3a3635` | `surface_container_highest` / `on_surface` |

These chips are where the Nepalese palette lives in the detail — the last thing a viewer notices, and the thing that confirms the system was thought through entirely.

---

### Editorial Breaks
Interrupt long content with a full-width Newsreader quote in `tertiary_container` (`#2a1e00`) background, `on_tertiary_container` (`#f5d06b`) text, generous vertical padding (`Spacing 12`). This is the only time saffron takes over an entire surface.

---

## 6. Do's & Don'ts

### Do
- **Embrace negative space.** `Spacing 16` and `Spacing 20` are not empty — they are the breath that makes the typography premium.
- **Use editorial breaks.** A full-width Newsreader quote in saffron mid-page is pacing, not decoration.
- **Use colour functionally.** Burgundy commands. Saffron energises. Green grounds. Never swap these roles.
- **Let images escape containers.** A food photograph that breaks its grid boundary creates movement and signals craft.
- **Stack surface tiers, not shadows.** The linen-to-paper transition is the elevation system.

### Don't
- **Never use pure black (#000000).** All text uses `on_background` (`#1b1c1c`). The warmth matters.
- **Never use 1px dividers or heavy drop shadows.** Both shatter the illusion.
- **Never use 90-degree corners on containers.** The `md` and `lg` radius scale is non-negotiable — it echoes the softened corners of a centuries-old building.
- **Never use saffron as an action colour.** Saffron energises; burgundy commands. Swapping them breaks the system's logic.
- **Never overcrowd the navigation.** Restraint is not a limitation; it is the editorial character.
- **Never use terracotta, peach, or the retired palette.** The saffron family replaced them for a reason.

---

## 7. Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `Spacing 1` | 0.25rem | Internal chip padding |
| `Spacing 2` | 0.5rem | Icon gaps, tight inline spacing |
| `Spacing 4` | 1rem | Menu item vertical separation |
| `Spacing 6` | 1.5rem | Component internal padding |
| `Spacing 8` | 2rem | Section padding, card padding |
| `Spacing 12` | 3rem | Editorial break vertical padding |
| `Spacing 16` | 4rem | Section vertical margins |
| `Spacing 20` | 5rem | Hero vertical padding |

---

## 8. Motion

This system is measured, not kinetic. Animation should feel like turning a page, not launching an app.

- **Duration:** 200ms for micro-interactions (hover, focus). 350ms for transitions (page entry, modal open). Nothing faster than 150ms.
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` — the material standard. Feels physical.
- **What to animate:** Opacity, transform (translateY, scale). Nothing else.
- **Hover states:** A `2px translateY(-2px)` lift on cards. A subtle background darken on buttons. Never a glow.
- **Page transitions:** Content fades in from `opacity: 0, translateY: 8px`. Staggered reveals for menu items (`animation-delay: n × 40ms`).

---

*This system is built on tension — old against new, dark against warm, structured against asymmetric. Honour that tension in every decision. The moment the system feels uniform or safe, it has lost the thread.*
