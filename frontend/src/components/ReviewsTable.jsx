import SentimentBadge from './SentimentBadge'
import './ReviewsTable.css'

export default function ReviewsTable({ rows }) {
  return (
    <div className="st-table-wrap">
      <table className="st-table">
        <thead>
          <tr>
            <th>Guest</th>
            <th>Review snippet</th>
            <th>Sentiment</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td data-label="Guest">{row.guestName}</td>
              <td data-label="Snippet" className="st-table__snippet">{row.snippet}</td>
              <td data-label="Sentiment"><SentimentBadge sentiment={row.sentiment} /></td>
              <td data-label="Date">{row.date}</td>
              <td data-label="Action"><a href="#">View</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
