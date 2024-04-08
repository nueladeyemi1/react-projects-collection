import React, { ReactElement } from 'react'
import { RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri'
import { PiStudent } from 'react-icons/pi'
import { GoCheckCircle } from 'react-icons/go'
import { PiChalkboardTeacherDuotone } from 'react-icons/pi'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { IoIosStarOutline } from 'react-icons/io'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TbArrowsDownUp } from 'react-icons/tb'
import { ArrowsDownUp, Airplane } from '@phosphor-icons/react'
import { FadersHorizontal } from '@phosphor-icons/react'

interface Props {
  enrolledStudents: number
  attendance: number
  clsDescription: string
  clsCategory: string
  clsTeacher: string
  tchrName: string
  onClick: () => void
  ReAssignment: string
  clsCaptain: string
  captName: string
  topStudent: string
  studentName: string
  studentList: string
  Number: string
  enrollStudents: string
  tdAttendance: string
  classDescription: string
  classCategory: string
  // filter: string; // Define the filter prop
  // setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function Classdetails({
  enrolledStudents,
  attendance,
  clsDescription,
  clsCategory,
  clsTeacher,
  tchrName,
  onClick,
  ReAssignment,
  clsCaptain,
  captName,
  topStudent,
  studentName,
  studentList,
  Number,
  enrollStudents,
  tdAttendance,
  classDescription,
  classCategory,
}: // filter,
// setFilter,
Props): ReactElement {
  return (
    <div className='ml-4'>
      <div className='flex'>
        <div className='bg-white p-4 rounded h-35 mr-4 w-80'>
          <div className='flex items-center'>
            <div>
              <div className='font-poppins font-weight: 400 text-sm leading-5 text-[#667185]  pl-2'>
                {enrollStudents}
              </div>
              <div className='font-poppins text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-5'>
                {enrolledStudents}
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mr-1'>
              <PiStudent className='w-8 h-8 text-[#0D6EFD]' />
            </div>
          </div>
        </div>

        <div className='bg-white p-4 rounded  h-35 ml-3 w-80'>
          <div className='flex items-center'>
            <div>
              <div className='font-poppins font-weight: 400  text-sm leading-5 text-[#667185]  pl-2'>
                {tdAttendance}
              </div>
              <div className='flex mt-1'>
                <div className='font-poppins flex text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-4'>
                  {attendance}
                </div>
                <div className='ml-2 mt-5 font-semibold font-poppins'>
                  <span className='text-[#667185] text-xl'>/</span>
                  <span className=' text-[#667185] text-lg'>
                    {enrolledStudents}
                  </span>
                </div>
              </div>
              {/* Changed text size to lg */}
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#E7F6EC] mr-1'>
              <GoCheckCircle className='w-8 h-8 text-[#0F973D]' />
            </div>
          </div>
        </div>
        <div
          className='bg-white p-4 rounded  h-40 ml-5'
          //   style={{ width: '550px' }}
        >
          <div className='font-poppins font-weight: 400 text-sm leading-5 text-[#667185]  pl-2'>
            {classDescription}
          </div>
          <div className='font-poppins font-semibold text-sm text-[#1D2739] leading-11 mt-2 pl-2'>
            {clsDescription}
          </div>
          <div className='font-poppins font-weight: 400  text-sm leading-5 text-[#667185] mt-4 pl-2'>
            {classCategory}
          </div>
          <div className='font-poppins font-semibold text-[#1D2739] leading-11 tracking-tighter mt-1 pl-2'>
            {clsCategory}
          </div>
        </div>
      </div>
      <div className='bg-white p-4 h-44 mt-5 w-full'>
        <div className='flex justify-around ml-5'>
          <div className='border-r border-solid  w-2/5'>
            <div className='flex items-center'>
              <PiChalkboardTeacherDuotone className='w-6 h-6 mr-2 text-blue-500' />
              <div className='font-poppins font-medium text-base text-slate-700'>
                {clsTeacher}
              </div>
            </div>
          </div>
          <div className=' border-r border-solid  text-[#D0D5DD] w-2/5'>
            <div className='flex items-center ' style={{ marginLeft: '60px' }}>
              <HiOutlineUserCircle className='w-6 h-6 mr-2 text-lime-500' />
              <div className='font-poppins font-medium leading-5 text-base text-slate-700 '>
                {clsCaptain}
              </div>
            </div>
          </div>
          <div className='w-2/4'>
            <div className='flex items-center' style={{ marginLeft: '60px' }}>
              <IoIosStarOutline className='w-6 h-6 mr-2 text-orange-600' />
              <div className='font-poppins font-medium text-base text-slate-700'>
                {topStudent}
              </div>
            </div>
          </div>
        </div>
        <div className='flex item-center ' style={{ marginTop: '30px' }}>
          <div
            className='border-r border-solid ml-5'
            style={{ width: '338px' }}
          >
            <div className='flex'>
              <div className='mr-4'>
                <Avatar className='w-6 h-6 mt-4'>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    className='w-full h-full'
                  />
                  <AvatarFallback className='text-white'>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className='mt-4 font-poppins font-medium text-base'>
                {tchrName}
              </div>
            </div>
            <button
              className='bg-[#E7F0FF] text-[#0D6EFD] rounded lg:mt-5 hover:bg-blue font-poppins font-semibold text-sm w-36 p-2 mt-4 h-8 flex items-center  justify-center'
              onClick={onClick}
            >
              {ReAssignment}
            </button>
          </div>
          <div className='border-r border-solid 5' style={{ width: '338px' }}>
            <div className='flex' style={{ marginLeft: '59px' }}>
              <div className='mr-2'>
                <Avatar className='w-6 h-6 mt-4'>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    className='w-full h-full'
                  />
                  <AvatarFallback className='text-white'>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className='mt-4 font-poppins font-medium text-base'>
                {captName}
              </div>
            </div>
            <button
              className='bg-[#E7F0FF] text-[#0D6EFD] rounded mt-4 p-2 hover:bg-blue font-poppins font-semibold text-sm w-36 h-8 flex items-center  justify-center '
              onClick={onClick}
              style={{ marginLeft: '61px' }}
            >
              Reassign Captain
            </button>
          </div>
          <div className='' onClick={onClick} style={{ marginLeft: '59px' }}>
            <div className='flex'>
              <div className='mr-4'>
                <Avatar className='w-6 h-6 mt-4'>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    className='w-full h-full'
                  />
                  <AvatarFallback className='text-white'>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className='mt-4 font-poppins font-medium text-base'>
                Okoro
              </div>
            </div>
            <button
              className='bg-[#E7F0FF] text-[#0D6EFD] rounded mt-4 hover:bg-blue font-poppins font-semibold text-sm w-28 h-8 flex items-center  justify-center'
              onClick={onClick}
            >
              View Student
            </button>
          </div>
        </div>
      </div>

      <div className='bg-white p-4  mt-5'>
        <div className='flex mt-2 gap-4'>
          <div className='font-poppins font-medium text-sm mt-2'>
            {studentList}
          </div>
          <div className='relative ml-2 mb-2'>
            <div className='absolute left-3 top-2 mt-1 ml-2'>
              <svg
                className='fill-current w-4 h-4 text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' />
              </svg>
            </div>
            <input
              type='text'
              placeholder='Search'
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-50 py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            />
          </div>
          <div className='w-16 h-8 bg-[#F0F2F5] flex item-center text-center justify-center p-2 rounded font-medium text-sm ml-2 mt-1'>
            <FadersHorizontal size={16} className='pt-1' />
            Filter
          </div>
          <div className='ml-auto'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semitext-base bold py-2 px-4 rounded font-poppins '>
              Add a student
            </button>
          </div>
        </div>
        <table className='w-full table-auto mt-3'>
          <thead className=''>
            <tr className='bg-blue-950 text-white border-b font-poppins font-medium text-sm'>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                {Number}
              </th>
              <th className='px- py-2 text-left text-sm font-medium flex font-poppins '>
                Student ID{' '}
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                First Name
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Last Name
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Middle Name
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Subject Token
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Status
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b text-black font-poppins font-medium text-sm'>
              <td className='px-4 py-2 text-left'>1</td>
              <td className='px-4 py-2 text-left'>DXCY-22</td>
              <td className='px-4 py-2 text-left'>CukWudi</td>
              <td className='px-4 py-2 text-left'>Okoro</td>
              <td className='px-4 py-2 text-left'>Micheal</td>
              <td className='px-4 py-2 text-left'>10</td>
              <td className='px-4 py-2 text-left'>
                <button className='font-semibold py-1 px-2  w-20 rounded font-poppins bg-green-100 text-green-800 lg:font-medium text-sm'>
                  Active
                </button>
              </td>
              <td className='px-4 py-2 text-left text-blue-600 font-poppins font-medium text-sm'>
                View Student
                <RiPencilLine className='inline-block lg:ml-2 mr-1 text-gray-500 cursor-pointer ml-5' />
                <RiDeleteBin6Line className='inline-block text-red-500 cursor-pointer ml-3' />
              </td>
            </tr>
            <tr className='border-b text-black font-poppins font-medium text-sm bg-[#F0F2F5]'>
              <td className='px-4 py-2 text-left'>1</td>
              <td className='px-4 py-2 text-left'>DXCY-22</td>
              <td className='px-4 py-2 text-left'>CukWudi</td>
              <td className='px-4 py-2 text-left'>Okoro</td>
              <td className='px-4 py-2 text-left'>Micheal</td>
              <td className='px-4 py-2 text-left'>10</td>
              <td className='px-4 py-2 text-left'>
                <button className='font-semibold py-1 px-2 w-20 rounded font-poppins bg-green-100 text-green-800 lg:font-medium text-sm'>
                  Active
                </button>
              </td>
              <td className='px-4 py-2 text-left text-blue-600 font-poppins font-medium text-sm'>
                View Student
                <RiPencilLine className='inline-block lg:ml-2 mr-1 text-gray-500 cursor-pointer ml-5' />
                <RiDeleteBin6Line className='inline-block text-red-500 cursor-pointer ml-3' />
              </td>
            </tr>
            <tr className='border-b text-black font-poppins font-medium text-sm'>
              <td className='px-4 py-2 text-left'>1</td>
              <td className='px-4 py-2 text-left'>DXCY-22</td>
              <td className='px-4 py-2 text-left'>CukWudi</td>
              <td className='px-4 py-2 text-left'>Okoro</td>
              <td className='px-4 py-2 text-left'>Micheal</td>
              <td className='px-4 py-2 text-left'>10</td>
              <td className='px-4 py-2 text-left'>
                <button className='font-semibold py-1 px-2 w-20 rounded font-poppins bg-[#FEF6E7] text-[#865503] lg:font-medium text-sm'>
                  On Hold
                </button>
              </td>
              <td className='px-4 py-2 text-left text-blue-600 font-poppins font-medium text-sm'>
                View Student
                <RiPencilLine className='inline-block lg:ml-2 mr-1 text-gray-500 cursor-pointer ml-5' />
                <RiDeleteBin6Line className='inline-block text-red-500 cursor-pointer ml-3' />
              </td>
            </tr>
            <tr className='border-b text-black font-poppins font-medium text-sm bg-[#F0F2F5]'>
              <td className='px-4 py-2 text-left'>1</td>
              <td className='px-4 py-2 text-left'>DXCY-22</td>
              <td className='px-4 py-2 text-left'>CukWudi</td>
              <td className='px-4 py-2 text-left'>Okoro</td>
              <td className='px-4 py-2 text-left'>Micheal</td>
              <td className='px-4 py-2 text-left'>10</td>
              <td className='px-4 py-2 text-left'>
                <button className='font-semibold py-1 px-2  w-20 rounded font-poppins bg-green-100 text-green-800 lg:font-medium text-sm'>
                  Active
                </button>
              </td>
              <td className='px-4 py-2 text-left text-blue-600 font-poppins font-medium text-sm'>
                View Student
                <RiPencilLine className='inline-block lg:ml-2 mr-1 text-gray-500 cursor-pointer ml-5' />
                <RiDeleteBin6Line className='inline-block text-red-500 cursor-pointer ml-3' />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Classdetails
