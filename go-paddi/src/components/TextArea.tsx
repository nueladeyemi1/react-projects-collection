interface TextAreaProps {
  label: string
  placeholder: string
  className?: string
  id: string
  name: string
}

function TextArea({ label, placeholder, className, id, name }: TextAreaProps) {
  return (
    <section className='flex flex-col gap-[10px]'>
      <label className='font-[400] text-[16px] leading-[24px]' htmlFor={label}>
        {label}
      </label>

      <textarea
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </section>
  )
}

export default TextArea
