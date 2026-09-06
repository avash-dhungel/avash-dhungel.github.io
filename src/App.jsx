import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Notes from './pages/Notes'
import SubjectDetail from './pages/SubjectDetail'
import Projects from './pages/Projects'
import Resources from './pages/Resources'
import Journey from './pages/Journey'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const NoteDetail = lazy(() => import('./pages/NoteDetail'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const PostDetail = lazy(() => import('./pages/PostDetail'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function DetailSkeleton() {
  return (
    <div aria-hidden="true" className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-4 h-4 w-24 animate-pulse rounded bg-fog" />
      <div className="mb-3 h-8 w-3/4 animate-pulse rounded bg-fog" />
      <div className="mb-10 h-4 w-1/2 animate-pulse rounded bg-fog" />
      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-fog" />
        <div className="h-4 w-full animate-pulse rounded bg-fog" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-fog" />
        <div className="h-4 w-full animate-pulse rounded bg-fog" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-fog" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<DetailSkeleton />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/notes/:subject" element={<SubjectDetail />} />
            <Route path="/notes/:subject/:slug" element={<NoteDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}