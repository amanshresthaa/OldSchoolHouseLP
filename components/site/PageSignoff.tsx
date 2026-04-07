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
      className={cn("bg-primary py-10 text-white md:py-14 lg:py-16", className)}
      {...props}
    >
      <div className="section-shell space-y-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            invert
          />
          <div className="shrink-0">
            <SiteActionCard actions={actions} tone="dark" />
          </div>
        </div>
        <div className="night-panel space-y-4 p-5 md:p-6">
          <div className="text-sm leading-relaxed text-white/72 md:text-base">
            {body}
          </div>
          {details ? <div className="space-y-4">{details}</div> : null}
        </div>
      </div>
    </section>
  )
}
