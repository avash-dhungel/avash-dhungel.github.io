import { Link } from 'react-router-dom'
import { getNotes } from '../../lib/content'

export default function SubjectCard({ subject }) {
  const noteCount = getNotes(subject.id).length
  const pdfCount = subject.pdfs ? subject.pdfs.length : 0

  return (
    <Link
      to={`/notes/${subject.id}`}
      className="group flex flex-col rounded-lg border border-line bg-paper p-6 transition-colors hover:border-blueprint"
    >
      <p className="font-mono text-xs text-blueprint">~/notes/{subject.id}</p>
      <h2 className="mt-2 text-lg font-bold text-ink group-hover:text-blueprint">{subject.name}</h2>
      {subject.code && <p className="mt-0.5 font-mono text-xs text-steel">{subject.code}</p>}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{subject.short}</p>
      <p className="mt-4 flex flex-wrap gap-3 text-xs text-steel">
        <span className="font-mono">{noteCount} {noteCount === 1 ? 'note' : 'notes'}</span>
        {pdfCount > 0 && <span className="font-mono">{pdfCount} {pdfCount === 1 ? 'pdf' : 'pdfs'}</span>}
        <span className="font-semibold text-blueprint">Open →</span>
      </p>
    </Link>
  )
}