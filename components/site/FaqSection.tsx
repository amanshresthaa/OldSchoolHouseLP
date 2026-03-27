import type { ComponentProps } from "react"

import { SectionHeading } from "@/components/site/SectionHeading"
import type { LocalFaq } from "@/data/site"
import { cn } from "@/lib/utils"

interface FaqSectionProps extends ComponentProps<"section"> {
  eyebrow: string
  title: string
  description: string
  faqs: LocalFaq[]
  invert?: boolean
}

export function FaqSection({
  eyebrow,
  title,
  description,
  faqs,
  invert = false,
  className,
  ...props
}: FaqSectionProps) {
  return (
    <section
      className={cn(
        invert
          ? "bg-primary py-10 text-white md:py-14 lg:py-16"
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
          invert={invert}
        />
        <div className="surface-frame overflow-hidden">
          <div className="grid gap-px bg-[rgba(196,189,181,0.22)] lg:grid-cols-2">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className={cn(
                  "surface-pane",
                  invert
                    ? index % 2 === 0
                      ? "bg-white/[0.05]"
                      : "bg-white/[0.08]"
                    : index % 2 === 0
                      ? "bg-[var(--color-surface-lowest)]"
                      : "surface-pane-muted"
                )}
              >
                <h2 className={cn("section-title", invert && "text-white")}>
                  {faq.question}
                </h2>
                <p
                  className={cn(
                    "pt-4 text-sm leading-7 md:text-base",
                    invert ? "text-white/72" : "text-on-surface"
                  )}
                >
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
