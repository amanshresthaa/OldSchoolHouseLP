import type { Metadata } from "next"

import type { PageMeta } from "@/data/site"
import { siteName, siteOgImage, siteUrl } from "@/data/site"

export interface BreadcrumbItem {
  href: string
  label: string
}

export interface BreadcrumbRoute {
  href: string
  label: string
  navLabel?: string
}

export function buildCanonicalUrl(canonical: string) {
  return new URL(canonical, siteUrl).toString()
}

export function buildBreadcrumbItems(route: BreadcrumbRoute): BreadcrumbItem[] {
  if (route.href === "/") {
    return [{ href: "/", label: "Home" }]
  }

  return [
    { href: "/", label: "Home" },
    {
      href: route.href,
      label: route.navLabel ?? route.label,
    },
  ]
}

export function buildPageMetadata(meta: PageMeta): Metadata {
  const canonicalUrl = buildCanonicalUrl(meta.canonical)
  const socialTitle = `${meta.title} | ${siteName}`

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonicalUrl,
      siteName,
      title: socialTitle,
      description: meta.description,
      images: [
        {
          url: siteOgImage,
          width: 1080,
          height: 720,
          alt: `${siteName} in Stony Stratford`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: meta.description,
      images: [siteOgImage],
    },
  }
}
