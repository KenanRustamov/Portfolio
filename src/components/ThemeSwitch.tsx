import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ReactComponent as SunSvg } from '../images/sun.svg';
import { ReactComponent as MoonSvg } from '../images/moon.svg';
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
    <div className="theme-switch-container">
      <SunIcon />
      <label className="theme-switch">
        <input 
          type="checkbox" 
          checked={theme === 'dark'}
          onChange={toggleTheme} 
        />
        <span className="slider"></span>
      </label>
      <MoonIcon />
    </div>
  );
};

export default ThemeSwitch; 