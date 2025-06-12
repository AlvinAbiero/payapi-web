import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
        <section className='grid grid-cols-2 gap-12 items-center max-w-144 mx-auto px-24 lg:grid-cols-1 lg:pb-40 lg:gap-0 md:px-16 sm:px-10'>
        <div className="flex flex-col gap-6 lg:items-center">
           <h1  className="text-police-blue font-serif text-7.2rem leading-7.2rem -tracking-0.0554rem pb-3 2xl:text-6.2rem xl:text-center lg:text-4.8rem lg:leading-5.6rem lg:-tracking-0.0369rem sm:text-3.2rem md:leading-3.6rem md:-tracking-0.0246rem">
            Start building with our APIs for absolutely free.
           </h1>
           <div
                class="flex items-center bg-white w-[44rem] rounded-[2.4rem] overflow-hidden shadow-lg sm:flex-col sm:bg-transparent sm:shadow-none sm:gap-7 sm:w-full"
              >
                <input
                  type="email"
                  placeholder="Enter email address"
                  class="py-6 px-11 w-59% border-none outline-none text-[1.5rem] placeholder:text-[1.5rem] sm:w-full sma:rounded-[2.4rem] sm:shadow-lg"
                />
                <a
                  href="#"
                  class="py-6 px-11 bg-irresistible rounded-[2.4rem] block text-[1.5rem] text-ghost-white leading-norm font-700 hover:bg-light-irresistible transition-all duration-300 sm:w-full sm:text-center"
                  >Schedule a Demo</a
                >
              </div>
               <p className="text-police-blue text-[1.5rem] leading-normal">
                Have any questions?
                <a href="/contact" className="font-700 underline">Contact Us</a>
              </p>
        </div>  
        </section>
         <Image
            src="assets/shared/desktop/bg-pattern-circle.svg"
            alt="circle"
            className="absolute -top-80 -right-20 xxlg:-right-48 xlg:-right-96 lag:-top-45rem lag:right-48 mlag:right-24 slag:right-0 slag:-top-52rem mid:-top-40rem sma:-top-30rem xsma:-top-80 -z-1"
          />
    </div>
  )
}

export default Hero