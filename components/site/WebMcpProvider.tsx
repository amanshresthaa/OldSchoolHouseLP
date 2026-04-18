"use client"

import { useEffect } from "react"

import { directionsHref, siteAddress, siteEmail, sitePhone } from "@/data/site"

const pageOptions = {
  home: {
    href: "/",
    label: "homepage",
  },
  menu: {
    href: "/our-menus",
    label: "menu page",
  },
  book: {
    href: "/book",
    label: "booking page",
  },
  events: {
    href: "/whats-on",
    label: "events page",
  },
  "find-us": {
    href: "/contact-us",
    label: "find us page",
  },
} as const

interface WebMcpToolDescriptor {
  name: string
  description: string
  inputSchema: Record<string, unknown>
  execute: (args: Record<string, unknown>) => {
    content: { type: "text"; text: string }[]
    structuredContent?: Record<string, unknown>
  }
}

interface WebMcpNavigator extends Navigator {
  modelContext?: {
    provideContext: (context: { tools: WebMcpToolDescriptor[] }) => void
  }
}

function buildToolResult(
  text: string,
  structuredContent?: Record<string, unknown>
) {
  return {
    content: [{ type: "text" as const, text }],
    structuredContent,
  }
}

export function WebMcpProvider() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const webMcpNavigator = window.navigator as WebMcpNavigator

    if (!webMcpNavigator.modelContext) {
      return
    }

    webMcpNavigator.modelContext.provideContext({
      tools: [
        {
          name: "open-page",
          description:
            "Navigate to an important page on the site, such as the menu, booking page, events page, or find us page.",
          inputSchema: {
            type: "object",
            properties: {
              page: {
                type: "string",
                description: "Which page to open.",
                enum: Object.keys(pageOptions),
              },
            },
            required: ["page"],
            additionalProperties: false,
          },
          execute({ page }: Record<string, unknown>) {
            const nextPage =
              typeof page === "string" && page in pageOptions
                ? pageOptions[page as keyof typeof pageOptions]
                : pageOptions.home
            window.location.assign(nextPage.href)

            return buildToolResult(
              `Opened the ${nextPage.label} at ${new URL(nextPage.href, window.location.origin).href}.`,
              {
                page:
                  typeof page === "string" && page in pageOptions
                    ? page
                    : "home",
                url: new URL(nextPage.href, window.location.origin).href,
              }
            )
          },
        },
        {
          name: "get-visit-details",
          description:
            "Return the address, contact details, and directions link for the pub.",
          inputSchema: {
            type: "object",
            properties: {},
            additionalProperties: false,
          },
          execute() {
            return buildToolResult(
              `The pub is at ${siteAddress}. Call ${sitePhone}, email ${siteEmail}, or use ${directionsHref} for directions.`,
              {
                address: siteAddress,
                phone: sitePhone,
                email: siteEmail,
                directions: directionsHref,
              }
            )
          },
        },
        {
          name: "browse-menu-preview",
          description:
            "Open the menu page and return the canonical menu preview URL for lunch or dinner browsing.",
          inputSchema: {
            type: "object",
            properties: {
              meal: {
                type: "string",
                description: "Which menu preview the agent wants to browse.",
                enum: ["dinner", "lunch", "all"],
                default: "all",
              },
            },
            additionalProperties: false,
          },
          execute({ meal }: Record<string, unknown>) {
            const nextMeal =
              meal === "dinner" || meal === "lunch" || meal === "all"
                ? meal
                : "all"
            const href = "/our-menus#menu-experience"
            const absoluteUrl = new URL(href, window.location.origin).href

            window.location.assign(href)

            return buildToolResult(
              nextMeal === "all"
                ? `Opened the menu page at ${absoluteUrl}.`
                : `Opened the ${nextMeal} menu preview at ${absoluteUrl}.`,
              {
                meal: nextMeal,
                url: absoluteUrl,
              }
            )
          },
        },
      ],
    })
  }, [])

  return null
}
