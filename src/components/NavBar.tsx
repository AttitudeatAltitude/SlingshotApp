import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sections } from '../data/sections'

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-surface-line bg-void/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center border border-cyan text-cyan shadow-[var(--shadow-glow-cyan)] transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M12 3v9M12 3C7.5 3 5 6 5 9.5M12 3c4.5 0 7 3 7 6.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="5" cy="9.5" r="1.6" fill="currentColor" />
              <circle cx="19" cy="9.5" r="1.6" fill="currentColor" />
              <path
                d="M5 9.5 12 17l7-7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
          <span className="font-display text-lg font-bold uppercase tracking-[0.15em] text-ink">
            Apex<span className="text-cyan">Sling</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <NavLink
              key={s.path}
              to={s.path}
              className={({ isActive }) =>
                `px-3 py-2 font-mono text-xs tracking-[0.15em] transition-colors ${
                  isActive
                    ? 'text-cyan'
                    : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              {s.shortLabel}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-surface-line text-ink lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-surface-line bg-void px-5 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {sections.map((s) => (
              <li key={s.path}>
                <NavLink
                  to={s.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-2 py-2 font-mono text-sm tracking-[0.1em] ${
                      isActive ? 'text-cyan' : 'text-ink-muted'
                    }`
                  }
                >
                  {s.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
