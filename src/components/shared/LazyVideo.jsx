import { useState } from 'react'

export default function LazyVideo({ video }) {
  const [playing, setPlaying] = useState(false)
  const placeholder = !video.videoId || String(video.videoId).includes('REPLACE')
  const thumb = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
  const src = `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1`

  if (placeholder) {
    return (
      <figure className="overflow-hidden rounded-lg border border-dashed border-line">
        <div className="flex aspect-video w-full items-center justify-center bg-fog px-4">
          <p className="max-w-xs text-center font-mono text-xs text-steel">
            Add your YouTube video ID in content/videos.json to show it here.
          </p>
        </div>
        {video.title && (
          <figcaption className="border-t border-line px-4 py-3">
            <p className="text-sm font-medium text-navy">{video.title}</p>
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className="group overflow-hidden rounded-lg border border-line bg-ink">
      <div className="relative aspect-video w-full">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full"
            aria-label={`Play video: ${video.title}`}
          >
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blueprint text-white shadow-lg transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      {video.title && (
        <figcaption className="border-t border-line px-4 py-3">
          <p className="text-sm font-medium text-white">{video.title}</p>
          {video.description && <p className="mt-0.5 line-clamp-2 text-xs text-slate-300">{video.description}</p>}
        </figcaption>
      )}
    </figure>
  )
}