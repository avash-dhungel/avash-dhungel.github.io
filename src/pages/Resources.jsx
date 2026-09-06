import { useState } from 'react'
import PageHeader from '../components/shared/PageHeader'
import SEO from '../components/shared/SEO'
import SectionHeading from '../components/shared/SectionHeading'
import ResourceCard from '../components/shared/ResourceCard'
import LazyVideo from '../components/shared/LazyVideo'
import { siteData, resourcesData, videosData, formatDate } from '../lib/content'

const tabs = [
  { id: 'links', label: 'Useful Links' },
  { id: 'videos', label: 'Videos' }
]

export default function Resources() {
  const [tab, setTab] = useState('links')

  return (
    <>
      <SEO
        title={`Resources — ${siteData.name}`}
        description="Useful engineering resources, official links, study tools, previous-year questions and video walkthroughs from Avash Dhungel."
      />
      <PageHeader
        eyebrow="~/resources"
        title="Resources"
        description="Links, downloads and videos I genuinely use while studying at Pulchowk — plus the quick notes that save me time."
      />

      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex gap-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                tab === t.id
                  ? 'border-blueprint bg-blueprint text-white'
                  : 'border-line bg-paper text-navy hover:border-blueprint'
              }`}
              aria-pressed={tab === t.id}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'links' && (
          <div className="mt-8 space-y-10">
            {resourcesData.intro && (
              <p className="max-w-2xl text-sm leading-relaxed text-steel">{resourcesData.intro}</p>
            )}
            {resourcesData.categories.map((cat) => (
              <div key={cat.name}>
                <SectionHeading eyebrow={`~/resources/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} title={cat.name} />
                <div className="mt-4 space-y-3">
                  {cat.items.map((item) => (
                    <ResourceCard key={item.url} item={item} internal={item.url.startsWith('/')} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'videos' && (
          <div className="mt-8">
            <p className="max-w-2xl text-sm leading-relaxed text-steel">
              Walkthroughs of the notes and topics on this site. Subscribe on{' '}
              <a
                href={siteData.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-blueprint hover:underline"
              >
                YouTube {siteData.youtube.handle}
              </a>{' '}
              to catch each upload.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videosData.map((video) => (
                <div key={video.videoId}>
                  <LazyVideo video={video} />
                  <p className="mt-2 font-mono text-xs text-steel">{formatDate(video.date)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}