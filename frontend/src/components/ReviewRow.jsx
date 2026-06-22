import SentimentBadge from './SentimentBadge'
import './ReviewRow.css'

export default function ReviewRow({ guestName, snippet, sentiment, date }) {
  return (
    <div className="st-reviewrow">
      <SentimentBadge sentiment={sentiment} />
      <p className="st-reviewrow__text">
        <span className="st-reviewrow__name">{guestName}</span> — {snippet}
      </p>
      <span className="st-reviewrow__date">{date}</span>
    </div>
  )
}
