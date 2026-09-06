import { Link } from 'react-router-dom'

const cards = [
  {
    to: '/notes',
    lang: '~/notes',
    title: 'Engineering Notes',
    body: 'Subject-wise notes, important topics, previous-year questions and study guides — built as I study each course.',
    cta: 'Browse the library'
  },
  {
    to: '/journey',
    lang: '~/journey',
    title: 'The Journey',
    body: 'From school in Kathmandu to Pulchowk Campus — the academic milestones, one semester at a time.',
    cta: 'Follow along'
  },
  {
    to: '/projects',
    lang: '~/projects',
    title: 'Projects',
    body: 'Small tools and field kits born from real coursework: syllabus trackers, surveying templates, reference handbooks.',
    cta: 'See what I build'
  }
]

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.to}
            to={c.to}
            className="group rounded-lg border border-line bg-paper p-6 transition-colors hover:border-blueprint"
          >
            <p className="font-mono text-sm text-blueprint">{c.lang}</p>
            <h2 className="mt-2 text-xl font-bold text-ink">{c.title}</h2>
            <p className="mt-2 text-base leading-relaxed text-steel">{c.body}</p>
            <p className="mt-4 text-base font-semibold text-blueprint">
              {c.cta} <span className="transition-transform group-hover:translate-x-0.5 inline-block">→</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}