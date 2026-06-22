import AppLayout from '../components/AppLayout'
import Card from '../components/Card'
import StatCard from '../components/StatCard'
import TrendChart from '../components/TrendChart'
import ReviewRow from '../components/ReviewRow'
import './Dashboard.css'

const RECENT_REVIEWS = [
  { guestName: 'Aanya Kapoor', snippet: 'Loved the rooftop view and warm hospitality', sentiment: 'positive', date: '2 days ago' },
  { guestName: 'Marcus Webb', snippet: 'Room was clean but check-in took too long', sentiment: 'neutral', date: '3 days ago' },
  { guestName: 'Priya Singh', snippet: 'Wifi kept disconnecting throughout the stay', sentiment: 'negative', date: '4 days ago' },
]

export default function Dashboard() {
  return (
    <AppLayout active="Dashboard" title="Dashboard">
      <div className="dash-stats">
        <StatCard label="Total reviews" value="248" trend={{ direction: 'up', text: '12% this month' }} />
        <StatCard label="Positive" value="76%" trend={{ direction: 'up', text: '4% this month' }} />
        <StatCard label="Negative" value="9%" trend={{ direction: 'down', text: '2% this month' }} />
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
          {RECENT_REVIEWS.map((r) => (
            <ReviewRow key={r.guestName} {...r} />
          ))}
        </div>
      </Card>
    </AppLayout>
  )
}
