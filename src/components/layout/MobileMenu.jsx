import { NavLink } from 'react-router-dom'
import { siteData } from '../../lib/content'

export default function MobileMenu({ open }) {
  return (
    <div
      id="mobile-menu"
      className={`md:hidden border-t border-line bg-paper ${
        open ? 'block' : 'hidden'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 sm:px-6">
        {siteData.nav.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              [
                'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                isActive ? 'bg-blueprint/10 text-blueprint' : 'text-navy hover:bg-fog'
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}