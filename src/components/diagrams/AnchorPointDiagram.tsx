const OUTLINE = '#6b638f'
const CYAN = '#2ee6d6'
const MAGENTA = '#ff3ec8'
const AMBER = '#ffb020'
const INK = '#eae7f7'
const INK_MUTED = '#a29bc4'

export default function AnchorPointDiagram() {
  return (
    <svg
      viewBox="-40 0 500 320"
      className="mx-auto w-full max-w-xl"
      role="img"
      aria-label="Diagram showing three slingshot anchor points on a head profile: corner of mouth, cheekbone or jaw, and ear."
    >
      <path
        d="M150,40
           Q205,42 216,92
           Q220,112 233,122
           Q248,130 238,141
           Q228,148 222,156
           Q231,161 224,171
           Q212,179 206,190
           Q200,211 179,223
           Q150,231 129,225
           Q108,256 98,290
           L60,290
           Q54,222 60,182
           Q49,152 55,121
           Q60,82 91,56
           Q111,41 150,40
           Z"
        fill="none"
        stroke={OUTLINE}
        strokeWidth={2.5}
      />
      <ellipse cx={72} cy={166} rx={11} ry={17} fill="none" stroke={OUTLINE} strokeWidth={2.5} />

      {/* Corner of mouth */}
      <circle cx={222} cy={178} r={5} fill={CYAN} />
      <circle cx={222} cy={178} r={9} fill="none" stroke={CYAN} strokeWidth={1} opacity={0.5} />
      <path d="M222,178 L300,120" fill="none" stroke={CYAN} strokeWidth={1.25} opacity={0.7} />
      <circle cx={300} cy={120} r={2.5} fill={CYAN} />
      <text x={308} y={117} fontSize={11} fontFamily="'Space Mono', monospace" fontWeight={700} letterSpacing={0.5} fill={INK}>
        CORNER OF MOUTH
      </text>
      <text x={308} y={132} fontSize={10} fontFamily="'Rajdhani', sans-serif" fill={INK_MUTED}>
        Fast · close range
      </text>

      {/* Cheekbone / jaw */}
      <circle cx={178} cy={198} r={5} fill={MAGENTA} />
      <circle cx={178} cy={198} r={9} fill="none" stroke={MAGENTA} strokeWidth={1} opacity={0.5} />
      <path d="M178,198 L300,195" fill="none" stroke={MAGENTA} strokeWidth={1.25} opacity={0.7} />
      <circle cx={300} cy={195} r={2.5} fill={MAGENTA} />
      <text x={308} y={192} fontSize={11} fontFamily="'Space Mono', monospace" fontWeight={700} letterSpacing={0.5} fill={INK}>
        CHEEKBONE / JAW
      </text>
      <text x={308} y={207} fontSize={10} fontFamily="'Rajdhani', sans-serif" fill={INK_MUTED}>
        Controlled · target
      </text>

      {/* Ear */}
      <circle cx={72} cy={166} r={5} fill={AMBER} />
      <circle cx={72} cy={166} r={9} fill="none" stroke={AMBER} strokeWidth={1} opacity={0.5} />
      <path d="M72,166 L72,246" fill="none" stroke={AMBER} strokeWidth={1.25} opacity={0.7} />
      <circle cx={72} cy={246} r={2.5} fill={AMBER} />
      <text x={72} y={266} fontSize={11} fontFamily="'Space Mono', monospace" fontWeight={700} letterSpacing={0.5} fill={INK} textAnchor="middle">
        EAR
      </text>
      <text x={72} y={280} fontSize={10} fontFamily="'Rajdhani', sans-serif" fill={INK_MUTED} textAnchor="middle">
        Long draw · power
      </text>
    </svg>
  )
}
