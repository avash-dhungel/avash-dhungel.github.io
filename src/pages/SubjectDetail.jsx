import { Link, useParams, useNavigate } from 'react-router-dom'
import PageHeader from '../components/shared/PageHeader'
import SEO from '../components/shared/SEO'
import NoteCard from '../components/notes/NoteCard'
import PDFLink from '../components/notes/PDFLink'
import { siteData, getSubject, getNotes } from '../lib/content'

export default function SubjectDetail() {
  const { subject: subjectId } = useParams()
  const navigate = useNavigate()
  const subject = getSubject(subjectId)

  if (!subject) {
    navigate('/notes', { replace: true })
    return null
  }

  const notes = getNotes(subject.id)

  return (
    <>
      <SEO
        title={`${subject.name} — Notes & PYQs | ${siteData.name}`}
        description={subject.short}
      />
      <PageHeader eyebrow={`~/notes/${subject.id}`} title={subject.name} description={subject.short}>
        <div className="mt-4 flex flex-wrap gap-2">
          {subject.code && (
            <span className="rounded-full bg-fog px-3 py-1 font-mono text-xs text-steel">{subject.code}</span>
          )}
          <span className="rounded-full bg-fog px-3 py-1 font-mono text-xs text-steel">
            {notes.length} notes
          </span>
        </div>
      </PageHeader>

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <Link to="/notes" className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-blueprint hover:underline">
          ← All subjects
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <div>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-steel">Notes on this subject</h2>
              {notes.length === 0 ? (
                <p className="rounded-md border border-dashed border-line p-6 text-sm text-steel">
                  Notes coming soon — drop a <span className="font-mono">.md</span> file into{' '}
                  <span className="font-mono">content/notes/{subject.id}/</span>.
                </p>
              ) : (
                <div className="space-y-3">
                  {notes.map((note) => (
                    <NoteCard key={note.slug} note={note} subjectId={subject.id} />
                  ))}
                </div>
              )}
            </div>

            {subject.studyGuide && (
              <div className="rounded-lg border border-blueprint/20 bg-blueprint/5 p-6">
                <p className="eyebrow mb-2">Study guide</p>
                <p className="text-sm leading-relaxed text-steel">{subject.studyGuide}</p>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-steel">Downloads</h2>
              {subject.pdfs?.length ? (
                <div className="space-y-3">
                  {subject.pdfs.map((pdf) => (
                    <PDFLink key={pdf.url} pdf={pdf} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-steel">No PDFs listed yet.</p>
              )}
            </div>

            <div>
              <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-steel">Important topics</h2>
              <ul className="space-y-2">
                {subject.importantTopics?.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-steel">
                    <span className="font-mono text-blueprint">▸</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            {subject.previousYearQuestions?.length > 0 && (
              <div>
                <h2 className="mb-3 font-mono text-xs uppercase tracking-widest text-steel">Previous-year questions</h2>
                <ul className="space-y-3">
                  {subject.previousYearQuestions.map((q, i) => (
                    <li key={i} className="rounded-md border border-line bg-paper p-3 text-sm text-steel">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  )
}