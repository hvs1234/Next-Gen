import React from "react";
import "../css/hero.css";

const Hero = () => {
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
      <section ref={heroRef} className="section section-hero">
        <div className="hero-overlay">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-heading">
            Quality in your DNA, not just your SLA
          </h1>
          <p className="hero-para">
            Unlock Revenue, Minimize Costs, Elevate Customer Experience and
            Accelerate AGI Implementation with Quality Insights!
          </p>
        </div>
        <div className="hero-more">
          <p>
            Scroll Down To Learn More&nbsp;{" "}
            <i className="fa-solid fa-arrow-down-long"></i>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
