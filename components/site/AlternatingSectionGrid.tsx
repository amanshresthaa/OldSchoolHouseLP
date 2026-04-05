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
            <h3 className="section-title">{section.title}</h3>
            <div className="space-y-3 pt-4 text-sm leading-7 text-on-surface md:text-base">
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
