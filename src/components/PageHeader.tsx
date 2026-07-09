import type { Accent } from '../lib/accent'
import { accentClasses } from '../lib/accent'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
  accent?: Accent
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  accent = 'cyan',
}: PageHeaderProps) {
  const a = accentClasses[accent]
  return (
    <header className="mb-12 border-b border-surface-line pb-8">
      <p className={`mb-3 font-mono text-sm tracking-[0.4em] ${a.text}`}>
        // {eyebrow}
      </p>
      <h1 className="font-display text-4xl font-extrabold uppercase tracking-wide text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-muted">{description}</p>
    </header>
  )
}
