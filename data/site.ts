import openingHoursData from "@/data/opening-hours.json"

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

export interface StructuredValue {
  label: string
  value: string
}

export interface GuestReview {
  name: string
  guestType: string
  focus: string[]
  summary: string
}

interface OpeningHoursSource {
  label: string
  display: string
  groups: {
    days: string[]
    opens: string
    closes: string
  }[]
  note: string
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

const standardOpeningHours: OpeningHoursSource = openingHoursData

export const featureFlags: FeatureFlags = {
  hoursConfirmed: true,
  dogPolicyConfirmed: true,
  familyPolicyConfirmed: true,
  accessibilityConfirmed: true,
  eventScheduleConfirmed: true,
  sundayRoastConfirmed: true,
}

export const siteName = "The Old School House"
export const siteDescriptor = "Traditional pub and Nepalese kitchen"
export const siteLocation = "Stony Stratford, Milton Keynes"
export const siteLegalName = "Lapen Inns OSH Ltd"
export const siteCompanyNumber = "16699719"
export const siteAddress =
  "London Road, Stony Stratford, Milton Keynes, MK11 1JA"
export const siteUrl = "https://oldschoolhousestony.co.uk"
export const siteOgImage = `${siteUrl}/social/old-school-house-og.jpeg`
export const siteLogoUrl = `${siteUrl}/icon-512.png`
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
export const socialLinks = [
  "https://www.facebook.com/OldSchoolHouseStony/",
  "https://www.instagram.com/oldschoolhousestony/",
]
export const siteDinnerMenuHref =
  "/menus/theoldschoolhousemenu-standalone/index.html"
export const siteLunchMenuHref =
  "/menus/theoldschoolhousemenu-standalone/lunch-menu.html"
export const siteDinnerMenuPdfHref =
  "/menus/theoldschoolhousemenu-standalone/dinner-menu.pdf"
export const siteLunchMenuPdfHref =
  "/menus/theoldschoolhousemenu-standalone/lunch-menu.pdf"
export const siteOrganizationId = `${siteUrl}/#organization`
export const siteWebsiteId = `${siteUrl}/#website`
export const siteRestaurantId = `${siteUrl}/#restaurant`
export const siteMenuPageUrl = `${siteUrl}/our-menus`
export const siteMenuId = `${siteMenuPageUrl}#menu`
export const sanjogGautamPagePath = "/about/sanjog-gautam"
export const sanjogGautamPageUrl = `${siteUrl}${sanjogGautamPagePath}`
export const sanjogGautamId = `${sanjogGautamPageUrl}#person`

export const siteDescription =
  "A recently refurbished traditional pub on London Road in Stony Stratford with a Nepalese kitchen, live sport, private hire, and room to book inside and out."

export const heroSignals = [
  "Traditional pub on London Road",
  "Front garden and private courtyard",
  "Standout Nepalese kitchen",
]

export const proofPoints: ProofPoint[] = [
  {
    title: "Traditional pub warmth with a standout Nepalese kitchen",
    description:
      "The Old School House stands out on London Road with the look and feel of a proper local, then gives the visit more identity once the Nepalese kitchen comes into play.",
  },
  {
    title: "Recently invested in, inside and out",
    description:
      "Recent internal and external investment gives the pub a stronger first impression while keeping the exposed brick, wooden floors, and traditional character intact.",
  },
  {
    title: "125 covers across the pub, front garden, and courtyard",
    description:
      "With 65 covers inside and 60 outside, the venue can handle everyday meals, larger tables, sport-led nights, and longer stays with ease.",
  },
  {
    title: "Front garden, private courtyard, and small car park",
    description:
      "Outdoor drinks and dining have more than one setting here, and the arrival side stays easier thanks to the small car park and visible roadside plot.",
  },
  {
    title: "Sky Sports, TNT Sports, and local reasons to return",
    description:
      "Match days, theme nights, tastings, and community gatherings help keep the pub active without losing the local atmosphere.",
  },
  {
    title: "Lapen Inns warmth with award-backed sustainability",
    description:
      "Lapen Inns pairs Nepalese warmth with beloved East Anglian pubs, and the group’s BII Sustainability Champion Award adds another layer of trust.",
  },
]

export const homeReasons: HighlightItem[] = [
  {
    title: "Keep the local alive",
    description:
      "The offer is built around the rituals that make a proper local matter: sport, quiz-led nights, community gatherings, and a room that still works for a casual pint as well as dinner.",
  },
  {
    title: "Nepalese hospitality in a pub setting",
    description:
      "The Lapen Inns approach is about generosity, menu guidance, and a welcome that treats people with warmth rather than formality, while the pub itself stays easy and familiar.",
  },
  {
    title: "Family and community first",
    description:
      "The venue is designed to work for daytime regulars, families, sports teams, relaxed dinners, and mixed groups who want value, comfort, and room to settle in.",
  },
  {
    title: "Honest plates and pints",
    description:
      "Pub classics, Sunday roasts, momo, curries, and grills give tables a clear choice between familiar comfort and Nepalese signatures without compromising on quality or value.",
  },
]

export const guestReviews: GuestReview[] = [
  {
    name: "Daytime visit",
    guestType: "Everyday pub visit",
    focus: ["Traditional pub", "Warm welcome", "Easy lunch"],
    summary:
      "The room is set up for the kind of daytime stop that still matters in a proper local: relaxed service, familiar surroundings, and enough food choice to stay longer than planned.",
  },
  {
    name: "Family meal",
    guestType: "Mixed-age meal",
    focus: ["Pub classics", "Nepalese dishes", "Value"],
    summary:
      "The dual menu makes family and mixed-group meals easier because familiar pub comfort and more distinctive Nepalese dishes can both sit on the same table without compromise.",
  },
  {
    name: "Match night",
    guestType: "Sport-led evening",
    focus: ["Sky & TNT", "Team socials", "Food + rounds"],
    summary:
      "Live sport matters here, but the evening still feels like a full pub plan with food, drinks, and room for local teams and social groups to settle in.",
  },
  {
    name: "First visit",
    guestType: "Nepalese kitchen visit",
    focus: ["Momo", "Menu guidance", "Warm service"],
    summary:
      "The Nepalese kitchen gives first-time guests a clear reason to remember the visit, especially when the team helps guide the table toward momo, curries, grills, and dishes that suit the group.",
  },
]

export const aboutReasons: HighlightItem[] = [
  {
    title: "A proper pub setting with real character",
    description:
      "Exposed brick, wooden floors, and an open-plan bar keep the atmosphere rooted in the kind of pub comfort you recognise straight away.",
  },
  {
    title: "A concept that feels clear rather than confused",
    description:
      "The pub keeps its local character, while the Nepalese kitchen gives the food a stronger point of difference once you have taken your seat and the team starts guiding the table.",
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
      "A full trade kitchen behind both the pub favourites and Nepalese dishes on the menu",
  },
  { label: "Parking", value: "A small car park helps make arrival easier" },
  {
    label: "Offer",
    value:
      "Traditional pub ethos first, Nepalese kitchen as the standout difference",
  },
]

export const organizationFactSheet: StructuredValue[] = [
  { label: "Official company name", value: siteLegalName },
  { label: "Company number", value: siteCompanyNumber },
  { label: "Registered venue address", value: siteAddress },
  { label: "Primary phone number", value: sitePhone },
  {
    label: "Bar hours",
    value: standardOpeningHours.display,
  },
]

export const aboutStoryNotes = [
  "Previously known as The Plough, the building remains a familiar Stony Stratford address on busy London Road.",
  "The Old School House keeps the warmth of a proper pub while giving the menu a stronger identity than a standard High Street local.",
  "That balance is the point: you can come in for the pub experience first, then stay because the kitchen gives you more to remember.",
]

export const aboutOperatorNotes = [
  "Sanjog Gautam, known as San, is a vastly experienced business and restaurant manager who has operated a cafe, restaurant, and pub before taking on The Old School House.",
  "His philosophy is simple: keep the classic pub welcome intact, make the service generous and relaxed, and let the Nepalese dishes add depth, warmth, and real character rather than novelty for its own sake.",
  "The hospitality side matters just as much as the dishes. Guests are looked after with menu guidance, help around spice and dietary requests, and the warmth of a family-run room rather than a transactional stop.",
  "That is why the food feels specifically his. Momo, curries, grilled dishes, and sharper Nepalese flavours sit on the menu because he wants the pub to offer something memorable while still feeling easy for you to enjoy on an ordinary lunch, dinner, or Sunday visit.",
]

export const sanjogGautamHighlights: HighlightItem[] = [
  {
    title: "Hands-on operator across cafe, restaurant, and pub settings",
    description:
      "San's background is not theoretical. He has already run a cafe, a restaurant, and a pub, which gives him a practical sense of service rhythm, staffing, and repeat-visit hospitality.",
  },
  {
    title: "Business and restaurant management grounded in real guest service",
    description:
      "He brings day-to-day management experience to the floor as well as the menu, from guest flow and table pacing to making sure mixed groups feel looked after rather than processed.",
  },
  {
    title:
      "Clear point of view on how a pub and Nepalese kitchen should work together",
    description:
      "At The Old School House, San keeps the traditional pub identity easy to recognise while using the Nepalese kitchen to give the visit more warmth, depth, and memorability.",
  },
]

export const sanjogGautamExperienceNotes = [
  "San is the operator behind The Old School House and the person responsible for how the room feels in practice, from the pub welcome to the way the menu is explained.",
  "His experience across cafe, restaurant, and pub businesses means he understands the difference between a venue that looks good online and one that actually works for repeat local trade.",
  "That shows up in the details: generous service, calm menu guidance, practical attention to group dynamics, and a belief that the food should add identity without making the pub feel hard to understand.",
]

export const sanjogGautamExpertiseAreas = [
  "Pub operations and guest flow",
  "Restaurant and cafe management",
  "Menu development for mixed tables",
  "Nepalese hospitality and dish guidance",
  "Warm, family-led service standards",
]

export const aboutFamilyNotes = [
  "The Old School House is part of the Lapen Inns family, a group known for pairing pub comfort with Nepalese kitchens in a way that still feels grounded in each local setting.",
  "Across the wider family, the idea stays consistent: Nepalese warmth inside beloved East Anglian pubs, familiar pub ease, and food that gives you a reason to come back for more than another pint.",
  "Here in Stony Stratford, that approach still starts with the local pub first and then lets the kitchen add its own identity once you are at the table.",
]

export const aboutHeritageNotes = [
  "Stony Stratford is a market town with deep hospitality roots, shaped by its place on the historic Watling Street route and its long habit of welcoming visitors passing through as well as locals who live nearby.",
  "That local sense of arrival still matters on London Road today, close to the High Street and within easy reach of Horsefair Green, where a well-positioned pub can look after regulars, visitors, and casual stop-ins alike.",
  "The Old School House sits right in that rhythm, visible enough for a spontaneous pint and distinctive enough to stay in mind when you are choosing where to eat next time.",
]

export const aboutLocationHighlights: HighlightItem[] = [
  {
    title: "Visible, central, and easy to choose on London Road",
    description:
      "London Road keeps the pub visible in the daily rhythm of Stony Stratford, whether the visit is planned in advance or decided on the way through town.",
  },
  {
    title: "Easy to pair with the High Street and Horsefair Green",
    description:
      "The location suits relaxed drinks, planned dinners, and town-centre visits that begin near the High Street or Horsefair Green before settling in here.",
  },
  {
    title: "A better fit for weekends, events, and repeat local visits",
    description:
      "From Sunday lunch to match days and town events such as Folk on the Green, the pub is well placed to feel like an easy local choice.",
  },
]

export const homeMenuHighlights: HighlightItem[] = [
  {
    title: "Start with the service that fits the visit",
    description:
      "Use the lunch menu for a full English or lighter daytime meal, keep Sunday roast in mind for the weekend, and use the full menu when dinner is the plan.",
  },
  {
    title: "Keep familiar pub comfort in play",
    description:
      "Pub classics, baguettes, wraps, and roasts keep the menu easy for mixed tables before anyone stretches into the Nepalese side.",
  },
  {
    title: "Use the full menu when the table wants range",
    description:
      "That is where the grills, curries, momo, and crowd-pleasers all sit together and make the visit feel stronger than a standard pub stop.",
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
      "The front garden and courtyard give outdoor drinks and dining more than one setting.",
  },
  {
    title: "Flexible enough for lunches, sport, and longer-table evenings",
    description:
      "The pub shifts from casual lunch to live sport to group dining without losing the local feel.",
  },
]

export const eventsHighlights: HighlightItem[] = [
  {
    title: "Live sport with a proper pub atmosphere around it",
    description:
      "The live sport offer is designed around Sky Sports and TNT Sports, with the room still feeling like a pub night rather than a screen-only stop.",
  },
  {
    title: "Theme nights, tastings, and local reasons to return",
    description:
      "Theme-led nights, tastings, and community-led occasions give regulars and casual visitors more than one reason to come back beyond a single meal.",
  },
  {
    title: "A venue that handles bigger tables and informal occasions well",
    description:
      "Birthdays, work drinks, sports socials, local team meetups, and family gatherings all fit here without losing the relaxed pub feel.",
  },
]

export const reassuranceHighlights: HighlightItem[] = [
  {
    title: "Recent investment with traditional character still intact",
    description:
      "Recent internal and external investment has sharpened the pub up while keeping the exposed brick, wooden floors, and warm local feel people expect.",
  },
  {
    title: "A room built for everyday trade and bigger plans",
    description:
      "An open-plan bar, 125 total covers, and a flexible inside-outside layout give the venue range without making it feel overbuilt or formal.",
  },
  {
    title: "A pub identity with a stronger hospitality point of difference",
    description:
      "The pub keeps its local feel, while the Nepalese kitchen, warmer service style, and clearer menu guidance give the visit more personality once you sit down.",
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
      "Yes. The menu is designed so you can order pub favourites and Nepalese dishes in the same visit.",
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
      "Yes. The Old School House works well for dog-friendly visits, especially if you want outdoor seating in the front garden or courtyard. If you want the easiest setup for your visit, call ahead before travelling.",
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
  "Sky Sports and TNT Sports match nights",
  "Quiz nights, tastings, and theme-led evenings",
  "Birthdays and informal celebrations",
  "Work drinks and team socials",
  "Pool teams, rugby clubs, cricket clubs, and local sports groups",
  "Community gatherings and seasonal pub events",
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
  {
    label: "Nearby",
    value:
      "High Street, Horsefair Green, and town-centre events are all easy to work into the visit",
  },
]

export const arrivalNotes = [
  "You will find us on London Road, a short walk from Stony Stratford High Street.",
  "The pub works well for lunch, garden drinks, dinner, and meetups that start elsewhere in town or over on Horsefair Green.",
  "There is a small car park on site, with more parking around the town centre if the pub spaces are full.",
  "If you are visiting during Folk on the Green or another town event, check the latest booking picture before you travel.",
  "If your visit depends on a specific service time or the easiest access route, call the pub before setting off.",
]

export const accessibilityNotes = [
  "If you need help with access, seating, or the easiest way in, please call ahead before travelling.",
  "We are happy to talk through mobility needs, prams, quieter seating, and arrival questions directly with the pub.",
  "The pub has a small car park on site and a central London Road location that can make arrival easier to plan.",
]

export const openingHours: OpeningHoursItem[] = [
  {
    label: standardOpeningHours.label,
    hours: standardOpeningHours.display,
  },
]

export const openingHoursNote = standardOpeningHours.note

export const policyNotes = [
  "Challenge 25 is in operation for alcohol sales.",
  "If allergies or dietary needs matter, please speak to the team before ordering.",
  "Call ahead if your visit depends on a specific service time, event, or access arrangement.",
]

const postalAddressSchema = {
  "@type": "PostalAddress",
  streetAddress: "London Road",
  addressLocality: "Stony Stratford",
  addressRegion: "Milton Keynes",
  postalCode: "MK11 1JA",
  addressCountry: "GB",
}

const openingHoursSpecification = standardOpeningHours.groups.map((group) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: group.days,
  opens: group.opens,
  closes: group.closes,
}))

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": siteOrganizationId,
  name: siteLegalName,
  alternateName: siteName,
  legalName: siteLegalName,
  url: siteUrl,
  description: siteDescription,
  telephone: sitePhone,
  email: siteEmail,
  logo: {
    "@type": "ImageObject",
    url: siteLogoUrl,
  },
  address: postalAddressSchema,
  sameAs: socialLinks,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Companies House number",
    value: siteCompanyNumber,
  },
  owns: {
    "@id": siteRestaurantId,
  },
  employee: {
    "@id": sanjogGautamId,
  },
}

export function buildLocalBusinessSchema(mainEntityOfPage?: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "BarOrPub"],
    "@id": siteRestaurantId,
    name: siteName,
    legalName: siteLegalName,
    description: siteDescription,
    url: siteUrl,
    image: siteOgImage,
    servesCuisine: ["British", "Nepalese"],
    acceptsReservations: true,
    areaServed: ["Stony Stratford", "Milton Keynes"],
    telephone: sitePhone,
    email: siteEmail,
    hasMap: mapHref,
    sameAs: socialLinks,
    address: postalAddressSchema,
    parentOrganization: {
      "@id": siteOrganizationId,
    },
    hasMenu: {
      "@id": siteMenuId,
    },
    openingHoursSpecification,
    ...(mainEntityOfPage
      ? {
          mainEntityOfPage: {
            "@id": `${mainEntityOfPage}#webpage`,
          },
        }
      : {}),
  }
}

export const localBusinessSchema = buildLocalBusinessSchema()

export const sanjogGautamPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": sanjogGautamId,
  name: "Sanjog Gautam",
  alternateName: "San Gautam",
  description:
    "Sanjog (San) Gautam is a vastly experienced business and restaurant manager who has operated a cafe, restaurant, and pub, and now leads The Old School House in Stony Stratford.",
  url: sanjogGautamPageUrl,
  jobTitle: "Business and restaurant manager",
  worksFor: {
    "@id": siteOrganizationId,
  },
  knowsAbout: [
    "Pub operations",
    "Restaurant management",
    "Cafe management",
    "Nepalese hospitality",
    "Menu development",
    "Guest experience",
  ],
}
