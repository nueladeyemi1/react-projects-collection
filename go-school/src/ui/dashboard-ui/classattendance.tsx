import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { GoCheckCircle } from 'react-icons/go'
import { Button } from '@/components/ui/button'
import { PiStudent } from 'react-icons/pi'
import { CaretDown } from '@phosphor-icons/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
  Rectangle,
  ResponsiveContainer,
} from 'recharts'
interface ClassAttendanceProps {
  subTaken: string
  subTakenNo: number
  subInTheClass: string
  subMaths: string
  data: Data[]
  firstTerm: string
  secondTerm: string
  thirdTerm: string
  filetSub: string
}
export interface Data {
  name: string
  total: number
}
const linedata = [
  { name: 'Week 1', uv: 4000, pv: 2400, ev: 2400, amt: 6000 },
  { name: 'Week 3', uv: 3000, pv: 1398, ev: 2400, amt: 2210 },
  { name: 'Week 6', uv: 2000, pv: 9800, ev: 2400, amt: 2290 },
  { name: 'Week 9', uv: 2780, pv: 3908, ev: 2400, amt: 2000 },
  { name: 'Week 12', uv: 1890, pv: 4800, ev: 2400, amt: 2181 },
]
const ldata = [
  {
    name: 'Monday',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tuesday',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wednsday',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thursday',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Friday',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
]

const ClassAttendance: React.FC<ClassAttendanceProps> = ({
  data, // Destructure the 'data' prop
}) => {
  return (
    <div>
      <div className='flex gap-4 ml-0'>
        {/* Adjust the value of gap-4 according to your preference */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline'>
                Mathematics <CaretDown size={12} className='ml-1' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-52'>
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
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline'>
                Today <CaretDown size={12} className='ml-1' />
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
      </div>
      <div className='flex'>
        <div className='bg-white p-4  h-40 w-96 ml- mt-3'>
          <div className='flex '>
            <div>
              <div className='font-poppins font-weight: 400 text-sm leading-5 text-[#667185]  pl-2'>
                Attendance
              </div>
              <div className='flex mt-1'>
                <div className='font-poppins flex text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-4'>
                  42
                </div>
                <div className='ml-2 mt-5 font-semibold font-poppins'>
                  <span className='text-[#667185] text-xl'>/</span>
                  <span className=' text-[#667185] text-lg'>54</span>
                </div>
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-lime-100'>
              <GoCheckCircle className='w-8 h-8 text-lime-600' />
            </div>
          </div>
        </div>
        <div className='bg-white p-4  h-40 w-96 ml-3 mt-3'>
          <div className='flex items-center'>
            <div>
              <div className='font-poppins font-weight: 400 text-base leading-5 text-slate-400'>
                Top Attendee
              </div>
              <div className='font-poppins text-4xl font-semibold leading-11 tracking-tighter ml-2 mt-3 '>
                Chukuvodi
              </div>
            </div>
            <div className='ml-auto flex items-center justify-center w-16 h-16 rounded-full bg-orange-100'>
              <PiStudent className='w-8 h-8 text-orange-400' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div
          className='bg-white p-4  h-92 mr-4  mt-2'
          style={{ width: '570px' }}
        >
          <div className='font-poppins font-medium text-lg'>
            Attendance Trend
          </div>
          <div className='mt-5'>
            {' '}
            <ResponsiveContainer width='100%' height={300}>
              <LineChart width={500} height={400} data={linedata}>
                <XAxis dataKey='name' />
                <YAxis />
                <CartesianGrid vertical={false} horizontal={false} />
                <Line type='monotone' dataKey='uv' stroke='#FF8C00' />
                <Line type='monotone' dataKey='pv' stroke='#FF8C00' />
                <Line type='monotone' dataKey='ev' stroke='#82ca9d' />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='bg-white p-4 h-92 mr-4 mt-2' style={{ width: '570px' }}>
          <div className='font-poppins font-medium text-lg'>
            Attendance Data
          </div>
          <div className='mt-2'>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart
                width={500}
                height={300}
                data={ldata}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' className='text-xs' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey='pv'
                  fill='#8884d8'
                  activeBar={<Rectangle fill='pink' stroke='#0F973D' />}
                />
                <Bar
                  dataKey='uv'
                  fill='#82ca9d'
                  activeBar={<Rectangle fill='gold' stroke='#0F973D' />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className='bg-white p-4  h-40 ml-0 mt-3' style={{ width: '1152px' }}>
        <div className='flex'>
          <div className='font-poppins font-medium text-lg'>
            Mark Student Attendance
          </div>
          <div className='ml-auto space-x-4'>
            <Button
              variant='default'
              className='bg-[#F0F6FF] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white'
            >
              Edit Attendance
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant='outline'
                  className='bg-[#F0F6FF] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white'
                >
                  Save Attendance
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px] bg-white p-4 flex flex-col items-center justify-center text-center'>
                <DialogHeader>
                  <DialogTitle className='text-center'>
                    Save Attendance
                  </DialogTitle>
                  <DialogDescription>
                    <DialogDescription>
                      <div className='text-center mt-3'>
                        Do you want to save the current attendance <br />
                        data for class 1A?
                      </div>
                    </DialogDescription>
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter className='mt-4'>
                  <Button
                    type='submit'
                    className='bg-[#F0F6FF] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white'
                  >
                    Cancel
                  </Button>

                  <Button
                    type='submit'
                    className='bg-[#F0F6FF] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white ml-2'
                  >
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <table className='w-full table-auto mt-4'>
          <thead>
            <tr className='bg-blue-950 text-white border-b font-poppins font-medium text-sm'>
              <th className='px-4 py-2 text-left text-sm font-medium'>No</th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Student ID
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Student Name
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Mark Present
              </th>
              <th className='px-4 py-2 text-left text-sm font-medium'>
                Mark Late
              </th>

              <th className='px-4 py-2 text-left text-sm font-medium'>
                Mark Absent
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b text-black font-poppins font-medium text-sm l-2'>
              <td className='px-4 py-2 text-left'>1</td>
              <td className='px-4 py-2 text-left'>DXCY-22</td>
              <td className='px-4 py-2 text-left'>CukWudi</td>
              <td className='px-4 py-2 text-left'>
                {' '}
                <div className='flex items-center space-x-2 '>
                  <Checkbox id='terms' className='bg-green-700' />
                </div>
              </td>
              <td className='px-4 py-2 text-left'>
                {' '}
                <div className='flex items-center space-x-2'>
                  <Checkbox id='terms' />
                </div>
              </td>
              <td className='px-4 py-2 text-left'>
                {' '}
                <div className='flex items-center space-x-2'>
                  <Checkbox id='terms' />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ClassAttendance
