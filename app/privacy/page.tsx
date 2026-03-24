import type { Metadata } from "next"

import { PageSignoff } from "@/components/site/PageSignoff"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { StickySplitSection } from "@/components/site/StickySplitSection"
import {
  siteAddress,
  siteEmail,
  siteEmailHref,
  siteName,
  sitePhone,
  sitePhoneHref,
} from "@/data/site"

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "A simple privacy page covering booking details, messages, cookies, and how to get in touch.",
  alternates: {
    canonical: "/privacy",
  },
}

const privacySections = [
  {
    title: "If you message us or book with us",
    paragraphs: [
      "We use the details you give us, such as your name, phone number, email address, and booking notes, to answer your enquiry and help with your visit.",
      "If you tell us about dietary or access needs, that is only used to help us prepare or answer your question properly.",
    ],
  },
  {
    title: "If you browse the website",
    paragraphs: [
      "Like most websites, we may receive basic technical information such as browser, device, and page-request data to keep the site working properly.",
      "We are not interested in collecting more than we need just because we can.",
    ],
  },
  {
    title: "Cookies and the map",
    paragraphs: [
      "Essential cookies keep the website working. Optional cookies let us load third-party content such as the Google Map embed.",
      "You can accept optional cookies, choose essential-only, or clear your browser cookies later if you want to reset that choice.",
    ],
  },
  {
    title: "How long we keep things",
    paragraphs: [
      "We keep information for as long as it is reasonably needed to handle the enquiry, booking, or request you contacted us about, and longer only where legal or accounting reasons require it.",
      "We do not want to hang on to old guest information unnecessarily.",
    ],
  },
  {
    title: "If you want to ask us about your information",
    paragraphs: [
      "If you want to ask what information we hold, correct something, or ask us to remove information where we can, please get in touch.",
      "The easiest way is by email or phone using the details below.",
    ],
  },
]

function AlternatingSectionGrid({
  sections,
}: {
  sections: typeof privacySections
}) {
  return (
    <div className="surface-frame overflow-hidden">
      <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className={
              index % 2 === 0
                ? "surface-pane bg-[var(--color-surface-lowest)]"
                : "surface-pane surface-pane-muted"
            }
          >
            <h2 className="section-title">{section.title}</h2>
            <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="If you message us or make a booking, here is how we use that information."
        description="We keep this simple: we use the details you share to answer your message, help with your visit, and keep the website working as it should."
        primaryAction={{
          href: siteEmailHref,
          label: "Email a privacy question",
        }}
        secondaryAction={{ href: sitePhoneHref, label: "Call the pub" }}
      />

      <StickySplitSection
        className="bg-background"
        intro={
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Short version"
              title="We keep it simple."
              description="We only want the information needed to answer messages, help with bookings, and keep the website working as expected."
            />
            <div className="surface-frame">
              <div className="surface-pane space-y-4 text-sm leading-7 text-on-surface md:text-base">
                <p>
                  <strong>Venue:</strong> {siteName}
                </p>
                <p>
                  <strong>Address:</strong> {siteAddress}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={siteEmailHref}
                    className="text-secondary transition hover:text-secondary/80"
                  >
                    {siteEmail}
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={sitePhoneHref}
                    className="text-secondary transition hover:text-secondary/80"
                  >
                    {sitePhone}
                  </a>
                </p>
                <p className="text-xs tracking-[0.16em] text-on-surface/72 uppercase">
                  Last updated: 23 March 2026
                </p>
              </div>
            </div>
          </div>
        }
      >
        <AlternatingSectionGrid sections={privacySections} />
      </StickySplitSection>

      <PageSignoff
        eyebrow="Questions?"
        title="If you want to ask about your information, the easiest thing is to contact the pub directly."
        description="We keep this page plain on purpose, and we will do the same if you get in touch with a privacy question."
        body={
          <p>
            Whether you want to correct something, ask what we hold, or simply
            check how a booking detail is used, we are happy to point you in the
            right direction.
          </p>
        }
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
