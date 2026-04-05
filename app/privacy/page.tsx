import type { Metadata } from "next"

import { AlternatingSectionGrid } from "@/components/site/AlternatingSectionGrid"
import { PageSignoff } from "@/components/site/PageSignoff"
import { PageHero } from "@/components/site/PageHero"
import { RouteStructuredData } from "@/components/site/RouteStructuredData"
import { SectionHeading } from "@/components/site/SectionHeading"
import {
  privacyHeroCopy,
  privacyLastUpdated,
  privacySections,
  privacyShortVersionSection,
  privacySignoffCopy,
} from "@/data/copy"
import { getRouteConfig } from "@/data/site-routes"
import {
  siteAddress,
  siteEmail,
  siteEmailHref,
  siteName,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"
import { buildPageMetadata } from "@/lib/metadata"

const route = getRouteConfig("/privacy")

export const metadata: Metadata = buildPageMetadata(route!.meta)

export default function PrivacyPage() {
  return (
    <main>
      <RouteStructuredData route={route!} />
      <PageHero
        {...privacyHeroCopy}
        route={route!}
        primaryAction={{
          href: siteEmailHref,
          label: "Email a privacy question",
        }}
        secondaryAction={{ href: sitePhoneHref, label: "Call the pub" }}
      />

      <section className="bg-background py-10 md:py-14 lg:py-16">
        <div className="section-shell space-y-5">
          <SectionHeading {...privacyShortVersionSection} />

          <div className="bg-surface-1 rounded-2xl px-5 py-4">
            <div className="flex flex-col gap-3 text-sm leading-7 text-on-surface md:flex-row md:flex-wrap md:items-center md:gap-0 md:divide-x md:divide-on-surface/12 md:text-base">
              <p className="md:pr-4">
                <strong>Venue:</strong> {siteName}
              </p>
              <p className="md:px-4">
                <strong>Address:</strong> {siteAddress}
              </p>
              <p className="md:px-4">
                <strong>Email:</strong>{" "}
                <a
                  href={siteEmailHref}
                  className="text-secondary transition hover:text-secondary/80"
                >
                  {siteEmail}
                </a>
              </p>
              <p className="md:px-4">
                <strong>Phone:</strong>{" "}
                <a
                  href={sitePhoneHref}
                  className="text-secondary transition hover:text-secondary/80"
                >
                  {sitePhone}
                </a>
              </p>
              <p className="text-xs tracking-[0.16em] text-on-surface/72 uppercase md:pl-4">
                {privacyLastUpdated}
              </p>
            </div>
          </div>

          <AlternatingSectionGrid sections={privacySections} />
        </div>
      </section>

      <PageSignoff
        eyebrow={privacySignoffCopy.eyebrow}
        title={privacySignoffCopy.title}
        description={privacySignoffCopy.description}
        body={<p>{privacySignoffCopy.body}</p>}
        actions={[
          {
            href: siteEmailHref,
            label: "Email a privacy question",
          },
          {
            href: sitePhoneHref,
            label: "Call the pub",
          },
        ]}
      />
    </main>
  )
}
