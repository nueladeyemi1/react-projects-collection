interface ButtonProps {
  text: String
  className?: String
}

function Button({ text, className }: ButtonProps) {
  return <button className={`${className}`}>{text}</button>
}

export default Button
