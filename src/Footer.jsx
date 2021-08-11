import React from "react";
import iv1 from '../src/icons/facebook.svg';
import iv2 from '../src/icons/instagram.svg';
import iv3 from '../src/icons/twitter.svg';
import iv4 from '../src/icons/google.svg';

import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <footer className="top-footer">
        <div className="container-2">
            <div className="box">
                <h3>About Us</h3>
                <hr/>
                <p>Here you get all awesome features to implement in you websites. we provide you the best youtube free channels to learn full course of Web development, Python ,java and many much more...</p>
                <button className="btn-bg9">Read More</button>

            </div>
            <div className="box">
                <h3>Quick links</h3>

                <ul>
                    <li>
                        <NavLink to="#">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="#">About us</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Videos</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Contact us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="box ">

                <h3>Follow Us</h3>
                <ul className="foot-icons">
                    <li>
                        <NavLink to="#">
                            <img className="oneI" src={iv1} alt="hj"/>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <img className="twoI" src={iv2} alt=""/>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <img className="threeI" src={iv3} alt=""/>

                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="#">
                            <img className="fourI" src={iv4} alt=""/>

                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="box ">
                <h3>100% Satisfaction</h3>
                <hr/>
               
                <p>If you are satisfied kindly visit our you tube channel.Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cumque!</p>

                <button className="btn-bg9">YouTube</button>

            </div>
        </div>
       

    </footer>
    <footer>
        <div className="footer-bottom">
            Copyright © milliondollarboy 2021. All right reserved.
        </div>
    </footer>
      
    </>
  );
};
export default Footer;
