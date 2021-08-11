import React from "react";
import { NavLink } from "react-router-dom";

const HomeC = (props) => {
  return (
    <>
      <div className="p-card">
              <div className="p-image flex align-items justify-center">
                <img src={props.imgsrc} alt="" />
              </div>
              <hr />
              <h2 className="text-center">{props.title}</h2>
              <div className="flex justify-center align-items text-center p-font">
                <p>
                  Get your programming career started with these free video
                  courses. Source code is available with all the videos for your
                  better experience
                </p>
              </div>
              <div className="flex justify-center">
                <NavLink to="">
                  <button class="slide-btn-bg">Watch Now</button>
                </NavLink>
              </div>
            </div>
    </>
  );
};

export default HomeC;
