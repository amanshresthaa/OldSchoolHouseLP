import { headers } from "next/headers"

const TRACE_ID_HEADER = "x-trace-id"
const REQUEST_ID_HEADER = "x-request-id"
const TRACEPARENT_HEADER = "traceparent"

function readTraceParentId(traceParent: string) {
  const segments = traceParent.trim().split("-")

  if (segments.length !== 4) {
    return null
  }

  const traceId = segments[1]

  if (!/^[0-9a-f]{32}$/i.test(traceId) || /^0{32}$/i.test(traceId)) {
    return null
  }

  return traceId.toLowerCase()
}

function normalizeTraceId(value: string | null | undefined) {
  if (!value) {
    return null
  }

  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return null
  }

  if (/^[0-9a-f]{32}$/i.test(trimmedValue) && !/^0{32}$/i.test(trimmedValue)) {
    return trimmedValue.toLowerCase()
  }

  return null
}

function createTraceId() {
  return crypto.randomUUID().replaceAll("-", "")
}

export interface RequestTraceContext {
  traceId: string
  source: "traceparent" | "x-trace-id" | "x-request-id" | "generated"
}

export function getRequestTraceContextFromHeaders(
  requestHeaders: Headers
): RequestTraceContext {
  const traceParentId = readTraceParentId(
    requestHeaders.get(TRACEPARENT_HEADER) ?? ""
  )

  if (traceParentId) {
    return {
      traceId: traceParentId,
      source: "traceparent",
    }
  }

  const traceIdHeader = normalizeTraceId(requestHeaders.get(TRACE_ID_HEADER))

  if (traceIdHeader) {
    return {
      traceId: traceIdHeader,
      source: "x-trace-id",
    }
  }

  const requestIdHeader = normalizeTraceId(
    requestHeaders.get(REQUEST_ID_HEADER)
  )

  if (requestIdHeader) {
    return {
      traceId: requestIdHeader,
      source: "x-request-id",
    }
  }

  return {
    traceId: createTraceId(),
    source: "generated",
  }
}

export async function getRequestTraceContext() {
  return getRequestTraceContextFromHeaders(await headers())
}

export { REQUEST_ID_HEADER, TRACE_ID_HEADER, TRACEPARENT_HEADER }
