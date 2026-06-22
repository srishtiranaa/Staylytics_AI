import './BarChart.css'

export default function BarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className="st-barchart">
      {data.map((d) => (
        <div className="st-barchart__col" key={d.label}>
          <div
            className="st-barchart__bar"
            style={{ height: `${(d.value / max) * 100}%` }}
          />
          <span className="st-barchart__label">{d.label}</span>
        </div>
      ))}
    </div>
  )
}
