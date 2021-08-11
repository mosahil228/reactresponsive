import React from "react";
import { NavLink } from "react-router-dom";

const HomeC2 = (props) => {
  return (
    <>
      <div className="service-card">
        <img className="icon icon-edit" src={props.imgsrc} alt="" />
        <h2 className="f-style">Fast learning Videos</h2>
        <p className="p-style">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, rerum
          Thats it.
        </p>
        <NavLink to="">
          <button className="btn-bg6">Learn More</button>
        </NavLink>
      </div>
    </>
  );
};

export default HomeC2;
