export type Accent = 'cyan' | 'magenta' | 'amber'

export const accentClasses: Record<
  Accent,
  { text: string; border: string; bg: string; glow: string; ring: string }
> = {
  cyan: {
    text: 'text-cyan',
    border: 'border-cyan',
    bg: 'bg-cyan',
    glow: 'shadow-[var(--shadow-glow-cyan)]',
    ring: 'focus-visible:outline-cyan',
  },
  magenta: {
    text: 'text-magenta',
    border: 'border-magenta',
    bg: 'bg-magenta',
    glow: 'shadow-[var(--shadow-glow-magenta)]',
    ring: 'focus-visible:outline-magenta',
  },
  amber: {
    text: 'text-amber',
    border: 'border-amber',
    bg: 'bg-amber',
    glow: 'shadow-[var(--shadow-glow-amber)]',
    ring: 'focus-visible:outline-amber',
  },
}
