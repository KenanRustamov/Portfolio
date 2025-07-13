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
    default: 'bg-glass-light border border-border-glass-light-md backdrop-blur-glass-lg backdrop-saturate-glass-md',
    nav: 'bg-glass-light-sm border-b border-border-glass-light-md backdrop-blur-glass-lg backdrop-saturate-glass-lg',
    button: 'bg-glass-light border border-border-glass-light-lg backdrop-blur-glass-md backdrop-saturate-glass',
    strong: 'bg-glass-light-md border border-border-glass-light-lg backdrop-blur-glass-xl backdrop-saturate-glass-xl',
    subtle: 'bg-glass-light-sm border border-border-glass-light backdrop-blur-glass backdrop-saturate-glass'
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
    sm: 'shadow-glass-sm',
    md: 'shadow-glass-md',
    lg: 'shadow-glass-lg',
    xl: 'shadow-glass-xl'
  };
  
  const hoverClasses = hover ? 'hover:shadow-glass-hover hover:-translate-y-1 hover:scale-[1.02] hover:backdrop-blur-glass-xl hover:backdrop-saturate-glass-xl' : '';
  
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
    onClick,
    style: {
      WebkitBackdropFilter: `blur(${variant === 'nav' ? '40px' : variant === 'strong' ? '50px' : '32px'}) saturate(${variant === 'strong' ? '200%' : '170%'})`
    }
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