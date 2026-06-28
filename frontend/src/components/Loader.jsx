import './Loader.css'

export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="st-loader">
      <span className="st-loader__spinner" />
      <span className="st-loader__label">{label}</span>
    </div>
  )
}
