import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ReactComponent as SunSvg } from '../images/sun.svg?react';
import { ReactComponent as MoonSvg } from '../images/moon.svg?react';
import './ThemeSwitch.scss';

// Icon Components
const SunIcon = () => (
    <SunSvg className="theme-icon" />
);

const MoonIcon = () => (
    <MoonSvg className="theme-icon" />
);

const ThemeSwitch: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-switch"
            aria-label="Toggle theme"
        >
            <div className="theme-switch-slider">
                <div className="theme-switch-icons">
                    <SunIcon />
                    <MoonIcon />
                </div>
                <div className={`theme-switch-thumb ${theme === 'dark' ? 'dark' : ''}`}>
                    {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
                </div>
            </div>
        </button>
    );
};

export default ThemeSwitch; 