import React from 'react';
import './App.css';
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
    <div className="App">
      <main>
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
