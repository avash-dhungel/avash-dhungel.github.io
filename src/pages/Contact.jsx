import PageHeader from '../components/shared/PageHeader'
import SEO from '../components/shared/SEO'
import { siteData } from '../lib/content'

export default function Contact() {
  return (
    <>
      <SEO
        title={`Contact — ${siteData.name}`}
        description="Get in touch with Avash Dhungel, engineering student at Pulchowk Campus, IOE Nepal."
      />
      <PageHeader
        eyebrow="~/contact"
        title="Let's connect"
        description="Questions about a note, a collaboration, a correction, or an intern-level question? All of it is welcome."
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={`mailto:${siteData.email}?subject=Hi from your website`}
            className="group rounded-lg border border-line bg-paper p-6 transition-colors hover:border-blueprint"
          >
            <p className="font-mono text-xs text-blueprint">mailto:</p>
            <h2 className="mt-1 text-lg font-bold text-ink group-hover:text-blueprint">{siteData.email}</h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              The simplest path — opens your email app with my address already filled in. Expect a reply within a couple of days.
            </p>
          </a>

          <div className="rounded-lg border border-line bg-paper p-6">
            <p className="font-mono text-xs text-blueprint">~/socials</p>
            <ul className="mt-3 space-y-3">
              {siteData.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-md border border-line px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-blueprint hover:text-blueprint"
                  >
                    <span>{s.label}</span>
                    <span className="font-mono text-xs text-steel">{s.handle}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteData.youtube.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-md border border-line px-4 py-3 text-sm font-medium text-navy transition-colors hover:border-blueprint hover:text-blueprint"
                >
                  <span>YouTube</span>
                  <span className="font-mono text-xs text-steel">{siteData.youtube.handle} · subscribe</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-blueprint/20 bg-blueprint/5 p-6">
          <p className="eyebrow mb-1">~/availability</p>
          <p className="text-sm leading-relaxed text-steel">{siteData.availability}</p>
        </div>
      </section>
    </>
  )
}