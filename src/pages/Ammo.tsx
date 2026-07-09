import PageHeader from '../components/PageHeader'
import HudPanel from '../components/HudPanel'
import Callout from '../components/Callout'
import AmmoMatcher from '../components/calculators/AmmoMatcher'

export default function Ammo() {
  return (
    <div>
      <PageHeader
        eyebrow="Module 05"
        title="Ammo"
        description="Ammo choice affects trajectory, power, cost, and how forgiving your setup feels. Match the ball to the bands and the bands to the ball — mismatches are the top cause of frustrating inconsistency."
        accent="magenta"
      />

      <div className="space-y-10">
        <HudPanel title="Common Ammo Types" glyph="A" accent="magenta">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-cyan">
                Steel Balls
              </p>
              <p className="mt-2 text-sm">
                The most common choice — dense, cheap, consistent diameter.
                Common sizes run 6.35mm (1/4"), 8mm, 9.5mm (3/8"), and 12.7mm
                (1/2"). Hits hard and flies flat.
              </p>
            </div>
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-magenta">
                Lead Balls / Shot
              </p>
              <p className="mt-2 text-sm">
                Denser than steel at the same diameter, so it retains velocity
                and hits harder for the same draw weight. Traditional hunting
                ammo — handle and store away from food, and wash hands after
                handling.
              </p>
            </div>
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-amber">
                Clay / Marbles
              </p>
              <p className="mt-2 text-sm">
                Cheap and often hand-rolled for practice, lighter than steel so
                it's gentler on bands and backstops. Less consistent size and
                weight than manufactured ammo.
              </p>
            </div>
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-cyan">
                Glass / Specialty
              </p>
              <p className="mt-2 text-sm">
                Glass marbles or specialty alloy ammo shatter or fragment on
                impact — used for specific target games where fragmentation is
                part of the fun, not general plinking.
              </p>
            </div>
          </div>
        </HudPanel>

        <HudPanel title="Matching Ammo to Bands" glyph="B" accent="cyan">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Heavier ammo needs stronger bands to reach the same speed — light
              bands with heavy ammo produce a slow, arcing, inaccurate shot.
            </li>
            <li>
              Light ammo on heavy/strong bands can over-stress the bands and
              ammo won't fully load the elastic's energy, wasting power and
              increasing wear.
            </li>
            <li>
              As a rule of thumb, start in the middle: 8–9.5mm steel with medium
              flat bands or single tubes is a versatile, easy-to-tune baseline.
            </li>
          </ul>
        </HudPanel>

        <AmmoMatcher />

        <Callout kind="warning" title="Check Your Pouch Fit">
          Ammo that's too large for the pouch won't seat securely and can slip
          during the draw; ammo too small can fall through a pouch with a
          center hole cut for larger rounds. Confirm ammo diameter against your
          pouch before a session, not mid-shot.
        </Callout>

        <HudPanel title="Storage & Sourcing" glyph="C" accent="amber">
          <p>
            Buy ammo rated specifically for slingshots or airsoft/sling
            supply retailers rather than random hardware bearings, which can
            have inconsistent hardness and size tolerances. Store steel ammo
            somewhere dry to prevent rust, which changes both weight and
            surface friction over time.
          </p>
        </HudPanel>
      </div>
    </div>
  )
}
