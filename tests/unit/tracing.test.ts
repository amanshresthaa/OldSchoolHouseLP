import { describe, expect, it } from "vitest"

import {
  REQUEST_ID_HEADER,
  TRACE_ID_HEADER,
  getRequestTraceContextFromHeaders,
} from "@/lib/tracing"

describe("request tracing", () => {
  it("prefers the trace id from a valid traceparent header", () => {
    const headers = new Headers({
      traceparent: "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01",
      [TRACE_ID_HEADER]: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    })

    expect(getRequestTraceContextFromHeaders(headers)).toEqual({
      traceId: "4bf92f3577b34da6a3ce929d0e0e4736",
      source: "traceparent",
    })
  })

  it("falls back to x-trace-id and then x-request-id when traceparent is unavailable", () => {
    expect(
      getRequestTraceContextFromHeaders(
        new Headers({
          [TRACE_ID_HEADER]: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        })
      )
    ).toEqual({
      traceId: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      source: "x-trace-id",
    })

    expect(
      getRequestTraceContextFromHeaders(
        new Headers({
          [REQUEST_ID_HEADER]: "cccccccccccccccccccccccccccccccc",
        })
      )
    ).toEqual({
      traceId: "cccccccccccccccccccccccccccccccc",
      source: "x-request-id",
    })
  })

  it("generates a valid trace id when incoming headers are absent or invalid", () => {
    const traceContext = getRequestTraceContextFromHeaders(
      new Headers({
        traceparent: "00-00000000000000000000000000000000-0000000000000001-01",
        [TRACE_ID_HEADER]: "not-a-trace-id",
      })
    )

    expect(traceContext.source).toBe("generated")
    expect(traceContext.traceId).toMatch(/^[0-9a-f]{32}$/)
    expect(traceContext.traceId).not.toBe("00000000000000000000000000000000")
  })
})
