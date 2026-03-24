import type { Metadata } from "next"

import { PageSignoff } from "@/components/site/PageSignoff"
import { PageHero } from "@/components/site/PageHero"
import { SectionHeading } from "@/components/site/SectionHeading"
import { StickySplitSection } from "@/components/site/StickySplitSection"
import { siteEmailHref, sitePhoneHref } from "@/data/site"

export const metadata: Metadata = {
  title: "Booking & Website Terms",
  description:
    "A short, guest-friendly summary of bookings, menus, allergies, and using the website.",
  alternates: {
    canonical: "/tos",
  },
}

const termsSections = [
  {
    title: "If you are checking the website",
    paragraphs: [
      "We do our best to keep opening hours, menus, prices, and event details accurate, but things can change.",
      "If something matters to today’s visit, please call the pub rather than relying on an older saved page or screenshot.",
    ],
  },
  {
    title: "If you are booking or sending a message",
    paragraphs: [
      "Sending an enquiry does not confirm a booking by itself. Availability is only confirmed once the pub has agreed it with you.",
      "For bigger tables, events, or more detailed requests, we may need a little more information before confirming plans.",
    ],
  },
  {
    title: "If you are looking at the menu",
    paragraphs: [
      "Menu items, drinks, and offers can change with stock, service, and seasonal updates.",
      "The online menu is there to give you a clear idea of what we serve, but final availability is always confirmed at the pub.",
    ],
  },
  {
    title: "If allergies or dietary needs matter",
    paragraphs: [
      "Please speak to the team before ordering if anyone in your group has an allergy, intolerance, or dietary concern.",
      "We will always try to help, but we cannot guarantee an allergen-free environment.",
    ],
  },
  {
    title: "If you click through to other services",
    paragraphs: [
      "Parts of the site may link out to services such as maps, social channels, or other third-party tools. Those services run under their own terms and privacy notices.",
      "We are not responsible for the content or operation of external websites.",
    ],
  },
  {
    title: "The formal bit",
    paragraphs: [
      "These terms are governed by the laws of England and Wales.",
      "If you have a question about them, contact the pub directly and we will do our best to answer it clearly.",
    ],
  },
]

function AlternatingSectionGrid({
  sections,
}: {
  sections: typeof termsSections
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

export default function TermsOfServicePage() {
  return (
    <main>
      <PageHero
        eyebrow="Terms"
        title="If you are booking, checking the menu, or looking up details for today, here is the short version."
        description="The website is here to help you plan, but some things still need a quick word with the pub. This page keeps that simple."
        primaryAction={{
          href: sitePhoneHref,
          label: "Call with a booking question",
        }}
        secondaryAction={{ href: siteEmailHref, label: "Email the team" }}
      />

      <StickySplitSection
        className="bg-background"
        intro={
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Short version"
              title="Use the site to plan. Use the pub to confirm."
              description="That is the easiest way to think about bookings, menus, opening hours, and anything time-sensitive."
            />
            <div className="surface-frame">
              <div className="surface-pane space-y-4 text-sm leading-7 text-on-surface md:text-base">
                <p>
                  If the answer affects your visit today, a quick call is always
                  the safest route.
                </p>
                <p>
                  If your question is about privacy or cookies, the separate
                  privacy page explains that in plain language too.
                </p>
              </div>
            </div>
          </div>
        }
      >
        <AlternatingSectionGrid sections={termsSections} />
      </StickySplitSection>

      <PageSignoff
        eyebrow="Need a clear answer today?"
        title="Use the site to plan, then use the pub to confirm anything time-sensitive."
        description="That is the simplest way to think about bookings, menu changes, and details that affect today’s visit."
        body={
          <p>
            If you are unsure about a booking, menu item, or opening detail,
            call or email the team and we will help you get the current answer
            without guesswork.
          </p>
        }
        actions={[
          {
            href: sitePhoneHref,
            label: "Call with a booking question",
          },
          {
            href: siteEmailHref,
            label: "Email the team",
          },
        ]}
      />
    </main>
  )
}
