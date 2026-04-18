import { appendAgentDiscoveryHeaders } from "@/lib/agent-ready"
import {
  buildMcpServerCard,
  publicAgentTools,
  runPublicToolCall,
} from "@/lib/site-api"

interface JsonRpcRequest {
  jsonrpc: "2.0"
  id?: number | string | null
  method: string
  params?: Record<string, unknown>
}

function buildHeaders() {
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "public, max-age=0, must-revalidate",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
  })

  appendAgentDiscoveryHeaders(headers)

  return headers
}

function buildJsonRpcResponse(id: JsonRpcRequest["id"], result: unknown) {
  return new Response(
    JSON.stringify({
      jsonrpc: "2.0",
      id,
      result,
    }),
    {
      headers: buildHeaders(),
    }
  )
}

function buildJsonRpcError(
  id: JsonRpcRequest["id"],
  code: number,
  message: string
) {
  return new Response(
    JSON.stringify({
      jsonrpc: "2.0",
      id,
      error: {
        code,
        message,
      },
    }),
    {
      status: 400,
      headers: buildHeaders(),
    }
  )
}

function handleInitialize(payload: JsonRpcRequest) {
  return buildJsonRpcResponse(payload.id, {
    protocolVersion: "2025-06-18",
    capabilities: {
      tools: {
        listChanged: false,
      },
    },
    serverInfo: buildMcpServerCard().serverInfo,
  })
}

function handleToolCall(payload: JsonRpcRequest) {
  const toolName =
    typeof payload.params?.name === "string" ? payload.params.name : null
  const toolArguments =
    payload.params?.arguments &&
    typeof payload.params.arguments === "object" &&
    !Array.isArray(payload.params.arguments)
      ? payload.params.arguments
      : {}

  if (!toolName) {
    return buildJsonRpcError(payload.id, -32602, "Missing tool name")
  }

  try {
    const result = runPublicToolCall(
      toolName,
      toolArguments as Record<string, unknown>
    )

    return buildJsonRpcResponse(payload.id, result)
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Tool execution failed"

    return buildJsonRpcError(payload.id, -32603, message)
  }
}

export function GET() {
  return new Response(JSON.stringify(buildMcpServerCard(), null, 2), {
    headers: buildHeaders(),
  })
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: buildHeaders(),
  })
}

export async function POST(request: Request) {
  const payload = (await request.json()) as JsonRpcRequest

  if (payload.jsonrpc !== "2.0" || !payload.method) {
    return buildJsonRpcError(payload.id, -32600, "Invalid Request")
  }

  switch (payload.method) {
    case "initialize":
      return handleInitialize(payload)

    case "notifications/initialized":
      return new Response(null, {
        status: 202,
        headers: buildHeaders(),
      })

    case "tools/list":
      return buildJsonRpcResponse(payload.id, {
        tools: publicAgentTools,
      })

    case "tools/call":
      return handleToolCall(payload)

    default:
      return buildJsonRpcError(payload.id, -32601, "Method not found")
  }
}
