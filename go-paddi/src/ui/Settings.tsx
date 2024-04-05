import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Bug from './Bug'
import Feedback from './Feedback'
import Recommend from './Recommend'

function Settings() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('feedback')

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)

    const tabParam = searchParams.get('tab')

    if (tabParam && ['feedback', 'recommend', 'bug'].includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [location.search])

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)

    searchParams.set('tab', activeTab)

    navigate({ search: searchParams.toString() })
  }, [activeTab, navigate])

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    //The DIV below is placeholder to centralize the component
    <div className='flex justify-center items-center my-[50px] '>
      <section className='bg-[#FFFFFF] w-[1400px] mb-[24px] rounded-[4px] '>
        <p className='p-[32px]'>
          <span className='font-[400] text-[16px] text-[#676E7E] leading-[24px]'>
            Settings
          </span>
          <h3 className='font-[600] text-[28px] leading-[36px]'>Feedback</h3>
        </p>
        <div className='pl-[32px] pt-[12px] border-y-[1px] border-[#E4E7EC] flex gap-[32px]'>
          <div className='flex flex-col'>
            <Button
              text='Feedback'
              className={
                activeTab === 'feedback'
                  ? 'active text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px] '
                  : 'text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
              }
              onClick={() => handleTabClick('feedback')}
            />
            <p
              className={
                activeTab === 'feedback'
                  ? 'bg-[#0D6EFD] h-[6px] rounded-[4px]  ease-in transition-all'
                  : ''
              }
            ></p>
          </div>

          <div className='flex flex-col'>
            <Button
              text='Recommend Features'
              className={
                activeTab === 'recommend'
                  ? 'active text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
                  : 'text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
              }
              onClick={() => handleTabClick('recommend')}
            />
            <p
              className={
                activeTab === 'recommend'
                  ? 'bg-[#0D6EFD] h-[6px] rounded-[4px] ease-in transition-all'
                  : ''
              }
            ></p>
          </div>

          <div className='flex flex-col'>
            <Button
              text='Report bugs'
              className={
                activeTab === 'bug'
                  ? 'active text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
                  : 'text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
              }
              onClick={() => handleTabClick('bug')}
            />
            <p
              className={
                activeTab === 'bug'
                  ? 'bg-[#0D6EFD] h-[6px] rounded-[4px]  ease-in transition-all'
                  : ''
              }
            ></p>
          </div>
        </div>

        <div className='flex gap-[64px]'>
          {activeTab === 'feedback' && <Feedback />}
          {activeTab === 'recommend' && <Recommend />}
          {activeTab === 'bug' && <Bug />}
        </div>
      </section>
    </div>
  )
}

export default Settings
