import React from "react";
import "../css/about.css";

const About = () => {
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
      <section ref={sectionRef} className="section section-hero-about">
        <div className="container">
          <h2 className="main-heading">
            More About NextGen Quality Business&nbsp;{" "}
            <i className="fa-solid fa-bars-staggered"></i>
          </h2>
          <p className="main-para">
            1. Enhance engagements with agents through personalized coaching &
            dashboards.
          </p>
          <p className="main-para">
            2. Leverage qualities as a service to maximize quality auditor
            impact.
          </p>
          <p className="main-para">3. Strengthen detection capability.</p>
          <p className="main-para">4. Identify actionable insights.</p>
          <p className="main-para">
            5. Drive process improvement and transformation.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
