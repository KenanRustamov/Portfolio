import React from "react";
import { motion } from "framer-motion";
import IconButton from "./IconButton";
import { getSocialLinksForFooter, getIconPath, getProfileData } from "../data/dataLoader";
import ThemeSwitch from './ThemeSwitch';

const Footer = (props: any) => {
  // Load data from JSON
  const socialLinks = getSocialLinksForFooter();
  const profileData = getProfileData();

  let content = 
  <footer className="
    relative flex flex-col justify-center w-full
    text-white bottom-0
  ">
        <motion.div 
          className="flex gap-6 justify-center items-center"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          
          {socialLinks.map((link, index) => (
            <IconButton
              key={link.id}
              src={getIconPath(link.icon)}
              alt={link.alt}
              href={link.href}
              label={link.label}
              isExternal={link.isExternal}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: (i: number) => ({
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: i * 0.1,
                    duration: 0.3,
                  },
                }),
              }}
              custom={index}
            />
          ))}
        </motion.div>
        <div className="flex justify-center items-center mt-4 w-full">
          <ThemeSwitch />
        </div>
        <div className="flex text-xs justify-center mb-2.5 mt-4 text-gray-500">
          {profileData.metadata.footerText}
        </div>
  </footer>
    return content;
};

export default Footer;