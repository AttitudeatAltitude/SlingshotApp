import type { ReactNode } from 'react'
import type { Accent } from '../../lib/accent'
import { accentClasses } from '../../lib/accent'

interface ReadoutProps {
  label: string
  value: ReactNode
  unit?: string
  accent?: Accent
}

export default function Readout({ label, value, unit, accent = 'cyan' }: ReadoutProps) {
  const a = accentClasses[accent]
  return (
    <div className="border border-surface-line bg-void-deep px-4 py-3">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
        {label}
      </p>
      <p className={`mt-1 font-display text-2xl font-bold ${a.text}`}>
        {value}
        {unit && (
          <span className="ml-1 font-mono text-sm font-normal text-ink-muted">
            {unit}
          </span>
        )}
      </p>
    </div>
  )
}
