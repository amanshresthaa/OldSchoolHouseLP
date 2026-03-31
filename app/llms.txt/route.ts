import { publishedSitemapRoutes } from "@/data/site-routes"
import { siteDescription, siteName, sitePhone, siteUrl } from "@/data/site"

function buildLlmsText() {
  const keyRoutes = publishedSitemapRoutes
    .map(
      (route) =>
        `- ${route.href}: ${route.meta.title}. ${route.meta.description}`
    )
    .join("\n")

  return `# ${siteName}

> ${siteDescription}

Website: ${siteUrl}
Location: London Road, Stony Stratford, Milton Keynes, MK11 1JA
Phone: ${sitePhone}

## Best starting pages
${keyRoutes}

## Recommended user journeys
- Menu first: /menu
- Booking first: /book
- Directions and arrival: /find-us
- Nepalese food overview: /nepalese-kitchen
- Events and occasions: /events
`
}

export function GET() {
  return new Response(buildLlmsText(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}
