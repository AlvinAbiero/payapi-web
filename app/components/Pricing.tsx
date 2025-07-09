"use client"
import iconCheck from '@/public/shared/desktop/icon-check.svg'
import Image from 'next/image'
import Link from 'next/link'
import Cta from './Cta'

const Pricing = () => {
  return (
    <section className='max-w-176 md:max-w-full w-full lg:px-24 md:px-16 px-8 flex flex-col md:gap-32 gap-16 py-24'>
      <h2 className='text-police-blue font-serif lg:text-[5.6rem] lg:leading-[5.6rem] text-[4.25rem] leading-[4.25rem]  text-center md:text-left'>Pricing</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20">
          <div className="flex flex-col gap-3">
            <h3 className='text-irresistible font-serif md:text-[3.2rem] md:leading-[4rem] text-[2.4rem] leading-[3rem] pb-3 text-center lg:text-left '>Free Plan</h3>
            <p className='text-police-blue text-[1.5rem] leading-[2.8rem] font-[500] text-center lg:text-left'>Build and test using our core set of products with up to 100 API requests</p>
            <p className='text-police-blue font-serif lg:text-[5.6rem] lg:leading-[7.2rem] text-center lg:text-left text-[3.5rem]'>$0.00</p>
            <div className='flex flex-col gap-3 py-9 border-y border-police-blue border-opacity-25 lg:px-20 items-center lg:items-start '>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Transactions</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Auth</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Identity</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' className='opacity-0'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] opacity-30'>Investments</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' className='opacity-0'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] opacity-30'>Assets</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' className='opacity-0'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] opacity-30'>Liabilities</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' className='opacity-0'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] opacity-30'>Income</p>
              </div>
            </div>
            <Link href='#' className='border border-police-blue text-police-blue text-[1.5rem] font-[700] leading-normal rounded-[2.4rem] py-6 px-11 lg:self-start hover:bg-police-blue transition-all duration-300 hover:text-ghost-white mt-6 self-center mb-20 lg:mb-10'>Request Access</Link>
          </div>
           <div className="flex flex-col gap-3">
            <h3 className='text-irresistible font-serif md:text-[3.2rem] md:leading-[4rem] text-[2.4rem] leading-[3rem] pb-3 text-center lg:text-left  '>Basic Plan</h3>
            <p className='text-police-blue text-[1.5rem] leading-[2.8rem] font-[500] text-center lg:text-left'>Launch your project with unlimited requests and no contractual minimums</p>
            <p className='text-police-blue font-serif lg:text-[5.6rem] lg:leading-[7.2rem] text-center lg:text-left text-[3.5rem]'>$249.00</p>
            <div className='flex flex-col gap-3 py-9 border-y border-police-blue border-opacity-25 lg:px-20 items-center lg:items-start'>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Transactions</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Auth</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Identity</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] '>Investments</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' />
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] '>Assets</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' className='opacity-0'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] opacity-30'>Liabilities</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' className='opacity-0'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] opacity-30'>Income</p>
              </div>
            </div>
            <Link href='#' className='border border-police-blue text-police-blue text-[1.5rem] font-[700] leading-normal rounded-[2.4rem] py-6 px-11 lg:self-start hover:bg-police-blue transition-all duration-300 hover:text-ghost-white mt-6 self-center mb-20 lg:mb-10'>Request Access</Link>
          </div>
           <div className="flex flex-col gap-3">
            <h3 className='text-irresistible font-serif md:text-[3.2rem] md:leading-[4rem] text-[2.4rem] leading-[3rem] pb-3 text-center lg:text-left '>Premium Plan</h3>
            <p className='text-police-blue text-[1.5rem] leading-[2.8rem] font-[500] text-center lg:text-left'>Get tailored solutions, volume pricing, and dedicated support for your team</p>
            <p className='text-police-blue font-serif lg:text-[5.6rem] lg:leading-[7.2rem] text-center lg:text-left text-[3.5rem]'>$499.00</p>
            <div className='flex flex-col gap-3 py-9 border-y border-police-blue border-opacity-25 lg:px-20 items-center lg:items-start'>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Transactions</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Auth</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check'/>
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem]'>Identity</p>
              </div>
              <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' />
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] '>Investments</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' />
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] '>Assets</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' />
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] '>Liabilities</p>
              </div>
               <div className='flex items-center gap-5 w-48'>
                  <Image src={iconCheck} alt='Icon Check' />
                  <p className='text-police-blue text-[1.6rem] leading-[2.5rem] '>Income</p>
              </div>
            </div>
            <Link href='#' className='border border-police-blue text-police-blue text-[1.5rem] font-[700] leading-normal rounded-[2.4rem] py-6 px-11 lg:self-start hover:bg-police-blue transition-all duration-300 hover:text-ghost-white mt-6 self-center mb-20 lg:mb-10'>Request Access</Link>
          </div>
      </div>
      <div className='w-full'>
        <Cta/>
      </div>  
    </section>
  )
}

export default Pricing