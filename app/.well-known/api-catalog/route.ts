import {
  apiCatalogPath,
  apiDocsPath,
  appendAgentDiscoveryHeaders,
  openApiPath,
} from "@/lib/agent-ready"
import { siteUrl } from "@/data/site"

function buildApiCatalogDocument() {
  return {
    linkset: [
      {
        anchor: `${siteUrl}${apiCatalogPath}`,
        item: [{ href: `${siteUrl}/api` }, { href: `${siteUrl}/mcp` }],
      },
      {
        anchor: `${siteUrl}/api`,
        "service-desc": [
          {
            href: `${siteUrl}${openApiPath}`,
            type: "application/openapi+json",
          },
        ],
        status: [
          {
            href: `${siteUrl}/api/health`,
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: `${siteUrl}${apiDocsPath}`,
            type: "text/html",
          },
        ],
      },
      {
        anchor: `${siteUrl}/mcp`,
        "service-desc": [
          {
            href: `${siteUrl}/.well-known/mcp/server-card.json`,
            type: "application/json",
          },
        ],
        status: [
          {
            href: `${siteUrl}/api/health`,
            type: "application/json",
          },
        ],
        "service-doc": [
          {
            href: `${siteUrl}${apiDocsPath}`,
            type: "text/html",
          },
        ],
      },
    ],
  }
}

function buildHeaders() {
  const headers = new Headers({
    "content-type":
      'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"; charset=utf-8',
    "cache-control": "public, max-age=3600",
  })

  appendAgentDiscoveryHeaders(headers)

  return headers
}

export function GET() {
  return new Response(JSON.stringify(buildApiCatalogDocument(), null, 2), {
    headers: buildHeaders(),
  })
}

export function HEAD() {
  return new Response(null, {
    headers: buildHeaders(),
  })
}
