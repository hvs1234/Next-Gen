import React from "react";

import { Link } from "react-router-dom";
import "../css/nav.css";
import logo_main from "/Images/logo.png";

const Navbar = () => {
  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);
  const [isDropdownVisible2, setIsDropdownVisible2] = React.useState(false);
  const [isDropdownVisible3, setIsDropdownVisible3] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Reload

  const handleOnClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };

  // Dropdown Menus

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };
  const handleMouseEnter2 = () => {
    setIsDropdownVisible2(true);
  };

  const handleMouseLeave2 = () => {
    setIsDropdownVisible2(false);
  };
  const handleMouseEnter3 = () => {
    setIsDropdownVisible3(true);
  };

  const handleMouseLeave3 = () => {
    setIsDropdownVisible3(false);
  };

  // Sticky Navbar

  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header ${isSticky ? "sticky" : ""} ${
          isActive ? "active" : ""
        }`}
      >
        <div className="logo">
          <div className="logo-main">
            <Link onClick={handleOnClick("/")} className="logo-para" to={"/"}>
              <img src={logo_main} alt="" className="logo-img" />
            </Link>
          </div>
        </div>
        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <i name="ham" className="fa-solid fa-bars mobile-nav-icon"></i>
          <i name="cross" className="fa-solid fa-xmark mobile-nav-icon"></i>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <Link onClick={handleOnClick("/")} className="navlink" to={"/"}>
                Home
              </Link>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="dropdown"
            >
              <Link className="navlink dropdown-main" to={"#"}>
                About <i className="fa-solid fa-chevron-down"></i>
              </Link>
              {isDropdownVisible && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      onClick={handleOnClick("/about")}
                      className="dropdown-link"
                      to={"/about"}
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleOnClick("/careers")}
                      className="dropdown-link"
                      to={"/careers"}
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              className="dropdown"
            >
              <Link className="navlink dropdown-main" to={"#"}>
                Solutions <i className="fa-solid fa-chevron-down"></i>
              </Link>
              {isDropdownVisible2 && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      onClick={handleOnClick("/services")}
                      className="dropdown-link"
                      to={"/services"}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleOnClick("/products")}
                      className="dropdown-link"
                      to={"/products"}
                    >
                      Products
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              className="dropdown"
            >
              <Link className="navlink dropdown-main" to={"#"}>
                Resources <i className="fa-solid fa-chevron-down"></i>
              </Link>
              {isDropdownVisible3 && (
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      onClick={handleOnClick("/blog")}
                      className="dropdown-link"
                      to={"/blog"}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={handleOnClick("/contact")}
                      className="dropdown-link"
                      to={"/contact"}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                onClick={handleOnClick("/contact")}
                className="navlink book"
                to={"/contact"}
              >
                Book A Meeting
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
