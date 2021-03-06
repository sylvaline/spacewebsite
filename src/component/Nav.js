import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Nav() {
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
    <>
      <div className="nav">
        <div className="nav_inner">
          <div className="phone">
            <div className="phone_left">
              <p>
                <span>
                  <a
                    href="mailto:okekesylvaline.com?subject=From Space Innovation Tech Hub websit"
                    alt="Email Space Innovation Tech Hub"
                  >
                    admin@spaceinnovationTH.com
                  </a>
                </span>
                <span className="bar_line">|</span>
                <span>
                  <a
                    href="tel:08167424880"
                    alt="call Space Innovation Tech Hub"
                  >
                    08025363537
                  </a>
                </span>
                <span className="bar_line">|</span>
                <span>
                  <a
                    href="tel:08167424880"
                    alt="call Space Innovation Tech Hub"
                  >
                    Login
                  </a>
                </span>
              </p>
            </div>
            <div className="phone_right">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>

          <div className={navScroll ? "main_nav open" : "main_nav"}>
            <div className="logo">
              <Link to="/">
                <img src="\image\spacelogo.png" alt="" />
              </Link>
            </div>

            <div className="menu">
              <ul>
                <li class="dropdown">
                  <button class="dropbtn ">
                    Resources
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown_content_container">
                  <ul class="dropdown-content">
                    <li className="">
                      <NavLink
                        activeClassName="nav_active"
                        to="/learning-resource-centre"
                      >
                        Learning Resource Centre
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink
                        activeClassName="nav_active"
                        to="/document-resource-centre"
                      >
                        Document Resource Centre
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink activeClassName="nav_active" to="/events">
                        Event
                      </NavLink>
                    </li>
                  </ul>
                  </div>
                  
                </li>

                <li className="main_li">
                  <NavLink activeClassName="nav_active" to="/co-working">
                    Co-working
                  </NavLink>
                </li>
                <li className="main_li">
                  <NavLink activeClassName="nav_active" to="/our-innovations">
                    Our Innovations{" "}
                  </NavLink>
                </li>
                <li className="main_li">
                  <a
                    href=" https://6130b0a2e9212cc6645fd68c--eager-lalande-7fafe4.netlify.app/"
                    alt="spaceAcademy"
                    target="blank"
                  >Academy</a>
                </li>
                <li className="main_li">
                  <NavLink activeClassName="nav_active" to="/about">
                    About{" "}
                  </NavLink>
                </li>
                <li className="contact main_li">
                  <NavLink activeClassName="nav_active" to="/contact">
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav_mobile">
          <MobileMenu />
        </div>
      </div>
    </>
  );
}

export default Nav;
