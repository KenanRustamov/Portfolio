import React from 'react';
import { motion } from 'framer-motion';
import './ProjectShowcase.scss';

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
      className="project-showcase-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="project-showcase-title">
        <h2>{title}</h2>
      </div>
      
      <div className="project-showcase-grid">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            className="project-card"
            variants={cardVariants}
          >
            <div className="project-image-wrapper">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image-link"
              >
                <img 
                  srcSet={`${project.image.replace('.webp', '-250.webp')} 250w, ${project.image} 554w`}
                  sizes="(max-width: 768px) 250px, (max-width: 1024px) 350px, 450px"
                  src={project.image} 
                  alt={project.alt}
                  className="project-card-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <span className="view-project">View Project</span>
                </div>
              </a>
            </div>
            
            <div className="project-card-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-skills">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="project-actions">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button primary"
                >
                  View Demo
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button secondary"
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