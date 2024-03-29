import React, {useState, useEffect} from 'react'
import "./Header.scss";
import logo from '../images/reactLogo.svg';
import Links from "./Links";
import NavMenu from "./NavMenu";
const Header = (props: any) => {
  const [ currentScroll, setCurrentScroll ] = useState(window.pageYOffset);
  const [ scrollDirection, setScrollDirection ] = useState("down");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  let content = 
  <header className={`App-header clearfix ${currentScroll < 1 ? "headerBigger" : undefined} ${(currentScroll > 75) && (scrollDirection === "down") ? "hideHeader" : undefined}`}>
      <div className= "Title">
        <img src={logo} className="App-logo" alt="logo" />
        <svg className="krLogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 932.86 468.67"><path d="M250.67 425.11H44.13V333.9h29.04V135.3H43.31V44.08h207.36v91.22h-30.13v198.6h30.13v91.21zm236.94 0H290.39V333.9h18.35l-83.55-108.47 96.97-90.12h-30.95V44.08h187.64v91.22h-29.58l-77.79 72.32 97.24 126.28h18.9v91.21z"/><path d="M625.46 425.11H418.38V333.9h30.95V135.3h-30.95V44.08h207.09c18.63 0 35.88.32 51.77.96 15.89.64 29.49 1.55 40.81 2.74 11.32 1.19 21.73 2.79 31.23 4.79 26.66 5.66 48.3 17.99 64.92 36.98 16.8 19.36 25.2 42.18 25.2 68.48 0 19.72-5.12 37.62-15.34 53.69-10.23 15.89-23.65 27.58-40.27 35.06l52.59 87.11h27.39v91.22H726.54l-83-155.59H596.7v64.37h28.76v91.22zM596.7 127.63v72.59h16.44c21.55 0 36.16-.64 43.83-1.92 8.22-1.28 15.16-4.93 20.82-10.96 5.66-5.66 8.49-13.42 8.49-23.28s-2.83-17.71-8.49-23.56c-5.66-6.03-12.87-9.68-21.64-10.96-8.4-1.28-23.74-1.92-46.02-1.92H596.7z"/></svg>
      </div>
      {windowWidth < 600 ? <NavMenu links={props.links}/> : <Links links={props.links} />}
  </header>;

  return content;
  };
  
  export default Header;