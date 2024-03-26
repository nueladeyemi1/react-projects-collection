import Button from '../components/Button'
import Radio from '../components/Radio'
import TextArea from '../components/TextArea'
import { Link } from 'react-router-dom'
import { useState, MouseEvent } from 'react'
import SettingTabs from './SettingsTab'

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

function FeedbackCard() {
  const [disable, setDisable] = useState<boolean>(true)
  const [active, setActive] = useState<boolean>(false)

  return (
    //The DIV below is placeholder to centralize the component
    <div className='flex justify-center items-center my-[50px] '>
      <section className='bg-[#FFFFFF] w-[1300px] mb-[24px] rounded-[4px] '>
        <p className='p-[32px]'>
          <span className='font-[400] text-[16px] text-[#676E7E] leading-[24px]'>
            Settings
          </span>
          <h3 className='font-[600] text-[28px] leading-[36px]'>Feedback</h3>
        </p>
        <div className='pl-[32px] py-[12px] border-y-[1px] border-[#E4E7EC] flex gap-[32px]'>
          {/* <Link
            className='text-[#676E7E] active:text-[red] font-[500] text-[16px] leading-[24px]'
            to='/comments'
          >
            Feedback
          </Link>
          <Link
            className='text-[#676E7E]  font-[500] text-[16px] leading-[24px]'
            to='rec'
          >
            Recommend Features
          </Link>
          <Link
            className='text-[#676E7E]  font-[500] text-[16px] leading-[24px]'
            to=''
          >
            Report bugs
          </Link> */}
          <SettingTabs />
        </div>
        <div className='flex gap-[64px]'>
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
                      setActive(() => (text === target.name ? true : false))
                      console.log(target.name, text)
                      console.log(active)
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
                    // active={disable}
                  />
                )
              })}
            </div>
            <TextArea />
            <Button
              disabled={disable}
              className='self-end bg-[#0D6EFD] disabled:bg-[#E7F0FF] px-[24px] py-[8px] rounded-[4px] text-[#FFFFFF] disabled:text-[#98A2B3] font-[400] text-[14px] leading-[22px]'
              text='Submit your feedback'
            />
          </div>
          <div className='border-l-[1px] border-[#E4E7EC]'></div>
        </div>
      </section>
    </div>
  )
}

export default FeedbackCard
