import React from 'react';
// import Header from "./components/Header"
import DataBlocks from "./components/DataBlocks"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

// Define the LinkData interface for legacy components
interface LinkData {
  text: string;
  href: string;
  px: number;
  id: string;
}

function App() {
  const links: LinkData[] = [
    {
      text: "PROFILE",
      href: "#profile",
      px: 150,
      id: "1"
    },
    {
      text: "WORK EXPERIENCE",
      href: "#work-experience",
      px: 625,
      id: "2"
    },
    {
      text: "PROJECTS",
      href: "#projects",
      px: 1125,
      id: "3"
    },
    {
      text: "SKILLS",
      href: "#skills",
      px: 2200,
      id: "4"
    },
    {
      text: "CONTACT",
      href: "#contact",
      px: 2200,
      id: "5"
    }
  ];
  
  return (
    <div className="
      App min-h-screen
      bg-gradient-to-br from-blue-100 via-gray-100 to-blue-100
      dark:from-blue-800 dark:via-gray-800 dark:to-blue-800
      text-gray-900 dark:text-gray-100
      transition-colors duration-300
      relative overflow-hidden
    ">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced color blobs for light mode */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-300/30 via-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-200/30 via-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-gradient-radial from-blue-200/40 via-white/0 to-transparent rounded-full blur-[120px] pointer-events-none z-0 light-bg-radial"></div>
      </div>
      
      <main className="relative z-10">
        <React.Fragment>
          {/* <Header links={headerLinks}/> */}
          <DataBlocks />
          <Footer links={links}/>
        </React.Fragment>
      </main>
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
