import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import {
  REQUEST_ID_HEADER,
  TRACE_ID_HEADER,
  TRACEPARENT_HEADER,
  getRequestTraceContextFromHeaders,
} from "@/lib/tracing"

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const traceContext = getRequestTraceContextFromHeaders(requestHeaders)

  requestHeaders.set(TRACE_ID_HEADER, traceContext.traceId)
  requestHeaders.set(REQUEST_ID_HEADER, traceContext.traceId)

  const response = NextResponse.next({
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

  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml).*)",
  ],
}
