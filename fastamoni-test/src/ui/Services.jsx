import { Link } from 'react-router-dom'

const data = [
  {
    id: 1,
    title: 'WEALTH MANAGEMENT',
    link: 'READ MORE',
  },
  {
    id: 2,
    title: 'WEALTH MANAGEMENT',
    link: 'READ MORE',
  },
  {
    id: 3,
    title: 'WEALTH MANAGEMENT',
    link: 'READ MORE',
  },
]

const Services = () => {
  return (
    <section className='bg-[#0F0D1D] flex flex-col items-center p-[120px]'>
      <p className='font-[600] text-[#FFFFFF] text-[50px] leading-[60px] tracking-[-0.02px] mb-[24px]'>
        REAL-WORLD EXPERIENCE
      </p>
      <p className='font-[600] text-[#726F84] text-[18px] leading-[0] tracking-[0.14px]'>
        The best business consulting firm you can count on!
      </p>
      <div className='flex gap-[24px]'>
        {data.map((content) => {
          const { id, title, link } = content

          return (
            <div className='bg-[#000000] flex items-center justify-center p-[50px] gap-[72px] mt-[80px]'>
              <div>
                <p className='font-[500] mb-[24px] w-[150px] text-[#FFFFFF] text-[24px] leading-[35px] tracking-[-0.05px]'>
                  {title}
                </p>
                <Link className='font-[500] text-[#8F8DA0] text-[12px] leading-[34px] tracking-[-0.02px]'>
                  {link}
                </Link>
              </div>
              <img className='self-end mt-[96px]' src='./bitbucket.svg' />
            </div>
          )
        })}
      </div>
      <div className='flex items-center justify-center mt-[80px]'>
        <hr className='h-[0.1px] w-[530px] bg-[rgba(50,48,61,0.01)] text-[rgba(50,48,61,0.01)] mr-[8px]' />
        <p className='font-[500] text-[16px] leading-[28px] text-[#676E7E]'>
          MEET THE PARTNERS
        </p>
        <hr className='h-[0.1px] w-[530px] bg-[rgba(50,48,61,0.01)] text-[rgba(50,48,61,0.01)] ml-[8px]' />
      </div>
      <div className='flex justify-between mt-[80px]'>
        <div className='bg-[rgba(77,124,242,0.17)] cursor-pointer border-[1px] border-[rgba(60,114,252,0.3)] w-[47px] h-[47px] flex justify-center items-center'>
          <img src='./arrow-left.svg' />
        </div>
        <div className='bg-[rgba(77,124,242,0.17)] cursor-pointer border-[1px] border-[rgba(60,114,252,0.3)] w-[47px] h-[47px] flex justify-center items-center'>
          <img src='./arrow-right.svg' />
        </div>
      </div>
    </section>
  )
}

export default Services
