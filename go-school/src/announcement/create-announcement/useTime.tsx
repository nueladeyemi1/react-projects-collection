// import * as React from 'react'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { TimePicker } from '@mui/x-date-pickers/TimePicker'

// export default function BasicTimePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['TimePicker']}>
//         <TimePicker label='Basic time picker' />
//       </DemoContainer>
//     </LocalizationProvider>
//   )
// }

import * as React from 'react'
import '../../app/globals.css'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { Label } from '@/components/ui/label'

export default function ResponsiveTimePickers() {
  return (
    <div className='w-full'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DemoContainer components={['TimePicker']}> */}
        <div className='flex flex-col gap-2'>
          <Label>Schedule Time</Label>
          <TimePicker
            className='w-full py-[9px] border-[#98A2B3] border-[1px] rounded text-[2px] font-[400]'
            defaultValue={dayjs('2022-04-17T09:00')}
          />
        </div>
        {/* </DemoContainer> */}
      </LocalizationProvider>
    </div>
  )
}
