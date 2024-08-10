import React from "react";
import "../css/capable.css";
import CapableData from "../API/CapableAPI";

const Capabilities = () => {
  // API
  // ------------------------------- Capable API ----------------------------------

  const [capabledata] = React.useState(CapableData);

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
      <section ref={sectionRef} className="section section-capable">
        <div className="container">
          {capabledata.map((e) => {
            return (
              <div className="box-whole" key={e.id}>
                <div className={e.mainclass} key={e.id}>
                  <div className={e.boxclass}>
                    <div className="top-heading">{e.top_heading}</div>
                    <h2 className="inner-heading">{e.main_heading}</h2>
                    <p className="inner-para">{e.desc}</p>
                    <p className="inner-para">{e.desc2}</p>
                    <p className="inner-para">{e.desc3}</p>
                  </div>
                  <div className={e.imgclass}>
                    <img src={e.img} alt="img" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Capabilities;
