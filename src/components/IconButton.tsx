import React from 'react';
import { motion } from 'framer-motion';

interface IconButtonProps {
  src: string;
  alt: string;
  href: string;
  label: string;
  isExternal?: boolean;
  index?: number;
  className?: string;
  variants?: any;
  custom?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  src,
  alt,
  href,
  label,
  isExternal = true,
  index,
  className = "",
  variants,
  custom
}) => {
  return (
    <motion.div
      key={label}
      variants={variants}
      custom={custom ?? index}
      className={`
        group relative w-12 h-12 
        flex items-center justify-center
        backdrop-blur-md bg-white/10 dark:bg-white/5
        border border-white/20 dark:border-white/10
        rounded-xl shadow-lg shadow-blue-500/10
        hover:shadow-xl hover:shadow-blue-500/20
        hover:bg-white/20 dark:hover:bg-white/10
        hover:border-white/30 dark:hover:border-white/20
        hover:scale-105 hover:-translate-y-1
        transition-all duration-300 ease-out
        cursor-pointer
        ${className}
      `}
      onClick={() => window.open(href, isExternal ? '_blank' : '_self')}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-all duration-300 icon-filter"
      />
    </motion.div>
  );
};

export default IconButton; 