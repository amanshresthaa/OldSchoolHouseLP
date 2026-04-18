import { appendAgentDiscoveryHeaders } from "@/lib/agent-ready"
import { getAgentSkills } from "@/lib/agent-skills"

export function GET() {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "public, max-age=3600",
  })

  appendAgentDiscoveryHeaders(headers)

  return new Response(
    JSON.stringify(
      {
        $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
        skills: getAgentSkills().map((skill) => ({
          name: skill.slug,
          type: "skill-md",
          description: skill.description,
          url: skill.url,
          digest: skill.digest,
        })),
      },
      null,
      2
    ),
    {
      headers,
    }
  )
}
