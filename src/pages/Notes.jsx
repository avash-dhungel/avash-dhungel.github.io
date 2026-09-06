import PageHeader from '../components/shared/PageHeader'
import SEO from '../components/shared/SEO'
import SubjectCard from '../components/notes/SubjectCard'
import { siteData, getSubjects } from '../lib/content'

export default function Notes() {
  const subjects = getSubjects()

  return (
    <>
      <SEO
        title={`Engineering Notes — ${siteData.name}`}
        description="Subject-wise engineering notes, important topics, previous-year questions and study guides from a Pulchowk Campus student."
      />
      <PageHeader
        eyebrow="~/notes"
        title="Engineering Notes"
        description="Notes, important topics, previous-year questions and study guides — organized by subject and updated semester by semester as I study at Pulchowk Campus."
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {subjects.length === 0 ? (
          <p className="rounded-md border border-dashed border-line p-6 text-sm text-steel">
            No subjects published yet. Add a folder under <span className="font-mono">content/notes/</span> to start.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}