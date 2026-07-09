export interface Section {
  path: string
  label: string
  shortLabel: string
  tagline: string
  glyph: string
  accent: 'cyan' | 'magenta' | 'amber'
}

export const sections: Section[] = [
  {
    path: '/getting-started',
    label: 'Getting Started',
    shortLabel: 'START',
    tagline: 'Anatomy of a slingshot and your first shots downrange.',
    glyph: '01',
    accent: 'cyan',
  },
  {
    path: '/band-cutting',
    label: 'Band Cutting',
    shortLabel: 'BANDS',
    tagline: 'Cutting, tapering, and mounting your own band sets.',
    glyph: '02',
    accent: 'magenta',
  },
  {
    path: '/stance-grip',
    label: 'Stance & Grip',
    shortLabel: 'STANCE',
    tagline: 'Foot position, hand hold, and building a repeatable platform.',
    glyph: '03',
    accent: 'amber',
  },
  {
    path: '/aiming-release',
    label: 'Aiming & Release',
    shortLabel: 'AIM',
    tagline: 'Anchor points, sighting methods, and a clean let-go.',
    glyph: '04',
    accent: 'cyan',
  },
  {
    path: '/ammo',
    label: 'Ammo',
    shortLabel: 'AMMO',
    tagline: 'Steel, lead, clay, and glass — picking the right shot.',
    glyph: '05',
    accent: 'magenta',
  },
  {
    path: '/safety',
    label: 'Safety',
    shortLabel: 'SAFETY',
    tagline: 'Non-negotiable rules for shooting responsibly.',
    glyph: '06',
    accent: 'amber',
  },
  {
    path: '/maintenance',
    label: 'Maintenance',
    shortLabel: 'CARE',
    tagline: 'Inspecting bands, pouches, and forks so gear lasts.',
    glyph: '07',
    accent: 'cyan',
  },
  {
    path: '/glossary',
    label: 'Glossary',
    shortLabel: 'TERMS',
    tagline: 'Slingshot slang and jargon, decoded.',
    glyph: '08',
    accent: 'magenta',
  },
]
