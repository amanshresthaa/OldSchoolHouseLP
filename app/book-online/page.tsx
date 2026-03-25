import { redirect } from "next/navigation"

import { bookingHref } from "@/data/site"

export const metadata = {
  robots: { index: false, follow: false },
}

export default function BookOnlinePage() {
  redirect(bookingHref)
}
