import { Link } from 'react-router-dom'
import SEO from '../components/shared/SEO'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start px-4 py-24 sm:px-6">
      <SEO title="404 — Page not found" description="The page you're looking for doesn't exist." />
      <p className="eyebrow mb-2">404: not_found</p>
      <h1 className="text-4xl font-bold tracking-tight text-ink">This route doesn't exist.</h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-steel">
        If it's a note or project you were after, it may have moved or not been published yet. Backup plan below:
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/"
          className="rounded-md bg-blueprint px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blueprint-dark"
        >
          Back home
        </Link>
        <Link
          to="/notes"
          className="rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-blueprint"
        >
          Browse notes
        </Link>
      </div>
    </section>
  )
}