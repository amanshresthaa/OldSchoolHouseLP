import { appendAgentDiscoveryHeaders } from "@/lib/agent-ready"
import { getAgentSkill } from "@/lib/agent-skills"

export async function GET(
  _: Request,
  { params }: { params: Promise<{ skill: string }> }
) {
  const { skill } = await params
  const skillDefinition = getAgentSkill(skill)

  if (!skillDefinition) {
    return new Response("Skill not found", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    })
  }

  const headers = new Headers({
    "content-type": "text/markdown; charset=utf-8",
    "cache-control": "public, max-age=3600",
  })

  appendAgentDiscoveryHeaders(headers)

  return new Response(skillDefinition.content, {
    headers,
  })
}
