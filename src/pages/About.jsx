import PageHeader from '../components/shared/PageHeader'
import SectionHeading from '../components/shared/SectionHeading'
import SEO from '../components/shared/SEO'
import { siteData } from '../lib/content'

export default function About() {
  return (
    <>
      <SEO
        title={`About — ${siteData.name}`}
        description="About Avash Dhungel, engineering student at Pulchowk Campus, Institute of Engineering (IOE), Nepal."
      />
      <PageHeader eyebrow="~/about" title={`About ${siteData.name}`} description={siteData.about.intro} />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_280px]">
          <div className="space-y-8">
            {siteData.about.sections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-2 text-xl font-bold text-ink">{section.title}</h2>
                <p className="text-base leading-relaxed text-steel">{section.body}</p>
              </div>
            ))}
          </div>

          <aside className="space-y-4 rounded-lg border border-line bg-fog/60 p-5">
            <div>
              <p className="eyebrow mb-1">Education</p>
              <p className="text-sm font-semibold text-ink">{siteData.education.degree}</p>
              <p className="text-sm text-steel">{siteData.education.campus}</p>
              <p className="text-sm text-steel">{siteData.education.location}</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Currently</p>
              <p className="text-sm text-steel">Semester {new Date().getMonth() >= 6 ? 2 : 1} student · learning in public</p>
            </div>
            <div>
              <p className="eyebrow mb-1">Home</p>
              <p className="text-sm text-steel">{siteData.location}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-fog/60">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <SectionHeading eyebrow="~/interests" title="What drives me" />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['Structural mechanics', 'How forces and materials dance — and how they fail safely.'],
              ['Surveying & GIS', 'Turning ground truth into maps is ancient, precise and oddly fun.'],
              ['Tooling for students', 'Syllabus trackers, note templates, small utilities that remove friction.']
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg border border-line bg-paper p-5">
                <h3 className="text-base font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-steel">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}