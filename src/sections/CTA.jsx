import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { IoCopy } from 'react-icons/io5'

export default function CTA(){
  
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-4xl sm:text-5xl leading-tight">
          we’ve shared our vision. <br />
          now, let’s build yours.
        </h2>

        <div className="mt-12 flex-row justify-left gap-4">
          <div className="inline-flex items-center">
            <a href="#" className="relative flex items-center gap-2 px-5 py-3 border-2 border-gray-500 text-gray-300 rounded-2xl text-lg sm:text-xl group overflow-hidden transition-all duration-500 ease-out">
              {/* Smooth background fill from bottom right */}
              <div className="absolute inset-0 bg-[#C4B5FD] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl"></div>
              
              {/* Content */}
              <a href="https://cal.com/dotworxxx/30min" target="_blank" rel="noopener noreferrer"  className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                schedule a free consultation
                <GoArrowUpRight size={30} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"/>
              </a>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
