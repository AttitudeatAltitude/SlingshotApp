import PageHeader from '../components/PageHeader'
import HudPanel from '../components/HudPanel'
import Callout from '../components/Callout'

export default function Maintenance() {
  return (
    <div>
      <PageHeader
        eyebrow="Module 08"
        title="Maintenance"
        description="Bands are consumables, but the rest of your setup can last for years with a five-minute check before and after each session."
        accent="cyan"
      />

      <div className="space-y-10">
        <HudPanel title="Pre-Session Checklist" glyph="A" accent="cyan">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Stretch each band by hand and look for cloudiness, stickiness,
              cracking, or nicks — any of these mean retire the band before
              shooting, not after it fails.
            </li>
            <li>
              Check pouch stitching or attachment points for fraying.
            </li>
            <li>
              Confirm ties or clips are snug — a band that slips on the frame
              under draw can whip unpredictably.
            </li>
            <li>Wipe down the frame if it's been stored somewhere damp or dusty.</li>
          </ul>
        </HudPanel>

        <HudPanel title="Band Lifespan & Band Rot" glyph="B" accent="magenta">
          <p className="mb-3">
            Latex degrades from UV light, ozone, heat, and repeated stretching
            — this is normal and expected, not a defect. Signs a band set is
            done:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Surface turns tacky/sticky or develops a white, cloudy film.</li>
            <li>Visible cracks or a rough, dry texture instead of smooth.</li>
            <li>Noticeably weaker draw or reduced snap compared to new.</li>
            <li>Any nick, cut, or tear — even small ones propagate fast.</li>
          </ul>
          <p className="mt-3">
            Typical flat-band lifespan is weeks to a few months of regular
            shooting depending on ammo weight, draw length, and storage —
            tubes generally last longer than flats but follow the same
            warning signs.
          </p>
        </HudPanel>

        <HudPanel title="Storage" glyph="C" accent="amber">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Store frames out of direct sunlight — UV is the single biggest
              accelerant of band rot, even for bands still on the shelf.
            </li>
            <li>
              Keep bands away from ozone sources: garages near running motors,
              near active electric motors, or stored touching certain plastics
              and metals that can react with latex.
            </li>
            <li>
              A cool, dark, dry drawer or case is ideal. Some shooters dust
              flat bands lightly with talc to reduce tackiness in storage.
            </li>
            <li>
              Detach bands from frames for long-term storage to avoid a
              permanent stretch-set at the fork tie point.
            </li>
          </ul>
        </HudPanel>

        <Callout kind="tip" title="Keep a Log">
          Note the date you tied on a new band set. Over a few sets you'll
          learn roughly how many sessions or weeks your specific bands, ammo
          weight, and draw length combination lasts — letting you replace
          proactively instead of finding out mid-draw.
        </Callout>

        <HudPanel title="Frame & Pouch Care" glyph="D" accent="cyan">
          <p>
            Wooden or natural-fork frames benefit from an occasional light oil
            or wax to prevent drying and cracking. Leather pouches can be
            conditioned lightly to stay supple — a stiff, cracking pouch
            increases the odds of an inconsistent release.
          </p>
        </HudPanel>
      </div>
    </div>
  )
}
