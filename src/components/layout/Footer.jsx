import { siteData } from '../../lib/content'

function SocialIcon({ label }) {
  const common = { viewBox: '0 0 24 24', className: 'h-5 w-5', fill: 'currentColor' }
  switch (label.toLowerCase()) {
    case 'github':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
        </svg>
      )
    case 'youtube':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-fog">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm font-semibold text-ink">
              ~/avash<span className="text-blueprint">$</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-steel">{siteData.tagline}</p>
            <p className="mt-1 text-sm text-steel">{siteData.education.campus}</p>
          </div>

          <div>
            <p className="eyebrow mb-3">Find me</p>
            <div className="flex flex-wrap gap-3">
              {siteData.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-paper text-navy transition-colors hover:border-blueprint hover:text-blueprint"
                  aria-label={s.label}
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-1 border-t border-line pt-6 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteData.name} · Engineered at {siteData.education.campus.split(',')[0]} 🇳🇵
          </p>
          <p className="font-mono">avashdhungel.com.np · built with React + Tailwind</p>
        </div>
      </div>
    </footer>
  )
}