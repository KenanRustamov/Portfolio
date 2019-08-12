import React, {useState} from 'react'
import "./NavMenu.scss";

const NavMenu = (props: any) => {
  const [animate, setAnimate] = useState<boolean>(false)
  let navMenuContent = 
    <div className ={"navMenu"}>
        <div className = {`lineWrapper ${animate? "lineWrapper-animation" : ""}`} onClick= {() => {
            setAnimate(!animate);
        }}>
                <div className ={"topLine"}></div>
                <div className ={"middleLine"}></div>
                <div className ={"bottomLine"}></div>
            </div>
    </div>


  return navMenuContent;
  };
export default NavMenu;