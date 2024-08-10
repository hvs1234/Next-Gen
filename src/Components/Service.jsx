import React from "react";
import PropTypes from "prop-types";
import "../css/service.css";

const Service = ({ servicedata }) => {
  // Animate Content

  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
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
      <section ref={sectionRef} className="section section-service">
        <div className="container">
          <h2 className="common-heading">
            Challenges faced by the business teams today
          </h2>
          <p className="common-para">
            Many businesses struggle to harness the full potential of Quality
            due to outdated frameworks, insufficient comparative analysis,
            biased audits, and a limited understanding of Quality`s diverse
            applications.
          </p>
          <div className="service-main grid grid-two-columns">
            {servicedata.map((curele, index) => {
              const isLastElement = index === servicedata.length - 1;
              return (
                <div
                  className={`service-box ${isLastElement ? "full-width" : ""}`}
                  key={curele.id}
                >
                  <div className="service-icon">
                    <img src={curele.img} alt="" />
                  </div>
                  <div className="service-title">
                    <h2 className="inner-heading">{curele.title}</h2>
                    <p className="inner-para">{curele.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Service.propTypes = {
  servicedata: PropTypes.array.isRequired,
};

export default Service;
