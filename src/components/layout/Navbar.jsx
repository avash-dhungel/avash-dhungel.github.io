import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { siteData } from '../../lib/content'
import MobileMenu from './MobileMenu'

function linkClass({ isActive }) {
  return [
    'px-3 py-2 text-sm font-medium transition-colors rounded-md',
    isActive ? 'text-blueprint' : 'text-navy hover:text-blueprint hover:bg-fog'
  ].join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line transition-colors ${
        scrolled ? 'bg-paper/95 backdrop-blur' : 'bg-paper'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-baseline gap-2" aria-label={`${siteData.name} — home`}>
          <span className="text-lg font-bold tracking-tight text-ink">Avash</span>
          <span className="hidden font-mono text-xs text-steel sm:inline">engineering student</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {siteData.nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink hover:bg-fog md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <MobileMenu open={open} />
    </header>
  )
}