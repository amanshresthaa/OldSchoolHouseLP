import {
  appendAgentDiscoveryHeaders,
  buildMarkdownDocument,
  estimateMarkdownTokens,
  normalizePathname,
} from "@/lib/agent-ready"

function buildHeaders(markdown?: string) {
  const headers = new Headers({
    "content-type": "text/markdown; charset=utf-8",
    "cache-control": "public, max-age=3600",
  })

  if (markdown) {
    headers.set("x-markdown-tokens", String(estimateMarkdownTokens(markdown)))
  }

  appendAgentDiscoveryHeaders(headers)

  return headers
}

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const pathname = normalizePathname(searchParams.get("path") ?? "/")
  const markdown = buildMarkdownDocument(pathname)

  if (!markdown) {
    return new Response("Markdown representation not available", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    })
  }

  return new Response(markdown, {
    headers: buildHeaders(markdown),
  })
}

export function HEAD(request: Request) {
  const { searchParams } = new URL(request.url)
  const pathname = normalizePathname(searchParams.get("path") ?? "/")
  const markdown = buildMarkdownDocument(pathname)

  if (!markdown) {
    return new Response(null, { status: 404 })
  }

  return new Response(null, {
    headers: buildHeaders(markdown),
  })
}
