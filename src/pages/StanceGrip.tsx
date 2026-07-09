import PageHeader from '../components/PageHeader'
import HudPanel from '../components/HudPanel'
import Callout from '../components/Callout'

export default function StanceGrip() {
  return (
    <div>
      <PageHeader
        eyebrow="Module 03"
        title="Stance & Grip"
        description="Slingshot accuracy is built from the ground up. A stable stance and a consistent grip remove variables so the only thing changing shot-to-shot is your aim — not your platform."
        accent="amber"
      />

      <div className="space-y-10">
        <HudPanel title="Base Stance" glyph="A" accent="amber">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Feet:</strong> Shoulder-width apart,
              body angled roughly 30–45° from the target rather than square-on —
              this is the same "bladed" stance archers use to keep the sling arm
              clear of your torso.
            </li>
            <li>
              <strong className="text-ink">Weight:</strong> Evenly balanced,
              knees soft, not locked. A rigid stance transmits every micro-wobble
              into the shot.
            </li>
            <li>
              <strong className="text-ink">Sling arm:</strong> Extended toward
              the target, elbow either locked straight or with a very slight,
              consistent bend — pick one and repeat it every shot.
            </li>
          </ul>
        </HudPanel>

        <HudPanel title="Two Core Grips" glyph="B" accent="cyan">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-cyan">
                Hammer Grip
              </p>
              <p className="mt-2 text-sm">
                The frame is held like a hammer, forks pointing up, wrist
                straight in line with the forearm. Simple, strong, and the most
                common starting grip — works well with straight-wrist frames.
              </p>
            </div>
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-magenta">
                Freestyle Grip
              </p>
              <p className="mt-2 text-sm">
                The frame rotates in the hand so the forks point more toward the
                target, wrist canted. Common with pinch-grip and hyper
                frames, and often used with a finger through or around the frame
                for extra stability.
              </p>
            </div>
          </div>
        </HudPanel>

        <HudPanel title="Building a Repeatable Platform" glyph="C" accent="magenta">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              Pick one grip and one stance and drill only that combination for
              your first few sessions — switching styles early slows down
              muscle memory.
            </li>
            <li>
              Keep grip pressure firm but not white-knuckled. An over-tight grip
              introduces tremor; too loose lets the frame twist ("fork hit") on
              release.
            </li>
            <li>
              Lock your sling-arm shoulder — most of your aiming adjustment
              should come from your stance and hips, not from waving the arm
              around.
            </li>
            <li>
              Use a mirror or phone video to check that your frame is level and
              your draw hand tracks the same path back to anchor every time.
            </li>
          </ol>
        </HudPanel>

        <Callout kind="warning" title="Fork Hit">
          If your pouch or ammo strikes the fork on release, it's almost always
          a grip or band-alignment issue — a loose grip letting the frame
          rotate, or bands that aren't symmetric. Tighten your grip consistency
          and check band lengths before assuming it's a frame problem.
        </Callout>

        <HudPanel title="Drill: Dry-Fire Form Check" glyph="D" accent="amber">
          <p>
            With no ammo loaded, draw to full anchor and hold for 2–3 seconds,
            checking: is your stance stable, is your grip consistent, is your
            elbow position repeatable? Do 10–15 reps before every live session
            to groove the platform before adding the variable of a flying
            projectile.
          </p>
        </HudPanel>
      </div>
    </div>
  )
}
