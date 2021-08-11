import React from "react";
import "./Contact.css";
import cx1 from "../src/icons/phone-2.svg";
import cx2 from "../src/icons/clock-2.svg";
import cx3 from "../src/icons/email.svg";
import ContactC from "./ContactC";

const Contact = () => {
  
  var myStyle = {
    width: "100%",
  };
  var myStyle2 = {
    width: "100%",
    height: "100%",
    border: 0,
  };
  return (
    <>
      <div className="top-content2"></div>

      <section className="container-1 ">
        <div className="container-5 ">
          <div className="text ">Contact Me!</div>
          <hr />
          <form action="# ">
            <div className="form-row ">
              <ContactC
                name='First Name'
              />
              <ContactC
                 name='Last Name'
              />

              
            </div>
            <div className="form-row ">
              <ContactC
              name='Phone Number'
              
              />
              <ContactC
                 name='Email Address'
              />

              
            </div>
            <div className="form-row ">
              <div className="input-data textarea ">
                <textarea rows="8 " cols="80 " required></textarea>
                <br />
                <div className="underline "></div>
                <label for=" ">Write your message</label>

                <br />
                <div className="form-row submit-btn justify-center text-center ">
                  <button class="btn-bg20 " style={myStyle}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="contact-us flex">
        <div className="contact-info-wrapper">
          <h1 className="section-heading">Get in Touch</h1>
          <div className="contact-info ">
            <div>
              <div>
                <img src={cx1} alt="" />
                <div>
                  <span>Call us:</span>
                  <span>(+91) 63 91 69 1999</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={cx3} alt="" />
                <div>
                  <span>Email us::</span>
                  <span>mosahil228@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={cx2} alt="" />
                <div>
                  <span>Contact Time:</span>
                  <span>Mon - Sat (9.00am - 11.00am)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14284.401287448818!2d80.32537642035815!3d26.484714538888376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c389195c3ec0b%3A0xdcb06408147a2819!2sGwai%2C%20Gwaltoli%2C%20Khalasi%20Line%2C%20Kanpur%2C%20Uttar%20Pradesh%20208001!5e0!3m2!1sen!2sin!4v1617527714472!5m2!1sen!2sin"
            title="This is a unique title"
            style={myStyle2}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default Contact;
