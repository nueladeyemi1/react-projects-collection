import { MouseEventHandler } from 'react'

interface RadioProps {
  text: string
  icon: string
  active?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Radio({ text, icon, active, onClick }: RadioProps) {
  const btnBgActive =
    active === true
      ? 'bg-[#E7F0FF] border-[#0D6EFD] border-[1px]'
      : 'bg-[#F9FAFB] border-[#D0D5DD] border-[1px]'

  return (
    <button
      name={text}
      onClick={onClick}
      className={` h-[140px] w-[148px] flex gap-[12px] flex-col items-center justify-center rounded-[4px] cursor-pointer hover:bg-[#eef2f7] transition-all ${btnBgActive}`}
    >
      <img className='size-[32px]' src={`${icon}`} alt={`${text}`} />
      <p className='font-[500] text-[16px] leading-[24px]'>{text}</p>
    </button>
  )
}

export default Radio
