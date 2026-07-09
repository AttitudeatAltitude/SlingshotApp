import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import HudPanel from '../components/HudPanel'
import Callout from '../components/Callout'

export default function Safety() {
  return (
    <div>
      <PageHeader
        eyebrow="Module 07"
        title="Safety"
        description="A slingshot is a projectile weapon capable of serious injury. These rules aren't optional flavor text — treat them the same way you'd treat firearm safety rules."
        accent="amber"
      />

      <div className="space-y-10">
        <Callout kind="danger" title="Rule Zero">
          Always wear ANSI-rated safety glasses, both shooter and anyone nearby,
          every single time a slingshot is drawn — not just when firing. Band
          or pouch failure can snap back toward your face with no warning.
        </Callout>

        <HudPanel title="Core Rules" glyph="A" accent="amber">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong className="text-ink">Eye protection, always.</strong>{' '}
              This is the single most important rule in the sport.
            </li>
            <li>
              <strong className="text-ink">Know your backstop.</strong> Shoot
              into a proper trap, dense earth berm, or heavy target — never
              at a hard flat surface that can ricochet ammo back at you.
            </li>
            <li>
              <strong className="text-ink">Know what's beyond your target.</strong>{' '}
              Ammo that misses keeps traveling. Never shoot toward roads,
              windows, animals, or anywhere you can't see clearly downrange.
            </li>
            <li>
              <strong className="text-ink">Never point a drawn slingshot at
              a person or animal</strong>, loaded or not, even in jest.
            </li>
            <li>
              <strong className="text-ink">Inspect bands before every session.</strong>{' '}
              A band that snaps mid-draw can whip back at high speed — see the{' '}
              <Link to="/maintenance" className="underline">Maintenance</Link>{' '}
              module for what to check.
            </li>
            <li>
              <strong className="text-ink">Mind your off hand.</strong> Keep
              fingers clear of the band path — a released band can pinch or
              welt skin badly.
            </li>
            <li>
              <strong className="text-ink">Check local law.</strong> Regulations
              on slingshots (and especially on hunting with them) vary widely by
              country, state, and municipality — know the rules where you shoot.
            </li>
          </ol>
        </HudPanel>

        <HudPanel title="Setting Up a Safe Range" glyph="B" accent="cyan">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Use a purpose-built ammo trap (rubber curtain, catch box, or
              layered blanket system) rated for the ammo speed you're shooting.
            </li>
            <li>
              Keep a clear zone behind and beside the shooter — no bystanders in
              the "fan" of a potential errant shot.
            </li>
            <li>
              Shoot at a fixed, marked distance so you always know exactly how
              far ammo can carry if it misses the trap.
            </li>
            <li>
              Indoors, confirm the wall behind your trap can stop a stray shot,
              or back it with plywood or a second barrier.
            </li>
          </ul>
        </HudPanel>

        <Callout kind="warning" title="Band Failure">
          Latex and tubes degrade with UV exposure, ozone, and age (band rot).
          A band snapping under full draw can whip the frame or your hand.
          Inspect before every session and retire anything cloudy, sticky, or
          nicked — see Maintenance.
        </Callout>

        <HudPanel title="Kids & Beginners" glyph="C" accent="magenta">
          <p>
            Slingshots are simple to operate but not toys — supervise new and
            young shooters closely, start with light bands and low-power ammo,
            and don't hand over a loaded, drawn slingshot to someone who hasn't
            been walked through these rules first.
          </p>
        </HudPanel>
      </div>
    </div>
  )
}
