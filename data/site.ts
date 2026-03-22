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
  "Pub favourites, Nepalese cooking, live sport, and a warm welcome in the heart of Stony Stratford, with a front garden, private courtyard, and plenty of reasons to stay a little longer."

export const siteNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/find-us", label: "Find Us" },
  { href: "/book", label: "Book" },
]

export const heroSignals = [
  "Open daily from 10:00",
  "Front garden and private courtyard",
  "Sky Sports and TNT Sports",
]

export const proofPoints = [
  "Pub classics and Nepalese dishes",
  "Front garden seating",
  "Private courtyard",
  "Live sport",
  "Stony Stratford High Street",
  "Open daily from 10:00",
]

export const homeReasons: HighlightItem[] = [
  {
    title: "A proper pub, with more to discover on the menu",
    description:
      "Settle in for the pub favourites you know, then stay for momo, mixed grills, and Nepalese dishes that make the table feel a little more exciting.",
  },
  {
    title: "Warm, welcoming, and easy to settle into",
    description:
      "Exposed brick, wooden floors, and a characterful setting give the pub its charm, while the welcome stays relaxed and unfussy from first drink to last bite.",
  },
  {
    title: "Good food, good drinks, and good value",
    description:
      "Whether you are here for lunch, after-work drinks, Sunday plans, or a bigger get-together, the aim is simple: tasty food, a strong wet offer, and a place you feel good coming back to.",
  },
]

export const homeMenuHighlights: HighlightItem[] = [
  {
    title: "Momo, mixed grills, and house curries",
    description:
      "Expect Nepalese favourites like momo, Kathmandu tikka, goat curry, and sizzling grills alongside the sort of dishes that suit an easy pub meal.",
  },
  {
    title: "Pub classics that keep things familiar",
    description:
      "Fish and chips, burgers, wraps, kids plates, and desserts keep the menu welcoming for everyone at the table, from quick lunches to family suppers.",
  },
  {
    title: "Drinks worth coming in for",
    description:
      "Rotating guest ale, craft options, easy-drinking wines, premium spirits, coffee, and teas mean there is as much reason to come in for the bar as there is for the food.",
  },
]

export const atmosphereMoments: HighlightItem[] = [
  {
    title: "Front garden for brighter afternoons",
    description:
      "The front garden with wooden seating is made for brighter afternoons, easy drinks, and the kind of stop-in that turns into another round.",
  },
  {
    title: "A bar that can shift from lunch to live sport",
    description:
      "A strong single-bar setup keeps service moving, whether you are here for lunch, a quick pint, or a bigger match-day crowd.",
  },
  {
    title: "Corners for parties, tasting nights, and group dinners",
    description:
      "With room inside, tables outside, and plenty of open-plan bar space, there is space for parties and group dinners without losing the feeling of a local.",
  },
]

export const eventsHighlights: HighlightItem[] = [
  {
    title: "Private hire with room to spread out",
    description:
      "Bring everyone together across the dining room, front garden, and private courtyard for birthdays, work drinks, and longer-table celebrations.",
  },
  {
    title: "Sport, theme nights, and community trade",
    description:
      "Live sport, theme nights, team meetups, and familiar local rituals all have a place here, whether you are dropping in for one round or staying for the full evening.",
  },
  {
    title: "Tasting nights and seasonal reasons to come back",
    description:
      "Tasting evenings and kitchen-led nights give you another excuse to gather the table when you fancy trying something new.",
  },
]

export const communityNotes: HighlightItem[] = [
  {
    title: "For family lunches and easy midweek meals",
    description:
      "Easy lunches, relaxed suppers, and familiar favourites make it just as inviting for a casual meal as it is for a planned evening out.",
  },
  {
    title: "For sports nights, group tables, and catch-ups in town",
    description:
      "It feels personal, relaxed, and easy to drop into, whether you are meeting friends for the match or finding somewhere everyone is happy to stay.",
  },
  {
    title: "For locals who want somewhere to return to",
    description:
      "The Old School House is made for the kind of return visits that turn one drink into a usual table, a favourite dish, or a regular Sunday plan.",
  },
]

export const bookingNotes = [
  "Calling the pub is the quickest way to sort a same-day table.",
  "Email works well for dinner plans, birthdays, and bigger group bookings.",
  "If you are planning a party, work drinks, or a sports social, we can help with that too.",
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
  "Rotating guest ale and a strong draught range",
  "Craft beer and wines chosen to sit easily with the food",
  "Premium spirits including gins and single malts",
  "Coffee and artisanal teas when you want to stay a little longer",
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
  "Outside areas other than smoking points close after 23:00.",
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
