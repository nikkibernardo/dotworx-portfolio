import React, { useState, useEffect } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

export default function Hero(){
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const textList = [
    "UI/UX Design",
    "Website Development", 
    "Application Dev",
    "Graphic Design",
    "Webflow Development",
    "Product Development",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [textList.length]);

   const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('dotworx@gmail.com');
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'dotworx@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <section id="home" className="py-24">
      <div className="max-w-6xl mx-auto text-left">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
          <h1 className="text-4xl sm:text-6xl leading-tight">we dotworx <br/>ideas into reality</h1>
          <div className="inline-flex items-baseline">
            <span className="bg-[#C4B5FD] text-gray-800 px-4 py-1.5 rounded-2xl font-semibold shadow-lg transition-all duration-500 transform hover:scale-105">
              {textList[currentIndex]}
            </span>
          </div>
        </div>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">We empower brands with innovative tech solutions that drive growth and efficiency—building <br/>scalable, future-ready systems that transform challenges into opportunities.</p>
        
        <div className="mt-12 flex-col justify-left gap-4">
          <div className="inline-flex items-center">
            <a href="#" className="relative flex items-center gap-2 px-5 py-3 border-2 border-gray-500 text-gray-300 rounded-2xl text-lg sm:text-xl group overflow-hidden transition-all duration-500 ease-out">
              {/* Smooth background fill from bottom right */}
              <div className="absolute inset-0 bg-[#C4B5FD] transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl"></div>
              
              {/* Content */}
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                schedule a free consultation
                <GoArrowUpRight size={30} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"/>
              </span>
            </a>
          </div>
          
          <div className="mt-5">
            <p className='text-gray-400 flex flex-col sm:flex-row items-left gap-2 text-left sm:text-left text-lg sm:text-xl'>
              <span>or send as an email at</span>
              <span className="flex items-center gap-2 text-white">
                <IoIosArrowRoundForward className="hidden sm:block" />
                <IoIosArrowRoundForward className="sm:hidden transform rotate-90" />
                dotworx@gmail.com
                <button 
                  onClick={copyEmail}
                  className="p-1 rounded transition-colors"
                  aria-label="Copy email"
                >
                  <IoCopy color='#C4B5FD' size={18} className="sm:size-auto"/>
                </button>
              </span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
