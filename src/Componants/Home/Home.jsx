import React from "react";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="main-background text-center d-flex flex-column justify-content-center align-items-center py-5">
          <img
            src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
            alt=""
            className=" rounded mt-5"
          />
          <h1 className="text-light fw-bolder mt-5">START FRAMEWORK</h1>
          <div className="star">
          <i className="fa-solid fa-star my-2 text-white fs-4"></i>
          </div> 
          <p className=" text-white mt-2 ">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
