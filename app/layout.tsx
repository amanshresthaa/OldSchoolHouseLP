import type { Metadata } from "next"
import { Newsreader, Manrope } from "next/font/google"

import "./globals.css"
import { SiteFooter } from "@/components/site/SiteFooter"
import { SiteHeader } from "@/components/site/SiteHeader"
import { StickyBookingBar } from "@/components/site/StickyBookingBar"
import { ThemeProvider } from "@/components/theme-provider"
import { siteDescription, siteName } from "@/data/site"
import { cn } from "@/lib/utils"

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${siteName} | Pub & Restaurant in Stony Stratford`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
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
      <body className="min-h-svh">
        <ThemeProvider>
          <div className="relative min-h-svh pb-20 md:pb-0">
            <SiteHeader />
            {children}
            <SiteFooter />
            <StickyBookingBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
