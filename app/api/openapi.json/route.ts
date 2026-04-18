import { appendAgentDiscoveryHeaders } from "@/lib/agent-ready"
import { buildOpenApiDocument } from "@/lib/site-api"

export function GET() {
  const headers = new Headers({
    "content-type": "application/openapi+json; charset=utf-8",
    "cache-control": "public, max-age=3600",
  })

  appendAgentDiscoveryHeaders(headers)

  return new Response(JSON.stringify(buildOpenApiDocument(), null, 2), {
    headers,
  })
}
