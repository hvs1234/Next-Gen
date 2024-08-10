import React from "react";
import "../css/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };

  // Animate Content

  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="section section-footer">
        <div className="container">
          <div className="f-main">
            <div className="f-logo">
              <p className="logo-name f-logo-name">
                <span>Q</span>uali<span>I</span>nsight.
              </p>
              <p className="f-follow-para">Follow Us On</p>
              <div className="social-links">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="f-content">
              <div className="f-part">
                <h3>Solutions</h3>
                <div className="f-link">
                  <ul>
                    <li>
                      <Link
                        to={"/products"}
                        onClick={handleOnClick("/products")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/services"}
                        onClick={handleOnClick("/services")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="f-part">
                <h3>Resources</h3>
                <div className="f-link">
                  <ul>
                    <li>
                      <Link
                        to={"/blog"}
                        onClick={handleOnClick("/blog")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp; Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/contact"}
                        onClick={handleOnClick("/contact")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="f-part">
                <h3>About</h3>
                <div className="f-link">
                  <ul>
                    <li>
                      <Link
                        to={"/"}
                        onClick={handleOnClick("/")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/careers"}
                        onClick={handleOnClick("/careers")}
                        className="f-navlink"
                      >
                        <i className="fa-solid fa-arrow-right"></i>&nbsp;
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Part */}

      <div className="copyright">
        <p>
          <i className="fa-regular fa-copyright"></i>&nbsp; Copyright NextGen.
          2024 | All Right Reserved | IT Support By{" "}
          <a href="https://twomglobal.com" target="_blank">
            TWOM GLOBAL
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
