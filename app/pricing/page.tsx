
import Pricing from "../components/Pricing"
import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import bgCircle from '@/public/shared/desktop/bg-pattern-circle.svg'

export const metadata = {
  title: 'Pricing / PayApi'
}

const PricingPage = () => {
  return (
      <div className="min-h-screen font-sans overflow-x-hidden font-sans font-[400] relative">
          <header className='pt-4 md:pt-8 overflow-hidden'>
           <Navbar/> 
           <Image
                src={bgCircle}
                alt="circle"
                className="absolute -z-1 lg:-top-220 lg:-right-50  md:-top-200 -top-140 -right-100"
                    />
          </header>
          <main>
            <Pricing/>
          </main>
          <Footer/>
        </div>
  )
}

export default PricingPage