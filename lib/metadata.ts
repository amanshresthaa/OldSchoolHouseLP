import type { Metadata } from "next"

import type { PageMeta } from "@/data/site"
import { siteName, siteOgImage, siteUrl } from "@/data/site"

export function buildPageMetadata(meta: PageMeta): Metadata {
  const canonicalUrl = new URL(meta.canonical, siteUrl).toString()
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
