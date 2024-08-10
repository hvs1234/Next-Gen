// import React from 'react'
import Navbar from "./Navbar";
import "../css/contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      {/* Navbar */}

      <Navbar />

      {/* Contact Section */}

      <section className="section section-contact">
        <div className="container">
          <div className="contact-part">
            <h1 className="contact-heading">
              Transforming Business with NextGen Strategies
            </h1>
            <p className="contact-para">
              Our business through advanced strategies that harness cutting-edge
              technologies and innovative methodologies for unprecedented growth
              and success
            </p>
          </div>
        </div>
      </section>

      {/* Contact More */}

      <section className="section section-contactmore">
        <div className="container">
          <div className="contact-main grid grid-one-columns">
            {/* <div className="contact-data">
              <h2 className="inner-heading">
                Learn How NextGen Can Help Your Trust And Safety Teams.
              </h2>
              <h3 className="inner-heading">Follow Us On</h3>
              <div className="social-links contact-links">
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
            </div> */}
            <div className="contact-form-part">
              <form action="https://formspree.io/f/xeojkllk" className="form" method="POST">
                <div className="input-main grid grid-two-columns">
                  <div className="input-part">
                    <label htmlFor="Name">Your First Name *</label>
                    <input
                      type="text"
                      name="First Name: "
                      placeholder="Enter Your First Name"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="input-part">
                    <label htmlFor="Name">Your Last Name</label>
                    <input
                      type="text"
                      name="Last Name: "
                      placeholder="Enter Your Last Name"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-two-columns">
                  <div className="input-part">
                    <label htmlFor="Email">Your Email *</label>
                    <input
                      type="email"
                      name="Email: "
                      placeholder="Enter Your Valid Email Address"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="input-part">
                    <label htmlFor="Phone">Your Phone Number *</label>
                    <input
                      type="number"
                      name="Phone: "
                      placeholder="Enter Your Phone Number"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-part">
                    <label htmlFor="Message">Your Message *</label>
                    <textarea
                      rows={5}
                      cols={30}
                      name="Message: "
                      placeholder="Enter Your Message"
                      required
                      autoComplete="off"
                    ></textarea>
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-part">
                    <input
                      type="submit"
                      value={"Submit"}
                      className="btn form-btn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Contact;
