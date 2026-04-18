import type { Metadata } from "next"

import { GrandOpeningPoster } from "@/components/site/GrandOpeningPoster"

export const metadata: Metadata = {
  title: "Grand opening GIF preview",
  description: "GIF-ready 4:5 opening poster preview",
  robots: {
    index: false,
    follow: false,
  },
}

export default function OpeningPosterPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-critical-header],
            footer,
            body > div > div > div.fixed,
            body > div > div > aside.fixed,
            body > div > div > button {
              display: none !important;
            }

            body {
              overflow: hidden;
              background: #f0ebe3;
            }
          `,
        }}
      />

      <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f0ebe3] p-2 sm:p-4 md:p-8">
        <GrandOpeningPoster className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none" />
      </main>
    </>
  )
}
