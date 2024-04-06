'use client'

import { useState } from 'react'
// import logo from '@/assets/images/logo.png'
// import signin from '@/assets/images/signin.png'
import signin from '../../assets/images/signin.png'
import logo from '../../assets/images/logo.png'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import '../globals.css'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSignIn = () => {
    // Basic validation
    if (!email) {
      setEmailError('Email is required')
      return
    } else {
      setEmailError('')
    }

    if (!password) {
      setPasswordError('Password is required')
      return
    } else {
      setPasswordError('')
    }

    // const  = () => {
    sessionStorage.setItem('user', email)
    window.location.href = '/'
    // };

    // Call the sign-in function if validation passes
    // onSignIn();
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const onSignUpClick = () => {
    window.location.href = '/Siginup'
  }

  return (
    <div>
      <div className='flex'>
        <div className='w-1/2 h-[100vh]'>
          <div className='flex items-center justify-between mt-[37px] '>
            <div className='pl-[55px]'>
              <img
                alt=''
                //   src={logo as string}
                src='../../assets/images/logo.png'
                className='w-10 ml'
              />
            </div>
            <div className='font-poppins font-medium text-base text-gray-500 pr-[55px]'>
              Are you new to GoSchool?
              <button className=' text-[#0D6EFD] ml-1' onClick={onSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>

          <div className=' mt-[50px] ml-[50px]'>
            <div className='font-poppins lg:font-medium font-semibold text-2xl'>
              Log in.
            </div>
            <div className='font-poppins lg:font-medium font-semibold text-2xl'>
              Welcome back!
            </div>
            <div className='font-poppins font-medium text-sm text-gray-500 mt-2'>
              Ready to take control? Sign in to your Goschool account.
            </div>
            <div className='mt-5 pt-3'>
              <Label
                htmlFor='terms'
                className='font-poppins text-sm  text-[#1D2433] '
              >
                Email
              </Label>
              <Input
                type='email'
                placeholder='Your@email.com'
                className='w-[640px] h-12 mt-1 rounded-none border-zinc-300 outline-none'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className='text-red-500'>{emailError}</div>}
            </div>
            <div className='mt-5'>
              <Label
                htmlFor='terms'
                className=' font-poppins text-sm text-[#1D2433]'
              >
                Password
              </Label>
              <div className='relative'>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='w-[640px] h-12 mt-1 border-zinc-300 pr-10 relative rounded-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus={false}
                />

                <button
                  type='button'
                  className='absolute inset-y-0 right-14  mr-3 flex items-center px-3'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeSlash /> : <Eye />}
                </button>
              </div>

              {passwordError && (
                <div className='text-red-500'>{passwordError}</div>
              )}
            </div>
            <div className='flex mt-5 w-[640px] items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <Checkbox id='terms' />
                <label
                  htmlFor='terms'
                  className='text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                  Keep me logged in
                </label>
              </div>
              <a
                href='#'
                className='text-blue-500 text-sm font-medium underline'
              >
                Forgot Password?
              </a>
            </div>
            <Button
              variant='secondary'
              className='mt-[30px] w-[640px]'
              onClick={handleSignIn}
            >
              <span className='font-poppins text-sm font-medium text-gray-400 '>
                Login
              </span>
            </Button>
          </div>
          <div className='font-medium text-[#676E7E] text-base mb-[30px] ml-[50px] absolute bottom-0'>
            <div>
              {'\u00A9'}
              {new Date(Date.now()).getFullYear()}  GoSchool. All rights
              reserved
            </div>
          </div>
        </div>
        <div className='w-1/2 h-[100vh]'>
          <img
            alt=''
            //   src={signin as string}
            src='./assets/images/signin.png'
            className='w-auto h-auto'
          />
        </div>
      </div>
    </div>
  )
}
export default Signin
