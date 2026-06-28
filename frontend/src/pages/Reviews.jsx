import { useEffect, useState } from 'react'
import AppLayout from '../components/AppLayout'
import Card from '../components/Card'
import { UploadBox, PasteBox } from '../components/UploadBox'
import ReviewsTable from '../components/ReviewsTable'
import Loader from '../components/Loader'
import Toast from '../components/Toast'
import { api } from '../api/client'
import './Reviews.css'

export default function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  function loadReviews() {
    setLoading(true)
    api
      .getReviews()
      .then(setReviews)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    loadReviews()
  }, [])

  const filtered = reviews.filter((r) => filter === 'all' || r.sentiment === filter)

  const tableRows = filtered.map((r) => ({
    id: r.id,
    guestName: r.guestName,
    snippet: r.text,
    sentiment: r.sentiment,
    date: r.date,
  }))

  return (
    <AppLayout active="Reviews" title="Reviews">
      <Card>
        <h2 className="reviews-section-title">Add a new review</h2>
        <UploadBox />
        <p className="reviews-divider">or</p>
        <PasteBox />
      </Card>

      <Card>
        <div className="reviews-table-header">
          <h2 className="reviews-section-title">All reviews</h2>
          <select
            className="reviews-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Filter: All</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>
        </div>

        {loading && <Loader label="Loading reviews..." />}
        {!loading && !error && <ReviewsTable rows={tableRows} />}
      </Card>

      <Toast message={error} variant="error" onClose={() => setError(null)} />
    </AppLayout>
  )
}
