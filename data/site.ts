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
export const lapenInnsHref = "https://lapeninns.com"
export const mapHref =
  "https://www.google.com/maps/search/?api=1&query=The+Old+School+House+London+Road+Stony+Stratford+Milton+Keynes+MK11+1JA"
export const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=The+Old+School+House,+London+Rd,+Stony+Stratford,+Milton+Keynes+MK11+1JA&travelmode=driving"
export const bookingHref =
  "https://www.nabatable.com/restaurants/the-old-school-house/book"
export const bookOnlineHref = "/book-online"
export const googleReviewHref =
  "https://search.google.com/local/writereview?placeid=ChIJbbeIWMQBd0gRTk6up33n664"
export const socialLinks = [
  "https://www.facebook.com/OldSchoolHouseStony/",
  "https://www.instagram.com/oldschoolhousestony/",
]
export const siteMenuPdfHref =
  "/downloads/old-school-house-menu-placeholder.pdf"

export const siteDescription =
  "Pub favourites, Nepalese cooking, live sport, and a warm welcome in the heart of Stony Stratford, with a front garden, private courtyard, and plenty of reasons to stay a little longer."

export const siteNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/find-us", label: "Find Us" },
  { href: "/book", label: "Book" },
]

export const siteResources: NavItem[] = [
  { href: "/menu-information", label: "Menu information" },
  { href: "/takeaway-menu", label: "Takeaway menu" },
  { href: "/wakes-menu", label: "Wakes menu" },
]

export const siteLegalLinks: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/tos", label: "Terms" },
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
      "Drop in for lunch, come back for dinner, or stay a while once the evening picks up.",
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
      "Exposed brick, wooden floors, and a relaxed room that feels right from the moment you walk in.",
  },
  {
    title: "Good food, good drinks, and good value",
    description:
      "Lunch, drinks, or dinner all work for the same reason: honest food, a strong bar, and a place worth returning to.",
  },
]

export const aboutReasons: HighlightItem[] = [
  {
    title: "A proper pub setting with real character",
    description:
      "Exposed brick, wooden floors, and an open-plan bar that give the place a warmth you notice the moment you walk in.",
  },
  {
    title: "A wider food story than the usual pub stop",
    description:
      "The mix of classic pub comfort and Nepalese cooking gives couples, families, and mixed groups more reasons to agree on this table.",
  },
  {
    title: "Room for everyday visits and bigger plans",
    description:
      "With 65 covers inside, around 60 outside, a front seating area, and a private courtyard, there is room for a quick pint, a proper dinner, or a birthday that runs late.",
  },
]

export const aboutPubFacts: InfoItem[] = [
  { label: "Inside", value: "65 covers across the main pub space" },
  {
    label: "Outside",
    value: "Around 60 covers split between the front area and courtyard",
  },
  {
    label: "Bar",
    value: "One open-plan bar that keeps the room feeling together",
  },
  {
    label: "Kitchen",
    value: "A full commercial kitchen behind the food offer",
  },
  { label: "Parking", value: "A small on-site car park for easier arrival" },
  {
    label: "Outdoor feel",
    value: "Front wooden seating that works through most of the year",
  },
]

export const aboutStoryNotes = [
  "Previously known as The Plough, the building is a familiar Stony Stratford address on busy London Road.",
  "The current shape of The Old School House keeps the classic pub character while making more of the space inside and out.",
  "That means exposed brick, wooden floors, a strong bar, a front outdoor area, and a private courtyard that make longer visits easy.",
]

export const aboutOperatorNotes = [
  "Sanjog Gautam, known as San, brings experience from running a cafe, a restaurant, and a pub before taking on The Old School House.",
  "The aim is not to lose the classic pub ethos. It is to keep that welcome intact while adding the Nepalese food offer guests already know him for.",
  "That mix of the familiar and the unexpected is what makes the pub worth a second visit.",
]

export const aboutFamilyNotes = [
  "The Old School House is operated by Lapen Inns OSH Ltd as part of the wider Lapen Inns family.",
  "Across the group, the idea is consistent: proper pub comfort, a warm welcome, and Nepalese cooking that gives the menu more identity.",
  "For guests, that means the pub still feels local, but the kitchen brings something you would not expect from a typical High Street pub.",
]

export const aboutLocationHighlights: HighlightItem[] = [
  {
    title: "On the busiest road in Stony Stratford",
    description:
      "London Road keeps the pub in the middle of the everyday rhythm of the town, from passing drinks to planned evenings out.",
  },
  {
    title: "Easy to work into a day in town",
    description:
      "Shops, parking, and local footfall nearby make it an easy stop whether you are meeting friends or making an evening of it.",
  },
  {
    title: "A good pub to keep in mind for local weekends",
    description:
      "When the town gets busier for events such as Folk on the Green, being well placed and easy to spot matters even more.",
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
      "A good spot when the sun is out, the drinks are cold, and nobody wants to leave.",
  },
  {
    title: "A bar that can shift from lunch to live sport",
    description:
      "The bar works just as well for lunch, a quick pint, or a bigger match crowd.",
  },
  {
    title: "Corners for parties, tasting nights, and group dinners",
    description:
      "There is enough room for parties and group dinners, and it still feels like your local.",
  },
]

export const eventsHighlights: HighlightItem[] = [
  {
    title: "Private hire with room to spread out",
    description:
      "Use the dining room, front garden, and courtyard for birthdays, work drinks, and longer-table plans.",
  },
  {
    title: "Sport, theme nights, and local get-togethers",
    description:
      "Live sport, theme nights, and local meetups all have a home here without the place ever feeling overcrowded.",
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
      "Yes. We show live sport including football and rugby on Sky Sports and TNT Sports.",
  },
]

export const bookingNotes = [
  "If you are hoping to join us today, give the pub a ring and we will do our best to find you a table.",
  "Email is ideal for dinner plans, birthdays, and bigger group bookings.",
  "If you are planning a party, work drinks, or a sports social, we would love to help with that too.",
]

export const bookingUrgencyNote =
  "Weekends fill up fast — book ahead so your table is ready when you arrive."

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

export const accessibilityNotes = [
  "A disabled parking space is available in the on-site car park to help keep arrival simpler.",
  "If you need help with access, seating, or the easiest way in, call ahead and we will talk you through it.",
  "Let us know about mobility needs, prams, or extra space before you travel and we will do our best to make arrival smoother.",
]

export const openingHours: OpeningHoursItem[] = [
  { label: "Monday to Sunday", hours: "10:00 - 00:30" },
]

export const openingHoursNote =
  "Bank holiday and festive hours can vary, so please call if you are travelling for a specific day."

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
