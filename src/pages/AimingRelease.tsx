import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import HudPanel from '../components/HudPanel'
import Callout from '../components/Callout'
import DiagramFrame from '../components/diagrams/DiagramFrame'
import AnchorPointDiagram from '../components/diagrams/AnchorPointDiagram'
import AimingMethodsDiagram from '../components/diagrams/AimingMethodsDiagram'
import ReleaseDiagram from '../components/diagrams/ReleaseDiagram'

export default function AimingRelease() {
  return (
    <div>
      <PageHeader
        eyebrow="Module 04"
        title="Aiming & Release"
        description="Aiming a slingshot is less like aiming a rifle and more like a golf swing — a repeatable draw, a fixed anchor, and a clean, tension-free let-go. Here's how to build all three."
        accent="cyan"
      />

      <div className="space-y-10">
        <HudPanel title="Anchor Points" glyph="A" accent="cyan">
          <p className="mb-3">
            The anchor point is where your draw hand consistently stops at full
            draw, touching your face or jaw the same way every single shot. It's
            the single biggest factor in group consistency.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Corner of the mouth</strong> — draw
              hand's index knuckle or thumb touches the corner of the mouth.
              Short, fast, common for close-range plinking.
            </li>
            <li>
              <strong className="text-ink">Cheekbone / jaw</strong> — hand
              anchors along the cheek or jawline, similar to a rifle cheek weld.
              A longer, more controlled draw favored by target shooters.
            </li>
            <li>
              <strong className="text-ink">Ear anchor</strong> — draw hand comes
              back to the ear, maximizing draw length and power for hunting-style
              shooting.
            </li>
          </ul>
        </HudPanel>

        <DiagramFrame fig="01" title="Anchor Point Reference" accent="cyan" caption="Approximate locations of the three anchor points described above, side-profile view.">
          <AnchorPointDiagram />
        </DiagramFrame>

        <HudPanel title="Aiming Methods" glyph="B" accent="magenta">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-cyan">
                Instinctive Aiming
              </p>
              <p className="mt-2 text-sm">
                No sight picture — you look at the target and let hand-eye
                coordination and repetition place the shot, the way you'd throw
                a ball. Takes longer to develop but transfers to any frame.
              </p>
            </div>
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-magenta">
                Gap / Reference Aiming
              </p>
              <p className="mt-2 text-sm">
                Use a visual reference — the top of the fork, a band, or a
                dedicated sight — held at a known point relative to the target.
                More mechanical and easier to teach, but reference points shift
                with distance.
              </p>
            </div>
          </div>
        </HudPanel>

        <DiagramFrame fig="02" title="Instinctive vs. Gap Aiming" accent="magenta" caption="Instinctive aiming uses a direct line of sight; gap aiming holds a fixed reference point at a known offset from the target.">
          <AimingMethodsDiagram />
        </DiagramFrame>

        <HudPanel title="The Release" glyph="C" accent="amber">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong className="text-ink">Relax the draw hand:</strong> tension
              in your fingers as you let go twists the pouch and throws the shot
              off-line. Aim for a "surprise" release, not a deliberate snap.
            </li>
            <li>
              <strong className="text-ink">Let go straight back:</strong> the
              pouch should release straight along the draw line — any sideways
              motion of the hand imparts spin or deflection to the ammo.
            </li>
            <li>
              <strong className="text-ink">Follow through:</strong> keep the
              sling arm steady after release instead of dropping it immediately
              — flinching the aiming arm is one of the most common causes of
              low, off-target shots.
            </li>
          </ol>
        </HudPanel>

        <DiagramFrame fig="03" title="Draw, Release & Follow-Through" accent="amber" caption="The shot travels along the draw line and out through the fork gap — the hand stays at anchor after release instead of dropping.">
          <ReleaseDiagram />
        </DiagramFrame>

        <Callout kind="tip" title="Trainer Drill">
          Practice a "half draw, hold, release" sequence at very short range (3–5m)
          focused purely on a smooth let-go. Speed and distance come naturally
          once the release itself is clean — rushing this step bakes in a flinch
          that's hard to unlearn later.
        </Callout>

        <Callout kind="danger" title="Never Dry-Fire With Ammo Half-Drawn Toward People">
          Always know what's behind and around your target, and never draw or
          release toward a person, pet, or anything you're not willing to hit.
          See the full <Link to="/safety" className="underline">Safety module</Link>.
        </Callout>
      </div>
    </div>
  )
}
