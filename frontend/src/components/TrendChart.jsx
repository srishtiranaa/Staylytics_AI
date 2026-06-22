import './TrendChart.css'

export default function TrendChart({ points = [40, 55, 48, 70, 60, 78, 65, 85, 80] }) {
  const max = Math.max(...points)
  const min = Math.min(...points)
  const range = max - min || 1
  const w = 600
  const h = 200
  const stepX = w / (points.length - 1)

  const coords = points.map((p, i) => {
    const x = i * stepX
    const y = h - ((p - min) / range) * h
    return `${x},${y}`
  }).join(' ')

  return (
    <svg className="st-trendchart" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <polyline points={coords} fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
    </svg>
  )
}
