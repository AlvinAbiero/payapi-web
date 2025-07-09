"use client"
import Link from "next/link";

import facebook from "../../public/shared/desktop/facebook.svg";
import twitter from "../../public/shared/desktop/twitter.svg";
import linkedin from "../../public/shared/desktop/linkedin.svg";
import logo from "../../public/shared/desktop/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-gunmetal w-full">
      <header className="py-12 lg:px-24 md:px-16 sm:px-10">
        <div className="flex items-center max-w-144 mx-auto md:px-16 md:flex-col md:gap-16 sm:px-10">
          <Link href="#">
            <Image src={logo} alt="logo" width={12} height={12} />
          </Link>
          <nav className="">
            <ul className="flex items-center gap-16 md:flex-col">
              <li>
                <Link
                  href="/pricing"
                  className="block text-[1.5rem] text-ghost-white opacity-70 leading-normal font-[700] hover:opacity-100 transition-all duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-[1.5rem] text-ghost-white opacity-70 leading-normal font-[700] hover:opacity-100 transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-[1.5rem] text-ghost-white opacity-70 leading-normal font-[700] hover:opacity-100 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-7 ml-auto md:ml-0">
            <Image
              className="fill-[#fff] w-10 h-10 hover:fill-[#da6d97] transition-all duration-300 cursor-pointer"
              src={facebook}
              alt=""
              width={10}
              height={10}
            />
            <Image
              className="fill-[#fff] w-10 h-10 hover:fill-[#da6d97] transition-all duration-300 cursor-pointer"
              src={twitter}
              alt=""
              width={10}
              height={10}
            />
            <Image
              className="fill-[#fff] w-10 h-10 hover:fill-[#da6d97] transition-all duration-300 cursor-pointer"
              src={linkedin}
              alt=""
              width={10}
              height={10}
            />
          </div>
        </div>
      </header>
    </footer>
  );
};

export default Footer;
