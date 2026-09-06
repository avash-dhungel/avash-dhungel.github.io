import { Link, useParams, useNavigate } from 'react-router-dom'
import SEO from '../components/shared/SEO'
import MarkdownView from '../components/notes/MarkdownView'
import Badge from '../components/shared/Badge'
import { siteData, getPost, formatDate } from '../lib/content'

export default function PostDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPost(slug)

  if (!post) {
    navigate('/blog', { replace: true })
    return null
  }

  return (
    <>
      <SEO title={`${post.title} — ${siteData.name}`} description={post.excerpt} />
      <section className="border-b border-line bg-fog/60">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <Link to="/blog" className="mb-3 inline-flex items-center gap-1 text-sm font-semibold text-blueprint hover:underline">
            ← All posts
          </Link>
          <p className="eyebrow mb-2">~/blog/{post.slug}</p>
          <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{post.title}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs text-steel">{formatDate(post.date)}</p>
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => <Badge key={t} tone="gray">#{t}</Badge>)}
              </div>
            )}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <MarkdownView>{post.body}</MarkdownView>

        <div className="mt-10 rounded-lg border border-line bg-fog/60 p-6">
          <p className="eyebrow mb-1">Enjoyed this?</p>
          <p className="text-sm leading-relaxed text-steel">
            Read more posts, dig into the{' '}
            <Link to="/notes" className="font-semibold text-blueprint hover:underline">engineering notes</Link>, or{' '}
            <Link to="/journey" className="font-semibold text-blueprint hover:underline">follow the journey</Link>{' '}
            so far.
          </p>
        </div>
      </article>
    </>
  )
}