import PageHeader from '../components/shared/PageHeader'
import SEO from '../components/shared/SEO'
import ProjectCard from '../components/projects/ProjectCard'
import { siteData, getProjects } from '../lib/content'

export default function Projects() {
  const projects = getProjects()

  return (
    <>
      <SEO
        title={`Projects — ${siteData.name}`}
        description="Course-driven projects by Avash Dhungel: syllabus trackers, surveying templates, reference handbooks and lab journals."
      />
      <PageHeader
        eyebrow="~/projects"
        title="Projects"
        description="Small tools and field kits born from real coursework. Each one is documented honestly — what it does, why it exists, and what building it taught me."
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {projects.length === 0 ? (
          <p className="rounded-md border border-dashed border-line p-6 text-sm text-steel">
            No projects yet — add a <span className="font-mono">.md</span> file to{' '}
            <span className="font-mono">content/projects/</span>.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}