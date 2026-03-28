import type { Metadata } from "next"
import {
  EnvelopeSimple,
  ForkKnife,
  Phone,
  Tray,
} from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  wakesChecklist,
  wakesFaqSection,
  wakesInlineCtaCopy,
  wakesSections,
  wakesSignoffCopy,
} from "@/data/copy"
import { siteEmailHref, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"

const route = getRouteConfig("/wakes-life-celebrations")

export const metadata: Metadata = {
  title: route?.meta.title,
  description: route?.meta.description,
  alternates: {
    canonical: route?.meta.canonical,
  },
}

export default function WakesLifeCelebrationsPage() {
  return (
    <FeaturePage
      hero={route!.hero!}
      sections={wakesSections}
      checklist={wakesChecklist}
      faqSection={wakesFaqSection}
      inlineCta={{
        ...wakesInlineCtaCopy,
        actions: [
          {
            href: sitePhoneHref,
            label: "Call to plan the wake",
            icon: <Phone className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: "Request availability by email",
            icon: <EnvelopeSimple className="size-4" />,
          },
        ],
      }}
      signoff={{
        eyebrow: wakesSignoffCopy.eyebrow,
        title: wakesSignoffCopy.title,
        body: (
          <div className="space-y-5">
            {wakesSignoffCopy.bodyParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ),
        actions: [
          {
            href: sitePhoneHref,
            label: "Call to plan the wake",
            icon: <Phone className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: "Email the team",
            icon: <EnvelopeSimple className="size-4" />,
          },
          {
            href: "/menu",
            label: "Browse the main menu",
            icon: <ForkKnife className="size-4" />,
          },
        ],
        details: (
          <div className="rounded-2xl bg-[var(--color-surface-lowest)] px-5 py-5 text-sm leading-7 text-on-surface shadow-[0px_10px_28px_rgba(27,28,28,0.05)] md:px-6 md:py-6 md:text-base">
            <div className="flex items-start gap-3">
              <Tray className="mt-1 size-5 shrink-0 text-secondary" />
              <div className="space-y-2">
                <p className="font-semibold text-on-background">
                  {wakesSignoffCopy.termsTitle}
                </p>
                <p>{wakesSignoffCopy.termsBody}</p>
              </div>
            </div>
          </div>
        ),
      }}
    />
  )
}
