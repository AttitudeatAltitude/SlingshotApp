import { Link } from 'react-router-dom'
import { sections } from '../data/sections'
import { accentClasses } from '../lib/accent'
import HudPanel from '../components/HudPanel'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border border-surface-line">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" />
        <div className="relative px-6 py-20 text-center sm:py-28">
          <p className="mb-4 font-mono text-sm tracking-[0.5em] text-cyan text-glow-cyan">
            TRANSMISSION // FIELD MANUAL v1.0
          </p>
          <h1 className="font-display text-5xl font-extrabold uppercase leading-tight tracking-wide text-ink sm:text-7xl">
            Launch <span className="text-magenta text-glow-magenta">Further</span>.
            <br />
            Aim <span className="text-cyan text-glow-cyan">Truer</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">
            Apex Sling is your one-stop-shop for the modern slingshot shooter —
            from cutting your first band set to dialing in a competition-grade
            release. No fluff. Just field-tested fundamentals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/getting-started"
              className="border border-cyan bg-cyan/10 px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-cyan shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105"
            >
              Begin Training →
            </Link>
            <Link
              to="/glossary"
              className="border border-surface-line px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-ink-muted transition-colors hover:border-ink-muted hover:text-ink"
            >
              Browse Glossary
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            Manual Index
          </h2>
          <div className="h-px flex-1 bg-surface-line" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const a = accentClasses[s.accent]
            return (
              <Link key={s.path} to={s.path} className="group block">
                <HudPanel accent={s.accent} className="h-full transition-transform group-hover:-translate-y-1">
                  <div className="mb-3 flex items-baseline justify-between">
                    <span className={`font-mono text-3xl font-bold ${a.text} opacity-70`}>
                      {s.glyph}
                    </span>
                    <span className="font-mono text-xs text-ink-faint group-hover:text-ink-muted">
                      →
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{s.tagline}</p>
                </HudPanel>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-16 grid gap-6 border border-surface-line bg-surface/40 p-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-4xl font-extrabold text-cyan">2</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Common Grips: Hammer &amp; Freestyle
          </p>
        </div>
        <div>
          <p className="font-display text-4xl font-extrabold text-magenta">3</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Anchor Points To Start Practicing
          </p>
        </div>
        <div>
          <p className="font-display text-4xl font-extrabold text-amber">1</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Rule That Overrides All Others: Eye Protection
          </p>
        </div>
      </section>
    </div>
  )
}
