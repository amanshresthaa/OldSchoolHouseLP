import { createLogger } from "@/lib/logger"

const COOKIE_CONSENT_NAME = "osh_cookie_consent"
export const COOKIE_CONSENT_EVENT = "osh:cookie-consent-changed"

export type CookieConsentValue = "accepted" | "essential"

const consentLogger = createLogger("cookie-consent")

function getCookieMatch(cookieString: string) {
  return cookieString.match(
    new RegExp(`(?:^|; )${COOKIE_CONSENT_NAME}=([^;]+)`)
  )?.[1]
}

export function readCookieConsent(cookieString: string) {
  const value = getCookieMatch(cookieString)

  if (value === "accepted" || value === "essential") {
    return value
  }

  if (value) {
    consentLogger.warn("Encountered unexpected cookie consent value", {
      cookieName: COOKIE_CONSENT_NAME,
      hasValue: true,
    })
  }

  return null
}

export function writeCookieConsent(value: CookieConsentValue) {
  if (typeof document === "undefined") {
    consentLogger.warn("Skipped cookie consent write outside the browser", {
      value,
    })
    return
  }

  document.cookie = `${COOKIE_CONSENT_NAME}=${value}; Max-Age=${60 * 60 * 24 * 180}; Path=/; SameSite=Lax`
  consentLogger.info("Updated cookie consent preference", {
    value,
  })

  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, {
      detail: value,
    })
  )
}

export function hasOptionalCookieConsent(value: CookieConsentValue | null) {
  return value === "accepted"
}
