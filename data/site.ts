export interface NavItem {
  href: string
  label: string
}

export interface HighlightItem {
  title: string
  description: string
}

export interface InfoItem {
  label: string
  value: string
}

export interface OpeningHoursItem {
  label: string
  hours: string
}

export const siteName = "The Old School House"
export const siteDescriptor = "Traditional pub & Nepalese kitchen"
export const siteLocation = "Stony Stratford, Milton Keynes"
export const siteAddress =
  "London Road, Stony Stratford, Milton Keynes, MK11 1JA"
export const sitePhone = "01908 561936"
export const sitePhoneHref = "tel:01908561936"
export const siteEmail = "hellotheoldschoolhouse@gmail.com"
export const siteEmailHref = "mailto:hellotheoldschoolhouse@gmail.com"
export const mapHref =
  "https://www.google.com/maps/search/?api=1&query=The+Old+School+House+London+Road+Stony+Stratford+Milton+Keynes+MK11+1JA"

export const siteDescription =
  "Classic pub food and Nepalese cooking in the heart of Stony Stratford, with a front garden, private courtyard, live sport, private hire, and plenty to settle in for."

export const siteNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/find-us", label: "Find Us" },
  { href: "/book", label: "Book" },
]

export const heroSignals = [
  "Open Mon-Sun 10:00-00:30",
  "Front garden and private courtyard",
  "Classic pub food and Nepalese specials",
]

export const proofPoints = [
  "65 indoor covers",
  "60 outdoor covers",
  "Commercial trade kitchen",
  "Recently refurbished interiors",
  "Large single-bar layout",
  "Busy London Road position",
]

export const homeReasons: HighlightItem[] = [
  {
    title: "A proper pub base with more depth on the menu",
    description:
      "Come in for the pub favourites you know, then stay for momo, grills, and Nepalese dishes that make the menu feel a little more special.",
  },
  {
    title: "Character you can feel as soon as you step in",
    description:
      "Exposed brick, wooden floors, traditional detailing, and a layout designed to feel warm, inviting, and easy to settle into.",
  },
  {
    title: "Built for everyday trade as much as occasions",
    description:
      "From lunch, after-work drinks, and Sunday meals to sports nights, group bookings, and private celebrations, it is the sort of place you come back to often.",
  },
]

export const homeMenuHighlights: HighlightItem[] = [
  {
    title: "Momo, mixed grills, and signature curries",
    description:
      "The food direction leans on Nepalese favourites such as momo, Kathmandu tikka, goat curry, and sizzling grills alongside comforting pub staples.",
  },
  {
    title: "Pub classics that keep the local ritual alive",
    description:
      "Fish and chips, burgers, wraps, kids plates, and desserts give the menu enough familiarity for a casual pint stop or family supper.",
  },
  {
    title: "Drinks built around the bar, not hidden away",
    description:
      "Craft options, rotating guest ale, easy-drinking wines, premium spirits, coffee, and teas give you plenty of reasons to stop in at any time of day.",
  },
]

export const atmosphereMoments: HighlightItem[] = [
  {
    title: "Front garden for brighter afternoons",
    description:
      "The hard-surface front garden with wooden seating is one of the site’s strongest advantages and keeps the pub visible to passing traffic.",
  },
  {
    title: "A bar that can shift from lunch to live sport",
    description:
      "The single-bar layout is designed for quick service, better flow, and an easy switch between dining, social drinks, and match-day energy.",
  },
  {
    title: "Corners for parties, tasting nights, and group dinners",
    description:
      "With indoor covers, outdoor seating, and open-plan bar space, the venue has room for functions without losing its local feel.",
  },
]

export const eventsHighlights: HighlightItem[] = [
  {
    title: "Private hire with indoor and outdoor flexibility",
    description:
      "Use the 65 indoor covers, front garden, and private courtyard for birthdays, sports socials, work drinks, and longer-table celebrations.",
  },
  {
    title: "Sport, theme nights, and community trade",
    description:
      "Live sport, theme nights, team meetups, and familiar local rituals all have a place here, whether you are dropping in for one round or staying for the evening.",
  },
  {
    title: "Tasting evenings that show off the kitchen",
    description:
      "Tasting evenings and kitchen-led nights give you another reason to come back when you fancy something a little different.",
  },
]

export const communityNotes: HighlightItem[] = [
  {
    title: "For family lunches and easy midweek suppers",
    description:
      "Easy lunches, relaxed suppers, and familiar favourites make it just as inviting for a casual meal as it is for a planned night out.",
  },
  {
    title: "For sports nights, group tables, and town-centre catchups",
    description:
      "The Old School House is positioned to feel more personal than a chain venue and more relaxed than a hotel dining room.",
  },
  {
    title: "For locals who want the ritual back",
    description:
      "The Old School House is made for the kind of return visits that turn a stop for one drink into a usual table, a favourite dish, or a regular Sunday plan.",
  },
]

export const bookingNotes = [
  "Phone and email booking routes are available now.",
  "For same-day plans, calling the pub is the quickest option.",
  "For parties, functions, and sports socials, use the events page or email the team directly.",
]

export const eventOccasions = [
  "Birthdays and family celebrations",
  "Work drinks and team socials",
  "Sports watch parties",
  "Quiz and theme nights",
  "Seasonal tasting evenings",
  "Local club and society meetups",
]

export const drinksHighlights = [
  "Rotating guest ale and premium draught range",
  "Craft beer and food-friendly wine selection",
  "Premium spirits including gins and single malts",
  "Coffee and artisanal teas for daytime trade",
]

export const visitDetails: InfoItem[] = [
  { label: "Address", value: siteAddress },
  { label: "Phone", value: sitePhone },
  { label: "Email", value: siteEmail },
  { label: "Licence", value: "Premises Licence No. 163000" },
]

export const arrivalNotes = [
  "You will find us on London Road, right in the heart of Stony Stratford.",
  "There is a small car park on site, with more parking around the town centre.",
  "We are close to Horsefair Green, the shops, and the main town-centre routes.",
  "If you are unsure of the easiest way in, give the pub a call and we will point you in the right direction.",
]

export const openingHours: OpeningHoursItem[] = [
  { label: "Monday to Sunday", hours: "10:00 - 00:30" },
  { label: "Christmas Eve", hours: "Until 01:30" },
  { label: "Boxing Day", hours: "Until 01:30" },
  { label: "New Year's Day", hours: "Until 01:30" },
  { label: "Bank holiday weekends", hours: "Fri-Mon until 01:30" },
  {
    label: "New Year's Eve",
    hours:
      "Continuous from the end of NYE hours through to New Year's Day hours",
  },
]

export const policyNotes = [
  "Challenge 25 is in operation for alcohol sales.",
  "Alcohol service is licensed daily from 10:00 to 00:00.",
  "Outside areas other than smoking points should not be used after 23:00.",
]

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteName,
  description: siteDescription,
  servesCuisine: ["British", "Nepalese"],
  telephone: sitePhone,
  email: siteEmail,
  address: {
    "@type": "PostalAddress",
    streetAddress: "London Road",
    addressLocality: "Stony Stratford",
    addressRegion: "Milton Keynes",
    postalCode: "MK11 1JA",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "00:30",
    },
  ],
}
