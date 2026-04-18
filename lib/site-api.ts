import { lunchMenuService, lunchMenuSource, mainMenuSource } from "@/data/menu"
import { publishedSitemapRoutes } from "@/data/site-routes"
import {
  bookOnlineHref,
  bookingHref,
  directionsHref,
  openingHours,
  siteAddress,
  siteDescription,
  siteEmail,
  siteName,
  sitePhone,
  siteUrl,
  socialLinks,
} from "@/data/site"

export interface ApiHealthPayload {
  status: "ok"
  service: string
  timestamp: string
}

export interface SiteProfilePayload {
  name: string
  description: string
  url: string
  currentService: string
  contact: {
    phone: string
    email: string
    address: string
  }
  booking: {
    page: string
    provider: string
  }
  directions: string
  openingHours: typeof openingHours
  socialLinks: string[]
  keyPages: {
    title: string
    href: string
    description: string
  }[]
}

export interface MenuPreviewPayload {
  status: string
  venue: string
  summary: string
  serviceHours: {
    lunch: string
    sundayRoast: string
    note: string
  }
  dinnerCategories: {
    title: string
    intro: string
    items: {
      name: string
      price: string
      description?: string
    }[]
  }[]
  lunchCategories: {
    title: string
    intro: string
    items: {
      name: string
      price: string
      description?: string
    }[]
  }[]
}

export interface PublicAgentToolDescriptor {
  name: string
  title: string
  description: string
  inputSchema: Record<string, unknown>
}

export interface PublicToolResult {
  content: {
    type: "text"
    text: string
  }[]
  structuredContent?: unknown
}

const currentServiceSummary =
  "The pub is currently serving drinks only while the fuller kitchen offer is prepared to return."

function buildMenuCategoryPayload(
  categories: typeof mainMenuSource | typeof lunchMenuSource
) {
  return categories.map((category) => ({
    title: category.title,
    intro: category.intro,
    items: category.items.map((item) => ({
      name: item.name,
      price: item.price,
      description: item.desc,
    })),
  }))
}

export function buildApiHealthPayload(): ApiHealthPayload {
  return {
    status: "ok",
    service: "old-school-house-site-api",
    timestamp: new Date().toISOString(),
  }
}

export function buildSiteProfilePayload(): SiteProfilePayload {
  return {
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    currentService: currentServiceSummary,
    contact: {
      phone: sitePhone,
      email: siteEmail,
      address: siteAddress,
    },
    booking: {
      page: `${siteUrl}${bookOnlineHref}`,
      provider: bookingHref,
    },
    directions: directionsHref,
    openingHours,
    socialLinks,
    keyPages: publishedSitemapRoutes.slice(0, 8).map((route) => ({
      title: route.meta.title,
      href: `${siteUrl}${route.href}`,
      description: route.meta.description,
    })),
  }
}

export function buildMenuPreviewPayload(): MenuPreviewPayload {
  return {
    status: currentServiceSummary,
    venue: siteName,
    summary:
      "Live HTML preview of the planned Nepalese kitchen and pub menu for agents or integrations that need structured menu content.",
    serviceHours: {
      lunch: lunchMenuService.lunchHours,
      sundayRoast: lunchMenuService.sundayRoastHours,
      note: lunchMenuService.note,
    },
    dinnerCategories: buildMenuCategoryPayload(mainMenuSource),
    lunchCategories: buildMenuCategoryPayload(lunchMenuSource),
  }
}

const publicPageOptions = [
  { id: "home", href: "/", label: "homepage" },
  { id: "menu", href: "/our-menus", label: "menu page" },
  { id: "book", href: "/book", label: "booking page" },
  { id: "events", href: "/whats-on", label: "events page" },
  { id: "find-us", href: "/contact-us", label: "find us page" },
] as const

export const publicAgentTools: PublicAgentToolDescriptor[] = [
  {
    name: "open-page",
    title: "Open a key site page",
    description:
      "Get the canonical URL for an important page on the site such as the menu, booking, events, or visit details page.",
    inputSchema: {
      type: "object",
      properties: {
        page: {
          type: "string",
          description:
            "Which key page to open for the visitor or agent workflow.",
          enum: publicPageOptions.map((option) => option.id),
        },
      },
      required: ["page"],
      additionalProperties: false,
    },
  },
  {
    name: "get-visit-details",
    title: "Get visit essentials",
    description:
      "Return the address, contact details, directions link, opening hours, and current service status for the pub.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: "browse-menu-preview",
    title: "Browse the menu preview",
    description:
      "Return structured preview data for the lunch or dinner menu and the canonical menu page URL.",
    inputSchema: {
      type: "object",
      properties: {
        meal: {
          type: "string",
          description: "Which menu preview to return.",
          enum: ["dinner", "lunch", "all"],
          default: "all",
        },
      },
      additionalProperties: false,
    },
  },
]

export function runPublicToolCall(
  name: string,
  args: Record<string, unknown>
): PublicToolResult {
  switch (name) {
    case "open-page": {
      const pageId =
        typeof args.page === "string" ? args.page : publicPageOptions[0].id
      const page =
        publicPageOptions.find((option) => option.id === pageId) ??
        publicPageOptions[0]

      return {
        content: [
          {
            type: "text",
            text: `Open the ${page.label} at ${siteUrl}${page.href}.`,
          },
        ],
        structuredContent: {
          page: page.id,
          url: `${siteUrl}${page.href}`,
        },
      }
    }

    case "get-visit-details": {
      const profile = buildSiteProfilePayload()

      return {
        content: [
          {
            type: "text",
            text: `${profile.name} is at ${profile.contact.address}. Call ${profile.contact.phone}, email ${profile.contact.email}, or use ${profile.directions} for directions. Current service status: ${profile.currentService}`,
          },
        ],
        structuredContent: profile,
      }
    }

    case "browse-menu-preview": {
      const meal =
        args.meal === "lunch" || args.meal === "dinner" ? args.meal : "all"
      const menu = buildMenuPreviewPayload()
      const structuredContent =
        meal === "lunch"
          ? {
              meal,
              url: `${siteUrl}/our-menus`,
              categories: menu.lunchCategories,
            }
          : meal === "dinner"
            ? {
                meal,
                url: `${siteUrl}/our-menus`,
                categories: menu.dinnerCategories,
              }
            : {
                meal,
                url: `${siteUrl}/our-menus`,
                dinnerCategories: menu.dinnerCategories,
                lunchCategories: menu.lunchCategories,
              }

      return {
        content: [
          {
            type: "text",
            text:
              meal === "all"
                ? `Browse the full lunch and dinner menu preview at ${siteUrl}/our-menus.`
                : `Browse the ${meal} menu preview at ${siteUrl}/our-menus.`,
          },
        ],
        structuredContent,
      }
    }

    default:
      throw new Error(`Unknown tool: ${name}`)
  }
}

export function buildOpenApiDocument() {
  return {
    openapi: "3.1.0",
    info: {
      title: "The Old School House Public Site API",
      version: "1.0.0",
      description:
        "Read-only public discovery endpoints for agent and integration access to visit details, menu previews, and service health.",
    },
    servers: [
      {
        url: siteUrl,
      },
    ],
    tags: [
      { name: "Discovery", description: "Agent and integration discovery" },
      { name: "Menu", description: "Structured menu preview data" },
    ],
    paths: {
      "/api/health": {
        get: {
          tags: ["Discovery"],
          summary: "Service health",
          operationId: "getHealth",
          responses: {
            "200": {
              description: "Healthy service response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: { type: "string", const: "ok" },
                      service: { type: "string" },
                      timestamp: { type: "string", format: "date-time" },
                    },
                    required: ["status", "service", "timestamp"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/site-profile": {
        get: {
          tags: ["Discovery"],
          summary: "Site profile",
          operationId: "getSiteProfile",
          responses: {
            "200": {
              description: "Structured site profile",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      description: { type: "string" },
                      url: { type: "string", format: "uri" },
                      currentService: { type: "string" },
                    },
                    required: ["name", "description", "url", "currentService"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/menu-preview": {
        get: {
          tags: ["Menu"],
          summary: "Menu preview",
          operationId: "getMenuPreview",
          responses: {
            "200": {
              description: "Structured menu preview",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      status: { type: "string" },
                      venue: { type: "string" },
                    },
                    required: ["status", "venue"],
                  },
                },
              },
            },
          },
        },
      },
      "/mcp": {
        post: {
          tags: ["Discovery"],
          summary: "MCP streamable HTTP endpoint",
          operationId: "postMcpRequest",
          description:
            "Public MCP endpoint exposing a small read-only tool surface for page URLs, visit details, and menu previews.",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    jsonrpc: { type: "string", const: "2.0" },
                    method: { type: "string" },
                    params: { type: "object" },
                    id: {
                      anyOf: [
                        { type: "string" },
                        { type: "number" },
                        { type: "null" },
                      ],
                    },
                  },
                  required: ["jsonrpc", "method"],
                },
              },
            },
          },
          responses: {
            "200": {
              description: "MCP JSON-RPC response",
            },
          },
        },
      },
    },
  }
}

export function buildMcpServerCard() {
  return {
    $schema:
      "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json",
    version: "1.0",
    protocolVersion: "2025-06-18",
    serverInfo: {
      name: "old-school-house-public-site",
      title: "The Old School House Public Site MCP",
      version: "1.0.0",
    },
    description:
      "Public read-only MCP server for key visit details, menu previews, and canonical site routes.",
    documentationUrl: `${siteUrl}/docs/api`,
    transport: {
      type: "streamable-http",
      endpoint: "/mcp",
    },
    capabilities: {
      tools: {
        listChanged: false,
      },
    },
    authentication: {
      required: false,
      schemes: [],
    },
    tools: publicAgentTools,
  }
}
