import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.scss';

interface WorkExperience {
  company: string;
  position: string;
  description: string;
  url: string;
  dates: string;
  skills: string[];
}

interface TimelineProps {
  title: string;
  experiences: WorkExperience[];
}

const Timeline: React.FC<TimelineProps> = ({ title, experiences }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <motion.div
      className="timeline-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="timeline-title">
        <h2>{title}</h2>
      </div>
      
      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${index}`}
            className="timeline-item"
            variants={itemVariants}
          >
            <div className="timeline-dates">
              {experience.dates}
            </div>
            <div className="timeline-content">
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-company-link"
              >
                {experience.company}
              </a>
              <div className="timeline-position">
                {experience.position}
              </div>
              <p className="timeline-description">
                {experience.description}
              </p>
              <div className="timeline-skills">
                {experience.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline; 