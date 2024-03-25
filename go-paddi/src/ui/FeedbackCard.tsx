import Button from '../components/Button'
import Radio from '../components/Radio'
import TextArea from '../components/TextArea'

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
        <div className='pl-[32px] py-[12px] border-y-[1px] border-[#E4E7EC]'>
          TABS
        </div>
        <div className='flex gap-[64px]'>
          <div className='pl-[32px] pb-[64px] flex flex-col'>
            <p className=' mt-[16px] font-[500] text-[16px] leading-[24px]'>
              Rate your experience
            </p>
            <div className='flex gap-[32px] my-[32px]'>
              {radioContents.map((content) => {
                const { id, icon, text } = content

                return <Radio key={id} icon={icon} text={text} />
              })}
            </div>
            <TextArea />
            <Button
              disabled={true}
              className='self-end disabled:bg-[#E7F0FF] px-[24px] py-[8px] rounded-[4px] disabled:text-[#98A2B3] font-[400] text-[14px] leading-[22px]'
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
