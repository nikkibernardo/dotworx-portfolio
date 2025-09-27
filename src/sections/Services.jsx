import React from 'react'
import SpotlightCard from '../components/SpotlightCard';
import { FaFigma, FaCode, FaMobile } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Services(){
  const services = [
    { 
      title: "UI/UX Design", 
      icon: <FaFigma />,
      color: "border-gray-500"
    },
    { 
      title: "Web Development", 
      icon: <FaCode />,
      color: "border-gray-500"
    },
    { 
      title: "Mobile Development", 
      icon: <FaMobile />,
      color: "border-gray-500"
    },
    { 
      title: "IT Solutions", 
      icon: <VscLightbulbSparkle />,
      color: "border-gray-500"
    },
    { 
      title: "Product Consulation", 
      icon: <FaHandshake />,
      color: "border-gray-500"
    },
    { 
      title: "Technical Support", 
      icon: <MdOutlineSupportAgent />,
      color: "border-gray-500"
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-4xl sm:text-5xl leading-tight">
          here to  help <br />you with your ideas
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-400">We turn ideas into scalable, future-ready solutions that drive growth, boost efficiency, and transform challenges into opportunities.</p>
        
        {/* Services Grid */}
         <div className="flex flex-wrap gap-4 mt-8">
          {services.map((service, index) => (
            <SpotlightCard 
              key={index}
              className="custom-spotlight-card w-fit" 
              spotlightColor='rgba(129, 140, 248, 0.8)'
            >
              <div className="flex flex-row gap-4 items-center"> 
                <h3 className="text-lg sm:text-xl whitespace-nowrap">{service.title}</h3>
                <div className={`border ${service.color} p-2 rounded-lg`}> 
                  {service.icon}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
