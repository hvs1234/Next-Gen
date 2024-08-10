import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css/about.css";
import "../css/productpage.css";
import Footer from "./Footer";
import about_img from "/Images/img7.jpg";
import ProductPageData from "../API/ProductAPI";

const ProductsPage = () => {

  // API
  // -----------------------------------ProductPage API----------------------------------------------------------------

  const [productpagedata] = useState(ProductPageData);

  // Animate Circle

  const heroRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Navbar Section */}

      <Navbar />

      {/* About Page */}

      <section className="section-aboutpage section-product">
        <div className="container">
          <h1 className="product-heading">Our Product Related Services</h1>
        </div>
      </section>

      <section ref={heroRef} className="about-more">
        <div className="about-overlay">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
        </div>
        <div className="container">
          <div className="about-content">
            <p className="about-para main-para">
              We help clients identify the best quality management products,
              train their teams for optimal use, and customize solutions to
              maximize effectiveness and benefits
            </p>
            {productpagedata.map((e) => {
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

export default ProductsPage;
