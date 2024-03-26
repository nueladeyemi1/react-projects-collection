import { useState } from 'react'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import Input from '../components/Input'

function Recommend() {
  const [disable, setDisable] = useState<boolean>(true)
  // const [active, setActive] = useState<boolean>(false)

  return (
    <>
      <div className='pl-[32px] pb-[64px] flex flex-col'>
        <p className=' mt-[16px] font-[500] text-[16px] leading-[24px]'>
          Help us Improve
        </p>
        <div className=' my-[32px]'>
          <Input
            type='text'
            disabled={true}
            className='w-[100%] bg-[#E4E7EC] border-[1px] border-[#98A2B3] rounded-[4px] p-[14px] font-[500] text-[16px] leading-[24px] text-[#98A2B3]'
            value='janedoe@gmail.com'
          />
        </div>
        <TextArea
          className='h-[217px] border-[#98A2B3] border-[1px] w-[912px] placeholder:p-[12px] placeholder:font-[500] placeholder:text-[16px] focus:border-[#98A2B3] focus:border-[1px] mb-[56px]'
          label='Brief description'
          id='recommend'
          name='recommend'
          placeholder='What functionality would improve your experience?'
        />

        <Button
          disabled={disable}
          className='self-end bg-[#0D6EFD] disabled:bg-[#E7F0FF] px-[24px] py-[8px] rounded-[4px] text-[#FFFFFF] disabled:text-[#98A2B3] font-[400] text-[14px] leading-[22px]'
          text='Submit'
        />
      </div>
      <div className='border-l-[1px] border-[#E4E7EC]'>
        <Input type='file' />
      </div>
    </>
  )
}

export default Recommend
