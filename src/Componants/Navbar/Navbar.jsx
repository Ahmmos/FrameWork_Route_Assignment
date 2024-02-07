import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4 fixed-top">
        <div className="container px-5 ">
          <NavLink className="navbar-brand text-white fw-bolder fs-2 " to="/home">
            Start Framework
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <NavLink
                  className="nav-link  text-white fs-5 mx-1 rounded-3"
                  aria-current="page"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link  text-white fs-5 mx-1 rounded-3"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link  text-white fs-5 mx-1 rounded-3"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
