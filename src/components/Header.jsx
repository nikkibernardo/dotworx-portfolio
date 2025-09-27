import React from 'react'
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
          <nav className="space-x-4 hidden md:flex">
            <a href="#home" className="py-2 px-3 hover:underline">Home</a>
            <a href="#about" className="py-2 px-3 hover:underline">About</a>
            <a href="#services" className="py-2 px-3 hover:underline">Services</a>
            <a href="#projects" className="py-2 px-3 hover:underline">Projects</a>
            {/* <a href="#contact" className="py-2 px-3 hover:underline">Contact</a> */}
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
            {/* <a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-3 hover:bg-gray-700">Contact</a> */}
          </div>
        </div>
      )}
    </div>
  )
}
