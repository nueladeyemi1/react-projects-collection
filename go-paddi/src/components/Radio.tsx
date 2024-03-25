// import * as React from 'react'

interface RadioProps {
  text: String
  icon: String
}

function Radio({ text, icon }: RadioProps) {
  return (
    <div className='bg-[#F9FAFB] h-[140px] w-[148px] flex gap-[12px] flex-col items-center justify-center border-[#D0D5DD] border-[1px] rounded-[4px] cursor-pointer hover:bg-[#eef2f7] transition-all'>
      <img className='size-[32px]' src={`${icon}`} alt={`${text}`} />
      <p className='font-[500] text-[16px] leading-[24px]'>{text}</p>
    </div>
  )
}

export default Radio
