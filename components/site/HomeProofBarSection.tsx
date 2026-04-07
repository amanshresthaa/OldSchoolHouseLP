import * as React from "react"

import { SectionHeading } from "@/components/site/SectionHeading"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface HomeProofBarItem {
  title: string
  description: string
}

interface HomeProofBarSectionCopy {
  eyebrow: string
  title: string
  description: string
  highlightLabel: string
  highlightValue: string
  highlightNote: string
}

interface HomeProofBarSectionProps extends React.ComponentProps<"section"> {
  items: readonly HomeProofBarItem[]
  copy: HomeProofBarSectionCopy
}

export function HomeProofBarSection({
  items,
  copy,
  className,
  ...props
}: HomeProofBarSectionProps) {
  return (
    <section
      className={cn("bg-background py-10 md:py-14 lg:py-16", className)}
      aria-labelledby="home-proof-bar-title"
      {...props}
    >
      <div className="section-shell">
        <div className="surface-frame bg-[linear-gradient(180deg,rgba(120,97,77,0.06)_0%,rgba(120,97,77,0)_100%)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="surface-pane border-b border-[rgba(196,189,181,0.42)] bg-[color-mix(in_srgb,var(--color-surface-low)_72%,white_28%)] md:px-6 md:py-6 lg:border-r lg:border-b-0 lg:px-8 lg:py-8">
              <SectionHeading
                eyebrow={copy.eyebrow}
                title={copy.title}
                titleId="home-proof-bar-title"
                description={copy.description}
                className="max-w-none space-y-4"
              />
              <Card className="mt-6 gap-0 rounded-[1.4rem] bg-primary py-0 text-white shadow-[0_22px_45px_rgba(12,33,21,0.18)]">
                <CardHeader className="gap-3 px-5 pt-5 md:px-6 md:pt-6">
                  <p className="text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--color-on-tertiary-container)] uppercase">
                    {copy.highlightLabel}
                  </p>
                  <p className="font-heading text-[2.25rem] leading-none tracking-[-0.04em] md:text-[2.75rem]">
                    {copy.highlightValue}
                  </p>
                </CardHeader>
                <CardContent className="px-5 pb-5 md:px-6 md:pb-6">
                  <p className="max-w-[22rem] text-sm leading-6 text-white/72">
                    {copy.highlightNote}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="overflow-hidden bg-[rgba(196,189,181,0.4)]">
              <div className="flex items-center justify-between px-5 py-4 text-[0.7rem] font-semibold tracking-[0.16em] text-secondary uppercase md:hidden">
                <Badge variant="pill" className="h-auto px-3 py-1">
                  Proof stories
                </Badge>
                <p>{String(items.length).padStart(2, "0")} stories</p>
              </div>
              <ScrollArea className="max-h-[18.5rem] md:max-h-none">
                <div className="grid grid-cols-1 gap-3 px-5 pb-5 md:grid-cols-2 md:gap-px md:px-0 md:pb-0 xl:grid-cols-3">
                  {items.map((item, index) => (
                    <Card
                      key={item.title}
                      className={cn(
                        "surface-pane min-h-[18.5rem] gap-0 rounded-[1.5rem] border border-[rgba(196,189,181,0.5)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(246,241,235,0.96)_100%)] py-0 shadow-[0_18px_34px_rgba(31,34,29,0.08)] md:min-h-[14rem] md:rounded-none md:border-0 md:shadow-none",
                        index % 3 === 1 &&
                          "bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-surface-low)_86%,white_14%)_0%,color-mix(in_srgb,var(--color-surface-low)_74%,white_26%)_100%)]"
                      )}
                    >
                      <CardHeader className="gap-4 px-5 pt-5 md:px-6 md:pt-6">
                        <div className="flex items-center gap-3">
                          <Separator className="flex-1 bg-[rgba(175,43,62,0.22)]" />
                          <Badge variant="pill" className="h-auto px-3 py-1">
                            {String(index + 1).padStart(2, "0")}
                          </Badge>
                        </div>
                        <CardTitle className="font-heading text-[1.55rem] leading-[1.08] tracking-[-0.03em] text-primary md:text-[1.35rem] md:leading-[1.18] md:tracking-[-0.02em]">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-5 pt-0 md:px-6">
                        <p className="text-sm leading-6 text-on-surface md:text-[0.9375rem]">
                          {item.description}
                        </p>
                      </CardContent>
                      <CardFooter className="mt-auto border-t border-[rgba(196,189,181,0.42)] px-5 pt-4 pb-5 md:px-6 md:pb-6">
                        <p className="text-[0.72rem] font-semibold tracking-[0.12em] text-primary/55 uppercase">
                          {String(index + 1).padStart(2, "0")} of{" "}
                          {String(items.length).padStart(2, "0")}
                        </p>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
