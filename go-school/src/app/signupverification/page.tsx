import React from 'react'
import { SealCheck, CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import '../globals.css'

const SignupVerification: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center'>
        <div className='flex items-center justify-center w-24 h-24 bg-blue-100 mr-1 rounded-lg'>
          <SealCheck size={32} className='w-16 h-16 text-[#0D6EFD] bg-[#]' />
        </div>
        <div className='flex mt-[30px]'>
          <Button className='bg-white hover:bg-white text-xs text-[#0D6EFD] font-semibold border border-gray-300 gap-1'>
            <span className=''>
              <CheckCircle
                size={12}
                className='bg-[#0D6EFD]  rounded-full text-white'
              />
            </span>
            Sign Up
          </Button>

          <Button className=' hover:bg-white text-xs text-[#0D6EFD] font-semibold border bg-[#F7F9FC] border-gray-300 gap-1'>
            <span className=''>
              <CheckCircle
                size={12}
                className='bg-[#0D6EFD]  rounded-full text-white'
              />
            </span>
            School Details
          </Button>
          <Button className=' hover:bg-white text-xs text-[#0D6EFD] font-semibold  bg-[#F7F9FC] border border-gray-300 gap-1 '>
            <span className=''>
              <CheckCircle
                size={12}
                className='bg-[#0D6EFD]  rounded-full text-white'
              />
            </span>
            Upload Documents
          </Button>
        </div>
        <div className='font-poppins lg:font-medium font-semibold text-2xl mt-4'>
          Verification in progress
        </div>
        <div className='font-poppins font-medium text-xs text-gray-500 mt-3 text-center'>
          Your school details and documents have been received successfully.
          <br />
          We are now working to get you verified within the next 72 hours.
        </div>
        <a
          href='https://www.example.com'
          className='mt-5 font-poppins text-[#0D6EFD] font-medium'
        >
          Gopaddi Home
        </a>
        <div className='flex justify-center mt-2'>
          <Button
            variant='secondary'
            className='w-[640px] bg-[#0D6EFD] hover:bg-[#0D6EFD]'
          >
            <span className='font-poppins text-sm font-medium text-[#FFFFFF]'>
              Read GoSchool FAQs
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignupVerification
