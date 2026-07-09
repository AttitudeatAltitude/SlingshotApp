import type { ReactNode } from 'react'

interface CalloutProps {
  kind?: 'tip' | 'warning' | 'danger'
  title?: string
  children: ReactNode
}

const styles = {
  tip: {
    border: 'border-cyan',
    bg: 'bg-cyan/5',
    label: 'text-cyan',
    tag: 'TIP',
  },
  warning: {
    border: 'border-amber',
    bg: 'bg-amber/5',
    label: 'text-amber',
    tag: 'CAUTION',
  },
  danger: {
    border: 'border-magenta',
    bg: 'bg-magenta/5',
    label: 'text-magenta',
    tag: 'WARNING',
  },
}

export default function Callout({ kind = 'tip', title, children }: CalloutProps) {
  const s = styles[kind]
  return (
    <div className={`border-l-4 ${s.border} ${s.bg} px-5 py-4`}>
      <p className={`mb-1 font-mono text-xs font-bold tracking-[0.25em] ${s.label}`}>
        {s.tag}
        {title ? ` — ${title}` : ''}
      </p>
      <div className="text-ink-muted">{children}</div>
    </div>
  )
}
