import React, { FC } from 'react'
import { PiCalendarBlank } from 'react-icons/pi'
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { PiRoadHorizon } from 'react-icons/pi'
import { RiCalendarCheckLine } from 'react-icons/ri'
import { CiClock2 } from 'react-icons/ci'

interface ClasscalendarProps {
  allEvents: string
  totalEvents: number
  currentEvents: string
  totalCurrentEvents: number
  upComingEvents: string
  totalupComingEvents: number
  completedEvents: string
  clsTimeTable: string
  upCominEvents: string
  clsExcursion: string
  clsExcursionpara: string
}

const Classcalendar: FC<ClasscalendarProps> = ({
  allEvents,
  totalEvents,
  currentEvents,
  totalCurrentEvents,
  upComingEvents,
  totalupComingEvents,
  completedEvents,
  clsTimeTable,
  upCominEvents,
  clsExcursion,
  clsExcursionpara,
}) => {
  // Component logic here

  return (
    <div className='ml-4'>
      <div className='flex'>
        <div className='bg-white p-4 rounded h-36 mr-4 w-80'>
          <div className='flex'>
            <div>
              <div className='font-poppins font-weight: 400 text-sm leading-5 text-[#667185]  pl-2'>
                {' '}
                {allEvents}
              </div>
              <div className='font-poppins text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-5'>
                {totalEvents}
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mr-1'>
              <PiCalendarBlank className='w-8 h-8 text-[#0D6EFD]' />
            </div>
          </div>
        </div>
        <div className='bg-white p-4 rounded h-36 mr-4 w-80'>
          <div className='flex'>
            <div>
              <div className='font-poppins font-weight: 400  text-sm leading-5 text-[#667185]  pl-2'>
                {' '}
                {currentEvents}
              </div>
              <div className='font-poppins flex text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-5'>
                {totalCurrentEvents}
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#FEF4E6] mr-1'>
              <IoCalendarNumberOutline className='w-8 h-8 text-[#F58A07]' />
            </div>
          </div>
        </div>
        <div className='bg-white p-4 rounded h-36 mr-4 w-80'>
          <div className='flex'>
            <div>
              <div className='font-poppins font-weight: 400  text-sm leading-5 text-[#667185]  pl-2'>
                {' '}
                {upComingEvents}
              </div>
              <div className='font-poppins flex text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-5'>
                {totalupComingEvents}
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#FEF4E6] mr-1'>
              <PiCalendarBlank className='w-8 h-8 text-[#F58A07]' />
            </div>
          </div>
        </div>
        <div className='bg-white p-4 rounded h-36 mr-4 w-80'>
          <div className='flex'>
            <div>
              <div className='font-poppins font-weight: 400  text-sm leading-5 text-[#667185]  pl-2'>
                {' '}
                {completedEvents}
              </div>
              <div className='font-poppins flex text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-5'>
                {totalupComingEvents}
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#E7F6EC] mr-1'>
              <RiCalendarCheckLine
                className='w-8 h-8 text-[#0F973D]
]'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div>
          <div className='mt-5 font-poppins font-medium text-base text-[#1D2739]'>
            {clsTimeTable}
          </div>
          <div className='bg-white p-4  h-80  mt-3 w-[670px]'></div>
        </div>
        <div className='mt-5'>
          <div className='ml-5'>
            <div className=' font-poppins font-medium text-base text-[#1D2739]'>
              {upCominEvents}
            </div>
          </div>
          <div className='bg-white p-4  h-auto w-[447px] ml-5 mt-3'>
            <div>
              <div className='flex'>
                <div className=' flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 '>
                  <PiRoadHorizon className='text-slate-800 h-6 w-6 ' />
                </div>
                <div className='font-poppins font-medium text-base text-[1D2433] pl-3'>
                  {clsExcursion}
                </div>
              </div>

              <div className='font-poppins mt-0 ml-[45px] text-[#676E7E]  font-normal text-sm'>
                {clsExcursionpara}
              </div>
              <button className='bg-[#F0F2F5] w-28 h-6 rounded flex items-center justify-center mt-4 ml-[45px]'>
                <CiClock2 className='text-stone-950 mr-1' />
                <div className='text-stone-950 font-medium text-sm '>
                  3 days left
                </div>
              </button>
            </div>
            <div className='mt-[30px]'>
              <div className='flex'>
                <div className=' flex items-center justify-center w-10 h-10 rounded-full bg-slate-300 '>
                  <PiRoadHorizon className='text-slate-800 h-6 w-6 ' />
                </div>
                <div className='font-poppins font-medium text-base text-[1D2433] pl-3'>
                  {clsExcursion}
                </div>
              </div>

              <div className='font-poppins mt-0 ml-[45px] text-[#676E7E]  font-normal text-sm'>
                {clsExcursionpara}
              </div>
              <button className='bg-[#F0F2F5] w-28 h-6 rounded flex items-center justify-center mt-2 ml-[45px]'>
                <CiClock2 className='text-stone-950 mr-1' />
                <div className='text-stone-950 font-medium text-sm '>
                  3 days left
                </div>
              </button>
            </div>

            <div>
              <button className='w-40 h-8 bg-[#F0F6FF] border rounded border-blue-500 mt-5 text-[#0D6EFD] font-medium text-sm font-poppins'>
                Create New Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Classcalendar
