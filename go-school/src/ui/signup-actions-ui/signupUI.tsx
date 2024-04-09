import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export default function SignupUI() {
  const onMultiSignUpClick = () => {
    window.location.href = '/multisignup'
  }

  return (
    <>
      {' '}
      <div className='ml-[61px] mt-[30px]'>
        <div className='font-poppins lg:font-medium font-semibold text-2xl'>
          Create an Account
        </div>
        <div className='font-poppins font-medium text-sm text-gray-500 mt-1'>
          Create your GoSchool account and start <br></br> managing your school
          in minutes.
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
            <span className='text-sm font-medium text-black'>"Sign Up"</span>,
            you acknowledge and agree to the{' '}
            <span className='text-[#0D6EFD] font-medium'>
              {' '}
              Terms & <span className='ml-[25px]'> Conditions</span>
            </span>
            ,{' '}
            <span className='text-[#0D6EFD] font-medium'> Privacy Policy </span>
            , and{' '}
            <span className='text-[#0D6EFD] font-medium'> Cookie Policy.</span>
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
    </>
  )
}
