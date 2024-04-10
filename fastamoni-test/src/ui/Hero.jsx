import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='bg-[#4F4646] text-[#FCFCFC]'>
      <p className='pl-[240px] pt-[68px]  font-[500] text-[20px] leading-[33px] tracking-[-0.04px]'>
        {`Welcome to Codeshaper`.toUpperCase()}
      </p>
      <div className='w-[720px] pl-[221px] pt-[50px] font-[700] text-[60px] leading-[70px] tracking-[-0.03px]'>
        {`Consulting For Every Business`.toUpperCase()}
      </div>
      <Button
        className='ml-[221px] mt-[32px] mb-[150px] bg-[#3C72FC] hover:bg-[#5280f6] px-[12px] py-[12px] font-[500] text-[18px] leading-[23px] tracking-[0.61px]'
        text='DISCOVER MORE'
      />
    </section>
  )
}

export default Hero
