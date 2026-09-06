import { Link, useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/shared/SEO'
import MarkdownView from '../components/notes/MarkdownView'
import { siteData, getSubject, getNotes, getNote } from '../lib/content'

export default function NoteDetail() {
  const { subject: subjectId, slug } = useParams()
  const navigate = useNavigate()
  const subject = getSubject(subjectId)
  const note = getNote(subjectId, slug)

  if (!subject || !note) {
    navigate('/notes', { replace: true })
    return null
  }

  const notes = getNotes(subject.id)
  const index = notes.findIndex((n) => n.slug === slug)
  const prev = notes[index - 1]
  const next = notes[index + 1]

  return (
    <>
      <SEO title={`${note.title} — ${subject.name} | ${siteData.name}`} description={subject.short} />
      <section className="border-b border-line bg-fog/60">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <Link
            to={`/notes/${subject.id}`}
            className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-blueprint hover:underline"
          >
            ← {subject.name}
          </Link>
          <p className="eyebrow mb-2">~/notes/{subject.id}</p>
          <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{note.title}</h1>
          {note.tags?.length > 0 && (
            <p className="mt-2 flex flex-wrap gap-2 font-mono text-xs text-steel">
              {note.tags.map((t) => `#${t}`).join(' ')}
            </p>
          )}
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <MarkdownView>{note.body}</MarkdownView>

        <nav className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link to={`/notes/${subject.id}/${prev.slug}`} className="text-sm font-semibold text-blueprint hover:underline">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/notes/${subject.id}/${next.slug}`} className="text-sm font-semibold text-blueprint hover:underline">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </>
  )
}