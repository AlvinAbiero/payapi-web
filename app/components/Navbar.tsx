"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../public/shared/desktop/logo.svg";
import close from "../../public/shared/mobile/close.svg";
import menu from "../../public/shared/mobile/menu.svg";

const navLinks = [
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full z-50">
      <div className="max-w-[120rem] mx-auto w-full space-x-24 md:p-16 p-12 flex items-center justify-between relative">
        <Link href="/">
          <Image
            src={logo}
            alt="PayApi Logo"
            width={130}
            height={80}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between w-full lg:text-3xl md:text-2xl text-xl font-semibold">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[1.5rem] leading-normal text-blue-600 font-[700] transition-all duration hover:text-blue-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href="#"
              className="py-6 px-11 bg-pink-500 rounded-[2.4rem] block text-[1.5rem] leading-normal text-white font-[700] hover:bg-pink-600 transition-all duration-300"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden block" onClick={() => setIsOpen(true)}>
          <Image
            src={menu}
            alt="Menu Icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      </div>
      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-blue-800 shadow-lg transform px-8 transition-transform duration-400 text-xl z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center text justify-end px-12 py-12">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src={close}
              alt="Close Icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </button>
        </div>
        <div className="flex flex-col space-y-12 md:text-3xl text-2xl px-8 md:px-24 py-12 border-t border-gray-700 items-center">
          {[...navLinks, { name: "Schedule a Demo", href: "#" }].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                link.name === "Schedule a Demo"
                  ? "bg-transparent hover:bg-pink-600 text-white hover:text-black px-4 py-3.5 border-white border-2 rounded-4xl text-center w-5/8"
                  : "text-white hover:text-black"
              } transition cursor-pointer`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
