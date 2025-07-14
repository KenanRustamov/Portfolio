import React, { useState, useEffect } from "react";
import { GlassNavigation, GlassButton } from "./Glass";
import { useTheme } from "../contexts/ThemeContext";
import ThemeSwitch from "./ThemeSwitch";
import krLogo from "../images/krLogo.svg";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  links: Array<{
    name: string;
    href: string;
    isExternal?: boolean;
  }>;
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const { theme } = useTheme();
  const [currentScroll, setCurrentScroll] = useState(window.pageYOffset);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 900 && isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let previousScroll = window.pageYOffset;
    const handleScroll = () => {
      if (isMobileMenuOpen) return;
      
      const current = window.pageYOffset;
      setCurrentScroll(current);
      if (current > previousScroll) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      previousScroll = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const shouldHideHeader = currentScroll > 75 && scrollDirection === "down" && !isMobileMenuOpen;
  const isHeaderBig = currentScroll < 1;

  return (
    <>
      {/* Main Header Navigation */}
      <GlassNavigation
        fixed
        variant="header"
        className={`
          h-20 px-[5%] flex items-center justify-between z-50 
          transition-all duration-300 ease-out
          ${shouldHideHeader ? '-translate-y-full' : 'translate-y-0'}
          ${isHeaderBig ? 'shadow-sm' : 'shadow-md'}
        `}
      >
        {/* Logo Container */}
        <div className="flex-shrink-0 flex items-center">
          <motion.img
            src={krLogo}
            alt="KR Logo"
            className="h-12 w-auto fill-current text-sky-300"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassButton
                variant="ghost"
                size="sm"
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                className="mx-1 text-current hover:text-sky-300"
                animate
              >
                {link.name}
              </GlassButton>
            </motion.div>
          ))}
          
          {/* Theme Switch */}
          <div className="ml-4">
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeSwitch />
          <button
            onClick={handleToggleMobileMenu}
            className="relative w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ease-out"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`
                block w-6 h-0.5 bg-current transition-all duration-300 ease-out
                ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'}
              `}
            />
            <span
              className={`
                block w-6 h-0.5 bg-current transition-all duration-300 ease-out
                ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
              `}
            />
            <span
              className={`
                block w-6 h-0.5 bg-current transition-all duration-300 ease-out
                ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'}
              `}
            />
          </button>
        </div>
      </GlassNavigation>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 md:hidden"
          >
            <GlassNavigation
              variant="mobile-menu"
              className="w-full h-full flex flex-col items-center justify-start pt-16 px-8 overflow-y-auto"
            >
              <div className="flex flex-col items-center space-y-8 w-full max-w-sm">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="w-full"
                  >
                    <GlassButton
                      variant="secondary"
                      size="lg"
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      onClick={handleLinkClick}
                      className="w-full justify-center text-lg font-medium"
                      animate
                    >
                      {link.name}
                    </GlassButton>
                  </motion.div>
                ))}
              </div>
            </GlassNavigation>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;