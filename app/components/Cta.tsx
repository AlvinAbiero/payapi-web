import React from 'react'
import Link from 'next/link'

const Cta = () => {
  return (
    <div className='max-w-176 md:max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center pb-32 px-16 gap-12'>
        <h1 className='text-police-blue text-center lg:text-left font-[500] font-serif text-[2.85rem] leading-[3.5rem] md:text-[3.75rem] md:leading-[5rem]  lg:text-[4.75rem] lg:leading-[6rem] xl:text-[5.5rem] xl:leading-[7rem]'>Ready to start?</h1>
        {/* form */}
        <div className='flex flex-col items-center gap-4 m-4 lg:flex-row lg:gap-0 lg:bg-white lg:shadow-none rounded-[2.8rem] overflow-hidden lg:w-[44rem] w-full lg:pr-2'>
          <input type="email" name="email" placeholder='Enter email address' className="py-6 lg:py-8 px-11  bg-white lg:w-[59%] border-none outline-none text-[1.25rem] placeholder:text-[1.35rem] w-full lg:rounded-[0] rounded-[2.4rem]"/>
            <Link href='#' className="lg:py-6 py-6 px-11 bg-irresistible rounded-[2.4rem] lg:block text-[1.35rem] text-white leading-normal font-[700] hover:bg-light-irresistible transition-all duration-300  text-center shadow-lg w-full lg:w-[41%]">
            Schedule A Demo
            </Link>
          
        </div>
     
    </div>
  )
}

export default Cta