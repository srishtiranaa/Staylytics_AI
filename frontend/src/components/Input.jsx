import './Input.css'

export default function Input({ label, type = 'text', placeholder, value, defaultValue, onChange }) {
  return (
    <label className="st-input-group">
      {label && <span className="st-input-group__label">{label}</span>}
      <input
        type={type}
        className="st-input"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </label>
  )
}
