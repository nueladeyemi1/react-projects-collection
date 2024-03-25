function TextArea() {
  return (
    <section className='flex flex-col gap-[10px]'>
      <label
        className='font-[400] text-[16px] leading-[24px]'
        htmlFor='comments'
      >
        Comments
      </label>

      <textarea
        className='h-[295px] border-[#98A2B3] border-[1px] w-[912px] placeholder:p-[12px] placeholder:font-[500] placeholder:text-[16px] focus:border-[#98A2B3] focus:border-[1px] mb-[56px]'
        id='comments'
        name='comments'
        placeholder='Tell us more (optional) '
      />
    </section>
  )
}

export default TextArea
