import type { ReactNode } from 'react'
import type { Accent } from '../lib/accent'
import { accentClasses } from '../lib/accent'

interface HudPanelProps {
  title?: string
  glyph?: string
  accent?: Accent
  children: ReactNode
  className?: string
}

export default function HudPanel({
  title,
  glyph,
  accent = 'cyan',
  children,
  className = '',
}: HudPanelProps) {
  const a = accentClasses[accent]
  return (
    <div
      className={`clip-panel relative border border-surface-line bg-surface/70 p-6 backdrop-blur-sm ${className}`}
    >
      <div className={`absolute left-0 top-0 h-8 w-1 ${a.bg} opacity-80`} />
      {(title || glyph) && (
        <div className="mb-4 flex items-center gap-3">
          {glyph && (
            <span className={`font-mono text-xs tracking-[0.3em] ${a.text}`}>
              {glyph}
            </span>
          )}
          {title && (
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
              {title}
            </h3>
          )}
          <div className="h-px flex-1 bg-surface-line" />
        </div>
      )}
      <div className="text-ink-muted">{children}</div>
    </div>
  )
}
