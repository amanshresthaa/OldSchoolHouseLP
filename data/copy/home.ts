// ---------------------------------------------------------------------------
// data/copy/home.ts — Home page
// ---------------------------------------------------------------------------

// ── Home page ──────────────────────────────────────────────────────────────

export const homeMenuShowcase = [
  {
    title: "Momo",
    description:
      "One of the signature dishes planned for the full kitchen offer, with steamed dumplings, juicy filling, and bright chutney that should still give the menu a standout moment once food service returns.",
    alt: "Steamed momo dumplings with chutney served at The Old School House in Stony Stratford.",
    ctaLabel: "See menu preview",
  },
  {
    title: "Mixed grill",
    description:
      "A big-sharing favourite lined up for the kitchen menu, built around smoky char, sizzling plates, and the sort of centre-table order that gives the visit more range.",
    alt: "Mixed grill platter from the menu at The Old School House in Stony Stratford.",
    ctaLabel: "Preview what is coming",
  },
  {
    title: "Pub classics",
    description:
      "The wider food plan still runs from pub classics to Nepalese dishes, so you can get a feel for what is coming back once the kitchen is serving again.",
    alt: "Pub classics served at The Old School House in Stony Stratford.",
    ctaLabel: "Plan a return visit",
  },
]

export const homeMenuSectionCopy = {
  eyebrow: "Food menu preview",
  title:
    "We are serving drinks only for now while the kitchen menu gets ready.",
  description:
    "Use this preview to get a feel for the pub classics, Nepalese favourites, and house dishes planned for the full menu once food service returns.",
  guidanceLabel: "How to order",
  primaryCtaLabel: "See menu preview",
  primaryCtaHref: "/our-menus",
  secondaryCtaLabel: "Plan your visit",
  secondaryCtaHref: "/contact-us",
}

export const homeStoryFeature = {
  eyebrow: "Why choose us",
  title: "Traditional pub first. Nepalese kitchen as the standout difference.",
  description:
    "You can settle into a proper pub straight away for a round, live sport, and a warm local atmosphere, with the Nepalese kitchen still the standout difference that is set to return soon.",
  alt: "Pints being poured at the bar inside The Old School House pub in Stony Stratford.",
}

export const homeProofBarSectionCopy = {
  eyebrow: "At a glance",
  title:
    "A pub visit that already works for drinks, match days, and longer stays.",
  description:
    "The Old School House pairs a familiar pub feel with practical reasons to choose it right now, from flexible seating to outdoor space and a full food offer still to come.",
  highlightLabel: "Capacity",
  highlightValue: "125 covers",
  highlightNote:
    "65 inside and 60 outside, giving the pub room to flex between quieter meals and fuller nights.",
}

export const homeProofBarItems = [
  {
    title: "Recently refurbished",
    description:
      "Recent investment inside and out gives the pub a sharper first impression without losing its traditional character.",
  },
  {
    title: "125 covers in total",
    description:
      "With 65 covers inside and 60 outside, the venue works for quieter drinks, bigger tables, and sport-led nights that can roll on comfortably.",
  },
  {
    title: "Food menu returning soon",
    description:
      "The planned offer still runs from pub classics through to momo, curries, grills, and Sunday roast, giving people plenty to look forward to once the kitchen is back on.",
  },
  {
    title: "Front garden, courtyard, and small car park",
    description:
      "Outdoor seating, a private courtyard, and easier arrival all help the pub work for family visits, longer stays, and everyday trade.",
  },
  {
    title: "Sky Sports and TNT Sports",
    description:
      "The live sport offer sits inside a proper pub atmosphere, with room for match nights, team socials, and repeat local visits.",
  },
  {
    title: "Lapen Inns sustainability standards",
    description:
      "The Lapen Inns group’s BII Sustainability Champion Award adds another layer of trust to the way the pub is run.",
  },
] as const

export const homeReasonsSectionCopy = {
  eyebrow: "Why choose us",
  title:
    "A proper pub atmosphere first, then food that gives the table a reason to come back.",
  description:
    "The room already feels familiar from the first drink, and the food offer is set up to give the visit even more identity once service returns.",
  primaryCtaLabel: "Browse the menu",
  primaryCtaHref: "/our-menus",
  secondaryCtaLabel: "Plan a visit",
  secondaryCtaHref: "/contact-us",
}

export const homeAtmosphereTiles = [
  {
    href: "/about",
    eyebrow: "Inside the pub",
    title: "Traditional room, warm feel",
    description: "See the setting and character that shape the place.",
    alt: "Interior seating area inside The Old School House pub in Stony Stratford.",
  },
  {
    href: "/beer-garden-stony-stratford",
    eyebrow: "Outdoor spaces",
    title: "Front garden and courtyard",
    description:
      "Explore the outside seating for pints, catch-ups, and sunny rounds.",
    alt: "Exterior of The Old School House pub on London Road in Stony Stratford.",
  },
  {
    href: "/contact-us",
    eyebrow: "Capacity and flow",
    title: "Room to settle in",
    description: "Get the feel for the space before you arrive.",
    alt: "Another view of the indoor seating area at The Old School House pub in Stony Stratford.",
  },
]

export const homeAtmosphereSectionCopy = {
  eyebrow: "Atmosphere",
  title: "A pub that feels welcoming before the food even arrives.",
  description:
    "One strong first impression up front, then the practical details that help you picture the room, the outdoor spaces, and how the visit will flow.",
  exploreLabel: "Explore",
}

export const homeEventsFeature = {
  href: "/whats-on",
  eyebrow: "Repeat-visit reasons",
  title: "Sport, local teams, and themed nights",
  description:
    "The quickest way into match nights, local group use, tastings, and the occasions that turn the pub into a repeat stop.",
  alt: "Large-screen live sport setup inside The Old School House pub in Stony Stratford.",
}

export const homeEventsSectionCopy = {
  eyebrow: "What’s on",
  title:
    "From match days to local team socials, there is more than one reason to come back.",
  description:
    "Live sport, theme-led nights, tastings, and informal community occasions all give regulars more than one reason to return.",
  primaryActionLabel: "See what’s on",
  secondaryActionLabel: "Private hire",
}

export const homeVisitSectionCopy = {
  eyebrow: "Visit us",
  title:
    "Easy to reach for an after-work pint, a match-day round, or a later catch-up on London Road.",
  description:
    "A short walk from Stony Stratford High Street, with midday-to-late bar hours, straightforward parking, and quick route planning when you are on the move.",
  addressLabel: "Address",
  visitSignals: [
    {
      label: "Open daily",
      valueKey: "hours",
    },
    {
      label: "Parking",
      value: "Small car park on site",
    },
    {
      label: "In town",
      value: "A short walk from the High Street and Horsefair Green",
    },
  ],
  directionsLabel: "Get directions",
  callLabel: "Call the pub",
  visitGuideLabel: "See full visit guide",
}

export const homeInlineCtaCopy = {
  title: "Ready for a round?",
  description:
    "Head over for drinks now, then keep an eye out for the full kitchen offer returning soon.",
}

export const homeFaqSectionCopy = {
  eyebrow: "Before you visit",
  title: "A few quick answers before you head over.",
  description:
    "The quick questions you usually want settled before calling, dropping in, or making your way over.",
}
