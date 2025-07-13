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
  const baseClasses = 'backdrop-saturate-glass-lg transition-all duration-300 ease-out';
  
  const variantClasses = {
    header: `
      bg-glass-light-sm border-b border-border-glass-light-md
      shadow-glass-md backdrop-blur-glass-lg
    `,
    'mobile-menu': `
      bg-glass-light-sm border-t border-border-glass-light-lg
      shadow-glass-lg backdrop-blur-glass-xl
    `,
    sidebar: `
      bg-glass-light border-r border-border-glass-light-md
      shadow-glass-md backdrop-blur-glass-lg
    `
  };
  
  const blurClasses = {
    sm: 'backdrop-blur-glass-sm',
    md: 'backdrop-blur-glass',
    lg: 'backdrop-blur-glass-lg',
    xl: 'backdrop-blur-glass-xl'
  };
  
  const positionClasses = fixed ? 'fixed top-0 left-0 right-0 z-50' : 'relative';
  
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${blurClasses[blur]}
    ${positionClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const backdropFilterValue = {
    header: 'blur(40px) saturate(180%)',
    'mobile-menu': 'blur(50px) saturate(200%)',
    sidebar: 'blur(40px) saturate(170%)'
  };

  return (
    <motion.nav
      className={combinedClasses}
      style={{
        WebkitBackdropFilter: backdropFilterValue[variant]
      }}
      initial={{ opacity: 0, y: variant === 'header' ? -20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.nav>
  );
};

export default GlassNavigation; 