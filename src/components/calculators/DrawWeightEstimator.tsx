import { useMemo, useState } from 'react'
import Readout from './Readout'
import type { Accent } from '../../lib/accent'

type WeightUnit = 'lb' | 'n'
type LengthUnit = 'in' | 'mm'
type BandType = 'tapered' | 'straight' | 'tube'

const LB_TO_N = 4.44822
const IN_TO_M = 0.0254
const MM_TO_M = 0.001
const J_TO_FTLB = 0.737562
const MS_TO_FPS = 3.28084

const EFFICIENCY: Record<BandType, number> = {
  tapered: 0.65,
  straight: 0.55,
  tube: 0.5,
}

const BAND_TYPE_LABEL: Record<BandType, string> = {
  tapered: 'Flat — Tapered',
  straight: 'Flat — Straight',
  tube: 'Tube',
}

interface PowerClass {
  name: string
  note: string
  accent: Accent
}

function classifyPower(energyJ: number): PowerClass {
  if (energyJ < 3) {
    return { name: 'Practice / Target', note: 'Low-energy — ideal for indoor and close-range target practice.', accent: 'cyan' }
  }
  if (energyJ < 8) {
    return { name: 'General Plinking', note: 'Solid all-round power for cans, cardboard, and casual targets.', accent: 'cyan' }
  }
  if (energyJ < 20) {
    return { name: 'Small Game Range', note: 'Enters small-game territory in some jurisdictions — check local hunting regulations before relying on this figure.', accent: 'amber' }
  }
  return { name: 'High Power', note: 'Significant stored energy. Handle with extra care and verify legality for your intended use.', accent: 'magenta' }
}

export default function DrawWeightEstimator() {
  const [peakWeight, setPeakWeight] = useState('25')
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('lb')
  const [drawLength, setDrawLength] = useState('28')
  const [lengthUnit, setLengthUnit] = useState<LengthUnit>('in')
  const [bandType, setBandType] = useState<BandType>('tapered')
  const [ammoMass, setAmmoMass] = useState('3.5')

  const result = useMemo(() => {
    const w = parseFloat(peakWeight)
    const d = parseFloat(drawLength)
    const m = parseFloat(ammoMass)
    if (!(w > 0) || !(d > 0) || !(m > 0)) return null

    const peakForceN = weightUnit === 'lb' ? w * LB_TO_N : w
    const drawLengthM = lengthUnit === 'in' ? d * IN_TO_M : d * MM_TO_M
    const massKg = m / 1000

    const drawWorkJ = 0.5 * peakForceN * drawLengthM
    const efficiency = EFFICIENCY[bandType]
    const energyToAmmoJ = drawWorkJ * efficiency
    const velocityMs = Math.sqrt((2 * energyToAmmoJ) / massKg)

    return {
      drawWorkJ,
      energyToAmmoJ,
      velocityMs,
      velocityFps: velocityMs * MS_TO_FPS,
      energyFtLb: energyToAmmoJ * J_TO_FTLB,
      powerClass: classifyPower(energyToAmmoJ),
    }
  }, [peakWeight, weightUnit, drawLength, lengthUnit, bandType, ammoMass])

  return (
    <div className="border border-surface-line bg-surface/70 p-6">
      <div className="mb-6 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.3em] text-amber">CALC</span>
        <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
          Draw Weight &amp; Energy Estimator
        </h3>
        <div className="h-px flex-1 bg-surface-line" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Peak Draw Weight (at full draw)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min={0}
                value={peakWeight}
                onChange={(e) => setPeakWeight(e.target.value)}
                className="w-full border border-surface-line bg-void px-4 py-3 font-mono text-ink focus:border-amber focus:outline-none"
              />
              <div className="flex border border-surface-line font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setWeightUnit('lb')}
                  className={`px-3 py-2 ${weightUnit === 'lb' ? 'bg-amber/15 text-amber' : 'text-ink-muted'}`}
                >
                  LB
                </button>
                <button
                  type="button"
                  onClick={() => setWeightUnit('n')}
                  className={`px-3 py-2 ${weightUnit === 'n' ? 'bg-amber/15 text-amber' : 'text-ink-muted'}`}
                >
                  N
                </button>
              </div>
            </div>
            <p className="mt-1 text-xs text-ink-faint">
              Measure by hooking a luggage/fish scale to the pouch and pulling to your normal
              anchor point. Most adult setups land in the 15–40lb range.
            </p>
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Draw Length (frame to anchor point)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min={0}
                value={drawLength}
                onChange={(e) => setDrawLength(e.target.value)}
                className="w-full border border-surface-line bg-void px-4 py-3 font-mono text-ink focus:border-amber focus:outline-none"
              />
              <div className="flex border border-surface-line font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setLengthUnit('in')}
                  className={`px-3 py-2 ${lengthUnit === 'in' ? 'bg-amber/15 text-amber' : 'text-ink-muted'}`}
                >
                  IN
                </button>
                <button
                  type="button"
                  onClick={() => setLengthUnit('mm')}
                  className={`px-3 py-2 ${lengthUnit === 'mm' ? 'bg-amber/15 text-amber' : 'text-ink-muted'}`}
                >
                  MM
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Band Type
            </label>
            <select
              value={bandType}
              onChange={(e) => setBandType(e.target.value as BandType)}
              className="w-full border border-surface-line bg-void px-4 py-3 font-mono text-ink focus:border-amber focus:outline-none"
            >
              {(Object.keys(BAND_TYPE_LABEL) as BandType[]).map((k) => (
                <option key={k} value={k}>
                  {BAND_TYPE_LABEL[k]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Ammo Mass
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min={0}
                step={0.1}
                value={ammoMass}
                onChange={(e) => setAmmoMass(e.target.value)}
                className="w-full border border-surface-line bg-void px-4 py-3 font-mono text-ink focus:border-amber focus:outline-none"
              />
              <span className="flex items-center border border-surface-line px-3 font-mono text-xs text-ink-muted">
                GRAMS
              </span>
            </div>
            <p className="mt-1 text-xs text-ink-faint">
              Not sure? Use the Ammo Weight &amp; Band Matcher on the Ammo page to estimate mass
              from material and diameter.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {result ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <Readout
                  label="Est. Velocity"
                  value={result.velocityFps.toFixed(0)}
                  unit="fps"
                  accent="amber"
                />
                <Readout
                  label="Est. Velocity"
                  value={result.velocityMs.toFixed(1)}
                  unit="m/s"
                  accent="amber"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Readout
                  label="Energy to Ammo"
                  value={result.energyToAmmoJ.toFixed(1)}
                  unit="J"
                  accent="cyan"
                />
                <Readout
                  label="Energy to Ammo"
                  value={result.energyFtLb.toFixed(1)}
                  unit="ft·lb"
                  accent="cyan"
                />
              </div>
              <Readout
                label="Power Class"
                value={result.powerClass.name}
                accent={result.powerClass.accent}
              />
              <div className="border border-surface-line bg-void-deep px-4 py-3">
                <p className="text-sm text-ink-muted">{result.powerClass.note}</p>
              </div>
              <p className="text-xs text-ink-faint">
                Model: Draw Work = ½ × Peak Force × Draw Length (triangular force-curve
                approximation), then Energy to Ammo = Draw Work × Transfer Efficiency (
                {Math.round(EFFICIENCY[bandType] * 100)}% for {BAND_TYPE_LABEL[bandType].toLowerCase()}).
                This is a rough estimate, not a chronograph reading — real bands have a non-linear
                force curve and lose energy to band mass, friction, and pouch drag.
              </p>
            </>
          ) : (
            <div className="flex h-full items-center justify-center border border-dashed border-surface-line p-8 text-center text-sm text-ink-faint">
              Enter draw weight, draw length, and ammo mass to estimate output.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
