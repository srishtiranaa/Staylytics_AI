import Button from './Button'
import './UploadBox.css'

export function UploadBox() {
  return (
    <div className="st-uploadbox">
      <p className="st-uploadbox__title">Drag &amp; drop a CSV file here</p>
      <p className="st-uploadbox__subtitle">or browse from your computer</p>
      <Button variant="secondary" size="sm">Browse file</Button>
    </div>
  )
}

export function PasteBox() {
  return (
    <div className="st-pastebox">
      <textarea
        className="st-pastebox__textarea"
        placeholder="Paste review text here..."
        rows={3}
      />
      <Button variant="primary" size="sm">Add review</Button>
    </div>
  )
}
