import type { Metadata } from "next"
import {
  EnvelopeSimple,
  ForkKnife,
  Phone,
  Tray,
} from "@phosphor-icons/react/dist/ssr"

import { FeaturePage } from "@/components/site/FeaturePage"
import {
  commonActionLabels,
  wakesChecklist,
  wakesFaqSection,
  wakesInlineCtaCopy,
  wakesSections,
  wakesSignoffCopy,
} from "@/data/copy"
import { siteEmailHref, sitePhoneHref } from "@/data/site"
import { getRouteConfig } from "@/data/site-routes"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/wakes-life-celebrations")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function WakesLifeCelebrationsPage() {
  return (
    <FeaturePage
      route={route!}
      hero={route!.hero!}
      sections={wakesSections}
      checklist={wakesChecklist}
      faqSection={wakesFaqSection}
      inlineCta={{
        ...wakesInlineCtaCopy,
        actions: [
          {
            href: sitePhoneHref,
            label: commonActionLabels.callToPlanWake,
            icon: <Phone className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: commonActionLabels.requestAvailabilityByEmail,
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
            label: commonActionLabels.callToPlanWake,
            icon: <Phone className="size-4" />,
          },
          {
            href: siteEmailHref,
            label: commonActionLabels.emailTeam,
            icon: <EnvelopeSimple className="size-4" />,
          },
          {
            href: "/our-menus",
            label: commonActionLabels.browseMainMenu,
            icon: <ForkKnife className="size-4" />,
          },
        ],
        details: (
          <div className="surface-panel text-sm leading-7 text-on-surface md:text-base">
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
