"use client"

import type { ComponentProps } from "react"
import { startTransition, useMemo, useState } from "react"
import { DownloadSimple, ForkKnife } from "@phosphor-icons/react/dist/ssr"

import { MenuInteractive } from "@/components/site/MenuInteractive"
import { Button } from "@/components/ui/button"
import type { MenuCategory } from "@/lib/menu"
import { cn } from "@/lib/utils"

type MenuKind = "dinner" | "lunch"

interface MenuExperienceItem {
  kind: MenuKind
  label: string
  shortLabel: string
  serviceLine: string
  summary: string
  renderedHint: string
  renderedCategories: MenuCategory[]
  pdfHref: string
}

interface MenuSwitcherExperienceProps {
  menus: MenuExperienceItem[]
}

export function MenuSwitcherExperience({
  menus,
  className,
  ...props
}: MenuSwitcherExperienceProps & ComponentProps<"div">) {
  const [activeKind, setActiveKind] = useState<MenuKind>("dinner")

  const activeMenu = useMemo(
    () => menus.find((item) => item.kind === activeKind) ?? menus[0],
    [activeKind, menus]
  )

  return (
    <div
      className={cn(
        "surface-frame overflow-hidden rounded-[1.6rem]",
        className
      )}
      {...props}
    >
      <div className="border-b border-[rgba(196,189,181,0.28)] bg-[linear-gradient(180deg,var(--color-surface-lowest)_0%,#f6f0e7_100%)]">
        <div className="flex flex-col gap-2.5 px-3 py-3 md:px-6 md:py-6">
          <div className="grid gap-2.5 md:grid-cols-[minmax(0,1fr)_14rem] md:items-end">
            <div className="space-y-2.5">
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                Lunch or dinner
              </p>
              <div className="grid grid-cols-2 gap-2">
                {menus.map((menu) => (
                  <button
                    key={menu.kind}
                    type="button"
                    onClick={() =>
                      startTransition(() => {
                        setActiveKind(menu.kind)
                      })
                    }
                    className={cn(
                      "rounded-[1rem] border px-3.5 py-3 text-left transition duration-[var(--duration-micro)] ease-[var(--easing-standard)]",
                      activeKind === menu.kind
                        ? "border-[rgba(175,43,62,0.18)] bg-secondary text-white shadow-[0_14px_28px_rgba(27,28,28,0.08)]"
                        : "border-[rgba(196,189,181,0.32)] bg-white text-on-background hover:bg-[var(--color-surface)]"
                    )}
                  >
                    <span className="block text-sm font-semibold md:text-base">
                      {menu.label}
                    </span>
                    <span
                      className={cn(
                        "mt-1 block text-xs leading-5",
                        activeKind === menu.kind
                          ? "text-white/76"
                          : "text-on-surface/72"
                      )}
                    >
                      {menu.serviceLine}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1rem] border border-[rgba(196,189,181,0.32)] bg-white p-3 shadow-[0_14px_28px_rgba(27,28,28,0.05)]">
              <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-secondary uppercase">
                {activeMenu.shortLabel}
              </p>
              <p className="mt-1 text-sm leading-5.5 text-on-surface">
                {activeMenu.summary}
              </p>
              <Button asChild size="sm" className="mt-2.5 w-full">
                <a href={activeMenu.pdfHref} target="_blank" rel="noreferrer">
                  Download PDF
                  <DownloadSimple />
                </a>
              </Button>
            </div>
          </div>

          {activeMenu.renderedHint ? (
            <p className="inline-flex items-center gap-2 text-sm leading-6 text-on-surface/78">
              <ForkKnife className="size-4 text-secondary" />
              {activeMenu.renderedHint}
            </p>
          ) : null}
        </div>
      </div>

      <div className="bg-[linear-gradient(180deg,var(--color-surface-lowest)_0%,var(--color-surface)_100%)]">
        <div className="surface-pane px-0 py-0">
          <MenuInteractive
            key={activeMenu.kind}
            categories={activeMenu.renderedCategories}
          />
        </div>
      </div>
    </div>
  )
}
