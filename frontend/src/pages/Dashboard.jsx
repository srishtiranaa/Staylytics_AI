import { useEffect, useState } from 'react'
import AppLayout from '../components/AppLayout'
import Card from '../components/Card'
import StatCard from '../components/StatCard'
import TrendChart from '../components/TrendChart'
import ReviewRow from '../components/ReviewRow'
import Loader from '../components/Loader'
import Toast from '../components/Toast'
import { api } from '../api/client'
import './Dashboard.css'

function summarize(reviews) {
  const total = reviews.length
  const positive = reviews.filter((r) => r.sentiment === 'positive').length
  const negative = reviews.filter((r) => r.sentiment === 'negative').length
  const positivePct = total ? Math.round((positive / total) * 100) : 0
  const negativePct = total ? Math.round((negative / total) * 100) : 0
  return { total, positivePct, negativePct }
}

export default function Dashboard() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    api
      .getReviews()
      .then((data) => {
        if (isMounted) setReviews(data)
      })
      .catch((err) => {
        if (isMounted) setError(err.message)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [])

  const { total, positivePct, negativePct } = summarize(reviews)
  const recent = reviews.slice(0, 5)

  return (
    <AppLayout active="Dashboard" title="Dashboard">
      {loading && <Loader label="Loading reviews..." />}

      {!loading && !error && (
        <>
          <div className="dash-stats">
            <StatCard label="Total reviews" value={total} />
            <StatCard label="Positive" value={`${positivePct}%`} />
            <StatCard label="Negative" value={`${negativePct}%`} />
            <StatCard label="Avg rating" value="4.3" />
          </div>

          <div className="dash-charts">
            <Card className="dash-charts__trend">
              <h2 className="dash-section-title">Sentiment trend</h2>
              <TrendChart />
            </Card>
            <Card className="dash-charts__themes">
              <h2 className="dash-section-title">Top themes</h2>
              <ul className="dash-themes">
                <li><span>Cleanliness</span><span className="dash-themes__count">82</span></li>
                <li><span>Staff</span><span className="dash-themes__count">64</span></li>
                <li><span>Location</span><span className="dash-themes__count">51</span></li>
                <li><span>Price</span><span className="dash-themes__count">33</span></li>
              </ul>
            </Card>
          </div>

          <Card>
            <h2 className="dash-section-title">Recent reviews</h2>
            <div className="dash-reviewlist">
              {recent.map((r) => (
                <ReviewRow
                  key={r.id}
                  guestName={r.guestName}
                  snippet={r.text}
                  sentiment={r.sentiment}
                  date={r.date}
                />
              ))}
            </div>
          </Card>
        </>
      )}

      <Toast message={error} variant="error" onClose={() => setError(null)} />
    </AppLayout>
  )
}
