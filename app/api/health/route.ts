import { appendAgentDiscoveryHeaders } from "@/lib/agent-ready"
import { buildApiHealthPayload } from "@/lib/site-api"

export function GET() {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "public, max-age=300",
  })

  appendAgentDiscoveryHeaders(headers)

  return Response.json(buildApiHealthPayload(), { headers })
}
