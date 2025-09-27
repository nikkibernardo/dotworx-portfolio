// import React from 'react';
// import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// const ProjectCard = ({ 
//   image, 
//   title, 
//   description, 
//   demoLink, 
//   githubLink 
// }) => {
//   return (
//     <div className="group relative overflow-hidden rounded-sm bg-gray-900 cursor-pointer">
//       {/* Image Container */}
//       <div className="relative overflow-hidden">
//         <img 
//           src={image} 
//           alt={title}
//           className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//         />
        
//         {/* Overlay Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//       </div>

//       {/* Title - Top Left */}
//       <div className="absolute top-4 left-4 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
//         <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
//       </div>

//       {/* Buttons - Bottom Left */}
//       <div className="absolute bottom-4 left-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 flex gap-3">
//         {demoLink && (
//           <a 
//             href={demoLink} 
//             className="flex items-center gap-2 bg-white text-black px-3 py-3 rounded-3xl hover:bg-gray-200 transition-colors text-sm sm:text-base"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <FaExternalLinkAlt size={16} />
//             {/* Live Demo */}
//           </a>
//         )}
//         {githubLink && (
//           <a 
//             href={githubLink} 
//             className="flex items-center gap-2 bg-gray-800 text-white px-3 py-3 rounded-3xl hover:bg-gray-700 transition-colors text-sm sm:text-base"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <FaGithub size={16} />
//             {/* Code */}
//           </a>
//         )}
//       </div>

//       {/* Description - Show on mobile always, hide on desktop */}
//       {/* <div className="p-4 sm:p-6 sm:absolute sm:inset-0 sm:flex sm:items-end sm:bg-gradient-to-t sm:from-black/90 sm:via-transparent sm:to-transparent sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-500">
//         <p className="text-gray-300 text-sm sm:text-base sm:text-white">
//           {description}
//         </p>
//       </div> */}
//     </div>
//   );
// };

// export default ProjectCard;



import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaEye } from 'react-icons/fa';

const ProjectCard = ({ 
  image, 
  title, 
  description, 
  demoLink, 
  githubLink,
  technologies = [] 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Project Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Title - Top Left */}
        <div className="absolute top-4 left-4 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
        </div>

        {/* Buttons - Bottom Left */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 flex gap-3">
          {/* View Details Button */}
          <button 
            onClick={openModal}
            className="flex items-center gap-2 bg-[#C4B5FD] text-black px-3 py-3 rounded-2xl hover:bg-[#7b66c6] transition-colors text-sm sm:text-base"
          >
            <FaEye size={14} />
            {/* View  */}
          </button>
          
          {/* External Links */}
          <div className="flex gap-2 ml-auto">
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black px-3 py-3 rounded-2xl hover:bg-gray-200 transition-colors text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt size={12} />
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-3 py-3 rounded-2xl hover:bg-gray-700 transition-colors text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={12} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <FaTimes size={24} />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image Section */}
              <div className="lg:sticky lg:top-0">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-64 lg:h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

                {/* Technologies Stack */}
                {technologies.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-[#C4B5FD] text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  {demoLink && (
                    <a 
                      href={demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex-1 justify-center"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </a>
                  )}
                  {githubLink && (
                    <a 
                      href={githubLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex-1 justify-center"
                    >
                      <FaGithub size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;