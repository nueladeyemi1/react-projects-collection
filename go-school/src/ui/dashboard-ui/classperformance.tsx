// Classperformance.tsx
import React, { FC } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { PiNotebook } from 'react-icons/pi'
import { IoMdClose } from 'react-icons/io'
import { RiPencilLine, RiDeleteBin6Line } from 'react-icons/ri'
import { Button } from '@/components/ui/button'
import { CaretDown } from '@phosphor-icons/react'
import { X } from '@phosphor-icons/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  ResponsiveContainer,
} from 'recharts'

interface ClassPerformanceProps {
  subTaken: string
  subTakenNo: number
  subInTheClass: string
  subMaths: string
  data: Data[]
  firstTerm: string
  secondTerm: string
  thirdTerm: string
  filetSub: string
  perfData: string
  physics: string
  zoology: string
  biology: string
  studList: string
  studName: string
}

export interface Data {
  name: string
  total: number
}
const linedata = [
  { name: 'W1', uv: 4000, pv: 2400, ev: 2400, amt: 6000 },
  { name: 'W3', uv: 3000, pv: 1398, ev: 2400, amt: 2210 },
  { name: 'W6', uv: 2000, pv: 9800, ev: 2400, amt: 2290 },
  { name: 'W9', uv: 2780, pv: 3908, ev: 2400, amt: 2000 },
  { name: 'W12', uv: 1890, pv: 4800, ev: 2400, amt: 2181 },
  { name: 'W1', uv: 2390, pv: 3800, ev: 2400, amt: 2500 },
  { name: 'W3', uv: 3490, pv: 4300, ev: 2400, amt: 2100 },
  { name: 'W6', uv: 4000, pv: 2400, ev: 2400, amt: 2400 },
  { name: 'W9', uv: 3000, pv: 1398, ev: 2400, amt: 2210 },
  { name: 'W12', uv: 2000, pv: 9800, ev: 2400, amt: 2290 },
  { name: 'W1', uv: 2780, pv: 3908, ev: 2400, amt: 2000 },
  { name: 'W3', uv: 1890, pv: 4800, ev: 2400, amt: 2181 },
  { name: 'W6', uv: 2390, pv: 3800, ev: 2400, amt: 7000 },
  { name: 'W9', uv: 3490, pv: 4300, ev: 2400, amt: 2100 },
  { name: 'W12', uv: 2000, pv: 9800, ev: 2400, amt: 2290 },
]

const ClassPerformance: FC<ClassPerformanceProps> = ({
  subTaken,
  subTakenNo,
  subInTheClass,
  subMaths,
  data,
  firstTerm,
  secondTerm,
  thirdTerm,
  filetSub,
  perfData,
  physics,
  zoology,
  biology,
  studList,
  studName,
}) => {
  return (
    <div className='ml-4'>
      <div className='flex'>
        <div className='bg-white p-4 rounded h-36 mr-4 w-96'>
          <div className='flex'>
            <div>
              <div className='font-poppins font-weight: 400 text-sm leading-5 text-[#667185]  pl-2'>
                {subTaken}
              </div>
              <div className='font-poppins text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-5'>
                {subTakenNo}
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-orange-100'>
              <PiNotebook className='w-8 h-8 text-orange-400' />
            </div>
          </div>
        </div>
        <div className='bg-white p-4  h-36 mr-4 w-96'>
          <div className='flex'>
            <div>
              <div className='font-poppins font-weight: 400 text-sm leading-5 text-[#667185]  pl-2'>
                {subTaken}
              </div>
              <div className='font-poppins text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-5'>
                {subTakenNo}
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-orange-100'>
              <PiNotebook className='w-8 h-8 text-orange-400' />
            </div>
          </div>
        </div>
      </div>
      <div className='font-poppins font-medium text-base text-[#1D2739] mt-5'>
        {subInTheClass}
      </div>
      <div className='bg-white p-4  h-36 mr-4 w-full mt-2 gap-4'>
        <div className='flex space-x-8'>
          {' '}
          {/* Increased gap value from space-x-4 to space-x-8 */}
          <div className='flex gap-4'>
            <div className='bg-[#F0F2F5] w-32 p-3 h-6 rounded text-center flex justify-center font-poppins font-medium text-sm'>
              <span className='flex items-center'>
                {subMaths} <X size={12} className='ml-1' />
              </span>
            </div>

            <div className='bg-[#F0F2F5] w-32 p-3 h-6 rounded text-center flex justify-center font-poppins font-medium text-sm'>
              <span className='flex items-center'>
                {subMaths} <X size={12} className='ml-1' />
              </span>
            </div>

            <div className='bg-[#F0F2F5] w-32 p-3 h-6 rounded text-center flex justify-center font-poppins font-medium text-sm'>
              <span className='flex items-center'>
                {subMaths} <X size={12} className='ml-1' />
              </span>
            </div>

            <div className='bg-slate-200 w-32  h-6 rounded text-center flex justify-center font-poppins font-medium text-sm'>
              <span className='flex items-center'>
                {subMaths} <X size={12} className='ml-1' />
              </span>
            </div>
          </div>
          <div className='mt-5'>
            <Button
              variant='default'
              className='bg-[#F0F6FF] text-[#0D6EFD] border border-sky-500'
            >
              Add Subject
            </Button>
          </div>
        </div>
      </div>

      <div className='font-poppins font-medium text-lg mt-4'>{perfData}</div>
      <div className='bg-white p-4  h-92 mr-4 w-full mt-2'>
        <div className='flex'>
          <div className='font-poppins font-medium text-xl mt-2 ml-2'>
            Grades per subject
          </div>
          <div className='ml-auto'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline'>
                  {firstTerm} <CaretDown size={12} className='ml-1' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56'>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>First Term</DropdownMenuItem>
                  <DropdownMenuItem>Second Term</DropdownMenuItem>
                  <DropdownMenuItem>Third term</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className='mt-3'>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
              <XAxis
                dataKey='name'
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Bar
                dataKey='total'
                fill='currentColor'
                radius={[4, 4, 0, 0]}
                className='text-emerald-400'
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='bg-white p-4 rounded h-92 mr-4 w-full mt-3'>
        <div className='font-poppins font-medium text-base text-[#1D2739]'>
          Perfomance Trend
        </div>
        <div className='mt-5'>
          {' '}
          <ResponsiveContainer width='100%' height={200}>
            <LineChart width={500} height={300} data={linedata}>
              <XAxis dataKey='name' />
              <YAxis />
              <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
              <Line type='monotone' dataKey='uv' stroke='#FF8C00' />
              <Line type='monotone' dataKey='pv' stroke='#FF8C00' />
              <Line type='monotone' dataKey='ev' stroke='#82ca9d' />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='flex justify-around  font-medium text-base text-[#647995]'>
          <div className='border-r border-solid w-1/4 font-poppins'>
            {firstTerm}
          </div>
          <div className='border-r border-solid w-1/4 font-poppins'>
            {secondTerm}
          </div>
          <div>{thirdTerm}</div>
        </div>
        <div className='text-center  font-medium text-base text-[#647995] mt-3'>
          {filetSub}
        </div>
        <div className=' flex justify-center mt-3'>
          <div className='flex items-center space-x-2'>
            <Checkbox id='terms2' disabled />
            <label
              htmlFor='terms2'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1D2433]'
            >
              {physics}
            </label>
            <Checkbox id='terms2' disabled />
            <label
              htmlFor='terms2'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1D2433]'
            >
              {zoology}
            </label>
            <Checkbox id='terms2' disabled />
            <label
              htmlFor='terms2'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1D2433]'
            >
              {biology}
            </label>
            <Checkbox id='terms2' disabled />
            <label
              htmlFor='terms2'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1D2433] font-poppins'
            >
              Mathematics
            </label>
            <Checkbox id='terms2' disabled />
            <label
              htmlFor='terms2'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1D2433 font-poppins
              ]'
            >
              Social Studies
            </label>
            <Checkbox id='terms2' disabled />
            <label
              htmlFor='terms2'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1D2433] font-poppins'
            >
              Physical Education
            </label>
            <Checkbox id='terms2' disabled />
            <label
              htmlFor='terms2'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 '
            >
              Music
            </label>
          </div>
        </div>
      </div>
      <div className='bg-white p-4  mt-3'>
        <div className='flex'>
          <div className='font-poppins font-semibold text-sm mt-2'>
            Students Grade
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
              className='bg-[#F0F2F5]text-sm appearance-none border-2 border-gray-200 rounded w-50 py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            />
          </div>
          <div className='flex ml-auto space-x-4'>
            <div className='ml-auto '>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline'>
                    Mathematics
                    <CaretDown size={12} className='ml-1' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56'>
                  <DropdownMenuLabel>Mathematics</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Biology</DropdownMenuItem>
                    <DropdownMenuItem>Physics</DropdownMenuItem>
                    <DropdownMenuItem>Chemistry</DropdownMenuItem>
                    <DropdownMenuItem>Botany</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className='ml-auto'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline'>
                    First Team <CaretDown size={12} className='ml-1' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56'>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>First Term</DropdownMenuItem>
                    <DropdownMenuItem>Second Term</DropdownMenuItem>
                    <DropdownMenuItem>Third Term</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <table className='w-full table-auto mt-4'>
          <thead>
            <tr className='bg-blue-950 text-white border-b font-poppins font-medium text-sm'>
              <th className='px-4 py-2 text-left text-sm font-medium'>No</th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                {studName}
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Home Work
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>CA</th>
              <th className='px-4 py-2 text-left text-sm font-medium'>Exam</th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Final Mark
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Result
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
                <button className='font-semibold py-1 px-2 rounded font-poppins bg-green-100 text-green-800 lg:font-medium text-sm'>
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
                <button className='font-semibold py-1 px-2 rounded font-poppins bg-green-100 text-green-800 lg:font-medium text-sm'>
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
                <button className='font-semibold py-1 px-2 rounded font-poppins bg-green-100 text-green-800 lg:font-medium text-sm'>
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
                <button className='font-semibold py-1 px-2 rounded font-poppins bg-green-100 text-green-800 lg:font-medium text-sm'>
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

export default ClassPerformance
