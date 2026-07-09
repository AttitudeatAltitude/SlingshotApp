const OUTLINE = '#6b638f'
const CYAN = '#2ee6d6'
const MAGENTA = '#ff3ec8'
const AMBER = '#ffb020'
const INK = '#eae7f7'
const INK_MUTED = '#a29bc4'

export default function ReleaseDiagram() {
  return (
    <svg viewBox="0 0 640 260" className="mx-auto w-full max-w-2xl" role="img" aria-label="Diagram showing the pouch drawn back to the anchor point, the release trajectory passing through the fork gap, and the follow-through position held at anchor after release.">
      <text x={320} y={20} fontSize={10} fontFamily="'Rajdhani', sans-serif" fill={INK} textAnchor="middle">
        Relaxed release along the draw line — no sideways push or snap.
      </text>

      <line x1={340} y1={230} x2={340} y2={95} stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
      <line x1={340} y1={95} x2={305} y2={55} stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
      <line x1={340} y1={95} x2={375} y2={55} stroke={OUTLINE} strokeWidth={3} strokeLinecap="round" />
      <text x={340} y={250} fontSize={9.5} fontFamily="'Space Mono', monospace" fill={INK_MUTED} textAnchor="middle" letterSpacing={0.5}>
        FRAME
      </text>

      <line x1={305} y1={55} x2={90} y2={150} stroke={CYAN} strokeWidth={2} opacity={0.85} />
      <line x1={375} y1={55} x2={90} y2={150} stroke={CYAN} strokeWidth={2} opacity={0.85} />
      <circle cx={90} cy={150} r={7} fill={CYAN} />
      <text x={90} y={128} fontSize={9.5} fontFamily="'Space Mono', monospace" fill={CYAN} textAnchor="middle" fontWeight={700} letterSpacing={0.5}>
        ANCHOR
      </text>

      <circle cx={90} cy={150} r={18} fill="none" stroke={INK_MUTED} strokeWidth={1} strokeDasharray="2 4" opacity={0.5} />
      <text x={90} y={196} fontSize={9} fontFamily="'Rajdhani', sans-serif" fill={INK_MUTED} textAnchor="middle">
        hold — follow through
      </text>

      <path
        d="M90,150 Q220,80 340,78 L560,74"
        fill="none"
        stroke={MAGENTA}
        strokeWidth={2}
        strokeDasharray="6 6"
        markerEnd="url(#arrow)"
      />

      <line x1={560} y1={50} x2={560} y2={220} stroke={OUTLINE} strokeWidth={1} strokeDasharray="3 5" opacity={0.4} />
      <circle cx={560} cy={74} r={16} fill="none" stroke={AMBER} strokeWidth={1.5} />
      <circle cx={560} cy={74} r={4} fill="none" stroke={AMBER} strokeWidth={1.5} />
      <text x={560} y={38} fontSize={9.5} fontFamily="'Space Mono', monospace" fill={AMBER} textAnchor="middle" fontWeight={700} letterSpacing={0.5}>
        TARGET
      </text>

      <defs>
        <marker id="arrow" markerWidth={8} markerHeight={8} refX={5} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={MAGENTA} />
        </marker>
      </defs>
    </svg>
  )
}
