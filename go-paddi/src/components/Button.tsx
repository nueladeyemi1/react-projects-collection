interface ButtonProps {
  text: String
  className?: String
  disabled?: boolean
}

function Button({ text, className, disabled }: ButtonProps) {
  return (
    <button disabled={disabled} className={`${className} border-0`}>
      {text}
    </button>
  )
}

export default Button
