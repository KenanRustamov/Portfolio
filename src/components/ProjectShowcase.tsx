import React from 'react';
import { motion } from 'framer-motion';


interface Project {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  githubUrl?: string;
  skills: string[];
  image: string;
  alt: string;
}

interface ProjectShowcaseProps {
  title: string;
  projects: Project[];
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ title, projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto py-10 px-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="text-center mb-15">
        <h2 className="
          text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl font-bold mb-3
          relative inline-block tracking-tight drop-shadow-lg
        ">{title}</h2>
      </div>
      
      <div className="
        grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch
        md:gap-8 sm:gap-6
      ">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            className="
              bg-white/15 dark:bg-white/5 border border-white/25 dark:border-white/10
              rounded-2xl overflow-hidden transition-all duration-300
              backdrop-blur-md saturate-180 flex flex-col h-full
              shadow-lg shadow-black/10 dark:shadow-black/20
              hover:-translate-y-2 hover:shadow-xl hover:shadow-black/15 dark:hover:shadow-black/25
              hover:border-blue-600/40 hover:backdrop-blur-3xl hover:saturate-200
            "
            variants={cardVariants}
          >
            <div className="
              relative overflow-hidden aspect-video bg-white/5 dark:bg-white/2
              group
            ">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-full"
              >
                <img 
                  srcSet={`${project.image.replace('.webp', '-250.webp')} 250w, ${project.image} 554w`}
                  sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 450px"
                  src={project.image} 
                  alt={project.alt}
                  className="
                    w-full h-full object-cover transition-all duration-300
                    group-hover:scale-105
                  "
                  loading="lazy"
                />
                <div className="
                  absolute inset-0 bg-black/70 flex items-center justify-center
                  opacity-0 transition-all duration-300 backdrop-blur-sm
                  group-hover:opacity-100
                ">
                  <span className="
                    text-white text-lg font-semibold uppercase tracking-wide
                    py-3 px-6 border-2 border-white rounded-lg transition-all duration-300
                    hover:bg-blue-600 hover:border-blue-600 hover:-translate-y-0.5
                  ">View Project</span>
                </div>
              </a>
            </div>
            
            <div className="
              p-6 flex flex-col flex-1 gap-3.5
              md:p-5
            ">
              <div className="flex-shrink-0">
                <h3 className="
                  text-gray-900 dark:text-gray-100 text-xl md:text-2xl font-bold
                  mb-2 leading-tight hover:text-blue-600 dark:hover:text-blue-400
                  transition-colors duration-300
                ">{project.title}</h3>
                <p className="
                  text-gray-600 dark:text-gray-400 text-sm font-medium m-0
                  italic opacity-80
                ">{project.subtitle}</p>
              </div>
              
              <p className="
                text-gray-800 dark:text-gray-200 leading-relaxed text-sm
                m-0 opacity-90 flex-1
              ">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                {project.skills.map((skill, skillIndex) => (
                                      <span key={skillIndex} className="
                      bg-white/15 dark:bg-white/5 text-gray-800 dark:text-gray-200
                      border border-white/20 dark:border-white/10 px-2.5 py-1 rounded-xl
                      text-xs font-normal cursor-default tracking-wide opacity-80
                    ">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="
                flex gap-2.5 flex-shrink-0 mt-auto
                sm:gap-2
              ">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    py-2.5 px-4 rounded-xl no-underline font-medium text-sm
                    text-center transition-all duration-300 cursor-pointer
                    inline-flex items-center justify-center flex-1 tracking-wide
                    relative backdrop-blur-md saturate-150
                    border border-white/15 dark:border-white/10
                    bg-white/10 dark:bg-white/5 text-blue-600 dark:text-blue-400
                    shadow-md shadow-black/5 dark:shadow-black/10
                    hover:bg-blue-600 hover:text-white hover:-translate-y-0.5
                    hover:shadow-lg hover:shadow-blue-600/25 hover:border-blue-600
                    hover:backdrop-blur-lg hover:saturate-180
                    sm:py-2 sm:px-3 sm:text-xs
                  "
                >
                  View Demo
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      py-2.5 px-4 rounded-xl no-underline font-medium text-sm
                      text-center transition-all duration-300 cursor-pointer
                      inline-flex items-center justify-center flex-1 tracking-wide
                      relative backdrop-blur-md saturate-150
                      border border-white/20 dark:border-white/15
                      bg-white/5 dark:bg-white/2 text-gray-800 dark:text-gray-200
                      shadow-md shadow-black/5 dark:shadow-black/10
                      hover:bg-white/15 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400
                      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20
                      hover:border-blue-600/30 hover:backdrop-blur-lg hover:saturate-180
                      sm:py-2 sm:px-3 sm:text-xs
                    "
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectShowcase; 