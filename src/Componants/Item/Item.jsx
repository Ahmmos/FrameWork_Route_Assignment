import React from "react";
import Layer from "../Layer/Layer";
import { useState } from "react";

export default function Item() {
  return (
    <>
      <div className="col-md-4 position-relative overflow-hidden">
        <div
          className="overly rounded-3 d-flex justify-content-center align-items-center "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i class="fa-solid fa-plus text-white "></i>
        </div>
        <img
          src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
          alt=""
          className="w-100 rounded-3 img-item"
        />

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  alt
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col-md-4 position-relative overflow-hidden">
        <div
          className="overly rounded-3 d-flex justify-content-center align-items-center "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          <i class="fa-solid fa-plus text-white "></i>
        </div>
        <img
          src="https://routeegy.github.io/startFramework/assets/images/port2.png"
          alt=""
          className="w-100 rounded-3 img-item"
        />


<div
          className="modal fade"
          id="exampleModal1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                  alt
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="col-md-4 position-relative overflow-hidden">
        <div
          className="overly rounded-3 d-flex justify-content-center align-items-center "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          <i class="fa-solid fa-plus text-white "></i>
        </div>
        <img
          src="https://routeegy.github.io/startFramework/assets/images/port3.png"
          alt=""
          className="w-100 rounded-3 img-item"
        />

<div
          className="modal fade"
          id="exampleModal2"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                  alt
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
