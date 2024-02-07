import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <>
      <div className="footer container-fluid h-75 text-center py-5 text-white">
        <div className="footer-div  ">
          <div className="footer-item py-2 px-5 mt-0">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive </p>
            <p>Clark, 2 MO 65243</p>
          </div>
          <div className="footer-item py-2  mt-0  text-center">
            <h3 className="">AROUND THE WEB</h3>
            <div className="icons  d-flex justify-content-center mt-3">
            <i className="fa-brands fa-facebook mx-3 mt-2 fs-4 icon"></i>            
            <i className="fa-brands fa-twitter mx-3 mt-2 fs-4 icon"></i>            
            <i className="fa-brands fa-linkedin-in mx-3 mt-2 fs-4 icon"></i>            
            <i className="fa-solid fa-globe mx-3 mt-2 fs-4 icon"></i>            
            </div>
          </div>
          <div className="footer-item py-2 px-1 mt-0 ">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>

      <p className="text-center py-3 mb-0 bg-dark text-white">
        Copyright © web-developer
        <span className="text-danger"> Ahmed Mostafa</span>
      </p>
    </>
  );
}
