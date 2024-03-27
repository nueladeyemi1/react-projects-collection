import { MouseEventHandler } from 'react'

interface ButtonProps {
  text: String
  className?: String
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({ text, className, disabled, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} border-0`}
    >
      {text}
    </button>
  )
}

export default Button
