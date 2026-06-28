import { useEffect } from 'react'
import './Toast.css'

export default function Toast({ message, variant = 'error', onClose }) {
  useEffect(() => {
    if (!onClose) return
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  if (!message) return null

  return (
    <div className={`st-toast st-toast--${variant}`} role="alert">
      {message}
    </div>
  )
}
