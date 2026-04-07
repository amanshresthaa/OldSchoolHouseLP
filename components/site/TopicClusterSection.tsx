import type { ComponentProps } from "react"
import Link from "next/link"

import { EditorialLinkCardContent } from "@/components/site/HomepagePatternPrimitives"
import { ScrollReveal } from "@/components/site/ScrollReveal"
import { SectionHeading } from "@/components/site/SectionHeading"
import { getSectionBandClass } from "@/lib/section-bands"
import { cn } from "@/lib/utils"

export interface TopicClusterLink {
  href: string
  eyebrow: string
  title: string
  description: string
}

interface TopicClusterSectionProps extends ComponentProps<"section"> {
  eyebrow: string
  title: string
  description: string
  links: TopicClusterLink[]
  muted?: boolean
}

export function TopicClusterSection({
  className,
  eyebrow,
  title,
  description,
  links,
  muted = false,
  ...props
}: TopicClusterSectionProps) {
  return (
    <section
      className={cn(
        "page-section",
        getSectionBandClass(muted ? "paper" : "plain"),
        className
      )}
      {...props}
    >
      <div className="section-shell flex flex-col gap-5">
        <ScrollReveal delayMs={0}>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </ScrollReveal>
        <ScrollReveal
          delayMs={120}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                index % 2 === 0
                  ? "surface-frame block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
                  : "surface-panel-muted block h-full rounded-2xl py-0 transition hover:-translate-y-0.5"
              }
            >
              <EditorialLinkCardContent
                eyebrow={link.eyebrow}
                title={link.title}
                description={link.description}
                ctaLabel="Open guide"
                className={index % 2 === 0 ? "surface-pane" : undefined}
              />
            </Link>
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}
