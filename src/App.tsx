import React from 'react';
import './App.css';
import Header from "./components/Header"
import DataBlocks from "./components/DataBlocks"
import Footer from "./components/Footer"

function App() {
  let links: object[] = [
    {
      text: "PROFILE",
      href: "#dataBlock",
      px: 150,
      id: "1"
    },
    {
      text: "WORK EXPERIENCE",
      href: "https://www.google.com/",
      px: 625,
      id: "2"
    },
    {
      text: "PROJECTS",
      href: "https://www.google.com/",
      px: 1125,
      id: "3"
    },
    {
      text: "SKILLS",
      href: "https://www.google.com/",
      px: 2200,
      id: "4"
    },
    {
      text: "CONTACT",
      href: "https://www.google.com/",
      px: 2200,
      id: "5"
    }];
  
  return (
    <div className="App">
      <main>
        <React.Fragment>
          <Header links = {links}/>
          <DataBlocks />
          <Footer links= {links}/>
        </React.Fragment>
      </main>
    </div>
  );
}

export default App;
