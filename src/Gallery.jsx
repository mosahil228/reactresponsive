import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/swiper-bundle.css';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { EffectCoverflow,Autoplay} from 'swiper/core';


import Typewriter from "typewriter-effect";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";
import v1 from "../src/gallery/vis1.jpg";
import v2 from "../src/gallery/vis2.jpg";
import v3 from "../src/gallery/vis3.jpg";
import f1 from "../src/gallery/fam1.jpg";
import f2 from "../src/gallery/fam2.jpg";
import f3 from "../src/gallery/fam3.jpg";
import f4 from "../src/gallery/fam4.jpg";
import c1 from "../src/gallery/ch1.jpg";
import c2 from "../src/gallery/ch2.jpg";
import c3 from "../src/gallery/ch3.jpg";
import c4 from "../src/gallery/ch4.jpg";
import x1 from "../src/gallery/c1.jpg";
import x2 from "../src/gallery/c2.jpg";
import x3 from "../src/gallery/fam2.jpg";
import x4 from "../src/gallery/halloween-1746354_1920.jpg";
import x5 from "../src/gallery/halloween-2905531_1920.jpg";
import x6 from "../src/gallery/spider-3022078_1920.jpg";
import x7 from "../src/gallery/spider-4539428_1920.jpg";
import x8 from "../src/gallery/fam3.jpg";
import x9 from "../src/gallery/all7.jpg";
import x0 from "../src/gallery/vis1.jpg";


import "./Gallery.css";
SwiperCore.use([EffectCoverflow,Autoplay]);


const Gallery = () => {
  



  
  return (
    <>
      <section className="back-img">
        <div className=" gallery-img">
          <div className="text1  justify-center container6 align-items">
            <strong className="flex">
              Hey User! &nbsp;
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  deleteSpeed: 5,
                  strings: [
                    "Welcome to Code with Sahil.",
                    "This is a Gallery Section.",
                    "Find Your Best design Here.",
                    "3D styles and more...",
                    "Thank You So Much For Visiting Our Website.",
                  ],
                }}
              />
            </strong>

            <p>
              Here you get all awesome features to implement in you websites.So
              don't confuse where to start and when to start.
            </p>
            <p>
              {" "}
              we provide you the best youtube free channels to learn full course
              of Web development, Python ,java and many much more...
            </p>
          </div>
          <div className="flex btn-tr justify-center text-center align-items">
            <button className="btn-bg10 ">
              <i className="fa fa-youtube-play i-btn" aria-hidden="true"></i>
              Subscribe Us
            </button>
          </div>
        </div>
      </section>
      <input className="input-1" type="radio" name="photos" id="check1" />
      <input className="input-1" type="radio" name="photos" id="check2" />
      <input className="input-1" type="radio" name="photos" id="check3" />
      <input className="input-1" type="radio" name="photos" id="check4" />
      <div className="container11">
        <h1>OUR PHOTO GALLERY</h1>
        <div class="top-content">
          <h3>Photo Gallery</h3>
          <label for="check1">All</label>
          <label for="check2">Family</label>
          <label for="check3">childs</label>
          <label for="check4">Visited</label>
        </div>
        <div className="photo-gallery">
          <div className="pic place">
            <img src={v1} alt="" />
          </div>
          <div className="pic family">
            <img src={f1} alt="" />
          </div>
          <div className="pic child">
            <img src={c1} alt="" />
          </div>
          <div className="pic place">
            <img src={v2} alt="" />
          </div>
          <div className="pic family">
            <img src={f2} alt="" />
          </div>
          <div className="pic child">
            <img src={c2} alt="" />
          </div>
          <div className="pic place">
            <img src={v3} alt="" />
          </div>
          <div className="pic family">
            <img src={f3} alt="" />
          </div>
          <div className="pic child">
            <img src={c3} alt="" />
          </div>
          <div className="pic place">
            <img src={v1} alt="" />
          </div>
          <div className="pic family">
            <img src={f4} alt="" />
          </div>
          <div className="pic child">
            <img src={c4} alt="" />
          </div>
        </div>
      </div>
      <div className="container11">
        <h1> PHOTO GALLERY SLIDER</h1>
      </div>
      <Swiper
    // navigation={true}
    effect={"coverflow"}
    centeredSlides={true}
    grabCursor={true}
    
    slidesPerView={ 'auto'}
    
    coverflowEffect={{

      rotate: 20,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
    }}
    loop={true}
    autoplay={{
      delay:500,
      disableOnInteraction:false,
      
    }}
    
   
    
    >
    <div className="swiper-container ">
        <div className="swiper-wrapper ">
            <SwiperSlide ><img src={x1} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x2} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x3} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x4} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x5} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x6} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x7} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x8} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x9} alt=""/></SwiperSlide>
            <SwiperSlide ><img src={x0} alt=""/></SwiperSlide>



        </div>
       

    </div>
    
    </Swiper>
      
       
      
    </>
  );
};
export default Gallery;
