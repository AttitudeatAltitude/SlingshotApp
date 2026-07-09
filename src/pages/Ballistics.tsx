import PageHeader from '../components/PageHeader'
import HudPanel from '../components/HudPanel'
import Callout from '../components/Callout'
import DrawWeightEstimator from '../components/calculators/DrawWeightEstimator'

export default function Ballistics() {
  return (
    <div>
      <PageHeader
        eyebrow="Module 06"
        title="Power & Ballistics"
        description="How hard does your setup actually hit? Draw weight, draw length, and ammo mass combine to determine stored energy and exit velocity. Here's the model, and a tool to run your own numbers."
        accent="amber"
      />

      <div className="space-y-10">
        <HudPanel title="What Is Draw Weight?" glyph="A" accent="amber">
          <p>
            Draw weight is the force required to pull your bands back to full draw — the number
            you'd read off a luggage or fish scale hooked to the pouch. It's the single easiest
            measurement to take on any setup, and it's the starting point for estimating how much
            energy a shot carries.
          </p>
          <p className="mt-3">
            Draw weight alone doesn't tell you power, though — a heavy draw weight over a short
            draw length can store less energy than a moderate draw weight over a long one. Power
            comes from the combination of force <em>and</em> distance.
          </p>
        </HudPanel>

        <HudPanel title="From Draw Weight to Stored Energy" glyph="B" accent="cyan">
          <p className="mb-3">
            Latex doesn't pull back with constant force — it takes very little force to start the
            stretch and ramps up toward the peak weight at full draw. A simple, widely-used
            approximation treats that ramp-up as roughly linear, so the{' '}
            <strong className="text-ink">average</strong> force across the draw is about half the{' '}
            <strong className="text-ink">peak</strong> force:
          </p>
          <div className="border border-surface-line bg-void-deep px-4 py-3 font-mono text-sm text-cyan">
            Draw Work ≈ ½ × Peak Force × Draw Length
          </div>
          <p className="mt-3">
            Not all of that work reaches the ammo — some is lost accelerating the mass of the band
            material itself and to internal friction in the rubber. The remainder, the{' '}
            <strong className="text-ink">transfer efficiency</strong>, is typically higher for
            light tapered flat bands (less rubber mass to accelerate) and lower for tubes:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Tapered flats: ~60–70% efficient</li>
            <li>Straight flats: ~50–60% efficient</li>
            <li>Tubes: ~45–55% efficient</li>
          </ul>
        </HudPanel>

        <DrawWeightEstimator />

        <HudPanel title="Reading the Output" glyph="C" accent="magenta">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Energy to Ammo</strong> — the kinetic energy estimated
              to reach the projectile, in joules and foot-pounds.
            </li>
            <li>
              <strong className="text-ink">Estimated Velocity</strong> — back-calculated from that
              energy and your ammo's mass using KE = ½mv².
            </li>
            <li>
              <strong className="text-ink">Power Class</strong> — a rough bucket for context, not a
              legal or safety determination.
            </li>
          </ul>
        </HudPanel>

        <Callout kind="warning" title="This Is an Estimate, Not a Chronograph">
          Real force curves are non-linear, bands vary between brands and batches, and technique
          (release consistency, pouch drag, fork hit) all move the real number. Treat this tool as
          a planning aid for comparing setups relative to each other — if you need a precise
          number, measure actual velocity with a chronograph.
        </Callout>

        <Callout kind="danger" title="Check Local Regulations">
          Power classes referenced here are informational only. Rules on slingshot power levels,
          hunting use, and legal ammo vary by location — verify local law before relying on any
          estimate for a specific use case. See the{' '}
          <a href="/safety" className="underline">
            Safety
          </a>{' '}
          module for general handling rules.
        </Callout>
      </div>
    </div>
  )
}
