import Link from "next/link"
import { CalendarDots, Phone } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { sitePhoneHref } from "@/data/site"

export function StickyBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/5 bg-[var(--color-surface-lowest)]/94 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <Button asChild size="lg" className="flex-1">
          <Link href="/book">
            <CalendarDots />
            Book
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1">
          <a href={sitePhoneHref}>
            <Phone />
            Call
          </a>
        </Button>
      </div>
    </div>
  )
}
