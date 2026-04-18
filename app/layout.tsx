import type { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"

import "./globals.css"
import { CookieBanner } from "@/components/site/CookieBanner"
import { SiteFooter } from "@/components/site/SiteFooter"
import { SiteHeader } from "@/components/site/SiteHeader"
import { StickyBookingBar } from "@/components/site/StickyBookingBar"
import { WebMcpProvider } from "@/components/site/WebMcpProvider"
import { ThemeProvider } from "@/components/theme-provider"
import {
  siteDescription,
  siteName,
  siteOgImage,
  siteOrganizationId,
  siteUrl,
  siteWebsiteId,
} from "@/data/site"
import { criticalAboveTheFoldCss } from "@/lib/critical-css"
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
    default: `${siteName} | Pub in Stony Stratford with Nepalese Kitchen`,
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
    title: `${siteName} | Pub in Stony Stratford with Nepalese Kitchen`,
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
    title: `${siteName} | Pub in Stony Stratford with Nepalese Kitchen`,
    description: siteDescription,
    images: [siteOgImage],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", newsreader.variable, manrope.variable)}
    >
      <head>
        <style
          id="critical-above-the-fold"
          dangerouslySetInnerHTML={{ __html: criticalAboveTheFoldCss }}
        />
      </head>
      <body className="min-h-svh">
        <Script
          id="old-school-house-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": siteWebsiteId,
              name: siteName,
              url: siteUrl,
              description: siteDescription,
              inLanguage: "en-GB",
              publisher: {
                "@id": siteOrganizationId,
              },
            }),
          }}
        />
        <ThemeProvider>
          <div className="relative min-h-svh pb-28 md:pb-0">
            <WebMcpProvider />
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
