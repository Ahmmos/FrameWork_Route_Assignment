import React from "react";
import Item from "../Item/Item";

export default function Portfolio() {
  return (
    <>
      
      <div className="container py-5">
        <div className="mt-5 py-5">
          <h2 className=" fw-bolder text-center fs-1">PORTFOLIO COMPONENT</h2>
          <div className="starContact  text-center">
            <i className="fa-solid fa-star my-2 text-black fs-4 "></i>
          </div>
        </div>
        <div className="row g-5">
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
}
