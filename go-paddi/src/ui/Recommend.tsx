import { useState, ChangeEvent, DragEvent } from 'react'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import { MdOutlineFileDownload, MdOutlineDelete } from 'react-icons/md'
import { PiFilePng } from 'react-icons/pi'
import { PiFileJpg } from 'react-icons/pi'

function Recommend() {
  const [disable, setDisable] = useState<boolean>(true)

  const [files, setFiles] = useState<FileList | null>(null)
  const [status, setStatus] = useState<
    'initial' | 'uploading' | 'success' | 'fail'
  >('initial')

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setStatus('initial')
      setFiles(e.target.files)
    }
  }

  const handleDragOver = (event: DragEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log(event)
  }

  const handleDrop = (event: DragEvent<HTMLInputElement>) => {
    event.preventDefault()
    console.log(event)
  }

  const handleUpload = async () => {
    if (files) {
      setStatus('uploading')

      const formData = new FormData()
      ;[...files].forEach((file) => {
        formData.append('files', file)
      })

      try {
        const result = await fetch('https://x.org/post', {
          method: 'POST',
          body: formData,
        })

        const data = await result.json()

        console.log(data)
        setStatus('success')
      } catch (error) {
        console.error(error)
        setStatus('fail')
      }
    }
  }

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
          className='h-[217px] rounded-[4px] border-[#98A2B3] border-[1px] w-[912px] placeholder:p-[12px] placeholder:font-[500] placeholder:text-[16px] focus:border-[#98A2B3] focus:border-[1px] mb-[28px]'
          label='Brief description'
          id='recommend'
          name='recommend'
          placeholder='What functionality would improve your experience?'
        />
        <div className='flex gap-[24px] mb-[28px]'>
          <Select
            className='p-[14px] border-[#98A2B3] border-[1px] rounded-[4px]'
            content={['ahahhah', 'jahjjahjha']}
            label='Category'
          />
          <Select
            className='p-[14px] border-[#98A2B3] border-[1px] rounded-[4px]'
            content={['ahahhah', 'jahjjahjha']}
            label='Priority'
          />
        </div>
        <Button
          disabled={disable}
          className='self-end bg-[#0D6EFD] disabled:bg-[#E7F0FF] px-[24px] py-[8px] rounded-[4px] text-[#FFFFFF] disabled:text-[#98A2B3] font-[400] text-[14px] leading-[22px]'
          text='Submit'
        />
      </div>
      <div className='border-l-[1px] border-[#E4E7EC]'>
        <div className='flex flex-col gap-[16px]  m-[40px]'>
          <label
            className='font-[400] text-[16px] leading-[24px]'
            htmlFor='Upload Media'
          >
            Upload Media
          </label>
          <div
            draggable='true'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className='border-[#D0D5DD] border-[1.5px] border-dashed rounded-[4px] w-[318px] h-[350px] flex flex-col gap-[16px] items-center justify-center'
          >
            <img src='./icon/fileUploadStates.svg' />
            <div
              draggable='true'
              className='flex flex-col items-center justify-center'
            >
              <p className=' font-[500] text-[14px] leading-[22px] text-[#676E7E]'>
                Drag and drop files
              </p>
              <p className='font-[400] text-[12px] leading-[22px] text-[#98A2B3]'>
                JPG, PNG (max. 800x400px)
              </p>
            </div>
            <div draggable='true' className='flex items-center justify-center'>
              <hr className='h-[1px] w-[130px] bg-[#676E7E] text-[#676E7E] mr-[8px]' />
              <p className='font-[500] text-[12px] leading-[22px] text-[#676E7E]'>
                or
              </p>
              <hr className='h-[1px] w-[130px] bg-[#676E7E] text-[#676E7E] ml-[8px]' />
            </div>
            <label className='bg-[#0D6EFD] cursor-pointer disabled:bg-[#E7F0FF] px-[24px] py-[8px] rounded-[4px] text-[#FFFFFF] disabled:text-[#98A2B3] font-[400] text-[14px] leading-[22px]'>
              Browse Files{' '}
              <input
                onChange={handleFileChange}
                type='file'
                accept='image/png, image/jpeg'
                className='hidden'
                multiple
              />
            </label>
          </div>
          {files &&
            [...files].map((file) => (
              <div
                className='flex flex-col gap-[8px] border-[1px] border-[#E4E7EC] px-[14px] py-[18px] rounded-[4px]'
                key={file.name}
              >
                <div>
                  <div className='flex items-center justify-between'>
                    <div className='flex gap-[8px] items-center justify-center'>
                      {file.type.split('/')[1] === 'png' ? (
                        <PiFilePng size={42} />
                      ) : (
                        <PiFileJpg size={32} />
                      )}

                      <div>
                        <p className='text-[#1D2433] font-[500] text-[16px] leading-[24px]'>
                          {file.name}
                        </p>
                        <p className='text-[#676E7E] font-[500] text-[16px] leading-[24px]'>
                          {Math.floor(file.size / 1000)}/
                          {Math.floor(file.size / 1000)}
                          KB
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center justify-start gap-[8px]'>
                      <MdOutlineFileDownload
                        className='cursor-pointer'
                        size={20}
                      />
                      <MdOutlineDelete
                        // onClick={}
                        className='cursor-pointer'
                        size={20}
                      />
                    </div>
                  </div>
                </div>
                <p className='bg-[#0D6EFD] h-[12px] rounded-[32px]'></p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Recommend
