import React from 'react';
import './App.css';
import Header from "./components/Header"
import DataBlocks from "./components/DataBlocks"
import Footer from "./components/Footer"

function App() {
  console.log(window.pageYOffset);
  let links: object[] = [
    {
      text: "Learn React",
      href: "https://www.google.com/"
    },
    {
      text: "Github",
      href: "https://www.google.com/"
    }];
  
  return (
    <div className="App">
      <main>
        <React.Fragment>
          <Header />
          <DataBlocks />
          <Footer links= {links}/>
        </React.Fragment>
      </main>
    </div>
  );
}

export default App;
