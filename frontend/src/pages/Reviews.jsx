import AppLayout from '../components/AppLayout'
import Card from '../components/Card'
import { UploadBox, PasteBox } from '../components/UploadBox'
import ReviewsTable from '../components/ReviewsTable'
import './Reviews.css'

const ALL_REVIEWS = [
  { id: 1, guestName: 'Aanya Kapoor', snippet: 'Loved the rooftop view and warm hospitality', sentiment: 'positive', date: 'Jun 18, 2026' },
  { id: 2, guestName: 'Marcus Webb', snippet: 'Room was clean but check-in took too long', sentiment: 'neutral', date: 'Jun 17, 2026' },
  { id: 3, guestName: 'Priya Singh', snippet: 'Wifi kept disconnecting throughout the stay', sentiment: 'negative', date: 'Jun 16, 2026' },
  { id: 4, guestName: 'Daniel Ortiz', snippet: 'Best homestay experience in the city so far', sentiment: 'positive', date: 'Jun 14, 2026' },
]

export default function Reviews() {
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
          <select className="reviews-filter" defaultValue="all">
            <option value="all">Filter: All</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>
        </div>
        <ReviewsTable rows={ALL_REVIEWS} />
        <p className="reviews-pagination">‹ Prev &nbsp; 1 &nbsp; 2 &nbsp; 3 &nbsp; Next ›</p>
      </Card>
    </AppLayout>
  )
}
