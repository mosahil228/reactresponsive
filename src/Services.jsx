import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import forward from "../src/icons/next.svg";
import backward from "../src/icons/pre.svg";
import { NavLink } from "react-router-dom";
import ic from "../src/images/s5.webp";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,

      slidesToShow: 3,

      slidesToScroll: 1,
    };
    return (
      <section className="top-products">
        <div className="container-2">
          <h1 className="section-heading">Important Topics</h1>
         
          <Slider {...settings}>
            <div className="p-card">
              <div className="p-image flex align-items justify-center">
                <img src={ic} alt="" />
              </div>
              <hr />
              <h2 className="text-center">Web courses</h2>
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

            <div className="p-card">
              <div className="p-image flex align-items justify-center">
                <img src={ic} alt="" />
              </div>
              <hr />
              <h2 className="text-center">Web courses</h2>
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

            <div className="p-card">
              <div className="p-image flex align-items justify-center">
                <img src={ic} alt="" />
              </div>
              <hr />
              <h2 className="text-center">Web courses</h2>
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

            <div className="p-card">
              <div className="p-image flex align-items justify-center">
                <img src={ic} alt="" />
              </div>
              <hr />
              <h2 className="text-center">Web courses</h2>
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

            <div className="p-card">
              <div className="p-image flex align-items justify-center">
                <img src={ic} alt="" />
              </div>
              <hr />
              <h2 className="text-center">Web courses</h2>
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

            <div className="p-card">
              <div className="p-image flex align-items justify-center">
                <img src={ic} alt="" />
              </div>
              <hr />
              <h2 className="text-center">Web courses</h2>
              <div className="flex justify-center align-items text-center p-font">
                <p>
                  Get your programming career started with these free video
                  courses. Source code is available with all the videos for your
                  better experience
                </p>
              </div>
              
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
