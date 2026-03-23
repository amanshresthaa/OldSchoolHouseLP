import type { MetadataRoute } from "next"
import { existsSync, statSync } from "node:fs"
import { join } from "node:path"
import process from "node:process"

import { siteUrl } from "@/data/site"

const routes = [
  { route: "", source: "app/page.tsx" },
  { route: "/menu", source: "app/menu/page.tsx" },
  { route: "/book", source: "app/book/page.tsx" },
  { route: "/events", source: "app/events/page.tsx" },
  { route: "/find-us", source: "app/find-us/page.tsx" },
  { route: "/menu-information", source: "app/menu-information/page.tsx" },
  { route: "/takeaway-menu", source: "app/takeaway-menu/page.tsx" },
  { route: "/wakes-menu", source: "app/wakes-menu/page.tsx" },
  { route: "/privacy", source: "app/privacy/page.tsx" },
  { route: "/tos", source: "app/tos/page.tsx" },
]

function getLastModified(source: string) {
  const sourcePath = join(process.cwd(), source)

  if (!existsSync(sourcePath)) {
    return new Date()
  }

  return statSync(sourcePath).mtime
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ route, source }) => ({
    url: `${siteUrl}${route}`,
    lastModified: getLastModified(source),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
