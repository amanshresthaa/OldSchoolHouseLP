import { agentContentSignal } from "@/lib/agent-ready"
import { siteUrl } from "@/data/site"

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    `Content-Signal: ${agentContentSignal}`,
    `Sitemap: ${siteUrl}/sitemap.xml`,
    `Host: ${siteUrl}`,
    "",
  ].join("\n")

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}
