import React from 'react'
import Cta from './Cta';
import Image from 'next/image';
// import bgCircle from '@/public/shared/desktop/bg-pattern-circle.svg';
import teamMembers from '@/public/about/desktop/image-team-members.jpg';

const About = () => {
  return (
    <div>
      <section className='max-w-176 lg:max-w-full mx-auto lg:px-60 md:px-24 px-16 flex flex-col lg:gap-24 gap-16 pb-40 lg:items-start items-center'>
        <h2 className='text-police-blue font-serif lg:text-[5rem] lg:leading-[5rem] max-w-6xl lg:text-left text-center md:text-[4.2rem] text-[3.2rem] leading-[3.6rem] pb-0'>
          We empower innovators by delivering access to the financial system
        </h2>
        <div className="flex flex-col lg:gap-24 gap-20">
          <div className="grid lg:grid-cols-[1fr_3fr] lg:gap-12 grid-cols-1 justify-items-center lg:items-start gap-4 text-center lg:text-left">
            <h3 className='text-police-blue lg:text-[3.2rem] lg:leading-[4rem] text-[2.4rem] leading-[3.2rem]'>Our Vision</h3>
            <p className='text-slate-gray text-[1.5rem] leading-[2.8rem]'>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className="grid lg:grid-cols-[1fr_3fr] lg:gap-12 grid-cols-1 justify-items-center lg:items-start gap-4 text-center lg:text-left">
            <h3 className='text-police-blue lg:text-[3.2rem] lg:leading-[4rem] text-[2.4rem] leading-[3.2rem]'>Our Business</h3>
            <p className='text-slate-gray text-[1.5rem] leading-[2.8rem]'>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
      </section>
      <section className='relative lg:pb-24 pb-16'>
          <div>
            <Image
              src={teamMembers}
              alt="Members"
              width={800} // Set appropriate width
              height={600} // Set appropriate height
              className="w-full"
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 100vw"
              priority // Add if this is above the fold
            />
          </div>
      </section>
      <section className='max-w-176 lg:max-w-full mx-auto lg:px-24 flex flex-col md:gap-24 gap-20 pb-44 md:px-16 px-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-12 text-center lg:text-left'>
          <div className='flex flex-col py-6 lg:border-y border-police-blue border-opacity-25 border-b-0'>
            <p className='text-slate-gray text-[1.6rem] leading-[2.8rem]'>Team Members</p>
            <p className='text-irresistible font-serif text-[5rem] leading-[7.2rem]'>300+</p>
          </div>
          <div className='flex flex-col py-6 lg:border-y border-police-blue border-opacity-25 border-y-0'>
            <p className='text-slate-gray text-[1.6rem] leading-[2.8rem]'>Offices in the US</p>
            <p className='text-irresistible font-serif text-[5rem] leading-[7.2rem]'>3</p>
          </div>
          <div className='flex flex-col py-6 lg:border-y  border-police-blue border-opacity-25 border-t-0'>
            <p className='text-slate-gray text-[1.6rem] leading-[2.8rem]'>Transactions analyzed</p>
            <p className='text-irresistible font-serif text-[5rem] leading-[7.2rem]'>10M+</p>
          </div> 
        </div>
        <div className="flex flex-col lg:gap-24 lg:px-60 md:px-24 px-0 gap-20">
          <div className="grid lg:grid-cols-[1fr_3fr] lg:gap-16 grid-cols-1 justify-items-center lg:items-start gap-4 text-center lg:text-left">
           <h3 className='text-police-blue lg:text-[3.2rem] lg:leading-[4rem] text-[2.4rem] leading-[3.2rem]'>The Culture</h3>
           <p className='text-slate-gray text-[1.5rem] leading-[2.8rem]'>
              We strongly believe there is always an opportunity to learn from each other outside of day-to-day work, whether it is company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.
          </p>
          </div>
          <div className="grid lg:grid-cols-[1fr_3fr] lg:gap-16 grid-cols-1 justify-items-center lg:items-start gap-4 text-center lg:text-left">
           <h3 className='text-police-blue lg:text-[3.2rem] lg:leading-[4rem] text-[2.4rem] leading-[3.2rem]'>The People</h3>
           <p className='text-slate-gray text-[1.5rem] leading-[2.8rem]'>
             We are all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.
          </p>
          </div>
        </div>
      </section>
        <Cta/>
    </div>
  );
}

export default About