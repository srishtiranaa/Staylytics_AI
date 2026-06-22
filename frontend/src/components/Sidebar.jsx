import { Link } from 'react-router-dom'
import './Sidebar.css'

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Settings', path: '/settings' },
]

export default function Sidebar({ active = 'Dashboard' }) {
  return (
    <aside className="st-sidebar">
      <div className="st-sidebar__logo">Staylytics AI</div>
      <nav className="st-sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`st-sidebar__link ${item.label === active ? 'st-sidebar__link--active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
