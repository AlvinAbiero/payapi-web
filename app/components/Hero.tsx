import Image from 'next/image'
import Link from 'next/link'


import phoneMockup from '@/public/home/desktop/illustration-phone-mockup.svg'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse px-8 pb-16 items-center lg:grid lg:grid-cols-2 min-h-screen'>
       {/* CTA */}
       <div className='text-center lg:text-left px-8'>
        <h1 className='text-police-blue text-center lg:text-left font-bold font-serif text-[2.85rem] leading-[3.5rem] md:text-[3.75rem] md:leading-[5rem]  lg:text-[4.75rem] lg:leading-[6rem] xl:text-[5.5rem] xl:leading-[7rem]'>Start building with our APIs for absolutely free.</h1>
        {/* form */}
        <div className='flex flex-col items-center gap-4 m-4 lg:flex-row lg:gap-0 lg:bg-white lg:shadow-none rounded-[2.4rem] overflow-hidden lg:w-[44rem] w-full'>
          <input type="email" name="email" placeholder='Enter email address' className="py-6 px-11 lg:bg-transparent bg-ghost-white lg:w-[59%] border-none outline-none text-[1.25rem] placeholder:text-[1.35rem] w-full lg:rounded-[0] rounded-[2.4rem]"/>
            <Link href='#' className="py-6 px-11 bbg-irresistible rounded-[2.4rem] lg:block text-[1.35rem] text-white leading-normal font-[700] hover:bg-light-irresistible transition-all duration-300  text-center shadow-lg w-full lg:w-[41%]">
            Schedule A Demo
            </Link>
          
        </div>
        {/* contact us */}
         <p className="text-police-blue text-[1.5rem] leading-normal">
                Have any questions?
          <Link href="/contact" className="font-[700] underline">Contact Us</Link>
        </p>
       </div>
         {/* phone mockup */}
       <div className='relative'>
        <Image src={phoneMockup} alt="phone mockup" className='z-1 lg:scale-[0.9] md:scale-[0.8] scale-[0.7]'/>
       </div>
    </div>
  )
}

export default Hero