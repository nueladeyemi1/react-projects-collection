import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { PiMegaphone } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'

const CreateAnnouncement = () => {
  return (
    <div
      style={{ transform: 'translate(-50%, -50%)' }}
      className='bg-[#FFFFFF] rounded w-[690px] h-[594px] absolute top-[50%] left-[50%] z-10'
    >
      <div className='relative'>
        {/* <div className="bg-[url('/gridlines.svg')]"></div> */}
        <img
          className='h-[128px] bg-gradient-to-r from-white to-[#fefefe]'
          src='./gridlines.svg'
        />
        <div className='absolute bg-[#E7F0FF] p-[24px] top-8 left-8 rounded'>
          <PiMegaphone color='#0D6EFD' size={32} />
        </div>
      </div>
      <div className='flex justify-between px-[32px]'>
        <div className='flex flex-col gap-1 w-[313px]'>
          <p className='text-[#1D2433] font-[600] text-xl tracking-[-1px]'>
            Create New Announcement
          </p>
          <p className='text-[#647995] font-[500] text-base tracking-[-2%] leading-[22px]'>
            Create a new announcement for this class
          </p>
        </div>
        <RxCross2 style={{ cursor: 'pointer' }} color='#344054' size={16} />
      </div>
      <div className='flex justify-between px-[32px] mt-8'>
        <div className='grid w-[100%] max-w-[100%] items-center gap-1.5'>
          <Label htmlFor='Announcement Title'>Announcement Title</Label>
          <Input
            className='w-[100%] border-[#98A2B3] border-[1px] rounded placeholder:text-base placeholder:text-[#98A2B3] placeholder:leading-[22px] placeholder:font-normal'
            type='text'
            id='text'
            placeholder='Type in a title'
          />
        </div>
      </div>
    </div>
  )
}

export default CreateAnnouncement
