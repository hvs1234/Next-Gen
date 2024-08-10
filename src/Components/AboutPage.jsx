import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../css/about.css";
import "../css/hero.css";
import about_img from "/Images/img5.jpg";

const AboutPage = () => {
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

      <section className="section-aboutpage">
        <div className="container">
          <h1 className="about-heading">Our Mission</h1>
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
              At QualiInsight, we envision a future where quality, insights,
              innovation, and research are the cornerstones of every business
              decision
            </p>
            <div className="about-content-info grid grid-two-columns">
              <div className="about-info1 about-info">
                <p className="about-inner-para">
                  At QualiInsight, we envision a future where quality, insights,
                  innovation, and research are the cornerstones of every
                  business decision, transforming organizations into industry
                  leaders. Our mission is to redefine the perception of quality
                  from a mere cost center to a powerful transformation engine
                  that provides a competitive edge in today’s dynamic market.
                </p>
                <p className="about-inner-para">
                  We are committed to equipping businesses with the right data
                  and insights, empowering them to make informed, strategic
                  choices that foster excellence and sustainable growth. Our
                  focus extends beyond immediate challenges; we aim to cultivate
                  a culture of continuous improvement that paves the way for
                  long-term success and innovation.
                </p>
              </div>
              <div className="about-info2 about-info">
                <p className="about-inner-para">
                  In our pursuit of excellence, we are dedicated to accelerating
                  the responsible advancement and deployment of Artificial
                  General Intelligence (AGI) through our Quality as a Service
                  (QaaS) framework. By integrating expert human feedback, we
                  ensure that AGI outputs meet the highest quality standards,
                  promoting fairness, inclusivity, and alignment with human
                  values.
                </p>
                <p className="about-inner-para">
                  Together, we strive to revolutionize decision-making
                  processes, ensuring that quality remains at the heart of every
                  choice. At QualiInsight, we are committed to driving
                  innovation, enriching lives, and empowering organizations to
                  thrive in an ever-evolving landscape.
                </p>
              </div>
            </div>
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

export default AboutPage;
