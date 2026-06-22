import './Topbar.css'

export default function Topbar({ title }) {
  return (
    <header className="st-topbar">
      <h1 className="st-topbar__title">{title}</h1>
      <div className="st-topbar__avatar">SR</div>
    </header>
  )
}
