import { featuredMenuItems } from "@/lib/menu"
import { publishedSitemapRoutes, routeConfigs } from "@/data/site-routes"
import {
  bookingHref,
  directionsHref,
  homeReasons,
  openingHours,
  proofPoints,
  siteAddress,
  siteDescription,
  siteEmail,
  sitePhone,
  siteUrl,
} from "@/data/site"

export const agentContentSignal = "ai-train=no, search=yes, ai-input=no"
export const apiCatalogPath = "/.well-known/api-catalog"
export const agentSkillsIndexPath = "/.well-known/agent-skills/index.json"
export const mcpServerCardPath = "/.well-known/mcp/server-card.json"
export const apiDocsPath = "/docs/api"
export const openApiPath = "/api/openapi.json"
export const internalMarkdownRoutePath = "/agent-markdown"

const publishedRoutePaths = new Set(
  routeConfigs.filter((route) => route.published).map((route) => route.href)
)

const primaryRouteSummaries = publishedSitemapRoutes.slice(0, 6)

export function normalizePathname(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/"
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
}

export function isMarkdownEligiblePath(pathname: string) {
  return publishedRoutePaths.has(normalizePathname(pathname))
}

export function hasMarkdownPreference(acceptHeader: string | null) {
  return Boolean(acceptHeader?.toLowerCase().includes("text/markdown"))
}

export function appendVary(headers: Headers, value: string) {
  const current = headers.get("Vary")

  if (!current) {
    headers.set("Vary", value)
    return
  }

  const normalized = current
    .split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean)

  if (!normalized.includes(value.toLowerCase())) {
    headers.set("Vary", `${current}, ${value}`)
  }
}

export function appendAgentDiscoveryHeaders(headers: Headers) {
  headers.append("Link", `<${apiCatalogPath}>; rel="api-catalog"`)
  headers.append(
    "Link",
    `<${openApiPath}>; rel="service-desc"; type="application/openapi+json"`
  )
  headers.append(
    "Link",
    `<${apiDocsPath}>; rel="service-doc"; type="text/html"`
  )
  headers.append(
    "Link",
    `<${agentSkillsIndexPath}>; rel="describedby"; type="application/json"`
  )
  headers.append(
    "Link",
    `<${mcpServerCardPath}>; rel="describedby"; type="application/json"`
  )
  headers.append("Link", `</llms.txt>; rel="alternate"; type="text/plain"`)
  headers.append("Link", `</llms-full.txt>; rel="alternate"; type="text/plain"`)
  appendVary(headers, "Accept")
}

export function estimateMarkdownTokens(markdown: string) {
  return Math.max(1, Math.ceil(markdown.length / 4))
}

function toAbsoluteUrl(href: string) {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href
  }

  return `${siteUrl}${href}`
}

function buildCommonMarkdownFooter() {
  const relatedPages = primaryRouteSummaries
    .map(
      (route) =>
        `- [${route.meta.title}](${siteUrl}${route.href}) — ${route.meta.description}`
    )
    .join("\n")

  return [
    "## Visit Essentials",
    `- Address: ${siteAddress}`,
    `- Phone: ${sitePhone}`,
    `- Email: ${siteEmail}`,
    `- Directions: ${directionsHref}`,
    `- Booking: ${bookingHref}`,
    `- Opening hours: ${openingHours[0]?.hours ?? "See site for current hours"}`,
    "",
    "## Related Pages",
    relatedPages,
  ].join("\n")
}

function buildHomeMarkdown() {
  const reasons = homeReasons.map(
    (item) => `- ${item.title}: ${item.description}`
  )
  const proof = proofPoints
    .slice(0, 4)
    .map((item) => `- ${item.title}: ${item.description}`)
  const featuredItems = featuredMenuItems
    .slice(0, 4)
    .map((item) => `- ${item.name}: ${item.description}`)

  return [
    "## Why Visit",
    ...proof,
    "",
    "## Pub Character",
    ...reasons,
    "",
    "## Menu Highlights",
    ...featuredItems,
  ].join("\n")
}

function buildMenuMarkdown() {
  return [
    "## Current Service Status",
    "- The pub is serving drinks only for now.",
    "- The lunch and dinner menus are published as live HTML preview content for planning and agent access.",
    "",
    "## Featured Dishes",
    ...featuredMenuItems
      .slice(0, 6)
      .map((item) => `- ${item.name}: ${item.description}`),
    "",
    "## Menu Links",
    `- Main menu page: ${siteUrl}/our-menus`,
    `- Structured API preview: ${siteUrl}/api/menu-preview`,
  ].join("\n")
}

function buildBookMarkdown() {
  return [
    "## Booking Options",
    `- Booking page: ${siteUrl}/book`,
    `- Live booking provider: ${bookingHref}`,
    `- Call the pub: tel:${sitePhone.replace(/\s+/g, "")}`,
    `- Email the team: mailto:${siteEmail}`,
    "",
    "## Before You Visit",
    "- Check the current drinks-only service status before setting off if food service matters to the plan.",
    "- Use the menu page to preview the future kitchen offer.",
    "- Use the Find Us page for directions, address, and parking notes.",
  ].join("\n")
}

function buildFindUsMarkdown() {
  return [
    "## Find Us",
    `- Address: ${siteAddress}`,
    `- Directions: ${directionsHref}`,
    `- Phone: ${sitePhone}`,
    `- Email: ${siteEmail}`,
    `- Opening hours: ${openingHours[0]?.hours ?? "See the site for current hours"}`,
    "",
    "## Arrival Notes",
    "- Use the map and directions links on the site for turn-by-turn navigation.",
    "- The site includes parking and accessibility notes alongside contact options.",
  ].join("\n")
}

function buildDefaultMarkdown(routePath: string) {
  switch (routePath) {
    case "/":
      return buildHomeMarkdown()
    case "/our-menus":
      return buildMenuMarkdown()
    case "/book":
      return buildBookMarkdown()
    case "/contact-us":
      return buildFindUsMarkdown()
    default:
      return [
        "## Summary",
        "This page is part of the public site experience for The Old School House.",
        `Use the canonical page at ${siteUrl}${routePath} for the latest copy and calls to action.`,
      ].join("\n")
  }
}

export function buildMarkdownDocument(pathname: string) {
  const normalizedPath = normalizePathname(pathname)
  const route = routeConfigs.find((entry) => entry.href === normalizedPath)

  if (!route || !route.published) {
    return null
  }

  const hero = route.hero
  const actions = [
    hero?.primaryAction
      ? `- ${hero.primaryAction.label}: ${toAbsoluteUrl(hero.primaryAction.href)}`
      : null,
    hero?.secondaryAction
      ? `- ${hero.secondaryAction.label}: ${toAbsoluteUrl(hero.secondaryAction.href)}`
      : null,
  ].filter(Boolean)

  return [
    "---",
    `title: ${route.meta.title}`,
    `description: ${route.meta.description}`,
    `url: ${siteUrl}${route.href}`,
    "---",
    "",
    `# ${route.meta.title}`,
    "",
    siteDescription,
    "",
    "## Page Summary",
    route.meta.description,
    hero?.title ? `- On-page heading: ${hero.title}` : null,
    hero?.description ? `- On-page context: ${hero.description}` : null,
    "",
    actions.length > 0 ? ["## Key Actions", ...actions, ""].join("\n") : null,
    buildDefaultMarkdown(normalizedPath),
    "",
    buildCommonMarkdownFooter(),
  ]
    .filter((section): section is string => Boolean(section))
    .join("\n")
}
