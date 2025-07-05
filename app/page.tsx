import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Proof from "./components/Proof";
import Image from 'next/image'
import bgCircle from '@/public/shared/desktop/bg-pattern-circle.svg'
import Product from "./components/Product";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className='relative pt-4 md:pt-8 overflow-hidden'>
       <Navbar/>
       <Hero/>
        <Image
            src={bgCircle}
            alt="circle"
            className="absolute -z-1 lg:-top-100 lg:-right-100  md:-top-200 sm:-top-150 -top-120 "
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
