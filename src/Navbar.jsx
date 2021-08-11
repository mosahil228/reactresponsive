import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/IMG_20210329_205312_237.jpg";
const Navbar = () => {
  const[showM,setShowM]= useState(false);
  return (
    <>
      <nav id="nav-bar">
        <div className={showM ? " navbar nav-list" : "navbar h-nav "}>
          <ul className={showM ? "nav-list ": "nav-list v-class "}>
            
              <img src={logo} />
            

            <NavLink exact ActiveClassName="active " to="/">
              Home{" "}
            </NavLink>
            <a href="#aboutus">
              About us{" "}</a>

              <a  href="#services">
              Services{" "}
           </a>
              
              
           
            
            <NavLink ActiveClassName="active " to="/gallery">
              Gallery{" "}
            </NavLink>
            
            <NavLink ActiveClassName="active " to="/contact">
              Contact us{" "}
            </NavLink>

            <div className="right-nav ">
              <input type="text" placeholder="Search.." />
              <button className="btn-bg">Search</button>
              <button className="btn-bg2">Login</button>
              <button className="btn-bg2">SignUp</button>
            </div>
          </ul>
          <div className="burger  ">
          <a href='#' onClick={() => setShowM(!showM)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
