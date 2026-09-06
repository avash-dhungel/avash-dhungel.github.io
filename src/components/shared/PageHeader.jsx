export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="border-b border-line bg-fog/60">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-base leading-relaxed text-steel">{description}</p>}
        {children}
      </div>
    </section>
  )
}