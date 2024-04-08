// Multisignup.tsx
import { FC } from 'react'
import logo from '@/assets/images/logo.png'
import multisignup from '@/assets/images/multisignup.png'
import { Button } from '@/components/ui/button'
import { CloudArrowUp, CheckCircle } from '@phosphor-icons/react'
import '../globals.css'

const FileUpload: React.FC = () => {
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
  const onverificationClick = () => {
    window.location.href = '/SignupVerification'
  }
  return (
    <div>
      <div className='flex h-screen'>
        <div className='w-1/2 h-screen'>
          <div className='flex items-center justify-between mt-[37px] '>
            <div className='pl-[55px]'>
              <img
                alt=''
                //   src={logo}
                src=''
                className='w-10 ml'
              />
            </div>
            <div className='font-poppins font-medium text-base text-gray-500 pr-[55px]'>
              Made an error?
              <button className=' text-[#0D6EFD] ml-1'>Go Back</button>
            </div>
          </div>
          <div className='ml-[61px] flex mt-[25px] '>
            <Button className='bg-white round  hover:bg-white text-xs h-8 text-[#0D6EFD]  border border-gray-300 gap-1'>
              <span className=''>
                <CheckCircle
                  size={12}
                  className='bg-[#0D6EFD]  rounded-full text-white'
                />
              </span>
              Sign Up
            </Button>

            <Button className='round hover:bg-white font-medium text-xs h-8 text-[#0D6EFD]  border bg-[#F7F9FC] border-gray-300 gap-1'>
              <span className=''>
                <CheckCircle
                  size={12}
                  className='bg-[#0D6EFD]  rounded-full text-white'
                />
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
          <div className='ml-[61px] mt-[30px]'>
            <div className='font-poppins lg:font-medium font-semibold text-2xl'>
              Upload Documents
            </div>
            <div className=' font-poppins font-medium text-xs text-gray-500 mt-3'>
              Upload all required documents to verify the <br></br> school
              details provided
            </div>
          </div>
          <div className=' ml-[60px] font-poppins font-medium text-xs text-gray-500 mt-[35px]'>
            School Registration Certificate
          </div>

          <div className='flex items-center justify-center mt-2 ml-[58px] h-[200px] w-[630px] p-4 border-2 border-dashed border-[#D0D5DD]'>
            <div className='flex flex-col items-center'>
              <div className='w-12 h-12 rounded-full bg-blue-100 mb-1 flex items-center justify-center'>
                <CloudArrowUp className='w-6 h-6 text-[#0D6EFD]' />
              </div>
              <div className='font-poppins text-[#676E7E] text-sm'>
                Drag and drop files
              </div>
              <div className='flex items-center'>
                <div className='flex-1 w-[520px] border-t border-solid'></div>
                <div className='mx-4'>or</div>
                <div className='flex-1 border-t border-solid'></div>
              </div>

              <input
                id='fileInput'
                type='file'
                className='hidden'
                onChange={handleGalleryOpen}
              />
              <Button
                variant='secondary'
                className='mt-4  bg-[#0D6EFD] h-8 hover:bg-[#0D6EFD]'
                onClick={handleFileInput}
              >
                <span className='font-poppins w-24 text-sm font-medium text-[#FFFFFF]'>
                  Browse File
                </span>
              </Button>
            </div>
          </div>
          <Button
            variant='secondary'
            className='mt-[40px] w-[610px] ml-[54px] bg-[#0D6EFD]  hover:bg-[#0D6EFD]'
          >
            <span
              className='font-poppins text-sm font-medium text-[#FFFFFF]'
              onClick={onverificationClick}
            >
              Submit for verification
            </span>
          </Button>

          <div
            className='font-medium text-[#676E7E] text-base  ml-[50px] absolute bottom-8
          '
          >
            <div>{'\u00A9'}2024  Gopaddi. All rights reserved</div>
          </div>
        </div>
        <div className='w-1/2'>
          <div>
            <img
              alt=''
              // src={multisignup}
              src=''
              className='w-[770px] h-screen'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileUpload
