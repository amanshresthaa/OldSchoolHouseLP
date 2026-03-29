import type { NavItem, RouteConfig } from "@/data/site"
import {
  bookOnlineHref,
  bookingHref,
  directionsHref,
  featureFlags,
  siteEmailHref,
  siteMenuPdfHref,
  siteName,
  sitePhoneHref,
} from "@/data/site"

export const routeConfigs: RouteConfig[] = [
  {
    href: "/",
    label: "Home",
    primaryNav: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Traditional Pub in Stony Stratford",
      description:
        "A traditional pub on London Road in Stony Stratford with a standout Nepalese kitchen, Sunday roast, live sport, and easy table booking.",
      canonical: "/",
    },
    hero: {
      eyebrow: siteName,
      title:
        "A traditional pub in Stony Stratford with a Nepalese kitchen worth discovering.",
      description:
        "Come for the familiar pub comfort, stay for the momo, curries, grills, and the kind of welcome that makes a second visit easy.",
      primaryAction: { href: bookOnlineHref, label: "Book a table" },
      secondaryAction: { href: "/menu", label: "View menu" },
    },
    schema: { localBusiness: true, faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/about",
    label: "About",
    primaryNav: true,
    sitemap: true,
    published: true,
    meta: {
      title: "About Our Pub and Nepalese Kitchen",
      description:
        "Learn the story behind The Old School House, a traditional Stony Stratford pub with a Nepalese kitchen and a strong local welcome.",
      canonical: "/about",
    },
    hero: {
      eyebrow: "About",
      title: "A proper pub with a wider food story behind it.",
      description:
        "The Old School House keeps the classic pub ethos front and centre, then adds a Nepalese kitchen that gives the menu a stronger identity.",
      primaryAction: { href: bookOnlineHref, label: "Book a table" },
      secondaryAction: { href: "/menu", label: "Browse the menu" },
    },
    schema: { localBusiness: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/menu",
    label: "Menu",
    primaryNav: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Pub Menu and Nepalese Food in Stony Stratford",
      description:
        "Browse live HTML menus for pub classics, Nepalese dishes, Sunday roast favourites, and drinks at The Old School House.",
      canonical: "/menu",
    },
    hero: {
      eyebrow: "Food and drink",
      title: "Pub favourites and Nepalese dishes on one menu.",
      description:
        "Browse the live menu, start with the signatures, and book when you are ready to turn a look into a table.",
      primaryAction: { href: bookOnlineHref, label: "Book a table" },
      secondaryAction: { href: sitePhoneHref, label: "Call 01908 561936" },
    },
    schema: { menu: true, localBusiness: true },
    stickySecondaryAction: { href: sitePhoneHref, label: "Call" },
  },
  {
    href: "/book",
    label: "Book",
    navLabel: "Book",
    primaryNav: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Book a Table in Stony Stratford",
      description:
        "Reserve a table at The Old School House for pub drinks, Sunday roast, and Nepalese food in Stony Stratford.",
      canonical: "/book",
    },
    hero: {
      eyebrow: "Book a table",
      title: "Book a table for a proper pub visit on London Road.",
      description:
        "Use the online booking route first, then call or email us if you are planning something more specific.",
      primaryAction: { href: bookingHref, label: "Book online" },
      secondaryAction: { href: sitePhoneHref, label: "Call the pub" },
    },
    schema: { localBusiness: true, faq: true },
    stickySecondaryAction: { href: sitePhoneHref, label: "Call" },
  },
  {
    href: "/events",
    label: "Events",
    navLabel: "Events",
    primaryNav: true,
    sitemap: true,
    published: true,
    meta: {
      title: "What’s On in Stony Stratford",
      description:
        "See what’s on at The Old School House, from live sport and quiz nights to tasting evenings and community-led pub events.",
      canonical: "/events",
    },
    hero: {
      eyebrow: "What’s on",
      title: "More reasons to come back than just the first pint.",
      description:
        "Match days, tasting evenings, quiz nights, and community-led plans all have a place here, with food and drinks strong enough to make a longer stay feel easy.",
      primaryAction: { href: bookOnlineHref, label: "Book for an event night" },
      secondaryAction: {
        href: "/private-hire",
        label: "Planning something bigger?",
      },
    },
    schema: { faq: true, event: featureFlags.eventScheduleConfirmed },
    stickySecondaryAction: { href: "/private-hire", label: "Enquire" },
  },
  {
    href: "/private-hire",
    label: "Private Hire",
    primaryNav: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Private Hire in Stony Stratford",
      description:
        "Plan birthdays, family gatherings, wakes, sports socials, and work drinks at The Old School House in Stony Stratford.",
      canonical: "/private-hire",
    },
    hero: {
      eyebrow: "Private hire",
      title:
        "A welcoming pub for birthdays, gatherings, and informal occasions.",
      description:
        "From work drinks and sports groups to wakes and family get-togethers, The Old School House keeps planning simple and the atmosphere warm.",
      primaryAction: { href: siteEmailHref, label: "Make an enquiry" },
      secondaryAction: {
        href: sitePhoneHref,
        label: "Call to talk it through",
      },
    },
    schema: { faq: true, localBusiness: true },
    stickySecondaryAction: { href: siteEmailHref, label: "Enquire" },
  },
  {
    href: "/find-us",
    label: "Find Us",
    primaryNav: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Find Our Pub on London Road, Stony Stratford",
      description:
        "Find The Old School House on London Road with address details, map links, parking notes, and contact options for your visit.",
      canonical: "/find-us",
    },
    hero: {
      eyebrow: "Find us",
      title: "Everything you need to find us on London Road.",
      description:
        "Address, map, parking notes, and the quickest ways to call or get directions before you set off.",
      primaryAction: { href: directionsHref, label: "Get directions" },
      secondaryAction: { href: sitePhoneHref, label: "Call the pub" },
    },
    schema: { localBusiness: true, faq: true },
    stickySecondaryAction: { href: directionsHref, label: "Directions" },
  },
  {
    href: "/sunday-roast",
    label: "Sunday Roast",
    sitemap: true,
    published: featureFlags.sundayRoastConfirmed,
    meta: {
      title: "Sunday Roast in Stony Stratford",
      description:
        "Join us for Sunday roast at a traditional Stony Stratford pub with a menu that gives everyone at the table a reason to stay.",
      canonical: "/sunday-roast",
    },
    hero: {
      eyebrow: "Sunday roast",
      title: "Sunday roast in a proper Stony Stratford pub.",
      description:
        "Available every Sunday from 12pm, with roast potatoes, seasonal vegetables, Yorkshire pudding, and gravy served as standard.",
      primaryAction: { href: bookOnlineHref, label: "Book Sunday lunch" },
      secondaryAction: { href: "/menu", label: "See the menu" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/nepalese-kitchen",
    label: "Nepalese Kitchen",
    sitemap: true,
    published: true,
    meta: {
      title: "Nepalese Kitchen in Stony Stratford",
      description:
        "Discover the Nepalese kitchen inside The Old School House, from momo and curries to grilled dishes worth ordering in a pub setting.",
      canonical: "/nepalese-kitchen",
    },
    hero: {
      eyebrow: "Nepalese kitchen",
      title: "The Nepalese kitchen inside our traditional pub.",
      description:
        "The pub brings people in. The kitchen is what makes the meal more memorable, especially if you start with the momo and order across the house favourites.",
      primaryAction: { href: bookOnlineHref, label: "Book to try it" },
      secondaryAction: { href: "/menu", label: "View menu" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/live-sport",
    label: "Live Sport",
    sitemap: true,
    published: true,
    meta: {
      title: "Live Sport Pub in Stony Stratford",
      description:
        "Watch live sport at The Old School House, a traditional Stony Stratford pub with food, drinks, and easy booking for sport-led visits.",
      canonical: "/live-sport",
    },
    hero: {
      eyebrow: "Live sport",
      title: "A live sport pub that still feels like a proper local.",
      description:
        "Come in for the sport, stay for the food, and book ahead when you want the table sorted before you arrive.",
      primaryAction: { href: bookOnlineHref, label: "Book a table" },
      secondaryAction: { href: "/events", label: "See what’s on" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: bookOnlineHref, label: "Book" },
  },
  {
    href: "/beer-garden-stony-stratford",
    label: "Beer Garden",
    sitemap: true,
    published: true,
    meta: {
      title: "Beer Garden in Stony Stratford",
      description:
        "Enjoy outdoor drinks and dining in the front garden and courtyard at The Old School House on London Road.",
      canonical: "/beer-garden-stony-stratford",
    },
    hero: {
      eyebrow: "Outdoor seating",
      title: "Outdoor drinks and dining in Stony Stratford.",
      description:
        "The front garden and courtyard give you more than one way to settle in when the weather is on your side.",
      primaryAction: { href: bookOnlineHref, label: "Book a table" },
      secondaryAction: { href: "/find-us", label: "Plan your visit" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: directionsHref, label: "Directions" },
  },
  {
    href: "/group-dining-celebrations",
    label: "Group Dining",
    sitemap: true,
    published: true,
    meta: {
      title: "Group Dining in Stony Stratford",
      description:
        "Plan group dining, birthday meals, and easy celebrations at The Old School House in Stony Stratford.",
      canonical: "/group-dining-celebrations",
    },
    hero: {
      eyebrow: "Group dining",
      title: "Group dining that feels easy to organise.",
      description:
        "The pub works well when the table wants a mix of familiar pub comfort, Nepalese dishes, and a reason to stay for another round.",
      primaryAction: { href: "/private-hire", label: "Plan a group booking" },
      secondaryAction: { href: bookOnlineHref, label: "Book a table" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/private-hire", label: "Enquire" },
  },
  {
    href: "/wakes-life-celebrations",
    label: "Wakes & Life Celebrations",
    sitemap: true,
    published: true,
    meta: {
      title: "Wakes and Life Celebrations in Stony Stratford",
      description:
        "Talk to The Old School House about a calm planning process and a £13-per-guest wakes buffet in Stony Stratford.",
      canonical: "/wakes-life-celebrations",
    },
    hero: {
      eyebrow: "Wakes and life celebrations",
      title:
        "A calm, straightforward way to plan a wake or celebration of life.",
      description:
        "Bring everyone together with a quietly considered buffet from The Old School House kitchen, served in the pub and shaped around the day.",
      primaryAction: { href: sitePhoneHref, label: "Call to talk it through" },
      secondaryAction: { href: siteEmailHref, label: "Email the team" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: siteEmailHref, label: "Enquire" },
  },
  {
    href: "/menu-information",
    label: "Menu Information",
    resource: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Menu Information and Dietary Help",
      description:
        "Find the easiest way to check allergens, dietary questions, and menu browsing options before you visit.",
      canonical: "/menu-information",
    },
    hero: {
      eyebrow: "Menu information",
      title:
        "The easiest place to start if you have a menu or allergy question.",
      description:
        "Use this page for dietary guidance, menu-format help, and the quickest route to asking the pub directly when something matters to today.",
      primaryAction: { href: "/menu", label: "Browse the live menu" },
      secondaryAction: {
        href: siteMenuPdfHref,
        label: "Download PDF menu",
        download: true,
      },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: sitePhoneHref, label: "Call" },
  },
  {
    href: "/takeaway-menu",
    label: "Takeaway Menu",
    resource: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Takeaway Menu",
      description:
        "Browse the takeaway menu, then call The Old School House when you are ready to place a collection order.",
      canonical: "/takeaway-menu",
    },
    hero: {
      eyebrow: "Takeaway",
      title: "Browse at home, order by phone, collect from the pub.",
      description:
        "Collection-only takeaway stays simple when you browse first, call second, and use the live menu if you want the quickest route through the dishes.",
      primaryAction: {
        href: siteMenuPdfHref,
        label: "Download PDF menu",
        download: true,
      },
      secondaryAction: { href: sitePhoneHref, label: "Call the pub" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: sitePhoneHref, label: "Call" },
  },
  {
    href: "/privacy",
    label: "Privacy",
    sitemap: true,
    published: true,
    meta: {
      title: "Privacy",
      description:
        "A simple privacy page covering booking details, messages, cookies, and how to get in touch.",
      canonical: "/privacy",
    },
  },
  {
    href: "/tos",
    label: "Terms",
    sitemap: true,
    published: true,
    meta: {
      title: "Booking and Website Terms",
      description:
        "A short, guest-friendly summary of bookings, menus, allergies, and using the website.",
      canonical: "/tos",
    },
  },
  {
    href: "/book-online",
    label: "Book Online",
    sitemap: false,
    published: false,
    meta: {
      title: "Book Online",
      description:
        "Legacy booking route that redirects to the live booking provider.",
      canonical: "/book-online",
    },
  },
  {
    href: "/wakes-menu",
    label: "Wakes Menu",
    sitemap: false,
    published: false,
    meta: {
      title: "Wakes Menu",
      description:
        "Legacy wakes route that redirects to the current wakes and life celebrations page.",
      canonical: "/wakes-menu",
    },
  },
  {
    href: "/dog-friendly-pub-stony-stratford",
    label: "Dog Friendly",
    resource: true,
    sitemap: featureFlags.dogPolicyConfirmed,
    published: featureFlags.dogPolicyConfirmed,
    meta: {
      title: "Dog-Friendly Pub in Stony Stratford",
      description:
        "Bring the dog along to The Old School House, a dog-friendly Stony Stratford pub with outdoor seating and an easy London Road location.",
      canonical: "/dog-friendly-pub-stony-stratford",
    },
    hero: {
      eyebrow: "Dog-friendly pub",
      title: "A dog-friendly pub stop in Stony Stratford.",
      description:
        "With a front garden, private courtyard, and an easy London Road location, The Old School House works well when the dog is part of the plan too.",
      primaryAction: { href: bookOnlineHref, label: "Book a table" },
      secondaryAction: { href: "/find-us", label: "Plan your visit" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: directionsHref, label: "Directions" },
  },
  {
    href: "/family-friendly-pub-stony-stratford",
    label: "Family Friendly",
    resource: true,
    sitemap: featureFlags.familyPolicyConfirmed,
    published: featureFlags.familyPolicyConfirmed,
    meta: {
      title: "Family-Friendly Pub in Stony Stratford",
      description:
        "A welcoming pub in Stony Stratford for relaxed family meals, Sunday lunches, and mixed-group dining.",
      canonical: "/family-friendly-pub-stony-stratford",
    },
    hero: {
      eyebrow: "Family-friendly pub",
      title: "Family meals feel easy here.",
      description:
        "The Old School House is built around a warm traditional pub setting, outdoor space, and a menu that makes family visits easier to organise.",
      primaryAction: { href: bookOnlineHref, label: "Book a family table" },
      secondaryAction: { href: "/menu", label: "Browse the menu" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/accessibility",
    label: "Accessibility",
    resource: true,
    sitemap: featureFlags.accessibilityConfirmed,
    published: featureFlags.accessibilityConfirmed,
    meta: {
      title: "Accessibility Information",
      description:
        "Accessibility information for visiting The Old School House on London Road, including arrival help, parking notes, and the best way to plan ahead.",
      canonical: "/accessibility",
    },
    hero: {
      eyebrow: "Accessibility information",
      title: "A little planning makes arrival easier.",
      description:
        "If you need help with access, parking, prams, seating, or the best route into the pub, The Old School House team is happy to talk it through before you travel.",
      primaryAction: { href: sitePhoneHref, label: "Call the pub" },
      secondaryAction: { href: "/find-us", label: "Find us" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: sitePhoneHref, label: "Call" },
  },
]

export const siteNav: NavItem[] = routeConfigs
  .filter((route) => route.primaryNav && route.published)
  .map((route) => ({
    href: route.href,
    label: route.navLabel ?? route.label,
  }))

const footerCoreRouteHrefs = new Set([
  "/menu",
  "/book",
  "/events",
  "/private-hire",
  "/find-us",
])

export const siteFooterCoreLinks: NavItem[] = routeConfigs
  .filter((route) => route.published && footerCoreRouteHrefs.has(route.href))
  .map((route) => ({
    href: route.href,
    label: route.navLabel ?? route.label,
  }))

const supportRouteHrefs = new Set([
  "/menu-information",
  "/takeaway-menu",
  "/accessibility",
  "/wakes-life-celebrations",
])

export const siteResources: NavItem[] = routeConfigs
  .filter((route) => route.published && supportRouteHrefs.has(route.href))
  .map((route) => ({
    href: route.href,
    label: route.label,
  }))

export const siteLegalLinks: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/tos", label: "Terms" },
]

export const publishedSitemapRoutes = routeConfigs.filter(
  (route) => route.sitemap && route.published
)

export const publishedRouteHrefs = publishedSitemapRoutes.map(
  (route) => route.href
)

export function getRouteConfig(href: string) {
  return routeConfigs.find((route) => route.href === href)
}
