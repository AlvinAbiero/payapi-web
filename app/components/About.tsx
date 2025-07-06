import React from 'react'

const About = () => {
  return (
    <div>
      <section>
        <h2>
          We empower innovators by delivering access to the financial system
        </h2>
        <div className="flex flex-col lg:gap-24 gap-20">
          <div>
            <h3>Our Vision</h3>
            <p>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div>
            <h3>Our Business</h3>
            <p>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
      </section>
      <section className='relative lg:pb-24 pb-16'>

      </section>
    </div>
  );
}

export default About