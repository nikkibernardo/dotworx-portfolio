import React from 'react'
import ProjectCard from '../components/ProjectCard'
import pic2 from '../assets/pic2.png'
import niyoghub from '../assets/niyoghub.png'
import cps from '../assets/cps.png'
import filheim from '../assets/filheim.png'
import sycip from '../assets/sycip.png'
import dotworx from '../assets/dotworx.png'

export default function Projects(){
  const projects = [
    {
      id: 1,
      image: niyoghub,
      title: "NiyogHub",
      description: "A web and mobile application designed to connect coconut farmers in Quezon Province with the Philippine Coconut Authority (PCA), leveraging AI to enhance communication, support, and promote sustainable growth in the coconut agriculture sector",
      demoLink: "https://niyoghub.com/",
      githubLink: "https://github.com/nikkibernardo/niyoghub-webuser-frontend",
      technologies: ["React","React Native", "Node.js", "MongoDB", "Express", "OpenAI", "Roboflow", "Socket.io",  "JWT", "Passport.js", "Cookie-parser",  "Google Maps API", "Leaflet"]
    },
    {
      id: 2,
      image: cps,
      title: "Corporate Planning System",
      description: "CPS is a secure, AI-powered platform for corporate planning and performance monitoring. It enables organizations to create strategic plans, track goals, and generate data-driven insights with role-based access for accountability.",
      demoLink: "https://portal.mseuf.edu.ph/cps",
      githubLink: "https://github.com/carlotesoro2003/cps-frontend",
      technologies: ["C# .Net", "Next.js", "TypeScript", "Tailwind CSS", "OpenAI"]
    },
    {
      id: 3,
      image: filheim,
      title: "Filheim",
      description: "Filheim's web CMS was built to reflect their brand: a luxury cabinetry studio redefining design through Filipino craftsmanship. The system offers a bespoke, personal platform to showcase their work as a soulful alternative to mainstream brands.",
      demoLink: "https://www.filheim.com/",
      githubLink: "https://github.com/jakebasa/filheim-cms",
      technologies: ["Strapi", "Nextjs", "TypeScript", "Vercel", "Tailwind CSS", "Figma"]
    },
    {
      id: 4,
      image: sycip,
      title: "SycipBuilders",
      description: "A modern social networking platform with real-time messaging, post sharing, and user engagement analytics.",
      demoLink: "https://www.sycipbuilders.com/",
      // githubLink: "#",
      technologies: ["Webflow"]
    },
    {
      id: 5,
      image: dotworx,
      title: "Dotworx Portfolio",
      description: "A responsive portfolio website with smooth animations, project showcases, and contact integration.",
      demoLink: "https://dotworx.vercel.app/",
      githubLink: "https://github.com/nikkibernardo/dotworx-portfolio",
      technologies: ["React", "Javascript", "Vercel", "Tailwind CSS", "Cal.com"]
    },
    {
      id: 6,
      image: pic2,
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by machine learning with natural language processing and contextual understanding.",
      // demoLink: "#",
      // githubLink: "#",
      technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS", "WebSocket"]
    }
  ];

  
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-4xl sm:text-5xl leading-tight">
          what we’ve <br /> dotworx-ed so far
        </h2>

        <div className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
              technologies={project.technologies}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
