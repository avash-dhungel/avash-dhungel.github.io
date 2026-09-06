export default function Timeline({ events }) {
  return (
    <ol className="relative space-y-8 border-l-2 border-line pl-8">
      {events.map((event, i) => (
        <li key={i} className="relative">
          <span
            className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-blueprint bg-paper"
            aria-hidden="true"
          >
            <span className={`h-2 w-2 rounded-full bg-blueprint ${i === events.length - 1 ? 'animate-pulse' : ''}`} />
          </span>
          <p className="font-mono text-xs font-semibold text-blueprint">{event.year}</p>
          <h3 className="mt-0.5 text-base font-bold text-ink">{event.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-steel">{event.description}</p>
        </li>
      ))}
    </ol>
  )
}