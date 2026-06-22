import './Card.css'

export default function Card({ children, className = '', padded = true }) {
  return (
    <div className={`st-card ${padded ? 'st-card--padded' : ''} ${className}`}>
      {children}
    </div>
  )
}
