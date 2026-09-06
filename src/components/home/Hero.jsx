import { Link } from 'react-router-dom'
import { siteData } from '../../lib/content'

const portraitSrc = '/images/portrait.png'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-purple-50 text-ink">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="order-last lg:order-first">
          <p className="mb-4 font-mono text-base text-steel">
            <span className="text-blueprint">$</span> whoami
          </p>
          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">{siteData.name}</h1>
          <p className="mt-3 font-mono text-lg text-steel sm:text-xl">{siteData.tagline}</p>

          <div className="mt-6 h-1 w-32 rounded bg-blueprint" aria-hidden="true" />

          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-navy sm:text-2xl">
            {siteData.shortBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/notes"
              className="rounded-md bg-blueprint px-7 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-blueprint-dark"
            >
              Explore Engineering Notes
            </Link>
            <Link
              to="/journey"
              className="rounded-md border border-slate-400 px-7 py-3.5 text-lg font-semibold text-navy transition-colors hover:border-blueprint hover:text-blueprint"
            >
              View My Journey
            </Link>
            <Link
              to="/projects"
              className="rounded-md px-7 py-3.5 text-lg font-semibold text-blueprint transition-colors hover:text-blueprint-dark"
            >
              View Projects →
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-blueprint/40" aria-hidden="true" />
            <img
              src={portraitSrc}
              alt={`${siteData.name} — portrait`}
              className="relative h-72 w-72 rounded-full border-4 border-blueprint object-cover shadow-lg sm:h-96 sm:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}