'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { EmblaOptionsType } from 'embla-carousel'
import '../globals.css'
import EmblaCarousel from '@/ui/signup-actions-ui/EmblaCarousel'
import '../../ui/signup-actions-ui/embla.css'
import SignupUI from '@/ui/signup-actions-ui/signupUI'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

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

export default function GoSchool() {
  const router = useRouter()
  //   const pathName = usePathname()
  const [activeTab, setActiveTab] = useState('signup')
  const [open, setOpen] = useState(false)
  const [onTag, setOnTag] = useState(false)

  const mode = useSearchParams().get('auth')
  const pathName = usePathname()

  useEffect(() => {
    if (mode && pathName.startsWith('/goschool')) {
      setOpen(mode === activeTab)
    }
    console.log(mode)
  }, [mode, pathName, activeTab])

  //   const onFileUploadClick = () => {
  //     router.push('/fileupload') // Use router.push to navigate
  //   }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    router.replace(`/goschool?auth=${tab}`)
    console.log(activeTab)
  }

  //   const mode = useSearchParams().get('auth')
  //   console.log(mode, pathName)

  //   useEffect(() => {
  //     if (mode && pathName.startsWith('/goschool')) {
  //       setOpen(mode === activeTab)
  //     }

  //     console.log(mode)
  //   }, [mode, pathName, router, activeTab])

  //   const onFileUploadClick = () => {
  //     window.location.href = '/fileupload'
  //   }

  //   const handleTabClick = (tab: string) => {
  //     setActiveTab(tab)
  //     useSearchParams().set('auth', tab)
  //     console.log(activeTab)
  //   }

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
            {/* THIS IS TESTING  */}
            <div className='flex flex-col'>
              <Button
                className={
                  activeTab === 'feedback'
                    ? 'active text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px] '
                    : 'text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
                }
                onClick={() => handleTabClick('feedback')}
              >
                HEY
              </Button>
              <p
                className={
                  activeTab === 'feedback'
                    ? 'bg-[#0D6EFD] h-[6px] rounded-[4px]  ease-in transition-all'
                    : ''
                }
              ></p>
            </div>

            <div className='flex flex-col'>
              <Button
                className={
                  activeTab === 'recommend'
                    ? 'active text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
                    : 'text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
                }
                onClick={() => handleTabClick('recommend')}
              >
                HELLO
              </Button>
              <p
                className={
                  activeTab === 'recommend'
                    ? 'bg-[#0D6EFD] h-[6px] rounded-[4px] ease-in transition-all'
                    : ''
                }
              ></p>
            </div>

            <div className='flex flex-col'>
              <Button
                className={
                  activeTab === 'bug'
                    ? 'active text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
                    : 'text-[#676E7E]  font-[500] text-[16px] leading-[24px] pb-[15px]'
                }
                onClick={() => handleTabClick('bug')}
              >
                HI
              </Button>
              <p
                className={
                  activeTab === 'bug'
                    ? 'bg-[#0D6EFD] h-[6px] rounded-[4px]  ease-in transition-all'
                    : ''
                }
              ></p>
            </div>

            {/* <Button className='bg-white hover:bg-white text-xs text-black border border-gray-300 gap-1'>
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
            </Button> */}
          </div>
          <>{mode === 'signup' && <SignupUI />}</>
        </div>
        <div className='w-1/2'>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  )
}
