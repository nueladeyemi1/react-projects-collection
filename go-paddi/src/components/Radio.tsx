import { MouseEventHandler } from 'react'

interface RadioProps {
  text: string
  icon: string
  active?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

function Radio({ text, icon, active, className, onClick }: RadioProps) {
  return (
    <button
      name={text}
      onClick={onClick}
      className={` h-[140px] w-[148px] flex gap-[12px] flex-col items-center justify-center rounded-[4px] cursor-pointer hover:bg-[#eef2f7] transition-all ${className}`}
    >
      <img className='size-[32px]' src={`${icon}`} alt={`${text}`} />
      <p className='font-[500] text-[16px] leading-[24px]'>{text}</p>
    </button>
  )
}

export default Radio
