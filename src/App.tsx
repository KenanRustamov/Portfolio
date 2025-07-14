import React from 'react';
// import Header from "./components/Header"
import DataBlocks from "./components/DataBlocks"
import Footer from "./components/Footer"

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
      bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
      dark:from-gray-900 dark:via-blue-900 dark:to-purple-900
      text-gray-900 dark:text-gray-100
      transition-colors duration-300
      relative overflow-hidden
    ">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 dark:from-indigo-600/30 dark:to-pink-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-600/20 dark:to-blue-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <main className="relative z-10">
        <React.Fragment>
          {/* <Header links={headerLinks}/> */}
          <DataBlocks />
          <Footer links={links}/>
        </React.Fragment>
      </main>
    </div>
  );
}

export default App;
