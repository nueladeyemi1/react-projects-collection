interface InputProps {
  type?: string
  value?: string
  placeholder?: string
  className?: string
  disabled?: boolean
}

function Input({ type, value, placeholder, className, disabled }: InputProps) {
  return (
    <>
      <input
        className={className}
        disabled={disabled}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input
