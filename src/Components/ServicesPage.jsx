import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../css/about.css";
import "../css/hero.css";
import about_img from "/Images/img7.jpg";
import ServicePageData from "../API/ServicePageAPI";

const ServicePage = () => {
  // API
  // ------------------------------------Service Page API-------------------------------------

  const [servicepagedata] = useState(ServicePageData);


  return (
    <>
      {/* Navbar Section */}

      <Navbar />

      {/* About Page */}

      <section className="section-aboutpage section-servicepage">
        <div className="container">
          <h1 className="servicepage-heading">
            Our Comprehensive <br /> Quality Services
          </h1>
        </div>
      </section>

      <section className="service-more">
        <div className="about-overlay">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
        </div>
        <div className="container">
          <div className="about-content servicepage-content">
            {servicepagedata.map((e) => {
              return (
                <div
                  className="servicepage-main grid grid-two-columns"
                  key={e.id}
                >
                  <div className={`servicepage-data ${e.dataclass}`}>
                    <h2 className="common-heading">{e.title}</h2>
                    <div className="servicepage-para-box">
                      <p className="common-para">{e.desc}</p>
                      <p className="common-para">{e.desc2}</p>
                      <p className="common-para">{e.desc3}</p>
                    </div>
                  </div>
                  <div className={`servicepage-img ${e.imgclass}`}>
                    <img src={e.img} alt="img" />
                  </div>
                </div>
              );
            })}
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

export default ServicePage;
