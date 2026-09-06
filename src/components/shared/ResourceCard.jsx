export default function ResourceCard({ item, internal }) {
  const href = internal && !item.url.startsWith('http') ? item.url : item.url
  const external = href.startsWith('http')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group flex items-start justify-between gap-4 rounded-md border border-line bg-paper px-4 py-3 transition-colors hover:border-blueprint"
    >
      <div>
        <p className="text-sm font-semibold text-ink group-hover:text-blueprint">{item.title}</p>
        {item.note && <p className="mt-0.5 text-sm leading-relaxed text-steel">{item.note}</p>}
      </div>
      <span className="mt-0.5 shrink-0 font-mono text-xs text-blueprint" aria-hidden="true">
        {external ? '↗' : '→'}
      </span>
    </a>
  )
}