import type { ComponentProps, ReactNode } from "react"

import { SectionHeading } from "@/components/site/SectionHeading"
import {
  type SiteAction,
  SiteActionCard,
} from "@/components/site/SiteActionCard"
import { cn } from "@/lib/utils"

interface PageSignoffProps extends ComponentProps<"section"> {
  eyebrow: string
  title: string
  description?: string
  body: ReactNode
  actions: SiteAction[]
  details?: ReactNode
}

export function PageSignoff({
  eyebrow,
  title,
  description,
  body,
  actions,
  className,
  details,
  ...props
}: PageSignoffProps) {
  return (
    <section
      className={cn("page-section bg-primary text-white", className)}
      {...props}
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          invert
        />
        <div className="night-panel space-y-6">
          <div className="text-sm leading-7 text-white/72 md:text-base">
            {body}
          </div>
          {details ? <div className="space-y-5">{details}</div> : null}
          <SiteActionCard actions={actions} tone="dark" />
        </div>
      </div>
    </section>
  )
}
