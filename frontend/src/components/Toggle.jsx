import './Toggle.css'

export default function Toggle({ checked, onChange, label }) {
  return (
    <label className="st-toggle-row">
      <span className="st-toggle-row__label">{label}</span>
      <span className={`st-toggle ${checked ? 'st-toggle--on' : ''}`}>
        <input
          type="checkbox"
          className="st-toggle__input"
          checked={checked}
          onChange={onChange}
        />
        <span className="st-toggle__knob" />
      </span>
    </label>
  )
}
