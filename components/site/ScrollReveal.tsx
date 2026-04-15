import * as React from "react"

import { cn } from "@/lib/utils"

interface ScrollRevealProps extends React.ComponentProps<"div"> {
  delayMs?: number
}

export function ScrollReveal({
  className,
  children,
  delayMs,
  ...props
}: ScrollRevealProps) {
  void delayMs

  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  )
}
