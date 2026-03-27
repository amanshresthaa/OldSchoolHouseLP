import type { MetadataRoute } from "next"
import { existsSync, statSync } from "node:fs"
import { join } from "node:path"
import process from "node:process"

import { siteUrl } from "@/data/site"
import { publishedSitemapRoutes } from "@/data/site-routes"

function getLastModified(source: string) {
  const sourcePath = join(process.cwd(), source)

  if (!existsSync(sourcePath)) {
    return new Date()
  }

  return statSync(sourcePath).mtime
}

export default function sitemap(): MetadataRoute.Sitemap {
  return publishedSitemapRoutes.map(({ href }) => {
    const source = href === "/" ? "app/page.tsx" : `app${href}/page.tsx`

    return {
      url: `${siteUrl}${href}`,
      lastModified: getLastModified(source),
      changeFrequency: href === "/" ? "weekly" : "monthly",
      priority: href === "/" ? 1 : 0.7,
    }
  })
}
