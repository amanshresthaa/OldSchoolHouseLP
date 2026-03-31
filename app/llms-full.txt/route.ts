import { publishedSitemapRoutes } from "@/data/site-routes"
import {
  bookingHref,
  directionsHref,
  siteAddress,
  siteDescription,
  siteEmail,
  siteName,
  sitePhone,
  siteUrl,
} from "@/data/site"

function buildLlmsFullText() {
  const routeLines = publishedSitemapRoutes
    .map(
      (route) =>
        `## ${route.meta.title}\nURL: ${siteUrl}${route.href}\nSummary: ${route.meta.description}`
    )
    .join("\n\n")

  return `# ${siteName}

${siteDescription}

Canonical site URL: ${siteUrl}
Address: ${siteAddress}
Phone: ${sitePhone}
Email: ${siteEmail}
Directions: ${directionsHref}
Booking provider: ${bookingHref}

## Brand summary
${siteName} is a traditional pub on London Road in Stony Stratford with a Nepalese kitchen, pub classics, Sunday roast, live sport, outdoor seating, and bookable tables for everyday visits and group occasions.

## Important pages
${routeLines}
`
}

export function GET() {
  return new Response(buildLlmsFullText(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}
