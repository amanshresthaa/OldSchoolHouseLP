import Script from "next/script"

import type { LocalFaq, PageMeta, SchemaConfig } from "@/data/site"
import {
  siteOgImage,
  siteOrganizationId,
  siteRestaurantId,
  siteWebsiteId,
} from "@/data/site"
import {
  buildBreadcrumbItems,
  buildCanonicalUrl,
  type BreadcrumbRoute,
} from "@/lib/metadata"

interface RouteStructuredDataProps {
  route: BreadcrumbRoute & {
    meta: PageMeta
    schema?: SchemaConfig
  }
  faqItems?: LocalFaq[]
  pageType?:
    | "AboutPage"
    | "CollectionPage"
    | "ContactPage"
    | "ProfilePage"
    | "WebPage"
  aboutIds?: string[]
  authorId?: string
  mainEntityId?: string
}

function getScriptId(prefix: string, routeHref: string) {
  const routeSlug = routeHref === "/" ? "home" : routeHref.slice(1)

  return `${prefix}-${routeSlug}`
}

function buildPageAboutSchema(aboutIds?: string[]) {
  if (!aboutIds || aboutIds.length === 0) {
    return {}
  }

  return {
    about: aboutIds.map((id) => ({
      "@id": id,
    })),
  }
}

function buildPageAuthorSchema(authorId?: string) {
  if (!authorId) {
    return {}
  }

  return {
    author: {
      "@id": authorId,
    },
  }
}

function buildPageMainEntitySchema(mainEntityId?: string) {
  if (!mainEntityId) {
    return {}
  }

  return {
    mainEntity: {
      "@id": mainEntityId,
    },
  }
}

function buildPageBreadcrumbSchema(canonicalUrl: string, routeHref: string) {
  if (routeHref === "/") {
    return {}
  }

  return {
    breadcrumb: {
      "@id": `${canonicalUrl}#breadcrumb`,
    },
  }
}

function buildBreadcrumbSchema(
  canonicalUrl: string,
  route: BreadcrumbRoute,
  breadcrumbItems: ReturnType<typeof buildBreadcrumbItems>
) {
  if (route.href === "/") {
    return null
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: buildCanonicalUrl(item.href),
    })),
  }
}

function buildFaqSchema(faqItems?: LocalFaq[]) {
  if (!faqItems || faqItems.length === 0) {
    return null
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function RouteStructuredData({
  route,
  faqItems,
  pageType = "WebPage",
  aboutIds,
  authorId,
  mainEntityId,
}: RouteStructuredDataProps) {
  const canonicalUrl = buildCanonicalUrl(route.meta.canonical)
  const breadcrumbItems = buildBreadcrumbItems(route)
  const pageAboutIds =
    aboutIds ?? (route.schema?.localBusiness ? [siteRestaurantId] : undefined)

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${canonicalUrl}#webpage`,
    name: route.meta.title,
    description: route.meta.description,
    url: canonicalUrl,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      "@id": siteWebsiteId,
    },
    publisher: {
      "@id": siteOrganizationId,
    },
    primaryImageOfPage: siteOgImage,
    ...buildPageAboutSchema(pageAboutIds),
    ...buildPageAuthorSchema(authorId),
    ...buildPageMainEntitySchema(mainEntityId),
    ...buildPageBreadcrumbSchema(canonicalUrl, route.href),
  }

  const breadcrumbSchema = buildBreadcrumbSchema(
    canonicalUrl,
    route,
    breadcrumbItems
  )
  const faqSchema = buildFaqSchema(faqItems)

  return (
    <>
      <Script
        id={getScriptId("structured-data-page", route.href)}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      {breadcrumbSchema ? (
        <Script
          id={getScriptId("structured-data-breadcrumb", route.href)}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      ) : null}
      {faqSchema ? (
        <Script
          id={getScriptId("structured-data-faq", route.href)}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      ) : null}
    </>
  )
}
