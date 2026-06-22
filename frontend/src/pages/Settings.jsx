import { useState } from 'react'
import AppLayout from '../components/AppLayout'
import Card from '../components/Card'
import Input from '../components/Input'
import Button from '../components/Button'
import Toggle from '../components/Toggle'
import './Settings.css'

export default function Settings() {
  const [toggles, setToggles] = useState({
    emailAlerts: true,
    weeklyDigest: true,
    negativeReviewPing: false,
  })

  const handleToggle = (key) => () =>
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <AppLayout active="Settings" title="Settings">
      <Card>
        <h2 className="settings-section-title">Profile</h2>
        <div className="settings-form-grid">
          <Input label="Full name" defaultValue="Srishti Rana" placeholder="Your name" />
          <Input label="Email" type="email" placeholder="you@example.com" defaultValue="srishti@staylytics.ai" />
          <Input label="Property name" placeholder="e.g. The Maple House" defaultValue="The Maple House" />
        </div>
        <div className="settings-actions">
          <Button variant="primary">Save changes</Button>
        </div>
      </Card>

      <Card>
        <h2 className="settings-section-title">Notifications</h2>
        <Toggle
          label="Email me a summary of new reviews"
          checked={toggles.emailAlerts}
          onChange={handleToggle('emailAlerts')}
        />
        <Toggle
          label="Weekly performance digest"
          checked={toggles.weeklyDigest}
          onChange={handleToggle('weeklyDigest')}
        />
        <Toggle
          label="Instant alert for negative reviews"
          checked={toggles.negativeReviewPing}
          onChange={handleToggle('negativeReviewPing')}
        />
      </Card>

      <Card>
        <h2 className="settings-section-title">Danger zone</h2>
        <p className="settings-danger-text">
          Deleting your account removes all stored reviews and analytics permanently.
        </p>
        <Button variant="danger">Delete account</Button>
      </Card>
    </AppLayout>
  )
}
