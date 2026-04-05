"use client"

import { CaretDown } from "@phosphor-icons/react/dist/ssr"
import type { ComponentProps } from "react"
import * as React from "react"

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
  const [openQuestion, setOpenQuestion] = React.useState<string | null>(
    faqs[0]?.question ?? null
  )

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
        <div
          className={cn(
            "overflow-hidden rounded-[2rem] border shadow-[0px_14px_36px_rgba(27,28,28,0.05)]",
            invert
              ? "border-white/10 bg-white/[0.04]"
              : "border-[rgba(196,189,181,0.35)] bg-[var(--color-surface-lowest)]"
          )}
        >
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className={cn(
                "px-5 py-5 md:px-7 md:py-6",
                index > 0 &&
                  (invert
                    ? "border-t border-white/10"
                    : "border-t border-[rgba(196,189,181,0.32)]"),
                invert
                  ? index % 2 === 0
                    ? "bg-white/[0.02]"
                    : "bg-white/[0.05]"
                  : index % 2 === 0
                    ? "bg-[var(--color-surface-lowest)]"
                    : "bg-[var(--color-surface-low)]"
              )}
            >
              <button
                type="button"
                className={cn(
                  "flex w-full items-start justify-between gap-4 text-left",
                  invert ? "text-white" : "text-on-background"
                )}
                onClick={() =>
                  setOpenQuestion((currentQuestion) =>
                    currentQuestion === faq.question ? null : faq.question
                  )
                }
                aria-expanded={openQuestion === faq.question}
                aria-controls={`faq-panel-${index}`}
              >
                <h3
                  className={cn(
                    "font-heading text-[1.55rem] leading-[1.08] md:text-[1.8rem]",
                    invert && "text-white"
                  )}
                >
                  {faq.question}
                </h3>
                <span
                  className={cn(
                    "mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border transition",
                    invert
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-[rgba(196,189,181,0.35)] bg-[var(--color-surface-lowest)]",
                    openQuestion === faq.question && "rotate-180"
                  )}
                >
                  <CaretDown className="size-4" />
                </span>
              </button>
              {openQuestion === faq.question ? (
                <div id={`faq-panel-${index}`} className="pt-4 md:max-w-3xl">
                  <p
                    className={cn(
                      "border-t pt-4 text-sm leading-6 md:text-base md:leading-7",
                      invert
                        ? "border-white/10 text-white/72"
                        : "border-[rgba(196,189,181,0.32)] text-on-surface"
                    )}
                  >
                    {faq.answer}
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
