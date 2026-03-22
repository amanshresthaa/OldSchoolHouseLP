export interface NavItem {
  href: string
  label: string
}

export interface HighlightItem {
  title: string
  description: string
}

export interface ProofPoint {
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

export interface GuestReview {
  name: string
  guestType: string
  focus: string[]
  summary: string
}

export interface LocalFaq {
  question: string
  answer: string
}

export const siteName = "The Old School House"
export const siteDescriptor = "Traditional pub & Nepalese kitchen"
export const siteLocation = "Stony Stratford, Milton Keynes"
export const siteAddress =
  "London Road, Stony Stratford, Milton Keynes, MK11 1JA"
export const siteUrl = "https://oldschoolhousestony.co.uk"
export const siteOgImage =
  "https://oldschoolhousestony.co.uk/wp-content/uploads/2026/02/old-school-house-restaurant-.jpg"
export const sitePhone = "01908 561936"
export const sitePhoneHref = "tel:01908561936"
export const siteEmail = "hellotheoldschoolhouse@gmail.com"
export const siteEmailHref = "mailto:hellotheoldschoolhouse@gmail.com"
export const mapHref =
  "https://www.google.com/maps/search/?api=1&query=The+Old+School+House+London+Road+Stony+Stratford+Milton+Keynes+MK11+1JA"
export const googleReviewHref =
  "https://search.google.com/local/writereview?placeid=ChIJbbeIWMQBd0gRTk6up33n664"
export const socialLinks = [
  "https://www.facebook.com/OldSchoolHouseStony/",
  "https://www.instagram.com/oldschoolhousestony/",
]

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

export const proofPoints: ProofPoint[] = [
  {
    title: "Pub classics and Nepalese dishes",
    description:
      "Order across both sides of the menu, from familiar pub comfort to momo, goat curry, and house signatures.",
  },
  {
    title: "Front garden seating",
    description:
      "A good spot for brighter afternoons, easy drinks, and the kind of visit that turns into another round.",
  },
  {
    title: "Private courtyard",
    description:
      "Useful when you want a little more room for catch-ups, group tables, or a longer evening outside.",
  },
  {
    title: "Live sport",
    description:
      "Football, rugby, and bigger fixtures all have a place here without the pub losing its warm feel.",
  },
  {
    title: "Stony Stratford High Street",
    description:
      "Right on London Road and easy to work into shopping, midweek catch-ups, or a planned evening in town.",
  },
  {
    title: "Open daily from 10:00",
    description:
      "Simple to drop in for lunch, come back for dinner, or settle in later when the evening picks up.",
  },
]

export const homeReasons: HighlightItem[] = [
  {
    title: "A proper pub, with more to discover on the menu",
    description:
      "Come for the familiar pub plates, then add momo, mixed grills, and Nepalese dishes that make the meal feel more memorable.",
  },
  {
    title: "Warm, welcoming, and easy to settle into",
    description:
      "Exposed brick, wooden floors, and a relaxed room make it easy to settle in from first drink to last bite.",
  },
  {
    title: "Good food, good drinks, and good value",
    description:
      "Lunch, drinks, or dinner all work for the same reason: honest food, a strong bar, and a place worth returning to.",
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
      "A good spot for brighter afternoons, easy drinks, and one more round.",
  },
  {
    title: "A bar that can shift from lunch to live sport",
    description:
      "The bar works just as well for lunch, a quick pint, or a bigger match crowd.",
  },
  {
    title: "Corners for parties, tasting nights, and group dinners",
    description:
      "There is enough room for parties and group dinners without losing the feel of a local.",
  },
]

export const eventsHighlights: HighlightItem[] = [
  {
    title: "Private hire with room to spread out",
    description:
      "Use the dining room, front garden, and courtyard for birthdays, work drinks, and longer-table plans.",
  },
  {
    title: "Sport, theme nights, and community trade",
    description:
      "Live sport, theme nights, and local meetups all fit here without forcing the pub to feel overly busy.",
  },
  {
    title: "Tasting nights and seasonal reasons to come back",
    description:
      "Kitchen-led nights and seasonal events give people a reason to come back.",
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

export const guestReviews: GuestReview[] = [
  {
    name: "Asha K.",
    guestType: "Local regular",
    focus: ["Food", "Atmosphere", "Drinks"],
    summary:
      "The chicken momo and Kathmandu Tikka Masala keep pulling me back in, especially when I want a table with good atmosphere and a proper drink alongside dinner.",
  },
  {
    name: "Chris M.",
    guestType: "First-time diner",
    focus: ["Food", "Atmosphere"],
    summary:
      "It was my first time in and the veg momo, chilli paneer, and Bhutuwa Lamb felt genuinely different from the usual curry order. The room made the whole evening feel relaxed from the start.",
  },
  {
    name: "Priya S.",
    guestType: "Date-night guest",
    focus: ["Drinks", "Atmosphere"],
    summary:
      "We went for Kathmandu Tikka served in the grill and Rara King Prawn, and both felt a little more special. The drinks and atmosphere made it very easy to stay for another round.",
  },
  {
    name: "Jordan T.",
    guestType: "Group night out",
    focus: ["Food", "Drinks"],
    summary:
      "We ordered the Large Mixed Grill, Chicken Biryani, and Lasun Kukhura Khursani, and the whole table loved how much colour, heat, and sharing energy it brought while the drinks kept flowing.",
  },
  {
    name: "Manish R.",
    guestType: "Midweek visitor",
    focus: ["Food", "Atmosphere"],
    summary:
      "The Khasi Ko Masu goat curry and Special Butter Chicken arrived rich, hot, and full of flavour, and the warm room made it easy for me to settle in and stay longer than planned.",
  },
  {
    name: "Leah P.",
    guestType: "Match-night diner",
    focus: ["Food", "Atmosphere", "Drinks"],
    summary:
      "Chicken Chilli, momo, and the Small Mixed Grill were ideal with a round of drinks before kick-off, and the pub still felt warm and welcoming once the screens came on.",
  },
]

export const foodHours = [
  "Food served Monday to Saturday from 12:00 to 21:00.",
  "Food served Sunday from 12:00 to 20:00.",
]

export const localFaqs: LocalFaq[] = [
  {
    question: "Do you have parking?",
    answer:
      "Yes. There is a small car park to the right of the building, including a disabled access space, with more parking around Stony Stratford town centre.",
  },
  {
    question: "Are dogs welcome?",
    answer:
      "Yes. Dogs are welcome, with dog-friendly space in the bar and beer garden, plus fresh water, bowls, and treats at the bar.",
  },
  {
    question: "Do you have free Wi-Fi?",
    answer:
      "Yes. Free customer Wi-Fi is available if you are stopping in for lunch, catching up over drinks, or working from the pub for a little while.",
  },
  {
    question: "Is there outside seating or a beer garden?",
    answer:
      "Yes. The pub has front outdoor seating and a garden area that works well for brighter afternoons, easy drinks, and casual meetups.",
  },
  {
    question: "When is food served?",
    answer:
      "Main food service runs Monday to Saturday from 12:00 to 21:00, and Sunday from 12:00 to 20:00.",
  },
  {
    question: "Do you show live sport?",
    answer:
      "Yes. The Old School House shows live sport including football and rugby, with Sky Sports and TNT Sports called out on the site.",
  },
]

export const bookingNotes = [
  "If you are hoping to join us today, give the pub a ring and we will do our best to find you a table.",
  "Email is ideal for dinner plans, birthdays, and bigger group bookings.",
  "If you are planning a party, work drinks, or a sports social, we would love to help with that too.",
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
  "You will find us on London Road in the heart of Stony Stratford.",
  "There is a small car park on site, with more parking around the town centre.",
  "If you need a hand finding us, give the pub a call.",
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
  "@type": ["BarOrPub", "Restaurant"],
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  image: siteOgImage,
  servesCuisine: ["British", "Nepalese"],
  acceptsReservations: "True",
  areaServed: ["Stony Stratford", "Milton Keynes"],
  telephone: sitePhone,
  email: siteEmail,
  hasMap: mapHref,
  sameAs: socialLinks,
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
