import { useMemo, useState } from 'react'
import Readout from './Readout'

type Material = 'steel' | 'lead' | 'clay' | 'glass'

const DENSITY_G_PER_CM3: Record<Material, number> = {
  steel: 7.85,
  lead: 11.34,
  clay: 1.9,
  glass: 2.5,
}

const MATERIAL_LABEL: Record<Material, string> = {
  steel: 'Steel',
  lead: 'Lead',
  clay: 'Hardened Clay',
  glass: 'Glass',
}

interface WeightClass {
  name: string
  bandGuidance: string
  accent: 'cyan' | 'magenta' | 'amber'
}

function classify(massG: number): WeightClass {
  if (massG < 3) {
    return {
      name: 'Featherweight',
      bandGuidance: 'Light flat bands (0.4–0.5mm tapered) or a single thin tube. Great for indoor practice and beginners.',
      accent: 'cyan',
    }
  }
  if (massG < 6) {
    return {
      name: 'Light',
      bandGuidance: 'Light-to-medium tapered flats or a standard single tube — a versatile, all-round setup.',
      accent: 'cyan',
    }
  }
  if (massG < 10) {
    return {
      name: 'Medium',
      bandGuidance: 'Medium-strength flats or a slightly thicker tube. Good balance of speed and control for general plinking.',
      accent: 'amber',
    }
  }
  if (massG < 16) {
    return {
      name: 'Heavy',
      bandGuidance: 'Strong tapered flats (wider fork end) or a double/thick-wall tube — moving into hunting-power territory.',
      accent: 'amber',
    }
  }
  return {
    name: 'Very Heavy',
    bandGuidance: 'Heavy hunting-grade bands only. Expect a slower, more deliberate draw and significant recoil-free but real impact force.',
    accent: 'magenta',
  }
}

export default function AmmoMatcher() {
  const [material, setMaterial] = useState<Material>('steel')
  const [diameterMm, setDiameterMm] = useState(9.5)

  const massG = useMemo(() => {
    const rMm = diameterMm / 2
    const rCm = rMm / 10
    const volumeCm3 = (4 / 3) * Math.PI * rCm ** 3
    return volumeCm3 * DENSITY_G_PER_CM3[material]
  }, [material, diameterMm])

  const weightClass = classify(massG)

  return (
    <div className="border border-surface-line bg-surface/70 p-6">
      <div className="mb-6 flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.3em] text-magenta">CALC</span>
        <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
          Ammo Weight &amp; Band Matcher
        </h3>
        <div className="h-px flex-1 bg-surface-line" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              Material
            </label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value as Material)}
              className="w-full border border-surface-line bg-void px-4 py-3 font-mono text-ink focus:border-magenta focus:outline-none"
            >
              {(Object.keys(MATERIAL_LABEL) as Material[]).map((k) => (
                <option key={k} value={k}>
                  {MATERIAL_LABEL[k]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 flex justify-between font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              <span>Diameter</span>
              <span className="text-ink">{diameterMm.toFixed(1)}mm</span>
            </label>
            <input
              type="range"
              min={6}
              max={16}
              step={0.5}
              value={diameterMm}
              onChange={(e) => setDiameterMm(parseFloat(e.target.value))}
              className="w-full accent-magenta"
            />
            <div className="mt-1 flex justify-between font-mono text-[11px] text-ink-faint">
              <span>6mm</span>
              <span>9.5mm (3/8")</span>
              <span>12.7mm (1/2")</span>
              <span>16mm</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Readout label="Estimated Mass" value={massG.toFixed(2)} unit="g" accent="magenta" />
            <Readout label="Weight Class" value={weightClass.name} accent={weightClass.accent} />
          </div>
          <div className="border border-surface-line bg-void-deep px-4 py-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
              Band Guidance
            </p>
            <p className="mt-1 text-sm text-ink-muted">{weightClass.bandGuidance}</p>
          </div>
          <p className="text-xs text-ink-faint">
            Mass is computed from sphere volume × material density — real physics, not a lookup
            table. Actual manufactured ammo can vary slightly from ideal density.
          </p>
        </div>
      </div>
    </div>
  )
}
