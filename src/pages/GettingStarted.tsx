import PageHeader from '../components/PageHeader'
import HudPanel from '../components/HudPanel'
import Callout from '../components/Callout'

export default function GettingStarted() {
  return (
    <div>
      <PageHeader
        eyebrow="Module 01"
        title="Getting Started"
        description="Every slingshot, from a $5 hardware-store model to a $200 machined titanium frame, breaks down into the same handful of parts. Learn the anatomy, pick a first setup, and understand the two dominant shooting styles before you loose a single shot."
        accent="cyan"
      />

      <div className="space-y-10">
        <HudPanel title="Anatomy of a Slingshot" glyph="A" accent="cyan">
          <ul className="grid gap-4 sm:grid-cols-2">
            <li>
              <strong className="text-ink">Frame</strong> — the handle and forks
              you hold. Materials range from natural forks (crooked branches) to
              plywood, aluminum, G10 composite, and titanium.
            </li>
            <li>
              <strong className="text-ink">Forks</strong> — the two prongs at the
              top of the frame where the bands attach. Fork width and tip design
              affect how flat bands or tubes are mounted.
            </li>
            <li>
              <strong className="text-ink">Bands</strong> — the elastic (flat
              rubber or round tubes) that store energy and launch the ammo.
            </li>
            <li>
              <strong className="text-ink">Pouch</strong> — the small leather or
              synthetic patch that holds the ammo between the two bands.
            </li>
            <li>
              <strong className="text-ink">Attachment point</strong> — where
              bands connect to the frame: tied directly (OTT), looped through a
              slot, or clipped with band sets and flat-band clips.
            </li>
            <li>
              <strong className="text-ink">Ammo</strong> — steel or lead balls,
              marbles, or clay — whatever the pouch is sized to carry.
            </li>
          </ul>
        </HudPanel>

        <HudPanel title="OTT vs. TTF" glyph="B" accent="magenta">
          <p className="mb-4">
            The two mounting styles change how a slingshot points and feels.
            Almost every frame is built around one of them.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-cyan">
                OTT — Over The Top
              </p>
              <p className="mt-2 text-sm">
                Bands attach to the outside face of the forks and run over the
                top. This is the classic hardware-store configuration — simple,
                durable, and forgiving for beginners.
              </p>
            </div>
            <div className="border border-surface-line p-4">
              <p className="font-mono text-sm font-bold tracking-widest text-magenta">
                TTF — Through The Forks
              </p>
              <p className="mt-2 text-sm">
                Bands attach to the inside face of the forks and pass between
                them. Favored by many target shooters for a flatter, more
                consistent band path and reduced fork hit.
              </p>
            </div>
          </div>
        </HudPanel>

        <HudPanel title="Your First Setup" glyph="C" accent="amber">
          <ol className="list-decimal space-y-3 pl-5">
            <li>
              <strong className="text-ink">Frame:</strong> Start with an
              inexpensive OTT frame in a natural or straight-wrist shape — it's
              beginner-forgiving and cheap to replace bands on.
            </li>
            <li>
              <strong className="text-ink">Bands:</strong> Light flat bands (like
              0.4–0.5&nbsp;mm tapered latex) or a light single tube set. Light
              draw weight means better form while your muscles and technique
              catch up.
            </li>
            <li>
              <strong className="text-ink">Ammo:</strong> 8–10&nbsp;mm steel
              balls or hard clay for target practice — cheap, consistent, and
              easy to source.
            </li>
            <li>
              <strong className="text-ink">Safety gear:</strong> ANSI-rated
              safety glasses, every single time, no exceptions. See the{' '}
              <a href="/safety" className="text-cyan underline">
                Safety
              </a>{' '}
              module before you load your first shot.
            </li>
          </ol>
        </HudPanel>

        <Callout kind="tip" title="First Session Goal">
          Don't chase power or distance on day one. Shoot slow, focus on a
          consistent anchor point and a clean release, and log how each shot
          groups. Consistency beats raw power every time in this sport.
        </Callout>

        <HudPanel title="What's Next" glyph="D" accent="cyan">
          <p>
            Once your frame is set up, move on to{' '}
            <a href="/band-cutting" className="text-magenta underline">
              Band Cutting
            </a>{' '}
            to learn how to build your own band sets, then{' '}
            <a href="/stance-grip" className="text-cyan underline">
              Stance &amp; Grip
            </a>{' '}
            to build a repeatable shooting platform.
          </p>
        </HudPanel>
      </div>
    </div>
  )
}
