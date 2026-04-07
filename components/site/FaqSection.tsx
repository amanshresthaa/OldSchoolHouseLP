"use client"

import type { ComponentProps } from "react"

import { SectionHeading } from "@/components/site/SectionHeading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
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
        <div
          className={cn(
            "overflow-hidden rounded-[2rem]",
            invert
              ? "bg-white/[0.04] shadow-[var(--shadow-frame)] backdrop-blur-md"
              : "surface-frame"
          )}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue={faqs[0]?.question}
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className={cn(
                  "border-b-0 px-5 py-5 md:px-6 md:py-6",
                  invert
                    ? index % 2 === 0
                      ? "bg-white/[0.02]"
                      : "bg-white/[0.05]"
                    : index % 2 === 0
                      ? "bg-[var(--color-surface-lowest)]"
                      : "bg-[var(--color-surface-low)]"
                )}
              >
                <AccordionTrigger
                  className={cn(
                    "gap-4 py-0 text-left hover:no-underline [&>[data-slot=accordion-trigger-icon]]:mt-1 [&>[data-slot=accordion-trigger-icon]]:inline-flex [&>[data-slot=accordion-trigger-icon]]:size-10 [&>[data-slot=accordion-trigger-icon]]:shrink-0 [&>[data-slot=accordion-trigger-icon]]:items-center [&>[data-slot=accordion-trigger-icon]]:justify-center [&>[data-slot=accordion-trigger-icon]]:rounded-full [&>[data-slot=accordion-trigger-icon]]:border [&>[data-slot=accordion-trigger-icon]]:text-base",
                    invert
                      ? "text-white [&>[data-slot=accordion-trigger-icon]]:border-white/10 [&>[data-slot=accordion-trigger-icon]]:bg-white/[0.04]"
                      : "text-on-background [&>[data-slot=accordion-trigger-icon]]:border-[rgba(196,189,181,0.35)] [&>[data-slot=accordion-trigger-icon]]:bg-[var(--color-surface-lowest)]"
                  )}
                >
                  <span
                    className={cn(
                      "font-heading text-[1.55rem] leading-[1.08] md:text-[1.8rem]",
                      invert && "text-white"
                    )}
                  >
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="md:max-w-3xl">
                  <p
                    className={cn(
                      "text-sm leading-6 md:text-base md:leading-7",
                      invert ? "text-white/72" : "text-on-surface"
                    )}
                  >
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
