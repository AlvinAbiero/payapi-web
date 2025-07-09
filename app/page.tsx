import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Proof from "./components/Proof";
import Image from 'next/image'
import bgCircle from '@/public/shared/desktop/bg-pattern-circle.svg'
import Product from "./components/Product";

export const metadata = {
  title: "Home / PayApi"
}

export default function Home() {
  return (
    <div className="relative">
      <header className='pt-4 md:pt-8 overflow-hidden md:min-h-screen min-h-[75vh]'>
       <Navbar/>
       <Hero/>
        <Image
            src={bgCircle}
            alt="circle"
            className="absolute -z-1 lg:-top-100 lg:-right-100  md:-top-200 sm:-top-150 -top-90 "
          />
      </header>
      <main>
        <Proof/>
        <Product/>
      </main>
      <Footer/>
    </div>
  );
}
