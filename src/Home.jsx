import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "slick-carousel/slick/slick.css";
import HomeC from "./HomeC";
import HomeC2 from "./HomeC2";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from "../src/images/IMG_20210329_205312_237.jpg";
import ic from "../src/images/s5.webp";
import ic1 from "../src/images/s2.jpg";
import ic2 from "../src/images/s3.webp";
import ic3 from "../src/images/s4.webp";
import ic4 from "../src/images/seclogo.jpeg" ;
import ic5 from "../src/icons/transport.svg";
import ic6 from "../src/icons/bag.svg";
import ic7 from "../src/icons/usd.svg";
import ic8 from "../src/images/mongo.webp";
import ic9 from "../src/images/eress.webp";
import ic10 from "../src/images/React.webp";
import ic11 from "../src/images/node.webp";
import ic12 from "../src/images/gmail.webp";
import { NavLink,Link } from "react-router-dom";



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
      responsive: [{
        breakpoint: 1110,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
        }
    }
]


    };
  return (
    <>
    {/* <div class="top-content2">
          
          
          </div> */}
     
     
      <header>





        <div className="container">
          <div className="logo flex justify-center align-items">
            <img src={logo} />
          </div>
          <div className="text flex justify-center align-items">
                <strong >
                    <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:20,
                        deleteSpeed: 5,
                        strings: ['Welcome to Code with Sahil.', 'We Provide You the best web designs', 'Learn css styles.', 'Web designs and more...', 'Thank You So Much For Visiting Our Website.'],                    }}/>
               </strong>

            <p>
              Here you get all awesome features to implement in you websites.So don't confuse where to start and when to start.
            </p>
            <p>
              
              we provide you the best youtube free channels to learn fullLinkof Web development, Python ,java and many much more...
            </p>
            <div className="btn-main">
              <Link to="#">
                <button className="btn-bg4 btn-clr1">Watch videos</button>
              </Link>
              <Link to="#">
                <button className="btn-bg4 btn-clr2">
                  Subscribe Our Channel
                </button>
              </Link>
              <Link to="">
                <button className="btn-bg4 btn-clr3">Browse Blogs</button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="top-products">
        <div className="container-2">
          <h1 className="section-heading">Important Topics</h1>
         
          <Slider {...settings}>
          <HomeC
            imgsrc={ic}
            title="Web Courses"
          />
          <HomeC
            imgsrc={ic2}
            title="Advance Tricks"
            
          />
          <HomeC
            imgsrc={ic3}
            title="Gradient Tricks"
          />
          <HomeC
            imgsrc={ic1}
            title="Css Tricks"
          />

            
             
          </Slider>
        </div>
      </section>

      {/* about section */}
      <section className="about-sec" id="aboutus">
        <div className="container-2">
            <h1 className="section-heading">Some special About us</h1>
            <div className="about-wrapper flex">
                <div className="flex-1">
                    <img src={ic4} alt=""/>
                </div>
                <div className="flex-1 justify-center align-items text-center">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aliquid ipsa? Inventore.</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sed ipsum atque exercitationem sapiente accusamus ipsam nesciunt mollitia consequatur maiores animi sunt necessitatibus tempora distinctio, minus corrupti soluta nulla
                        et ut reiciendis tenetur? Consequuntur Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ipsa, quisquam distinctio sapiente culpa cumque aspernatur unde alias quo dicta!</p>
                    <NavLink to="">
                        <button class="btn-bg7">Read more</button>
                    </NavLink>
                </div>
            </div>

        </div>
    </section>
    <section className="our-services" id="services">
        <div className="container-2">
            <h1 className="section-heading">Our Services</h1>
            <div className="card-wrapper flex">
            <HomeC2
              imgsrc={ic5}
            
            />
            <HomeC2
              imgsrc={ic6}
              
              
            />
            <HomeC2
              imgsrc={ic7}
              
              
            />
                
            </div>
        </div>
    </section>
    <section className="l-platform">
        <div className="container-2">
            <h1 className="section-heading text-pure">More Partnership skills</h1>
            <div className="skill-logos flex justify-center align-items">
                <div className="skill-img flex">
                    <div className="imglogo">
                        <img src={ic8} alt=""/>
                        <h4>Mongo db</h4>
                    </div>
                    <div className="imglogo">
                        <img src={ic9} alt=""/>
                        <h4> Express</h4>
                    </div>
                    <div className="imglogo">
                        <img src={ic10} alt=""/>
                        <h4>React Js</h4>
                    </div>
                    <div className="imglogo">
                        <img src={ic11} alt=""/>
                        <h4>Node Js</h4>
                    </div>


                </div>
            </div>

        </div>

    </section>
    <section className="email-provider">
        <div className="container-2 flex align-items">
            <div className="email-icon">
                <img src={ic12} alt=""/>

            </div>
            <div>
                <h1>Kindly, Give us your Email that we can inform you First for all Updates</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum harum distinctio commodi voluptate cum mollitia repellendus eveniet dolor eligendi laboriosam.</p>
                <div className="input-wrap">
                    <input type="email" placeholder="example@example.com"/>
                    <button>Submit</button>
                </div>

            </div>

        </div>
    </section>
      
     
      
    
   
    </>
    

  );
};
}


