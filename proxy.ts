import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import {
  apiDocsPath,
  appendAgentDiscoveryHeaders,
  hasMarkdownPreference,
  internalMarkdownRoutePath,
  isMarkdownEligiblePath,
  normalizePathname,
} from "@/lib/agent-ready"
import {
  REQUEST_ID_HEADER,
  TRACE_ID_HEADER,
  TRACEPARENT_HEADER,
  getRequestTraceContextFromHeaders,
} from "@/lib/tracing"

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const traceContext = getRequestTraceContextFromHeaders(requestHeaders)
  const pathname = normalizePathname(request.nextUrl.pathname)
  const shouldServeMarkdown =
    pathname !== internalMarkdownRoutePath &&
    (request.method === "GET" || request.method === "HEAD") &&
    isMarkdownEligiblePath(pathname) &&
    hasMarkdownPreference(request.headers.get("accept"))

  requestHeaders.set(TRACE_ID_HEADER, traceContext.traceId)
  requestHeaders.set(REQUEST_ID_HEADER, traceContext.traceId)

  const response = shouldServeMarkdown
    ? NextResponse.rewrite(
        new URL(
          `${internalMarkdownRoutePath}?path=${encodeURIComponent(pathname)}`,
          request.url
        ),
        {
          request: {
            headers: requestHeaders,
          },
        }
      )
    : NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })

  response.headers.set(TRACE_ID_HEADER, traceContext.traceId)
  response.headers.set(REQUEST_ID_HEADER, traceContext.traceId)

  if (!request.headers.get(TRACEPARENT_HEADER)) {
    response.headers.set(
      TRACEPARENT_HEADER,
      `00-${traceContext.traceId}-0000000000000001-01`
    )
  }

  if (
    !shouldServeMarkdown &&
    (isMarkdownEligiblePath(pathname) || pathname === apiDocsPath)
  ) {
    appendAgentDiscoveryHeaders(response.headers)
  }

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml).*)",
  ],
}
