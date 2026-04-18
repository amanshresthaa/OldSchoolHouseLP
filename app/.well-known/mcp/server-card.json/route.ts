import { appendAgentDiscoveryHeaders } from "@/lib/agent-ready"
import { buildMcpServerCard } from "@/lib/site-api"

export function GET() {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "public, max-age=3600",
    "access-control-allow-origin": "*",
  })

  appendAgentDiscoveryHeaders(headers)

  return new Response(JSON.stringify(buildMcpServerCard(), null, 2), {
    headers,
  })
}
