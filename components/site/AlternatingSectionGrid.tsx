interface AlternatingSectionGridSection {
  title: string
  paragraphs: string[]
}

interface AlternatingSectionGridProps {
  sections: AlternatingSectionGridSection[]
}

export function AlternatingSectionGrid({
  sections,
}: AlternatingSectionGridProps) {
  return (
    <div className="surface-frame overflow-hidden">
      <div className="grid gap-px bg-[rgba(196,189,181,0.22)]">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className={
              index % 2 === 0
                ? "surface-pane bg-[var(--color-surface-lowest)]"
                : "surface-pane surface-pane-muted"
            }
          >
            <h3 className="font-heading text-[1.28rem] leading-[1.12] tracking-[-0.02em] text-on-background md:text-[1.42rem]">
              {section.title}
            </h3>
            <div className="space-y-3 pt-3 text-sm leading-relaxed text-on-surface">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
