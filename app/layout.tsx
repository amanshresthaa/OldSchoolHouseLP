import type { Metadata } from "next"
import { headers } from "next/headers"
import localFont from "next/font/local"

import "./globals.css"
import { CookieBanner } from "@/components/site/CookieBanner"
import { SiteFooter } from "@/components/site/SiteFooter"
import { SiteHeader } from "@/components/site/SiteHeader"
import { StickyBookingBar } from "@/components/site/StickyBookingBar"
import { ThemeProvider } from "@/components/theme-provider"
import { siteDescription, siteName, siteOgImage, siteUrl } from "@/data/site"
import { TRACE_ID_HEADER } from "@/lib/tracing"
import { cn } from "@/lib/utils"

const newsreader = localFont({
  src: [
    {
      path: "./fonts/Newsreader-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-newsreader",
  display: "swap",
})

const manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Traditional Pub in Stony Stratford`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: `${siteName} | Traditional Pub in Stony Stratford`,
    description: siteDescription,
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
    title: `${siteName} | Traditional Pub in Stony Stratford`,
    description: siteDescription,
    images: [siteOgImage],
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = await headers()
  const traceId = requestHeaders.get(TRACE_ID_HEADER) ?? undefined

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-trace-id={traceId}
      className={cn("antialiased", newsreader.variable, manrope.variable)}
    >
      <body className="min-h-svh">
        <ThemeProvider>
          <div className="relative min-h-svh pb-28 md:pb-0">
            <SiteHeader />
            {children}
            <SiteFooter />
            <CookieBanner />
            <StickyBookingBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
