import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { ChangeEvent } from 'react'
import { PiMegaphone } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'
import { GrAttachment } from 'react-icons/gr'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaMinusCircle, FaRegFile } from 'react-icons/fa'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { addressData } from './address-data'
import { CalendarForm } from './useCalender'
import BasicTimePicker from './useTime'

type Checked = DropdownMenuCheckboxItemProps['checked']

const CreateAnnouncement = () => {
  const [disabled, setdisabled] = React.useState<boolean>(true)
  const [files, setFiles] = React.useState<FileList | null>(null)
  const [status, setStatus] = React.useState<
    'initial' | 'uploading' | 'success' | 'fail'
  >('initial')

  const [sendAnnouncementTo, setSendAnnouncementTo] = React.useState<string>(
    'Everyone'
  )
  const [publishTime, setPublishTime] = React.useState<string>('now')
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setStatus('initial')
      setFiles(e.target.files)
    }
  }

  return (
    <div
      style={{ transform: 'translate(-50%, -5%)' }}
      className='bg-[#FFFFFF] rounded w-[600px] max-w-[690px] absolute top-[5%] left-[50%] z-10'
    >
      <div className='relative'>
        {/* <div className="bg-[url('/gridlines.svg')]"></div> */}
        <img
          className='h-[76.8px] w-[552px] max-w-[690px] bg-gradient-to-r from-white to-[#fefefe]'
          src='./gridlines.svg'
        />
        <div className='absolute bg-[#E7F0FF] p-[20px] top-8 left-8 rounded'>
          <PiMegaphone color='#0D6EFD' size={32} />
        </div>
      </div>
      <div className='flex justify-between mt-[36px] px-[32px]'>
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
      <div className='flex flex-col gap-6 justify-between px-[32px] mt-8'>
        <div className='grid w-[100%] max-w-[100%] items-center gap-1.5'>
          <Label htmlFor='title'>Announcement Title</Label>
          <Input
            className='w-[100%] border-[#98A2B3] border-[1px] rounded placeholder:text-base placeholder:text-[#98A2B3] placeholder:leading-[22px] placeholder:font-normal'
            type='text'
            id='text'
            placeholder='Type in a title'
          />
        </div>

        <div className='grid w-full gap-1.5'>
          <Label htmlFor='content'>Announcement Content</Label>
          <Textarea
            className='w-[100%] max-h-[136px] border-[#98A2B3] border-[1px] rounded placeholder:text-base placeholder:text-[#98A2B3] placeholder:leading-[22px] placeholder:font-normal'
            placeholder='Type in a message'
            id='message'
          />
        </div>

        <div>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='picture'>Attachments ({files?.length || 0})</Label>
            <div className='grid grid-cols-2 gap-2 justify-center'>
              {files &&
                [...files].map((file, index) => {
                  return (
                    <div
                      onClick={(e) => {
                        //  setFiles([...files].filter(file=> file.name !== filename))
                        // [...files].filter(file=> file.name !== e.target.name)
                      }}
                      key={index}
                      className='flex items-center gap-[10px] border-[#F0F2F5] border-[1px] pl-[16px] relative rounded'
                    >
                      <FaMinusCircle
                        size={16.25}
                        color='#D42620'
                        className='absolute z-10 top-[-8px] right-[2px] cursor-pointer'
                      />
                      <FaRegFile size={32} />
                      <p>{file?.name}</p>
                    </div>
                  )
                })}
            </div>
            <label className='text-[#0D6EFD] w-[150px] flex items-center gap-[18px] cursor-pointer disabled:bg-[#E7F0FF] disabled:text-[#98A2B3] font-[400] text-[14px] leading-[22px]'>
              <GrAttachment />
              Add Attachments
              <input
                onChange={handleFileChange}
                type='file'
                // accept='image/png, image/jpeg'
                className='hidden'
                multiple
              />
            </label>
          </div>
        </div>

        <div>
          <div className='flex gap-6'>
            <div className='w-full flex flex-col gap-2'>
              <Label htmlFor='content'>Send Announcement to</Label>
              <Select
                onValueChange={(e) => {
                  const target = e
                  setSendAnnouncementTo(target)
                }}
              >
                <SelectTrigger className=' rounded border-[#98A2B3] border-[1px]'>
                  <SelectValue placeholder='Everyone' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='bg-[#FFFFFF] py-3 px-[10px]'>
                    {/* <SelectLabel>Fruits</SelectLabel> */}
                    {/* <SelectItem value='everyone'>
                  <div className='flex items-center gap-2'>
                    <AiOutlineGlobal /> <p>Everyone</p>
                  </div>
                </SelectItem> */}

                    {addressData.map((content) => {
                      const { id, text, icon } = content
                      return (
                        <SelectItem
                          className='cursor-pointer bg-[#F0F2F5]'
                          key={id}
                          value={text}
                        >
                          <div className='flex items-center gap-2'>
                            {icon} <p>{text}</p>
                          </div>
                        </SelectItem>
                      )
                    })}
                    {/* <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {sendAnnouncementTo === 'Everyone' ? (
              <div className='w-full'></div>
            ) : (
              <div className='w-full flex flex-col gap-2'>
                <Label htmlFor='content'>Select Recipients</Label>
                <Select>
                  <SelectTrigger className=' rounded border-[#98A2B3] border-[1px]'>
                    <SelectValue placeholder='Everyone' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className='bg-[#FFFFFF] py-3 px-[10px]'>
                      {addressData.map((content) => {
                        const { id, text } = content
                        return (
                          <SelectItem
                            className='cursor-pointer bg-[#F0F2F5]'
                            key={id}
                            value={text}
                          >
                            <div className='flex items-center gap-2'>
                              <AiOutlineGlobal /> <p>{text}</p>
                            </div>
                          </SelectItem>
                        )
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>

        {sendAnnouncementTo === 'Everyone' ? (
          <div className='flex flex-col gap-[18px]'>
            <Label>Publish time</Label>
            <RadioGroup
              onValueChange={(e) => setPublishTime(e)}
              className='flex gap-4'
              defaultValue={publishTime}
            >
              {/* <div className='flex'> */}
              <div className='flex items-center space-x-2'>
                <RadioGroupItem
                  // className='border-[red] border-[4px]'
                  value='now'
                  id='r1'
                />
                <Label htmlFor='r1'>Send Now</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='later' id='r2' />
                <Label htmlFor='r2'>Schedule for later</Label>
              </div>
              {/* </div> */}
            </RadioGroup>
          </div>
        ) : (
          ''
        )}

        {publishTime === 'now' ? (
          ''
        ) : (
          <div className='flex items-center gap-6'>
            <CalendarForm />
            <BasicTimePicker />
          </div>
        )}

        {sendAnnouncementTo === 'Everyone' ? (
          ''
        ) : (
          <div className='flex items-center gap-6'>
            <div className='w-full flex flex-col gap-2'>
              <Label htmlFor='content'>Select Recipients</Label>
              <Select>
                <SelectTrigger className='rounded border-[#98A2B3] border-[1px]'>
                  <SelectValue placeholder='Everyone' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='bg-[#FFFFFF] py-3 px-[10px]'>
                    {addressData.map((content) => {
                      const { id, text } = content
                      return (
                        <SelectItem
                          className='cursor-pointer bg-[#F0F2F5]'
                          key={id}
                          value={text}
                        >
                          <div className='flex items-center gap-2'>
                            <AiOutlineGlobal /> <p>{text}</p>
                          </div>
                        </SelectItem>
                      )
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='w-full flex flex-col gap-[18px]'>
              <Label>Publish time</Label>
              <RadioGroup
                onValueChange={(e) => setPublishTime(e)}
                className='flex gap-4'
                defaultValue={publishTime}
              >
                {/* <div className='flex'> */}
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem
                    // className='border-[red] border-[4px]'
                    value='now'
                    id='r1'
                  />
                  <Label htmlFor='r1'>Send Now</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='later' id='r2' />
                  <Label htmlFor='r2'>Schedule for later</Label>
                </div>
                {/* </div> */}
              </RadioGroup>
            </div>
          </div>
        )}
      </div>
      <div className='px-[32px] mt-8'>
        <Button className='bg-[#0D6EFD] hover:bg-[rgba(13,109,253,0.87)] disabled:bg-[#CFE2FF] rounded text-[#FFFFFF] w-[100%] '>
          Send Announcement
        </Button>
        <Button className='text-[#1D2433] w-[100%] '>Save as Draft</Button>
      </div>
    </div>
  )
}

export default CreateAnnouncement
