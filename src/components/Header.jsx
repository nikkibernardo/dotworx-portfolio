import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  return (
    <header className="text-white sticky top-0 z-30 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-3xl font-semibold">
            <span className="text-white"><span className='text-[#818CF8]'>.</span> dotworx</span>
          </div>

          {/* Desktop Nav */}
          <nav className="space-x-4 hidden md:flex items-center">
            <a href="#home" className="py-2 px-3 hover:underline">Home</a>
            <a href="#about" className="py-2 px-3 hover:underline">About</a>
            <a href="#services" className="py-2 px-3 hover:underline">Services</a>
            <a href="#projects" className="py-2 px-3 hover:underline ">Projects</a>
            <a href="#" className="relative flex items-center gap-2 px-3 py-1.5 border-2 border-gray-500 text-gray-300 rounded-2xl text-md sm:text-lg group overflow-hidden transition-all duration-500 ease-out">
              {/* Smooth background fill from bottom right */}
              <div className="absolute inset-0 bg-[#C4B5FD] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl"></div>
              {/* Content */}
              <a href="https://cal.com/dotworxxx/30min" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center gap-1 transition-colors duration-300 group-hover:text-black">
                Book a call
                <GoArrowUpRight size={24} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"/>
              </a>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="menu"
        className="p-2 rounded-md focus:outline-none"
      >
        {open ? <IoClose size={28} /> : <IoMenu size={28} />}
      </button>

      {/* Dropdown menu - Updated for full width */}
      {open && (
        <div className="fixed left-0 top-16 w-full bg-black shadow-lg py-2">
          <div className="container px-4 text-left">
            <a href="#home" onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-gray-700 border-b border-gray-800">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-gray-700 border-b border-gray-800">About</a>
            <a href="#services" onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-gray-700 border-b border-gray-800">Services</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-gray-700 border-b border-gray-800">Projects</a>
            <a href="#" className="relative flex items-center gap-2 px-3 py-1.5 border-2 border-gray-500 text-gray-300 rounded-2xl text-md sm:text-lg group overflow-hidden transition-all duration-500 ease-out">
              {/* Smooth background fill from bottom right */}
              <div className="absolute inset-0 bg-[#C4B5FD] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl"></div>
              {/* Content */}
              <a href="https://cal.com/dotworxxx/30min" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center gap-1 transition-colors duration-300 group-hover:text-black">
                Book a call
                <GoArrowUpRight size={24} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"/>
              </a>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
