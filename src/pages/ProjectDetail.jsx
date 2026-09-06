import { Link, useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/shared/SEO'
import MarkdownView from '../components/notes/MarkdownView'
import ProjectMeta from '../components/projects/ProjectMeta'
import { siteData, getProject } from '../lib/content'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = getProject(slug)

  if (!project) {
    navigate('/projects', { replace: true })
    return null
  }

  return (
    <>
      <SEO title={`${project.title} — ${siteData.name}`} description={project.excerpt} />
      <section className="border-b border-line bg-fog/60">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <Link to="/projects" className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-blueprint hover:underline">
            ← All projects
          </Link>
          <p className="eyebrow mb-2">~/projects/{project.slug}</p>
          <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{project.title}</h1>
          <div className="mt-4">
            <ProjectMeta project={project} />
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <MarkdownView>{project.body}</MarkdownView>
      </article>
    </>
  )
}