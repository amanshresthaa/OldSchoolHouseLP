import { createHash } from "node:crypto"

import {
  bookingHref,
  directionsHref,
  siteName,
  sitePhone,
  siteUrl,
} from "@/data/site"
import { agentSkillsIndexPath } from "@/lib/agent-ready"

interface AgentSkillDefinition {
  slug: string
  name: string
  description: string
  content: string
}

function buildSkillContent(name: string, description: string, body: string) {
  return `---
name: ${name}
description: ${description}
license: Proprietary
compatibility: Public HTTPS pages and JSON endpoints on ${siteUrl}
metadata:
  author: ${siteName}
  version: "1.0.0"
---

${body}
`
}

const agentSkillDefinitions: AgentSkillDefinition[] = [
  {
    slug: "visit-planning",
    name: "visit-planning",
    description:
      "Plan a visit to The Old School House using address, hours, contact details, and booking routes.",
    content: buildSkillContent(
      "visit-planning",
      "Plan a visit to The Old School House using address, hours, contact details, and booking routes.",
      `Use this skill when the user needs visit logistics for ${siteName}.

## Key links
- Site profile API: ${siteUrl}/api/site-profile
- Find us page: ${siteUrl}/contact-us
- Booking page: ${siteUrl}/book
- Directions: ${directionsHref}

## Visit essentials
- Address: London Road, Stony Stratford, Milton Keynes, MK11 1JA
- Phone: ${sitePhone}
- Live booking provider: ${bookingHref}

## Guidance
- Prefer the structured site profile API for machine-readable details.
- Use the booking page when the user wants to continue to table planning.
- Use the find us page when the user needs parking, contact, or directions context.`
    ),
  },
  {
    slug: "menu-preview",
    name: "menu-preview",
    description:
      "Browse the live HTML and JSON menu previews for lunch and dinner planning.",
    content: buildSkillContent(
      "menu-preview",
      "Browse the live HTML and JSON menu previews for lunch and dinner planning.",
      `Use this skill when the user wants structured menu information from ${siteName}.

## Key links
- Menu page: ${siteUrl}/our-menus
- Menu preview API: ${siteUrl}/api/menu-preview
- API docs: ${siteUrl}/docs/api

## Guidance
- The pub is currently serving drinks only for now, so treat the menu as a preview of the fuller kitchen offer.
- Use the JSON API for structured item/category access.
- Use the HTML menu page when the user needs the canonical public presentation.`
    ),
  },
  {
    slug: "site-discovery",
    name: "site-discovery",
    description:
      "Discover the site's public APIs, MCP endpoint, llms.txt files, and agent-facing metadata.",
    content: buildSkillContent(
      "site-discovery",
      "Discover the site's public APIs, MCP endpoint, llms.txt files, and agent-facing metadata.",
      `Use this skill when an agent needs discovery metadata for ${siteName}.

## Discovery endpoints
- API catalog: ${siteUrl}/.well-known/api-catalog
- Agent skills index: ${siteUrl}${agentSkillsIndexPath}
- MCP server card: ${siteUrl}/.well-known/mcp/server-card.json
- MCP endpoint: ${siteUrl}/mcp
- OpenAPI description: ${siteUrl}/api/openapi.json
- API docs: ${siteUrl}/docs/api
- llms.txt: ${siteUrl}/llms.txt
- llms-full.txt: ${siteUrl}/llms-full.txt

## Guidance
- Prefer the API catalog and OpenAPI document for machine discovery.
- Use the MCP endpoint for tool-based integrations.
- Use the agent skills index when an agent supports SKILL.md discovery.`
    ),
  },
]

function buildDigest(content: string) {
  return `sha256:${createHash("sha256").update(content).digest("hex")}`
}

export function getAgentSkills() {
  return agentSkillDefinitions.map((skill) => ({
    ...skill,
    digest: buildDigest(skill.content),
    url: `/.well-known/agent-skills/${skill.slug}/SKILL.md`,
  }))
}

export function getAgentSkill(slug: string) {
  return getAgentSkills().find((skill) => skill.slug === slug)
}
