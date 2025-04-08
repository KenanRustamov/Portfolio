import React, {useState, useEffect} from 'react'
import "./Header.scss";
import logo from '../images/reactLogo.svg';
import Links from "./Links";
import NavMenu from "./NavMenu";
import { useTheme } from '../contexts/ThemeContext';

interface LinkData {
    text: string;
    href: string;
    px: number;
    id: string;
}

interface HeaderProps {
    links: LinkData[];
}

// Simple SVG Icons (replace with more detailed ones if desired)
const SunIcon = () => (
    <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0-7c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1zm0 18c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1zm-8-10c-.55 0-1-.45-1-1H1c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm14 0c-.55 0-1-.45-1-1h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zM4.22 4.22c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L4.22 4.22zm14.14 14.14c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.41-1.41zm-1.41-14.14c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41zm-12.72 12.72c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.41 1.41c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.41-1.41z"/>
    </svg>
);

const MoonIcon = () => (
    <svg className="theme-icon" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor" width="18px" height="18px">
         <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10S22 17.52 22 12C22 6.48 17.52 2 11.99 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-11.94c-1.06.48-1.86 1.59-2.01 2.85-.16 1.3.43 2.59 1.45 3.39.9 1.04 2.39 1.37 3.68.86 1.41-.56 2.36-1.91 2.36-3.41 0-1.93-1.49-3.53-3.38-3.8-.08-.01-.17-.02-.25-.02-1.02 0-1.97.49-2.61 1.33l-.44.6z"/>
    </svg>
);

const Header: React.FC<HeaderProps> = ({ links }) => {
  const { theme, toggleTheme } = useTheme();
  const [ currentScroll, setCurrentScroll ] = useState(window.pageYOffset);
  const [ scrollDirection, setScrollDirection ] = useState("down");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  useEffect(() => {
    const previousScroll = window.scrollY;
    const handleScroll = () => {
      setCurrentScroll(window.scrollY);
      const currScroll = window.scrollY;
      currScroll > previousScroll ? setScrollDirection("down"): setScrollDirection("up");
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [currentScroll]);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  let content = 
  <header className={`App-header clearfix ${currentScroll < 1 ? "headerBigger" : undefined} ${(currentScroll > 75) && (scrollDirection === "down") ? "hideHeader" : undefined}`}>
      <div className= "Title">
      </div>
      <div className="navLinksContainer">
        <div className="mainNavLinks">
          {windowWidth < 600 ? <NavMenu links={links}/> : <Links links={links} onLinkClick={handleLinkClick} />}
        </div>
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
        <div className={`hamburgerMenu ${isMobileMenuOpen ? 'open' : ''}`} onClick={handleToggleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={`mobileMenu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Links links={links} onLinkClick={handleLinkClick} />
      </div>
  </header>;

  return content;
};

export default Header;