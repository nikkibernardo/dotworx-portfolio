import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import LogoLoop from '../components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiBootstrap, SiGithub, SiFigma, SiPhp, SiLaravel, SiMysql, SiExpress, SiKotlin, SiPostgresql, SiMongodb, SiSwift, SiDjango, SiSvelte, } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com/" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
  { node: <SiGithub />, title: "Github", href: "https://github.com/" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com/" },
  { node: <SiPhp />, title: "PHP", href: "https://php.net/" },
  { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <FaNodeJs />, title: "NodeJS", href: "https://nodejs.org/en" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com/" },
  { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org/" },
  { node: <SiPostgresql />, title: "Postgre", href: "https://www.postgresql.org/" },
  { node: <SiMongodb />, title: "Laravel", href: "https://www.mongodb.com//" },
  { node: <SiSwift />, title: "Swift", href: "https://www.swift.org/" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com/" },
  { node: <SiSvelte />, title: "Svelte", href: "https://svelte.dev/" },
];

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto text-left">
        <div className='grid grid-cols-1 sm:grid-cols-5 gap-8 mb-32'>
          <div className='col-span-2'>
            <h2 className="text-4xl sm:text-5xl leading-tight">how we do the work at dotworx</h2>
          </div>
          
          <div className='col-span-3'>
            <FaQuoteLeft />
            <p className="mt-10 text-lg sm:text-xl text-gray-400">
            At Dotworx, we’re a bunch of fresh IT graduates who are constantly debugging both life and code. What drives us is the belief that every problem—whether technical or business—can be turned into an opportunity with the right approach. <br /> <br />

            We focus on building modern, scalable web applications with an emphasis on responsive design and user experience, ensuring that every solution we deliver works seamlessly across devices and feels intuitive to end users. <br /> <br />
            
            We don’t just write code—we build solutions that help brands and businesses grow in the digital era.
            </p>
          </div>
        </div>

      </div>
      <div className="max-w-full">
        <div style={{ height: '80px', position: 'relative', overflow: 'hidden'}}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="right"
            logoHeight={56}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  )
}
