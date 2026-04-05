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
      title: "Pub in Stony Stratford with Nepalese Kitchen",
      description:
        "Visit a recently refurbished traditional pub on London Road in Stony Stratford with a Nepalese kitchen, live sport, outdoor seating, and easy table booking.",
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
      title: "About Our Stony Stratford Pub and Nepalese Kitchen",
      description:
        "Learn about The Old School House, a traditional pub on London Road in Stony Stratford with a Nepalese kitchen, local roots, and a welcoming atmosphere.",
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
    href: "/about/sanjog-gautam",
    label: "Sanjog Gautam",
    sitemap: true,
    published: true,
    meta: {
      title: "Sanjog Gautam | Operator Profile",
      description:
        'Meet Sanjog "San" Gautam, the operator behind The Old School House and a vastly experienced business and restaurant manager with cafe, restaurant, and pub experience.',
      canonical: "/about/sanjog-gautam",
    },
    hero: {
      eyebrow: "Operator profile",
      title:
        'Sanjog "San" Gautam leads the pub with hands-on hospitality experience.',
      description:
        "San brings real cafe, restaurant, and pub operating experience to The Old School House, shaping how the room feels, how the service works, and how the menu earns repeat visits.",
      primaryAction: { href: bookOnlineHref, label: "Book a table" },
      secondaryAction: { href: "/about", label: "Back to About" },
    },
    stickySecondaryAction: { href: "/about", label: "About" },
  },
  {
    href: "/menu",
    label: "Menu",
    primaryNav: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Stony Stratford Pub Menu and Nepalese Food",
      description:
        "Browse the live pub menu for Nepalese dishes, pub classics, Sunday roast favourites, desserts, sides, and drinks at The Old School House in Stony Stratford.",
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
      title: "Book a Table at Our Stony Stratford Pub",
      description:
        "Book a table at The Old School House for pub drinks, Nepalese food, Sunday roast, and group dining in Stony Stratford.",
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
      title: "Pub Events and Live Sport in Stony Stratford",
      description:
        "See pub events at The Old School House, from Sky Sports and TNT Sports match nights to tastings, team socials, and community events in Stony Stratford.",
      canonical: "/events",
    },
    hero: {
      eyebrow: "What’s on",
      title: "More reasons to come back than just the first pint.",
      description:
        "Match days, themed evenings, tastings, and community-led plans all have a place here, with food and space strong enough to make a longer stay feel easy.",
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
      title: "Private Hire Pub in Stony Stratford",
      description:
        "Plan private hire at The Old School House for birthdays, wakes, family gatherings, sports socials, and work drinks in Stony Stratford, with 125-cover flexibility inside and out.",
      canonical: "/private-hire",
    },
    hero: {
      eyebrow: "Private hire",
      title:
        "A welcoming pub for birthdays, gatherings, and informal occasions.",
      description:
        "From work drinks and sports groups to wakes and family get-togethers, The Old School House keeps planning simple with flexible indoor and outdoor space.",
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
      title: "Find Our Stony Stratford Pub on London Road",
      description:
        "Find The Old School House on London Road in Stony Stratford with directions, address details, parking notes, map links, and contact options.",
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
    href: "/nepalese-food-milton-keynes",
    label: "Nepalese Food in Milton Keynes",
    resource: true,
    sitemap: true,
    published: true,
    meta: {
      title: "The Ultimate Guide to Nepalese Food in Milton Keynes",
      description:
        "Understand momo, curries, achaar, grilled dishes, and the core anchors of Nepalese food in Milton Keynes with this guide from The Old School House in Stony Stratford.",
      canonical: "/nepalese-food-milton-keynes",
    },
    hero: {
      eyebrow: "Pillar guide",
      title:
        "A complete guide to Nepalese food in Milton Keynes, built for first-time diners and curious locals alike.",
      description:
        "Use this page when you want the cuisine explained properly before you move into a menu, a signature dish guide, or a real booking.",
      primaryAction: { href: "/menu", label: "Browse the menu" },
      secondaryAction: { href: bookOnlineHref, label: "Book a table" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/what-is-nepalese-food",
    label: "What Is Nepalese Food",
    resource: true,
    sitemap: true,
    published: true,
    meta: {
      title: "What Is Nepalese Food? A Simple Pub Guide",
      description:
        "Read a simple guide to Nepalese food at The Old School House, from momo and curries to grilled dishes that fit naturally into a Stony Stratford pub visit.",
      canonical: "/what-is-nepalese-food",
    },
    hero: {
      eyebrow: "Food guide",
      title: "A simple way to understand Nepalese food before you order.",
      description:
        "Use this page when the food sounds interesting but you want the dishes explained plainly before the booking or the first order.",
      primaryAction: { href: "/nepalese-kitchen", label: "See the kitchen" },
      secondaryAction: { href: "/menu", label: "Browse the menu" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/momo",
    label: "Momo",
    resource: true,
    sitemap: true,
    published: true,
    meta: {
      title: "What Is Momo? Nepalese Dumplings Explained",
      description:
        "Learn what momo is, why it is the easiest first Nepalese dish to try, and how it opens up the menu at The Old School House.",
      canonical: "/momo",
    },
    hero: {
      eyebrow: "Signature dish",
      title: "Momo is the first dish many tables should start with.",
      description:
        "If you want one Nepalese dish that makes the menu feel approachable straight away, this is the clearest starting point.",
      primaryAction: { href: "/menu", label: "Browse the menu" },
      secondaryAction: { href: bookOnlineHref, label: "Book a table" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/gluten-free-curries-stony-stratford",
    label: "Gluten-Free Curries",
    resource: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Gluten-Free Curries and Nepalese Dishes in Stony Stratford",
      description:
        "See which gluten-free curries, starters, grills, and Nepalese dishes are highlighted on the live menu at The Old School House in Stony Stratford.",
      canonical: "/gluten-free-curries-stony-stratford",
    },
    hero: {
      eyebrow: "Dietary guide",
      title:
        "A practical guide to gluten-free curries and Nepalese dishes in Stony Stratford.",
      description:
        "Use this page to shortlist dishes from the live menu, then confirm the detail with the team before you order.",
      primaryAction: { href: "/menu", label: "Browse the live menu" },
      secondaryAction: { href: "/menu-information", label: "Menu help" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: sitePhoneHref, label: "Call" },
  },
  {
    href: "/nepalese-vs-indian-food",
    label: "Nepalese vs Indian Food",
    resource: true,
    sitemap: true,
    published: true,
    meta: {
      title: "Nepalese vs Indian Food Explained",
      description:
        "Read a plain-English guide to the difference between Nepalese and Indian food, with menu examples from The Old School House in Stony Stratford.",
      canonical: "/nepalese-vs-indian-food",
    },
    hero: {
      eyebrow: "Comparison guide",
      title:
        "Nepalese and Indian food overlap in places, but they do not land the same on the plate.",
      description:
        "Use this page if you know Indian dishes already and want a quick, clearer picture of what changes when you move into the Nepalese side of the menu.",
      primaryAction: { href: "/nepalese-kitchen", label: "See the kitchen" },
      secondaryAction: { href: "/menu", label: "Browse the menu" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/traditional-pub-with-nepalese-kitchen",
    label: "Traditional Pub with Nepalese Kitchen",
    resource: true,
    sitemap: false,
    published: true,
    meta: {
      title: "Traditional Pub with Nepalese Food in Stony Stratford",
      description:
        "See why The Old School House works as both a proper Stony Stratford pub and a place for Nepalese food, pub classics, and memorable group meals.",
      canonical: "/traditional-pub-with-nepalese-kitchen",
    },
    hero: {
      eyebrow: "Comparison guide",
      title:
        "The pub feel comes first here, and the Nepalese kitchen makes the meal more memorable second.",
      description:
        "This guide helps when you are comparing familiar local pub comfort with the idea of a venue that gives the food more identity once you sit down.",
      primaryAction: { href: "/about", label: "About the pub" },
      secondaryAction: { href: "/menu", label: "Browse the menu" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
  },
  {
    href: "/where-to-eat-in-stony-stratford",
    label: "Where to Eat in Stony Stratford",
    resource: true,
    sitemap: false,
    published: true,
    meta: {
      title: "Where to Eat in Stony Stratford",
      description:
        "A practical local guide to choosing where to eat in Stony Stratford, and why The Old School House works for more than one kind of plan.",
      canonical: "/where-to-eat-in-stony-stratford",
    },
    hero: {
      eyebrow: "Local guide",
      title:
        "When you have not chosen the venue yet, start with the kind of outing you want.",
      description:
        "This page helps when the question is still where to eat in Stony Stratford rather than whether you are ready to book already.",
      primaryAction: { href: "/menu", label: "Browse the menu" },
      secondaryAction: { href: bookOnlineHref, label: "Book a table" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: directionsHref, label: "Directions" },
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
      title: "Beer Garden Pub in Stony Stratford",
      description:
        "Enjoy outdoor drinks and dining in the beer garden and courtyard at The Old School House on London Road in Stony Stratford.",
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
      title: "Group Dining Pub in Stony Stratford",
      description:
        "Plan group dining, birthday meals, and easy celebrations at The Old School House, a traditional pub in Stony Stratford with Nepalese food and pub classics.",
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
      title: "Wake Venue in Stony Stratford",
      description:
        "Talk to The Old School House about a calm planning process, buffet options, and a welcoming wake venue in Stony Stratford.",
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
      title: "Allergy Information and Menu Help",
      description:
        "Find allergy information, dietary help, and the easiest way to browse the menu before you visit The Old School House.",
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
      title: "Takeaway Menu in Stony Stratford",
      description:
        "Browse the takeaway menu, then call The Old School House in Stony Stratford when you are ready to place a collection order.",
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
    href: "/guides",
    label: "Guides",
    resource: true,
    sitemap: false,
    published: true,
    meta: {
      title: "Stony Stratford Food and Pub Guides",
      description:
        "Browse guides on Nepalese food, momo, local dining in Stony Stratford, and how The Old School House pub and menu work.",
      canonical: "/guides",
    },
    hero: {
      eyebrow: "Guides",
      title: "Guides that make the pub, the food, and the next step clearer.",
      description:
        "Use these pages when you are comparing places to eat, trying to understand Nepalese food, or narrowing down whether this pub is the right fit.",
      primaryAction: { href: "/menu", label: "Browse the menu" },
      secondaryAction: { href: bookOnlineHref, label: "Book a table" },
    },
    schema: { faq: true },
    stickySecondaryAction: { href: "/menu", label: "Menu" },
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
      title: "Pub Accessibility Information in Stony Stratford",
      description:
        "Read accessibility information for visiting The Old School House on London Road in Stony Stratford, including arrival help, parking notes, and planning advice.",
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
  "/guides",
  "/nepalese-food-milton-keynes",
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
