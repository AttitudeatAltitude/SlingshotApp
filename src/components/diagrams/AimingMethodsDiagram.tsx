const OUTLINE = '#6b638f'
const CYAN = '#2ee6d6'
const MAGENTA = '#ff3ec8'
const INK = '#eae7f7'
const INK_MUTED = '#a29bc4'

function Reticle({ cx, cy, color }: { cx: number; cy: number; color: string }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={14} fill="none" stroke={color} strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={4} fill="none" stroke={color} strokeWidth={1.5} />
      <line x1={cx - 22} y1={cy} x2={cx - 16} y2={cy} stroke={color} strokeWidth={1.5} />
      <line x1={cx + 16} y1={cy} x2={cx + 22} y2={cy} stroke={color} strokeWidth={1.5} />
      <line x1={cx} y1={cy - 22} x2={cx} y2={cy - 16} stroke={color} strokeWidth={1.5} />
      <line x1={cx} y1={cy + 16} x2={cx} y2={cy + 22} stroke={color} strokeWidth={1.5} />
    </g>
  )
}

function Eye({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={7} fill="none" stroke={INK_MUTED} strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={2.5} fill={INK_MUTED} />
    </g>
  )
}

export default function AimingMethodsDiagram() {
  return (
    <svg viewBox="0 0 640 220" className="mx-auto w-full max-w-2xl" role="img" aria-label="Diagram comparing instinctive aiming, which uses a direct line of sight to the target, with gap aiming, which uses a reference point on the fork.">
      <line x1={320} y1={10} x2={320} y2={210} stroke={OUTLINE} strokeWidth={1} strokeDasharray="4 6" opacity={0.5} />

      <text x={160} y={28} fontSize={13} fontFamily="'Space Mono', monospace" fontWeight={700} fill={CYAN} textAnchor="middle" letterSpacing={1}>
        INSTINCTIVE
      </text>
      <Eye cx={60} cy={120} />
      <line x1={70} y1={120} x2={250} y2={120} stroke={CYAN} strokeWidth={1.5} />
      <Reticle cx={270} cy={120} color={CYAN} />
      <text x={160} y={175} fontSize={10.5} fontFamily="'Rajdhani', sans-serif" fill={INK_MUTED} textAnchor="middle">
        Eye locks target directly —
      </text>
      <text x={160} y={190} fontSize={10.5} fontFamily="'Rajdhani', sans-serif" fill={INK_MUTED} textAnchor="middle">
        no fixed reference point
      </text>

      <text x={480} y={28} fontSize={13} fontFamily="'Space Mono', monospace" fontWeight={700} fill={MAGENTA} textAnchor="middle" letterSpacing={1}>
        GAP AIMING
      </text>
      <Eye cx={370} cy={150} />
      <path d="M395,150 L470,80 L610,80" fill="none" stroke={MAGENTA} strokeWidth={1.5} strokeDasharray="3 5" />
      <path d="M400,190 L470,90" fill="none" stroke={OUTLINE} strokeWidth={2} />
      <path d="M400,190 L440,150" fill="none" stroke={OUTLINE} strokeWidth={2} />
      <circle cx={470} cy={80} r={4} fill={MAGENTA} />
      <text x={478} y={70} fontSize={9.5} fontFamily="'Rajdhani', sans-serif" fill={INK_MUTED}>
        reference (fork tip)
      </text>
      <Reticle cx={610} cy={80} color={MAGENTA} />
      <line x1={470} y1={80} x2={470} y2={150} stroke={INK_MUTED} strokeWidth={1} strokeDasharray="2 3" opacity={0.6} />
      <line x1={462} y1={80} x2={478} y2={80} stroke={INK_MUTED} strokeWidth={1} opacity={0.6} />
      <line x1={462} y1={150} x2={478} y2={150} stroke={INK_MUTED} strokeWidth={1} opacity={0.6} />
      <text x={486} y={118} fontSize={9.5} fontFamily="'Space Mono', monospace" fill={INK} fontWeight={700}>
        GAP
      </text>
      <text x={480} y={195} fontSize={10.5} fontFamily="'Rajdhani', sans-serif" fill={INK_MUTED} textAnchor="middle">
        Reference point held at a fixed offset from target
      </text>
    </svg>
  )
}
