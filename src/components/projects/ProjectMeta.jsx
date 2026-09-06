import Badge from '../shared/Badge'

const statusTone = { ongoing: 'amber', completed: 'green', idea: 'blue' }

export default function ProjectMeta({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.status && (
        <Badge tone={statusTone[project.status.toLowerCase()] || 'blue'}>{project.status}</Badge>
      )}
      {project.year && <Badge tone="gray">{project.year}</Badge>}
      {project.tech?.map((t) => (
        <Badge key={t} tone="gray">{t}</Badge>
      ))}
      {project.links?.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="ml-auto text-sm font-semibold text-blueprint hover:underline"
        >
          GitHub →
        </a>
      )}
    </div>
  )
}