import React from "react";
import "../css/terms.css";
import TermsData from "../API/TermsAPI";

const Terms = () => {
  // API
  //------------------------------------------Terms API----------------------------------------

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

  const [termsdata] = React.useState(TermsData);

  return (
    <>
      <section ref={sectionRef} className="section section-terms">
        <div className="container">
          <h2 className="main-heading">
            Designed for Excellence. NextGen is designed to protect Trust and
            Safety`s most sensitive data
          </h2>
          <div className="terms-part grid grid-two-columns">
            {termsdata.map((e) => {
              return (
                <div className="terms-box" key={e.id}>
                  <i className={e.icon}></i>
                  <h3 className="inner-heading">{e.title}</h3>
                  <p className="inner-para">{e.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
