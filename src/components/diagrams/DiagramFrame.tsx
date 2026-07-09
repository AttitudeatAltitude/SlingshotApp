import type { ReactNode } from 'react'
import type { Accent } from '../../lib/accent'
import { accentClasses } from '../../lib/accent'

interface DiagramFrameProps {
  fig: string
  title: string
  caption?: string
  accent?: Accent
  children: ReactNode
}

export default function DiagramFrame({
  fig,
  title,
  caption,
  accent = 'cyan',
  children,
}: DiagramFrameProps) {
  const a = accentClasses[accent]
  return (
    <div className="clip-panel relative border border-surface-line bg-surface/70 p-6">
      <div className={`absolute left-0 top-0 h-8 w-1 ${a.bg} opacity-80`} />
      <div className="mb-4 flex items-center gap-3">
        <span className={`font-mono text-xs tracking-[0.3em] ${a.text}`}>
          FIG. {fig}
        </span>
        <h3 className="font-display text-base font-bold uppercase tracking-wide text-ink">
          {title}
        </h3>
        <div className="h-px flex-1 bg-surface-line" />
      </div>
      <div className="grid-bg overflow-x-auto border border-surface-line bg-void-deep p-4">
        {children}
      </div>
      {caption && <p className="mt-3 text-xs text-ink-faint">{caption}</p>}
    </div>
  )
}
