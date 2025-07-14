import React from 'react';
import { motion } from 'framer-motion';

interface GlassNavigationProps {
  children: React.ReactNode;
  className?: string;
  fixed?: boolean;
  variant?: 'header' | 'mobile-menu' | 'sidebar';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
}

const GlassNavigation: React.FC<GlassNavigationProps> = ({
  children,
  className = '',
  fixed = false,
  variant = 'header',
  blur = 'lg'
}) => {
  const baseClasses = 'transition-all duration-300 ease-out';
  
  const variantClasses = {
    header: `
      glass-nav
      shadow-md
    `,
    'mobile-menu': `
      glass-nav border-t border-white border-opacity-15
      shadow-lg
    `,
    sidebar: `
      glass-nav border-r border-white border-opacity-12
      shadow-md
    `
  };
  
  const blurClasses = {
    sm: 'glass-base',
    md: 'glass-base',
    lg: 'glass-strong',
    xl: 'glass-strong'
  };
  
  const positionClasses = fixed ? 'fixed top-0 left-0 right-0 z-50' : 'relative';
  
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${blurClasses[blur]}
    ${positionClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <motion.nav
      className={combinedClasses}
      initial={{ opacity: 0, y: variant === 'header' ? -20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.nav>
  );
};

export default GlassNavigation; 