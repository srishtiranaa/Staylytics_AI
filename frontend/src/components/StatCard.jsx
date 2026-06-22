import Card from './Card'
import './StatCard.css'

export default function StatCard({ label, value, trend }) {
  return (
    <Card className="st-statcard">
      <p className="st-statcard__label">{label}</p>
      <p className="st-statcard__value">{value}</p>
      {trend && (
        <p className={`st-statcard__trend st-statcard__trend--${trend.direction}`}>
          {trend.direction === 'up' ? '↑' : '↓'} {trend.text}
        </p>
      )}
    </Card>
  )
}
