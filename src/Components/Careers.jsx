// import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../css/about.css";
import "../css/hero.css";
import "../css/careers.css";
import about_img from "/Images/img8.jpg";

const Careers = () => {

  return (
    <>
      {/* Navbar Section */}

      <Navbar />

      {/* About Page */}

      <section className="section-aboutpage section-careers">
        <div className="container">
          <h1 className="careers-heading">Careers at Qualiinsight</h1>
        </div>
      </section>

      <section className="about-more">
        <div className="about-overlay">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
        </div>
        <div className="container">
          <div className="about-content careers-content">
            <p className="about-para main-para careers-para">
              At Qualiinsight, we are on a mission to redefine the perception of
              quality—from a mere cost center to a powerful transformation
              engine that provides a competitive edge in today’s dynamic market.
              We empower businesses with innovative Quality as a Service
              solutions that elevate standards and drive success. If you are
              passionate about excellence and thrive in a collaborative
              environment, we invite you to explore exciting career
              opportunities with us. Together, let’s transform quality into a
              strategic advantage!
            </p>
          </div>
        </div>
      </section>
      <div className="about-more-img">
        <img src={about_img} alt="img" />
      </div>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Careers;
