import { useState, MouseEvent } from 'react'
import Radio from '../components/Radio'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
// import SettingTabs from './SettingsTab'

const radioContents = [
  {
    id: 1,
    icon: './emoji/bad.svg',
    text: 'Bad',
  },
  {
    id: 2,
    icon: './emoji/decent.svg',
    text: 'Decent',
  },
  {
    id: 3,
    icon: './emoji/neutral.svg',
    text: 'Neutral',
  },
  {
    id: 4,
    icon: './emoji/good.svg',
    text: 'Good',
  },
  {
    id: 5,
    icon: './emoji/love.svg',
    text: 'Love it',
  },
]

function Feedback() {
  const [disable, setDisable] = useState<boolean>(true)
  const [active, setActive] = useState<string>('')

  return (
    <>
      <div className='pl-[32px] pb-[64px] flex flex-col'>
        <p className=' mt-[16px] font-[500] text-[16px] leading-[24px]'>
          Rate your experience
        </p>
        <div className='flex gap-[32px] my-[32px]'>
          {radioContents.map((content) => {
            const { id, icon, text } = content

            return (
              <Radio
                onClick={(e: MouseEvent) => {
                  const target = e.target as HTMLButtonElement
                  setActive(target.name)
                  setDisable((disable) =>
                    text === target.name || disable === true
                      ? false
                      : text !== target.name
                      ? false
                      : true
                  )
                }}
                key={id}
                icon={icon}
                text={text}
                className={
                  active === text
                    ? 'bg-[#E7F0FF] border-[#0D6EFD] border-[1px]'
                    : 'bg-[#F9FAFB] border-[#D0D5DD] border-[1px]'
                }
              />
            )
          })}
        </div>
        <TextArea
          className='h-[295px] rounded-[4px] border-[#98A2B3] border-[1px] w-[100%] placeholder:p-[12px] placeholder:font-[500] placeholder:text-[16px] focus:border-[#98A2B3] focus:border-[1px] mb-[56px]'
          label='Comments'
          id='comments'
          name='comments'
          placeholder='Tell us more (optional) '
        />
        <Button
          disabled={disable}
          className='self-end bg-[#0D6EFD] disabled:bg-[#E7F0FF] px-[24px] py-[8px] rounded-[4px] text-[#FFFFFF] disabled:text-[#98A2B3] font-[400] text-[14px] leading-[22px]'
          text='Submit your feedback'
        />
      </div>
      <div className='border-l-[1px] border-[#E4E7EC]'></div>
    </>
  )
}

export default Feedback
