import React from 'react';
import './App.css';
import Header from "./components/Header"
import DataBlocks from "./components/DataBlocks"
import Footer from "./components/Footer"

function App() {
  let links: object[] = [
    {
      text: "PROFILE",
      href: "#dataBlock"
    },
    {
      text: "WORK EXPERIENCE",
      href: "https://www.google.com/"
    },
    {
      text: "PROJECTS",
      href: "https://www.google.com/"
    },
    {
      text: "SKILLS",
      href: "https://www.google.com/"
    },
    {
      text: "CONTACT",
      href: "https://www.google.com/"
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
