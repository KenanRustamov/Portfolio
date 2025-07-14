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
      className={`icon-button-base group ${className}`}
      onClick={() => window.open(href, isExternal ? '_blank' : '_self')}
    >
      <img 
        src={src} 
        alt={alt}
        className="w-6 h-6 opacity-80 group-hover:opacity-100 icon-filter"
        style={{
          transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
    </motion.div>
  );
};

export default IconButton; 