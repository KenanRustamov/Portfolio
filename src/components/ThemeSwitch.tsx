import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ReactComponent as SunSvg } from "../images/sun.svg?react";
import { ReactComponent as MoonSvg } from "../images/moon.svg?react";

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="theme-switch-base group"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            whileTap={{ scale: 0.95 }}
        >
            {/* Background Track - Clean gradient without icons */}
            <div className={`
                absolute inset-0 rounded-full transition-all duration-300
                ${isDark 
                    ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/30' 
                    : 'bg-gradient-to-r from-orange-400/30 to-yellow-400/30'
                }
            `}></div>
            
            {/* Sliding Thumb - Only icon here */}
            <motion.div
                className="
                    absolute w-5 h-5
                    bg-gradient-to-br from-white to-gray-100
                    dark:from-gray-600 dark:to-gray-700
                    rounded-full shadow-lg
                    border border-white/50 dark:border-gray-200/50
                    backdrop-blur-sm
                    flex items-center justify-center
                "
                animate={{
                    x: isDark ? 26 : 2,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
            >
                {/* Active Icon in Thumb */}
                <div className="w-3 h-3 flex items-center justify-center">
                    {isDark ? (
                        <MoonSvg className="w-2.5 h-2.5 text-blue-600" />
                    ) : (
                        <SunSvg className="w-2.5 h-2.5 text-orange-500" />
                    )}
                </div>
            </motion.div>
        </motion.button>
    );
};

export default ThemeSwitch; 