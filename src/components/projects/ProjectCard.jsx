import { Link } from 'react-router-dom'
import Badge from '../shared/Badge'

const statusTone = { ongoing: 'amber', completed: 'green', idea: 'blue' }

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col rounded-lg border border-line bg-paper p-6 transition-colors hover:border-blueprint"
    >
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-xs text-blueprint">~/projects/{project.slug}</p>
        {project.status && (
          <Badge tone={statusTone[project.status.toLowerCase()] || 'blue'}>{project.status}</Badge>
        )}
      </div>
      <h2 className="mt-2 text-lg font-bold text-ink group-hover:text-blueprint">{project.title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{project.excerpt}</p>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        {project.tech?.length > 0 && (
          <p className="flex flex-wrap gap-2 font-mono text-xs text-steel">
            {project.tech.map((t) => t).join(' · ')}
          </p>
        )}
        <p className="font-mono text-xs text-blueprint">{project.year || ''}</p>
      </div>
    </Link>
  )
}