
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import bgCircle from '@/public/shared/desktop/bg-pattern-circle.svg'
import Contact from '../components/Contact'

export const metadata = {
  title: 'Contact / PayApi'
}

const ContactPage = () => {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden  font-[400] relative">
          <header className='pt-4 md:pt-8 overflow-hidden'>
           <Navbar/> 
           <Image
                src={bgCircle}
                alt="circle"
                className="absolute -z-1 lg:-top-220 lg:-right-50  md:-top-200 -top-140 -right-100"
                    />
          </header>
          <main>
            <Contact/>
            
          </main>
          <Footer/>
        </div>
  )
}

export default ContactPage