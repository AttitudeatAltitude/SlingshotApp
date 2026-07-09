import { useMemo, useState } from 'react'
import PageHeader from '../components/PageHeader'

interface Term {
  term: string
  definition: string
}

const terms: Term[] = [
  { term: 'Active Length', definition: 'The stretching portion of a band, measured from the fork tie to the pouch tie.' },
  { term: 'Anchor Point', definition: 'The fixed spot where your draw hand consistently stops at full draw (e.g. corner of mouth, cheekbone, ear).' },
  { term: 'Band Rot', definition: 'Degradation of latex bands from UV, ozone, or age — shows up as tackiness, cloudiness, or cracking.' },
  { term: 'Band Set', definition: 'A matched pair of bands (with pouch attached) ready to mount on a frame.' },
  { term: 'Butterfly', definition: 'A full draw where the bands are pulled back past the shoulders, maximizing draw length.' },
  { term: 'Draw Weight', definition: 'The force required to pull the bands back to full draw — analogous to bow draw weight.' },
  { term: 'Fork Hit', definition: 'When the pouch or ammo strikes the fork on release, usually from grip or band-alignment issues.' },
  { term: 'Fork Tips', definition: 'The ends of the frame\'s two prongs where bands attach.' },
  { term: 'Freestyle Grip', definition: 'A grip where the frame is canted so the forks angle toward the target, often with a finger brace.' },
  { term: 'Gap Aiming', definition: 'An aiming method using a visual reference point (fork tip, band, sight) held relative to the target.' },
  { term: 'Hammer Grip', definition: 'A grip where the frame is held like a hammer, forks up, wrist straight in line with the forearm.' },
  { term: 'Instinctive Aiming', definition: 'Aiming without a fixed sight reference, relying on hand-eye coordination built through repetition.' },
  { term: 'OTT (Over The Top)', definition: 'A band mounting style where bands attach to the outer face of the forks and run over the top.' },
  { term: 'Pouch', definition: 'The patch (leather or synthetic) connecting the two bands that holds the ammo during the draw.' },
  { term: 'Straight-Wrist Frame', definition: 'A frame shape where the handle is in line with the forks, common for hammer grip.' },
  { term: 'Taper', definition: 'A band cut that narrows from a wide fork end to a narrower pouch end, increasing speed for a given draw weight.' },
  { term: 'Tube (Bands)', definition: 'Round elastic tubing used instead of flat bands, looped through fork tips — durable and forgiving.' },
  { term: 'TTF (Through The Forks)', definition: 'A band mounting style where bands attach to the inner face of the forks and pass between them.' },
]

export default function Glossary() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return terms
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div>
      <PageHeader
        eyebrow="Module 08"
        title="Glossary"
        description="Slingshot jargon, decoded. Search or scan the full list below."
        accent="magenta"
      />

      <div className="mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SEARCH TERMS..."
          className="w-full border border-surface-line bg-surface px-4 py-3 font-mono text-sm tracking-wider text-ink placeholder:text-ink-faint focus:border-cyan focus:outline-none"
        />
      </div>

      <div className="divide-y divide-surface-line border border-surface-line">
        {filtered.map((t) => (
          <div key={t.term} className="grid gap-1 p-5 sm:grid-cols-[220px_1fr] sm:gap-6">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-cyan">
              {t.term}
            </p>
            <p className="text-ink-muted">{t.definition}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="p-6 text-center font-mono text-sm text-ink-faint">
            No terms match "{query}".
          </p>
        )}
      </div>
    </div>
  )
}
