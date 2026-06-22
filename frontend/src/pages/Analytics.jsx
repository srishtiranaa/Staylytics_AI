import AppLayout from '../components/AppLayout'
import Card from '../components/Card'
import TrendChart from '../components/TrendChart'
import BarChart from '../components/BarChart'
import './Analytics.css'

const THEME_DATA = [
  { label: 'Clean', value: 82 },
  { label: 'Staff', value: 64 },
  { label: 'Location', value: 51 },
  { label: 'Price', value: 33 },
]

const TOP_PRAISES = [
  'Friendly and attentive staff',
  'Spotless, well-maintained rooms',
  'Great location near transit',
  'Fast check-in process',
]

const TOP_ISSUES = [
  'Wifi connectivity drops',
  'Limited breakfast options',
  'Noise from nearby street',
  'Slow response to requests',
]

export default function Analytics() {
  return (
    <AppLayout active="Analytics" title="Analytics & Insights">
      <div className="analytics-top">
        <Card className="analytics-trend">
          <h2 className="analytics-section-title">Sentiment trend over time</h2>
          <TrendChart />
          <div className="analytics-trend__axis">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </Card>
        <Card className="analytics-themes">
          <h2 className="analytics-section-title">Feedback themes</h2>
          <BarChart data={THEME_DATA} />
        </Card>
      </div>

      <div className="analytics-bottom">
        <Card>
          <h2 className="analytics-section-title">Top praises</h2>
          <ol className="analytics-list">
            {TOP_PRAISES.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </Card>
        <Card>
          <h2 className="analytics-section-title">Top issues</h2>
          <ol className="analytics-list">
            {TOP_ISSUES.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </Card>
      </div>
    </AppLayout>
  )
}
