export const publicRouteChecks = [
  { path: "/", title: "Traditional Pub in Stony Stratford" },
  { path: "/about", title: "About Our Pub and Nepalese Kitchen" },
  {
    path: "/menu",
    title: "Pub Menu and Nepalese Food in Stony Stratford",
  },
  {
    path: "/book",
    title: "Book a Table in Stony Stratford",
  },
  {
    path: "/events",
    title: "What’s On in Stony Stratford",
  },
  { path: "/find-us", title: "Find Our Pub on London Road, Stony Stratford" },
  { path: "/private-hire", title: "Private Hire in Stony Stratford" },
  { path: "/sunday-roast", title: "Sunday Roast in Stony Stratford" },
  { path: "/nepalese-kitchen", title: "Nepalese Kitchen in Stony Stratford" },
  { path: "/momo", title: "Momo in Stony Stratford" },
  { path: "/nepalese-vs-indian-food", title: "Nepalese vs Indian Food" },
  { path: "/what-is-nepalese-food", title: "What is Nepalese Food" },
  {
    path: "/traditional-pub-with-nepalese-kitchen",
    title: "Traditional Pub with a Nepalese Kitchen",
  },
  {
    path: "/where-to-eat-in-stony-stratford",
    title: "Where to Eat in Stony Stratford",
  },
  { path: "/guides", title: "Pub Guides and Food Guides" },
  { path: "/live-sport", title: "Live Sport Pub in Stony Stratford" },
  {
    path: "/beer-garden-stony-stratford",
    title: "Beer Garden in Stony Stratford",
  },
  {
    path: "/group-dining-celebrations",
    title: "Group Dining in Stony Stratford",
  },
  {
    path: "/dog-friendly-pub-stony-stratford",
    title: "Dog-Friendly Pub in Stony Stratford",
  },
  {
    path: "/family-friendly-pub-stony-stratford",
    title: "Family-Friendly Pub in Stony Stratford",
  },
  {
    path: "/accessibility",
    title: "Accessibility Information",
  },
  {
    path: "/privacy",
    title: "Privacy",
  },
  {
    path: "/tos",
    title: "Booking and Website Terms",
  },
  {
    path: "/wakes-life-celebrations",
    title: "Wakes and Life Celebrations in Stony Stratford",
  },
] as const

export const responsivePages = [
  "/",
  "/about",
  "/book",
  "/events",
  "/find-us",
  "/private-hire",
  "/guides",
  "/sunday-roast",
  "/what-is-nepalese-food",
  "/traditional-pub-with-nepalese-kitchen",
  "/where-to-eat-in-stony-stratford",
  "/live-sport",
  "/dog-friendly-pub-stony-stratford",
  "/family-friendly-pub-stony-stratford",
  "/accessibility",
  "/privacy",
  "/tos",
  "/wakes-life-celebrations",
] as const

export const browserWarmupPaths = Array.from(
  new Set([...publicRouteChecks.map((route) => route.path), ...responsivePages])
)
