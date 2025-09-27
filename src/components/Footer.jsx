import React from 'react'

export default function Footer(){
  return (
    <footer className=" mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-lg sm:text-xl text-gray-400">&copy; {new Date().getFullYear()} dotworx. All rights reserved.</div>
        <div className="flex space-x-4 mt-3 md:mt-0 text-gray-400 text-lg sm:text-xl">
          {/* <a href="#" className="text-sm hover:underline">Twitter</a>
          <a href="#" className="text-sm hover:underline">LinkedIn</a>
          <a href="#" className="text-sm hover:underline">GitHub</a> */}
          <p>dotworx@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}
