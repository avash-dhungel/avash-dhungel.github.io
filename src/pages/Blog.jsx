import { Link } from 'react-router-dom'
import PageHeader from '../components/shared/PageHeader'
import SEO from '../components/shared/SEO'
import Badge from '../components/shared/Badge'
import { siteData, getPosts, formatDate } from '../lib/content'

export default function Blog() {
  const posts = getPosts()

  return (
    <>
      <SEO
        title={`Blog — ${siteData.name}`}
        description="Articles and study-method write-ups from Avash Dhungel, engineering student at Pulchowk Campus."
      />
      <PageHeader
        eyebrow="~/blog"
        title="Blog & Articles"
        description="Longer-form writing: study methods, semester experiences at Pulchowk, and the occasional engineering rabbit hole."
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {posts.length === 0 ? (
          <p className="rounded-md border border-dashed border-line p-6 text-sm text-steel">
            Nothing published yet — add a <span className="font-mono">.md</span> file to{' '}
            <span className="font-mono">content/blog/</span>.
          </p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block rounded-lg border border-line bg-paper p-6 transition-colors hover:border-blueprint"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs text-blueprint">~/blog/{post.slug}</p>
                  <p className="font-mono text-xs text-steel">{formatDate(post.date)}</p>
                </div>
                <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-blueprint">{post.title}</h2>
                {post.excerpt && <p className="mt-2 text-sm leading-relaxed text-steel">{post.excerpt}</p>}
                {post.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => <Badge key={t} tone="gray">#{t}</Badge>)}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}