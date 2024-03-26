interface SelectProps {
  value?: string
  text: string[]
  className?: string
  label: string
}

function Select({ value, className, text, label }: SelectProps) {
  return (
    <>
      <label className='font-[400] text-[16px] leading-[24px]' htmlFor={label}>
        {label}
      </label>
      <select>
        {text.map((content: string) => {
          return (
            <option className={className} value={value}>
              {content}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Select
