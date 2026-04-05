import type { ComponentProps } from "react"
import Link from "next/link"
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"

import { SectionHeading } from "@/components/site/SectionHeading"
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
        muted
          ? "bg-[var(--color-surface-low)] py-10 md:py-14 lg:py-16"
          : "bg-background py-10 md:py-14 lg:py-16",
        className
      )}
      {...props}
    >
      <div className="section-shell space-y-5">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                index % 2 === 0
                  ? "surface-panel transition hover:-translate-y-0.5"
                  : "surface-panel-muted transition hover:-translate-y-0.5"
              }
            >
              <p className="eyebrow">{link.eyebrow}</p>
              <h3 className="section-title pt-3">{link.title}</h3>
              <p className="pt-3 text-sm leading-7 text-on-surface md:text-base">
                {link.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                Open guide
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
