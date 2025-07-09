"use client"
import implement from '@/public/home/desktop/illustration-easy-to-implement.svg'
import simple from '@/public/home/desktop/illustration-simple-ui.svg'
import finances from '@/public/home/desktop/icon-personal-finances.svg'
import banking from '@/public/home/desktop/icon-banking-and-coverage.svg'
import consumer from '@/public/home/desktop/icon-consumer-payments.svg'
import Image from 'next/image'
import Cta from './Cta'


const Product = () => {
  return (
    <section>
        <div className='max-w-176 md:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 items-center pb-32 px-16'>
         <div>
            <Image src={implement} alt='implement'/>
         </div>
         <div className='flex flex-col gap-10 text-center md:text-left items-center md:items-start'>
            <h2 className='font-serif text-police-blue lg:text-[4.8rem] lg:leading-[5.6rem] text-[3.6rem] leading-[3.6rem]'>Easy to implement</h2>
            <p className='text-slate-gray md:text-[1.5rem] md:leading-[2.8rem] text-[1.4rem] leading-[2.5rem] lg:pr-16'> Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
         </div>
        </div>
        <div className='max-w-176 md:max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-24 items-center pb-32 px-16'>
            <div className='flex flex-col gap-10 text-center md:text-left items-center md:items-start'>
             <h2 className='font-serif text-police-blue lg:text-[4.8rem] lg:leading-[5.6rem] text-[3.6rem] leading-[3.6rem]'>Simple UI & UX</h2>
             <p className='text-slate-gray md:text-[1.5rem] md:leading-[2.8rem] text-[1.4rem] leading-[2.5rem] lg:pr-16'>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.</p>
            </div>
            <div>
                <Image src={simple} alt='simple ui ux'/>
            </div>
        </div>
        <div className='max-w-176 md:max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-24 items-center pb-32 px-16 md:gap-y-0 gap-y-24'>
            <div className='flex flex-col gap-8 text-center items-center'>
                <Image src={finances} alt='personal finances'/>
                <h3 className='text-police-blue text-[1.8rem] font-bold leading-[2.5rem]'>Personal Finances</h3>
                <p className='text-slate-gray md:text-[1.5rem] md:leading-[2.8rem] text-[1.4rem] leading-[2.5rem] '>
                    Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.
                </p>
            </div>
            <div className='flex flex-col gap-8 text-center items-center'>
                <Image src={banking} alt='banking and coverage'/>
                <h3 className='text-police-blue text-[1.8rem] font-bold leading-[2.5rem]'>Banking & Coverage</h3>
                <p className='text-slate-gray md:text-[1.5rem] md:leading-[2.8rem] text-[1.4rem] leading-[2.5rem] '>
                    With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.
                </p>
            </div>
            <div className='flex flex-col gap-8 text-center items-center'>
                <Image src={consumer} alt='consumer payments'/>
                <h3 className='text-police-blue text-[1.8rem] font-bold leading-[2.5rem]'>Consumer Payments</h3>
                <p className='text-slate-gray md:text-[1.5rem] md:leading-[2.8rem] text-[1.4rem] leading-[2.5rem] '>
                  It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.
                </p>
            </div>
        </div>
        <Cta/>
    </section>
  )
}

export default Product