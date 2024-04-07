// Classinfo.tsx
import React from 'react'
import { RxCaretDown } from 'react-icons/rx'

interface Link {
  title: string
  url: string
}

export interface ClassData {
  name: string
  links: Link[]
}

interface ClassinfoProps {
  classData: ClassData
  showClassDetails: () => void
  onShowCalendar: () => void
  onShowPerfomance: () => void
  onShowAttendance: () => void
  activeComponent: string | null
}

const Classinfo: React.FC<ClassinfoProps> = ({
  classData,
  showClassDetails,
  onShowCalendar,
  onShowPerfomance,
  onShowAttendance,
  activeComponent,
}) => {
  const handleClassDetailsClick = () => {
    showClassDetails()
  }

  const handleCalendarClick = () => {
    onShowCalendar()
  }

  const handlePerformanceClick = () => {
    onShowPerfomance()
  }

  const handleAttendanceClick = () => {
    onShowAttendance()
  }

  return (
    <div>
      <div className='p-4  h-auto'>
        <div className='flex'>
          <h2 className='font-poppins font-semibold mb-2 text-3xl'>
            {classData.name}
          </h2>
          <div className='flex ml-auto'>
            <div className='font-poppins font-semibold text-base mt-2 text-stone-950'>
              Select Session
            </div>
            <div className='border border-gray-300 rounded-md p-2 ml-3'>
              <div className='flex '>
                <div className='font-poppins text-base font-bold'>
                  2023/2024
                </div>
                <div className='pt-1 h-1.5'>
                  <RxCaretDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='fixed-div border-b text-slate-400 mt-4'
          style={{ width: '1090px', position: 'sticky', top: '0' }}
        ></div>

        <div className='list-disc list-inside flex-row space-x-4 flex items-center pb-0 h-12'>
          {classData.links.map((link, index) => (
            <div
              key={index}
              className={`flex items-center h-full border-b-4 ${
                activeComponent === link.title.toLowerCase()
                  ? 'border-blue-500 text-black font-semibold hover:text-black'
                  : 'border-transparent'
              }`}
            >
              <a
                href={link.url}
                onClick={
                  link.title === 'Details'
                    ? handleClassDetailsClick
                    : link.title === 'Calendar'
                    ? handleCalendarClick
                    : link.title === 'Performance'
                    ? handlePerformanceClick
                    : link.title === 'Attendance'
                    ? handleAttendanceClick
                    : undefined
                }
                className={`text-base font-poppins ${
                  activeComponent === link.title.toLowerCase()
                    ? 'text-black font-semibold hover:text-black'
                    : 'text-[#676E7E] hover:text-black'
                }`}
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>

        <div
          className='fixed-div border-b text-slate-400'
          style={{ width: '1090px', position: 'sticky', top: '0' }}
        ></div>
      </div>
    </div>
  )
}

export default Classinfo
