export default function PDFLink({ pdf }) {
  return (
    <a
      href={pdf.url}
      className="flex items-center justify-between gap-4 rounded-md border border-line bg-paper px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-blueprint hover:text-blueprint"
    >
      <span className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-blueprint" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
        {pdf.label}
      </span>
      {pdf.size && <span className="shrink-0 font-mono text-xs text-steel">{pdf.size}</span>}
    </a>
  )
}