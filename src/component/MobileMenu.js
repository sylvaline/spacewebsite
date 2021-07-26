import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Slide from "react-reveal/Slide";

function MobileMenu() {
  const [isMenu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);
  const [navScroll, setNavScroll] = useState(false);

  const nav_on_scroll = () => {
    if (window.scrollY >= 50) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", nav_on_scroll);

  return (
    <div className="mobile_nav_menu">
      <div className="nav_header">
        <div className="logo">
          <Link to="/">
            <img src="\image\spacelogo.png" alt="" />
          </Link>
        </div>
        <div
          onClick={() => setMenu(!isMenu)}
          className={isMenu ? "menu-toggle open" : "menu-toggle"}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
          <div className="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div>
        <Slide left>
          <ul className={isMenu ? "ul open" : "ul"}>
            <li onClick={closeMenu} className="">
              <NavLink to="/events">Events</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/about">About us</NavLink>
            </li>

            <li onClick={closeMenu}>
              <NavLink to="/co-working">Co-working</NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/our-innovations">Our Innovations </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/startup-funding">Startup Funding </NavLink>
            </li>

            <li onClick={closeMenu}>
              <NavLink to="/innovation-support">Innovation Support </NavLink>
            </li>

            <li onClick={closeMenu}>
              <NavLink to="/learning-resource-centre">
                Learning Resource Centre
              </NavLink>
            </li>
            <li onClick={closeMenu}>
              <NavLink to="/document-resource-centre">
                Document Resource Centre
              </NavLink>
            </li>
            <li onClick={closeMenu} className="contact">
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li className="menu_social_icons">
              
                <p>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-instagram"></i>
                </p>
              
            </li>
          </ul>
        </Slide>
      </div>
    </div>
  );
}

export default MobileMenu;
