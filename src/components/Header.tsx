import React, {useState, useEffect} from 'react'
import "./Header.css";
import logo from '../images/reactLogo.svg';

const Header = (props: any) => {
  let [ prevScroll, setPrevScroll ] = useState(window.pageYOffset);
  let [ currentScroll, setCurrentScroll ] = useState(0)
  let [ visible, setVisible ] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      //const prevScrollPos = prevScroll;
      console.log(window.pageYOffset)
      //setCurrentScroll(window.pageYOffset);
      setVisible(prevScroll > window.pageYOffset)
      console.log(visible);
      console.log(prevScroll);
      console.log(currentScroll);
      setPrevScroll(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      
    }
  }, []);



  let content = 
  <header className={"App-header clearfix"}>
    <h1 className= "Title"> 
      <ul>
        <li><img src={logo} className="App-logo" alt="logo" /></li>
        <li><svg className="krLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 932.86 468.67"><path d="M250.67 425.11H44.13V333.9h29.04V135.3H43.31V44.08h207.36v91.22h-30.13v198.6h30.13v91.21zm236.94 0H290.39V333.9h18.35l-83.55-108.47 96.97-90.12h-30.95V44.08h187.64v91.22h-29.58l-77.79 72.32 97.24 126.28h18.9v91.21z"/><path d="M625.46 425.11H418.38V333.9h30.95V135.3h-30.95V44.08h207.09c18.63 0 35.88.32 51.77.96 15.89.64 29.49 1.55 40.81 2.74 11.32 1.19 21.73 2.79 31.23 4.79 26.66 5.66 48.3 17.99 64.92 36.98 16.8 19.36 25.2 42.18 25.2 68.48 0 19.72-5.12 37.62-15.34 53.69-10.23 15.89-23.65 27.58-40.27 35.06l52.59 87.11h27.39v91.22H726.54l-83-155.59H596.7v64.37h28.76v91.22zM596.7 127.63v72.59h16.44c21.55 0 36.16-.64 43.83-1.92 8.22-1.28 15.16-4.93 20.82-10.96 5.66-5.66 8.49-13.42 8.49-23.28s-2.83-17.71-8.49-23.56c-5.66-6.03-12.87-9.68-21.64-10.96-8.4-1.28-23.74-1.92-46.02-1.92H596.7z"/></svg></li>
        <li>{prevScroll + " " + currentScroll}</li>
      </ul>
    </h1>
    <h2 className="Links">
      <ul>
        <li><a href="https://github.com/KenanRustamov"><svg height="25" className="gitHubLogo" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"  /></svg></a></li>
        <li><a href="https://www.linkedin.com/in/kenanrustamov/"><svg className= "linkedInLogo" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
      </ul>
    </h2>
  </header>;

  return content;
  };
  
  export default Header;