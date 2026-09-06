import { Link } from 'react-router-dom'
import {
  siteData,
  getSubjects,
  getNotes,
  getPosts,
  formatDate,
  videosData
} from '../../lib/content'
import LazyVideo from '../shared/LazyVideo'
import SectionHeading from '../shared/SectionHeading'

function recentNotes(count = 3) {
  const rows = []
  for (const subject of getSubjects()) {
    for (const note of getNotes(subject.id)) {
      rows.push({ ...note, subject })
    }
  }
  return rows.slice(0, count)
}

export default function LatestContent() {
  const notes = recentNotes(3)
  const posts = getPosts().slice(0, 2)
  const available = videosData.filter((v) => v.videoId && !String(v.videoId).includes('REPLACE'))
  const featured = available[0] || null

  return (
    <section className="border-t border-line bg-fog/60">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <SectionHeading
          eyebrow="~/latest"
          title="Fresh from the site"
          description="Recent engineering notes, writing and videos — the newest additions first."
          action={
            <Link to="/notes" className="text-base font-semibold text-blueprint hover:underline">
              All notes →
            </Link>
          }
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-steel">Recent notes</h3>
              <ul className="space-y-3">
                {notes.map((note) => (
                  <li key={`${note.subject.id}/${note.slug}`}>
                    <Link
                      to={`/notes/${note.subject.id}/${note.slug}`}
                      className="block rounded-md border border-line bg-paper p-5 transition-colors hover:border-blueprint"
                    >
                      <p className="text-base font-semibold text-ink hover:text-blueprint">{note.title}</p>
                      <p className="mt-1 font-mono text-sm text-steel">
                        ~/notes/{note.subject.id}/{note.slug}.md
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-steel">Latest posts</h3>
              <ul className="space-y-3">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="block rounded-md border border-line bg-paper p-5 transition-colors hover:border-blueprint"
                    >
                      <p className="text-base font-semibold text-ink hover:text-blueprint">{post.title}</p>
                      <p className="mt-1 text-sm text-steel">{formatDate(post.date)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-mono text-sm uppercase tracking-widest text-steel">Latest video</h3>
              <a
                href={siteData.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold text-blueprint hover:underline"
              >
                {siteData.youtube.handle} →
              </a>
            </div>
            {featured ? (
              <LazyVideo video={featured} />
            ) : (
              <p className="rounded-md border border-dashed border-line p-6 text-base text-steel">
                Add your first video to <span className="font-mono">content/videos.json</span>.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}