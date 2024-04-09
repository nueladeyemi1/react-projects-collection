'use client'

// Signup.tsx
import React from 'react'
import signup from '@/assets/images/signup.png'
import logo from '@/assets/images/logo.png'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { EmblaOptionsType } from 'embla-carousel'
import '../globals.css'
import EmblaCarousel from '@/ui/signup-actions-ui/EmblaCarousel'
import '../../ui/signup-actions-ui/embla.css'

export const OPTIONS: EmblaOptionsType = { loop: true }

export const SLIDES = [
  {
    id: 1,
    src: './assets/images/Asignin.png',
  },
  {
    id: 2,
    src: './assets/images/signin.png',
  },
  {
    id: 3,
    src: './assets/images/multisignup.png',
  },
]

const Signup: React.FC = () => {
  const onMultiSignUpClick = () => {
    window.location.href = '/multisignup'
  }
  const onFileUploadClick = () => {
    window.location.href = '/fileupload'
  }
  return (
    <div>
      <div className='flex h-screen'>
        <div className='w-1/2 h-screen'>
          <div className='flex items-center justify-between mt-[37px] '>
            <div className='ml-[61px]'>
              <img
                alt=''
                src='../../assets/images/logo.png'
                //   src={logo}
                className='w-10 ml'
              />
            </div>
            <div className='font-poppins font-medium text-base text-gray-500 pr-[55px]'>
              Are you new to GoSchool?
              <span className=' text-[#0D6EFD] ml-1'>Sign Up</span>
            </div>
          </div>
          <div className='ml-[61px] flex mt-[30px] '>
            <Button className='bg-white hover:bg-white text-xs text-black border border-gray-300 gap-1'>
              <span className='rounded-full border border-solid border-gray-300 h-4 w-4 flex text-xs items-center justify-center'>
                1
              </span>
              Sign Up
            </Button>

            <Button className='lg:bg-white hover:bg-white text-xs text-black border bg-[#F7F9FC] border-gray-300 gap-1'>
              <span className='rounded-full border border-solid border-gray-300 h-4 w-4 flex text-xs items-center justify-center'>
                2
              </span>
              School Details
            </Button>
            <Button
              className='lg:bg-white hover:bg-white text-xs lg:text-[#98A2B3] text-black bg-[#F7F9FC] border border-gray-300 gap-1 '
              onClick={onFileUploadClick}
            >
              <span className='rounded-full border border-solid border-gray-300 h-4 w-4 flex text-xs items-center justify-center'>
                3
              </span>
              Upload Documents
            </Button>
          </div>
          <div className='ml-[61px] mt-[30px]'>
            <div className='font-poppins lg:font-medium font-semibold text-2xl'>
              Create an Account
            </div>
            <div className='font-poppins font-medium text-sm text-gray-500 mt-1'>
              Create your GoSchool account and start <br></br> managing your
              school in minutes.
            </div>
          </div>
          <div className=' mt-[30px]  flex justify-around'>
            <div className='grid grid-cols-2 gap-4 gap-x-8'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  First Name
                </label>
                <Input
                  type='text'
                  placeholder='Enter first name'
                  className='lg:outline-none rounded-none h-12 mt-1 w-[300px] border-zinc-300 outline-none'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Last Name
                </label>
                <Input
                  type='email'
                  placeholder='Enter last name'
                  className='rounded-none h-12 mt-1  w-[300px] border-zinc-300 outline-none'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <Input
                  type='email'
                  placeholder='Your@email.com'
                  className='rounded-none h-12 mt-1  w-[300px] border-zinc-300 outline-none'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Phone number
                </label>
                <Input
                  type='email'
                  placeholder='Enter phone number'
                  className='rounded-none h-12 mt-1 w-[300px]  border-zinc-300 outline-none'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <Input
                  type='password'
                  placeholder='Enter password'
                  className='rounded-none h-12 mt-1  w-[300px] border-zinc-300 outline-none'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Confirm Password
                </label>
                <Input
                  type='password'
                  placeholder='Re-enter password'
                  className='rounded-none h-12 mt-1  w-[300px] border-zinc-300 outline-none'
                />
              </div>
            </div>
          </div>
          <div className='flex ml-[61px] mt-5 w-[640px] items-center justify-between'>
            <div className=''>
              <Checkbox id='terms' className='' />
              <label
                htmlFor='terms'
                className='text-sm ml-3 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-poppins text-gray-500'
              >
                By checking this box and clicking{' '}
                <span className='text-sm font-medium text-black'>
                  "Sign Up"
                </span>
                , you acknowledge and agree to the{' '}
                <span className='text-[#0D6EFD] font-medium'>
                  {' '}
                  Terms & <span className='ml-[25px]'> Conditions</span>
                </span>
                ,{' '}
                <span className='text-[#0D6EFD] font-medium'>
                  {' '}
                  Privacy Policy{' '}
                </span>
                , and{' '}
                <span className='text-[#0D6EFD] font-medium'>
                  {' '}
                  Cookie Policy.
                </span>
              </label>
            </div>
          </div>
          <div className='flex justify-center'>
            <Button
              variant='secondary'
              className='mt-[30px] w-[640px] bg-[#0D6EFD] hover:bg-[#0D6EFD]'
              onClick={onMultiSignUpClick}
            >
              <span className='font-poppins text-sm font-medium text-[#FFFFFF]'>
                Sign up
              </span>
            </Button>
          </div>
        </div>
        <div className='w-1/2'>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          {/* <div>
            <img
              alt=''
              // src={signup}
              src='./assets/images/signin.png'
              className='w-auto h-auto'
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Signup
