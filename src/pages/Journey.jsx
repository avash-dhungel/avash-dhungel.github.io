import PageHeader from '../components/shared/PageHeader'
import SEO from '../components/shared/SEO'
import Timeline from '../components/journey/Timeline'
import { siteData, journeyData } from '../lib/content'

export default function Journey() {
  return (
    <>
      <SEO
        title={`Engineering Journey — ${siteData.name}`}
        description="The academic journey of Avash Dhungel from school in Kathmandu to Pulchowk Campus, Institute of Engineering."
      />
      <PageHeader
        eyebrow="~/journey"
        title="Engineering Journey"
        description="Milestones, not just dates — from school in Kathmandu to Pulchowk Campus, and everything the semesters keep teaching me."
      />

      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Timeline events={journeyData} />
      </section>
    </>
  )
}