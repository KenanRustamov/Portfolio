import React, {useState} from 'react';
import Links from "./Links";
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
        <div className = {`slate ${animate? "slate-animation" : ""}`}>
          <div className={`exitIcon`} onClick= {() => {setAnimate(!animate);}}>
            <div className={`leftLine`}></div>
            <div className={`rightLine`}></div>
          </div>
          <div className="linksWrapper">
            <Links links={props.links} />
          </div>
        </div>
        
    </div>


  return navMenuContent;
  };
export default NavMenu;