/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Glassmorphism optimized backdrop blur
      backdropBlur: {
        'glass-sm': '16px',
        'glass': '24px',
        'glass-md': '32px',
        'glass-lg': '40px',
        'glass-xl': '50px',
      },
      // Glassmorphism optimized backdrop saturate
      backdropSaturate: {
        'glass': '160%',
        'glass-md': '170%',
        'glass-lg': '180%',
        'glass-xl': '200%',
      },
      // Glass colors for transparency
      colors: {
        'glass': {
          'light-sm': 'rgba(255, 255, 255, 0.02)',
          'light': 'rgba(255, 255, 255, 0.04)',
          'light-md': 'rgba(255, 255, 255, 0.06)',
          'light-lg': 'rgba(255, 255, 255, 0.08)',
          'dark-sm': 'rgba(0, 0, 0, 0.02)',
          'dark': 'rgba(0, 0, 0, 0.04)',
          'dark-md': 'rgba(0, 0, 0, 0.06)',
          'dark-lg': 'rgba(0, 0, 0, 0.08)',
        },
        'border-glass': {
          'light': 'rgba(255, 255, 255, 0.08)',
          'light-md': 'rgba(255, 255, 255, 0.12)',
          'light-lg': 'rgba(255, 255, 255, 0.15)',
          'light-xl': 'rgba(255, 255, 255, 0.2)',
        },
        'accent': {
          'primary': 'rgb(144, 205, 244)',
          'primary-rgb': '144, 205, 244',
        }
      },
      // Optimized animations
      animation: {
        'glass-hover': 'glass-hover 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 3s ease-in-out infinite',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'glass-hover': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-4px) scale(1.02)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      // Responsive breakpoints
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // Typography
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // Spacing optimized for glassmorphism
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      // Box shadows for glassmorphism
      boxShadow: {
        'glass-sm': '0 1px 0 rgba(255, 255, 255, 0.05) inset, 0 1px 3px rgba(0, 0, 0, 0.04)',
        'glass': '0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 2px 8px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04)',
        'glass-md': '0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 4px 16px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 8px 24px rgba(0, 0, 0, 0.08), 0 16px 48px rgba(0, 0, 0, 0.15)',
        'glass-xl': '0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 16px 48px rgba(0, 0, 0, 0.15), 0 32px 80px rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 1px 0 rgba(255, 255, 255, 0.1) inset, 0 6px 20px rgba(144, 205, 244, 0.4), 0 12px 40px rgba(144, 205, 244, 0.2)',
      },
      // Border radius for modern design
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Custom plugin for glassmorphism utilities
    function({ addUtilities }) {
      addUtilities({
        '.glass-base': {
          '@apply backdrop-blur-glass backdrop-saturate-glass': {},
          '-webkit-backdrop-filter': 'blur(24px) saturate(160%)',
        },
        '.glass-strong': {
          '@apply backdrop-blur-glass-lg backdrop-saturate-glass-lg': {},
          '-webkit-backdrop-filter': 'blur(40px) saturate(180%)',
        },
        '.glass-card': {
          '@apply bg-glass-light border border-border-glass-light-md rounded-2xl shadow-glass': {},
          '@apply backdrop-blur-glass-lg backdrop-saturate-glass-md': {},
          '-webkit-backdrop-filter': 'blur(40px) saturate(170%)',
        },
        '.glass-button': {
          '@apply bg-glass-light border border-border-glass-light-lg rounded-xl': {},
          '@apply backdrop-blur-glass-md backdrop-saturate-glass shadow-glass': {},
          '-webkit-backdrop-filter': 'blur(32px) saturate(160%)',
        },
        '.glass-nav': {
          '@apply bg-glass-light-sm border-b border-border-glass-light-md': {},
          '@apply backdrop-blur-glass-lg backdrop-saturate-glass-lg shadow-glass-md': {},
          '-webkit-backdrop-filter': 'blur(40px) saturate(180%)',
        }
      })
    }
  ],
} 