import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'nav' | 'button' | 'strong' | 'subtle';
  hover?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  rounded = '2xl',
  shadow = 'md',
  animate = false,
  onClick
}) => {
  const baseClasses = 'transition-all duration-300 ease-out';
  
  const variantClasses = {
    default: 'glass-card',
    nav: 'glass-nav',
    button: 'glass-button',
    strong: 'glass-strong',
    subtle: 'glass-base'
  };
  
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl'
  };
  
  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]' : '';
  
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${roundedClasses[rounded]}
    ${shadowClasses[shadow]}
    ${hoverClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const commonProps = {
    className: combinedClasses,
    onClick
  };

  if (animate) {
    return (
      <motion.div
        {...commonProps}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div {...commonProps}>
      {children}
    </div>
  );
};

export default GlassCard; 