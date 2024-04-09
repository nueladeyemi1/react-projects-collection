'use client'

// Multisignup.tsx
import { FC } from 'react'
// import logo from '@/assets/images/logo.png'
import React, { useState } from 'react'
import multisignup from '@/assets/images/multisignup.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UploadSimple, CheckCircle, CaretDown } from '@phosphor-icons/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import '../globals.css'
import EmblaCarousel from '@/ui/signup-actions-ui/EmblaCarousel'
import { OPTIONS, SLIDES } from '../signup/page'

const Multisignup: FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)
  const handleFileInput = () => {
    // Trigger click event on hidden file input
    const fileInput = document.getElementById('fileInput') as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }
  const handleGalleryOpen = () => {
    // Code to open the gallery goes here
    console.log('Opening gallery...')
  }
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size)
  }
  const handleSizSelect = (size: string) => {
    setSelectedStudent(size)
  }

  const onFileUploadClick = () => {
    window.location.href = '/fileupload'
  }

  return (
    <div>
      <div className='flex h-screen'>
        <div className='w-1/2 h-screen'>
          <div className='flex items-center justify-between mt-[26px] '>
            <div className='ml-[68px]'>
              <img
                alt=''
                //   src={logo}
                src='../../assets/images/logo.png'
                className='w-10 ml'
              />
            </div>
            <div className='font-poppins font-medium text-base text-gray-500 pr-[55px]'>
              Made an error?
              <span className=' text-[#0D6EFD] ml-1'>Go back</span>
            </div>
          </div>
          <div className='ml-[72px] flex mt-[25px] '>
            <Button className='bg-white round  hover:bg-white text-xs h-8 text-[#0D6EFD]  border border-gray-300 gap-1'>
              <span className=''>
                <CheckCircle
                  size={12}
                  className='bg-[#0D6EFD]  rounded-full text-white'
                />
              </span>
              Sign Up
            </Button>

            <Button className='round hover:bg-white text-xs h-8 text-black border bg-[#F7F9FC] border-gray-300 gap-1'>
              <span className='rounded-full border border-solid border-gray-300 h-4 w-4 flex text-xs items-center justify-center'>
                2
              </span>
              School Details
            </Button>
            <Button className='round hover:bg-white text-xs h-8 text-[#98A2B3] hover:text-black bg-[#F7F9FC] border border-gray-300 gap-1'>
              <span className='rounded-full border border-solid border-gray-300 h-4 w-4 flex text-xs items-center justify-center'>
                3
              </span>
              Upload Documents
            </Button>
          </div>
          <div className='ml-[72px] mt-[20px]'>
            <div className='font-poppins lg:font-medium font-semibold text-xl'>
              Set up your School
            </div>
            <div className='font-poppins font-medium text-xs text-gray-500 mt-1'>
              Fill in all required details to create your School Profile on{' '}
              <br></br>
              GoSchool
            </div>
          </div>
          <div className='flex mx-[5px] gap-4 ml-[43px] mt-5'>
            <div className='ml-[28px]'>
              <label className='block text-sm font-medium text-gray-700'>
                School Name
              </label>
              <Input
                type='text'
                placeholder='Enter School Name'
                className='h-[36px] mt-1 w-[310px] border-zinc-300 outline-none rounded-none'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Username
              </label>
              <Input
                type='text'
                placeholder='Choose a username'
                className='h-[36px] mt-1 w-[310px] border-zinc-300 outline-none rounded-none'
              />
            </div>
          </div>
          <div className='flex justify-center mt-[14px] ml-2'>
            <div className=''>
              <label className='block text-sm font-medium text-gray-700'>
                School Email Address
              </label>
              <Input
                type='text'
                placeholder='Your@email.com'
                className='h-[40px] mt-1 w-[636px] border-zinc-300 outline-none rounded-none'
              />
            </div>
          </div>
          <div className='text-sm pl-2 font-medium text-gray-700 ml-[63px] mt-3'>
            School Logo
          </div>
          <div className='flex items-center justify-center px]'>
            <div className='bg-[#F0F2F5] w-[625px] h-16 flex items-center '>
              <div className='flex ml-4 items-center justify-center w-8 h-8 rounded-full bg-[#D0D5DD] mr-1'>
                <UploadSimple size={12} className='text-[#00007E]' />
              </div>
              <div className='text-[#676E7E] text-sm ml-2'>
                At least 800 x 800 px recommended <br></br> JPG or PNG is
                allowed
              </div>
              <div className='ml-auto mr-4'>
                <input
                  id='fileInput'
                  type='file'
                  className='hidden'
                  onChange={handleGalleryOpen}
                />
                <Button
                  className='bg-[#0D6EFD] h-8 rounded-none font-normal text-base hover:bg-[#0D6EFD]'
                  onClick={handleFileInput}
                >
                  Upload
                </Button>
              </div>
            </div>
          </div>
          <div className='flex mx-[5px] gap-4 ml-[43px] mt-3'>
            <div className='ml-[28px]'>
              <div className='text-sm font-medium text-gray-700'>
                Staff Size
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    className='w-72 h-[38px] mt-1 rounded-none'
                  >
                    {selectedStudent || ''}
                    <CaretDown size={12} className='lg:ml-1 ml-auto' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-52'>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onSelect={() => handleSizSelect('0-25')}>
                      0-25
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSizSelect('25-50')}>
                      25-50
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => handleSizSelect('50-100')}
                    >
                      50-100
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => handleSizSelect('100-20')}
                    >
                      100-200
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSizSelect('200')}>
                      200+
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <div className='text-sm font-medium text-gray-700'>
                Student Size
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='outline'
                    className='w-72 h-[38px] mt-1 rounded-none'
                  >
                    {selectedSize || ''}
                    <CaretDown size={12} className='lg:ml-1 ml-auto' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-52'>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onSelect={() => handleSizeSelect('0-25')}>
                      0-25
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => handleSizeSelect('25-50')}
                    >
                      25-50
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => handleSizeSelect('50-100')}
                    >
                      50-100
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => handleSizeSelect('100-20')}
                    >
                      100-200
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleSizeSelect('200')}>
                      200+
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className='ml-[68px] mt-4'>
            <label className=' font-poppins block text-sm font-medium text-gray-700'>
              Have you previously used a School ERP?
            </label>
            <Input
              type='text'
              placeholder='Choose a username'
              className='h-[36px] mt-1 w-[310px] border-zinc-300 outline-none rounded-none'
            />
          </div>
          <div className='flex justify-center'>
            <Button
              variant='secondary'
              className='mt-4 w-[640px] bg-[#0D6EFD] hover:bg-[#0D6EFD] '
              onClick={onFileUploadClick}
            >
              <span className='font-poppins text-sm font-medium text-[#FFFFFF]'>
                Next
              </span>
            </Button>
          </div>
          <div className='font-medium text-[#676E7E] font-poppins text-base  ml-[58px] absolute bottom-2'>
            <div>{'\u00A9'}2024  Gopaddi. All rights reserved</div>
          </div>
        </div>
        <div className='w-1/2'>
          <div>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />

            {/* <img
              alt=''
              //  src={multisignup}
              src=''
              className='w-[770px] h-screen'
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Multisignup
