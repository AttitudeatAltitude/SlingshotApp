import { useMemo, useState } from 'react'
import Readout from './Readout'

type PowerStyle = 'light' | 'plinking' | 'power'
type BandType = 'tapered' | 'straight' | 'tube'
type Unit = 'mm' | 'in'

const RATIO: Record<PowerStyle, number> = {
  light: 5,
  plinking: 4.25,
  power: 3.5,
}

const POWER_LABEL: Record<PowerStyle, string> = {
  light: 'Light / Target',
  plinking: 'General Plinking',
  power: 'Hunting / Power',
}

const TAPERED_WIDTH: Record<PowerStyle, { fork: [number, number]; pouch: [number, number] }> = {
  light: { fork: [18, 20], pouch: [12, 13] },
  plinking: { fork: [20, 22], pouch: [13, 15] },
  power: { fork: [23, 26], pouch: [15, 18] },
}

const STRAIGHT_WIDTH: Record<PowerStyle, [number, number]> = {
  light: [15, 16],
  plinking: [16, 18],
  power: [19, 21],
}

const TUBE_NOTE: Record<PowerStyle, string> = {
  light: 'A single thin-wall tube is usually enough — prioritize a light, forgiving draw.',
  plinking: 'A standard single tube covers most general-purpose shooting.',
  power: 'Step up to a thicker-wall tube, or double the tube, for hunting-level power.',
}

const MM_PER_IN = 25.4

function round5(n: number) {
  return Math.round(n / 5) * 5
}

export default function BandCalculator() {
  const [drawLengthIn, setDrawLengthIn] = useState<string>('26')
  const [unit, setUnit] = useState<Unit>('in')
  const [powerStyle, setPowerStyle] = useState<PowerStyle>('plinking')
  const [bandType, setBandType] = useState<BandType>('tapered')

  const drawLengthMm = useMemo(() => {
    const raw = parseFloat(drawLengthIn)
    if (Number.isNaN(raw) || raw <= 0) return 0
    return unit === 'in' ? raw * MM_PER_IN : raw
  }, [drawLengthIn, unit])

  const result = useMemo(() => {
    if (drawLengthMm <= 0) return null
    const ratio = RATIO[powerStyle]
    const activeCenter = drawLengthMm / ratio
    const activeLow = round5(activeCenter * 0.92)
    const activeHigh = round5(activeCenter * 1.08)
    return { activeLow, activeHigh, ratio }
  }, [drawLengthMm, powerStyle])

  const fmt = (mmVal: number) =>
    unit === 'in' ? (mmVal / MM_PER_IN).toFixed(1) : Math.round(mmVal).toString()

  return (
    <div className="border border-surface-line bg-surface/70 p-6">
      <div className="mb-6 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.3em] text-cyan">CALC</span>
        <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
          Band Set Calculator
        </h3>
        <div className="h-px flex-1 bg-surface-line" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Draw Length (frame to anchor point)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min={0}
                value={drawLengthIn}
                onChange={(e) => setDrawLengthIn(e.target.value)}
                className="w-full border border-surface-line bg-void px-4 py-3 font-mono text-ink focus:border-cyan focus:outline-none"
              />
              <div className="flex border border-surface-line font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setUnit('in')}
                  className={`px-3 py-2 ${unit === 'in' ? 'bg-cyan/15 text-cyan' : 'text-ink-muted'}`}
                >
                  IN
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('mm')}
                  className={`px-3 py-2 ${unit === 'mm' ? 'bg-cyan/15 text-cyan' : 'text-ink-muted'}`}
                >
                  MM
                </button>
              </div>
            </div>
            <p className="mt-1 text-xs text-ink-faint">
              Measure from where the bands leave the fork to your anchor point (e.g. corner of
              mouth). 24–28in / 610–710mm is typical for an adult.
            </p>
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Power Style
            </label>
            <select
              value={powerStyle}
              onChange={(e) => setPowerStyle(e.target.value as PowerStyle)}
              className="w-full border border-surface-line bg-void px-4 py-3 font-mono text-ink focus:border-cyan focus:outline-none"
            >
              {(Object.keys(POWER_LABEL) as PowerStyle[]).map((k) => (
                <option key={k} value={k}>
                  {POWER_LABEL[k]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Band Type
            </label>
            <select
              value={bandType}
              onChange={(e) => setBandType(e.target.value as BandType)}
              className="w-full border border-surface-line bg-void px-4 py-3 font-mono text-ink focus:border-cyan focus:outline-none"
            >
              <option value="tapered">Flat — Tapered</option>
              <option value="straight">Flat — Straight</option>
              <option value="tube">Tube</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {result ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <Readout
                  label="Active Length"
                  value={`${fmt(result.activeLow)}–${fmt(result.activeHigh)}`}
                  unit={unit}
                  accent="cyan"
                />
                <Readout label="Draw Ratio" value={`${result.ratio}×`} accent="magenta" />
              </div>

              {bandType === 'tapered' && (
                <div className="grid grid-cols-2 gap-4">
                  <Readout
                    label="Fork-End Width"
                    value={`${TAPERED_WIDTH[powerStyle].fork[0]}–${TAPERED_WIDTH[powerStyle].fork[1]}`}
                    unit="mm"
                    accent="amber"
                  />
                  <Readout
                    label="Pouch-End Width"
                    value={`${TAPERED_WIDTH[powerStyle].pouch[0]}–${TAPERED_WIDTH[powerStyle].pouch[1]}`}
                    unit="mm"
                    accent="amber"
                  />
                </div>
              )}

              {bandType === 'straight' && (
                <Readout
                  label="Band Width"
                  value={`${STRAIGHT_WIDTH[powerStyle][0]}–${STRAIGHT_WIDTH[powerStyle][1]}`}
                  unit="mm"
                  accent="amber"
                />
              )}

              {bandType === 'tube' && (
                <div className="border border-surface-line bg-void-deep px-4 py-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                    Tube Guidance
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{TUBE_NOTE[powerStyle]}</p>
                </div>
              )}

              <p className="text-xs text-ink-faint">
                Cut a test set slightly long and trim down — it's easy to shorten a band, impossible
                to lengthen one. Treat these numbers as a starting point, not gospel.
              </p>
            </>
          ) : (
            <div className="flex h-full items-center justify-center border border-dashed border-surface-line p-8 text-center text-sm text-ink-faint">
              Enter a draw length to compute a suggested cut.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
