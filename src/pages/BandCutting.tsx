import PageHeader from '../components/PageHeader'
import HudPanel from '../components/HudPanel'
import Callout from '../components/Callout'
import BandCalculator from '../components/calculators/BandCalculator'

export default function BandCutting() {
  return (
    <div>
      <PageHeader
        eyebrow="Module 02"
        title="Band Cutting"
        description="Bands are consumable — you will cut dozens of sets over your shooting life. Learn the materials, the geometry, and the cut patterns that separate a snappy, accurate band set from a sluggish one."
        accent="magenta"
      />

      <div className="space-y-10">
        <HudPanel title="Materials" glyph="A" accent="magenta">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-mono text-sm font-bold text-cyan">Flat bands</p>
              <p className="mt-1 text-sm">
                Sheet latex (Theraband gold/black, Precise, Simple Shot Gold) cut
                into strips. Fast, quiet, and easy to tune by adjusting width and
                taper. The standard for target shooting.
              </p>
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-cyan">Tubes</p>
              <p className="mt-1 text-sm">
                Latex or TPE tubing looped through the fork tips. More durable
                and forgiving of pouch-hit, popular for hunting and general
                plinking where longevity matters more than raw speed.
              </p>
            </div>
          </div>
        </HudPanel>

        <HudPanel title="Straight Cut vs. Tapered Cut" glyph="B" accent="cyan">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-cyan">
                Straight
              </p>
              <p className="mt-2 text-sm">
                Same width from fork tie to pouch tie. Simple to cut, predictable
                draw, slightly less efficient — more rubber mass has to
                accelerate through the shot.
              </p>
            </div>
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-magenta">
                Tapered
              </p>
              <p className="mt-2 text-sm">
                Wide at the fork end, narrow at the pouch end (e.g. 25mm →
                15mm). Less rubber mass to accelerate near the pouch means a
                snappier, faster release for the same draw weight.
              </p>
            </div>
          </div>
        </HudPanel>

        <HudPanel title="Active vs. Total Length" glyph="C" accent="amber">
          <p className="mb-3">
            Two measurements matter when you cut a set:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Active length</strong> — the distance
              from fork tie to pouch tie, the part of the band that actually
              stretches and does work.
            </li>
            <li>
              <strong className="text-ink">Butterfly / total draw</strong> — how
              far you pull the pouch back from the resting frame, usually
              measured to your anchor point.
            </li>
          </ul>
          <p className="mt-3">
            A common starting ratio is a draw length of roughly{' '}
            <strong className="text-ink">3.5–5× the active band length</strong>{' '}
            for flat bands. Shorter active length increases speed and draw
            weight; longer active length is gentler on the arm but slower.
          </p>
        </HudPanel>

        <BandCalculator />

        <HudPanel title="Cutting a Basic Tapered Set" glyph="D" accent="magenta">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Cut two strips of flat band material roughly 180–220&nbsp;mm long
              (adjust to your draw length), 20–25&nbsp;mm wide at the fork end.
            </li>
            <li>
              Taper each strip down to 12–16&nbsp;mm wide at the pouch end using
              a straightedge and a sharp blade or box-cutter — smooth, single
              strokes avoid nicks that turn into tears.
            </li>
            <li>
              Punch or cut a small hole near the wide end for a fork tie, or
              leave it flat if you're using flat-band clips.
            </li>
            <li>
              Attach the pouch at the narrow end, checking that both bands are
              equal length so the pouch tracks straight in flight.
            </li>
            <li>
              Test-draw without ammo a few times, checking for twisting or
              uneven stretch before shooting live.
            </li>
          </ol>
        </HudPanel>

        <Callout kind="warning" title="Nick = Tear">
          A single nick or scratch on a flat band is where it will fail under
          full draw. Cut slowly with a sharp blade, and retire any band with
          visible cuts, cloudiness, or a "sticky" surface texture — that's the
          rubber breaking down (band rot).
        </Callout>

        <HudPanel title="Tying vs. Clipping" glyph="E" accent="cyan">
          <p>
            Bands can be tied directly to the frame (permanent, very secure,
            slower to swap) or attached with flat-band clips / tube clamps
            (quick to change, easy to standardize a "quick change" system across
            multiple frames). Beginners often start with clips for the
            flexibility to experiment with lengths and widths without re-tying
            every set.
          </p>
        </HudPanel>
      </div>
    </div>
  )
}
