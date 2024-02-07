import React from "react";
import Layer from "../Layer/Layer";
import { useState } from "react";

export default function Item() {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <Layer status={display} />
      <div
        className="col-md-4 position-relative overflow-hidden"
        onClick={(e) => setDisplay(false)}
      >
        <div className="overly rounded-3 d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-white "></i>
        </div>
        <img
          src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
          alt=""
          className="w-100 rounded-3 img-item "
        />
      </div>
      <div className="col-md-4 position-relative overflow-hidden">
        <div className="overly rounded-3 d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-white "></i>
        </div>
        <img
          src="https://routeegy.github.io/startFramework/assets/images/port2.png"
          alt=""
          className="w-100 rounded-3 img-item"
        />
      </div>
      <div className="col-md-4 position-relative overflow-hidden">
        <div className="overly rounded-3 d-flex justify-content-center align-items-center ">
          <i class="fa-solid fa-plus text-white "></i>
        </div>
        <img
          src="https://routeegy.github.io/startFramework/assets/images/port3.png"
          alt=""
          className="w-100 rounded-3 img-item"
        />
      </div>
    </>
  );
}
