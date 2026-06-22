import './Button.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false,
}) {
  const classes = [
    'st-button',
    `st-button--${variant}`,
    `st-button--${size}`,
    fullWidth ? 'st-button--full' : '',
  ].filter(Boolean).join(' ')

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
