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
      description: "A full-stack e-commerce solution with React and Node.js featuring payment integration, admin dashboard, and real-time inventory management.",
      demoLink: "https://niyoghub.com/",
      githubLink: "https://github.com/",
      technologies: ["React","React Native", "Node.js", "MongoDB", "Express", "OpenAI", "Roboflow", "Socket.io",  "JWT", "Passport.js", "Cookie-parser",  "Google Maps API", "Leaflet"]
    },
    {
      id: 2,
      image: cps,
      title: "Corporate Planning System",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      demoLink: "https://portal.mseuf.edu.ph/cps",
      githubLink: "https://github.com/",
      technologies: ["C# .Net", "Next.js", "TypeScript", "Tailwind CSS", "OpenAI"]
    },
    {
      id: 3,
      image: filheim,
      title: "Filheim",
      description: "A responsive weather application with location-based forecasts, interactive maps, and severe weather alerts.",
      demoLink: "https://www.filheim.com/",
      githubLink: "https://github.com/",
      technologies: ["Strapi", "Nextjs", "TypeScript", "Tailwind CSS", "Figma"]
    },
    {
      id: 4,
      image: sycip,
      title: "SycipBuilders",
      description: "A modern social networking platform with real-time messaging, post sharing, and user engagement analytics.",
      demoLink: "https://www.sycipbuilders.com/",
      githubLink: "https://github.com/",
      technologies: ["Webflow", "Figma"]
    },
    {
      id: 5,
      image: dotworx,
      title: "Dotworx Portfolio",
      description: "A responsive portfolio website with smooth animations, project showcases, and contact integration.",
      demoLink: "https://portfoliodemo.example.com",
      githubLink: "https://github.com/",
      technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS", "WebSocket"]
    },
    {
      id: 6,
      image: pic2,
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by machine learning with natural language processing and contextual understanding.",
      demoLink: "https://chatdemo.example.com",
      githubLink: "https://github.com/",
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
