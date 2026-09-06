import { Link } from 'react-router-dom'

export default function NoteCard({ note, subjectId }) {
  return (
    <Link
      to={`/notes/${subjectId}/${note.slug}`}
      className="flex items-center justify-between gap-4 rounded-md border border-line bg-paper px-4 py-3 transition-colors hover:border-blueprint"
    >
      <div>
        <p className="text-sm font-semibold text-ink hover:text-blueprint">{note.title}</p>
        {note.tags?.length > 0 && (
          <p className="mt-0.5 flex flex-wrap gap-2 font-mono text-xs text-steel">
            {note.tags.map((t) => `#${t}`).join(' ')}
          </p>
        )}
      </div>
      <span className="shrink-0 font-mono text-xs text-blueprint" aria-hidden="true">
        {note.slug}.md →
      </span>
    </Link>
  )
}