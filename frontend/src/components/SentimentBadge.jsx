import './SentimentBadge.css'

const LABELS = {
  positive: 'Positive',
  negative: 'Negative',
  neutral: 'Neutral',
}

export default function SentimentBadge({ sentiment = 'neutral' }) {
  return (
    <span className={`st-badge st-badge--${sentiment}`}>
      {LABELS[sentiment] ?? sentiment}
    </span>
  )
}
