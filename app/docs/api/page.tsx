import type { Metadata } from "next"
import Link from "next/link"

import { SectionHeading } from "@/components/site/SectionHeading"
import { siteName } from "@/data/site"
import { getSectionBandClass } from "@/lib/section-bands"

export const metadata: Metadata = {
  title: `API & Agent Discovery | ${siteName}`,
  description:
    "Public API, MCP, and agent discovery documentation for The Old School House website.",
}

const endpointGroups = [
  {
    title: "Discovery",
    items: [
      {
        href: "/.well-known/api-catalog",
        description: "RFC 9727 API catalog in application/linkset+json format.",
      },
      {
        href: "/api/openapi.json",
        description:
          "OpenAPI description for the public JSON and MCP endpoints.",
      },
      {
        href: "/.well-known/agent-skills/index.json",
        description:
          "Agent Skills discovery index with digests for each skill file.",
      },
      {
        href: "/.well-known/mcp/server-card.json",
        description:
          "MCP Server Card describing the public read-only MCP endpoint.",
      },
    ],
  },
  {
    title: "Public JSON API",
    items: [
      {
        href: "/api/health",
        description: "Health and timestamp for service monitoring.",
      },
      {
        href: "/api/site-profile",
        description: "Structured pub profile, contact details, and key pages.",
      },
      {
        href: "/api/menu-preview",
        description: "Structured menu preview for lunch and dinner browsing.",
      },
    ],
  },
  {
    title: "Agent Surfaces",
    items: [
      {
        href: "/mcp",
        description: "Public MCP endpoint exposing read-only site tools.",
      },
      {
        href: "/llms.txt",
        description: "High-level directory for LLMs and agents.",
      },
      {
        href: "/llms-full.txt",
        description: "Expanded long-form site reference for LLM ingestion.",
      },
    ],
  },
] as const

export default function ApiDocsPage() {
  return (
    <main>
      <section className={getSectionBandClass("plain", "page-section")}>
        <div className="section-shell flex flex-col gap-5">
          <SectionHeading
            eyebrow="API docs"
            title="Public agent and integration endpoints for The Old School House."
            description="This site publishes a small public discovery surface for agents: JSON endpoints, an API catalog, a read-only MCP endpoint, llms.txt files, and browser-side WebMCP tools."
          />
          <div className="surface-panel space-y-4 text-sm leading-relaxed text-on-surface md:text-base">
            <p>
              The current endpoints are read-only and public. No OAuth or OIDC
              discovery metadata is published because these APIs do not require
              authentication at this time.
            </p>
            <p>
              For automated discovery, start with{" "}
              <Link href="/.well-known/api-catalog" className="text-secondary">
                `/.well-known/api-catalog`
              </Link>{" "}
              or{" "}
              <Link href="/api/openapi.json" className="text-secondary">
                `/api/openapi.json`
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {endpointGroups.map((group, index) => (
        <section
          key={group.title}
          className={getSectionBandClass(
            index % 2 === 0 ? "paper" : "warm",
            "page-section"
          )}
        >
          <div className="section-shell flex flex-col gap-5">
            <SectionHeading
              eyebrow="Reference"
              title={group.title}
              description="Canonical endpoints and their intended use."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map((item) => (
                <article key={item.href} className="surface-panel">
                  <h2 className="font-heading text-[1.25rem] leading-tight text-on-background">
                    <Link href={item.href} className="text-secondary">
                      {item.href}
                    </Link>
                  </h2>
                  <p className="pt-3 text-sm leading-relaxed text-on-surface md:text-base">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
