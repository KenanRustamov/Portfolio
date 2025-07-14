import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.button
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
                opacity: isVisible ? 1 : 0, 
                y: isVisible ? 0 : 100 
            }}
            transition={{ 
                duration: 0.3, 
                ease: "easeInOut" 
            }}
            whileHover={{ 
                y: -4, 
                scale: 1.1 
            }}
            whileTap={{ 
                scale: 0.95 
            }}
        >
            <svg 
                className="w-5 h-5 text-blue-600 dark:text-blue-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
            </svg>
        </motion.button>
    );
};

export default ScrollToTop; 