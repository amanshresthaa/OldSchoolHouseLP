interface LogContext {
  [key: string]: LogValue
}

type LogValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | LogContext
  | LogValue[]

type LogLevel = "info" | "warn" | "error"

interface LogEntry {
  timestamp: string
  level: LogLevel
  namespace: string
  message: string
  environment: "browser" | "server"
  pathname?: string
  traceId?: string
  context?: LogContext
}

interface Logger {
  info(message: string, context?: LogContext): void
  warn(message: string, context?: LogContext): void
  error(message: string, context?: LogContext): void
}

function getEnvironment(): LogEntry["environment"] {
  return typeof window === "undefined" ? "server" : "browser"
}

function getPathname() {
  if (typeof window === "undefined") {
    return undefined
  }

  return window.location.pathname
}

function getTraceId() {
  if (typeof window === "undefined") {
    return undefined
  }

  return document.documentElement.dataset.traceId || undefined
}

function emit(entry: LogEntry) {
  if (entry.level === "error") {
    console.error(entry)
    return
  }

  if (entry.level === "warn") {
    console.warn(entry)
    return
  }

  console.info(entry)
}

function log(
  level: LogLevel,
  namespace: string,
  message: string,
  context?: LogContext
) {
  emit({
    timestamp: new Date().toISOString(),
    level,
    namespace,
    message,
    environment: getEnvironment(),
    pathname: getPathname(),
    traceId: getTraceId(),
    context,
  })
}

export function createLogger(namespace: string): Logger {
  return {
    info(message, context) {
      log("info", namespace, message, context)
    },
    warn(message, context) {
      log("warn", namespace, message, context)
    },
    error(message, context) {
      log("error", namespace, message, context)
    },
  }
}
