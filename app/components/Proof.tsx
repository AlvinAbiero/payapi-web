import tesla from '@/public/shared/desktop/tesla.svg'
import hp from '@/public/shared/desktop/hewlett-packard.svg'
import microsoft from '@/public/shared/desktop/microsoft.svg'
import oracle from '@/public/shared/desktop/oracle.svg'
import google from '@/public/shared/desktop/google.svg'
import nvidia from '@/public/shared/desktop/nvidia.svg'
import Image from 'next/image'
import Link from 'next/link'
import bgCircle from '@/public/shared/desktop/bg-pattern-circle.svg'

const Proof = () => {
  return (
    <section className='relative overflow-hidden bg-gray-800'>
        <div className='max-w-176 md:max-w-full mx-auto md:grid flex flex-col-reverse gap-x-24 items-center py-24 px-4 md:grid-cols-2 md:py-40 md:px-16 md:gap-y-0 gap-y-12'>
          
        <div className='text-center md:text-left flex flex-col gap-8 items-center md:items-start'>
           <h2 className='text-ghost-white font-serif md:text-[4.8rem] md:leading-[5.6rem] text-[3.2rem] leading-[3.6rem]'>Who we work with</h2> 
           <p className='text-slate-gray text-[1.5rem] leading-[2.8rem] pb-6 opacity-70'> Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
           <Link href='/about' className='text-ghost-white text-[1.5rem] font-[700] py-6 px-12 border border-ghost-white   rounded-full block hover:text-police-blue hover:bg-ghost-white transition-all duration-300'>About Us</Link>
        </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-12'>
            <Image src={tesla} alt='tesla' className='h-7 w-52 fill-white'/>
            <Image  src={microsoft} alt='microsoft' className='h-12 w-60 fill-white'/>
            <Image  src={hp} alt='hewlet-packard' className='h-11 w-56 fill-white'/>
            <Image  src={oracle} alt='oracle' className='h-7 w-52 fill-white'/>
            <Image  src={google} alt='google' className='h-14 w-40 fill-white'/>
            <Image  src={nvidia} alt='nvidia' className='h-11 w-56  fill-white'/>
        </div>
        </div>
        <Image
          src={bgCircle}
          alt="circle"
          className="absolute -top-100 lg:-top-130 lg:-left-100 md:-top-200 md:left-0 md:right-0"/>
    </section>
  )
}

export default Proof