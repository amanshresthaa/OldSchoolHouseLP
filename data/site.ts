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

export interface LocalFaq {
  question: string
  answer: string
}

export interface CtaConfig {
  href: string
  label: string
  download?: boolean | string
}

export interface PageMeta {
  title: string
  description: string
  canonical: string
}

export interface PageHeroConfig {
  eyebrow: string
  title: string
  description: string
  primaryAction: CtaConfig
  secondaryAction?: CtaConfig
}

export interface SchemaConfig {
  localBusiness?: boolean
  faq?: boolean
  menu?: boolean
  event?: boolean
}

export interface FeatureFlags {
  hoursConfirmed: boolean
  dogPolicyConfirmed: boolean
  familyPolicyConfirmed: boolean
  accessibilityConfirmed: boolean
  eventScheduleConfirmed: boolean
  sundayRoastConfirmed: boolean
}

export interface RouteConfig {
  href: string
  label: string
  navLabel?: string
  primaryNav?: boolean
  sitemap?: boolean
  resource?: boolean
  published?: boolean
  meta: PageMeta
  hero?: PageHeroConfig
  schema?: SchemaConfig
  stickySecondaryAction?: CtaConfig
}

export const featureFlags: FeatureFlags = {
  hoursConfirmed: false,
  dogPolicyConfirmed: false,
  familyPolicyConfirmed: false,
  accessibilityConfirmed: false,
  eventScheduleConfirmed: false,
  sundayRoastConfirmed: true,
}

export const siteName = "The Old School House"
export const siteDescriptor = "Traditional pub and Nepalese kitchen"
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
export const lapenInnsHref = "https://lapeninns.com"
export const mapHref =
  "https://www.google.com/maps/search/?api=1&query=The+Old+School+House+London+Road+Stony+Stratford+Milton+Keynes+MK11+1JA"
export const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=The+Old+School+House,+London+Rd,+Stony+Stratford,+Milton+Keynes+MK11+1JA&travelmode=driving"
export const bookingHref =
  "https://www.nabatable.com/restaurants/the-old-school-house/book"
export const bookOnlineHref = "/book"
export const legacyBookOnlineHref = "/book-online"
export const googleReviewsPageHref =
  "https://www.google.com/search?q=The+Old+School+House+Stony+Stratford+Reviews#lrd=0x487701c45888b76d:0xaeebe77da7ae4e4e,1,,,,"
export const googleReviewHref =
  "https://search.google.com/local/writereview?placeid=ChIJbbeIWMQBd0gRTk6up33n664"
export const socialLinks = [
  "https://www.facebook.com/OldSchoolHouseStony/",
  "https://www.instagram.com/oldschoolhousestony/",
]
export const siteMenuPdfHref = "/downloads/old-school-house-menu.pdf"

export const siteDescription =
  "A traditional pub on London Road in Stony Stratford with a standout Nepalese kitchen, Sunday roast, live sport, and a welcoming place to book for food and drinks."

export const heroSignals = [
  "Traditional pub on London Road",
  "Front garden and private courtyard",
  "Standout Nepalese kitchen",
]

export const proofPoints: ProofPoint[] = [
  {
    title: "Traditional pub, Stony Stratford first",
    description:
      "The Old School House leads with the warmth, welcome, and ease people want from a proper local on London Road.",
  },
  {
    title: "Nepalese kitchen worth talking about",
    description:
      "The menu gives people more to discover than the standard pub line-up, especially if they start with the momo or order across the house dishes.",
  },
  {
    title: "65 covers inside, 60 outside",
    description:
      "There is room for a quiet lunch, bigger tables, sports nights, and the kind of visit that stretches out longer than planned.",
  },
  {
    title: "Front garden and private courtyard",
    description:
      "Outdoor drinks and dining have more than one setting here, from the front seating area to the more tucked-away courtyard.",
  },
  {
    title: "Live sport and local occasions",
    description:
      "The pub suits match days, community-led gatherings, quiz nights, and more informal celebrations without losing its pub feel.",
  },
  {
    title: "Easy to find on busy London Road",
    description:
      "A central Stony Stratford position makes the pub a natural pick for walk-ins, planned dinners, and stop-ins during a day in town.",
  },
]

export const homeReasons: HighlightItem[] = [
  {
    title: "A proper pub, with a stronger food story behind it",
    description:
      "People can come in for the familiar comfort of a traditional pub, then discover momo, Nepalese curries, and grilled dishes that make the menu more memorable.",
  },
  {
    title:
      "Welcoming enough for a quick drink, strong enough for a proper meal",
    description:
      "The room works for lunch, dinner, sport, and a round that turns into a second one without ever feeling like two different businesses stitched together.",
  },
  {
    title: "Better for mixed groups than the average pub stop",
    description:
      "Classic pub favourites and Nepalese dishes sit alongside each other well, which makes choosing the table easier for families, couples, and bigger groups.",
  },
]

export const aboutReasons: HighlightItem[] = [
  {
    title: "A proper pub setting with real character",
    description:
      "Exposed brick, wooden floors, and an open-plan bar keep the atmosphere rooted in the kind of pub comfort people recognise straight away.",
  },
  {
    title: "A concept that feels clear rather than confused",
    description:
      "The pub stays pub-led, while the Nepalese kitchen gives the food a stronger point of difference once guests have taken their seats.",
  },
  {
    title: "Room for everyday visits and bigger plans",
    description:
      "With strong indoor and outdoor capacity, The Old School House can handle a quick pint, a date night, a Sunday plan, or a larger gathering with ease.",
  },
]

export const aboutPubFacts: InfoItem[] = [
  { label: "Inside", value: "65 internal covers in a traditional pub setting" },
  {
    label: "Outside",
    value: "60 external covers across the front garden and courtyard",
  },
  {
    label: "Building",
    value:
      "Characterful brick frontage with exposed brick and wooden floors inside",
  },
  {
    label: "Kitchen",
    value:
      "A commercial trade kitchen behind both the pub and Nepalese sides of the menu",
  },
  { label: "Parking", value: "A small car park helps make arrival easier" },
  {
    label: "Offer",
    value:
      "Traditional pub ethos first, Nepalese kitchen as the standout difference",
  },
]

export const aboutStoryNotes = [
  "Previously known as The Plough, the building remains a familiar Stony Stratford address on busy London Road.",
  "The Old School House keeps the warmth of a proper pub while giving the menu a stronger identity than a standard High Street local.",
  "That balance is the point: people can come in for the pub experience first, then stay because the kitchen gives them more to remember.",
]

export const aboutOperatorNotes = [
  "Sanjog Gautam, known as San, brings experience from running a cafe, restaurant, and pub before taking on The Old School House.",
  "His aim is not to replace the classic pub ethos, but to keep that welcome intact and add a Nepalese offer that makes the food side of the business more distinctive.",
  "That combination is what gives the pub its identity online and at the table.",
]

export const aboutFamilyNotes = [
  "The Old School House is part of the Lapen Inns family, a group known for blending pub comfort with Nepalese kitchens.",
  "Across the wider family, the idea stays consistent: warm hospitality, familiar pub ease, and a food offer that gives people a reason to come back.",
  "Here in Stony Stratford, the result still feels rooted in the local pub first.",
]

export const aboutHeritageNotes = [
  "Stony Stratford is a market town with deep hospitality roots, shaped by its place on the historic Watling Street route.",
  "That local sense of arrival and passing trade still matters on London Road today, where a well-positioned pub can serve regulars, visitors, and casual stop-ins alike.",
  "The Old School House sits right in that rhythm, easy to work into a day in town and memorable enough to make the return visit easier.",
]

export const aboutLocationHighlights: HighlightItem[] = [
  {
    title: "On the busiest road in Stony Stratford",
    description:
      "London Road keeps the pub visible, convenient, and woven into the daily movement of the town.",
  },
  {
    title: "Easy to pair with a day or evening in town",
    description:
      "The location works for planned dinners, relaxed drinks, and the kind of visit that starts as one stop on the way through town and becomes the main one.",
  },
  {
    title: "A pub that fits local weekends well",
    description:
      "From town events to casual meetups, the pub is well placed to feel like an easy local choice.",
  },
]

export const homeMenuHighlights: HighlightItem[] = [
  {
    title: "Start with the momo",
    description:
      "The momo is the easiest first order if you want to discover why the Nepalese kitchen stands out inside a traditional pub setting.",
  },
  {
    title: "Keep the familiar pub comfort in play",
    description:
      "Pub classics, desserts, and easier crowd-pleasers keep the menu comfortable for mixed tables and broader tastes.",
  },
  {
    title: "Order across both sides of the offer",
    description:
      "That mix of pub comfort and Nepalese dishes is exactly what makes the menu feel more memorable than a standard pub stop.",
  },
]

export const atmosphereMoments: HighlightItem[] = [
  {
    title: "A warm pub interior with character",
    description:
      "Exposed brick, wooden floors, and a room that feels welcoming rather than over-styled.",
  },
  {
    title: "Outdoor seating for brighter afternoons",
    description:
      "The front garden and courtyard give you room to settle in for drinks or stay outside with food when the weather suits it.",
  },
  {
    title: "Flexible enough for lunches, sport, and longer-table evenings",
    description:
      "The pub can shift from casual lunch to live sport to group dining without losing the local feel.",
  },
]

export const eventsHighlights: HighlightItem[] = [
  {
    title: "Live sport that still feels like the pub comes first",
    description:
      "Sport is part of the offer, but the room still feels welcoming whether you are here for the fixture or not.",
  },
  {
    title: "Quiz nights, tastings, and community-led reasons to return",
    description:
      "The Old School House is built for repeat visits, not just one-off meals.",
  },
  {
    title: "A venue that handles informal occasions well",
    description:
      "Birthdays, work drinks, sports socials, and family gatherings all have an easy fit here.",
  },
]

export const reassuranceHighlights: HighlightItem[] = [
  {
    title: "Traditional pub identity",
    description:
      "The site and the venue both lead with the pub first, making it easy for local searchers to understand what kind of place this is.",
  },
  {
    title: "Standout food without the confusion",
    description:
      "The Nepalese kitchen is presented as the difference-maker, not as a separate brand that pulls the pub out of focus.",
  },
  {
    title: "Fast paths to action",
    description:
      "Book a table, view the menu, call the pub, and get directions without hunting through multiple layers.",
  },
]

export const foodHours = [
  "Food service times can vary with events, service, and seasonal changes.",
  "Please call the pub before travelling for a specific lunch, dinner, or Sunday plan.",
]

export const localFaqs: LocalFaq[] = [
  {
    question: "What kind of place is The Old School House?",
    answer:
      "The Old School House is a traditional pub in Stony Stratford with a Nepalese kitchen that gives the menu a stronger point of difference once you sit down to eat.",
  },
  {
    question: "Do you serve both pub food and Nepalese dishes?",
    answer:
      "Yes. The menu is designed so guests can order pub favourites and Nepalese dishes in the same visit.",
  },
  {
    question: "Do you have outside seating?",
    answer:
      "Yes. The pub has a generous front garden with wooden seating and a private courtyard.",
  },
  {
    question: "Do you show live sport?",
    answer:
      "Yes. Live sport is part of the pub offer, alongside food, drinks, and community-led reasons to visit.",
  },
  {
    question: "How do I book a table?",
    answer:
      "Use the booking page for the quickest route, or call the pub if you are planning a group visit or want to ask something first.",
  },
  {
    question: "Are dogs welcome?",
    answer:
      "Please contact the pub directly to check the latest dog policy before you visit, as we only publish that page once the operational details are fully confirmed.",
  },
]

export const bookingNotes = [
  "Online booking is the quickest route for standard tables and planned visits.",
  "If you are hoping to join us today or planning for a larger group, a call or email can be the easier place to start.",
  "Private occasions, wakes, and work gatherings are best handled through the dedicated enquiry routes.",
]

export const bookingUrgencyNote =
  "Busier evenings and Sundays are easiest to plan when you book ahead."

export const eventOccasions = [
  "Quiz nights and tasting evenings",
  "Birthdays and informal celebrations",
  "Work drinks and team socials",
  "Sports group meetups",
  "Community gatherings",
  "Festive and seasonal pub events",
]

export const drinksHighlights = [
  "A stronger bar offer that still suits the pub first",
  "Drinks that work with pub classics and Nepalese dishes alike",
  "Coffee and tea when the visit runs longer than planned",
  "A good reason to stay for another round after the food",
]

export const visitDetails: InfoItem[] = [
  { label: "Address", value: siteAddress },
  { label: "Phone", value: sitePhone },
  { label: "Email", value: siteEmail },
  { label: "Parking", value: "Small car park on site" },
]

export const arrivalNotes = [
  "You will find us on London Road in the heart of Stony Stratford.",
  "There is a small car park on site, with more parking around the town centre.",
  "If you are travelling for a specific service or need the easiest route in, call the pub before you set off.",
]

export const accessibilityNotes = [
  "If you need help with access, seating, or the easiest way in, please call ahead before travelling.",
  "We are happy to talk through mobility needs, prams, and arrival questions directly with the pub.",
  "Detailed accessibility guidance will be published once the operational details have been fully confirmed.",
]

export const openingHours: OpeningHoursItem[] = featureFlags.hoursConfirmed
  ? [{ label: "Monday to Sunday", hours: "10:00 - 00:30" }]
  : [{ label: "Opening hours", hours: "Call the pub for today’s hours" }]

export const openingHoursNote = featureFlags.hoursConfirmed
  ? "Bank holiday and festive hours can vary, so please call if you are travelling for a specific day."
  : "Trading hours will be published once they are fully confirmed. Please call before travelling for a specific service or day."

export const policyNotes = [
  "Challenge 25 is in operation for alcohol sales.",
  "If allergies or dietary needs matter, please speak to the team before ordering.",
  "Call ahead if your visit depends on a specific service time, event, or access arrangement.",
]

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: siteName,
  description: siteDescription,
  url: siteUrl,
  image: siteOgImage,
  hasMenu: `${siteUrl}/menu`,
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
  ...(featureFlags.hoursConfirmed
    ? {
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
    : {}),
}
