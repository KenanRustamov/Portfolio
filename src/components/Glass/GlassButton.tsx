import React from 'react';
import { motion } from 'framer-motion';

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  animate?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  className = '',
  style = {},
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  href,
  target,
  type = 'button',
  animate = false
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium transition-all duration-300 ease-out
    glass-button
    focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-opacity-50
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  const variantClasses = {
    primary: `
      text-sky-300
      hover:bg-sky-300 hover:text-white hover:shadow-lg
    `,
    secondary: `
      text-current
      hover:bg-gray-100 hover:text-sky-300 hover:shadow-md
    `,
    ghost: `
      bg-transparent border-transparent text-current
      hover:bg-white hover:bg-opacity-10 hover:border-white hover:border-opacity-20 hover:shadow-sm
    `,
    accent: `
      bg-sky-300 border-sky-300 text-white
      hover:bg-opacity-90 hover:shadow-lg hover:scale-105
    `
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 text-base rounded-xl',
    lg: 'px-6 py-3 text-lg rounded-2xl'
  };
  
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const commonProps = {
    className: combinedClasses,
    style,
    disabled,
    onClick,
  };

  const MotionComponent = animate ? motion.button : 'button';
  const animationProps = animate ? {
    whileHover: { y: -2, scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  } : {};

  if (href) {
    const LinkComponent = animate ? motion.a : 'a';
    return (
      <LinkComponent
        {...commonProps}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...animationProps}
      >
        {children}
      </LinkComponent>
    );
  }

  return (
    <MotionComponent
      {...commonProps}
      type={type}
      {...animationProps}
    >
      {children}
    </MotionComponent>
  );
};

export default GlassButton; 