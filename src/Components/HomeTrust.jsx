import React from "react";
import "../css/hometrust.css";

const HomeTrust = () => {
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
    <div>
      <section ref={sectionRef} className="section section-hometrust">
        <div className="container">
          <h2 className="trust-heading">
            Transforming excellence from a goal to your daily reality with
            Qualiinsight`s QaaS.
          </h2>{" "}
          <p className="main-para">
            We embed top-tier quality into every product, service, and process,
            transforming your business.
          </p>
          <p className="main-para">
            With us, superior quality becomes your defining trait and
            competitive edge.
          </p>
          <p className="main-para">
            Experience the transformative power of excellence with us!
          </p>
          <div className="pulse-circle-container grid grid-three-columns">
            <div className="pulse-data">
              <div className="pulse-circle"></div>
              <h3 id="pulse1">Supercharge Quality</h3>
            </div>
            <div className="pulse-data">
              <div className="pulse-circle"></div>
              <h3 id="pulse2">Product Identification & Customization</h3>
            </div>
            <div className="pulse-data">
              <div className="pulse-circle"></div>
              <h3 id="pulse3">Custom AGI training & deployment</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTrust;
