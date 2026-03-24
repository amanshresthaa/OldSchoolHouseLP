import { afterEach, describe, expect, it, vi } from "vitest"

import { readCookieConsent } from "@/lib/consent"
import { createLogger } from "@/lib/logger"

describe("structured logger", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("emits structured entries with namespace and context", () => {
    const infoSpy = vi
      .spyOn(console, "info")
      .mockImplementation(() => undefined)
    const logger = createLogger("cookie-consent")

    logger.info("Updated cookie consent preference", {
      value: "accepted",
      source: "banner",
    })

    expect(infoSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        level: "info",
        namespace: "cookie-consent",
        message: "Updated cookie consent preference",
        environment: "server",
        traceId: undefined,
        context: {
          value: "accepted",
          source: "banner",
        },
      })
    )
  })

  it("warns when it sees an unexpected consent value", () => {
    const warnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined)

    expect(readCookieConsent("osh_cookie_consent=unexpected")).toBeNull()

    expect(warnSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        level: "warn",
        namespace: "cookie-consent",
        message: "Encountered unexpected cookie consent value",
        traceId: undefined,
        context: {
          cookieName: "osh_cookie_consent",
          hasValue: true,
        },
      })
    )
  })

  it("emits error entries through console.error", () => {
    const errorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => undefined)
    const logger = createLogger("cookie-consent")

    logger.error("Cookie consent write failed", {
      reason: "storage-unavailable",
    })

    expect(errorSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        level: "error",
        namespace: "cookie-consent",
        message: "Cookie consent write failed",
        traceId: undefined,
        context: {
          reason: "storage-unavailable",
        },
      })
    )
  })

  it("returns null when no consent cookie is present", () => {
    expect(readCookieConsent("session=active")).toBeNull()
  })
})
