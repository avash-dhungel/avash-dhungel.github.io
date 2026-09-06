import site from '../../content/site.json'
import journey from '../../content/journey.json'
import resources from '../../content/resources.json'
import videos from '../../content/videos.json'

const subjectIndexes = import.meta.glob('/content/notes/*/index.json', { eager: true })
const noteFiles = import.meta.glob('/content/notes/**/*.md', { query: '?raw', import: 'default', eager: true })
const projectFiles = import.meta.glob('/content/projects/*.md', { query: '?raw', import: 'default', eager: true })
const postFiles = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true })

export const siteData = site
export const journeyData = journey
export const resourcesData = resources
export const videosData = videos

export function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }

  const meta = {}
  for (const line of match[1].split('\n')) {
    if (!line.trim()) continue
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if (value.startsWith('[')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((v) => v.trim().replace(/^['"]|['"]$/g, ''))
    } else {
      try {
        value = JSON.parse(value)
      } catch {
        value = value.replace(/^['"]|['"]$/g, '')
      }
    }
    meta[key] = value
  }
  return { meta, body: match[2] }
}

function slugFromKey(key, prefix) {
  const m = key.match(new RegExp(prefix + '([^/]+)\\.md$'))
  return m ? m[1] : key.split('/').pop().replace(/\.md$/, '')
}

function humanize(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export function getSubjects() {
  return Object.entries(subjectIndexes)
    .map(([key, meta]) => {
      const m = key.match(/\/notes\/([^/]+)\/index\.json$/)
      return { id: m ? m[1] : meta.slug, ...meta }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getSubject(id) {
  return getSubjects().find((s) => s.id === id || s.slug === id)
}

export function getNotes(subjectId) {
  const prefix = `/content/notes/${subjectId}/`
  return Object.entries(noteFiles)
    .filter(([key]) => key.startsWith(prefix))
    .map(([key, raw]) => {
      const { meta, body } = parseFrontmatter(raw)
      const slug = slugFromKey(key, prefix)
      return { slug, title: meta.title || humanize(slug), body, ...meta }
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export function getNote(subjectId, slug) {
  return getNotes(subjectId).find((n) => n.slug === slug)
}

export function getProjects() {
  return Object.entries(projectFiles)
    .map(([key, raw]) => {
      const { meta, body } = parseFrontmatter(raw)
      const slug = slugFromKey(key, '/content/projects/')
      return { slug, title: meta.title || humanize(slug), body, ...meta }
    })
    .sort((a, b) => String(b.year ?? '').localeCompare(String(a.year ?? '')))
}

export function getProject(slug) {
  return getProjects().find((p) => p.slug === slug)
}

export function getPosts() {
  return Object.entries(postFiles)
    .map(([key, raw]) => {
      const { meta, body } = parseFrontmatter(raw)
      const slug = slugFromKey(key, '/content/blog/')
      return { slug, title: meta.title || humanize(slug), body, ...meta }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPost(slug) {
  return getPosts().find((p) => p.slug === slug)
}

export function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function allTags(items) {
  return [...new Set(items.flatMap((i) => i.tags || []))].sort()
}