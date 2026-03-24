interface HighlightMatchProps {
  text: string
  term: string
}

export function HighlightMatch({ text, term }: HighlightMatchProps) {
  if (!term.trim()) return <>{text}</>
  const idx = text.toLowerCase().indexOf(term.toLowerCase())
  if (idx === -1) return <>{text}</>

  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded-sm bg-[var(--color-on-tertiary-container)]/30 px-0.5 text-inherit">
        {text.slice(idx, idx + term.length)}
      </mark>
      {text.slice(idx + term.length)}
    </>
  )
}
