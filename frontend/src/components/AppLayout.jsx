import Sidebar from './Sidebar'
import Topbar from './Topbar'
import './AppLayout.css'

export default function AppLayout({ active, title, children }) {
  return (
    <div className="st-applayout">
      <Sidebar active={active} />
      <div className="st-applayout__main">
        <Topbar title={title} />
        <div className="st-applayout__content">{children}</div>
      </div>
    </div>
  )
}
