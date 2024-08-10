import React from 'react'
import { Link } from "react-router-dom";
import "../css/seehow.css";

const HomeSeeHow = () => {
  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };

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
      <section ref={heroRef} className="section-seehow">
        <div className="seehow-overlay">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
        </div>
        <div className="container">
          <div className="seehow-data">
            <h2 className="main-heading">
              See how Qualiinsight can help your business and quality teams
            </h2>
            <Link
              to={"/"}
              onClick={handleOnClick("/contact")}
              className="seehow-link"
            >
              Book A Meeting
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSeeHow;
