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
      </div>
      {windowWidth < 600 ? <NavMenu links={props.links}/> : <Links links={props.links} />}
  </header>;

  return content;
  };
  
  export default Header;