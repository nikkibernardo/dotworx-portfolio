import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'
import CTA from './sections/CTA'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col font-sans-serif">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Services />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
