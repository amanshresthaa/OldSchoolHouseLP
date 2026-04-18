import { appendAgentDiscoveryHeaders } from "@/lib/agent-ready"
import { buildMenuPreviewPayload } from "@/lib/site-api"

export function GET() {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "public, max-age=3600",
  })

  appendAgentDiscoveryHeaders(headers)

  return Response.json(buildMenuPreviewPayload(), { headers })
}
